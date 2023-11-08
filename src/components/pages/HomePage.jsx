import ImageUpload from "../ImageUpload";
import BasePage from "./BasePage";
import { useState } from "react";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();

  return (
    <>
      <BasePage
        page="Home"
        content={
          <>
            <h2>Pose Match</h2>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <ImageUpload
                image={imageOne}
                setImage={setImageOne}
              ></ImageUpload>
              <ImageUpload
                image={imageTwo}
                setImage={setImageTwo}
              ></ImageUpload>
            </div>
            <div
              style={{
                backgroundColor: "lightgray",
                height: "2px",
                width: "80%",
                margin: "auto",
                marginTop: "35px",
                marginBottom: "35px",
              }}
            ></div>
            <Link to="/results">
            <Fab
              variant="extended"
              onClick={() => {
                console.log(imageOne);
                console.log(imageTwo);
              }}
            >
              Submit
            </Fab>
            </Link>
            <div style={{ height: "100px" }}></div>
          </>
        }
      ></BasePage>
    </>
  );
}
