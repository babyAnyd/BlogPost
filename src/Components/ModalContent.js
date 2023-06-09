import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export const ContentPost = ({ blogData }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleModalOpen} className="m-3 ">
        Read More
      </Button>
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{blogData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {blogData.content}
          <p className="mb-0 mt-4 text-muted fs-5">{blogData.author}</p>
          <p className="">
            <i>
              <small>Posted on {blogData.date}</small>
            </i>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
