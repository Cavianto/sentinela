import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is OSINT legal for background checks or due diligence?`,
        answer: 'Absolutely. We only access publicly available information (social media, court records, corporate filings). For HR vetting or M&A due diligence, we comply with GDPR, FCRA, and local privacy laws—always documenting our legally compliant methodology.',
    },
    {
        question: `How long does a typical investigation take?`,
        answer: 'Most standard checks (employment vetting, partner screening) take 24–72 hours. Complex cases (hidden asset tracing, network mapping) require 5–7 days. We offer rush services for urgent threats.',
    },
    {
        question: 'Can you investigate internationally?',
        answer: `Yes. Our multilingual team tracks global data—from offshore company registries to international sanctions lists. Note: Some countries restrict certain searches (e.g., China’s social media), which we’ll clarify upfront.`
    },
    {
        question: 'How does the process of engaging with Zentinela work?',
        answer: '1) Select Your Service
Choose an investigation service from our website. You’ll then be redirected to provide your contact details and case specifics.

2) Schedule a Consultation (Optional)
After submitting your request, we’ll send a video conference link or phone number (per your preference). We’ll contact you:

- Same day if submitted during business hours (8:00 AM – 3:00 PM Melbourne time).
- Next business day for after-hours inquiries.
- Prefer email-only communication? Simply let us know.

3) Receive Your Proposal
We’ll email a detailed breakdown including:

- Investigation scope
- Estimated timeframe
- Service agreement
- Transparent pricing

4) Approve & Pay
Sign the agreement and complete payment to initiate your investigation.

- We accept BTC payments

5) Get Your Report
Receive a comprehensive OSINT report tailored to your selected service.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of Finwise.'
    }
];
