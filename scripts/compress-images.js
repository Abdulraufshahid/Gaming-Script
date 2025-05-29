const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GAMES_DIR = path.join(__dirname, '../public/games');

async function compressImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Compressed: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error);
  }
}

async function processDirectory(directory) {
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      await processDirectory(itemPath);
    } else if (stats.isFile() && /\.(png|jpg|jpeg)$/i.test(item)) {
      const outputPath = itemPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      await compressImage(itemPath, outputPath);
    }
  }
}

async function main() {
  try {
    await processDirectory(GAMES_DIR);
    console.log('Image compression completed!');
  } catch (error) {
    console.error('Error processing images:', error);
    process.exit(1);
  }
}

main(); 