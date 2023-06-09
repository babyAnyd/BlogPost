import { MenuList } from "./MenuList";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-dark ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-around ">
          <ul className="navbar-nav">
            {MenuList.map((menu) => {
              return (
                <li key={menu.id} className="nav-item mx-md-5">
                  <Link to={menu.links} className="nav-link text-light">
                    {menu.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
