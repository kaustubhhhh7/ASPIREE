import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
    { name: "MBBS", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
    { name: "MBA", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" },
    { name: "Computer Science", image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80" },
    { name: "Data Science", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
    { name: "Engineering", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
    { name: "Arts & Design", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80" },
];

const CoursesSpotlight = () => {
    return (
        <section className="py-10 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                        Courses in the Spotlight
                    </h2>
                    <p className="text-xs md:text-sm text-slate-600">Trending programs favored by students worldwide</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course, index) => (
                        <Link
                            to={`/courses/${encodeURIComponent(course.name)}`}
                            key={course.name}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative rounded-xl overflow-hidden aspect-[16/10] group cursor-pointer"
                            >
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <h3 className="text-white text-base md:text-lg font-bold text-center px-4">
                                        {course.name}
                                    </h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSpotlight;
