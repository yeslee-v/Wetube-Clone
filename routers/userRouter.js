import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("users"));
userRouter.get(routes.userDetail, (req, res) => res.send("user Detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("edit Profile"));
userRouter.get(routes.changePassword, (req, res) =>
  res.send("change Password")
);

export default userRouter;
