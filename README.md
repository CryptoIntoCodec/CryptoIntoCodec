# CryptoIntoCodec — Portfolio

This repository contains a small portfolio site (client) and a simple Express server (server) to handle the contact form.

Quick start

1) Install dependencies

Open two terminals.

Terminal 1 — client:

```bash
cd client
npm install
npm run dev
```

Terminal 2 — server:

```bash
cd server
npm install
# (optional) copy .env.example to .env and fill SMTP details to enable sending email
node index.js
```

The client will proxy the contact form to `/api/contact` (same origin when deployed together). For local development, use a simple proxy or run the client and server on different ports and adjust `fetch('/api/contact')` to include the server origin.

Contact

LinkedIn: https://www.linkedin.com/in/rahulbajajyadav/

Deployment

- Recommended: deploy the `client` folder to Vercel or Netlify (static site). Use the `client/netlify.toml` provided for Netlify. Build command: `npm run build`, publish directory: `dist`.
- Deploy the `server` to Render, Heroku, or any Node host. The server writes fallback contacts to `server/contacts.json` if email is not configured.

Environment (server)

Copy `server/.env.example` to `server/.env` and fill SMTP values to enable real email sending with the contact form.

Notes

- Local dev: run the server (`node index.js`) at port 4000 and the client (`npm run dev`) at port 5173. The client dev server proxies `/api` to the server.

Image optimization

- To generate responsive PNG and WebP variants from the SVG placeholders, run:

```bash
cd client
npm install # ensures sharp is installed
npm run generate-images
```

This will create `-480.png`, `-768.png`, `-1200.png`, and corresponding `.webp` files next to each SVG in `client/public/images`.

