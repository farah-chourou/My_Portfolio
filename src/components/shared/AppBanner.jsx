/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../../images/pcavatar.png";
import developerDark from "../../images/pcavatar.png";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import cv from "./CV_Farah.pdf";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    " Full Stack JS Developer ",
    "Software Engineer",
    "Freelancer",
  ];
  const currentText = texts[textIndex];
  const textLength = currentText.length;
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    let timeout;

    const animateText = (index, count = 0) => {
      if (count <= textLength) {
        setIsVisible(true);
        setTextIndex(index);
        timeout = setTimeout(() => {
          animateText(index, count + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsVisible(false);
          setTextIndex((index + 1) % texts.length);
        }, 3000); // Delay of 3 seconds between text changes

        if (index === texts.length - 1) {
          setIsAnimationComplete(true);
        }
      }
    };

    animateText(textIndex);

    return () => clearTimeout(timeout);
  }, [textIndex, textLength, texts.length]);

  const handleDownload = () => {
    const pdfFilePath = "/CV_Farah_CHOUROU_EN.pdf";
    window.open(pdfFilePath, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-5"
    >
      {/* <div className="w-full md:w-1/3 order-1 md:order-2">
        <div className="flex justify-center md:justify-end">
          <a
            href="https://www.facebook.com/fafou.ch.98/"
            className="social-link"
          >
            <GrFacebookOption className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/farah-chourou-68917b188/"
            className="social-link"
          >
            <RiLinkedinFill className="social-icon" />
          </a>
          <a href="https://github.com/farah-chourou" className="social-link">
            <IoLogoGithub className="social-icon" />
          </a>
        </div>
  </div>*/}
      <div className="w-full md:w-2/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Hi!
          <br />
          I'm Farah Chourou,{" "}
          <div>
            <AnimatePresence exitBeforeEnter>
              {isVisible && (
                <motion.h1
                  key={currentText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-block"
                >
                  <div className="text-light-blue">
                    {" "}
                    {currentText.substring(0, textLength)}{" "}
                  </div>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          Software engineering, addicted success and learning
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            href={cv}
            download="cv.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-light-blue dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900  text-light-blue  duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
            <div className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </div>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-1/4 text-right float-right mt-8 sm:mt-0"
      >
        <img
          src={activeTheme === "dark" ? developerLight : developerDark}
          alt="Developer"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
