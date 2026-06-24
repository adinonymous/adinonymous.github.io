# Art Gallery Gallery

Drop your images and videos directly into the **`assets/`** folder and they will automatically appear on the Art page.

## Supported Formats

**Images:** JPG, JPEG, PNG, GIF, WEBP, SVG
**Videos:** MP4, MOV, WEBM, MKV

## How to Add Artwork

Simply place files in the `assets/` folder and commit them:

```bash
# Example: Add a new artwork
cp ~/Downloads/my-artwork.jpg assets/
git add assets/my-artwork.jpg
git commit -m "Add new artwork"
```

## Tips

- Files are sorted alphabetically by filename
- Underscores in filenames become spaces (e.g., `my_artwork.jpg` → "My Artwork")
- Keep filenames organized with prefixes if needed (e.g., `2024-01-01-sunset.jpg`)
