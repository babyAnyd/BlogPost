import { Routes, Route } from "react-router-dom";
import { BlogData } from "../Data/BlogData";
import { Home } from "../Pages/Home";
import { Blogs } from "../Pages/Blogs";
import { Contact } from "../Pages/Contact";
import { createContext, useState } from "react";

export const BlogComponents = createContext();

export const Contents = () => {
  const [saveFormData, setSaveFormData] = useState(BlogData);

  return (
    <BlogComponents.Provider value={{ saveFormData, setSaveFormData }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BlogComponents.Provider>
  );
};
