const Myservice = require("../modules/service-model");
const services = async (req, resp) => {
  try {
    const serviceData = await Myservice.find({});
    if(!serviceData)return resp.status(404).json({message:"no service is found"});
    // console.log(serviceData);
    resp.status(200).json(serviceData );
  } catch (eror) {
    resp.json({
      message: `this is service data fetch eror from dbs s-controler ${eror} `,
    });
  }
};
module.exports = services;
