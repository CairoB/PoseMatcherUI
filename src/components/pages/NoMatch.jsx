import { Button } from "@mui/material";

const baseURL = "https://cairob.github.io/PoseMatcherUI";


// This is our 404 page. Any slug that is not matched by react-router-dom's HashRouter will display this page.
export default function NoMatch(props) {
  return (
    <>
      <h3>This part of the site doesn't exist!</h3>
      <h2>HTTP 404</h2>
      <Button href={`${baseURL}/#/home`}>Return to home</Button>
    </>
  );
}
