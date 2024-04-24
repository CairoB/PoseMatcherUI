import { Button } from "@mui/material";
import placeholder from "../Placeholder.png";
import { useState } from "react";

export default function ImageUpload(props) {
  const [preview, setPreview] = useState(placeholder);

  const onImageChange = (event) => {
    if (event.target) {
      if (event.target.files) {
        props.setImage(event.target);
        setPreview(URL.createObjectURL(event.target.files[0]));
      }
    }
  };

  return (
    <>
      <div style={{ width: "auto", height: "80%" }}>
        <img style={{ maxWidth: "400px" }} src={preview} alt='placeholder'></img>
        <div style={{ height: "10px" }}></div>
        <Button variant="outlined" component="label">
          Upload
          <input
            hidden
            type="file"
            onChange={onImageChange}
            id="file-input"
            name="ImageStyle"
          />
        </Button>
      </div>
    </>
  );
}
