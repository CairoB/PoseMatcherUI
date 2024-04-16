import ImageUpload from "../ImageUpload";
import BasePage from "./BasePage";
import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
// import { Link, redirect } from "react-router-dom";
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
  const [result, setResult] = useState({})
  const [viewResults, setViewResults] = useState(false)

  useEffect(() => {
    if (result.data) {
      console.log(result)
      setViewResults(true)
    }
  }, [result])

  return (
    <>
      <BasePage
        page="Home"
        content={
          <>
            {viewResults ? (
              <>
                <h1>Score: {result.data ? result.data.MJPE : 'loading...'}</h1>
                <img src={`data:image/jpg;base64,${result.data.viz1}`} alt='visualization'></img>
                <img src={`data:image/jpg;base64,${result.data.viz2}`} alt='visualization'></img>
              </>
            ) : (
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
                  <Fab
                    variant="extended"
                    onClick={async () => {
                      let dataOne = await readAndEncodeImage(imageOne);
                      let dataTwo = await readAndEncodeImage(imageTwo);
                      let temp = await ImageApi.submitImages(dataOne, dataTwo);
                      setResult(temp)
                    }}
                  >
                    Submit
                </Fab>
                </>
              )}
            <div style={{ height: "100px" }}></div>
          </>
        }
      ></BasePage>
    </>
  );
}
