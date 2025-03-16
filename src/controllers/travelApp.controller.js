import path from "path";
// import ProductModel from "../models/product.model.js";

export default class TravelAppController {
  getHomePage(req, res) {
    return res.render("home");
  }
  getAboutPage(req, res) {
    return res.render("aboutUs");
  }
  getContactPage(req, res) {
    return res.render("contactUs");
  }
}
