import { motion } from 'framer-motion'
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Star,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Central Punjab, Gujranwala Campus',
      location: 'Gujranwala, Pakistan',
      period: '2023 to August 2027',
      status: 'In Progress',
      current: true,
      description: 'Seventh-semester BSc Computer Science student, expected to graduate in August 2027. Coursework covers software development, systems, and web technologies, with a growing interest in AI and reliable software.',
      coursework: [
        'Data Structures and Algorithms',
        'Web Development Technologies',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Object-Oriented Programming',
        'Mobile Application Development',
      ],
      skills: ['Programming', 'Web Development', 'Database Design', 'Software Engineering'],
      color: 'from-blue-500 to-cyan-500',
      gpa: '3.1/4.0'
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC) in Computer Science',
      institution: 'Punjab Group of Colleges',
      location: 'Gujranwala, Pakistan',
      period: '2021 - 2023',
      status: 'Completed',
      current: false,
      description: 'Completed higher secondary education with specialization in Computer Science, building foundation in programming and mathematics.',
      coursework: [
        'Computer Programming (C++)',
        'Mathematics (Calculus, Statistics)',
        'Physics',
        'English Literature',
        'Islamic Studies',
        'Pakistan Studies'
      ],
      skills: ['C++ Programming', 'Mathematics', 'Problem Solving', 'Analytical Thinking'],
      color: 'from-green-500 to-emerald-500',
      grade: 'A Grade'
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Quaid-I-Azam Divisional Public School',
      location: 'Gujranwala, Pakistan',
      period: '2011 - 2021',
      status: 'Completed',
      current: false,
      description: 'Completed secondary education with strong academic performance and active participation in extracurricular activities.',
      coursework: [
        'Mathematics',
        'Science (Physics, Chemistry, Biology)',
        'English',
        'Urdu',
        'Islamic Studies',
        'Pakistan Studies',
        'Computer Studies'
      ],
      skills: ['Academic Foundation', 'Critical Thinking', 'Communication', 'Leadership'],
      color: 'from-purple-500 to-pink-500',
      grade: 'A+ Grade'
    }
  ]


  const academicAchievements = [
    'Seventh-semester BSc Computer Science student at UCP Gujranwala Campus',
    'Expected graduation in August 2027',
    'Coursework in data structures, operating systems, software engineering, and web development',
    'Independent projects in image forensics, real-time scheduling, and client websites'
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
            <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Education & Learning</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            My studies at the University of Central Punjab, Gujranwala Campus, and the skills I am building toward internships, research, and graduate study.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {/* Formal Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Formal Education
              </h2>

              <div className="relative space-y-6">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-4 border-background z-10 ${edu.current ? 'bg-primary' : 'bg-muted-foreground'}`} />

                    <Card className={`ml-12 hover:shadow-lg transition-all duration-300 ${edu.current ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">{edu.degree}</CardTitle>
                              {edu.current && (
                                <Badge className="bg-blue-500 text-white">Current</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <GraduationCap className="w-4 h-4" />
                              <span className="font-medium">{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{edu.description}</p>

                        {/* Grade/GPA */}
                        {(edu.gpa || edu.grade) && (
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">{edu.gpa || edu.grade}</span>
                          </div>
                        )}

                        {/* Coursework */}
                        <div>
                          <h4 className="font-semibold mb-2">Key Coursework</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <motion.div
                                key={course}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + courseIndex * 0.05 }}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span>{course}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Skills Gained */}
                        <div>
                          <h4 className="font-semibold mb-2">Skills Developed</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Focus */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Academic Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {academicAchievements.map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Current Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7th Semester</div>
                    <p className="text-sm text-muted-foreground">Computer Science Student</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Degree Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">3.1/4.0</div>
                    <p className="text-sm text-muted-foreground">Current CGPA</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Learning Goals */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-blue-600/10">
                <CardHeader>
                  <CardTitle className="text-lg">Learning Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">
                      Practical machine learning
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      Reliable AI software
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      Systems software
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      Research and technical writing
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Committed to lifelong learning and staying current with technology trends
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education

