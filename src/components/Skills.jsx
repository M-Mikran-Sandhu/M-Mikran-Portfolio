import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Palette,
  Globe,
  Database,
  Smartphone,
  Search,
  BarChart3,
  Settings,
  Filter
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Progress } from '@/components/ui/progress.jsx'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Settings },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'marketing', label: 'Marketing', icon: BarChart3 },
    { id: 'tools', label: 'Tools', icon: Settings }
  ]

  const skills = [
    // Frontend Development
    { name: 'HTML5', level: 95, category: 'frontend', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 90, category: 'frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, category: 'frontend', color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 80, category: 'frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 75, category: 'frontend', color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', color: 'from-teal-400 to-blue-500' },
    { name: 'Bootstrap', level: 85, category: 'frontend', color: 'from-purple-500 to-purple-700' },

    // Design
    { name: 'UI/UX Design', level: 90, category: 'design', color: 'from-pink-500 to-rose-500' },
    { name: 'Adobe Photoshop', level: 85, category: 'design', color: 'from-blue-600 to-blue-800' },
    { name: 'Adobe Illustrator', level: 80, category: 'design', color: 'from-orange-500 to-yellow-500' },
    { name: 'Figma', level: 85, category: 'design', color: 'from-purple-500 to-pink-500' },
    { name: 'Logo Design', level: 90, category: 'design', color: 'from-green-500 to-emerald-500' },
    { name: 'Brand Identity', level: 85, category: 'design', color: 'from-indigo-500 to-purple-500' },

    // Backend
    { name: 'Node.js', level: 70, category: 'backend', color: 'from-green-600 to-green-800' },
    { name: 'Express.js', level: 65, category: 'backend', color: 'from-gray-600 to-gray-800' },
    { name: 'PHP', level: 75, category: 'backend', color: 'from-purple-600 to-indigo-600' },
    { name: 'MySQL', level: 70, category: 'backend', color: 'from-blue-600 to-blue-800' },
    { name: 'MongoDB', level: 65, category: 'backend', color: 'from-green-500 to-green-700' },

    // Mobile
    { name: 'React Native', level: 70, category: 'mobile', color: 'from-blue-500 to-purple-500' },
    { name: 'Flutter', level: 60, category: 'mobile', color: 'from-blue-400 to-cyan-400' },
    { name: 'Mobile UI Design', level: 85, category: 'mobile', color: 'from-pink-500 to-red-500' },

    // Marketing
    { name: 'Digital Marketing', level: 90, category: 'marketing', color: 'from-orange-500 to-red-500' },
    { name: 'SEO', level: 85, category: 'marketing', color: 'from-green-500 to-teal-500' },
    { name: 'Social Media Marketing', level: 95, category: 'marketing', color: 'from-blue-500 to-purple-500' },
    { name: 'Content Marketing', level: 80, category: 'marketing', color: 'from-yellow-500 to-orange-500' },
    { name: 'Email Marketing', level: 75, category: 'marketing', color: 'from-red-500 to-pink-500' },

    // Tools
    { name: 'Git & GitHub', level: 80, category: 'tools', color: 'from-gray-700 to-gray-900' },
    { name: 'WordPress', level: 85, category: 'tools', color: 'from-blue-600 to-blue-800' },
    { name: 'Shopify', level: 75, category: 'tools', color: 'from-green-600 to-green-800' },
    { name: 'Microsoft Office', level: 95, category: 'tools', color: 'from-blue-500 to-blue-700' },
    { name: 'Project Management', level: 85, category: 'tools', color: 'from-purple-500 to-indigo-500' }
  ]

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory)

  const getSkillLevel = (level) => {
    if (level >= 90) return { label: 'Expert', color: 'text-green-600' }
    if (level >= 80) return { label: 'Advanced', color: 'text-blue-600' }
    if (level >= 70) return { label: 'Intermediate', color: 'text-yellow-600' }
    return { label: 'Beginner', color: 'text-gray-600' }
  }

  const professionalSkills = [
    'Problem Solving',
    'Team Leadership',
    'Client Communication',
    'Project Management',
    'Time Management',
    'Creative Thinking',
    'Attention to Detail',
    'Adaptability'
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
            <Code className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Skills & Expertise</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical skills, design capabilities, and professional competencies
            developed through years of experience and continuous learning.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Technical Skills
                    <Badge variant="secondary" className="ml-auto">
                      {filteredSkills.length} skills
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {filteredSkills.map((skill, index) => {
                      const skillLevel = getSkillLevel(skill.level)
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="font-medium">{skill.name}</span>
                              <Badge variant="outline" className={skillLevel.color}>
                                {skillLevel.label}
                              </Badge>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="relative">
                            <Progress value={skill.level} className="h-2" />
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-80`}
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Professional Skills */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Professional Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {professionalSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skill Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Skill Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <p className="text-sm text-muted-foreground">Technical Skills</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <p className="text-sm text-muted-foreground">Professional Skills</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <p className="text-sm text-muted-foreground">Certifications</p>
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
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary" />
                    Currently Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      GraphQL
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      AWS Cloud Services
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      Docker
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Always expanding my skill set to stay current with industry trends
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Skills by Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Skills Overview by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                {skillCategories.slice(1).map((category, index) => {
                  const categorySkills = skills.filter(skill => skill.category === category.id)
                  const avgLevel = categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length || 0
                  const Icon = category.icon

                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="text-center p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">{category.label}</h3>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {Math.round(avgLevel)}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {categorySkills.length} skills
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

