import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCircle, FiLayers, FiLayout, FiCode, FiArrowUpRight } from 'react-icons/fi';
import './FeatureShowcase.css';

import profileImg from '@/assets/images/profile-building.png';
import universityImg from '@/assets/images/university-choice.png';
import visaImg from '@/assets/images/visa-assistance.png';
import networkImg from '@/assets/images/global-network.png';
import coachingImg from '@/assets/images/success-coaching.png';

const features = [
    {
        id: 1,
        title: 'Profile Building',
        description: 'Strategically enhancing your academic and extracurricular profile.',
        icon: <FiFileText />,
        image: profileImg,
        color: '#14b8a6',
        size: 'large'
    },
    {
        id: 2,
        title: 'University Choice',
        description: 'Expert shortlisting optimized for ROI.',
        icon: <FiCircle />,
        image: universityImg,
        color: '#0ea5e9',
        size: 'small'
    },
    {
        id: 3,
        title: 'Visa Assistance',
        description: 'End-to-end support for mock interviews.',
        icon: <FiLayers />,
        image: visaImg,
        color: '#6366f1',
        size: 'medium'
    },
    {
        id: 4,
        title: 'Global Network',
        description: 'Connect with a vast network of alumni.',
        icon: <FiLayout />,
        image: networkImg,
        color: '#f59e0b',
        size: 'small'
    },
    {
        id: 5,
        title: 'Success Coaching',
        description: 'Proven strategies for test preparation.',
        icon: <FiCode />,
        image: coachingImg,
        color: '#ec4899',
        size: 'medium'
    }
];

const FeatureShowcase = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            className="feature-showcase-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredId(null)}
        >
            <div className="bento-grid">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        className={`bento-item ${feature.size} ${hoveredId === feature.id ? 'active' : ''}`}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            z: hoveredId === feature.id ? 20 : 0
                        }}
                        transition={{
                            delay: index * 0.1,
                            type: 'spring',
                            stiffness: 260,
                            damping: 20
                        }}
                        onMouseEnter={() => setHoveredId(feature.id)}
                        style={{
                            '--item-color': feature.color,
                        } as any}
                    >
                        <div className="item-inner">
                            <div className="item-bg">
                                <img src={feature.image} alt={feature.title} />
                                <div className="item-overlay" />
                            </div>

                            <div className="item-content">
                                <div className="item-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <div className="item-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                                <div className="item-action">
                                    <FiArrowUpRight />
                                </div>
                            </div>

                            {/* Dynamic Glow Effect */}
                            {hoveredId === feature.id && (
                                <motion.div
                                    className="item-glow"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{
                                        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${feature.color}33 0%, transparent 70%)`
                                    }}
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Background Decorative Elements */}
            <div className="showcase-bg-elements">
                <div className="circle-one" />
                <div className="circle-two" />
            </div>
        </div>
    );
};

export default FeatureShowcase;
