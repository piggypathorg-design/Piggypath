from rembg import remove
from PIL import Image

def process(input_path, output_path):
    print(f'Processing {input_path}...')
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)
    print(f'Saved {output_path}')

base = 'C:/Users/shabnam/.gemini/antigravity/brain/2ee8706f-0bc9-46a2-a760-e7e7cdf2c5f1/.user_uploaded/'
process(base + 'media__1785770771242.png', 'public/mascot-waitlist.png')
process(base + 'media__1785770638218.png', 'public/mascot-hero.png')
process(base + 'media__1785770746923.png', 'public/mascot-avatar.png')
