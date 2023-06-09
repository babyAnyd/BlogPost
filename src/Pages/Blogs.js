import { useContext, useState } from "react";
import { BlogComponents } from "../Components/Content";
import { SaveContent } from "../ReusablePage/SaveContent";
import { handleClose } from "../FormUtinsils/EditUtinsils";
import { FilterData } from "../FormUtinsils/FilteredList";
import {
  handleChangeContent,
  handleChangeTitle,
  handleChangeDate,
  handleChangeAuthor,
} from "../FormUtinsils/InputChange";

export const Blogs = () => {
  const { saveFormData, setSaveFormData } = useContext(BlogComponents);
  const [editBlogId, setEditBlogId] = useState(null);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateAuthor, setUpdateAuthor] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updateContent, setUpdateContent] = useState("");
  const [filteredDataList, setFilteredDataList] = useState(saveFormData);
  const [show, setShow] = useState(false);
  const [isErrorMsg, setIsErrorMsg] = useState(false);

  const handleBtnClose = () => {
    handleClose(setShow, setIsErrorMsg);
  };

  const handleEditId = (id) => {
    const blogs = saveFormData.find((blog) => blog.id === id);
    if (blogs) {
      setShow(true);
      setEditBlogId(id);
      setUpdateTitle(blogs.title);
      setUpdateAuthor(blogs.author);
      setUpdateDate(blogs.date);
      setUpdateContent(blogs.content);
    }
  };

  const handleUpdate = () => {
    const newUpdate = saveFormData.map((blog) =>
      blog.id === editBlogId
        ? {
            ...blog,
            title: updateTitle,
            author: updateAuthor,
            date: updateDate,
            content: updateContent,
          }
        : blog
    );
    if ((updateContent && updateAuthor && updateDate && updateTitle) === "") {
      console.log("should not be empty");
      setIsErrorMsg(true);
    } else {
      setSaveFormData(newUpdate);
      setEditBlogId(null);
      setUpdateTitle("");
      setUpdateAuthor("");
      setUpdateContent("");
      setShow(false);
      setIsErrorMsg(false);
    }
  };

  const handleDeleteBlog = (id) => {
    const deleteBlog = saveFormData.filter(
      (blogDelete) => blogDelete.id !== id
    );
    setSaveFormData(deleteBlog);
  };

  //date format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <div className="content-container">
      <FilterData
        saveFormData={saveFormData}
        setFilteredDataList={setFilteredDataList}
      />
      <div>
        {filteredDataList.length === 0 ? (
          <div className="post-container bg-light">
            <h2 className="no-post p-3">No blog posts to display</h2>
          </div>
        ) : (
          <SaveContent
            saveFormData={filteredDataList}
            formatDate={formatDate}
            show={show}
            isErrorMsg={isErrorMsg}
            //holds the value of state
            updateTitle={updateTitle}
            updateAuthor={updateAuthor}
            updateDate={updateDate}
            updateContent={updateContent}
            //allows to manipulate the value of state
            handleChangeTitle={handleChangeTitle}
            handleChangeContent={handleChangeContent}
            handleChangeDate={handleChangeDate}
            handleChangeAuthor={handleChangeAuthor}
            handleEditId={handleEditId}
            handleDeleteBlog={handleDeleteBlog}
            handleUpdate={handleUpdate}
            handleBtnClose={handleBtnClose}
            //input field state changes
            setUpdateTitle={setUpdateTitle}
            setUpdateAuthor={setUpdateAuthor}
            setUpdateDate={setUpdateDate}
            setUpdateContent={setUpdateContent}
          />
        )}
      </div>
    </div>
  );
};
