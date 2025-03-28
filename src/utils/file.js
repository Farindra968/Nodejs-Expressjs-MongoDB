import cloudinary from "cloudinary";

const uploadFile = async (file) => {
  return await new Promise((resolve) => {
    cloudinary.uploader
        .upload_stream(
            (error, uploadResult) => {
        if (error) {
          return console.log(error);
        }
        return resolve(uploadResult);
      })
      .end(file.buffer);
  }).then((uploadResult) => {
    console.log(
      `Buffer upload_stream wth promise success - ${uploadResult.public_id}`
    );
  });
};

export default uploadFile;
