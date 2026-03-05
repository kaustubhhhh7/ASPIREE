import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

const news = [
    {
        title: "Understanding the New US Visa Policies for 2024",
        date: "Jan 10, 2024",
        author: "Aspire Team",
        image: "https://images.unsplash.com/photo-1526304640152-d46196bfc4d8?w=800&q=80",
        excerpt: "A comprehensive guide to the latest changes in student visa regulations for the United States.",
    },
    {
        title: "Top 5 Universities in UK for Data Science",
        date: "Jan 05, 2024",
        author: "Aspire Team",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        excerpt: "Explore the best institutions offering cutting-edge data science programs in the United Kingdom.",
    },
    {
        title: "Cost of Living in Canada: A Student's Guide",
        date: "Dec 28, 2023",
        author: "Aspire Team",
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
        excerpt: "Budgeting tips and improved cost estimates for international students planning to study in Canada.",
    },
];

const NewsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        News & Blogs
                    </h2>
                    <p className="text-slate-600">Stay updated with the latest in international education</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {item.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    {item.excerpt}
                                </p>
                                <a href="#" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                                    Read More →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
