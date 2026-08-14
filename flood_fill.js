import Jimp from "jimp";

async function floodFillTransparent(imagePath, outputPath) {
  try {
    const img = await Jimp.read(imagePath);
    const width = img.bitmap.width;
    const height = img.bitmap.height;
    
    // We assume the top-left pixel (0,0) is part of the white background
    const targetIdx = img.getPixelIndex(0, 0);
    const tr = img.bitmap.data[targetIdx + 0];
    const tg = img.bitmap.data[targetIdx + 1];
    const tb = img.bitmap.data[targetIdx + 2];
    
    // If top left is not white-ish, maybe don't fill (but we know it's white)
    
    const stack = [[0, 0]];
    const visited = new Uint8Array(width * height);
    
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
      
      // Check if it's white or very close to white (allow some anti-aliased edge tolerance)
      if (r > 230 && g > 230 && b > 230 && a > 0) {
        // It's part of the background, make it transparent
        img.bitmap.data[idx + 3] = 0; // Fully transparent
        
        // Add neighbors to stack
        stack.push([x + 1, y]);
        stack.push([x - 1, y]);
        stack.push([x, y + 1]);
        stack.push([x, y - 1]);
      } else if (a > 0) {
        // If it's a boundary pixel (not white), maybe feather it slightly? 
        // We'll leave it as is to keep the original anti-aliasing of the pig.
        // Actually, the pig has a black outline, so the edge between white and black is gray.
        // To remove the white halo around the black outline, we can do a slight alpha blend for border pixels.
        // If it's grayish (luminance > 150), we could lower alpha, but let's stick to strict flood fill first.
      }
    }
    
    await img.write(outputPath);
    console.log(`Flood filled ${outputPath}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

async function main() {
  const dir = "C:\\\\Users\\\\shabnam\\\\.gemini\\\\antigravity\\\\brain\\\\2ee8706f-0bc9-46a2-a760-e7e7cdf2c5f1\\\\.user_uploaded\\\\";
  await floodFillTransparent(dir + "media__1785770771242.png", "public/mascot-waitlist.png");
  await floodFillTransparent(dir + "media__1785770638218.png", "public/mascot-hero.png");
  await floodFillTransparent(dir + "media__1785770746923.png", "public/mascot-avatar.png");
}

main();
