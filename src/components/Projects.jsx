import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FolderOpen,
  ExternalLink,
  Github,
  Eye,
  Filter,
  Search,
  Calendar,
  Tag,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 101,
      title: 'Image Tampering Detection',
      description: 'Flask and React app that flags likely photo edits using Error Level Analysis, EXIF metadata, JPEG ghost checks, and statistical image analysis.',
      category: 'Computer Science',
      technologies: ['Python', 'Flask', 'React', 'Pillow', 'NumPy'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/image-tampering-detection',
      featured: true,
      date: '2026-02-16',
      status: 'Completed',
      client: 'Coursework',
      results: ['Multi-method image forensics in a Flask API, with a React front end for uploads and an ELA heatmap.']
    },
    {
      id: 102,
      title: 'Real-Time Process Scheduler',
      description: 'Python CLI and Tkinter app that simulates Earliest Deadline First and Rate Monotonic scheduling, with unit tests for preemption.',
      category: 'Computer Science',
      technologies: ['Python', 'Tkinter'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/Real-Time-Process-Scheduler-OS',
      featured: true,
      date: '2026-01-29',
      status: 'Completed',
      client: 'Coursework',
      results: ['EDF and Rate Monotonic scheduling, with a CLI, a desktop GUI, and unit tests for preemption.']
    },
    {
      id: 103,
      title: 'Alpha Folder Locker',
      description: 'Python CLI and Tkinter tool that locks folders with OS permissions and SHA-256 hashed passwords. It controls access; it does not encrypt files.',
      category: 'Computer Science',
      technologies: ['Python', 'Tkinter', 'SHA-256'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/Alpha-Folder-Locker',
      featured: true,
      date: '2026-02-10',
      status: 'Completed',
      client: 'Personal',
      results: ['Shared core for the CLI and GUI, with SHA-256 password hashing and access control rather than encryption.']
    },
    {
      id: 104,
      title: 'Data Structures and Algorithms',
      description: 'C++ and Python implementations of trees, AVL trees, heaps, queues, and linked lists, with a generated page for browsing the code.',
      category: 'Computer Science',
      technologies: ['C++', 'Python', 'HTML'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://data-structure-and-algorithm-alpha.netlify.app/',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/DATA-Structure-ALG',
      featured: true,
      date: '2025-08-12',
      status: 'Completed',
      client: 'Coursework',
      results: ['Implementations of common data structures, with a browsable HTML index generated from the source files.']
    },
    {
      id: 105,
      title: 'Personal Portfolio',
      description: 'Personal site built with React, Vite, and Tailwind CSS, covering projects, client work, education, and certificates.',
      category: 'Web Development',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      image: '/MMS PIC.jpg',
      liveUrl: 'https://m-mikran-portfolio.vercel.app',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/M-Mikran-Portfolio',
      featured: true,
      date: '2025-05-18',
      status: 'In Progress',
      client: 'Personal',
      results: ['Built with React, Vite, and Tailwind CSS.']
    },
    {
      id: 106,
      title: 'Alpha Store',
      description: 'React and Tailwind store front end with a product catalog, cart, and dark mode. Front end only; there is no checkout backend.',
      category: 'Web Development',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      image: '/Alpha Store Logo jpg.png',
      liveUrl: 'https://the-alpha-store.netlify.app/',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/E-Commerce',
      featured: true,
      date: '2026-02-15',
      status: 'Completed',
      client: 'Personal',
      results: ['Store front end with a product catalog, cart, and dark mode. No checkout backend.']
    },
    {
      id: 107,
      title: 'Alpha Academy Website',
      description: 'Built the Alpha Academy website, a multi-page education site with course, team, and contact pages, using HTML, CSS, JavaScript, and Tailwind CSS.',
      category: 'Client websites',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      image: '/SGN_09_24_2024_1727197614713.png',
      liveUrl: 'https://alpha-acadmey.netlify.app/',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/Alpha-Academy',
      featured: false,
      date: '2024-06-10',
      status: 'Completed',
      client: 'Alpha Academy',
      results: ['Multi-page education website, live on Netlify.']
    },
    {
      id: 108,
      title: 'AH Logistics Website',
      description: 'Client website for a logistics company, presenting services and contact information in a responsive layout.',
      category: 'Client websites',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/ah logictics logo.png',
      liveUrl: 'https://ahlogdispatch.com/',
      githubUrl: '#',
      featured: false,
      date: '2024-08-20',
      status: 'Completed',
      client: 'AH Logistics',
      results: ['Live client website for company services and contact information.']
    },
    {
      id: 109,
      title: 'Dr. Abdul Malik Portfolio',
      description: 'Responsive website for a veterinary doctor client, with services and contact information.',
      category: 'Client websites',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/Logo for  Abdul Malik.png',
      liveUrl: 'https://dr-abdul-malik.vercel.app',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/Dr-Abdul-Malik',
      featured: false,
      date: '2025-05-18',
      status: 'Completed',
      client: 'Dr. Abdul Malik',
      results: ['Responsive client website, live on Vercel.']
    },
    {
      id: 110,
      title: 'Dr. Kashaf Medical Portfolio',
      description: 'Responsive website for a medical doctor client, with practice information and contact details.',
      category: 'Client websites',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/kashaf logo.png',
      liveUrl: 'https://dr-dure-e-kashaf.netlify.app/',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/DrKashaf',
      featured: false,
      date: '2025-06-05',
      status: 'Completed',
      client: 'Dr. Kashaf',
      results: ['Responsive client website, live on Netlify.']
    },
    {
      id: 111,
      title: 'Prof. Imran Academic Portfolio',
      description: 'Responsive website built for a university professor client.',
      category: 'Client websites',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/imran logo.png',
      liveUrl: 'https://prof-imran-qamar-sandhu.netlify.app/',
      githubUrl: '#',
      featured: false,
      date: '2025-05-25',
      status: 'Completed',
      client: 'Prof. Imran Qamar Sandhu',
      results: ['Responsive client website, live on Netlify.']
    },
    {
      id: 112,
      title: 'Waqar Professional Portfolio',
      description: 'Responsive personal website for a client, including a PDF resume export.',
      category: 'Client websites',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://waqar-ramzan.vercel.app',
      githubUrl: 'https://github.com/M-Mikran-Sandhu/Waqar-Ramzan',
      featured: false,
      date: '2025-08-19',
      status: 'Completed',
      client: 'Waqar Ramzan',
      results: ['Responsive client website with PDF resume export, live on Vercel.']
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'Computer Science', label: 'Computer Science', count: projects.filter(p => p.category === 'Computer Science').length },
    { value: 'Web Development', label: 'Web Development', count: projects.filter(p => p.category === 'Web Development').length },
    { value: 'Client websites', label: 'Client websites', count: projects.filter(p => p.category === 'Client websites').length }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredProjects = projects.filter(project => project.featured)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

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
            <FolderOpen className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Projects Portfolio</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Selected coursework, software projects, and client websites. I am building toward internships, research, graduate study, and jobs from 2027.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center" style={{ display: 'none' }}>
                      <FolderOpen className="w-16 h-16 text-primary/60" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-yellow-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1" onClick={() => setSelectedProject(project)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        {project.liveUrl !== '#' && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center" style={{ display: 'none' }}>
                    <FolderOpen className="w-16 h-16 text-primary/60" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-yellow-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 line-clamp-1">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(project.date)}</span>
                      <span className="text-xs">•</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1" onClick={() => setSelectedProject(project)}>
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                      {project.liveUrl !== '#' && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl !== '#' && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FolderOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filter criteria.
            </p>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Tag className="w-4 h-4" />
                      <span>{selectedProject.category}</span>
                      <span className="text-xs">•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(selectedProject.date)}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)}>
                    ×
                  </Button>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20 h-64">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center" style={{ display: 'none' }}>
                      <FolderOpen className="w-24 h-24 text-primary/60" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Description</h3>
                      <p className="text-muted-foreground">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Client</h3>
                      <p className="text-muted-foreground">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Status</h3>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Key Results</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  {selectedProject.liveUrl !== '#' && (
                    <Button asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl !== '#' && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

