import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Are ${siteDetails.siteName}'s investigations legal and compliant with privacy laws?`,
        answer: 'Yes. Zentinela strictly uses lawful, open-source intelligence (OSINT) methods. All information we gather is publicly available and accessed without breaching privacy laws or unauthorized systems. We fully comply with Australian privacy legislation and global OSINT ethical standards.',
    },
    {
        question: `Will the person I’m investigating know they’re being investigated?`,
        answer: 'No. All investigations are conducted discreetly and confidentially. Since we only access publicly available information, there’s no direct contact with the subject and no traceable activity that alerts them to our review.',
    },
    {
        question: 'What kinds of risks can your services uncover?',
        answer: `We identify a range of digital and reputational risks, such as falsified credentials, problematic social media behavior (including hate speech, toxicity, or extremist alignment), leaked personal or corporate data, undisclosed relationships or affiliations, and reputational red flags found in media or online discussions.`
    },
    {
        question: 'How current and accurate is the information you provide?',
        answer: 'Our tools and analysts use real-time data sources to ensure information is current at the time of the investigation. We combine automated intelligence gathering with manual validation to ensure accuracy, context, and relevance.',
    },
    {
        question: 'What distinguishes each of your services?',
        answer: 'HR Shield OSINT is designed for pre-employment vetting and digital background checks, while Sentinel Watch OSINT provides ongoing employee monitoring to detect emerging internal risks. Relationship Intel Suite focuses on personal relationship safety by validating individuals and mapping their connections.'
    }
];
