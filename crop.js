import Jimp from "jimp";

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

    // 1. Hero Mascot (Classic smile) -> Row 0, Col 0
    const heroImage = image.clone().crop(0, 0, cellW, cellH);
    await heroImage.write("public/mascot-hero.png");
    
    // Favicon (scaled down)
    const favicon = heroImage.clone().resize(64, 64);
    await favicon.write("public/favicon.png");

    // 2. Avatar Mascot (Sunglasses) -> Row 2, Col 2
    const avatarImage = image.clone().crop(2 * cellW, 2 * cellH, cellW, cellH);
    await avatarImage.write("public/mascot-avatar.png");
    
    // 3. Waitlist Mascot (Heart eyes) -> Row 2, Col 1
    const waitlistImage = image.clone().crop(1 * cellW, 2 * cellH, cellW, cellH);
    await waitlistImage.write("public/mascot-waitlist.png");

    console.log("Images cropped and background removed successfully!");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

processImage();
