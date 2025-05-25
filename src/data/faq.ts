import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is OSINT legal for background checks or due diligence?`,
        answer: 'Absolutely. We only access publicly available information (social media, court records, corporate filings). For HR vetting or M&A due diligence, we comply with GDPR, FCRA, and local privacy laws—always documenting our legally compliant methodology.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your Finwise account syncs seamlessly across all your devices - smartphone, tablet, and computer.',
    },
    {
        question: 'Can I connect all my bank accounts?',
        answer: `Yes! ${siteDetails.siteName} supports connections with over 10,000 financial institutions worldwide. Simply log in through our secure portal to link your accounts.`
    },
    {
        question: 'Do I need any financial expertise to use the investing features?',
        answer: 'Not at all! Our expert-curated portfolios and educational resources make investing accessible to everyone, regardless of experience level.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of Finwise.'
    }
];
