import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'HTML', 'CSS', 'C++', 'SQL']
  },
  {
    title: 'Web and frameworks',
    items: ['React', 'Vite', 'Tailwind CSS', 'Flask']
  },
  {
    title: 'Tools and libraries',
    items: ['Git', 'GitHub', 'Pillow', 'NumPy', 'Tkinter']
  }
]

const Skills = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 scrollbar-futuristic">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Code className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Skills</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Skills I use in coursework, personal projects, and freelance web work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm py-1 px-3">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
