import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Building,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Owner & Full Stack Developer',
      company: 'Alpha Group of Companies',
      location: 'Gujranwala, Pakistan',
      period: '2025 - Present',
      type: 'Full-time',
      current: true,
      description: 'Founded and currently leading Alpha Solutions, a comprehensive digital solutions company that helps businesses thrive in the digital world through expert services and innovative solutions.',
      achievements: [
        'Designed and developed responsive websites using React, HTML5, CSS3, JavaScript, and Tailwind CSS',
        'Implemented comprehensive digital marketing strategies including SEO optimization and social media marketing',
        'Developed e-commerce solutions with payment integration and inventory management systems',
        'Created mobile-responsive designs and cross-platform applications for iOS and Android',
        'Established cloud infrastructure and deployment solutions with DevOps automation',
        'Maintained a 98% client retention rate through dedicated account management',
        'Received industry recognition for excellence in web development and digital innovation'
      ],
      skills: ['React.js', 'Node.js', 'Digital Marketing', 'E-commerce', 'Project Management', 'Client Relations'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Sales Agent & Website Developer',
      company: 'AH Logistics Dispatch & Solution',
      location: 'Gujranwala, Pakistan',
      period: 'April 2025 - Present',
      type: 'Part-time',
      current: true,
      description: 'Responsible for generating leads, building client relationships, and developing custom web solutions for logistics services.',
      achievements: [
        'Generated leads and built strong client relationships for logistics services',
        'Presented value propositions and successfully closed deals',
        'Increased client website traffic by an average of 30% through strategic SEO implementation',
        'Integrated custom web development solutions with performance optimization techniques'
      ],
      skills: ['Sales', 'Lead Generation', 'SEO', 'Web Development', 'Client Relations'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Owner',
      company: 'Alpha Store',
      location: 'Gujranwala, Pakistan',
      period: 'October 2024 - Present',
      type: 'Business',
      current: true,
      description: 'E-commerce business focused on bringing quality products from around the globe to customers in Pakistan.',
      achievements: [
        'Successfully launched and managed e-commerce platform',
        'Curated product selection from global suppliers',
        'Implemented efficient order fulfillment and customer service processes',
        'Built strong customer base through quality products and excellent service'
      ],
      skills: ['E-commerce', 'Business Management', 'Customer Service', 'Supply Chain'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Freelance Website Developer',
      company: 'Self-Employed',
      location: 'Gujranwala, Pakistan',
      period: 'October 2024 - Present',
      type: 'Freelance',
      current: true,
      description: 'Providing freelance web development services to diverse clients including e-commerce, portfolio, small business, and dispatch company websites.',
      achievements: [
        'Developed and deployed 5+ responsive websites for diverse clients',
        'Achieved an average client satisfaction rating of 4.8/5',
        'Specialized in e-commerce, portfolio, and business websites',
        'Delivered projects on time and within budget consistently'
      ],
      skills: ['Web Development', 'Freelancing', 'Client Management', 'Project Delivery'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Freelance Blogger',
      company: 'Leverage Info',
      location: 'Gujranwala, Pakistan',
      period: 'March 2024 - Present',
      type: 'Freelance',
      current: true,
      description: 'Content creation and blogging services focused on technology, business, and digital marketing topics.',
      achievements: [
        'Created engaging and informative blog content',
        'Researched and wrote articles on various technology topics',
        'Maintained consistent publishing schedule',
        'Built readership through quality content and SEO optimization'
      ],
      skills: ['Content Writing', 'SEO', 'Research', 'Digital Marketing'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Brand Ambassador',
      company: 'Leverage',
      location: 'Gujranwala, Pakistan',
      period: 'December 2023 - Present',
      type: 'Part-time',
      current: true,
      description: 'Leading social media management initiatives and creating brand identity solutions.',
      achievements: [
        'Spearheaded social media management to enhance brand visibility and engagement',
        'Created unique, high-impact logos for branding and marketing campaigns',
        'Developed comprehensive brand identity strategies',
        'Increased social media engagement and follower growth'
      ],
      skills: ['Social Media Management', 'Logo Design', 'Brand Identity', 'Marketing'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 7,
      title: 'Social Media Manager & Website Developer',
      company: 'Alpha Academy',
      location: 'Gujranwala, Pakistan',
      period: 'January 2022 - Present',
      type: 'Part-time',
      current: true,
      description: 'Managing social media presence and developing scalable website architectures for educational institution.',
      achievements: [
        'Enhanced brand visibility and engagement through strategic social media management',
        'Created impactful logos and visual branding materials',
        'Developed and implemented scalable website architectures',
        'Accommodated future growth and evolving business requirements'
      ],
      skills: ['Social Media', 'Web Development', 'Brand Design', 'Educational Technology'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      title: 'Sales And Marketing Specialist',
      company: 'CRAFTSCODE SOLUTION',
      location: 'Islamabad, Pakistan',
      period: 'October 2024 - January 2025',
      type: 'Full-time',
      current: false,
      description: 'Provided comprehensive website solutions and marketing strategies for client campaigns.',
      achievements: [
        'Developed custom landing pages optimized for email campaign traffic',
        'Implemented conversion optimization strategies',
        'Collaborated with marketing teams to align web solutions with campaign goals',
        'Achieved high conversion rates for client campaigns'
      ],
      skills: ['Sales', 'Marketing', 'Landing Pages', 'Conversion Optimization'],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 9,
      title: 'Website Developer',
      company: 'APPPILLARS',
      location: 'Gujranwala, Pakistan',
      period: 'January 2024 - October 2024',
      type: 'Full-time',
      current: false,
      description: 'Assisted in developing web applications and enhancing UI/UX functionality.',
      achievements: [
        'Assisted in development of web applications using JavaScript and React.js',
        'Collaborated with developers and designers to enhance UI/UX functionality',
        'Contributed to multiple successful project deliveries',
        'Gained valuable experience in team-based development'
      ],
      skills: ['JavaScript', 'React.js', 'UI/UX', 'Team Collaboration'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 10,
      title: 'Market Research Analyst',
      company: 'Silverlight Research Expert Network',
      location: 'London, UK (Remote)',
      period: 'October 2024',
      type: 'Contract',
      current: false,
      description: 'Conducted comprehensive market analysis for digital marketing landscape.',
      achievements: [
        'Conducted comprehensive market analysis to identify trends and opportunities',
        'Utilized data analytics tools to measure campaign performance',
        'Optimized marketing efforts based on research findings',
        'Provided actionable insights for strategic decision making'
      ],
      skills: ['Market Research', 'Data Analytics', 'Digital Marketing', 'Strategic Analysis'],
      color: 'from-gray-500 to-gray-700'
    }
  ]

  const formatPeriod = (period) => {
    return period
  }

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
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Professional Experience</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A comprehensive overview of my professional journey, showcasing the diverse roles and
            responsibilities that have shaped my expertise in web development, digital marketing, and business management.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
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
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden lg:block" />

                <Card className={`lg:ml-16 hover:shadow-lg transition-all duration-300 ${experience.current ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          {experience.current && (
                            <Badge className="bg-green-500 text-white">Current</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                          <span className="text-xs">•</span>
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{formatPeriod(experience.period)}</span>
                          <Badge variant="outline" className="ml-2">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${experience.color} flex items-center justify-center flex-shrink-0`}>
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 + achIndex * 0.05 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Skills & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-blue-600/10">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Career Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Professional Roles</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Ready to bring my expertise to your next project?
                </p>
                <Button asChild>
                  <a href="/contact">
                    <Users className="w-4 h-4 mr-2" />
                    Let's Work Together
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

export default Experience

