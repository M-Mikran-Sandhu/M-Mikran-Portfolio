import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Code,
  Palette,
  Globe,
  Users,
  Award,
  Briefcase,
  Brain,
  Database,
  Cpu,
  Bot,
  FileCode,
  Layers,
  Smartphone,
  Monitor,
  Cloud,
  Zap,
  Server,
  Shield,
  Search,
  Camera,
  Headphones,
  Gamepad2,
  Rocket,
  Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'

const Home = () => {
  const [typedText, setTypedText] = useState('')
  const roles = [
    'Web Developer',
    'UI/UX Designer',
    'Social Media Manager',
    'Logo Designer',
    'Full Stack Developer'
  ]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentRoleIndex])

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '3+' },
    { icon: Code, label: 'Projects Completed', value: '22+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Award, label: 'Certifications', value: '28+' },
  ]

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive websites and web applications using modern technologies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end development from frontend to backend solutions',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-primary font-medium"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                >
                  Muhammad Mikran Sandhu
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-base sm:text-lg text-muted-foreground mb-2"
                >
                  Software Developer & Owner of Alpha Group
                </motion.p>
                <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground h-6 sm:h-8">
                  <span className="text-foreground font-medium">{typedText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    |
                  </motion.span>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                Passionate Software Developer & Owner of Alpha Group with expertise in modern web technologies,
                full-stack development, and comprehensive digital solutions. Specialized in React, Node.js,
                and creating innovative applications that drive business growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/m-mikran-sandhu/" target="_blank" rel="noopener noreferrer">
                    View LinkedIn Profile
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="/Resumeofmikran.pdf" download="Muhammad_Mikran_Sandhu_Resume.pdf">
                    Download CV
                    <Download className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0">
                {/* Animated Background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-75"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
                ></motion.div>

                {/* Profile Image Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-card">
                  <img
                    src="/MMS PIC.jpg"
                    alt="Muhammad Mikran Sandhu"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                    MMS
                  </div>
                </div>

                {/* Floating Elements - Orbiting with gaps while revolving */}
                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Code className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [40, 400]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Brain className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [80, 440]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Bot className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [120, 480]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Database className="w-6 h-6 text-cyan-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [160, 520]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Palette className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [200, 560]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Cpu className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [240, 600]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <FileCode className="w-6 h-6 text-yellow-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [280, 640]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Layers className="w-6 h-6 text-pink-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [320, 680]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <Smartphone className="w-6 h-6 text-indigo-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [30, 390]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                    <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
                      <Monitor className="w-5 h-5 text-slate-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [90, 450]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                    <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
                      <Cloud className="w-5 h-5 text-sky-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [150, 510]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                    <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
                      <Globe className="w-5 h-5 text-emerald-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [210, 570]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                    <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
                      <Zap className="w-5 h-5 text-amber-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [270, 630]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                    <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
                      <Users className="w-5 h-5 text-violet-500" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [330, 690]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                    <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
                      <Award className="w-5 h-5 text-rose-500" />
                    </div>
                  </div>
                </motion.div>

                {/* Third Ring - Outermost orbit with additional tech icons */}
                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Server className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [45, 405]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [90, 450]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Search className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [135, 495]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Camera className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [180, 540]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Headphones className="w-4 h-4 text-pink-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [225, 585]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Gamepad2 className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [270, 630]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Rocket className="w-4 h-4 text-red-600" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [315, 675]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg">
                      <Settings className="w-4 h-4 text-slate-700" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-12 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-3 sm:p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">What I Do</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              I provide end-to-end digital solutions that help businesses thrive in the digital world
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-4 sm:p-6 h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12 bg-gradient-to-r from-primary/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4">Ready to Start Your Project?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Let's work together to bring your ideas to life. I'm always excited to take on new challenges
              and create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 w-full sm:w-auto"
                asChild
              >
                <a href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="/projects">View My Work</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

