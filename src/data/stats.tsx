import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "10K+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Lines of enquiry are pursued annually in our investigations."
    },
    {
        title: "4.5",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "We consistently maintain a high star rating across our clients."
    },
    {
        title: "20+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Australian institutions rely on us to expertly manage their HR investigations with professionalism and integrity"
    }
];
