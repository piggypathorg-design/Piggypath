import Jimp from "jimp";
import fs from "fs";

async function processImage(inputPath, outputPath) {
  try {
    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    image.scan(0, 0, width, height, function (x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      
      // Calculate luminance
      const lum = (red + green + blue) / 3;
      
      if (lum > 220) {
        // Map 220->255 to alpha 255->0
        let alpha = 255 - ((lum - 220) * (255 / 35));
        if (alpha < 0) alpha = 0;
        
        // Darken the pixel slightly so the halo isn't bright white in dark mode
        this.bitmap.data[idx + 0] = red * (alpha / 255);
        this.bitmap.data[idx + 1] = green * (alpha / 255);
        this.bitmap.data[idx + 2] = blue * (alpha / 255);
        this.bitmap.data[idx + 3] = alpha;
      }
    });

    await image.write(outputPath);
    console.log(`Processed ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${outputPath}:`, err);
  }
}

async function main() {
  const dir = "C:\\\\Users\\\\shabnam\\\\.gemini\\\\antigravity\\\\brain\\\\2ee8706f-0bc9-46a2-a760-e7e7cdf2c5f1\\\\.user_uploaded\\\\";
  await processImage(dir + "media__1785770771242.png", "public/mascot-waitlist.png");
  await processImage(dir + "media__1785770638218.png", "public/mascot-hero.png");
  await processImage(dir + "media__1785770746923.png", "public/mascot-avatar.png");
  console.log("Done");
}

main();
