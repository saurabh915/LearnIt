import { login } from "../controller/user-contoller.js";
import { quiz } from "../controller/quiz-contoller.js";
import { studentdata,cResult ,Usubjects,Dusubjects} from "../controller/quiz-contoller.js";

import express from "express";
const route = express.Router();
route.post('/login', login);
route.get('/quiz', quiz);
route.post('/studentdata', studentdata);
route.put('/cResult', cResult);
route.post('/subjects', Usubjects);
route.post('/dynamicsubjects', Dusubjects);
export default route;