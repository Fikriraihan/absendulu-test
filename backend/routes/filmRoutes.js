import express from "express";
import {
  createFilm,
  deleteFilm,
  getAllFilm,
  getFilmById,
  updateFilm,
} from "../controllers/filmController.js";

const router = express.Router();

router
  .post("/", createFilm)
  .get("/", getAllFilm)
  .get("/:id", getFilmById)
  .delete("/:id", deleteFilm)
  .put("/:id", updateFilm);

export default router;
