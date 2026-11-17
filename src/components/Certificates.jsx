import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  Building,
  Calendar,
  Download,
  ExternalLink,
  Eye,
  FileText
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const certificates = [
  {
    id: 1,
    title: 'Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure',
    issuer: 'LinkedIn Learning and Microsoft',
    issueDate: '2025-06-21',
    category: 'AI and cloud',
    filePath: '/certificates/azure-ai-essentials.pdf',
    fileType: 'pdf',
    imageUrl: '/certificates/azure-ai-essentials.pdf',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/571dd0b74c7233b7b686e3c456653968a3d7bb0d4946c66b7d09981e77a0eb3e',
    description: 'LinkedIn Learning course completed on 21 June 2025 (3 hours 23 minutes), covering machine learning and Azure AI workloads.'
  },
  {
    id: 2,
    title: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'LinkedIn Learning and GitHub',
    issueDate: '2025-07-06',
    category: 'Programming tools',
    filePath: '/certificates/github-career-essentials.pdf',
    fileType: 'pdf',
    imageUrl: '/certificates/github-career-essentials.pdf',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/3029ace8c44db6dd88ea44e52dbb78622445527a43e27e6e2588ab2ea2bbc580',
    description: 'LinkedIn Learning path completed on 6 July 2025 (4 hours 18 minutes), covering GitHub fundamentals.'
  },
  {
    id: 3,
    title: 'Introduction to Artificial Intelligence',
    issuer: 'LinkedIn Learning',
    issueDate: '2025-09-08',
    category: 'AI and cloud',
    filePath: '/certificates/introduction-to-ai.pdf',
    fileType: 'pdf',
    imageUrl: '/certificates/introduction-to-ai.pdf',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/fdfd8186a7c4d2ac814503853e15be8bdddafd2630accab85b3bb34c2f3f512c',
    description: 'LinkedIn Learning course completed on 8 September 2025 (2 hours 26 minutes).'
  },
  {
    id: 4,
    title: 'Learn to Code in Python 3: Programming beginner to advanced',
    issuer: 'Udemy',
    issueDate: '2025-09-08',
    category: 'Programming',
    filePath: '/certificates/udemy-python-3.jpg',
    fileType: 'jpg',
    imageUrl: '/certificates/udemy-python-3.jpg',
    verificationUrl: 'https://www.udemy.com/certificate/UC-669c4341-7a29-4a40-ae80-752109202cd3/',
    description: 'Udemy course completed on 8 September 2025 (5.5 hours).'
  },
  {
    id: 5,
    title: 'Introduction to Prompt Engineering for Generative AI',
    issuer: 'LinkedIn Learning',
    issueDate: '2025-06-21',
    category: 'AI and cloud',
    filePath: '/certificates/prompt-engineering-generative-ai.pdf',
    fileType: 'pdf',
    imageUrl: '/certificates/prompt-engineering-generative-ai.pdf',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/0826c0324b3a49882d7b6ae935cd4344c9c419180ae309aed06c4d9ff4c70302',
    description: 'LinkedIn Learning course completed on 21 June 2025 (1 hour 3 minutes).'
  },
  {
    id: 6,
    title: 'Microsoft Office Specialist, Word 2019 Associate',
    issuer: 'Microsoft / Certiport',
    issueDate: '2023-02-02',
    category: 'Microsoft Office',
    filePath: '/certificates/mos-word-2019.jpg',
    fileType: 'jpg',
    imageUrl: '/certificates/mos-word-2019.jpg',
    verificationUrl: null,
    description: 'Microsoft Office Specialist exam in Word 2019, passed on 2 February 2023.'
  },
  {
    id: 7,
    title: 'HTML5 with Responsive Web Design',
    issuer: 'Aptech Computer Education',
    issueDate: '2023-10-12',
    category: 'Web development',
    filePath: '/certificates/html5-responsive-web-design.jpg',
    fileType: 'jpg',
    imageUrl: '/certificates/html5-responsive-web-design.jpg',
    verificationUrl: 'https://aptrack.asia',
    description: 'Certificate of Participation for completing the HTML5 with Responsive Web Design course at ACE Punjab 4 Gujranwala, issued on 12 October 2023.'
  }
]

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Selected certificates</h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A short list of certificates in computer science, AI, programming, and related tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
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
                  <Badge variant="outline" className="w-fit mb-2">{certificate.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">{certificate.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Building className="w-4 h-4" />
                    <span>{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(certificate.issueDate)}</span>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">{selectedCertificate.title}</h2>
                <p className="text-muted-foreground">{selectedCertificate.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {selectedCertificate.issuer}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(selectedCertificate.issueDate)}
                  </span>
                </div>
                {selectedCertificate.fileType !== 'pdf' && (
                  <img
                    src={selectedCertificate.imageUrl}
                    alt={selectedCertificate.title}
                    className="w-full rounded-lg border"
                  />
                )}
                <div className="flex flex-wrap gap-3">
                  {selectedCertificate.verificationUrl && (
                    <Button asChild>
                      <a href={selectedCertificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <a href={selectedCertificate.filePath} target="_blank" rel="noopener noreferrer">
                      {selectedCertificate.fileType === 'pdf' ? <Eye className="w-4 h-4 mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                      {selectedCertificate.fileType === 'pdf' ? 'Open in New Tab' : 'View file'}
                    </a>
                  </Button>
                  <Button variant="ghost" onClick={() => setSelectedCertificate(null)}>
                    Close
                  </Button>
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
