import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What is Aspire Each Premium Counseling?',
        answer: 'At Aspire Each Overseas, we prioritize the key elements influencing students\' choices in pursuing higher education, taking into account various factors they\'ve considered. Our approach focuses on delivering solution-oriented outcomes, guided by industry-experienced counselors who support you throughout your entire study abroad journey.',
    },
    {
        question: 'What all covers under Premium Counseling?',
        answer: 'We offer comprehensive services for students preparing to study abroad covering everything from analyzing their profiles to arranging accommodations. Our commitment is to address all the concerns and queries a student may have throughout the admission journey, ensuring they have the necessary information at every step.',
    },
    {
        question: 'Best time to choose Premium Counseling?',
        answer: 'It is advisable for students to consider enrolling in premium counseling a year ahead to strategically apply to top international schools. This allows for personalized guidance in profile development, enhancing the chances of securing admission with valuable insights.',
    },
    {
        question: 'How does Aspire Each Premium Counseling help with LOR & SOP?',
        answer: 'We help you tailor-make your Statement of Purpose, Personal statements and all other types of Essays as per your course and university, we vouch for our expertise that leads you to not only good admits but also lucrative scholarships.',
    },
    {
        question: 'Which are the best Destinations to Pursue Higher Education?',
        answer: 'This depends on various factors such as your area of study, completely depends on the degree which you would like to pursue.',
    },
    {
        question: 'How do you get Teaching Assistance / Research Assistance / Scholarships?',
        answer: 'Our company founders have helped students over the years with applying to schools which offer such opportunities and understand the process so they can get this suiting their profile.',
    },
    {
        question: 'How many schools can I apply with premium counseling?',
        answer: 'With our Premium counseling student can apply to minimum 8 schools in a plan which can be increased to 10-12 based on the finalized list with the help of our Founders and Counselors.',
    },
    {
        question: 'How do we get application fee waivers?',
        answer: 'Aspire Each Founders and Counselors are equipped to help you know the schools which offer fee waivers and help you get the same through addressing the right process and approach to get it. Eg, Emails, University Events, Partner Schools and many other ways.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need to know about our premium counseling and study abroad services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900 leading-snug">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-primary border-primary' : ''}`}>
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 text-white" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-slate-600" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
