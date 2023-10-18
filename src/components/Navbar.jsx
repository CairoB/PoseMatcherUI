import NavButton from "./NavButton";

export default function Navbar(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "auto",
          height: "100px",
          background: "white",
          border: "3px solid #2d3648",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            margin: "0px 50px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            <h1>Posematcher</h1>
          </div>

          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <NavButton
              text={"Home"}
              isHere={props.currentPage === "Home"}
              slug="/home"
            ></NavButton>
            <NavButton
              text={"About"}
              isHere={props.currentPage === "About"}
              slug="/about"
            ></NavButton>
          </div>
        </div>
      </div>
    </>
  );
}
