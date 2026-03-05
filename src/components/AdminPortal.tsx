import { useState } from 'react';
import { useTestimonials } from '@/hooks/useTestimonials';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface AdminPortalProps {
    isOpen: boolean;
    onClose: (open: boolean) => void;
}

export const AdminPortal = ({ isOpen, onClose }: AdminPortalProps) => {
    const { addTestimonial } = useTestimonials();
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        quote: '',
        rating: 5,
        avatar: '',
        initials: '',
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addTestimonial({
                ...formData,
                initials: formData.initials || formData.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase(),
            });
            setFormData({ name: '', role: '', quote: '', rating: 5, avatar: '', initials: '' });
            onClose(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Testimonial</DialogTitle>
                    <DialogDescription>
                        Add a new testimonial here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="text-right">
                            Role
                        </Label>
                        <Input
                            id="role"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="col-span-3"
                            placeholder="e.g. University, Fall 2023"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quote" className="text-right">
                            Quote
                        </Label>
                        <Textarea
                            id="quote"
                            value={formData.quote}
                            onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="avatar" className="text-right">
                            Image URL
                        </Label>
                        <Input
                            id="avatar"
                            value={formData.avatar}
                            onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                            className="col-span-3"
                            placeholder="https://..."
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="rating" className="text-right">
                            Rating
                        </Label>
                        <Input
                            id="rating"
                            type="number"
                            min="1"
                            max="5"
                            value={formData.rating}
                            onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save changes'}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
