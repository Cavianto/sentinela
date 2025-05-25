import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Corporate Shield OSINT: Complete Partner Vetting & M&A Risk Intelligence",
        description: "Mitigate business risks with our OSINT solutions. We verify partners, uncovering litigation and hidden risks and conduct M&A due diligence to expose financial red flags, using legally compliant methods.",
        bullets: [
            {
                title: "Services:",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Business partner evaluation",
                description: "Scrutinize associates for credibility, litigation, or undisclosed affiliations.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Investment & merger due diligence",
                description: "Investigate assets and entities to expose financial or operational red flags.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "HR Shield OSINT: Complete Candidate Vetting & Digital Background Intelligence",
        description: "Eliminate hiring risks with our professional screening services. We verify employment history, credentials and online behavior through legally compliant OSINT methods to protect your organization.",
        bullets: [
            {
                title: "Services:",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Candidate & employee vetting",
                description: "Verify credentials, past behavior, and online activity to ensure trustworthy hires.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Background & digital footprint checks",
                description: "Analyze public records and online traces to uncover hidden risks or discrepancies.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Relationship Intel Suite: Network Mapping & Threat Monitoring",
        description: "Discreetly analyze connections and protect against online risks with our OSINT solutions. We map influential relationships while monitoring reputational threats - through legal, open-source methods.",
        bullets: [
            {
                title: "Services:",
                icon: <FiLock size={26} />
            },
            {
                title: "Personal relationship mapping",
                description: "Identify key connections and networks to assess influence or potential conflicts.",
                icon: <FiUser size={26} />
            },
            {
                title: "Reputation & threat monitoring",
                description: "Track online presence for defamation, leaks, or emerging security threats.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
