import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    query,
    orderBy
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'sonner';

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    initials: string;
    quote: string;
    rating: number;
}

interface TestimonialContextType {
    testimonials: Testimonial[];
    loading: boolean;
    addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => Promise<void>;
    deleteTestimonial: (id: string) => Promise<void>;
}

const TestimonialsContext = createContext<TestimonialContextType | undefined>(undefined);

export const TestimonialsProvider = ({ children }: { children: ReactNode }) => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));

        // Real-time listener
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Testimonial[];

            setTestimonials(docs);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching testimonials:", error);
            toast.error("Failed to load testimonials");
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const addTestimonial = async (testimonial: Omit<Testimonial, 'id'>) => {
        try {
            await addDoc(collection(db, 'testimonials'), {
                ...testimonial,
                createdAt: new Date().toISOString()
            });
            toast.success("Testimonial added successfully");
        } catch (error) {
            console.error("Error adding testimonial:", error);
            toast.error("Failed to add testimonial");
            throw error;
        }
    };

    const deleteTestimonial = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'testimonials', id));
            toast.success("Testimonial deleted successfully");
        } catch (error) {
            console.error("Error deleting testimonial:", error);
            toast.error("Failed to delete testimonial");
            throw error;
        }
    };

    return (
        <TestimonialsContext.Provider value={{ testimonials, loading, addTestimonial, deleteTestimonial }}>
            {children}
        </TestimonialsContext.Provider>
    );
};

export const useTestimonials = () => {
    const context = useContext(TestimonialsContext);
    if (!context) {
        throw new Error('useTestimonials must be used within a TestimonialsProvider');
    }
    return context;
};
