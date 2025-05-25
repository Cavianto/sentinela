import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'David Mercer',
        role: 'Product Manager',
        message: `${siteDetails.siteName}'s exposed a competitor's smear campaign within hours. Their OSINT proof helped us secure a restraining order.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Mark R',
        role: 'Deffense Attorney',
        message: `In 20 years of practice, ${siteDetails.siteName}'s provides the most court-ready OSINT evidence I've seen.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Maria T',
        role: 'Mother of two',
        message: `${siteDetails.siteName} dating vetting revealed my partner's hidden criminal record. They saved me from a dangerous relationship.`,
        avatar: '/images/testimonial-3.webp',
    },
];
