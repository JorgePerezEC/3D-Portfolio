import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLAID_ID,
        {
          from_name: form.name,
          to_name: "Jorge",
          from_email: form.email,
          to_email: "jorge.perez01epn@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setisLoading(false);
        showAlert({
          show: true,
          text: "Message sent succesfully!. Thanks for your message.",
          type: "success",
        });

        setTimeout(() => {
          hideAlert(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [4000]);
      })
      .catch((error) => {
        setisLoading(false);
        console.log("The next error just ocurred: ", error);
        showAlert({
          show: true,
          text: "Sorry, your message could not be sent.<br />Please try again later.",
          type: "danger",
        });
        setTimeout(() => {
          hideAlert(false);
        }, [4000]);
      });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}
      {/* {true && <Alert {...alert} />} */}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-7'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Juan'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='text'
              name='email'
              className='input'
              placeholder='juan@email.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              type='text'
              name='message'
              className='textarea'
              rows={4}
              placeholder='Let me know how I can help you'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
