import axios from "axios";

const URL = "";

let instance = null;

class ImageApi {
  submitImages(imageOne, imageTwo) {
    return axios
      .post(`URL/upload`, { imageOne: imageOne, imageTwo: imageTwo })
      .then((result) => {
        return result;
      });
  }

  returnResult() {
    return axios
      .get(`URL/result`)
      .then((result) => {
        return result;
      });
  }
}

const getInstance = () => {
  if (instance == null) {
    instance = new ImageApi();
  }
  return instance;
};

export default getInstance();
