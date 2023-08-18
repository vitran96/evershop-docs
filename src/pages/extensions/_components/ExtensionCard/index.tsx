/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import {
  Tags,
  TagList,
  type TagType,
  type Extension,
  type Tag,
} from '@site/src/data/extensions';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({label, color, description}, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  ),
);

function ExtensionCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `extension_card_tag_${tagObject.tag}`;

        return (
          <TagComp key={index} {...tagObject} />
        );
      })}
    </>
  );
}

function ExtensionCard({extension}: {extension: Extension}) {
  return (
    <li key={extension.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <Image img={extension.preview} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={extension.npm} className={styles.showcaseCardLink}>
              {extension.title}
            </Link>
          </Heading>

          
        </div>
        <p className={styles.showcaseCardBody}>{extension.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ExtensionCardTag tags={extension.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ExtensionCard);
