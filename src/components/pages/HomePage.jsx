import ImageUpload from "../ImageUpload";
import BasePage from "./BasePage";
import { useState } from "react";
import { Fab } from "@mui/material";

export default function HomePage(props) {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();

  return (
    <>
      <BasePage
        page="Home"
        content={
          <>
            <ImageUpload image={imageOne} setImage={setImageOne}></ImageUpload>
            <ImageUpload image={imageTwo} setImage={setImageTwo}></ImageUpload>
            <Fab
              variant="extended"
              onClick={() => {
                console.log(imageOne);
                console.log(imageTwo);
              }}
            >
              Sumbit
            </Fab>
          </>
        }
      ></BasePage>
    </>
  );
}
