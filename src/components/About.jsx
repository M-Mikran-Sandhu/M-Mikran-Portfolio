import { motion } from 'framer-motion'
import {
  User,
  MapPin,
  Calendar,
  Award,
  Target,
  Heart,
  Coffee,
  Code,
  Palette,
  Globe,
  Linkedin
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Gujranwala, Pakistan' },
    { icon: Calendar, label: 'Experience', value: '3+ Years' },
    { icon: Award, label: 'Certifications', value: '28 Professional' },
    { icon: Globe, label: 'Languages', value: 'English, Urdu, Punjabi' }
  ]

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations and drive business growth.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Passionate about creating innovative digital experiences that make a meaningful impact.'
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Dedicated to continuous learning and staying updated with the latest technologies and trends.'
    }
  ]

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'Brand Identity',
    'E-commerce Solutions',
    'Mobile Development',
    'SEO Optimization',
    'Social Media Strategy'
  ]

  const achievements = [
    '22+ Successful Projects Completed',
    '98% Client Retention Rate',
    '25+ Happy Clients Worldwide',
    'Owner & Founder of Alpha Group',
    '28+ Professional Certifications',
    'Expert in Full-Stack Development'
  ]

  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 scrollbar-futuristic">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <User className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">About Me</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Get to know more about my journey, values, and what drives me to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Professional Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I am a passionate Software Developer and Owner of Alpha Group with expertise in modern web technologies,
                    digital marketing, and comprehensive business solutions. My passion lies in creating visually compelling
                    designs, optimizing digital presence, and implementing cutting-edge technologies for enhanced business growth.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 3 years of experience in the industry, I have successfully completed 22+ projects
                    for diverse clients, ranging from small businesses to established companies. I specialize in
                    building scalable web applications using React, Node.js, and modern development frameworks,
                    creating engaging user interfaces, and developing comprehensive digital solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As the owner of Alpha Group, I lead a team dedicated to helping businesses thrive in
                    the digital world through expert services and innovative solutions. With 28+ professional
                    certifications and a commitment to excellence, my approach combines technical expertise
                    with creative vision to deliver results that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Core Values & Philosophy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {coreValues.map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interests & Specializations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    Interests & Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    My interests span across various aspects of digital technology and design.
                    I'm constantly exploring new trends and technologies to stay at the forefront of the industry.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      >
                        <Badge variant="secondary" className="text-sm py-1 px-3">
                          {interest}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-blue-600/20">
                  <img
                    src="/MMS PIC.jpg"
                    alt="Muhammad Mikran Sandhu"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center text-4xl font-bold text-primary" style={{ display: 'none' }}>
                    MMS
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold mb-1">Muhammad Mikran Sandhu</h3>
                  <p className="text-sm text-muted-foreground mb-3">Developer & Designer</p>
                  <Button
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/m-mikran-sandhu/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">22+</div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">28+</div>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-blue-600/10">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Let's Work Together</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to bring your ideas to life? Let's discuss your next project.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="/contact">Get In Touch</a>
                  </Button>
                  <Button variant="outline" className="w-full mt-2" asChild>
                    <a href="https://zcal.co/muhammad-mikran" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Meeting
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

