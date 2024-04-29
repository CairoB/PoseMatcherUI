import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function BasePage(props) {
  return (
    <>
      <Navbar currentPage={props.page}></Navbar>
      <div style={{ height: "" }}></div>
      {props.content}
      <Footer
        content={
          <>
            <div
              style={{
                color: "white",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Link to="/copyright" style={{ color: "white", textDecoration: 'none'}}>
                Copyright © 2024
              </Link>
            </div>
            <div
              style={{
                color: "white",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <span style={{ margin: "10px" }}>
              <Link to="/privacy" style={{ color: "white", textDecoration: 'none' }}>
                Privacy
              </Link>
              </span>
              <span style={{ margin: "10px" }}>
              <Link to="/contact" style={{ color: "white", textDecoration: 'none' }}>
                Contact
              </Link>
              </span>
            </div>
          </>
        }
      ></Footer>
    </>
  );
}
