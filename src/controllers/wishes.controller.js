import Wish from "../models/wish.model.js";

export const getWishes = async (req, res) => {
  const wishes = await Wish.find();

  res.json(wishes);
};

export const getMyWishes = async (req, res) => {
  const wishes = await Wish.find({
    user: req.user.id,
  });
  // const wishes = await Wish.find({
  //   user: req.user.id,
  // }).populate("user"); para traer info del user
  res.json(wishes);
};

export const getWish = async (req, res) => {
  const wish = await Wish.findById(req.params.id);
  if (!wish) return res.status(404).json({ message: "Wish not found" });
  res.json(wish);
};

export const createWish = async (req, res) => {
  const { username, cardname, description, cbu, alias, paymentlink, date } =
    req.body;

  const newWish = new Wish({
    username,
    cardname,
    description,
    cbu,
    alias,
    paymentlink,
    date,
    user: req.user.id,
  });

  const savedWish = await newWish.save();
  res.json(savedWish);
};

export const updateWish = async (req, res) => {
  const wish = await Wish.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!wish) return res.status(404).json({ message: "Wish not found" });
  res.json(wish);
};

export const deleteWish = async (req, res) => {
  const wish = await Wish.findByIdAndDelete(req.params.id);
  if (!wish) return res.status(404).json({ message: "Wish not found" });
  return res.sendStatus(204);
};
