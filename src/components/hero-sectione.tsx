import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Award, TrendingUp, Brain, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      })
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const FloatingDataPoint = ({ delay, x, y, duration = 4 }: { delay: number; x: string; y: string; duration?: number }) => (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ 
        left: x, 
        top: y,
        backgroundColor: '#646cff40' // Using your App.css color with opacity
      }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.5, 1],
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Dynamic Background - keeping the same as original */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1E1E2F] via-[#2D3748] to-[#1A202C]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        {/* Animated Grid - using App.css colors */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#646cff20 1px, transparent 1px),
              linear-gradient(90deg, #646cff20 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        
        {/* Floating Market Data Points */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <FloatingDataPoint
              key={i}
              delay={i * 0.2}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
              duration={3 + Math.random() * 2}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F]/90 via-transparent to-[#1E1E2F]/50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-[#1E1E2F]/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 transition-all duration-300 font-medium group"
            style={{ color: '#888' }} // Using read-the-docs color from App.css
            onMouseEnter={(e) => e.target.style.color = '#646cff'}
            onMouseLeave={(e) => e.target.style.color = '#888'}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex-1 px-4 py-16 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="text-center">
          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <Badge 
              className="mb-4 px-6 py-3 text-lg font-semibold backdrop-blur-sm"
              style={{
                background: 'linear-gradient(to right, #646cff20, #61dafb20)',
                color: '#61dafb',
                border: '1px solid #61dafb50'
              }}
            >
              <Award className="w-5 h-5 mr-2" />
              🏆 HAICK 2025 TSA Challenge Winner
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span 
              className="bg-clip-text text-transparent drop-shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(to right, #646cff, #61dafb, #646cff)`
              }}
            >
              MarketPulse
            </span>
            <span className="block text-slate-200 text-2xl sm:text-3xl lg:text-4xl mt-4 font-light">
              Multimodal Financial Forecasting
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl text-slate-300 mb-4">
              Advanced AI combining market data & news sentiment
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Technical showcase of our <span style={{ color: '#646cff' }} className="font-semibold">1st place solution</span> achieving 
              <span style={{ color: '#61dafb' }} className="font-semibold"> 68% performance improvement</span> through 
              <span style={{ color: '#646cff' }} className="font-semibold"> multimodal ensemble learning</span>
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { icon: Award, value: "-0.66151", label: "Winning Score", color: "#61dafb" },
              { icon: TrendingUp, value: "0.44+", label: "R² Achievement", color: "#646cff" },
              { icon: Brain, value: "120+", label: "Features Engineered", color: "#61dafb" }
            ].map(({ icon: Icon, value, label, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="p-6 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(100, 108, 255, 0.1)',
                  borderColor: 'rgba(100, 108, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color + '80'
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(100, 108, 255, 0.3)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color }} />
                <div className="text-2xl font-bold mb-1" style={{ color }}>{value}</div>
                <div className="text-slate-300 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 text-sm"
          >
            {["LightGBM Ensemble", "Sentiment Analysis", "Correlation Engineering", "Optuna Optimization"].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 text-slate-300 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: index % 2 === 0 ? '#646cff20' : '#61dafb20',
                  borderColor: index % 2 === 0 ? '#646cff40' : '#61dafb40',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = index % 2 === 0 ? '#646cff' : '#61dafb'
                  e.target.style.borderColor = index % 2 === 0 ? '#646cff' : '#61dafb'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1'
                  e.target.style.borderColor = index % 2 === 0 ? '#646cff40' : '#61dafb40'
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm" style={{ borderColor: '#646cff80' }}>
            <motion.div 
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: '#646cff' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}