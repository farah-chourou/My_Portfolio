import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import { useState } from "react";
import emailjs from "emailjs-com";
import { send } from "emailjs-com";

const selectOptions = [
  "Web Application",
  "Mobile Application",
  "3D Modeling",
  "Augmented Reality",
  "Game Development ",
];

const HireMeModal = ({ onClose, onRequest }) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div
              style={{ height: 10 }}
              className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
            >
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="max-w-xl m-4 text-left"
              >
                <div className="">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="name"
                    name="Name"
                    type="text"
                    required=""
                    placeholder="Name"
                    aria-label="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="email"
                    name="Email"
                    type="text"
                    required=""
                    placeholder="Email"
                    aria-label="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="subject"
                    name="Type"
                    type="text"
                    required=""
                    aria-label="Project Category"
                    onChange={(e) => setType(e.target.value)}
                  >
                    {selectOptions.map((option) => (
                      <option
                        className="text-normal sm:text-md"
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="message"
                    name="Description"
                    cols="14"
                    rows="6"
                    aria-label="Details"
                    placeholder="Project description"
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="mt-6 pb-4 sm:pb-1">
                  <span
                    type="submit"
                    className="px-4
										sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-light-blue
											hover:bg-light-blue-2
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Submit Request"
                  >
                    <Button title="Send Request" type="submit" />
                  </span>
                </div>
              </form>
            </div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <span
                onClick={onClose}
                type="button"
                className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
              >
                <Button title="Close" />
              </span>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
