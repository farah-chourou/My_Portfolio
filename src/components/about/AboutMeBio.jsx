import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import Me from "../../images/me4.png";
import { BsCheck } from "react-icons/bs";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/3 mb-7 sm:mb-0">
        <div className="rounded-image-container mx-auto sm:mx-0">
          <div className="circular-image mx-auto sm:mx-0 ">
            <img src={Me} alt="Developer" />
          </div>
        </div>
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          Hi there! I'm <b className="text-light-blue">Chourou Farah</b>, a
          passionate programmer and{" "}
          <b className="text-light-blue">Full Stack Web Developer</b> based in
          Tunisia. I specialize in JavaScript and its frameworks like React,
          Nest.js, Next.js, and Node.js.
          <br></br>
          As a <b className="text-light-blue">software engineer</b>, I love
          exploring new technologies, understanding the problems they solve, and
          leveraging them to create better and more scalable products.
          <br></br>
          Recently, I've been interested in Large Language Models (LLMs) like
          OpenAI's GPT-4.
          <br></br>
          My goal is to stay updated with technological advancements to build
          better and more scalable products.
          <h3 style={{ marginTop: 20 }}>Why Choose Me?</h3>{" "}
          <div className="ml-2 mt-2">
            <div
              className="grid grid-cols-2 gap-4 m-2"
              style={{ fontSize: 15 }}
            >
              <ul>
                <li>
                  {" "}
                  <div className="col-span-1 flex ">
                    <BsCheck className="icon-about" />
                    <div className="">Well-organised person</div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="col-span-1 flex">
                    <BsCheck className="icon-about" />
                    <div>Problem solver</div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="col-span-1 flex">
                    <BsCheck className="icon-about" />
                    <div> Employee with high attention to detail</div>
                  </div>
                </li>
              </ul>

              <div className="col-span-1">
                <ul>
                  <li>
                    {" "}
                    <div className="col-span-1 flex ">
                      <BsCheck className="icon-about" />
                      <div className=""> Creative person</div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="col-span-1 flex">
                      <BsCheck className="icon-about" />
                      <div> Punctual person</div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="col-span-1 flex">
                      <BsCheck className="icon-about" />
                      <div>Independent</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutMeBio;
