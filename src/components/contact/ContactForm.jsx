import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { useState } from "react";
import emailjs from "emailjs-com";
import { send } from "emailjs-com";

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Type, setType] = useState("");
  const [Description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(Email);

      const templateParams = {
        subject: Type,
        name: Name,
        email: Email,
        message: Description,
      };
      console.log(Name);
      emailjs.init("OlS35eV6LM6owEHWL");

      await send("service_wjmhy36", "template_6msoal9", templateParams);

      console.log("send");
    } catch (error) {
      console.error("Failed to send email.", error);
    }
  };
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <label
            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
            htmlFor="message"
          >
            Name
          </label>
          <input
            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            placeholder="Full Name"
            type="text"
            name="Name"
            placeholderText="Your Name"
            ariaLabelName="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
            htmlFor="message"
          >
            Email
          </label>
          <input
            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            placeholder="email"
            type="email"
            name="Email"
            placeholderText="Your email"
            ariaLabelName="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
            htmlFor="message"
          >
            Subject
          </label>
          <input
            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            placeholder="Subject"
            type="text"
            inputId="subject"
            name="Type"
            placeholderText="Subject"
            ariaLabelName="Subject"
            onChange={(e) => setType(e.target.value)}
            value={Type}
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="Description"
              cols="14"
              rows="6"
              aria-label="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
