import { login } from "../controller/user-contoller.js";
import { quiz } from "../controller/quiz-contoller.js";
import { studentdata,cResult ,Usubjects,Dusubjects,dResult} from "../controller/quiz-contoller.js";

import express from "express";
const route = express.Router();
route.post('/login', login);
route.get('/quiz', quiz);
route.post('/studentdata', studentdata);
route.put('/cResult', cResult);
route.put('/dResult', dResult);
route.post('/subjects', Usubjects);
route.post('/dsubjects', Dusubjects);
export default route;