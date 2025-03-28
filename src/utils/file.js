import cloudinary from "cloudinary";

const uploadFiles = async (file) => {
  const result= await new Promise((resolve) => {
    cloudinary.uploader
        .upload_stream(
            (error, data) => {
        if (error) {
          return console.log(error);
        }
        return resolve(console.log(data));
      })
      .end(file.buffer);
  })
  return result;
};

export default uploadFiles;
