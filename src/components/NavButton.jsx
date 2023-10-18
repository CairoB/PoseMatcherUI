import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavButton({ text, slug, isHere, ...props }) {
  return (
    <>
      <Link style={{ ...props.style, margin: "0px 20px" }} to={slug}>
        <Button disabled={isHere}>{text}</Button>
      </Link>
    </>
  );
}
