# Delta Home Solutions

Professional home maintenance services website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Form submissions to Google Sheets
- Service showcase
- Quote request system
- Mobile-friendly navigation

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Sheets API

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/delta-home-solutions.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then fill in your environment variables in `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Required environment variables:

- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_SPREADSHEET_ID`

See `.env.example` for all required variables.

## Project Structure

```
src/
  ├── app/              # Next.js app router pages
  ├── components/       # React components
  │   ├── blocks/      # Larger component blocks
  │   ├── forms/       # Form components
  │   ├── layout/      # Layout components
  │   ├── sections/    # Page sections
  │   └── ui/          # UI components
  ├── lib/             # Utility libraries
  ├── types/           # TypeScript types
  └── utils/           # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
