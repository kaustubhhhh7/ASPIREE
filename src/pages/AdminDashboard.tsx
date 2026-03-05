import { useTestimonials } from "@/hooks/useTestimonials";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Trash2, LogOut, Plus } from "lucide-react";
import { useState } from "react";
import { AdminPortal } from "@/components/AdminPortal"; // Reuse the modal for adding
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const { testimonials, deleteTestimonial } = useTestimonials();
    const { logout, user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/admin/login');
    }

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
                        <p className="text-slate-500">Welcome, {user?.email}</p>
                    </div>

                    <div className="flex gap-4">
                        <Button onClick={() => setIsModalOpen(true)}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Testimonial
                        </Button>
                        <Button variant="outline" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                        <h2 className="text-xl font-semibold">Manage Testimonials</h2>
                    </div>
                    <div className="divide-y divide-slate-200">
                        {testimonials.length === 0 ? (
                            <div className="p-8 text-center text-slate-500">No testimonials found.</div>
                        ) : (
                            testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="p-6 flex items-start justify-between hover:bg-slate-50 transition-colors">
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                        <p className="text-slate-700 mt-2 max-w-2xl">{testimonial.quote}</p>
                                        <div className="flex items-center gap-1 mt-2">
                                            <span className="text-sm font-medium text-slate-600">Rating: {testimonial.rating}/5</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => {
                                            if (confirm('Are you sure you want to delete this testimonial?')) {
                                                deleteTestimonial(testimonial.id);
                                            }
                                        }}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <AdminPortal isOpen={isModalOpen} onClose={setIsModalOpen} />
        </div>
    );
};

export default AdminDashboard;
