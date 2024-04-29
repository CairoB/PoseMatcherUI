import { Container } from "@mui/material";
import BasePage from "../pages/BasePage";
import Typography from '@mui/material/Typography';
import ContactForm from "../ContactForm";

export default function ContactPage(props) {
    return (
        <>
          <BasePage
            page="Contact"
            content={
            <div>
              <Container maxWidth="sm" sx={{marginBottom:"100px", marginTop:"15px"}}>
              <Typography variant="h5" align="left" color="textSecondary" paragraph>
                Thank you for using Posematcher! We appreciate your feedback. If you would like to send us a message, please fill out the contact form below and we will get back to you.
                </Typography>
                <ContactForm></ContactForm>
              </Container>
            </div>
          }
          ></BasePage>
        </>
      );
}