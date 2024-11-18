import { NextApiRequest, NextApiResponse } from "next";
import {createRouter} from "next-connect";
import { connectToDatabase } from "../../../../../backend/config/db-connection";
import { signUp } from "../../../../../backend/controller/user-controller";


connectToDatabase();
const router = createRouter<NextApiRequest, NextApiResponse>();
router.post(signUp);

export default router.handler();










// import User from "../../../../../backend/models/user";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import ResponseModel from "../../../../../backend/utils/responseModel";
// import { connectToDatabase } from "../../../../../backend/config/db-connection";
// import { NextApiRequest, NextApiResponse } from "next";
// export const signUp = async (req: { body: { email: any; password: any; confirmPassword: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: ResponseModel): void; new(): any; }; }; })=> {
//     await connectToDatabase(); 
//     const {  email, password, confirmPassword } = req?.body;
  
//     if ( !email || !password||confirmPassword) {
//       const response = new ResponseModel(false, "All fields are required", null);
//       res.status(400).json(response);
//     }
  
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       const response = new ResponseModel(false, "User already exists", null);
//       res.status(400).json(response);
//     }
  
//     const hashedPassword = await bcrypt.hash(password, 10);
  
//     const user = new User({
  
//       email,
//       password: hashedPassword,
//       confirmPassword,
//     });
  
//     await user.save();
//     const response = new ResponseModel(
//       true,
//       "User registered successfully",
//       null
//     );
//     res.status(201).json(response);
//   };