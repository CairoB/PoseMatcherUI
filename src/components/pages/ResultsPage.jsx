import { Container } from "@mui/material";
import BasePage from "../pages/BasePage";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useQuery } from "react-query";
import ImageApi from "../../api/ImageApi";

export default function ResultsPage(props) {
  const { data, status } = useQuery("results", ImageApi.returnResult());

  useEffect(() => {
    console.log(status);
  }, [data]);

  return (
    <>
      <BasePage
        page="Results"
        content={
          <div>
            {(() => {
              console.log(data);
              return status == "loading" ? (
                <Typography
                  variant="h3"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  We're calculating your results now...
                </Typography>
              ) : status == "error" ? (
                <>
                  <Typography
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    Uh oh!
                  </Typography>

                  <Typography
                    variant="h3"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    We ran into a server error. Our backend might be down
                    temporarily!
                  </Typography>
                </>
              ) : (
                data
              );
            })()}
          </div>
        }
      ></BasePage>
    </>
  );
}
