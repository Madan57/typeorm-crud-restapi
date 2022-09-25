import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller";
const router = Router();

// router.get("/api/users/getAll", async (req, res) => {
//   return res
//     .status(200)
//     .json({ status: true, msg: "data fetched sucessfully" });
// });

router.get("/api/users/getAll", getUsers);

router.post("/api/users/create", createUser);

export default router;
