
import { motion } from 'framer-motion';
import { useSpringValue, animated } from '@react-spring/web';

const Achievements = () => {
  const competitions = [
    {
      place: "2nd Place",
      event: "Algeria Data Cup (ADC)",
      year: "2024",
      description: "National data science competition focusing on AI solutions for real-world challenges",
      medal: "🥈",
      color: "text-muted-foreground"
    },
    {
      place: "3rd Place", 
      event: "Ingehack",
      year: "2024",
      description: "Prestigious hackathon celebrating innovation and technical excellence",
      medal: "🥉",
      color: "text-warning"
    },
    {
      place: "1st Place",
      event: "HAiCK AI Challenge",
      year: "2024", 
      description: "AI-focused competition highlighting cutting-edge machine learning solutions",
      medal: "🏆",
      color: "text-accent"
    }
  ];

  const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => {
    const scaleValue = useSpringValue(1, {
      config: { mass: 1, friction: 12, tension: 200 },
    });

    const rotateValue = useSpringValue(0, {
      config: { mass: 1, friction: 8, tension: 120 },
    });

    return (
      <motion.div
        initial={{ opacity: 0, y: 50, rotateY: 45 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.8 }}
        className="relative"
      >
        <animated.div
          style={{ 
            scale: scaleValue,
            rotateY: rotateValue.to(r => `${r}deg`)
          }}
          onMouseEnter={() => {
            scaleValue.start(1.05);
            rotateValue.start(5);
          }}
          onMouseLeave={() => {
            scaleValue.start(1);
            rotateValue.start(0);
          }}
          className="bg-gradient-to-br from-background/90 to-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 h-full cursor-pointer relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="text-4xl">{achievement.medal}</div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${achievement.color}`}>
                  {achievement.place}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.year}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 gradient-text">
              {achievement.event}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {achievement.description}
            </p>

            {/* Achievement highlight */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6"
            />
          </div>
        </animated.div>
      </motion.div>
    );
  };

  return (
    <section id="achievements" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Competition <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for excellence in AI, data science, and innovation competitions across Algeria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitions.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "3+", label: "Competition Wins", icon: "🏆" },
            { number: "5+", label: "AI Projects", icon: "🤖" },
            { number: "2+", label: "Years Experience", icon: "⭐" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center bg-background/50 p-6 rounded-xl border border-border"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
