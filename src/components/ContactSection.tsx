import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from "lucide-react";
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

interface ContactSectionProps {
    initialMessage?: string;
}

const ContactSection = ({ initialMessage = "" }: ContactSectionProps) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: initialMessage
    });

    // Update message if initialMessage prop changes
    React.useEffect(() => {
        if (initialMessage) {
            setFormData(prev => ({ ...prev, message: initialMessage }));
        }
    }, [initialMessage]);

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
        <section id="contact-section" className="relative py-12 bg-[#FDFBF7] overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 opacity-10">
                <Squares
                    speed={0.2}
                    squareSize={80}
                    direction="diagonal"
                    borderColor="rgba(0,45,98,0.2)"
                    hoverFillColor="rgba(0,45,98,0.1)"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-3 text-[10px] font-bold tracking-[0.2em] text-[#002D62] uppercase bg-[#002D62]/5 rounded-full border border-[#002D62]/10">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Aspire?</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="grid sm:grid-cols-2 gap-3">
                            {contactDetails.map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-4 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
                                >
                                    <div className={`w-8 h-8 rounded-xl ${item.color} flex items-center justify-center mb-2 transition-transform group-hover:scale-110`}>
                                        {React.cloneElement(item.icon as React.ReactElement, { size: 16 })}
                                    </div>
                                    <h3 className="font-black text-navy-900 text-xs mb-0.5">{item.title}</h3>
                                    <p className="text-slate-500 text-[10px] font-bold">{item.detail}</p>
                                </motion.a>
                            ))}
                        </div>

                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/30">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <h3 className="font-black text-navy-900 text-xs mb-0.5">Our Head Office</h3>
                                    <p className="text-slate-600 text-[10px] leading-relaxed font-medium">
                                        1506, Peninsula Park A-4, Veera Desai Rd, Andheri West, Mumbai
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Peninsula+Park+Andheri+West+Mumbai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 mt-1.5 text-teal-600 font-black text-[10px] hover:gap-2.5 transition-all"
                                    >
                                        View on Google Maps <ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-100 shadow-xl shadow-navy-900/5"
                        >
                            <h3 className="text-xl font-black text-navy-900 mb-4 font-jakarta">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label htmlFor="section-name" className="text-navy-900 font-bold ml-1 text-xs">Full Name</Label>
                                        <Input
                                            id="section-name"
                                            placeholder="Enter your name"
                                            className="bg-slate-50 border-slate-200 rounded-xl h-10 px-4 text-xs focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="section-email" className="text-navy-900 font-bold ml-1 text-xs">Email Address</Label>
                                        <Input
                                            id="section-email"
                                            type="email"
                                            placeholder="your@email.com"
                                            className="bg-slate-50 border-slate-200 rounded-xl h-10 px-4 text-xs focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label htmlFor="section-phone" className="text-navy-900 font-bold ml-1 text-xs">Phone Number</Label>
                                        <Input
                                            id="section-phone"
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="bg-slate-50 border-slate-200 rounded-xl h-10 px-4 text-xs focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="section-subject" className="text-navy-900 font-bold ml-1 text-xs">Inquiry Type</Label>
                                        <Select
                                            onValueChange={(v) => setFormData({ ...formData, subject: v })}
                                            value={formData.subject}
                                        >
                                            <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl h-10 px-4 text-xs focus:ring-teal-500/20 focus:border-teal-500 font-medium">
                                                <SelectValue placeholder="Select Inquiry Type" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-100 shadow-xl">
                                                <SelectItem value="counseling">Career Counseling</SelectItem>
                                                <SelectItem value="visa">Visa Assistance</SelectItem>
                                                <SelectItem value="loan">Education Loans</SelectItem>
                                                <SelectItem value="test">Test Preparation</SelectItem>
                                                <SelectItem value="other">Other Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <Label htmlFor="section-message" className="text-navy-900 font-bold ml-1 text-xs">Your Message</Label>
                                    <Textarea
                                        id="section-message"
                                        placeholder="Tell us about your aspirations..."
                                        className="bg-slate-50 border-slate-200 rounded-xl min-h-[100px] p-4 text-xs focus:ring-teal-500/20 focus:border-teal-500 font-medium"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#002D62] hover:bg-[#0B1238] text-white font-black h-12 rounded-xl shadow-lg shadow-navy-900/20 transition-all transform hover:-translate-y-1 text-sm flex items-center justify-center gap-2"
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        "MESSAGE SENT SUCCESSFULLY!"
                                    ) : (
                                        <>SEND MESSAGE <Send size={16} /></>
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
