import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ResponseModel from "../utils/responseModel";
import { connectToDatabase } from "../config/db-connection";
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  _id: string;
  email: string;
  password: string;
}

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const response = new ResponseModel(
      false,
      "Email and password are required",
      null
    );
    return res.status(400).json(response);
  }

  const user = await User.findOne({ email }).lean<User | null>();
  if (!user) {
    const response = new ResponseModel(
      false,
      "Invalid email or password",
      null
    );
    return res.status(401).json(response);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const response = new ResponseModel(
      false,
      "Invalid email or password",
      null
    );
    return res.status(401).json(response);
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  const content = {
    token,
    user: {
      id: user._id,
      email: user.email,
    },
  };
  const response = new ResponseModel(
    true,
    "User logged in successfully",
    content
  );
  return res.status(200).json(response);
};


export const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase(); 
  const {  email, password, confirmPassword } = req?.body;

  if ( !email || !password||!confirmPassword) {
    const response = new ResponseModel(false, "All fields are required", null);
    res.status(400).json(response);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const response = new ResponseModel(false, "User already exists", null);
    res.status(400).json(response);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({

    email,
    password: hashedPassword,
    confirmPassword,
  });

  await user.save();
  const response = new ResponseModel(
    true,
    "User registered successfully",
    null
  );
  res.status(201).json(response);
};
