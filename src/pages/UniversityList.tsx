import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, MapPin, Globe, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const universityData: Record<string, any> = {
    us: {
        name: "United States",
        description: "Home to the world's most prestigious Ivy League institutions and cutting-edge research facilities.",
        universities: [
            { name: "Harvard University", location: "Cambridge, MA", rank: "#1 US", tags: ["Ivy League", "Private"], image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" },
            { name: "Stanford University", location: "Stanford, CA", rank: "#2 US", tags: ["Research", "Innovation"], image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80" },
            { name: "MIT", location: "Cambridge, MA", rank: "#3 US", tags: ["STEM", "Technology"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Yale University", location: "New Haven, CT", rank: "#4 US", tags: ["Ivy League", "Arts"], image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80" },
            { name: "Princeton University", location: "Princeton, NJ", rank: "#5 US", tags: ["Ivy League", "Research"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "Columbia University", location: "New York, NY", rank: "#6 US", tags: ["Ivy League", "Urban"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "UC Berkeley", location: "Berkeley, CA", rank: "#7 US", tags: ["Public", "Research"], image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=800&q=80" },
            { name: "UCLA", location: "Los Angeles, CA", rank: "#8 US", tags: ["Public", "Medicine"], image: "https://images.unsplash.com/photo-1526243128148-6dd77604ff0a?w=800&q=80" },
            { name: "University of Chicago", location: "Chicago, IL", rank: "#9 US", tags: ["Private", "Economics"], image: "https://images.unsplash.com/photo-1503919919749-6466c40d3a2b?w=800&q=80" },
            { name: "Cornell University", location: "Ithaca, NY", rank: "#10 US", tags: ["Ivy League", "Tech"], image: "https://images.unsplash.com/photo-1533664488311-66c303867664?w=800&q=80" },
            { name: "UPenn", location: "Philadelphia, PA", rank: "#11 US", tags: ["Ivy League", "Business"], image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" },
            { name: "Johns Hopkins", location: "Baltimore, MD", rank: "#12 US", tags: ["Medicine", "Research"], image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80" },
            { name: "NYU", location: "New York, NY", rank: "#13 US", tags: ["Urban", "Arts"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Duke University", location: "Durham, NC", rank: "#14 US", tags: ["Sports", "Private"], image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80" },
            { name: "Northwestern", location: "Evanston, IL", rank: "#15 US", tags: ["Journalism", "Law"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "CMU", location: "Pittsburgh, PA", rank: "#16 US", tags: ["AI", "Engineering"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "Caltech", location: "Pasadena, CA", rank: "#17 US", tags: ["Science", "Research"], image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=800&q=80" },
            { name: "Brown University", location: "Providence, RI", rank: "#18 US", tags: ["Ivy League", "Liberal Arts"], image: "https://images.unsplash.com/photo-1526243128148-6dd77604ff0a?w=800&q=80" },
            { name: "USC", location: "Los Angeles, CA", rank: "#19 US", tags: ["Cinematic Arts", "Business"], image: "https://images.unsplash.com/photo-1503919919749-6466c40d3a2b?w=800&q=80" },
            { name: "University of Michigan", location: "Ann Arbor, MI", rank: "#20 US", tags: ["Public Ivy", "Research"], image: "https://images.unsplash.com/photo-1533664488311-66c303867664?w=800&q=80" },
        ]
    },
    gb: {
        name: "United Kingdom",
        description: "Experience centuries of academic excellence and a rich cultural heritage in the heart of the UK.",
        universities: [
            { name: "University of Oxford", location: "Oxford", rank: "#1 UK", tags: ["Historical", "Public"], image: "https://images.unsplash.com/photo-1543833078-013145da374a?w=800&q=80" },
            { name: "University of Cambridge", location: "Cambridge", rank: "#2 UK", tags: ["Grand", "Research"], image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
            { name: "Imperial College London", location: "London", rank: "#3 UK", tags: ["Science", "Medicine"], image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80" },
            { name: "UCL", location: "London", rank: "#4 UK", tags: ["Global", "Research"], image: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&q=80" },
            { name: "University of Edinburgh", location: "Edinburgh", rank: "#5 UK", tags: ["Historical", "Scottish"], image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80" },
            { name: "King's College London", location: "London", rank: "#6 UK", tags: ["Central", "Medical"], image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
            { name: "University of Manchester", location: "Manchester", rank: "#7 UK", tags: ["Red Brick", "Engineering"], image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80" },
            { name: "LSE", location: "London", rank: "#8 UK", tags: ["Economics", "Social Sciences"], image: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&q=80" },
            { name: "University of Bristol", location: "Bristol", rank: "#9 UK", tags: ["Research", "Vibrant"], image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80" },
            { name: "University of Warwick", location: "Coventry", rank: "#10 UK", tags: ["Modern", "Campus"], image: "https://images.unsplash.com/photo-1543833078-013145da374a?w=800&q=80" },
            { name: "University of Glasgow", location: "Glasgow", rank: "#11 UK", tags: ["Scottish Heritage"], image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
            { name: "University of Birmingham", location: "Birmingham", rank: "#12 UK", tags: ["Red Brick"], image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80" },
            { name: "University of Sheffield", location: "Sheffield", rank: "#13 UK", tags: ["Russell Group"], image: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&q=80" },
            { name: "University of Leeds", location: "Leeds", rank: "#14 UK", tags: ["Campus University"], image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80" },
            { name: "University of Nottingham", location: "Nottingham", rank: "#15 UK", tags: ["Green Campus"], image: "https://images.unsplash.com/photo-1543833078-013145da374a?w=800&q=80" },
            { name: "University of Southampton", location: "Southampton", rank: "#16 UK", tags: ["Engineering Focus"], image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
            { name: "Durham University", location: "Durham", rank: "#17 UK", tags: ["Collegiate"], image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80" },
            { name: "University of York", location: "York", rank: "#18 UK", tags: ["Modern Heritage"], image: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&q=80" },
            { name: "Queen Mary London", location: "London", rank: "#19 UK", tags: ["Research Powerhouse"], image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80" },
            { name: "Lancaster University", location: "Lancaster", rank: "#20 UK", tags: ["Top 10 Potential"], image: "https://images.unsplash.com/photo-1543833078-013145da374a?w=800&q=80" },
        ]
    },
    ca: {
        name: "Canada",
        description: "A welcoming country known for its high-quality education and excellent post-study work opportunities.",
        universities: [
            { name: "University of Toronto", location: "Toronto, ON", rank: "#1 Canada", tags: ["Research", "Global"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "McGill University", location: "Montreal, QC", rank: "#2 Canada", tags: ["Medical Doctoral", "Bilingual"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
            { name: "UBC", location: "Vancouver, BC", rank: "#3 Canada", tags: ["Coastal", "Innovation"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "University of Alberta", location: "Edmonton, AB", rank: "#4 Canada", tags: ["Engineering Focus"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "University of Montreal", location: "Montreal, QC", rank: "#5 Canada", tags: ["French Heritage"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
            { name: "McMaster University", location: "Hamilton, ON", rank: "#6 Canada", tags: ["Medical Research"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "University of Waterloo", location: "Waterloo, ON", rank: "#7 Canada", tags: ["Co-op Learning"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "Western University", location: "London, ON", rank: "#8 Canada", tags: ["Business Focus"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
            { name: "University of Ottawa", location: "Ottawa, ON", rank: "#9 Canada", tags: ["Bilingual Excellence"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "University of Calgary", location: "Calgary, AB", rank: "#10 Canada", tags: ["High Research"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "Queen's University", location: "Kingston, ON", rank: "#11 Canada", tags: ["Traditional"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
            { name: "Dalhousie University", location: "Halifax, NS", rank: "#12 Canada", tags: ["Maritime"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "SFU", location: "Burnaby, BC", rank: "#13 Canada", tags: ["Innovation Focus"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "University of Victoria", location: "Victoria, BC", rank: "#14 Canada", tags: ["West Coast"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
            { name: "Laval University", location: "Quebec City, QC", rank: "#15 Canada", tags: ["French Exclusive"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "York University", location: "Toronto, ON", rank: "#16 Canada", tags: ["Liberal Arts"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "University of Guelph", location: "Guelph, ON", rank: "#17 Canada", tags: ["Life Sciences"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
            { name: "Carleton University", location: "Ottawa, ON", rank: "#18 Canada", tags: ["Journalism"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
            { name: "Concordia University", location: "Montreal, QC", rank: "#19 Canada", tags: ["Urban Arts"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "Saskatchewan Uni", location: "Saskatoon, SK", rank: "#20 Canada", tags: ["Agriculture"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
        ]
    },
    au: {
        name: "Australia",
        description: "World-class education combined with an unbeatable lifestyle and diverse environments.",
        universities: [
            { name: "University of Melbourne", location: "Melbourne", rank: "#1 AU", tags: ["Prestigious", "Research"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "University of Sydney", location: "Sydney", rank: "#2 AU", tags: ["Heritage", "Global"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "University of Queensland", location: "Brisbane", rank: "#3 AU", tags: ["Tropical Learning"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "Monash University", location: "Melbourne", rank: "#4 AU", tags: ["Medicine Focus"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "UNSW", location: "Sydney", rank: "#5 AU", tags: ["Engineering Excellence"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "ANU", location: "Canberra", rank: "#6 AU", tags: ["Capital University"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "Uni Western Australia", location: "Perth", rank: "#7 AU", tags: ["Sandstone"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "University of Adelaide", location: "Adelaide", rank: "#8 AU", tags: ["Wine Science"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "UTS Sydney", location: "Sydney", rank: "#9 AU", tags: ["Modern Tech"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "Wollongong University", location: "Wollongong", rank: "#10 AU", tags: ["Innovation Campus"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "Curtin University", location: "Perth", rank: "#11 AU", tags: ["Mining Focus"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "Macquarie University", location: "Sydney", rank: "#12 AU", tags: ["Business Network"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "QUT Brisbane", location: "Brisbane", rank: "#13 AU", tags: ["Future Focus"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "RMIT Melbourne", location: "Melbourne", rank: "#14 AU", tags: ["Design Hub"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "Deakin University", location: "Geelong", rank: "#15 AU", tags: ["Sports Science"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "Uni South Australia", location: "Adelaide", rank: "#16 AU", tags: ["Industry Ready"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "Griffith University", location: "Gold Coast", rank: "#17 AU", tags: ["Tourism Focus"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "University of Tasmania", location: "Hobart", rank: "#18 AU", tags: ["Maritime"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
            { name: "La Trobe University", location: "Melbourne", rank: "#19 AU", tags: ["Social Services"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "James Cook University", location: "Townsville", rank: "#20 AU", tags: ["Marine Biology"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
        ]
    },
    de: {
        name: "Germany",
        description: "The powerhouse of European engineering and technology, offering low-cost, high-quality education.",
        universities: [
            { name: "TU Munich", location: "Munich", rank: "#1 DE", tags: ["Engineering", "Tech"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "LMU Munich", location: "Munich", rank: "#2 DE", tags: ["Historical", "Arts"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Heidelberg University", location: "Heidelberg", rank: "#3 DE", tags: ["Heritage"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "Humboldt Berlin", location: "Berlin", rank: "#4 DE", tags: ["Urban Research"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "RWTH Aachen", location: "Aachen", rank: "#5 DE", tags: ["Technical Powerhouse"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "KIT Karlsruhe", location: "Karlsruhe", rank: "#6 DE", tags: ["Future Tech"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Free Uni Berlin", location: "Berlin", rank: "#7 DE", tags: ["Political Science"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "TU Berlin", location: "Berlin", rank: "#8 DE", tags: ["Applied Science"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "University of Freiburg", location: "Freiburg", rank: "#9 DE", tags: ["Life Sciences"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "University of Tubingen", location: "Tubingen", rank: "#10 DE", tags: ["Traditional"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "University of Hamburg", location: "Hamburg", rank: "#11 DE", tags: ["Maritime Affairs"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "University of Bonn", location: "Bonn", rank: "#12 DE", tags: ["Research Focus"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Goethe Frankfurt", location: "Frankfurt", rank: "#13 DE", tags: ["Finance/Law"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "University of Cologne", location: "Cologne", rank: "#14 DE", tags: ["Vibrant Culture"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Dresden TU", location: "Dresden", rank: "#15 DE", tags: ["Innovation Hub"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "Uni Stuttgart", location: "Stuttgart", rank: "#16 DE", tags: ["Automotive Focus"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Uni Erlangen", location: "Erlangen", rank: "#17 DE", tags: ["Research Power"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "Uni Munster", location: "Munster", rank: "#18 DE", tags: ["Bicycle City"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Uni Leipzig", location: "Leipzig", rank: "#19 DE", tags: ["History"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "Uni Jena", location: "Jena", rank: "#20 DE", tags: ["Optics Specialist"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
        ]
    },
    nz: {
        name: "New Zealand",
        description: "High academic standards in a safe, peaceful and astonishingly beautiful country.",
        universities: [
            { name: "University of Auckland", location: "Auckland", rank: "#1 NZ", tags: ["Research", "Modern"], image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=800&q=80" },
            { name: "University of Otago", location: "Dunedin", rank: "#2 NZ", tags: ["Student Life", "Health"], image: "https://images.unsplash.com/photo-1469521669194-b78be5530f5a?w=800&q=80" },
            { name: "Victoria Wellington", location: "Wellington", rank: "#3 NZ", tags: ["Capital Hub"], image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=800&q=80" },
            { name: "Uni Canterbury", location: "Christchurch", rank: "#4 NZ", tags: ["Engineering Strength"], image: "https://images.unsplash.com/photo-1469521669194-b78be5530f5a?w=800&q=80" },
            { name: "Massey University", location: "Palmerston North", rank: "#5 NZ", tags: ["Veterinary Focus"], image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=800&q=80" },
            { name: "University of Waikato", location: "Hamilton", rank: "#6 NZ", tags: ["Modern Heritage"], image: "https://images.unsplash.com/photo-1469521669194-b78be5530f5a?w=800&q=80" },
            { name: "Lincoln University", location: "Lincoln", rank: "#7 NZ", tags: ["Specialist Land"], image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=800&q=80" },
            { name: "AUT Auckland", location: "Auckland", rank: "#8 NZ", tags: ["Future Ready"], image: "https://images.unsplash.com/photo-1469521669194-b78be5530f5a?w=800&q=80" },
        ]
    }
};

const UniversityList = () => {
    const { country } = useParams();
    const data = universityData[country || "us"] || universityData.us;
    const [contactMessage, setContactMessage] = useState("");

    const handleEnquireClick = (info: string) => {
        setContactMessage(`I am interested in ${info}. Please provide more details.`);
        setTimeout(() => {
            const element = document.getElementById('contact-section');
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-[100px] lg:pt-[116px] min-h-[450px] lg:min-h-[550px] flex items-center bg-navy-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link to="/#top-destinations" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Destinations
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-7xl font-bold mb-6 text-white"
                    >
                        Study In <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">{data.name}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>

            {/* University Table Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-navy-900">Top Universities</h2>
                    <div className="flex gap-2">
                        <span className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium shadow-sm">
                            Showing Top {data.universities.length} Institutions
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-navy-900 text-white">
                                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Rank</th>
                                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Institution</th>
                                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Location</th>
                                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Categories</th>
                                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data.universities.map((uni: any, index: number) => (
                                <motion.tr
                                    key={uni.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group hover:bg-teal-50/50 transition-colors duration-300"
                                >
                                    <td className="px-8 py-6">
                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 text-navy-900 font-bold text-sm border border-gray-100 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-400 transition-all duration-300">
                                            {uni.rank.replace('#', '').split(' ')[0]}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-lg font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                                            {uni.name}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center text-gray-500 font-medium">
                                            <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                                            {uni.location}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-wrap gap-2">
                                            {uni.tags.map((tag: string) => (
                                                <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-[10px] font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-teal-600 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button
                                            onClick={() => handleEnquireClick(`${uni.name} in ${data.name}`)}
                                            className="inline-flex items-center justify-center gap-2 py-2.5 px-6 bg-navy-900 text-white rounded-xl text-xs font-bold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
                                        >
                                            <GraduationCap className="w-4 h-4" />
                                            Apply Now
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-20 bg-white border-y border-gray-100 mb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">98%</div>
                            <p className="text-gray-500 text-sm">Visa Success Rate</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">500+</div>
                            <p className="text-gray-500 text-sm">Applications Sent</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">$2M+</div>
                            <p className="text-gray-500 text-sm">Scholarships Secured</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">24/7</div>
                            <p className="text-gray-500 text-sm">Student Support</p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection initialMessage={contactMessage} />

            <Footer />
        </div>
    );
};

export default UniversityList;

