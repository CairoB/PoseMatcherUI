import { Container } from "@mui/material";
import BasePage from "../pages/BasePage";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function AboutPage(props) {
  return (
    <>
      <BasePage
        page="About"
        content={
          <div>
            <Container maxWidth="sm" sx={{ marginBottom: "100px", marginTop: "15px" }}>
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                About Us
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                At PoseMatcher, we're passionate about harnessing the limitless potential of AI-driven human pose estimation. We understand that the world of human pose estimation software is on the brink of exponential growth, and we're here to equip developers with the tools they need to thrive in this dynamic landscape.
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                The future of human pose estimation is bright, and we're excited to be a part of it. We firmly believe that as this technology evolves, it will play a pivotal role in various industries, from healthcare to entertainment and beyond. With PoseMatcher, we aim to ease the journey for developers by providing robust and adaptable tools.
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                In a world where innovation is key, time is of the essence. Rather than reinventing the wheel, we offer developers a dependable foundation to build upon. Our tools leverage the power of the open-source MMPose project, making it easier than ever to jumpstart your own human pose estimation models. We want to help you save time and resources, allowing you to focus on what truly matters - pushing the boundaries of what's possible. With PoseMatcher, you can trust that your tools will evolve with you, ensuring long-term success.
            </Typography>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button sx={{ color: 'gray', border: "1px gray solid" }} variant="outlined">Contact Us</Button>
              </Link>
            </Container>
          </div>
        }
      ></BasePage>
    </>
  );
}
