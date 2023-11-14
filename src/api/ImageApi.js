import axios from "axios";

const URL = "http://localhost:5000";

let instance = null;

class ImageApi {
  submitImages = async (imageOne, imageTwo) => {
    return axios
      .post(`${URL}/upload`, { imageOne: imageOne, imageTwo: imageTwo })
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(
          `There was an issue sending the images to the backend at ${URL}/upload`
        );
      });
  };

  returnResult = async () => {
    return axios
      .get(`${URL}/result`)
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(`Results could not be fetched from ${URL}/result`);
      });
  };
}

const getInstance = () => {
  if (instance == null) {
    instance = new ImageApi();
  }
  return instance;
};

export default getInstance();
