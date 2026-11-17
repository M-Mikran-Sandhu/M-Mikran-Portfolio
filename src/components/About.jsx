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
    { icon: Calendar, label: 'Status', value: '7th semester, BSc CS' },
    { icon: Award, label: 'Graduation', value: 'August 2027' },
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
    'Practical machine learning',
    'Reliable AI software',
    'Systems software',
    'Digital image forensics',
    'Image analysis',
    'Full-stack web development',
    'Data structures and algorithms',
    'Software engineering'
  ]

  const highlights = [
    'BSc Computer Science student at UCP Gujranwala, graduating August 2027',
    'Freelance web developer for local professionals and small businesses',
    'Projects in image forensics, operating systems scheduling, and web development',
    'Completed professional certificates in AI literacy, GitHub, and web skills'
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
            I am a Computer Science and AI student at UCP Gujranwala, graduating in August 2027, and I am looking for internships, research, graduate study, and jobs from 2027.
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
                    I am a BSc Computer Science student at the University of Central Punjab, Gujranwala Campus.
                    I am in my seventh semester and expect to graduate in August 2027. Alongside my degree I
                    do freelance web development, mostly building sites for local professionals and small businesses.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I care about how software actually works, not only how it looks. My recent work includes
                    digital image forensics, real-time process scheduling, and access-control tooling, as well as
                    React and Flask web applications. I want to go further in computer science and AI, especially
                    in making software systems reliable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I am open to internships, research opportunities, graduate (MSc) study, scholarships,
                    and software roles from 2027, in any country.
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
                    These are the areas I want to keep studying and building in, both in coursework and in future internships or graduate study.
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

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {highlights.map((achievement, index) => (
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
                    <div className="text-2xl font-bold text-primary">BSc CS</div>
                    <p className="text-sm text-muted-foreground">UCP Gujranwala</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7th</div>
                    <p className="text-sm text-muted-foreground">Semester</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2027</div>
                    <p className="text-sm text-muted-foreground">Graduation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3.1</div>
                    <p className="text-sm text-muted-foreground">CGPA / 4.0</p>
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
                  <h3 className="font-semibold mb-2">Get in touch</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I am open to internships, research, graduate study, and roles from 2027.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="/contact">Get in touch</a>
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

