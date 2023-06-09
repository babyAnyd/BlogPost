import { useState } from "react";
import { useContext } from "react";
import { BlogComponents } from "./Content";
import { v4 as uuidV4 } from "uuid";

export const FormContent = () => {
  const { saveFormData, setSaveFormData } = useContext(BlogComponents);
  const [formData, setFormData] = useState({
    id: uuidV4(),
    title: "",
    author: "",
    date: "",
    content: "",
  });

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    const getFormData = { ...formData, [name]: value };

    setFormData(getFormData);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const addFormData = [...saveFormData, formData];
    setSaveFormData(addFormData);
    console.log(addFormData);
    resetData();
  };

  const resetData = () => {
    setFormData({
      id: uuidV4(),
      title: "",
      author: "",
      date: "",
      content: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} className="form-container">
        <div className="mb-3">
          <label htmlFor="title" className="form-label ">
            Title
          </label>
          <input
            required
            type="text"
            className="form-control input-width "
            id="title"
            onChange={handleChangeInputs}
            value={formData.title}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            required
            type="text"
            className="form-control input-width"
            id="author"
            onChange={handleChangeInputs}
            value={formData.author}
            name="author"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            required
            type="date"
            className="form-control input-width"
            id="date"
            onChange={handleChangeInputs}
            value={formData.date}
            name="date"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            required
            className="form-control"
            id="content"
            rows="4"
            onChange={handleChangeInputs}
            value={formData.content}
            name="content"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
