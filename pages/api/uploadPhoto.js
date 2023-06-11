import cloudinary from 'cloudinary';
import { IncomingForm } from 'formidable';

//Lihi
// cloudinary.config({
//     cloudName: "dgkezthsz",
//     apiKey: "143937565617482",
//     apiSecret: "EITklreNB0GF_C3tFpS-4YsncBk"
// });

//Liad
cloudinary.config({
  cloud_name: "dsvjhuk25",
  api_key: "116438151837789",
  api_secret: "zB8Ue28lLdZT7RUvVNqSdkD4af8"
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

  const file = data?.files?.inputFile.filepath;
  const d = new Date();
  let time = d.getTime();
  const response = await cloudinary.v2.uploader.upload(file, {
    resource_type: 'image',
    public_id: time,
  });
  const url = cloudinary.url(time);
  const secURL = response.secure_url;
  return res.json(secURL);
};

