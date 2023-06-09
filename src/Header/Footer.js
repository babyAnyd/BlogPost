export const Footer = () => {
  return (
    <footer
      className="footer d-flex align-items-center justify-content-center p-4"
      style={{ height: "100px", marginTop: "60px" }}
    >
      <div className="container p-3">
        <div className="footer-body text-center">
          <p className="p-0 m-0">Contact me at baksBlogSpot@gmail.com</p>
          <address className="p-0 m-0">Cebu, Philippines</address>
          <span className="text-muted">
            © {new Date().getFullYear()} Blog site. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
