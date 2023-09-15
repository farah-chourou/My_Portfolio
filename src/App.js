import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, Redirect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";
import { useLottie } from "lottie-react";
import animationData from "./images/animations/loading.json";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const { View } = useLottie(defaultOptions);

  return (
    <AnimatePresence>
      {" "}
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router basename="/My_Portfolio">
          <ScrollToTop />
          <AppHeader />

          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                }}
              >
                <div style={{ width: "100px", height: "100px" }}>{View}</div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="projects/:id/single-project"
                element={<ProjectSingle />}
              />

              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
