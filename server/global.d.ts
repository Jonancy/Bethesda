declare namespace Express {
    interface Request {
      file?: Express.Multer.File;
    }
  }
  
  declare namespace Express {
    namespace Multer {
      interface File {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        destination: string;
        filename: string;
        path: string;
        size: number;
      }
    }
  }