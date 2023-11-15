import { useState, useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleProjectData &&
        singleProjectData.map((project) =>
          project.img.map((item, index) => (
            <div className="mb-10 sm:mb-0" key={index}>
              <img
                loading="lazy"
                src={item}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={item}
                onClick={() => handleImageClick(item)}
              />
            </div>
          ))
        )}

      {/* Material-UI Dialog */}
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogContent style={{ margin: 0, padding: 0 }}>
          <img
            loading="lazy"
            src={selectedImage}
            className="rounded-xl"
            alt={selectedImage}
            style={{ width: "200%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;
