import cloudinary from "cloudinary";

const uploadFiles = async (file) => {
  const result= await new Promise((resolve) => {
    cloudinary.uploader.upload_stream(
      {folder: "backend"},
      (error, uploadResult) => {
        if(error) {return reject(error)}
        return resolve(uploadResult);
    }).end(file.buffer);
  })
  return result;
};

export default uploadFiles;
