import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getWishes,
  getWish,
  createWish,
  updateWish,
  deleteWish,
  getMyWishes,
} from "../controllers/wishes.controller.js";

import { validateSchema } from '../middlewares/validator.middleware.js';
import { wishSchema } from '../schema/wish.schema.js';


const router = Router();

router.get("/wishes", authRequired, getWishes);

router.get("/mywishes", authRequired, getMyWishes);

router.get("/wishes/:id", authRequired, getWish);

router.post("/wishes", authRequired, validateSchema(wishSchema), createWish);

router.put("/wishes/:id", authRequired, updateWish);

router.delete("/wishes/:id", authRequired, deleteWish);

export default router;
