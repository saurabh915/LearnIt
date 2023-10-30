import { addUser } from "../controller/user-contoller.js";
import  express  from "express";
const route = express.Router();
route.get('/addUser',addUser);
export default route;