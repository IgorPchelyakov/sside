import fs from "fs";
import Banner from "../models/banners/banner.js";

const BannerController = {
  getAllBanners: async (req, res) => {
    try {
      const banners = await Banner.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(banners);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getBannerById: async (req, res) => {
    const id = req.params.id;
    try {
      const banner = await Banner.findOne({ where: { id: id } });
      if (banner) {
        res.status(200).json(banner);
      } else {
        res.status(404).json({ message: "Banner not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  addBanner: async (req, res) => {
    try {
      const {
        name,
        feed,
        blockTypes,
        version,
        startDate,
        endDate,
        userId,
        bannerType,
        images,
        headlines,
        descriptions,
        advertiserLinks,
      } = req.body;
      const feedAsString = feed.join(", ");
      const jsonTypesAsString = JSON.stringify(blockTypes);
      const headlinesAsString = headlines.map(
        (headlines) => headlines.headline
      );
      const jsonHeadlines = JSON.stringify(headlinesAsString);
      const descriptionsAsString = descriptions.map(
        (descriptions) => descriptions.description
      );
      const jsonDescriptions = JSON.stringify(descriptionsAsString);
      const advertiserLinksAsString = advertiserLinks.map(
        (advertiserLinks) => advertiserLinks.advertiserLink
      );
      const jsonAdvertiserLinks = JSON.stringify(advertiserLinksAsString);

      const imageUrls = images.map((image) => image.url);
      const jsonImageUrls = JSON.stringify(imageUrls);

      const banner = await Banner.create({
        name,
        newsFeed: feedAsString,
        blockTypes: jsonTypesAsString,
        version,
        startDate,
        endDate,
        UserId: userId,
        bannerType,
        images: jsonImageUrls,
        headlines: jsonHeadlines,
        descriptions: jsonDescriptions,
        advertiserLinks: jsonAdvertiserLinks,
      });

      res.status(200).json({
        banner,
        message: "Banner creation successful",
      });
    } catch (error) {
      console.error("Ошибка обработки запроса:", error);
      res.status(500).send("Произошла ошибка на сервере");
    }
  },
  updateBanner: async (req, res) => {
    const id = req.params.id;
    const { desc, author, title } = req.body;
    const img = req.files.imgUrl;
    try {
      if (!fs.existsSync(`./uploads/banners`)) {
        fs.mkdirSync(`./uploads/banners`);
      }
      img.mv(`./uploads/gallery/${img.name}`);
      const baseUrl = `http://localhost:4444/api`;
      const mainImg = baseUrl + `/uploads/banners/${img.name}`;

      const banner = await Banner.update(
        {
          imgUrl: mainImg,
          desc,
          author,
          title,
        },
        {
          where: { id },
        }
      );
      if (banner[0]) {
        res.status(200).json({ banner, message: "Banner updated" });
      } else {
        res.status(404).json({ message: "Banner not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  deleteBanner: async (req, res) => {
    const id = req.params.id;
    try {
      const banner = await Banner.destroy({ where: { id } });
      if (banner) {
        res.status(200).json({ message: "Banner deleted" });
      } else {
        res.status(404).json({ message: "Banner not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

export default BannerController;
