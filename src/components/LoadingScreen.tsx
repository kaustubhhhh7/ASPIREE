
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
    "The world is a book and those who do not travel read only one page.",
    "Investment in knowledge pays the best interest.",
    "Education is the passport to the future.",
    "Your future is waiting across the ocean.",
];

const LoadingScreen = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px] animate-pulse"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
                {/* Logo Container with multiple rings */}
                <div className="relative">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0 rounded-full border border-teal-500/30"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{
                                scale: [1, 1.5 + index * 0.2],
                                opacity: [0.5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.4,
                                ease: "easeOut",
                            }}
                        />
                    ))}

                    <motion.div
                        className="relative z-20 h-48 w-48 md:h-64 md:w-64 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center p-8 shadow-2xl ring-1 ring-white/20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                    >
                        <motion.img
                            src="/images/Aspire Logo.png"
                            alt="ASPIRE Logo"
                            className="h-full w-full object-contain drop-shadow-md"
                            animate={{
                                scale: [1, 1.05, 1],
                                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-4 max-w-md px-4">
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        ASPIRE
                    </motion.h2>

                    <div className="h-16 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={quoteIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm md:text-base text-muted-foreground italic font-medium text-center"
                            >
                                "{quotes[quoteIndex]}"
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Styled Progress Bar */}
                <div className="w-64 md:w-80 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-400 to-cyan-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 skew-x-12"></div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
