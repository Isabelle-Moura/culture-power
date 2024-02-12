import multer from "multer";
import { randomUUID } from "crypto";

const storage = multer.diskStorage({
   filename(req, file, callback) {
      const extension = file.mimetype.split("/")[1];
      const filename = `photo-${randomUUID()}.${extension}`;
      callback(null, filename);
   },
   destination(req, file, callback) {
      callback(null, "uploads/");
   },
});

export const uploadPhotoMiddleware = multer({ storage });
