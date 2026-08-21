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
      id: 1,
      title: 'Alpha Solutions Website',
      description: 'Complete digital solutions company website with modern design, responsive layout, and comprehensive service showcase.',
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: '/Alpha Solution Final Logo jpg.jpg',
      liveUrl: 'https://alphasolutions.online',
      githubUrl: '#',
      featured: true,
      date: '2024-12-01',
      status: 'Completed',
      client: 'Alpha Solutions',
      results: ['Increased client inquiries by 150%', 'Improved user engagement by 80%', '98% client satisfaction rating']
    },
    // {
    //   id: 2,
    //   title: 'Online Finds Pakistan E-commerce',
    //   description: 'Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management.',
    //   category: 'E-commerce',
    //   technologies: ['Shopify', 'JavaScript', 'CSS3', 'Payment APIs'],
    //   image: '/api/placeholder/600/400',
    //   liveUrl: 'https://onlinefindspakistan.com',
    //   githubUrl: '#',
    //   featured: true,
    //   date: '2024-10-15',
    //   status: 'Completed',
    //   client: 'Online Finds Pakistan',
    //   results: ['Generated $50K+ in first quarter', '500+ products listed', '200+ satisfied customers']
    // },
    {
      id: 3,
      title: 'AH Logistics Website',
      description: 'Professional logistics dispatch website with comprehensive service offerings, real-time tracking capabilities, and client management features for efficient freight operations.',
      category: 'Web Development',
      technologies: ['React', 'Express.js', 'MySQL', 'Responsive Design'],
      image: '/ah logictics logo.png',
      liveUrl: 'https://ahlogdispatch.com/',
      githubUrl: '#',
      featured: true,
      date: '2024-08-20',
      status: 'Completed',
      client: 'AH Logistics',
      results: ['Professional online presence established', 'Improved client acquisition', 'Enhanced service visibility', 'Mobile-responsive design']
    },
    {
      id: 4,
      title: 'Alpha Academy Website',
      description: 'Educational institution website with comprehensive course listings, student portal, and interactive learning features for enhanced educational experience.',
      category: 'Education',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      image: '/SGN_09_24_2024_1727197614713.png',
      liveUrl: 'https://alphaacademy.alphasolutions.online/',
      githubUrl: '#',
      featured: true,
      date: '2024-06-10',
      status: 'Completed',
      client: 'Alpha Academy',
      results: ['Increased student enrollment by 40%', 'Enhanced online presence', 'Improved user experience', 'Live educational platform']
    },
    // {
    //   id: 5,
    //   title: 'Restaurant POS System',
    //   description: 'Point of sale system for restaurants with order management, inventory tracking, and sales analytics.',
    //   category: 'Web Application',
    //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    //   image: '/api/placeholder/600/400',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    //   date: '2024-04-05',
    //   status: 'Completed',
    //   client: 'Local Restaurant Chain',
    //   results: ['Reduced order processing time', 'Improved inventory management', 'Increased revenue tracking accuracy']
    // },
    // {
    //   id: 6,
    //   title: 'Portfolio Website Template',
    //   description: 'Modern, responsive portfolio website template for creative professionals and developers.',
    //   category: 'Template',
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    //   image: '/api/placeholder/600/400',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    //   date: '2024-02-15',
    //   status: 'Completed',
    //   client: 'Open Source',
    //   results: ['1000+ downloads', 'Featured on design galleries', 'Positive community feedback']
    // },
    // {
    //   id: 7,
    //   title: 'Social Media Management Tool',
    //   description: 'Comprehensive social media management platform with scheduling, analytics, and content creation tools.',
    //   category: 'Web Application',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs'],
    //   image: '/api/placeholder/600/400',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    //   date: '2023-12-01',
    //   status: 'Completed',
    //   client: 'Multiple Clients',
    //   results: ['Managed 50+ social accounts', 'Increased engagement by 200%', 'Saved 20+ hours weekly']
    // },
    // {
    //   id: 8,
    //   title: 'Real Estate Platform',
    //   description: 'Property listing and management platform with advanced search, virtual tours, and lead generation.',
    //   category: 'Web Development',
    //   technologies: ['React', 'Express.js', 'MySQL', 'Google Maps API'],
    //   image: '/api/placeholder/600/400',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    //   date: '2023-09-20',
    //   status: 'Completed',
    //   client: 'Real Estate Agency',
    //   results: ['Listed 500+ properties', 'Generated 100+ leads monthly', 'Improved search experience']
    // },
    {
      id: 9,
      title: 'Weather App',
      description: 'Interactive weather application with real-time weather data, location-based forecasts, and detailed meteorological information for cities worldwide.',
      category: 'Web Application',
      technologies: ['React', 'Weather API', 'JavaScript', 'CSS3'],
      image: '/weather logo.png',
      liveUrl: 'https://weather.alphasolutions.online/',
      githubUrl: '#',
      featured: true,
      date: '2024-11-15',
      status: 'Completed',
      client: 'Personal Project',
      results: ['Real-time weather data integration', 'Location-based forecasting', 'Responsive mobile design', 'User-friendly interface']
    },
    {
      id: 10,
      title: 'MindFlow Game',
      description: 'Engaging interactive web-based game with modern UI/UX design, challenging gameplay mechanics, and responsive controls for an immersive gaming experience.',
      category: 'Web Application',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Logic'],
      image: '/mindflow.png',
      liveUrl: 'https://mindflow.alphasolutions.online/',
      githubUrl: '#',
      featured: true,
      date: '2024-10-30',
      status: 'Completed',
      client: 'Personal Project',
      results: ['Interactive gameplay mechanics', 'Smooth animations', 'Cross-platform compatibility', 'Engaging user experience']
    },
    {
      id: 11,
      title: 'Alpha Group Website',
      description: 'Corporate business website for Alpha Group showcasing company services, portfolio, and professional presence with modern design and comprehensive business solutions.',
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      image: '/Alpha Group Final Logo jpg.png',
      liveUrl: 'https://alphagroup.alphasolutions.online/',
      githubUrl: '#',
      featured: true,
      date: '2024-09-15',
      status: 'Completed',
      client: 'Alpha Group',
      results: ['Professional corporate presence', 'Enhanced business credibility', 'Improved client engagement', 'Modern responsive design']
    },
    {
      id: 12,
      title: 'Alpha Store E-commerce',
      description: 'Upcoming e-commerce platform for Alpha Store featuring modern shopping experience, product catalog, and comprehensive online retail solutions.',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'E-commerce Platform', 'Payment Integration'],
      image: '/Alpha Store Logo jpg.png',
      liveUrl: 'https://alphastore.alphasolutions.online/',
      githubUrl: '#',
      featured: true,
      date: '2024-11-01',
      status: 'Coming Soon',
      client: 'Alpha Store',
      results: ['Modern e-commerce design', 'Scalable architecture', 'Mobile-first approach', 'Payment gateway integration']
    },
    {
      id: 13,
      title: 'Professional Portfolio Collection',
      description: 'A comprehensive portfolio creation service featuring 9+ custom-designed professional websites for doctors, professionals, and business owners with unique branding and modern design.',
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Custom Branding'],
      image: '/Kaleem Ullah logo.png',
      liveUrl: 'http://kaleemullah.alphasolutions.online',
      githubUrl: '#',
      featured: true,
      date: '2024-08-01',
      status: 'Completed',
      client: 'Multiple Professional Clients',
      results: ['9+ Professional portfolios delivered', 'Custom branding for each client', 'Enhanced online presence', 'Improved client credibility']
    },
    {
      id: 14,
      title: 'Dr. Abdul Malik Portfolio',
      description: 'Professional medical portfolio website with modern design, service showcase, and patient information sections.',
      category: 'Web Development',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      image: '/Logo for  Abdul Malik.png',
      liveUrl: 'http://drabdulmalik.alphasolutions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-07-15',
      status: 'Completed',
      client: 'Dr. Abdul Malik',
      results: ['Professional medical presence', 'Patient engagement platform', 'Service showcase', 'Mobile-responsive design']
    },
    {
      id: 15,
      title: 'Waqar Professional Portfolio',
      description: 'Personal branding website with professional showcase, skills presentation, and contact integration.',
      category: 'Web Development',
      technologies: ['React', 'CSS3', 'JavaScript', 'Professional Design'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://waqar.alphasoultions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-06-20',
      status: 'Completed',
      client: 'Waqar',
      results: ['Professional online identity', 'Skills showcase', 'Enhanced networking', 'Career advancement support']
    },
    {
      id: 16,
      title: 'Dr. Kashaf Medical Portfolio',
      description: 'Specialized medical professional website with practice information, expertise areas, and patient resources.',
      category: 'Web Development',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'Medical Design'],
      image: '/kashaf logo.png',
      liveUrl: 'http://drkashaf.alphasolutions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-05-10',
      status: 'Completed',
      client: 'Dr. Kashaf',
      results: ['Medical practice promotion', 'Patient information hub', 'Professional credibility', 'Online appointment system']
    },
    {
      id: 17,
      title: 'Shair Professional Website',
      description: 'Creative professional portfolio with modern aesthetics, project showcases, and business information.',
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS', 'Creative Design', 'Animation'],
      image: '/logo shair.png',
      liveUrl: 'https://shair.alphasolutions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-04-25',
      status: 'Completed',
      client: 'Shair',
      results: ['Creative showcase platform', 'Business growth support', 'Modern web presence', 'Client acquisition tool']
    },
    {
      id: 18,
      title: 'Arqam Portfolio Website',
      description: 'Professional portfolio featuring career highlights, skills demonstration, and contact capabilities.',
      category: 'Web Development',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Portfolio Design'],
      image: '/arqam logo.png',
      liveUrl: 'http://arqam.alphasolutions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-03-15',
      status: 'Completed',
      client: 'Arqam',
      results: ['Career advancement tool', 'Professional networking', 'Skills presentation', 'Industry recognition']
    },
    {
      id: 19,
      title: 'Prof. Imran Academic Portfolio',
      description: 'Academic professional website with research publications, teaching experience, and scholarly achievements.',
      category: 'Web Development',
      technologies: ['React', 'Academic Design', 'Research Integration', 'Publications'],
      image: '/imran logo.png',
      liveUrl: 'http://www.profimran.alphasolutions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-02-28',
      status: 'Completed',
      client: 'Prof. Imran',
      results: ['Academic presence established', 'Research showcase', 'Teaching portfolio', 'Scholarly networking']
    },
    {
      id: 20,
      title: 'Dawood Professional Portfolio',
      description: 'Modern professional website with career focus, achievements display, and business networking capabilities.',
      category: 'Web Development',
      technologies: ['HTML5', 'CSS3', 'Professional Framework', 'Business Design'],
      image: '/dawoodDawood logo.png',
      liveUrl: 'https://dawood.alphasolutions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-01-20',
      status: 'Completed',
      client: 'Dawood',
      results: ['Professional branding', 'Network expansion', 'Career development', 'Business opportunities']
    },
    {
      id: 21,
      title: 'Haseeb Portfolio Website',
      description: 'Comprehensive professional portfolio with skills showcase, project gallery, and professional achievements.',
      category: 'Web Development',
      technologies: ['React', 'Modern Design', 'Portfolio Framework', 'Professional Layout'],
      image: '/Haseeb logo.png',
      liveUrl: 'https://haseeb.alphasolutions.online',
      githubUrl: '#',
      featured: false,
      date: '2024-01-10',
      status: 'Completed',
      client: 'Haseeb',
      results: ['Professional online presence', 'Skills demonstration', 'Career advancement', 'Industry visibility']
    },
    {
      id: 22,
      title: 'Prospera Enterprises Website',
      description: 'Professional corporate website for Prospera Enterprises featuring comprehensive business solutions, company showcase, and modern enterprise design with full functionality.',
      category: 'Web Development',
      technologies: ['React', 'Corporate Design', 'Business Solutions', 'Enterprise Architecture'],
      image: '/propera logo.jpg',
      liveUrl: 'https://prosperaenterprises.com/',
      githubUrl: '#',
      featured: true,
      date: '2024-12-01',
      status: 'Completed',
      client: 'Prospera Enterprises',
      results: ['Enterprise-level web presence', 'Professional corporate branding', 'Business solution showcase', 'Enhanced market credibility']
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'Web Development', label: 'Web Development', count: projects.filter(p => p.category === 'Web Development').length },
    { value: 'E-commerce', label: 'E-commerce', count: projects.filter(p => p.category === 'E-commerce').length },
    { value: 'Web Application', label: 'Web Apps', count: projects.filter(p => p.category === 'Web Application').length },
    { value: 'Education', label: 'Education', count: projects.filter(p => p.category === 'Education').length },
    { value: 'Template', label: 'Templates', count: projects.filter(p => p.category === 'Template').length }
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
            A showcase of my recent work including web development projects, e-commerce solutions,
            and digital applications that demonstrate my technical expertise and creative problem-solving skills.
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

