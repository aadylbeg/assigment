const { Artists } = require("../models");

exports.createArtist = async (req, res) => {
  try {
    const newArtist = await Artists.create(req.body);
    return res.status(201).send(newArtist);
  } catch (err) {
    console.log(err.errors[0].message);
    return res.status(400).json({ error: err.errors[0].message });
  }
};
