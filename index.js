import express from "express";
import TravelAppController from "./src/controllers/travelApp.controller.js";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

const server = express();

server.use(express.static("public"));

//parse data
server.use(express.urlencoded({ extended: true }));

//set view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejsLayouts);

//create instance of travelApp controller
const travelAppController = new TravelAppController();

server.get("/",travelAppController.getHomePage); 

server.get("/aboutUs", travelAppController.getAboutPage);

server.get("/contactUs",travelAppController.getContactPage);

server.use(express.static("src/views"));

server.listen(3100, () => {
  console.log("listeing on 3100");
});
