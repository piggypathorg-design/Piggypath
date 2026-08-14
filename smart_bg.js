import Jimp from "jimp";

async function smartRemoveBackground(imagePath, outputPath) {
  try {
    const img = await Jimp.read(imagePath);
    const width = img.bitmap.width;
    const height = img.bitmap.height;
    
    const stack = [[0, 0]];
    const visited = new Uint8Array(width * height);
    const isOuterBg = new Uint8Array(width * height);
    
    // Step 1: Flood fill to find all contiguous outer white/light pixels
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      
      const vIdx = y * width + x;
      if (visited[vIdx]) continue;
      visited[vIdx] = 1;
      
      const idx = img.getPixelIndex(x, y);
      const r = img.bitmap.data[idx + 0];
      const g = img.bitmap.data[idx + 1];
      const b = img.bitmap.data[idx + 2];
      const a = img.bitmap.data[idx + 3];
      
      // If it's somewhat light and connected to outside, it's the background mask
      const lum = (r + g + b) / 3;
      if (lum > 200 && a > 0) {
        isOuterBg[vIdx] = 1;
        
        stack.push([x + 1, y]);
        stack.push([x - 1, y]);
        stack.push([x, y + 1]);
        stack.push([x, y - 1]);
      }
    }
    
    // Step 2: Apply gradient alpha to ONLY the pixels in the outer background mask
    img.scan(0, 0, width, height, function (x, y, idx) {
      const vIdx = y * width + x;
      if (isOuterBg[vIdx]) {
        const red   = this.bitmap.data[idx + 0];
        const green = this.bitmap.data[idx + 1];
        const blue  = this.bitmap.data[idx + 2];
        const lum = (red + green + blue) / 3;
        
        if (lum > 220) {
          // Soft blend
          let alpha = 255 - ((lum - 220) * (255 / 35));
          if (alpha < 0) alpha = 0;
          
          this.bitmap.data[idx + 0] = red * (alpha / 255);
          this.bitmap.data[idx + 1] = green * (alpha / 255);
          this.bitmap.data[idx + 2] = blue * (alpha / 255);
          this.bitmap.data[idx + 3] = alpha;
        } else {
          // If it's part of the outer bg mask but darker than 220 (like a drop shadow on the white bg), just keep it as is, or blend it
        }
      }
    });

    await img.write(outputPath);
    console.log(`Smart Processed ${outputPath}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

async function main() {
  const dir = "C:\\\\Users\\\\shabnam\\\\.gemini\\\\antigravity\\\\brain\\\\2ee8706f-0bc9-46a2-a760-e7e7cdf2c5f1\\\\.user_uploaded\\\\";
  await smartRemoveBackground(dir + "media__1785770771242.png", "public/mascot-waitlist.png");
  await smartRemoveBackground(dir + "media__1785770638218.png", "public/mascot-hero.png");
  await smartRemoveBackground(dir + "media__1785770746923.png", "public/mascot-avatar.png");
}

main();
