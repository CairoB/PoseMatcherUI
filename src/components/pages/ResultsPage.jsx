import { Container } from "@mui/material";
import BasePage from "../pages/BasePage";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ResultsPage(props) {
    return (
      <>
        <BasePage
          page="Results"
          content={
          <div>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              This is the results page
            </Typography>
          </div>
        }
        ></BasePage>
      </>
    );
  }