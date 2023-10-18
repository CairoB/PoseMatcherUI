import ImageUpload from "../ImageUpload";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BasePage from "./BasePage";

export default function HomePage(props) {
  return (
    <>
      <BasePage page="Home" content={<ImageUpload></ImageUpload>}></BasePage>
    </>
  );
}
