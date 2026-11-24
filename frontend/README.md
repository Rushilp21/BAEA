# Bombay Adult Education Association

React and TypeScript frontend for the BAEA website preview. Run these commands from this folder with Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to type-check and generate a static production build in `dist/`. Run `npm run preview` to serve that build locally.

- `src/pages/` contains the eight pages.
- `src/components/` contains shared navigation, the footer, and course listing controls.
- `src/data/` contains course details and gallery captions.
- `src/styles/site.css` contains the site's styles and responsive breakpoints.
- `src/assets/` contains the photos extracted from the original HTML.

Page URLs use hash routes such as `#/courses`.

## Contact emails

The contact form sends through Gmail SMTP. The message includes the visitor's
name, email, selected subject, and message. Gmail sends from the account in
`SMTP_USER` and sets Reply-To to the visitor's address.

Use the ignored `.env.local` file for local settings. If it is missing, copy
`.env.example` to `.env.local`, set `CONTACT_TO` to the destination inbox, and
set `SMTP_USER` to the Gmail account that will send the emails. Create a
[Google app password](https://support.google.com/accounts/answer/185833) for that
sending account with 2-Step Verification enabled, and add it as
`SMTP_APP_PASSWORD`. Restart the preview after changing these settings.

## Deploy on Vercel

1. Push the source to a Git repository that the client can access. Keep
   `.env.local` out of Git.
2. In Vercel, import the repository. Set **Root Directory** to `frontend`
   when importing the whole BAEA folder. If the repository starts with the
   files inside `frontend`, use the repository root.
3. Use the Vite preset and Node.js 22.x. Vercel reads `vercel.json` to run
   `npm run build`, serve `dist`, and deploy `api/contact.js` at
   `/api/contact`.
4. Add `CONTACT_TO`, `SMTP_USER`, and `SMTP_APP_PASSWORD` to the project's
   **Production** environment variables. Use the final admin inbox for
   `CONTACT_TO` and the app password linked to the Gmail address in
   `SMTP_USER`. Store the password as a sensitive variable.
5. Deploy. After any environment variable changes, redeploy. Submit a test
   enquiry on the `.vercel.app` URL and confirm inbox delivery and Reply-To.
6. In **Settings → Domains**, add `baea.in` and, if desired, `www.baea.in`.
   Add the exact website DNS records shown by Vercel at the domain's DNS
   provider. Keep the existing email records. Wait for Vercel to verify the
   domain and issue HTTPS, then test the contact form on the custom domain.

If the Titan inbox is the recipient, separately verify its mail DNS in
GoDaddy's Email & Office Dashboard under **Manage → Set Mail Destination**.
Check that the inbox receives an ordinary email before testing the form.

For a standalone Node.js host, run `npm run build` followed by `npm start`
and set the same server environment variables. Both deployment paths require
outbound Gmail SMTP access.
