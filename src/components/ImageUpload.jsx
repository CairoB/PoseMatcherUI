import { Fab } from "@mui/material";
import { useState } from "react";
import "../Placeholder.png";

export default function ImageUpload(props) {
  const { image, setImage } = useState();

  return (
    <>
      <img></img>
      <Fab variant="extended">Upload</Fab>
    </>
  );
}
