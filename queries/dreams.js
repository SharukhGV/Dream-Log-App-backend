const db = require("../db/dbConfig.js");
// const admin = require('firebase-admin');
// const pgp = require('pg-promise')();
// const connectionString = process.env.DATABASE_URL;
// const db = pgp(connectionString);

// Initialize the Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   // Add other necessary configurations
// });

const getAllDreams = async () => await db.any("SELECT * FROM dreams");

const getOneDream = async (id) =>
  await db.one("SELECT * FROM dreams WHERE id=$1", id);

// const updateOneDream = async (id, dream) => {
//   const { name, good_dream, dream_description, topic, date, night, user_id} = dream;

//   return await db.one(
//     "UPDATE dreams SET name=$1, good_dream=$2, dream_description=$3, topic=$4, date=$5, night=$6, user_id=$7 WHERE id=$8 RETURNING *",
//     [name, good_dream, dream_description, topic, date, night, user_id, id]
//   );
// };

const updateOneDream = async (id, dream) => {
  const { user_id, name, good_dream, dream_description, topic, date, night} = dream;

  return await db.one(
    "UPDATE dreams SET user_id=$1, name=$2, good_dream=$3, dream_description=$4, topic=$5, date=$6, night=$7 WHERE id=$8 RETURNING *",
    [user_id, name, good_dream, dream_description, topic, date, night, id]
  );
};

const deleteDream = async (id) =>
  await db.one("DELETE FROM dreams WHERE id = $1 RETURNING *", id);
  

  // const createDream = async (dream) => {
  //     // Retrieve the user ID token
  // const userToken = await admin.auth().verifyIdToken(dream.user_id);
  // const userId = userToken.uid;
  
  // await db.one(
  //   "INSERT INTO dreams (user_id, name, good_dream, dream_description, topic, date, night) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
  //   [
  //     user_id.getToken(),
  //     dream.name,
  //     dream.good_dream,
  //     dream.dream_description,
  //     dream.topic,
  //     dream.date,
  //     dream.night,
      
  //   ]
  // );
  // }

  const createDream = async (dream) => {
    // Retrieve the user ID token
    // const userToken = await admin.auth().verifyIdToken(dream.user_id);
    // const userId = userToken.uid;
  
    // Insert data into the database
    const insertedDream = await db.one(
      "INSERT INTO dreams (user_id, name, good_dream, dream_description, topic, date, night) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        dream.user_id,
        dream.name,
        dream.good_dream,
        dream.dream_description,
        dream.topic,
        dream.date,
        dream.night,
      ]
    );
  
    return insertedDream;
  }


  // const createDream = async (dream) =>
  // await db.one(
  //   "INSERT INTO dreams (name, good_dream, dream_description, topic, date, night, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
  //   [
  //     dream.name,
  //     dream.good_dream,
  //     dream.dream_description,
  //     dream.topic,
  //     dream.date,
  //     dream.night,
  //     dream.user_id
      
  //   ]
  // );

module.exports = {
    getAllDreams,
    getOneDream,
    updateOneDream,
    deleteDream,
    createDream,
};