const express = require("express")
const ShoeBrand = require("../model/ShoeBrand")
const router = express.Router()

router.get("/", (kahilingan, tugon)=>{
    tugon.status(201).render("home", {title:"HOME"})
})

router.get("/about_us", (req, res)=>{
    res.status(201).render("about_us", {title:"ABOUT US"})
})

router.get("/services_basic", (req, res)=>{
    res.status(201).render("services_basic", {title:"BASIC SERVICES"})
})

router.get("/services_specialized", (req, res)=>{
    res.status(201).render("services_specialized", {title:"SPECIALIZED SERVICES"})
})

router.get("/appointment", (req, res)=>{
    res.status(201).render("appointment", {title:"ONLINE APPOINTMENT"})
})

router.get("/careers", (req, res)=>{
    res.status(201).render("careers", {title:"CAREERS"})
})

router.get("/contact_us", (req, res)=>{
    res.status(201).render("contact_us", {title:"CONTACT US"})
})


module.exports = router;