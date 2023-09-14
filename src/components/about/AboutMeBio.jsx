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
            <img src={Me} alt="Developer" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          Hi there! I'am <b className="text-light-blue">Chourou Farah </b>
          <br></br>A passionate <b className="text-light-blue"> programmer</b>,
          I am a <b className="text-light-blue"> Full Stack Web Developer</b>{" "}
          located in Tunisia . I'am software engeering student in Higher
          Institute of Arts Manouba Multimedia (ISAMM).
          <br></br>I love learning about{" "}
          <b className="text-light-blue"> new technologies</b>, what problems
          are they solving and How can I use them to build better and scalable
          products.
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
