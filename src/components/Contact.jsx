import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
  Clock,
  ExternalLink,
  Bot,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Primary Email',
      value: 'contact@mikran.alphasolutions.online',
      href: 'mailto:contact@mikran.alphasolutions.online',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      label: 'Personal Email',
      value: 'sandhumikran@gmail.com',
      href: 'mailto:sandhumikran@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+92 349 420 6922',
      href: 'https://wa.me/923494206922',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gujranwala, Pakistan',
      href: '#',
      color: 'text-red-500'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/m-mikran-sandhu/',
      color: 'text-blue-600',
      description: 'Professional networking and career updates'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Code Repositories',
      href: 'https://github.com/m-mikran-sandhu',
      color: 'text-gray-700',
      description: 'Open source projects and code samples'
    },
    {
      icon: ExternalLink,
      label: 'All Social Links',
      value: 'Visit My Taplink',
      href: 'https://taplink.cc/mmikransandhu',
      color: 'text-green-600',
      description: 'All my social media profiles in one place'
    }
  ]

  const services = [
    'Web Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'Digital Marketing',
    'Logo & Brand Design',
    'Social Media Management'
  ]

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM PKT', available: true },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM PKT', available: true },
    { day: 'Sunday', time: 'By Appointment Only', available: false }
  ]

  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 scrollbar-futuristic">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Get In Touch</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to start your next project? I'd love to hear from you.
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Chatbot Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-primary" />
                    Chat with My AI Assistant
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Get instant answers about Muhammad Mikran Sandhu, Alpha Group owner and software developer from Gujranwala, Pakistan.
                    Ask about React development, Node.js expertise, 28+ certifications, 22+ projects, or schedule a meeting at zcal.co/muhammad-mikran.
                    Available 24/7 to help you learn more about professional services at mikran.alphasolutions.online.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-lg p-1">
                    <iframe
                      src="https://www.chatbase.co/chatbot-iframe/XMu27tiEkhnCS0bXQzKZJ"
                      width="100%"
                      style={{ height: '100%', minHeight: '700px' }}
                      frameBorder="0"
                      title="AI Assistant Chatbot"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Services I Offer</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Professional services to help your business grow and succeed online.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-3">
                    {services.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <Badge variant="outline" className="w-full justify-center py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                          {service}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact Actions */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Ready to start your project? Contact me directly through your preferred method.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      asChild
                    >
                      <a href="https://wa.me/923494206922" target="_blank" rel="noopener noreferrer">
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp Me
                      </a>
                    </Button>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      asChild
                    >
                      <a href="mailto:contact@mikran.alphasolutions.online">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </div>

                  {/* Meeting Scheduler */}
                  <div className="mt-4">
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      asChild
                    >
                      <a href="https://zcal.co/muhammad-mikran" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule a Meeting
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      <a
                        href={contact.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0 ${contact.color}`}>
                          <contact.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="font-medium group-hover:text-primary transition-colors text-sm break-all">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center ${social.color}`}>
                          <social.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {social.value}
                            </p>
                            <ExternalLink className="w-3 h-3 text-muted-foreground" />
                          </div>
                          <p className="text-xs text-muted-foreground">{social.description}</p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {availability.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between p-2 rounded-lg bg-secondary/20"
                    >
                      <div>
                        <p className="font-medium text-sm">{schedule.day}</p>
                        <p className="text-xs text-muted-foreground">{schedule.time}</p>
                      </div>
                      <Badge
                        variant={schedule.available ? "default" : "outline"}
                        className="text-xs"
                      >
                        {schedule.available ? "Available" : "Limited"}
                      </Badge>
                    </motion.div>
                  ))}
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Response time: Usually within 24 hours
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-blue-600/10">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Prefer Direct Contact?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with me directly on LinkedIn for faster communication.
                  </p>
                  <Button className="w-full" asChild>
                    <a
                      href="https://www.linkedin.com/in/m-mikran-sandhu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Message on LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a new website, want to improve your digital presence,
                or have a custom project in mind, I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:contact@mikran.alphasolutions.online">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/m-mikran-sandhu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

