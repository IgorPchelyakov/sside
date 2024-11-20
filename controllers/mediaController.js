import dotenv from "dotenv";
import fs from "fs";
import moment from "moment";
import path from "path";
import sharp from "sharp";
import transliteration from "transliteration";
import { promisify } from "util";
import Media from "../models/media.js";
dotenv.config();

const baseUrl = process.env.BASE_URL;

const copyFileAsync = promisify(fs.copyFile);
const unlinkAsync = promisify(fs.unlink);
const renameAsync = promisify(fs.rename);

const MediaController = {
  getAllMedias: async (req, res) => {
    try {
      const media = await Media.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(media);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getMediaById: async (req, res) => {
    const id = req.params.id;
    try {
      const media = await Media.findOne({ where: { id: id } });
      if (media) {
        res.status(200).json(media);
      } else {
        res.status(404).json({ message: "Image not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  addMedia: async (req, res) => {
    const { desc, author, title, UserId } = req.body;
    const img = req.files.image;

    try {
      const transImg = transliteration.transliterate(title);
      const fileExtension = img.name.split(".").pop().toLowerCase();
      const baseFileName = transImg;
      const year = moment().format("YYYY");
      const month = moment().format("MM");
      const dirPath = `./uploads/gallery/${year}/${month}`;

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      const files = fs.readdirSync(dirPath);

      // Function to generate a new filename with suffix if necessary
      const generateUniqueFileName = (baseName, ext) => {
        let suffix = 0;
        let newFileName = `${baseName}.${ext}`;
        while (files.includes(newFileName)) {
          suffix++;
          newFileName = `${baseName}_${String(suffix).padStart(2, "0")}.${ext}`;
        }
        return newFileName;
      };

      let fileName = generateUniqueFileName(baseFileName, fileExtension);
      const filePath = path.join(dirPath, fileName);
      await img.mv(filePath);

      let webpFileName = fileName.replace(/\.[^.]+$/, ".webp");
      let webpFilePath = path.join(dirPath, webpFileName);

      console.log(`Original file path: ${filePath}`);
      console.log(`Target WebP file path: ${webpFilePath}`);

      // Check if the file is already in WebP format
      if (fileExtension !== "webp") {
        // Convert the image to WebP format
        const tempWebpFilePath = path.join(
          "/tmp",
          `${Date.now()}-${webpFileName}`
        );
        await sharp(filePath).webp().toFile(tempWebpFilePath);

        console.log(`Temporary WebP file path: ${tempWebpFilePath}`);

        // Copy the converted file to the final destination
        webpFileName = generateUniqueFileName(baseFileName, "webp");
        webpFilePath = path.join(dirPath, webpFileName);
        await copyFileAsync(tempWebpFilePath, webpFilePath);

        console.log(`WebP file copied to: ${webpFilePath}`);

        // Optionally, delete the original file if you only want to keep the WebP version
        await unlinkAsync(filePath);

        // Delete the temporary WebP file
        await unlinkAsync(tempWebpFilePath);
      } else {
        // If the file is already in WebP format, ensure unique naming
        webpFileName = generateUniqueFileName(baseFileName, "webp");
        webpFilePath = path.join(dirPath, webpFileName);
        await renameAsync(filePath, webpFilePath);
      }

      const baseUrl = process.env.BASE_URL; // Используем переменную среды
      const imgUrl = `${baseUrl}/uploads/gallery/${year}/${month}/${webpFileName}`;

      const media = await Media.create({
        imgUrl,
        desc,
        author,
        title,
        UserId,
      });

      res.status(200).json({
        media,
        message: "Image creation successful",
      });
    } catch (error) {
      console.error("Error during file processing", error);
      res.status(500).json({ message: "Server error" });
    }
  },
  updateMedia: async (req, res) => {
    const id = req.params.id;
    const { desc, author, title, UserId } = req.body;
    const img = req.files && req.files.image;
    try {
      const mediaFn = await Media.findByPk(id);
      if (!mediaFn) {
        return res.status(404).json({ message: "Media not found" });
      }

      mediaFn.desc = desc;
      mediaFn.author = author;
      mediaFn.title = title;
      mediaFn.UserId = UserId;

      if (img) {
        const transImg = transliteration.transliterate(title);
        const fileExtension = img.name.split(".").pop();
        let fileName = `${transImg}.${fileExtension}`;

        const year = moment().format("YYYY");
        const month = moment().format("MM");
        const dirPath = `./uploads/gallery/${year}/${month}`;
        const files = fs.readdirSync(dirPath);

        let similarFiles = files.filter((file) => {
          const parsedFile = path.parse(file);
          return (
            parsedFile.name.startsWith(transImg) &&
            parsedFile.ext === `.${fileExtension}`
          );
        });

        if (similarFiles.length > 0) {
          const suffix = similarFiles.length + 1;
          fileName = `${transImg}_${suffix}.${fileExtension}`;
        }

        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }

        const filePath = path.join(dirPath, fileName);
        img.mv(filePath);

        const imgUrl = `${baseUrl}/uploads/gallery/${year}/${month}/${fileName}`;
        mediaFn.imgUrl = imgUrl;
      }

      await mediaFn.save();

      res.status(200).json({
        mediaFn,
        message: "Media updated successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  deleteMedia: async (req, res) => {
    const id = req.params.id;
    try {
      const media = await Media.destroy({ where: { id } });
      if (media) {
        res.status(200).json({ message: "Image deleted" });
      } else {
        res.status(404).json({ message: "Image not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

export default MediaController;
