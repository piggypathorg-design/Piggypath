import Jimp from "jimp";
import fs from "fs";

async function processImage() {
  try {
    const image = await Jimp.read("public/mascots.png");
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Grid is 4 cols, 3 rows
    const cellW = Math.floor(width / 4);
    const cellH = Math.floor(height / 3);
    
    // Replace white background with transparent
    image.scan(0, 0, width, height, function (x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      
      // If pixel is white or very close to white
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // alpha = 0
      }
    });

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        const crop = image.clone().crop(col * cellW, row * cellH, cellW, cellH);
        await crop.write(`public/mascot-${row}-${col}.png`);
      }
    }

    console.log("Images extracted.");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

processImage();
