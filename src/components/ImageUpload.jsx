import { Fab } from "@mui/material";
import "../Placeholder.png";
import { useState } from "react";

export default function ImageUpload(props) {
  const [preview, setPreview] = useState();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      props.setImage(URL.createObjectURL(event.target.files[0]));
      setPreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <div style={{ width: "auto", height: "80%" }}>
        <img style={{ maxHeight: "200px" }} src={preview}></img>
        <br />
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
