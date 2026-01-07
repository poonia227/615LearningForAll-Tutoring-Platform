# 615 Learning For All - Nashville Tutoring Platform

A comprehensive, production-ready full-stack tutoring platform designed for Nashville's neurodiversity-affirming education community.

## Overview

615 Learning For All is a full-featured online tutoring marketplace with role-based portals, session management, payment processing, and curriculum tracking. The platform supports supervised tutors trained in executive function, de-escalation, and identity-affirming support.

## Tech Stack

- **Frontend**: Next.js 13.5, React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (Email/Password + Google OAuth)
- **Payments**: Stripe (setup required)
- **Scheduling**: Cal.com (integration ready)
- **Styling**: Tailwind CSS with custom design system

## Features

### Multi-Role System
- **Admin**: Full platform management, analytics, user management
- **Lead Specialist**: Tutor supervision, training oversight, session approval
- **Tutor**: Schedule management, student tracking, earnings dashboard
- **Parent**: Student progress tracking, session booking, tutor marketplace
- **Student**: Individual learning profiles

### Core Functionality
- ✅ Tutor marketplace with advanced search and filtering
- ✅ Role-based dashboards for all user types
- ✅ Session scheduling and management
- ✅ Subscription plans (Starter, Growth, Thrive)
- ✅ Pay-per-session option
- ✅ Tutor certification system
- ✅ Curriculum and content management
- ✅ Progress tracking and reporting
- ✅ Reviews and ratings
- ✅ Secure authentication with Supabase
- ✅ Responsive design for all devices

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Stripe account (for payments)
- Cal.com account (for scheduling)

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe (optional for development)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Cal.com (optional for development)
NEXT_PUBLIC_CAL_COM_EMBED_URL=your_cal_com_url
```

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up Supabase**:
   - Create a new Supabase project at https://supabase.com
   - Copy your project URL and anon key to `.env.local`
   - Run the database migration (when database is available)

3. **Configure Authentication**:
   - In Supabase Dashboard, go to Authentication > Providers
   - Enable Email provider
   - Enable Google provider (optional)
   - Add redirect URL: `http://localhost:3000/auth/callback`

4. **Run development server**:
   ```bash
   npm run dev
   ```

   Open http://localhost:3000

### Database Setup

When Supabase is available, run the migration to create all necessary tables:
- profiles
- tutor_profiles
- parent_profiles
- students
- sessions
- reviews
- curriculum_tracks
- curriculum_lessons
- student_progress
- subscription_plans
- invoices
- tutor_payouts
- tutor_favorites
- tutor_requests
- certification_modules
- tutor_certifications

All tables include Row Level Security (RLS) policies for secure data access.

### Stripe Integration

To enable payments:

1. Create a Stripe account at https://stripe.com
2. Add your Stripe keys to `.env.local`
3. Create products and prices in Stripe Dashboard:
   - Starter Plan: $249/month
   - Growth Plan: $449/month
   - Thrive Plan: $799/month
4. Set up webhook endpoint: `/api/webhooks/stripe`

### Production Deployment

#### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy

Build command: `npm run build`
Publish directory: `.next`

#### Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy

## Project Structure

```
├── app/                      # Next.js 13 App Router
│   ├── page.tsx             # Home page
│   ├── login/               # Authentication pages
│   ├── register/
│   ├── parent/              # Parent portal
│   ├── tutor/               # Tutor portal
│   ├── specialist/          # Lead specialist portal
│   ├── admin/               # Admin portal
│   ├── tutors/              # Tutor marketplace
│   ├── pricing/             # Pricing page
│   ├── faq/                 # FAQ page
│   └── contact/             # Contact page
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PortalLayout.tsx
├── contexts/                # React contexts
│   └── AuthContext.tsx
├── lib/                     # Utilities
│   ├── supabase.ts
│   └── utils.ts
├── types/                   # TypeScript types
│   └── index.ts
└── public/                  # Static assets
```

## User Roles & Permissions

### Admin
- Full access to all platform features
- User management (create, edit, delete)
- Payment and subscription management
- Analytics and reporting
- Curriculum management
- System settings

### Lead Specialist
- Tutor supervision and oversight
- Session approval
- Training module management
- Tutor certification tracking
- Progress review

### Tutor
- View assigned students
- Manage schedule
- Record session notes
- Track earnings
- Complete certifications
- View curriculum

### Parent
- Manage student profiles
- Browse and request tutors
- Schedule sessions
- View progress reports
- Manage subscription
- Message tutors

## Key Features Details

### Tutor Marketplace
- Search by subject, grade, specialty
- Filter by neurodivergent experience, LGBTQ+ affirming
- View tutor profiles, ratings, reviews
- Watch video introductions
- Request specific tutors

### Session Management
- Calendar integration (Cal.com)
- Recurring session scheduling
- Session notes and reports
- Attendance tracking
- Specialist approval workflow

### Progress Tracking
- Individual student dashboards
- Mastery badges and milestones
- Detailed progress reports
- Goal setting and tracking
- Parent notifications

### Certification System
- Required training modules:
  - EF101 (Executive Function)
  - De-escalation & Regulation
  - Identity-Affirming Support
- Completion tracking
- Expiration management

## Support

For questions or issues:
- Email: hello@615learningforall.com
- Website: https://www.615learningforall.com

## License

Proprietary - All rights reserved by 615 Learning For All
