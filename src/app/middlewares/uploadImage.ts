import path from 'node:path';

import multer from 'multer';

export const uploadPath = path.resolve(__dirname, '..', '..', '..', 'uploads');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, uploadPath);
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export const uploadImage = upload.single('image');
