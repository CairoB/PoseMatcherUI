import Navbar from "../Navbar";
import Footer from "../Footer";

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
              Copyright info...
            </div>
            <div
              style={{
                color: "white",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <span style={{ margin: "10px" }}>Privacy</span>
              <span style={{ margin: "10px" }}>Cookies</span>
              <span style={{ margin: "10px" }}>Contact</span>
            </div>
          </>
        }
      ></Footer>
    </>
  );
}
