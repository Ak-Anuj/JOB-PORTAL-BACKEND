import express from "express";
import authenticateToken from "../middleware/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

// ✅ PUBLIC (no login required)
router.route("/get").get(getAllJobs);
router.route("/get/:id").get(getJobById);

// ✅ PROTECTED (only logged-in users / admins)
router.route("/post").post(authenticateToken, postJob);
router.route("/getadminjobs").get(authenticateToken, getAdminJobs);

export default router;
