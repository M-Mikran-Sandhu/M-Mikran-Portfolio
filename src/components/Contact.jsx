import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Linkedin,
  Github
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mikran.student@gmail.com',
      href: 'mailto:mikran.student@gmail.com',
      color: 'text-blue-500'
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
      value: 'linkedin.com/in/m-mikran-sandhu',
      href: 'https://www.linkedin.com/in/m-mikran-sandhu/',
      color: 'text-blue-600',
      description: 'Professional profile'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/M-Mikran-Sandhu',
      href: 'https://github.com/M-Mikran-Sandhu',
      color: 'text-gray-700',
      description: 'Coursework and project code'
    }
  ]

  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 scrollbar-futuristic">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Get in touch</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Open to internships, research and graduate study from 2027. The best way to reach me is by email.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-secondary/50 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href !== '#' ? (
                      <a href={item.href} className="font-medium hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Profiles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-colors"
                >
                  <social.icon className={`w-5 h-5 ${social.color}`} />
                  <div>
                    <p className="font-medium">{social.label}</p>
                    <p className="text-sm text-muted-foreground">{social.value}</p>
                  </div>
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full" asChild>
                  <a href="mailto:mikran.student@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email me
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
