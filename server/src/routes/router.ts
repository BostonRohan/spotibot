import express from "express";
import discordAuth from "../controllers/auth/discord";
import spotifyAuth from "../controllers/auth/spotify";
import loggedIn from "../controllers/loggedIn";
import auth from "../middleware/auth";

const router = express.Router();

//endpoints
router.get("/discord/auth", discordAuth);
router.get("/spotify/auth", spotifyAuth);
router.post("/loggedin", auth, loggedIn);
export default router;
