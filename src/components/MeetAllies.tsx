import { motion } from "framer-motion";
import LogoLoop from "./ui/LogoLoop";
import universityLivingLogo from "../assets/images/University living logo.png";
import idpLogo from "../assets/images/IDP logo.png";
import kuhooLogo from "../assets/images/Kuhoo-logo-for-website.png";

const allies = [
    {
        name: "Kuhoo",
        logo: kuhooLogo,
        fallback: "Kuhoo",
        color: "#0055A4",
        scale: 2.5
    },
    {
        name: "ICICI Bank",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/512px-ICICI_Bank_Logo.svg.png",
        fallback: "ICICI Bank",
        color: "#9C2B24"
    },
    {
        name: "QS",
        logo: "https://static.cdnlogo.com/logos/q/27/qs-world-university-rankings.svg",
        fallback: "QS",
        color: "#E28F26"
    },
    {
        name: "University Living",
        logo: universityLivingLogo,
        fallback: "University Living",
        color: "#000000"
    },
    {
        name: "IDP IELTS",
        logo: "/images/IDP IELTS logo.png",
        fallback: "IDP | IELTS",
        color: "#E30613",
        scale: 6.5
    },
];




const MeetAllies = () => {
    return (
        <section className="py-20 bg-[#FDFBF7] border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#002D62] uppercase bg-[#002D62]/10 rounded-full">
                        Our Partners
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0B1238] tracking-tight">
                        Meet our <span className="text-[#002D62]">Allies</span>
                    </h2>
                </motion.div>

                <LogoLoop logos={allies} speed={30} />
            </div>
        </section>
    );
};

export default MeetAllies;
