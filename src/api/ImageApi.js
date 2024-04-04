import axios from "axios";

const URL = "https://136.36.163.7:25565";

let instance = null;

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

  returnResult = async () => {
    // return axios
    //   .get(`${URL}/result`)
    //   .then((result) => {
    //     return result;
    //   })
    //   .catch((e) => {
    //     console.log(`Results could not be fetched from ${URL}/result`);
    //   });
  };
}

const getInstance = () => {
  if (instance == null) {
    instance = new ImageApi();
  }
  return instance;
};

export default getInstance();
