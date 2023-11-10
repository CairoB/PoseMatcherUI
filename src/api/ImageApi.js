import axios from "axios";

const URL = "";

class ImageApi {
  submitImages(imageOne, imageTwo) {
    return axios
      .post(`URL/upload`, { imageOne: imageOne, imageTwo: imageTwo })
      .then((result) => {
        return result;
      });
  }
}

const getInstance = () => {
  let instance = new ImageApi();
  return instance;
};

export default getInstance;
