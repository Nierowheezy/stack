
import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Stack Terminal is a literal game changer. Our frontline staff can now confirm bank transfers in seconds, reducing checkout friction by over 70%.",
      name: "Tayo Sowole",
      designation: "Product Lead at uLesson",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote:
        "The Physical Terminal is built for speed. Even with high-traffic periods at our Burger King outlets, transaction reliability remains perfect.",
      name: "Victoria Ogundele",
      designation: "Operations Manager at Burger King Nigeria",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote:
        "The programmable API allowed us to build a custom tipping flow that our staff loves. It's the most flexible POS hardware we've ever used.",
      name: "Kunle Adeniyi",
      designation: "CTO at Leisure Sports Park",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote:
        "Scaling our branches across Lagos was easy with the central dashboard. We monitor every terminal's health and sales in real-time.",
      name: "Chidinma Okafor",
      designation: "Founder at Diva Cakes",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4">Loved by modern teams</h2>
        <p className="text-lg text-white/40 max-w-2xl mx-auto">
          From startups to global enterprises, thousands of businesses rely on Stack Terminal.
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
};

export default TestimonialsSection;
