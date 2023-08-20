// const express = require("express");
// const dreams = express.Router();
// const {
//     getAllDreams,
//     getOneDream,
//     updateOneDream,
//     deleteDream,
//     createDream,
// } = require("../queries/dreams");

// // const checkDream = require("../utils/dateFormatter");
// // const formatDateArray = require("../utils/dateFormatter");

const express = require("express");
const dreams = express.Router();
const {
    getAllDreams,
    getOneDream,
    updateOneDream,
    deleteDream,
    createDream,
} = require("../queries/dreams");

// require('dotenv').config()

// const config ={
//   CLIENT_ID: process.env.CLIENT_ID,
// CLIENT_SECRET: process.env.CLIENT_SECRET}


// function checkLoggedIn((req,res,next))=>{
//   const isLoggIn = true
//   if(!isLoggIn){
//     return res.status(401).json({error: 'you must log in'})
//   }
//     next();
//   }

//   dreams.get('auth/google',(req,res)=>{})
//   dreams.get('auth/google/callback',(req,res)=>{})
//   dreams.get('auth/logout',(req,res)=>{})


// dreams.get('secret',checkLoggedIn,(req,res)){
//   return res.send('success')
// }

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: 'cNTkBaEqR4hmAsZJ1o1PkcCWTFBtQ8vG',
  issuerBaseURL: `https://dev-xz06mncmhh2gwqjf.us.auth0.com`,
});

// const checkScopes = requiredScopes('read:messages');

dreams.get("/", checkJwt, async (req, res) => {
  try {
    const dreams = await getAllDreams();
    res.json(dreams);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "something went terribly wrong!" });
  }
});

dreams.get("/:id",checkJwt, async (req, res) => {
  try {
    const { id } = req.params;
    const dream = await getOneDream(id);
    res.json(dream);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That dream log does not exist!" });
  }
});

dreams.put("/:id", checkJwt,  async (req, res) => {
  try {
    const { id } = req.params;
    const dream = req.body;

    const updatedDream = await updateOneDream(id, dream);
    res.json(updatedDream);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update dream log" });
  }
});

dreams.delete("/:id", checkJwt,  async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDream = await deleteDream(id);
    res.json(deletedDream);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Catastrophe! Something went terribly wrong!" });
  }
});

dreams.post("/", checkJwt, async (req, res) => {
  try {
    const dream = req.body;

    const createdDream = await createDream(dream);
    res.json(createdDream);
} catch (error) {
    console.log(error);
    console.log("Incoming request body:", req.body);
    // res.status(400).json({ error: "Incorrect post body" });
    res.status(400).json({ error: "Incorrect post body" });

}
});

module.exports = dreams;




// dreams.get("/", async (req, res) => {
//   try {
//     const dream = await getAllDreams();


//     // const formattedDate = new Date(dream.date).toLocaleString();
//     // const formattedDreamData = {...dream, date: formattedDate};
//     // // const result = await updateOneDream(id, formattedDreamData);


//     res.json(dream);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "something went terribly wrong!" });
//   }
// });

// dreams.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;


 


//     const dream = await getOneDream(id);   
    
    
//     const formattedDate = new Date(dream.date).toLocaleString();
//     const formattedDreamData = {...dream, date: formattedDate};


//     res.json(formattedDreamData);
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ error: "That dream log does not exist!" });
//   }
// });


// dreams.put("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;    
//     const dream = req.body;

//     const formattedDate = new Date(dream.date).toLocaleString();
//     const formattedDreamData = {...dream, date: formattedDate};
//     const result = await updateOneDream(id, formattedDreamData);

//     // const updatedDream = await updateOneDream(id, dream);
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "Cannot update dream log" });
//   }
// });

// dreams.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedDream = await deleteDream(id);
//     res.json(deletedDream);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "Catastrophe! Something went terribly wrong!" });
//   }
// });


// dreams.post("/", async (req, res) => {  try{
//   const dream = req.body;
//   const formattedDate = new Date(dream.date).toLocaleString();
//   const formattedDreamData = {...dream, date: formattedDate};
//   const result = await createDream(formattedDreamData);
//   res.json(result);}
// catch (error) {
//     console.log(error);
//     console.log("Incoming request body:", req.body);
//     // res.status(400).json({ error: "Incorrect post body" });
//     res.status(400).json({ error: "Incorrect post body" });

// }
// });





// // dreams.post("/", async (req, res) => {
// //   try {
// //     const dream = checkDream(req.body);

// //     const createdDream = await createDream(dream);
// //     res.json(createdDream);
// // } catch (error) {
// //     console.log(error);
// //     console.log("Incoming request body:", req.body);
// //     // res.status(400).json({ error: "Incorrect post body" });
// //     res.status(400).json({ error: "Incorrect post body" });

// // }
// // });

// module.exports = dreams;
