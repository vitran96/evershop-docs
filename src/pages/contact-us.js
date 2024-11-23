import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Formik } from "formik";

function ContactForm() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const send = (email, name, message, setSubmitting) => {
    // use fetch to call api to localhost:8080/contact/send with email, name, message
    // if success, show success message
    // if error, show error message

    fetch("https://evershop.io/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setSuccess(true);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <header className="bg-green-conner bg-[#FCFCFC] py-16">
      <div className="container text-left pt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] lg:gap-[170px]">
          <div className="">
            <h2 className="mb-2 w-full lg:w-[525px]">
              Let Us Help You Succeed -{" "}
              <span className="text-primary">Get in Touch</span> Today!
            </h2>
            <p>
              Have questions? Need tailored support? Our team is here to guide
              you every step of the way!
            </p>
          </div>
          <div className="p-5 lg:p-10 border border-Neutrals-06 rounded-3xl relative bg-white">
            <Formik
              initialValues={{ email: "", name: "", message: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.name) {
                  errors.name = "Name is required";
                }
                if (!values.message) {
                  errors.message = "Message is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                send(values.email, values.name, values.message, setSubmitting);
              }}>
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
                  <div className="">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-Neutrals-01 text-sm font-medium pb-1 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        className="form-input p-3 border-Neutrals-06 rounded-lg block w-full"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <span className="text-[#C60000]">{errors.email}</span>
                      )}
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="text-Neutrals-01 text-sm font-medium pb-1 block">
                        Your Name
                      </label>
                      <input
                        type="name"
                        placeholder="Enter your name"
                        name="name"
                        className="form-input p-3 border-Neutrals-06 rounded-lg block w-full"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name && (
                        <span className="text-[#C60000]">{errors.name}</span>
                      )}
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="text-Neutrals-01 text-sm font-medium pb-1 block">
                        Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Enter your message"
                        className="form-input p-3 border-Neutrals-06 rounded-lg block w-full min-h-[128px]"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                      {errors.message && touched.message && (
                        <span className="text-[#C60000]">{errors.message}</span>
                      )}
                    </div>
                    {success && (
                      <div className="text-white my-2">
                        Thank you! We will get back to you soon.
                      </div>
                    )}
                    {error && (
                      <div className="text-[#C60000] my-2">
                        Sorry! There was an error. Please try again later.
                      </div>
                    )}
                    <div className="mt-6">
                      <button
                        className="button button--primary w-full p-3 text-base"
                        type="submit"
                        disabled={isSubmitting}>
                        Submit
                      </button>
                      <p className="italic text-sm text-Neutrals-04">
                        * Your information is secure with us.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function ContactUs() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Contact Us"
      description="Contact Us."
      wrapperClassName="contact__us">
      <main>
        <ContactForm />
      </main>
    </Layout>
  );
}
