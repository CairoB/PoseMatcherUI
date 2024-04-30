import { Container } from "@mui/material";
import BasePage from "../pages/BasePage";
import Typography from '@mui/material/Typography';

export default function PrivacyPage(props) {
    return (
        <>
          <BasePage
            page="Privacy"
            content={
            <div>
              <Container maxWidth="sm" sx={{marginBottom:"100px", marginTop:"15px"}}>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Welcome to Posematcher! By using our services, you agree to these terms. Please read them carefully.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                1. Use of Service
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                Posematcher provides a platform for comparing poses between two images. By using our service, you agree to use it only for lawful purposes and in accordance with these terms.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                2. User Conduct
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                You agree not to use Posematcher to:
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                •Violate any laws or regulations.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                •Infringe upon the rights of others.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                •Upload or share any inappropriate or offensive content.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                •Attempt to disrupt or interfere with the service.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                3. Intellectual Property
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                All content provided by Posematcher, including but not limited to text, graphics, logos, and images, is the property of Posematcher or its licensors and is protected by copyright laws. You agree not to reproduce, distribute, or create derivative works based on such content without explicit permission.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                4. Limitation of Liability
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                Posematcher is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of the service. In no event shall Posematcher be liable for any damages arising from the use or inability to use the service.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                5. Changes to Terms
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                We reserve the right to update or modify these terms at any time without prior notice. Your continued use of Posematcher after any such changes constitutes your acceptance of the new terms.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                Privacy Policy
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                1. Information We Collect
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                Posematcher may collect personal information such as your name, email address, and images uploaded to the service. We may also collect non-personal information such as device information and usage data.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                2. Use of Information
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                We use the information collected to provide and improve our services, communicate with users, and personalize the user experience. We do not sell or share your personal information with third parties except as required by law or with your consent.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                3. Data Security
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                We take reasonable measures to protect the security of your information and prevent unauthorized access or disclosure.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                4. Cookies
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                Posematcher may use cookies and similar technologies to track user activity and improve the service. You can set your browser to refuse cookies or alert you when cookies are being sent.
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                5. Third-Party Links
                </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                Our service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such websites.
                </Typography>
              </Container>
            </div>
          }
          ></BasePage>
        </>
      );
}