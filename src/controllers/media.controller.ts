import { Response } from "express";
import { IReqUser } from "../utils/interfaces";
import uploader from "../utils/uploader";

export default {
  async single(req: IReqUser, res: Response) {
    if (!req.file) {
      return res.status(400).json({
        data: null,
        message: "File no exists",
      });
    }
    try {
      const result = await uploader.uploadSingle(req.file as Express.Multer.File);
      res.status(200).json({
        data: result,
        message: "Success upload file",
      });
    } catch {
      res.status(500).json({
        data: null,
        message: "Failed upload file",
      });
    }
  },
  async multiple(req: IReqUser, res: Response) {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        data: null,
        message: "Files no exists",
      });
    }
    try {
      const result = await uploader.uploadMultiple(
        req.files as Express.Multer.File[]
      );
      res.status(200).json({
        data: result,
        message: "Success upload files",
      });
    } catch {
      res.status(500).json({
        data: null,
        message: "Failed upload files",
      });
    }
  },
  async remove(req: IReqUser, res: Response) {
    try {
      const { fileUrl } = req.body as { fileUrl: string };
      const result = await uploader.remove(fileUrl);
      res.status(200).json({
        data: result,
        message: "Success remove file",
      });
    } catch {
      res.status(500).json({
        data: null,
        message: "Failed remove file",
      });
    }
  },
};
