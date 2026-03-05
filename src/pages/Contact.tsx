import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Squares from "@/components/ui/Squares";
import SEO from "@/components/SEO";

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    const contactDetails = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            detail: "+91 93244 82899",
            link: "tel:+919324482899",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            detail: "info@aspireeach.com",
            link: "mailto:info@aspireeach.com",
            color: "bg-teal-500/10 text-teal-600"
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "WhatsApp",
            detail: "Chat with Experts",
            link: "https://api.whatsapp.com/send?phone=+919324482899",
            color: "bg-green-500/10 text-green-600"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Office Hours",
            detail: "Mon - Sat: 10 AM - 7 PM",
            link: "#",
            color: "bg-purple-500/10 text-purple-600"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <SEO
                title="Contact Us - AspireEach Overseas Consultants"
                description="Get in touch with AspireEach to kickstart your journey to study abroad. We provide guidance on top universities, visas, and education loans."
                canonical="https://aspireeach.com/contact"
            />
            <Navbar />

            <main className="flex-grow pt-16 lg:pt-[116px]">
                {/* Hero Section */}
                <section className="relative py-24 bg-navy-900 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Squares
                            speed={0.3}
                            squareSize={50}
                            direction="diagonal"
                            borderColor="rgba(255,255,255,0.1)"
                            hoverFillColor="rgba(255,255,255,0.05)"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-5 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-teal-400 uppercase bg-teal-400/10 rounded-full border border-teal-400/20">
                                Contact Us
                            </span>
                            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 italic">Connect!</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Have questions about studying abroad? Our expert consultants are just a message away.
                            </p>
                        </motion.div>
                    </div>

                    {/* Decorative Blobs */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
                </section>

                <section id="contact-section" className="py-24 container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* Left: Contact Info */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-navy-900 mb-6">Get in Touch</h2>
                                <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                                    Whether you're curious about university rankings, visa processes, or scholarship opportunities, we're here to help you every step of the way.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {contactDetails.map((item, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={item.link}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-teal-500/30 transition-all duration-300"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="font-black text-navy-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-500 text-sm font-bold">{item.detail}</p>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-navy-900 mb-2">Our Head Office</h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            1506, Peninsula Park A-4, Fun Republic Lane,<br />
                                            Veera Desai Rd, Andheri West, Mumbai,<br />
                                            Maharashtra 400053
                                        </p>
                                        <a
                                            href="https://maps.google.com/?q=Peninsula+Park+Andheri+West+Mumbai"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 text-teal-600 font-black text-sm hover:gap-3 transition-all"
                                        >
                                            View on Google Maps <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl shadow-navy-900/5"
                            >
                                <h3 className="text-3xl font-black text-navy-900 mb-8 font-jakarta">Drop your query like it's hot!</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-navy-900 font-bold ml-1">Full Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Enter your name"
                                                className="bg-slate-50 border-slate-200 rounded-2xl h-14 px-6 focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-navy-900 font-bold ml-1">Email Address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                className="bg-slate-50 border-slate-200 rounded-2xl h-14 px-6 focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-navy-900 font-bold ml-1">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                className="bg-slate-50 border-slate-200 rounded-2xl h-14 px-6 focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-navy-900 font-bold ml-1">Inquiry Type</Label>
                                            <Select
                                                onValueChange={(v) => setFormData({ ...formData, subject: v })}
                                                value={formData.subject}
                                            >
                                                <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 px-6 focus:ring-teal-500/20 focus:border-teal-500 font-medium">
                                                    <SelectValue placeholder="Select Inquiry Type" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
                                                    <SelectItem value="counseling">Career Counseling</SelectItem>
                                                    <SelectItem value="visa">Visa Assistance</SelectItem>
                                                    <SelectItem value="loan">Education Loans</SelectItem>
                                                    <SelectItem value="test">Test Preparation</SelectItem>
                                                    <SelectItem value="other">Other Inquiry</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-navy-900 font-bold ml-1">Your Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your aspirations..."
                                            className="bg-slate-50 border-slate-200 rounded-2xl min-h-[150px] p-6 focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#002D62] hover:bg-[#0B1238] text-white font-black h-16 rounded-2xl shadow-xl shadow-navy-900/20 transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-3"
                                        disabled={isSubmitted}
                                    >
                                        {isSubmitted ? (
                                            "MESSAGE SENT SUCCESSFULLY!"
                                        ) : (
                                            <>SEND MESSAGE <Send size={20} /></>
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="pb-24 container mx-auto px-4">
                    <div className="h-[500px] rounded-[48px] overflow-hidden border-8 border-white shadow-2xl shadow-navy-900/5 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.771!2d72.833!3d19.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d!2sPeninsula+Park!5e0!3m2!1sen!2sin!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        ></iframe>
                        <div className="absolute top-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white shadow-xl pointer-events-none hidden md:block">
                            <h4 className="text-navy-900 font-black mb-1">Visit Our Campus</h4>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Andheri West, Mumbai</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer hideContact={true} />
        </div>
    );
};

export default Contact;
