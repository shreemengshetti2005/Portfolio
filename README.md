# Shree Mengshetti's Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Engineering Student.

## About

This is my personal portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. It features a clean, modern design with smooth animations and a fully responsive layout.

## Tech Stack

- **Next.js** 16.0.1 - React framework with App Router
- **React** 19.2.0 - UI library
- **Tailwind CSS** 4.x - Utility-first CSS framework
- **Lottie** - Lightweight animations
- **Axios** - HTTP client

## Features

- Responsive design for all devices
- Dynamic project showcase
- Skills section with animated display
- Work experience timeline
- Education background
- Contact form with Telegram integration
- Blog integration from dev.to
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shreemengshetti2005/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

Update the portfolio content by editing the files in the `utils/data/` directory:

- `personal-data.js` - Personal information and social links
- `experience.js` - Work experience
- `projects-data.js` - Project showcase
- `skills.js` - Technical skills
- `educations.js` - Education background

## Deployment

This portfolio is deployed and can be easily deployed to:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Docker**
