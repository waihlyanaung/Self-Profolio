import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import thank from "../images/thanks.gif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = () => toast("Email Successfully Sent, I will contact you");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isSubmitting) {
      setIsSubmitting(true);
      
      emailjs
        .sendForm(
          "service_y8ln8ea",
          "template_q1dtd2n",
          form.current,
          "5WHqgObkYTmB-g9ip"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            notify();
            form.reset()
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
          
        });
    }
  };

  return (
    <section name='contact'>
      <div className="mx-10 sm:mx-24 mb-10 sm:flex">
        <div className="sm:w-[50%] w-[100%]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex items-start flex-col w-full text-base"
          >
            <label className="mt-4">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full h-35 p-2 outline-none rounded-5 border border-gray-300 focus:border-green-500"
              required
            />
            <label className="mt-4">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full h-35 p-2 outline-none rounded-5 border border-gray-300 focus:border-green-500"
              required
            />
            <label className="mt-4">Message</label>
            <textarea
              name="message"
              className="w-full max-w-full min-w-full h-100 max-h-100 min-h-100 p-2 outline-none rounded-5 border border-gray-300 focus:border-green-500"
              required
            />
            <input
              type="submit"
              value={isSubmitting ? "Sending..." : "Send"}
              disabled={isSubmitting}
              className="mt-8 w-[30%] mx-36 h-9 rounded-md cursor-pointer bg-orange-500 text-white"
            />
          </form>
          <ToastContainer />
        </div>
        <div>
          <img src={thank} className="mx-10 sm:mx-20 w-[70%] mt-6" alt="Thank you" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
