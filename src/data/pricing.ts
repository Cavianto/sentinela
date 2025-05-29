import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Relationship Intel Suite',
        price: 249,
        features: [
            'Romantic Partner Background Checks',
            'Personal & Professional Network Mapping',
            'Reputation Monitoring & Sentiment Analysis',
            'Alias, Identity, and Sockpuppet Detection',
            'Dark Web & Breach Watchlist',
            'Relationship Timeline Reconstruction',
            'Ongoing Threat Monitoring (Add-On)',
        ],
    },
    {
        name: 'HR Shield OSINT',
        price: 299,
        features: [
            'Pre-Hire Deep Vetting',
            'Social Media Risk Audit',
            'Credential & Employment Verification',
            'Background & Digital Footprint Checks',
            'Reputation & Media Scan',
            'Cultural Fit Analysis',
            'Content Risk Scoring',
        ],
    },
    {
        name: 'Sentinel Watch OSINT',
        price: 'Custom',
        features: [
            'Real-Time Digital Risk Detection',
            'Leaked Credential & Data Exposure Alerts',
            'Social & Behavioral Pulse Monitoring',
            'Compliance & Policy Violation Triggers',
            'Reputation Protection Scans',
            'AI-Driven Risk Scoring & Alert System',
            'Custom Alert Rules & Watchlists',
        ],
    },
]
