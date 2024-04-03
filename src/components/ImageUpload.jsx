import { Fab } from "@mui/material";
import "../Placeholder.png";
import { useState } from "react";

export default function ImageUpload(props) {
  const [preview, setPreview] = useState("../Placeholder.png");

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
        <img style={{ maxWidth: "400px" }} src={preview}></img>
        <div style={{ height: "10px" }}></div>
        <Fab variant="extended" component="label">
          Upload
          <input
            hidden
            type="file"
            onChange={onImageChange}
            id="file-input"
            name="ImageStyle"
          />
        </Fab>
      </div>
    </>
  );
}
