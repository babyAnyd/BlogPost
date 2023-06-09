import { FormContent } from "../Components/FormContent";
import { Blogs } from "./Blogs";
export const Home = () => {
  return (
    <div className="content-container">
      <div className="home">
        <FormContent />
        <Blogs />
      </div>
    </div>
  );
};
