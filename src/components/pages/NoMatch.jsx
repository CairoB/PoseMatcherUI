import { Button } from "@mui/material";

const baseURL = "https://cairob.github.io/PoseMatcherUI";

export default function NoMatch(props) {
  return (
    <>
      <h3>This part of the site doesn't exist!</h3>
      <h2>HTTP 404</h2>
      <Button href={`${baseURL}/home`}>Return to home</Button>
    </>
  );
}
