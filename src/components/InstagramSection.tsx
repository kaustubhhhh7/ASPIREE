import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const posts = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&q=80",
    "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&q=80",
];

const InstagramSection = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                            <Instagram className="w-6 h-6" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Insta-worthy Updates
                    </h2>
                    <p className="text-slate-600">Follow us @aspireeach for daily inspiration</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square rounded-2xl overflow-hidden relative group"
                        >
                            <img
                                src={post}
                                alt="Instagram post"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
