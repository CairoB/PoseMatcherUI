import ImageUpload from "../ImageUpload";
import BasePage from "./BasePage";
import { useState } from "react";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import ImageApi from "../../api/ImageApi";

const readAndEncodeImage = async (input) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(input.files[0]);
  });
};

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
                onClick={async () => {
                  let dataOne = await readAndEncodeImage(imageOne);
                  let dataTwo = await readAndEncodeImage(imageTwo);
                  console.log(dataOne, dataTwo);
                  ImageApi.submitImages(dataOne, dataTwo);
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
