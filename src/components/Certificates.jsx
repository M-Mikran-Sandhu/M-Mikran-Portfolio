import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  ExternalLink,
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Building,
  FileText,
  Image as ImageIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import InstagramVerifiedBadge from '@/components/ui/instagram-verified-badge.jsx'

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [certificates, setCertificates] = useState([])

  // Function to parse certificate filename and extract information
  const parseCertificateInfo = (filename) => {
    // Remove file extension
    const nameWithoutExt = filename.replace(/\.(pdf|jpg|jpeg|png)$/i, '')

    // Remove duplicate indicators like (1), (2), etc.
    const cleanName = nameWithoutExt.replace(/\s\(\d+\)$/, '')

    // Extract title from filename
    let title = cleanName
    let issuer = 'LinkedIn Learning'
    let category = 'Professional'
    let skills = []
    let verificationUrl = null

    if (cleanName.includes('CertificateOfCompletion_')) {
      title = cleanName.replace('CertificateOfCompletion_', '').replace(/([A-Z])/g, ' $1').trim()
      issuer = 'LinkedIn Learning'

      // Map specific certificates to their LinkedIn verification URLs
      const certificateUrlMap = {
        'AI Productivity Hacks to Reimagine Your Workday and Career': 'https://www.linkedin.com/learning/certificates/571dd0b74c7233b7b686e3c456653968a3d7bb0d4946c66b7d09981e77a0eb3e',
        'Amplify Your Communication Skills with Generative AI': 'https://www.linkedin.com/learning/certificates/9030275a34c337a2951670fb653e6277821721fde477acd6a42e87be40be2af4',
        'Amplify Your Critical Thinking with Generative AI': 'https://www.linkedin.com/learning/certificates/5086cc61cd186a4df79804ce9c770c20013b403164aabbbff5e95835d836dccd',
        'Build Your Generative AI Productivity Skills with Microsoft and LinkedIn': 'https://www.linkedin.com/learning/certificates/27f477febf7090b0652343e5950ef898ba89907f4fdd22c4a843d2ffeb9ad96c',
        'Building an Adaptability Mindset in the Age of AI': 'https://www.linkedin.com/learning/certificates/51934f442317c956cbbf249f39e30b0f9a0e9b9d08de829c8894f1fedd9111f3',
        'Career Essentials in GitHub Professional Certificate': 'https://www.linkedin.com/learning/certificates/3e6b891738b57d62de228da328c62c8a649e6440e96e2c9e2e1f528b0665cec5',
        'Copilot in Outlook Maximize Your Workday Efficiency': 'https://www.linkedin.com/learning/certificates/6ef12d0797e278faedd8852a4297ac90c9da2fb57fa63b01537f32dc843c072a',
        'Copilot in Teams AIPowered Collaboration': 'https://www.linkedin.com/learning/certificates/71e56412852465d431b4b25ead9cdf509d5c04e024b6afb80bb4e78402487f7b',
        'Excel with Copilot AIDriven Data Analysis': 'https://www.linkedin.com/learning/certificates/663c108e6f180bd902ebd619677fa38c78467fffc625b03e01e497c9431267c0',
        'Generative AI Imaging What Creative Pros Need to Know': 'https://www.linkedin.com/learning/certificates/0e2075f6c08931040bd499708428cf49582847ce9e773c551dc7c9daf13e483f',
        'Generative AI Skills for Creative Content Opportunities Issues and Ethics': 'https://www.linkedin.com/learning/certificates/249b9247630781c23095e0a9e6520765d9ac205f8b76c4324867cfd9f5e81168',
        'Integrating Generative AI into the Creative Process': 'https://www.linkedin.com/learning/certificates/c284361d8045d3d6b210155689c16f96834f6006d6e7061d80dd2ec05071ed72',
        'Introduction to Prompt Engineering for Generative AI': 'https://www.linkedin.com/learning/certificates/fb7049e7cdf3d80afc80cf09704dbe5657923d19704d00c49f7f594e2df5b1ca',
        'Investing in Human Skills in the Age of AI': 'https://www.linkedin.com/learning/certificates/c2029bc36e0df07dba38ea17d68ea87c545e7a3af1028a39f67f9e02130f0b4f',
        'Learning Microsoft 365 Copilot for Work': 'https://www.linkedin.com/learning/certificates/7d3bfc88752918829283e4154668dc62ce9068dfbbc1d8688cdcc6143b5e20e0',
        'Leveraging the Power of Social Intelligence in the Age of AI': 'https://www.linkedin.com/learning/certificates/2b43157d18a02ac80cefa75dd8f7a171c70a5ef3aa82d2d8eeb474832e286bee',
        'LinkedIn for Veterans and the Military Community': 'https://www.linkedin.com/learning/certificates/76ec0e6190d7084ea85bb34b60b01a2d0275b9900c69e4906c82d2c7b30f8aa5',
        'Microsoft Azure AI Essentials Workloads and Machine Learning on Azure': 'https://www.linkedin.com/learning/certificates/3029ace8c44db6dd88ea44e52dbb78622445527a43e27e6e2588ab2ea2bbc580',
        'Microsoft Copilot The Art of Prompt Writing': 'https://www.linkedin.com/learning/certificates/6c0579d95d30eda56616d30d98d8d40387506aa1d97227468514b3bdf8c64a5a',
        'Microsoft Copilot for Productivity by Microsoft and LinkedIn': 'https://www.linkedin.com/posts/m-mikran-sandhu_microsoft-copilot-for-productivity-by-microsoft-activity-7342676986563112961-C78o',
        'Prompt Engineering How to Talk to the AIs': 'https://www.linkedin.com/learning/certificates/272cdb6b076552242c89de31ed4e09a3294978dca42f5122428dfaee6779cb3d',
        'Strengthen Your DecisionMaking with Generative AI': 'https://www.linkedin.com/learning/certificates/bd1291d210b0f36c94217b64d77972208bdc2ad4ecad949ec49353adb4ad33f3',
        'What Is Business Analysis': 'https://www.linkedin.com/learning/certificates/f50970f1535b69b5fe39a3f59f62a94a69c43e5c2720fffcb99ae1c49969b42b',
        'What Is Generative AI': 'https://www.linkedin.com/learning/certificates/705d37d0bf2ae1895ebd3b1dd84db8e3a16e944ec8cc0dbf757e65a021c962dd'
      }

      verificationUrl = certificateUrlMap[title] || null
    }

    // Categorize based on content and add specific skills from certificates
    if (title.toLowerCase().includes('ai productivity hacks')) {
      category = 'AI & Technology'
      skills = ['AI Productivity', 'Workflow Optimization', 'Digital Transformation', 'Time Management']
    } else if (title.toLowerCase().includes('amplify your communication skills with generative ai')) {
      category = 'AI & Technology'
      skills = ['Generative AI', 'Communication Enhancement', 'Content Creation', 'Professional Writing']
    } else if (title.toLowerCase().includes('amplify your critical thinking with generative ai')) {
      category = 'AI & Technology'
      skills = ['Critical Thinking', 'AI Analysis', 'Problem Solving', 'Decision Making']
    } else if (title.toLowerCase().includes('build your generative ai productivity')) {
      category = 'AI & Technology'
      skills = ['Generative AI', 'Microsoft Integration', 'LinkedIn Learning', 'Productivity Tools']
    } else if (title.toLowerCase().includes('adaptability mindset')) {
      category = 'AI & Technology'
      skills = ['Adaptability', 'Change Management', 'AI Readiness', 'Future Skills']
    } else if (title.toLowerCase().includes('github')) {
      category = 'Web Development'
      skills = ['Git Version Control', 'Repository Management', 'Collaboration', 'Code Management']
    } else if (title.toLowerCase().includes('copilot in outlook')) {
      category = 'Microsoft Office'
      skills = ['Microsoft Outlook', 'Email Management', 'AI Assistant', 'Communication Efficiency']
    } else if (title.toLowerCase().includes('copilot in powerpoint')) {
      category = 'Microsoft Office'
      skills = ['Microsoft PowerPoint', 'Presentation Design', 'AI Content Creation', 'Visual Communication']
    } else if (title.toLowerCase().includes('copilot in teams')) {
      category = 'Microsoft Office'
      skills = ['Microsoft Teams', 'Team Collaboration', 'AI-Powered Meetings', 'Remote Work']
    } else if (title.toLowerCase().includes('copilot in word')) {
      category = 'Microsoft Office'
      skills = ['Microsoft Word', 'Document Creation', 'AI Writing Assistant', 'Content Refinement']
    } else if (title.toLowerCase().includes('excel with copilot')) {
      category = 'Microsoft Office'
      skills = ['Microsoft Excel', 'Data Analysis', 'AI-Driven Insights', 'Spreadsheet Automation']
    } else if (title.toLowerCase().includes('generative ai imaging')) {
      category = 'AI & Technology'
      skills = ['AI Image Generation', 'Creative Technology', 'Visual Content', 'Digital Art']
    } else if (title.toLowerCase().includes('generative ai skills for creative content')) {
      category = 'AI & Technology'
      skills = ['Creative AI', 'Content Strategy', 'Ethics in AI', 'Creative Opportunities']
    } else if (title.toLowerCase().includes('integrating generative ai into the creative process')) {
      category = 'AI & Technology'
      skills = ['Creative Integration', 'AI Workflow', 'Design Process', 'Innovation Methods']
    } else if (title.toLowerCase().includes('prompt engineering')) {
      category = 'AI & Technology'
      skills = ['Prompt Engineering', 'AI Communication', 'Language Models', 'AI Optimization']
    } else if (title.toLowerCase().includes('investing in human skills')) {
      category = 'Professional'
      skills = ['Human Skills', 'Professional Development', 'AI Collaboration', 'Soft Skills']
    } else if (title.toLowerCase().includes('microsoft 365 copilot')) {
      category = 'Microsoft Office'
      skills = ['Microsoft 365', 'Copilot Integration', 'Productivity Suite', 'Workflow Automation']
    } else if (title.toLowerCase().includes('social intelligence')) {
      category = 'Professional'
      skills = ['Social Intelligence', 'Interpersonal Skills', 'AI-Human Interaction', 'Emotional Intelligence']
    } else if (title.toLowerCase().includes('linkedin for veterans')) {
      category = 'Professional'
      skills = ['LinkedIn Networking', 'Career Transition', 'Professional Branding', 'Military to Civilian']
    } else if (title.toLowerCase().includes('azure ai essentials')) {
      category = 'AI & Technology'
      skills = ['Microsoft Azure', 'Cloud AI', 'Machine Learning', 'AI Workloads']
    } else if (title.toLowerCase().includes('microsoft copilot the art of prompt writing')) {
      category = 'AI & Technology'
      skills = ['Copilot Mastery', 'Prompt Writing', 'AI Communication', 'Microsoft AI Tools']
    } else if (title.toLowerCase().includes('microsoft copilot for productivity')) {
      category = 'Microsoft Office'
      skills = ['Microsoft Copilot', 'Productivity Enhancement', 'AI Integration', 'Workflow Optimization']
    } else if (title.toLowerCase().includes('strengthen your decisionmaking')) {
      category = 'Professional'
      skills = ['Decision Making', 'AI-Assisted Analysis', 'Strategic Thinking', 'Problem Solving']
    } else if (title.toLowerCase().includes('what is business analysis')) {
      category = 'Business'
      skills = ['Business Analysis', 'Requirements Gathering', 'Process Improvement', 'Stakeholder Management']
    } else if (title.toLowerCase().includes('what is generative ai')) {
      category = 'AI & Technology'
      skills = ['Generative AI Fundamentals', 'AI Concepts', 'Machine Learning Basics', 'AI Applications']
    } else if (title.toLowerCase().includes('html5')) {
      category = 'Web Development'
      skills = ['HTML5', 'CSS3', 'Responsive Design', 'Web Standards']
    } else if (title.toLowerCase().includes('microsoft word office')) {
      category = 'Microsoft Office'
      skills = ['Microsoft Word', 'Document Processing', 'Office Suite', 'Professional Documentation']
    } else {
      // Generic fallback
      if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('copilot') || title.toLowerCase().includes('generative')) {
        category = 'AI & Technology'
        skills = ['Artificial Intelligence', 'Machine Learning', 'Productivity Tools']
      } else if (title.toLowerCase().includes('microsoft') || title.toLowerCase().includes('office') || title.toLowerCase().includes('excel') || title.toLowerCase().includes('word')) {
        category = 'Microsoft Office'
        skills = ['Microsoft Office', 'Productivity', 'Business Applications']
      } else if (title.toLowerCase().includes('web') || title.toLowerCase().includes('github')) {
        category = 'Web Development'
        skills = ['Web Development', 'Programming', 'Version Control']
      } else if (title.toLowerCase().includes('business') || title.toLowerCase().includes('analysis')) {
        category = 'Business'
        skills = ['Business Analysis', 'Strategic Thinking', 'Problem Solving']
      }
    }

    return {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      issuer,
      category,
      skills,
      verificationUrl
    }
  }

  // Function to remove duplicates and get unique certificates
  const getUniqueCertificates = (fileList) => {
    const uniqueMap = new Map()

    fileList.forEach((fileInfo, index) => {
      const { filename, issueDate } = fileInfo
      const nameWithoutExt = filename.replace(/\.(pdf|jpg|jpeg|png)$/i, '')
      // More aggressive duplicate detection - remove numbered versions and extra spaces
      const cleanName = nameWithoutExt
        .replace(/\s\(\d+\)$/, '') // Remove (1), (2), etc.
        .replace(/\s+/g, ' ') // Normalize spaces
        .trim()

      // Only add if this is the first occurrence or if we don't have this certificate yet
      if (!uniqueMap.has(cleanName)) {
        const info = parseCertificateInfo(filename)
        const fileExtension = filename.split('.').pop().toLowerCase()

        uniqueMap.set(cleanName, {
          id: index + 3, // Start from 3 to avoid conflicts with existing certificates
          title: info.title,
          issuer: info.issuer,
          issueDate: issueDate,
          expiryDate: null,
          credentialId: `CERT-${index + 1}`,
          verificationUrl: info.verificationUrl || null,
          category: info.category,
          skills: info.skills,
          imageUrl: `/certificates/${filename}`,
          filePath: `/certificates/${filename}`,
          fileType: fileExtension,
          description: `Professional certification in ${info.title} demonstrating expertise and commitment to continuous learning.`,
          verified: true
        })
      }
    })

    return Array.from(uniqueMap.values())
  }

  // Load certificates on component mount
  useEffect(() => {
    // Complete list of certificate files with their actual issue dates
    const certificateFiles = [
      // June 21, 2025 certificates
      { filename: 'CertificateOfCompletion_AI Productivity Hacks to Reimagine Your Workday and Career.pdf', issueDate: '2025-06-21' },
      { filename: 'CertificateOfCompletion_Amplify Your Communication Skills with Generative AI.pdf', issueDate: '2025-06-21' },
      { filename: 'CertificateOfCompletion_Amplify Your Critical Thinking with Generative AI.pdf', issueDate: '2025-06-21' },

      // June 22, 2025 certificates  
      { filename: 'CertificateOfCompletion_Build Your Generative AI Productivity Skills with Microsoft and LinkedIn.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Building an Adaptability Mindset in the Age of AI.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Career Essentials in GitHub Professional Certificate.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Copilot in Outlook Maximize Your Workday Efficiency.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Copilot in PowerPoint From Prompt to Presentation.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Copilot in Teams AIPowered Collaboration.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Copilot in Word Create and Refine Documents with AI.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Excel with Copilot AIDriven Data Analysis.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Generative AI Imaging What Creative Pros Need to Know.pdf', issueDate: '2025-06-22' },
      { filename: 'CertificateOfCompletion_Generative AI Skills for Creative Content Opportunities Issues and Ethics.pdf', issueDate: '2025-06-22' },

      // June 23, 2025 certificates
      { filename: 'CertificateOfCompletion_Integrating Generative AI into the Creative Process.pdf', issueDate: '2025-06-23' },
      { filename: 'CertificateOfCompletion_Introduction to Prompt Engineering for Generative AI.pdf', issueDate: '2025-06-23' },
      { filename: 'CertificateOfCompletion_Investing in Human Skills in the Age of AI.pdf', issueDate: '2025-06-23' },
      { filename: 'CertificateOfCompletion_Learning Microsoft 365 Copilot for Work.pdf', issueDate: '2025-06-23' },
      { filename: 'CertificateOfCompletion_Leveraging the Power of Social Intelligence in the Age of AI.pdf', issueDate: '2025-06-23' },
      { filename: 'CertificateOfCompletion_LinkedIn for Veterans and the Military Community.pdf', issueDate: '2025-06-23' },

      // July 6, 2025 certificates
      { filename: 'CertificateOfCompletion_Microsoft Azure AI Essentials Workloads and Machine Learning on Azure.pdf', issueDate: '2025-07-06' },
      { filename: 'CertificateOfCompletion_Microsoft Copilot The Art of Prompt Writing.pdf', issueDate: '2025-07-06' },
      { filename: 'CertificateOfCompletion_Microsoft Copilot for Productivity by Microsoft and LinkedIn.pdf', issueDate: '2025-07-06' },
      { filename: 'CertificateOfCompletion_Prompt Engineering How to Talk to the AIs.pdf', issueDate: '2025-07-06' },

      // August 24, 2025 certificates
      { filename: 'CertificateOfCompletion_Strengthen Your DecisionMaking with Generative AI.pdf', issueDate: '2025-08-24' },
      { filename: 'CertificateOfCompletion_What Is Business Analysis.pdf', issueDate: '2025-08-24' },
      { filename: 'CertificateOfCompletion_What Is Generative AI.pdf', issueDate: '2025-08-24' },

      // August 30, 2025 certificates 
      // Adding certificates that may not have been in the original folder but are referenced in your links

      // Original certificates with proper dates
      { filename: 'HTML5 with Responsive Web Design.jpg', issueDate: '2023-10-20' },
      { filename: 'Microsoft Word Office 2019.pdf', issueDate: '2023-02-15' }
    ]

    const uniqueCertificates = getUniqueCertificates(certificateFiles)

    // Add original certificates plus new ones
    const allCertificates = [
      {
        id: 1,
        title: 'Microsoft Office Specialist',
        issuer: 'Microsoft',
        issueDate: '2023-02-15',
        expiryDate: null,
        credentialId: 'MOS-2019-001',
        verificationUrl: '#',
        category: 'Microsoft Office',
        skills: ['Microsoft Word', 'Document Processing', 'Office Suite'],
        imageUrl: '/certificates/Microsoft Word Office 2019.pdf',
        filePath: '/certificates/Microsoft Word Office 2019.pdf',
        fileType: 'pdf',
        description: 'Demonstrates proficiency in Microsoft Office applications, specifically Microsoft Word 2019. This certification validates skills in document creation, formatting, and advanced features.',
        verified: true
      },
      {
        id: 2,
        title: 'HTML5 with Responsive Web Design',
        issuer: 'Aptech Computer Education',
        issueDate: '2023-10-20',
        expiryDate: null,
        credentialId: 'APTECH-HTML5-2023',
        verificationUrl: '#',
        category: 'Web Development',
        skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Development'],
        imageUrl: '/certificates/HTML5 with Responsive Web Design.jpg',
        filePath: '/certificates/HTML5 with Responsive Web Design.jpg',
        fileType: 'jpg',
        description: 'Comprehensive certification covering HTML5 fundamentals, semantic markup, CSS3 styling, and responsive web design principles for modern web development.',
        verified: true
      },
      ...uniqueCertificates
    ]

    setCertificates(allCertificates)
  }, [])

  const categories = [
    { value: 'all', label: 'All Certificates', count: certificates.length },
    { value: 'AI & Technology', label: 'AI & Technology', count: certificates.filter(cert => cert.category === 'AI & Technology').length },
    { value: 'Microsoft Office', label: 'Microsoft Office', count: certificates.filter(cert => cert.category === 'Microsoft Office').length },
    { value: 'Web Development', label: 'Web Development', count: certificates.filter(cert => cert.category === 'Web Development').length },
    { value: 'Business', label: 'Business', count: certificates.filter(cert => cert.category === 'Business').length },
    { value: 'Professional', label: 'Professional', count: certificates.filter(cert => cert.category === 'Professional').length }
  ]

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
            <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Certificates & Achievements</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning in web development, design, and digital technologies.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search certificates, skills, or issuers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="relative"
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                {/* Certificate Image/Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-600/20 overflow-hidden">
                  {certificate.fileType === 'pdf' ? (
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex flex-col items-center justify-center">
                      <FileText className="w-16 h-16 text-red-600 mb-2" />
                      <span className="text-red-600 font-semibold text-sm">PDF Certificate</span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center" style={{ display: 'none' }}>
                        <Award className="w-16 h-16 text-primary/60" />
                      </div>
                    </>
                  )}

                  {/* Verification Badge */}
                  {certificate.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white p-1 rounded-full">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}

                  {/* View Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg line-clamp-2">{certificate.title}</CardTitle>
                        <InstagramVerifiedBadge className="flex-shrink-0" size={18} />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span>{certificate.issuer}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {certificate.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {certificate.skills.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{certificate.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      {certificate.verificationUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer">
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

        {/* No Results */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No certificates found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filter criteria.
            </p>
          </motion.div>
        )}

        {/* AI Chatbot Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">My AI Assistant</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience my custom AI chatbot that can answer questions about my skills, experience, and projects.
              Feel free to ask anything about my professional background!
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/XMu27tiEkhnCS0bXQzKZJ"
              width="100%"
              style={{ height: '100%', minHeight: '700px' }}
              frameBorder="0"
              title="AI Assistant Chatbot"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        {/* Certificate Detail Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold">{selectedCertificate.title}</h2>
                      <InstagramVerifiedBadge className="flex-shrink-0" size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span>{selectedCertificate.issuer}</span>
                      {selectedCertificate.verified && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCertificate(null)}
                  >
                    ×
                  </Button>
                </div>

                {/* Certificate Image/PDF Preview */}
                <div className="mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20 min-h-64">
                  {selectedCertificate.fileType === 'pdf' ? (
                    <div className="w-full h-96">
                      <iframe
                        src={selectedCertificate.filePath}
                        className="w-full h-full border-0"
                        title={selectedCertificate.title}
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={selectedCertificate.imageUrl}
                        alt={selectedCertificate.title}
                        className="w-full h-auto object-contain max-h-96"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center" style={{ display: 'none' }}>
                        <Award className="w-24 h-24 text-primary/60" />
                      </div>
                    </>
                  )}
                </div>

                {/* Certificate Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{selectedCertificate.description}</p>
                  </div>

                  <div className="grid md:grid-cols-1 gap-4">
                    {selectedCertificate.credentialId && (
                      <div>
                        <h4 className="font-semibold mb-2">Credential ID</h4>
                        <p className="text-muted-foreground font-mono text-sm">{selectedCertificate.credentialId}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Skills Demonstrated</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {selectedCertificate.verificationUrl && (
                    <Button asChild>
                      <a href={selectedCertificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <a href={selectedCertificate.filePath} download target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </Button>
                  {selectedCertificate.fileType === 'pdf' && (
                    <Button variant="outline" asChild>
                      <a href={selectedCertificate.filePath} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Open in New Tab
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

export default Certificates

