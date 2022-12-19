import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Formik } from 'formik';

function ContactForm() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const send = (email, name, message) => {
    // use fetch to call api to localhost:8080/contact/send with email, name, message
    // if success, show success message
    // if error, show error message

    fetch('https://db.cloud.evershop.io/contact/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, message })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setSuccess(true);
        } else {
          setError(true);
        }
      }
      )
      .catch(err => {
        console.log(err)
        setError(true);
      }
      )
  }

  return (
    <header className='hero--primary text-center'>
      <div className='mb-20'><h1>Contact Us</h1></div>
      <div className="container text-left">
        <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg'>
          <div className='md:p-10'>
            <h2 className=" mb-4">Let's get in touch</h2>
            <p>Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          <div className='p-10 bg-[#3f39a7] relative'>
            <Formik
              initialValues={{ email: '', name: '', message: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.name) {
                  errors.name = 'Name is required';
                }
                if (!values.message) {
                  errors.message = 'Message is required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                send(values.email, values.name, values.message);
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='text-white'>
                    <div>
                      <label htmlFor="email">Your Email</label>
                      <br />
                      <input
                        type="email"
                        placeholder='Enter your email'
                        name="email"
                        className='form-input rounded border-gray-400 block w-full'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (<span className='text-[#ff7474]'>{errors.email}</span>)}
                    </div>
                    <div className='mt-5'>
                      <label htmlFor="email">Your Name</label>
                      <br />
                      <input
                        type="name"
                        placeholder='Enter your name'
                        name="name"
                        className='form-input rounded border-gray-400 block w-full'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name && (<span className='text-[#ff7474]'>{errors.name}</span>)}
                    </div>
                    <div className='mt-5'>
                      <label htmlFor="email">Your Message</label>
                      <br />
                      <textarea
                        name="message"
                        placeholder='Enter your message'
                        className='form-input rounded border-gray-400 block w-full'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                      {errors.message && touched.message && (<span className='text-[#ff7474]'>{errors.message}</span>)}
                    </div>
                    {success && (<div className='text-white my-2'>Thank you! We will get back to you soon.</div>)}
                    {error && (<div className='text-[#ff7474] my-2'>Sorry! There was an error.</div>)}
                    <div className='mt-5'>
                      <button className='button button--primary w-full' type="submit" disabled={isSubmitting}>
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute disable-pointer-events z-0 pointer-events-none"
              style={{ top: "0", left: "0", right: "0", bottom: "0" }}
              fill="none"
              viewBox="0 0 1160 463"
            >
              <path
                fillRule="evenodd"
                stroke="#fff"
                strokeOpacity="0.24"
                d="M1220.2-29.472c3.88 60.252-41.77 112.247-101.99 116.134-60.21 3.886-112.18-41.807-116.07-102.059-3.885-60.252 41.77-112.247 101.99-116.133 60.21-3.887 112.18 41.806 116.07 102.058z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                stroke="#000"
                strokeOpacity="0.24"
                d="M-56.233-34.453c4.856-75.219 69.729-132.262 144.898-127.409 75.17 4.852 132.171 69.762 127.316 144.98-4.856 75.218-69.729 132.261-144.898 127.409-75.17-4.852-132.17-69.762-127.316-144.98z"
                clipRule="evenodd"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.24"
                d="M991.325 -77H1150.4940000000001V82.16900000000001H991.325z"
                transform="rotate(20.34 991.325 -77)"
              ></path>
              <rect
                width="244.949"
                height="244.949"
                stroke="#fff"
                strokeOpacity="0.24"
                rx="15"
                transform="scale(-1 1) rotate(30 215.805 -518.215)"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </header >
  );
}

export default function ContactUs() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Contact Us"
      description="Contact Us.">
      <main>
        <ContactForm />
      </main>
    </Layout>
  );
}
