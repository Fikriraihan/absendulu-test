import Film from "../models/filmModel.js";
import asyncHandler from "express-async-handler";

// @desc Create new film
// @route POST /api/films
const createFilm = asyncHandler(async (req, res) => {
  const { title, description, image_thumbnail } = req.body;
  const film = await Film.create({
    title,
    description,
    image_thumbnail,
  });
  if (film) {
    res.status(201).json({
      _id: film._id,
      title: film.title,
      description: film.description,
      image_thumbnail: film.image_thumbnail,
    });
  } else {
    res.status(400);
    throw new Error("Invalid film data");
  }
});

// @desc Get all films
// @route GET /api/films
const getAllFilm = asyncHandler(async (req, res) => {
  const films = await Film.find();
  res.status(200).json(films);
});

const getFilmById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const film = await Film.findById(id);
  if (film) {
    res.status(200).json(film);
  } else {
    res.status(404);
    throw new Error("Film not found");
  }
});

// @desc Delete a film
// @route DELETE /api/films/:id
const deleteFilm = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const film = await Film.findById(id);
  if (film) {
    await film.deleteOne();
    res.status(204).json({ message: "Film removed" });
  } else {
    res.status(404);
    throw new Error("Film not found");
  }
});

// @desc Update a film
// @route PUT /api/films/:id
const updateFilm = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, image_thumbnail } = req.body;
  const film = await Film.findById(id);
  if (film) {
    film.title = title;
    film.description = description;
    film.image_thumbnail = image_thumbnail;

    const updatedFilm = await film.save();
    res.status(200).json(updatedFilm);
  } else {
    res.status(404);
    throw new Error("Film not found");
  }
});

export { createFilm, getAllFilm, getFilmById, deleteFilm, updateFilm };
