import { Request, Response } from "express";
import { User } from "../entity/User";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    const count = await users.length;

    return res.status(200).json({
      status: true,
      message: "data fetched successfully ",
      users,
      count,
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  console.log("check fname, lname", firstName, lastName);
  try {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();
    return res
      .status(201)
      .json({ status: true, message: "User created successfully", user });
  } catch (error) {
    return res.json(error);
  }
};
