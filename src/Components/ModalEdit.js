import { Button, Modal, Form } from "react-bootstrap";

export const ModalEdit = ({
  show,
  isErrorMsg,
  //holds the value of state
  updateTitle,
  updateAuthor,
  updateDate,
  updateContent,
  //allows to manipulate the value of state
  handleChangeTitle,
  handleChangeAuthor,
  handleChangeDate,
  handleChangeContent,
  handleUpdate,
  handleBtnClose,
  //input field state changes
  setUpdateTitle,
  setUpdateAuthor,
  setUpdateDate,
  setUpdateContent,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleBtnClose} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Blog
            {isErrorMsg ? (
              <i className="text-danger fs-6 mt">
                -- Please complete all field
              </i>
            ) : (
              ""
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="modal-title">
            <Form.Label className="mb-1">Title:</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              value={updateTitle}
              onChange={(e) => handleChangeTitle(e, setUpdateTitle)}
            />
          </Form.Group>
          <Form.Group controlId="modal-author">
            <Form.Label className="mb-1">Author:</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              value={updateAuthor}
              onChange={(e) => handleChangeAuthor(e, setUpdateAuthor)}
            />
          </Form.Group>
          <Form.Group controlId="modal-date" style={{ width: "220px" }}>
            <Form.Label className="mb-1">Date:</Form.Label>
            <Form.Control
              className="mb-2"
              type="date"
              value={updateDate}
              onChange={(e) => handleChangeDate(e, setUpdateDate)}
            />
          </Form.Group>
          <Form.Group controlId="modal-content">
            <Form.Label className="mb-1">Content:</Form.Label>
            <Form.Control
              className="mb-2"
              as="textarea"
              value={updateContent}
              onChange={(e) => handleChangeContent(e, setUpdateContent)}
              rows={8}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBtnClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
