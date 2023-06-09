import React from "react";
import { ModalEdit } from "../Components/ModalEdit";
import { BlogButtons } from "../Components/BlogButtons";
import { ContentPost } from "../Components/ModalContent";

export const SaveContent = ({
  saveFormData,
  handleDeleteBlog,
  handleEditId,
  formatDate,
  //modal
  show,
  isErrorMsg,
  updateTitle,
  updateAuthor,
  updateDate,
  updateContent,
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
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-3 added-blog mx-auto mt-5">
        {saveFormData.map((blogData) => {
          return (
            <div className="col" key={blogData.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{blogData.title}</h4>
                  <p className="card-text">
                    By {blogData.author} on {formatDate(blogData.date)}
                  </p>
                  <p className="card-text">{blogData.content}</p>
                </div>
                <div>
                  <ContentPost blogData={blogData} />
                </div>
                <div className="card-footer">
                  <BlogButtons
                    blogData={blogData}
                    handleEditId={handleEditId}
                    handleDeleteBlog={handleDeleteBlog}
                  />
                </div>
              </div>
              <ModalEdit
                show={show}
                isErrorMsg={isErrorMsg}
                updateTitle={updateTitle}
                updateAuthor={updateAuthor}
                updateDate={updateDate}
                updateContent={updateContent}
                handleChangeTitle={handleChangeTitle}
                handleChangeContent={handleChangeContent}
                handleChangeDate={handleChangeDate}
                handleChangeAuthor={handleChangeAuthor}
                handleUpdate={handleUpdate}
                handleBtnClose={handleBtnClose}
                ///input field state changes
                setUpdateTitle={setUpdateTitle}
                setUpdateAuthor={setUpdateAuthor}
                setUpdateDate={setUpdateDate}
                setUpdateContent={setUpdateContent}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
