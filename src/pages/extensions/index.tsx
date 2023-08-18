/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useMemo, useEffect} from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate, {translate} from '@docusaurus/Translate';
import {useHistory, useLocation} from '@docusaurus/router';
import {usePluralForm} from '@docusaurus/theme-common';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {
  sortedExtensions,
  Tags,
  TagList,
  type Extension,
  type TagType,
} from '@site/src/data/extensions';
import Heading from '@theme/Heading';
import ExtensionTagSelect, {
  readSearchTags,
} from './_components/ExtensionTagSelect';
import  {
  type Operator,
  readOperator,
} from './_components/ExtensionFilterToggle';
import ExtensionCard from './_components/ExtensionCard';

import styles from './styles.module.css';

const TITLE = 'EverShop Extensions';
const DESCRIPTION = 'List of EverShop Extensions from the community.';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const {scrollTopPosition, focusedElementId} = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({top: scrollTopPosition});
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

const SearchNameQueryKey = 'name';

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterExtensions(
  extensions: Extension[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null,
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    extensions = extensions.filter((extension) =>
      extension.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (selectedTags.length === 0) {
    return extensions;
  }
  return extensions.filter((extension) => {
    if (extension.tags.length === 0) {
      return false;
    }
    // if (operator === 'AND') {
    //   return selectedTags.every((tag) => extension.tags.includes(tag));
    // }
    return selectedTags.some((tag) => extension.tags.includes(tag));
  });
}

function useFilteredExtensions() {
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterExtensions(sortedExtensions, selectedTags, operator, searchName),
    [selectedTags, operator, searchName],
  );
}

function ExtensionHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={'/contact-us'}>
        Submit your extension
      </Link>
    </section>
  );
}

function useSiteCountPlural() {
  const {selectMessage} = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 extension|{sitesCount} extensions',
        },
        {sitesCount},
      ),
    );
}

function ExtensionFilters() {
  return (
    <section className="container margin-top--l margin-bottom--lg flex justify-center">
      <ul className={clsx('clean-list', styles.checkboxList)}>
        {TagList.map((tag, i) => {
          const {label, description, color} = Tags[tag];
          const id = `showcase_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <ExtensionTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                  }
                />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ExtensionCards() {
  const filteredUsers = useFilteredExtensions();

  if (filteredUsers.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <Heading as="h2">
            <Translate id="showcase.usersList.noResult">No result</Translate>
          </Heading>
          {/* <SearchBar /> */}
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container">
          <div
            className={clsx(
              'margin-bottom--md',
              styles.showcaseFavoriteHeader,
            )}>
            {/* <SearchBar /> */}
          </div>
          <ul className={clsx('clean-list', styles.showcaseList)}>
            {filteredUsers.map((extension) => (
              <ExtensionCard key={extension.title} extension={extension} />
            ))}
          </ul>
        </div>
    </section>
  );
}

export default function Extension(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ExtensionHeader />
        <ExtensionFilters />
        <ExtensionCards />
      </main>
    </Layout>
  );
}
