const express = require("express");
const dreams = express.Router();
const {
    getAllDreams,
    getOneDream,
    updateOneDream,
    deleteDream,
    createDream,
} = require("../queries/dreams");

dreams.get("/", async (req, res) => {
  try {
    const dreams = await getAllDreams();
    res.json(dreams);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "something went terribly wrong!" });
  }
});

dreams.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dream = await getOneDream(id);
    res.json(dream);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That dream log does not exist!" });
  }
});

dreams.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;    
    const dream = req.body;

    const updatedDream = await updateOneDream(id, dream);
    res.json(updatedDream);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update dream log" });
  }
});

dreams.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDream = await deleteDream(id);
    res.json(deletedDream);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Catastrophe! Something went terribly wrong!" });
  }
});

dreams.post("/", async (req, res) => {
  try {
    const { dream } = req.body;

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
