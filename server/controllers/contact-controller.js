const ContactData = require("../modules/contact-module");

const contactForm = async (req, resp) => {
  try {
    const userContact = await ContactData.create(req.body);
    resp.status(200).json({message:"user data stored succesfully","userdata":userContact});
  } catch (err) {
resp.status(200).json({message:"user data is not stored "})
  }
};

module.exports = contactForm;
