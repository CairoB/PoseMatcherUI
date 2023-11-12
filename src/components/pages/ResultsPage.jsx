import { Container } from "@mui/material";
import BasePage from "../pages/BasePage";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageApi from "../../api/ImageApi";
import { useState, useEffect } from "react";

export default function ResultsPage(props) {
  const imageAPI = ImageApi();
  const [imageData, setImageData] = useState(null);

  const fetchResult = () => {
    imageAPI.returnResult()
      .then((result) => {
        setImageData(result.data); // Assuming the API returns the image data
      })
      .catch((error) => {
        console.error("Error fetching result:", error);
      });
  };

  useEffect(() => {
    fetchResult();
  }, []);

    return (
      <>
        <BasePage
          page="Results"
          content={
            <Container>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              This is the results page
            </Typography>

            {imageData && (
              <img src={imageData.url} alt="Result" style={{ maxWidth: "100%" }} />
            )}
          </Container>
        }
        ></BasePage>
      </>
    );
  }