import adminLogin from "../Controllers/adminController.js";
import express from 'express'

const router = express.Router();

router.get('/adminLogin', adminLogin);

export default router;