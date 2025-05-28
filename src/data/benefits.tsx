import { FiUsers, FiCheck, FiKey, FiUserCheck, FiBriefcase, FiUnlock, FiHeart, FiUser, FiShield } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "HR Shield OSINT: Complete Candidate Vetting & Digital Background Intelligence",
        description: "Eliminate hiring risks with our professional screening services. We verify employment history, credentials and online behavior through legally compliant OSINT methods to protect your organization.",
        bullets: [
            {
                title: "Ongoing Employee Integrity Monitoring",
                description: "Continuous screening of current employees for emerging red flags—from leaked data exposures to harmful online behavior.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Candidate & employee vetting",
                description: "Verify credentials, past behavior, and online activity to ensure trustworthy hires.",
                icon: <FiCheck size={26} />
            },
            {
                title: "Background & digital footprint checks",
                description: "Analyze public records and online traces to uncover hidden risks or discrepancies.",
                icon: <FiKey size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "HR Shield OSINT: Complete Candidate Vetting & Digital Background Intelligence",
        description: "Eliminate hiring risks with our professional screening services. We verify employment history, credentials and online behavior through legally compliant OSINT methods to protect your organization.",
        bullets: [
            {
                title: "Ongoing Employee Integrity Monitoring",
                description: "Continuous screening of current employees for emerging red flags—from leaked data exposures to harmful online behavior",
                icon: <FiUserCheck size={26} />
            },
            {
                title: "Candidate & employee vetting",
                description: "Verify credentials, past behavior, and online activity to ensure trustworthy hires.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Background & digital footprint checks",
                description: "Analyze public records and online traces to uncover hidden risks or discrepancies.",
                icon: <FiUnlock size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Relationship Intel Suite: Network Mapping & Threat Monitoring",
        description: "Discreetly analyze connections and protect against online risks with our OSINT solutions. We map influential relationships while monitoring reputational threats through legal, open-source methods.",
        bullets: [
            {
                title: "Romantic Partner Background Verification",
                description: "Validate dating partners or potential spouses for hidden criminal records, financial liabilities, or deceptive identities.",
                icon: <FiHeart size={26} />
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
