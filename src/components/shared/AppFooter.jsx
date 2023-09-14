import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";
import AppFooterCopyright from "./AppFooterCopyright";

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/farah-chourou",
  },

  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/farah-chourou-68917b188/",
  },
  {
    id: 1,
    icon: <FiFacebook />,
    url: "https://www.facebook.com/fafou.ch.98/",
  },
  {
    id: 5,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/farah_chourou/",
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5 section-title">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="dark:text-gray-400 text-light-blue hover:text-light-blue dark:hover:text-light-blue cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
