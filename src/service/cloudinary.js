const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const presetName = process.env.REACT_APP_CLOUDINARY_UPLOADE_PRESET;

class CloudinaryUploadWidget {
  onUpload() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${cloudName}`,
        upload_preset: `${presetName}`,
      },
      (error, result) => {
        if (result.event === 'success') {
          console.log(result.info.url); // result.info contains data from upload
        }
      }
    );

    return myWidget.open();
  }
}

export default CloudinaryUploadWidget;
