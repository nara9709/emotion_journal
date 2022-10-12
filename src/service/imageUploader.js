const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const presetName = process.env.REACT_APP_CLOUDINARY_UPLOADE_PRESET;

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', `${presetName}`);
    const result = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
