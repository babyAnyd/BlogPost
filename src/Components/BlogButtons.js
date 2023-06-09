export const BlogButtons = ({ blogData, handleEditId, handleDeleteBlog }) => {
  return (
    <div className="row g-1">
      <button
        className="btn btn-success "
        onClick={() => handleEditId(blogData.id)}
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteBlog(blogData.id)}
      >
        Delete
      </button>
    </div>
  );
};
