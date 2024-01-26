import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Pasta de destino para armazenar os arquivos
   },
   filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Convenção de nomenclatura para os arquivos
   },
});

const upload = multer({
   storage: storage,
   fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
         return cb(null, false);
      }
      cb(null, true);
   },
}).single('photo');

export const uploadPhotoMiddleware = (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   upload(req, res, (err: any) => {
      if (err) {
         console.error('Error in uploadPhotoMiddleware:', err);
         return res.status(500).json({
            error: true,
            message: 'Error at uploading an image.',
            status: 500,
         });
      }
      console.log('uploadPhotoMiddleware succeeded');
      next();
   });
};
