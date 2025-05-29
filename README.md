# Gaming Hub Website

A professional gaming website with over 20,000 games, optimized for AdSense approval.

## Features

- Over 20,000 games
- Fast loading times
- SEO optimized
- Responsive design
- Easy navigation
- AdSense ready

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production server:
```bash
npm start
```

## Implementation Notes

1. The current implementation uses placeholder data. To add real games:
   - Replace the games array in `pages/api/games.js` with your actual game data
   - Add real game thumbnails and descriptions
   - Implement proper game loading and embedding

2. For AdSense approval:
   - Add proper meta tags and descriptions
   - Ensure all games are family-friendly
   - Implement proper content organization
   - Add privacy policy and terms of service pages

3. Performance optimization:
   - Images are lazy loaded
   - Pagination is implemented
   - Games are loaded on demand

## Customization

1. Modify `pages/index.js` to change the layout and styling
2. Update `tailwind.config.js` to customize the theme
3. Add more features in the API route as needed 