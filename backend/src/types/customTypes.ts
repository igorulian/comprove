declare namespace Express {
    interface Request {
      userid?: string;
    }
}

declare namespace Multer {
  interface File {
    location?: string;
  }
}