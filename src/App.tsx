import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Ribbons from "@/components/ui/Ribbons";
import LoadingScreen from "./components/LoadingScreen";
import { LenisProvider } from "./contexts/LenisContext";
import { TestimonialsProvider } from "./hooks/useTestimonials";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { useAdminTrigger } from "./hooks/useAdminTrigger";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const TestimonialsPage = lazy(() => import("./pages/Testimonials"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const Ebook = lazy(() => import("./pages/Ebook"));
const UniversityList = lazy(() => import("./pages/UniversityList"));
const CourseUniversities = lazy(() => import("./pages/CourseUniversities"));
const FounderProfile = lazy(() => import("./pages/FounderProfile"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));


const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
};

const AppContent = () => {
  useAdminTrigger(); // Initialize global trigger
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/universities/:country" element={<UniversityList />} />
        <Route path="/courses/:courseName" element={<CourseUniversities />} />
        <Route path="/founder/:id" element={<FounderProfile />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile to disable heavy effects
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LenisProvider>
          <TestimonialsProvider>
            <AuthProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <LoadingScreen key="loading" />
                  ) : (
                    <>
                      {!isMobile && (
                        <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
                          <Ribbons
                            baseThickness={11}
                            colors={["#14b8a6"]}
                            speedMultiplier={0.5}
                            maxAge={500}
                            enableFade={true}
                            enableShaderEffect={false}
                          />
                        </div>
                      )}
                      <BrowserRouter>
                        <ScrollToTop />
                        <AppContent />
                      </BrowserRouter>
                    </>
                  )}
                </AnimatePresence>
              </TooltipProvider>
            </AuthProvider>
          </TestimonialsProvider>
        </LenisProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
