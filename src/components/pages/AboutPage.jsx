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
              <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              About PoseMatcher
            </Typography>
              <Typography variant="h5" align="left" color="textSecondary" paragraph>
              PoseMatcher is a cutting-edge tool that utilizes advanced AI technology to compare the poses of individuals in two user-submitted images. By employing state-of-the-art 3D pose detection algorithms, PoseMatcher accurately extracts the poses from each image and assigns a similarity score based on the comparison of the two poses.
              Our mission is to provide a powerful and accessible tool that can be leveraged across a wide range of applications, including physical therapy, insurance fraud detection, exercise science, sports medicine, and healthcare. By offering precise pose comparison and visualization, PoseMatcher aims to revolutionize the way professionals in these fields analyze and compare human body positions.
              How it works:
            </Typography>
              <Typography variant="h5" align="left" color="textSecondary" paragraph>
              Users submit two images, each containing one person.
              PoseMatcher's AI-powered 3D pose detection technology extracts the poses from each image.
              The tool compares the two poses and assigns a similarity score based on the analysis.
              The website visualizes the two images, allowing users to see the comparison results.
            </Typography>
              <Typography variant="h5" align="left" color="textSecondary" paragraph>
              PoseMatcher's technology has the potential to streamline processes, improve accuracy, and provide valuable insights across various industries. For example:
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            Physical therapists can use PoseMatcher to track patient progress and ensure proper form during rehabilitation exercises.
            Insurance companies can employ the tool to detect potential cases of fraud by comparing claimed injuries with actual body positions.
            Exercise scientists and sports medicine professionals can utilize PoseMatcher to analyze and optimize athlete performance.
            Healthcare providers can use the tool to monitor patient posture and identify potential issues related to body positioning.
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            Physical therapists can use PoseMatcher to track patient progress and ensure proper form during rehabilitation exercises.
            Insurance companies can employ the tool to detect potential cases of fraud by comparing claimed injuries with actual body positions.
            Exercise scientists and sports medicine professionals can utilize PoseMatcher to analyze and optimize athlete performance.
            Healthcare providers can use the tool to monitor patient posture and identify potential issues related to body positioning.
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            While this website serves as a demonstration of PoseMatcher's capabilities, our primary goal is to offer this technology as a versatile tool that can be integrated into a wide range of applications. We are committed to continually improving and expanding the functionality of PoseMatcher to better serve the needs of our users.
            If you are interested in learning more about how PoseMatcher can benefit your organization or industry, please don't hesitate to reach out to our team. We are excited to collaborate with partners who share our vision of leveraging AI technology to drive innovation and improve outcomes across various fields.
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
