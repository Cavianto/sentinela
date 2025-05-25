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
            'Pre-Hire Deep Vetting',
            'Social Media Risk Audit',
            'Real-Time Employee Monitoring',
            'Identity Fraud Detection',
            'Regulatory Compliance Screening',
            'Cultural Fit Analysis',
            'Custom Risk Reports',
        ],
    },
    {
        name: 'Corporate Shield OSINT',
        price: 'Custom',
        features: [
            'Comprehensive Partner Vetting',
            'M&A Red Flag Detection',
            'Third-Party Risk Monitoring',
            'Global Sanctions & PEP Screening',
            'Conflict-of-Interest Mapping',
            'Custom Risk Scoring',
            'Legally Compliant Reporting',
        ],
    },
]
