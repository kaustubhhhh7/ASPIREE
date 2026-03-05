export interface BlogPost {
    id: number;
    title: string;
    category: string;
    author: string;
    date: string;
    excerpt: string;
    image: string;
    content?: string;
}

export const blogs: BlogPost[] = [
    {
        id: 1,
        title: "Introduction to Education Loan",
        category: "Finance",
        author: "AspireEach",
        date: "Feb 5, 2026",
        excerpt: "Navigating the world of education loans can be daunting. Here's a comprehensive guide to help you understand the basics.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
        content: `It is sometimes great to know that life is going as planned and that you’ve been really working hard for it to make it big. In academics, we do work hard for the challenging things ahead of us but there are lots of others who are also striving for it. It always happens that we go as per planned but sometimes we need to improvise towards a different direction which will take us to another level & that is the need of the hour.

I always advocate for those who are going for Higher Education and a quality one, be it in one’s own country or Abroad. I’m dedicating this book to all the students who have the inner fire to learn something new every day and prosper in their career paths. In my vision, finance shouldn’t be a problem for any student so for that I have assisted all the students who seek Financial help from Banks and other Financial Institutions. I have been in the service industry for 14 years & want to make sure that my experience benefits you from this blog. Now let’s crack on how to get your Education Loan in an easy way!`
    },
    {
        id: 2,
        title: "How much Amount is actually required for Studying Abroad",
        category: "Finance",
        author: "AspireEach",
        date: "Feb 3, 2026",
        excerpt: "Calculating the true cost of international education involves more than just tuition. Discover the hidden expenses to plan for.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Calculation of Total Cost of Education",
        category: "Finance",
        author: "AspireEach",
        date: "Jan 28, 2026",
        excerpt: "Step-by-step breakdown of how to estimate your total financial commitment for overseas studies.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Education Loan won't scare if you read these 4 points",
        category: "Finance",
        author: "AspireEach",
        date: "Jan 15, 2026",
        excerpt: "Unlock the secrets to a stress-free loan application process with these critical insights.",
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "9 Reasons on Why to Apply for Education Loan Early",
        category: "Finance",
        author: "AspireEach",
        date: "Jan 10, 2026",
        excerpt: "Don't wait until the last minute! Discover why early loan planning is essential for your success.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "How to Compare your Education Loan",
        category: "Finance",
        author: "AspireEach",
        date: "Jan 5, 2026",
        excerpt: "Learn how to evaluate different loan products, interest rates, and repayment terms to find the perfect match.",
        image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1000&auto=format&fit=crop"
    }
];
