import Jimp from "jimp";
import fs from "fs";

async function processImage(inputPath, outputPath) {
  try {
    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
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

    await image.write(outputPath);
    console.log(`Processed ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${outputPath}:`, err);
  }
}

async function main() {
  const dir = "C:\\Users\\shabnam\\.gemini\\antigravity\\brain\\2ee8706f-0bc9-46a2-a760-e7e7cdf2c5f1\\.user_uploaded\\";
  
  // 1. Classic Smile
  await processImage(dir + "media__1785770638218.png", "public/mascot-hero.png");
  
  // Favicon (scale down from hero)
  const hero = await Jimp.read("public/mascot-hero.png");
  hero.resize(64, 64);
  await hero.write("public/favicon.png");
  
  // 2. Lightbulb
  await processImage(dir + "media__1785770746923.png", "public/mascot-avatar.png");
  
  // 3. Sunglasses
  await processImage(dir + "media__1785770771242.png", "public/mascot-waitlist.png");
  
  console.log("All uploads processed successfully!");
}

main();
