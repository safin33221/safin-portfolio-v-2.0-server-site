import express, { Request, Response } from "express";
const app = express();
app.get("/", (req, res) => {
  req.body;
  req.params;
  res.status(200).json({ ok: true });
});
const x = (req: Request, res: Response) => {
  req.body;
  req.params;
  res.status(200).json({ ok: true });
};
