import multer, { diskStorage } from "multer"
import { randomUUID } from "crypto"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, "uploads/"); // Destination folder for storing files
    },
    filename: function (req, file, cb) {
       cb(null, file.fieldname + "-" + Date.now() + ".jpg"); // Naming convention for files
    },
 });

export const uploadPhotoMiddleware = multer({ storage: storage });