import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create log file path (root folder)
const logFilePath = path.join(__dirname, "..", "log.txt");

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;

  // Append log to file
  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.error("Error writing log:", err);
    }
  });

  next();
};

export default logger;