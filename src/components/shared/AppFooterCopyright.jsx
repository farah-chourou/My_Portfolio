import { BsFillSuitHeartFill } from "react-icons/bs";

function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()} made with{" "}
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          <BsFillSuitHeartFill className="heart" />{" "}
        </span>
        &nbsp; by{"  "}
        <span className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
          {" "}
          farah chourou{" "}
        </span>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
