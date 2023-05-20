import cloudinary from 'cloudinary';
import { IncomingForm } from 'formidable';

cloudinary.config({
    cloudName: "dgkezthsz",
    apiKey: "143937565617482",
    apiSecret: "EITklreNB0GF_C3tFpS-4YsncBk"
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const file = data?.files?.inputFile.path;

  try {
    const response = await cloudinary.v2.uploader.upload(file, {
      resource_type: "video",
      public_id: "my_video"
    });
    return res.json(response);
  } catch (error) {
    console.log("Error", error);
    return res.json(error);
  }
};

