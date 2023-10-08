

import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'File upload failed' });
    }

    const { file } = files;
    const { name, size, type } = file;

    return res.status(200).json({ name, size, type, message: 'File uploaded successfully' });
  });
};
