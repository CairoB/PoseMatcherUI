import ImageUpload from "../ImageUpload";
import BasePage from "./BasePage";
import { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import ImageApi from "../../api/ImageApi";


// readAndEncodeImage takes uploaded image data and
// converts it into a format readable by the backend.
const readAndEncodeImage = async (input) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(input.files[0]);
  });
};


// HomePage is where users can interact with our backend server and try Posematcher for themselves.
// Currently, this website demo features the ability to compare two image poses and view the AI
// three-dimensional visualization used in our calculations.
//
// We trigger the calculations on the server by calling ImageApi.submitImages().
// See the class definition for ImageApi to read more details.
export default function HomePage(props) {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [result, setResult] = useState({})
  const [viewResults, setViewResults] = useState(false)
  const [calculating, setCalculating] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(true)

  useEffect(() => {
    if (result.data) {
      console.log(result)
      setViewResults(true)
    }
  }, [result])

  useEffect(() => {
    if (imageOne && imageTwo) {
      setDisableSubmit(false)
    }
  }, [imageOne, imageTwo])

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
                  {
                    calculating ? (
                      <>
                        <CircularProgress></CircularProgress>
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
                          <Button
                            sx={{ color: 'gray', border: "1px gray solid" }}
                            disabled={disableSubmit}
                            variant="outlined"
                            onClick={async () => {
                              setCalculating(true)
                              setDisableSubmit(true)
                              let dataOne = await readAndEncodeImage(imageOne);
                              let dataTwo = await readAndEncodeImage(imageTwo);
                              let temp = await ImageApi.submitImages(dataOne, dataTwo);
                              setResult(temp)
                            }}
                          >
                            Submit
                  </Button>
                        </>
                      )
                  }
                </>
              )}
            <div style={{ height: "100px" }}></div>
          </>
        }
      ></BasePage>
    </>
  );
}
