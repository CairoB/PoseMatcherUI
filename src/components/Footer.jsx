export default function Footer(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "10%",
          background: "#2d3648",
          flexWrap: "wrap",
          gap: "25px",
          position: "fixed",
          bottom: 0,
          left: 0,
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
          {props.content}
        </div>
      </div>
    </>
  );
}
