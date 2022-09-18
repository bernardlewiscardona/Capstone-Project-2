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





//diplay your model page. in this case, shoeBrand
router.get("/shoe", (req, res)=>{
    ShoeBrand.find().sort({createdAt: -1})
    .then((result) =>{
        res.render("main", {title:"SHOE BRANDS", shoe: result})
    })
    .catch((error) =>{
        console.log(error);
    })
})


//RENDER the page whose function is to ADD an [item following your created model] to your database (in this case, this is a form)
router.get("/shoe/post_page", (req, res)=>{
    res.render("shoe_post_page", {title:"CREATE"});
})


//ADD an [item following your created model] to your database
router.post("/add", (req, res) => {
    const newShoe = new ShoeBrand(req.body)
    newShoe.save()
    .then((result) =>{
        res.redirect("/shoe");
    })
    .catch((error) =>{
        console.log(error);
    })
})


//RENDER the page whose function is to FIND / VIEW an item stored in your database
router.get("/shoe/main_with_find", (req, res)=>{
    ShoeBrand.find().sort({createdAt: -1})
    .then((result) =>{
        res.render("main_with_find", {title:"READ", shoe: result})
        // console.log(result[0].id)
    })
    .catch((error) =>{
        console.log(error);
    })
})

// RENDER / VIEW the item found
router.get("/shoe/:id", (req, res) =>{
    const id = req.params.id;
    ShoeBrand.findById(id)
    .then((result) => {
        res.render('find', {shoe: result, title: "Details"})
    })
    .catch(err => console.log(err))
})

//RENDER the page whose function is to DELETE an [item following your created model]
router.get("/delete_page", (req, res)=>{
    ShoeBrand.find().sort({createdAt: -1})
    .then((result) =>{
        res.render("shoe_delete_page", {title:"DELETE",shoe: result})
    })
    .catch((error) =>{
        console.log(error);
    })
})

router.delete("/shoe/:id", async (req, res)=>{
    const id = req.params.id
    const deleteShoe = await ShoeBrand.findByIdAndDelete(id)
    if(!deleteShoe){
        return res.status(404).send('Cannot delete!').redirect('/shoe')
    }else{
        return res.status(200).redirect('/delete_page');
    }
})


// const bookDelete = async (req, res)=>{
//     let id = req.params.id
//     let deleteBook = await Books.findByIdAndDelete(id)
//     if(!deleteBook){
//         return res.status(404).send('Cannot delete the book').redirect('/')
//     }
//     else{
//         return res.status(200).redirect('/');
//     }
// }

// router.get("/delete", (req, res)=>{
//     res.status(201).send("fuck you")
// })

//DELETE an [item following your created model] from your database
// router.delete("/delete/:id", async (req, res) =>{
//     const id = req.params.id;
//     const deleteBook = await  ShoeBrand.findByIdAndDelete(id)
//     ShoeBrand.findById(id)
//     .then((result) => {
//         res.render('find', {books: result, title: "Book Detail"})
//     })
//     .catch(err => console.log(err))


//     if(!deleteBook){
//     return res.status(404).send(`Cant execute action!`);
//     }
//     res.json({redirect: '/shoe'})
// })



module.exports = router;