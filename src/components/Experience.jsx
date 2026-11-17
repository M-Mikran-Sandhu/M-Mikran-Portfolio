import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Freelance Web Developer',
      company: 'Alpha Solutions',
      location: 'Gujranwala, Pakistan',
      period: 'October 2024 to Present',
      type: 'Freelance',
      current: true,
      description: 'Independent web development work under Alpha Solutions, building and deploying websites for local professionals and small businesses.',
      achievements: [
        'Designed and developed responsive websites using React, HTML, CSS, JavaScript, and Tailwind CSS',
        'Built and deployed client sites for local professionals, including doctors and a university professor',
        'Hosted finished sites on Vercel and Netlify',
        'Built utility and coursework apps, including a GPA calculator and a store front end'
      ],
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    }
  ]

  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 scrollbar-futuristic">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Professional Experience</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Selected work alongside my BSc Computer Science degree at UCP Gujranwala.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden lg:block" />

                <Card className="lg:ml-16">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <CardTitle className="text-xl">{experience.title}</CardTitle>
                        <p className="text-primary font-medium mt-1">{experience.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experience.current && (
                          <Badge>Current</Badge>
                        )}
                        {experience.type && (
                          <Badge variant="secondary">{experience.type}</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{experience.description}</p>
                    <ul className="space-y-2">
                      {experience.achievements.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-4">
                I am open to internships, research, graduate study, and software roles from 2027.
              </p>
              <Button asChild>
                <a href="/contact">
                  <Users className="w-4 h-4 mr-2" />
                  Get in touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
