import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavButton({ text, slug, isHere, ...props }) {
  return (
    <>
      <Link style={{ ...props.style, margin: "0px 20px", textDecoration: 'none' }} to={slug}>
        <Button sx={{ color: 'gray', border: "1px gray solid", textDecoration: 'none' }} variant="outlined" disabled={isHere}>
          {text}
        </Button>
      </Link>
    </>
  );
}
