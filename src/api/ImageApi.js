import axios from "axios";

// Our own server URL with a trusted certificate
const URL = "https://unmedicated-person.us";

let instance = null;

// ImageApi is a class that (currently) has one method for sending images
// to the backend and returning the backend's results asynchronously.
//
// That method is the /infer endpoint. It takes two images and returns a score
// and a visualization for each image.
//
// This class can be extended with other axios requests in the
// future to provide more flexibility in interacting with the backend.
class ImageApi {
  submitImages = async (imageOne, imageTwo) => {
    return axios
      .post(`${URL}/infer`, {
        headers: {
          "Content-Type": "application/json",
        },
        image1: imageOne,
        image2: imageTwo,
      })
      .then((result) => {
        console.log(result)
        return result;
      })
      .catch((e) => {
        console.log(
          `There was an issue sending the images to the backend at ${URL}/infer`
        );
        console.log(e)
      });
  };
}

// Returns a singleton instance of ImageApi class to be used by the rest of the app
const getInstance = () => {
  if (instance == null) {
    instance = new ImageApi();
  }
  return instance;
};

export default getInstance();
