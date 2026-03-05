import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const Ebook = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Free Study Abroad E-Book - AspireEach"
                description="Download our free comprehensive e-book guide on studying abroad, university admissions, scholarships, and visa preparation."
                canonical="https://aspireeach.com/ebook"
            />
            <Navbar />
            <main className="flex-grow pt-16 lg:pt-[116px]">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-4">Free E-Book</h1>
                    <p className="text-lg text-gray-600">Coming soon...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Ebook;
