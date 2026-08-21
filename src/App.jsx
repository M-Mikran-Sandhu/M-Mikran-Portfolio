import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Import page components
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'
import CustomLoader from './components/CustomLoader'
import useLoader from './hooks/useLoader'

// App Content Component to access useLocation
function AppContent() {
  const [darkMode, setDarkMode] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isLoading, startPageTransition } = useLoader()
  const location = useLocation()
  const [previousPath, setPreviousPath] = useState('')

  // Trigger page transition when location changes
  useEffect(() => {
    startPageTransition()

    // Only scroll to top if it's actually a different route
    if (previousPath && previousPath !== location.pathname) {
      const scrollTimer = setTimeout(() => {
        const mainElement = document.querySelector('main')
        if (mainElement) {
          mainElement.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 200)

      return () => clearTimeout(scrollTimer)
    }

    setPreviousPath(location.pathname)
  }, [location.pathname, startPageTransition, previousPath])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <CustomLoader isVisible={isLoading} />
      <div className="min-h-screen bg-background text-foreground">
        {/* Mobile Header */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">MMS</h1>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="h-9 w-9"
              >
                {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />

        {/* Main Content */}
        <main className={`transition-all duration-300 lg:ml-80 pt-16 lg:pt-0 scrollbar-futuristic`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </>
  )
}

// Main App Component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

