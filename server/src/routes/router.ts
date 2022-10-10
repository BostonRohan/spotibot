import express from "express";
import discordAuth from "../controllers/auth/discord";
import spotifyAuth from "../controllers/auth/spotify";
import currentlyPlaying from "../controllers/currentlyPlaying";
import loggedIn from "../controllers/loggedIn";
import top from "../controllers/top";
import auth from "../middleware/auth";

const router = express.Router();

//endpoints
router.get("/discord/auth", discordAuth);
router.get("/spotify/auth", spotifyAuth);
router.get("/currentlyplaying", auth, currentlyPlaying);
router.post("/loggedin", auth, loggedIn);
router.post("/top", auth, top);
export default router;
