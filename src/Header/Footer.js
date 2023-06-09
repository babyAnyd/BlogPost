export const Footer = () => {
  return (
    <footer
      className="footer d-flex align-items-center justify-content-center p-4"
      style={{ height: "100px", marginTop: "60px" }}
    >
      <div className="container p-3">
        <div className="footer-body text-center">
          <p className="p-0 m-0">Contact me at mywebsite@gmail.com</p>
          <address className="p-0 m-0">
            123 Main St. New York, State 1235
          </address>
          <span className="text-muted">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
