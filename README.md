# Manish Yadav — Production .NET Developer Portfolio

A production-ready portfolio built for **Manish Yadav** (.NET Developer with 3+ years experience). Designed with Next.js App Router, JavaScript, Tailwind CSS, Motion for React, and Lucide React, featuring a luxury teal-and-black aesthetic (`#050807`, `#0E1715`, `#14B8A6`, `#2DD4BF`).

---

## 🚀 Key Highlights & Design Philosophy

- **Authentic Engineering Profile**: Grounded strictly in Manish Yadav's resume. Highlights 3+ years of enterprise experience with C#, ASP.NET MVC, ASP.NET Web API, ADO.NET, and Microsoft SQL Server at **Sagar Informatic Pvt. Ltd. (March 2024–Present)**.
- **Honest Skill Representation**: Accurately clarifies that React.js is currently at a basic/active learning stage, without misrepresenting Next.js or Tailwind CSS as commercial client experience.
- **Zero Fabrication**: No fabricated metrics, artificial testimonials, fake repositories, or non-existent live demos. All 4 flagship logistics ERP platforms (*Courier Mitra*, *Gracious Logistics*, *AsianRoadways*, and *YuantaiLogistics*) and secondary enterprise exposures are detailed with precise architectural responsibility.
- **Downloadable Resume**: Built-in resume download pointing to `/Manish_Yadav_DotNet_Developer_CV.pdf`, plus an in-browser PDF preview modal.
- **Direct Contact Channels**:
  - Clickable phone: `+91 9451697870` (`tel:+919451697870`)
  - Clickable email: `manish.sp2060@gmail.com` (`mailto:manish.sp2060@gmail.com`)
  - Verified LinkedIn: `https://linkedin.com/in/mr-dev123`
  - Configurable GitHub link: Only rendered when `NEXT_PUBLIC_GITHUB_URL` is set to an active repository profile.
- **Production Contact API (`POST /api/contact`)**:
  - Double validation (client-side and server-side).
  - Anti-spam honeypot trap (`website` field) and submission timestamp latency checks.
  - In-memory sliding-window IP rate limiter.
  - Multi-transport delivery: Supports **Resend** and **SMTP / Nodemailer** (e.g. Gmail App Password).
  - Honest fallback status: If credentials are not set in `.env.local`, reports simulation mode with instant 1-click `mailto:` mail-client opening fallback so no lead is lost.
- **Accessibility & Performance**:
  - Full `@media (prefers-reduced-motion)` and Framer Motion reduced-motion support.
  - Keyboard navigation with custom high-contrast focus rings.
  - SEO optimized with Open Graph tags, Twitter cards, dynamic `sitemap.xml`, `robots.txt`, and Schema.org `Person` JSON-LD structured data.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14 (App Router)** | Framework, static page generation, serverless API routes |
| **JavaScript (ES6+)** | Frontend components & backend route handlers |
| **Tailwind CSS** | Custom teal & black design system tokens |
| **Framer Motion (`framer-motion`)** | Scroll reveals, card micro-interactions, modal transitions |
| **Lucide React** | Consistent iconography |
| **Resend & Nodemailer** | Server-side email dispatch transports |

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

### Configurable Variables:

```ini
# Recipient email address where contact inquiries are forwarded
CONTACT_TO_EMAIL=manish.sp2060@gmail.com

# Verified sender address
CONTACT_FROM_EMAIL=onboarding@resend.dev

# --- OPTION A: RESEND (Recommended) ---
# Sign up at https://resend.com and paste your API key:
RESEND_API_KEY=re_your_api_key_here

# --- OPTION B: SMTP / NODEMAILER ---
# Standard SMTP credentials (e.g., Gmail with App Password, Sendgrid, Postmark)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password

# --- OPTIONAL: SITE URL & GITHUB ---
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_URL=
```

> **Note**: If `RESEND_API_KEY` or `SMTP_*` variables are omitted during local development, the contact endpoint returns a graceful simulation status and provides an instant `mailto:` button so testing remains effortless.

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## 📁 Project Structure

```
d:/source/repos/Portfolio_Manish/
├── public/
│   ├── Manish_Yadav_DotNet_Developer_CV.pdf   # Official resume download
│   ├── Manish_Yadav_Resume.pdf               # Resume fallback alias
│   ├── manish-yadav.jpg                      # Avatar profile photo
│   ├── favicon.svg                           # Favicon asset
│   └── favicon.ico                           # Favicon ico
├── src/
│   ├── app/
│   │   ├── api/contact/route.js              # Validated email dispatch API
│   │   ├── globals.css                       # Teal & black theme utilities
│   │   ├── icon.svg                          # Dynamic app icon
│   │   ├── layout.js                         # Root layout, metadata & JSON-LD
│   │   ├── page.js                           # Portfolio main entry point
│   │   ├── robots.js                         # SEO robots.txt generator
│   │   └── sitemap.js                        # SEO sitemap.xml generator
│   ├── components/
│   │   ├── About.jsx                         # Professional summary & architecture
│   │   ├── Contact.jsx                       # Contact form & verified links
│   │   ├── Education.jsx                     # MCA, Diploma, Secondary education
│   │   ├── Experience.jsx                    # Sagar Informatic Pvt. Ltd. timeline
│   │   ├── Footer.jsx                        # Footer, social links & back to top
│   │   ├── Hero.jsx                          # Hero with C# snippet & stats
│   │   ├── MotionWrapper.jsx                 # Reduced-motion aware Framer Motion
│   │   ├── Navbar.jsx                        # Sticky navigation & mobile drawer
│   │   ├── Projects.jsx                      # Courier Mitra & logistics projects
│   │   ├── ResumeViewerModal.jsx             # Embedded PDF viewer modal
│   │   └── Skills.jsx                        # Categorized technical competencies
│   └── data/
│       └── portfolioData.js                  # Single source of truth data
├── .env.example                              # Environment configuration template
├── jsconfig.json                             # Path aliases (@/*)
├── next.config.js                            # Next.js production settings
├── package.json                              # Dependencies & scripts
├── postcss.config.js                         # PostCSS Tailwind config
├── tailwind.config.js                        # Custom theme colors and glow tokens
└── README.md                                 # Setup documentation
```

---

## 🛡️ External Credentials Guide

1. **Resend (Email Dispatch)**:
   - Visit [resend.com](https://resend.com)
   - Create a free account and generate an API key (`re_...`)
   - Add `RESEND_API_KEY=re_...` in `.env.local`
2. **Gmail SMTP Alternative**:
   - Enable 2-Step Verification in your Google Account
   - Create an "App Password" under Security settings
   - Set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=your_email@gmail.com`, `SMTP_PASS=your_16_char_app_password` in `.env.local`
3. **GitHub Profile**:
   - Set `NEXT_PUBLIC_GITHUB_URL=https://github.com/username` in `.env.local` whenever you are ready to publish code repositories. If left blank, the GitHub button is cleanly omitted.
