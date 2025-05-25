import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Relationship Intel Suite',
        price: 249,
        features: [
            'Influence Network Mapping',
            'Romantic Partner Vetting',
            'Reputation Threat Alerts',
            'Dark Web Exposure Scans',
            'Crisis Mitigation Reports',
            'Legal Admissibility Guarantee',
            'Executive Protection Packages',
        ],
    },
    {
        name: 'HR Shield OSINT',
        price: 299,
        features: [
            'Advanced cloud integration',
            'Up to 20 team members',
            '100GB storage',
            'Priority email & phone support',
            'Advanced analytics',
        ],
    },
    {
        name: 'Corporate Shield OSINT',
        price: 'Custom',
        features: [
            'Full cloud integration',
            'Unlimited team members',
            'Unlimited storage',
            '24/7 dedicated support',
            'Custom solutions',
            'On-site training',
        ],
    },
]
