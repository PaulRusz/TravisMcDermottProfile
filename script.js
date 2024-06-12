
import { performServerHandshake } from "http2";
import { displayAboutMe } from "./pages/aboutMe"
import { handleContactForm } from "./pages/contact"
import { displayResume } from "./pages/resume"

displayAboutMe();
handleContactForm();
displayResume();