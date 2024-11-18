import { NextApiRequest, NextApiResponse } from "next";
import {createRouter} from "next-connect";
import { connectToDatabase } from "../../../../../backend/config/db-connection";
import { login } from "../../../../../backend/controller/user-controller";


connectToDatabase();
const router = createRouter<NextApiRequest, NextApiResponse>();
router.post(login);

export default router.handler();
