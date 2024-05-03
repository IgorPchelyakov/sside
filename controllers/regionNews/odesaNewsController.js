// import BilgorodDnistrovsky from "../../models/feeds/regionOdesa/bilgorod-dnistrovsky.js";
// import Chornomorsk from "../../models/feeds/regionOdesa/chornomorsk.js";
// import Izmail from "../../models/feeds/regionOdesa/izmail.js";
// import Kiliya from "../../models/feeds/regionOdesa/kiliya.js";
// import Odesa from "../../models/feeds/regionOdesa/odesa.js";
// // import Podilsk from "../../models/feeds/regionOdesa/podilsk.js";
// import Teplodar from "../../models/feeds/regionOdesa/teplodar.js";
// import Youzhne from "../../models/feeds/regionOdesa/youzhne.js";
// import { getAllNewsByCityWithNN } from "../../utils/news/getAllNewsByCityWithNN.js";

// const RegionOdesaMethods = {
//   getAllBilgorodDnistrovskyNews: BilgorodDnistrovsky,
//   getAllBilgorodDnistrovskyWithNN: BilgorodDnistrovsky,
//   getBilgorodDnistrovskyNewsByIdOrUrl: BilgorodDnistrovsky,
//   getBilgorodDnistrovskyNewsByDate: BilgorodDnistrovsky,

//   getAllChornomorskNews: Chornomorsk,
//   getAllChornomorskWithNN: Chornomorsk,
//   getChornomorskNewsByIdOrUrl: Chornomorsk,

//   getAllIzmailNews: Izmail,
//   getAllIzmailWithNN: Izmail,
//   getIzmailNewsByIdOrUrl: Izmail,

//   getAllKiliyaNews: Kiliya,
//   getAllKiliyaWithNN: Kiliya,
//   getKiliyaNewsByIdOrUrl: Kiliya,

//   getAllOdesaNews: Odesa,
//   getAllOdesaNewsWithNN: Odesa,
//   getOdesaNewsByIdOrUrl: Odesa,

//   // getAllPodilskNews: Podilsk,
//   // getAllPodilskNewsWithNN: Podilsk,
//   // getPodilskNewsByIdOrUrl: Podilsk,

//   getAllTeplodarNews: Teplodar,
//   getAllTeplodarNewsWithNN: Teplodar,
//   getTeplodarNewsByIdOrUrl: Teplodar,

//   getAllYouzhneNews: Youzhne,
//   getAllYouzhneWithNN: Youzhne,
//   getYouzhneNewsByIdOrUrl: Youzhne,
// };

// const OdesaNewsController = {};

// for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
//   OdesaNewsController[methodName] = async (req, res) => {
//     try {
//       const posts = await getAllNewsByCityWithNN(Model);
//       return res.status(200).json(posts);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   };
// }

// export default OdesaNewsController;
