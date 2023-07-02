// NOTE: This scroll to top is the actual working scroll to to when user clicks on the circle arrow that appears when use scrolls down.
// The other `ScrollToTop` component in components folder is for the default react scroll to top behavior on route visit.

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { AiOutlineMessage } from "react-icons/ai";
import HireMeModal from "../components/HireMeModal";
import me from "../images/Avatar/contact-icon.png";
import messageAvatar from "../images/Avatar/messageAvatar.png";

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  });

  const scrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", scrollToTop);
  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  return (
    <Box
      className="scrollToTop "
      sx={{
        height: 85,
        width: 65,
        borderRadius: 50,
        right: 2,
        bottom: 5,
        display: showScroll ? "flex" : "none",
        padding: 5,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "transparent",
        }}
        icon={
          <SpeedDialIcon
            icon={
              <img
                src={me}
                // className="plugin-contact "
                alt="Send me email"
                width="62"
                height="62"
                style={{ position: "absolute", bottom: 0.5 }}
              />
            }
            openIcon={
              <img
                src={messageAvatar}
                alt="Send me email"
                width="55"
                height="55"
                style={{ position: "relative", bottom: 19 }}
              />
            }
          />
        }
      >
        <SpeedDialAction
          tooltipTitle="scrollToTop"
          icon={<FiChevronUp onClick={backToTop} className="Scroll ToT Top" />}
        />{" "}
        <SpeedDialAction
          tooltipTitle="Let's Talk !"
          icon={
            <AiOutlineMessage
              onClick={showHireMeModal}
              className="scrollToTop"
            />
          }
        />
      </SpeedDial>
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </Box>
  );
};

export default useScrollToTop;
