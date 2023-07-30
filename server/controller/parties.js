import Party from "../Model/parties";

// Create a new party
const createParty = async (req, res) => {
  try {
    const { pname, phoneNo, address, cnic } = req.body;
    const newParty = new Party({ pname, phoneNo, address, cnic });
    await newParty.save();
    res
      .status(201)
      .json({ message: "Party created successfully", party: newParty });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get all parties
const getAllParties = async (req, res) => {
  try {
    const parties = await Party.find();
    res.status(200).json(parties);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get a specific party by name
const getPartyByName = async (req, res) => {
  try {
    const { name } = req.body;
    const party = await Party.findOne({ pname: name });
    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }
    res.status(200).json(party);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Update a party by name
const updatePartyByName = async (req, res) => {
  try {
    const { pname, phoneNo, address, cnic } = req.body;
    const updatedParty = await Party.findOneAndUpdate(
      { pname: req.body.name },
      { pname, phoneNo, address, cnic },
      { new: true }
    );
    if (!updatedParty) {
      return res.status(404).json({ message: "Party not found" });
    }
    res
      .status(200)
      .json({ message: "Party updated successfully", party: updatedParty });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete a party by name
const deletePartyByName = async (req, res) => {
  try {
    const { name } = req.body;
    const deletedParty = await Party.findOneAndRemove({ pname: name });
    if (!deletedParty) {
      return res.status(404).json({ message: "Party not found" });
    }
    res
      .status(200)
      .json({ message: "Party deleted successfully", party: deletedParty });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

module.exports = {
  createParty,
  deletePartyByName,
  updatePartyByName,
  getPartyByName,
};
