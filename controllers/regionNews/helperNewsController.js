// import Teplodar from "../../models/feeds/regionOdesa/teplodar.js";

// const helperNewsController = {
//   getAllTeplodarNews: async (req, res) => {
//     try {
//       const news = await Teplodar.findAll({
//         attributes: [
//           "id",
//           "publishedAt",
//           "feed",
//           "url",
//           "postType",
//           "block",
//           "section",
//           "title",
//           "desc",
//           "mainImage",
//           "mainImgDesc",
//           "mainImgAuthor",
//           "UserId",
//         ],
//         order: [["publishedAt", "DESC"]],
//         limit: 113,
//       });

//       res.status(200).json(news);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   },
//   getTeplodarNewsByIdOrUrl: async (req, res) => {
//     const param = req.params.param;
//     try {
//       let post;
//       if (!isNaN(param)) {
//         post = await Teplodar.findOne({ where: { id: param } });
//       } else {
//         post = await Teplodar.findOne({ where: { url: param } });
//       }
//       if (post) {
//         res.status(200).json(post);
//       } else {
//         res.status(404).json({ message: "Post not found" });
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   },
// };

// export default helperNewsController;
