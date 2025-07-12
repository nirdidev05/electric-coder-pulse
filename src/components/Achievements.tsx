import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

import { useTranslation } from '@/hooks/useTranslation';
const BubbleBackground = ({ interactive = false, className = "", colors = {
  first: '18,113,255',
  second: '34,197,94',
  third: '59,130,246',
  fourth: '16,185,129',
  fifth: '139,69,19',
  sixth: '79,70,229'
} }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: Object.values(colors)[i % Object.keys(colors).length]
  }));

  return (
    <div className={`overflow-hidden ${className}`}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full blur-xl opacity-20"
          style={{
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle, rgba(${bubble.color}, 0.8) 0%, rgba(${bubble.color}, 0.2) 70%, transparent 100%)`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            x: interactive ? (mousePosition.x - window.innerWidth / 2) * 0.02 : 0,
            y: interactive ? (mousePosition.y - window.innerHeight / 2) * 0.02 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        />
      ))}
    </div>
  );
};

const SlidingNumber = ({ number, className = "", duration = 2 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = typeof number === 'string' ? parseInt(number) : number;
    const increment = end / (duration * 60); // 60fps

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setDisplayNumber(end);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, number, duration]);

  return (
    <span ref={ref} className={className}>
      {displayNumber}
    </span>
  );
};

const Achievements = () => {
  const t = useTranslation();

  const competitions = [
    {
      place: t.achievements.competitions.place3rd,
      event: t.achievements.competitions.ingehack.event,
      year: "2023",
      description: t.achievements.competitions.ingehack.description,
      medal: "🥉",
      color: "text-orange-400",
      gradient: "from-orange-400 to-red-500"
    },
    {
      place: t.achievements.competitions.place2nd,
      event: t.achievements.competitions.algeriaDataCup.event,
      year: "2025",
      description: t.achievements.competitions.algeriaDataCup.description,
      medal: "🥈",
      color: "text-gray-300",
      gradient: "from-gray-300 to-gray-400"
    },
    {
      place: t.achievements.competitions.place1st, 
      event: t.achievements.competitions.haickAiChallenge.event,
      year: "2025",
      description: t.achievements.competitions.haickAiChallenge.description,
      medal: "🏆",
      color: "text-yellow-400",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  const AchievementCard = ({ achievement, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 12
        }}
        className="relative group"
      >
        <motion.div
          className="relative overflow-hidden"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ 
            y: -8,
            rotateY: 3,
            scale: 1.02
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Glass morphism card */}
          <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 h-full overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl">
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.gradient} opacity-20 blur-xl`} />
              <div className="absolute inset-[1px] rounded-3xl bg-slate-900/80 backdrop-blur-xl" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <motion.div 
                  className="text-5xl"
                  animate={isHovered ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {achievement.medal}
                </motion.div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${achievement.color} mb-1`}>
                    {achievement.place}
                  </div>
                  <div className="text-sm text-blue-300 font-mono bg-blue-500/10 px-2 py-1 rounded-full">
                    {achievement.year}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {achievement.event}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                {achievement.description}
              </p>

              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 1.2 }}
                  className={`h-1 bg-gradient-to-r ${achievement.gradient} rounded-full`}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 1.2, duration: 0.5 }}
                  className={`absolute -right-1 -top-1 w-3 h-3 rounded-full bg-gradient-to-r ${achievement.gradient} shadow-lg`}
                />
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <BubbleBackground 
        interactive 
        className="absolute inset-0"
        colors={{
          first: '34,197,94',
          second: '59,130,246', 
          third: '255,255,255',
          fourth: '16,185,129',
          fifth: '139,69,19',
          sixth: '79,70,229'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="tex-white bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              {t.achievements.title.split(' ')[0]}
            </span>{' '}
            <span className="text-white">{t.achievements.title.split(' ')[1]}</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.achievements.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {competitions.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "4", label: t.achievements.stats.competitionWins, icon: "🏆", color: "from-yellow-400 to-orange-500" },
            { number: "8", label: t.achievements.stats.dataScienceProjects, icon: "🤖", color: "from-blue-400 to-cyan-500" },
            { number: "2", label: t.achievements.stats.yearsExperience, icon: "⭐", color: "from-emerald-400 to-green-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 group hover:border-white/20 transition-all duration-300"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {stat.icon}
              </motion.div>
              <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                <SlidingNumber number={stat.number} />
                <span>+</span>
              </div>
              <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
              
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse" />
      </div>
    </section>
  );
};

export default Achievements;