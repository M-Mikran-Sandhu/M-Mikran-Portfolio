import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  User,
  Code,
  FolderOpen,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Sun,
  Moon,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import InstagramVerifiedBadge from '@/components/ui/instagram-verified-badge.jsx'

const Sidebar = ({ isOpen, onClose, darkMode, toggleTheme }) => {
  const location = useLocation()

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home', badge: null },
    { path: '/about', icon: User, label: 'About', badge: null },
    { path: '/skills', icon: Code, label: 'Skills', badge: null },
    { path: '/projects', icon: FolderOpen, label: 'Projects', badge: '22' },
    { path: '/experience', icon: Briefcase, label: 'Experience', badge: null },
    { path: '/education', icon: GraduationCap, label: 'Education', badge: null },
    { path: '/certificates', icon: Award, label: 'Certificates', badge: '28' },
    { path: '/contact', icon: Mail, label: 'Contact', badge: null },
  ]

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/m-mikran-sandhu/',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      href: 'https://github.com/m-mikran-sandhu',
      icon: Github,
      label: 'GitHub',
      color: 'text-gray-400 hover:text-white'
    },
    {
      href: 'https://taplink.cc/mmikransandhu',
      icon: ExternalLink,
      label: 'All Social Links',
      color: 'text-green-500 hover:text-green-400'
    },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-80 bg-card border-r border-border transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
        <div className="flex flex-col h-full overflow-y-auto scrollbar-hide p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8 flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src="/MMS PIC.jpg"
                alt="Muhammad Mikran Sandhu"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                MMS
              </div> */}
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-center">Muhammad Mikran Sandhu</h2>
              <InstagramVerifiedBadge className="flex-shrink-0" size={18} />
            </div>
            <p className="text-sm text-muted-foreground text-center">@mmikransandhu</p>

            {/* Social Links */}
            <div className="flex gap-2 mt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="hidden lg:flex justify-center mb-6 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="w-full"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 mr-2" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path
                const Icon = item.icon

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 group ${isActive
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'hover:bg-secondary/80 text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full ${isActive
                          ? 'bg-primary-foreground text-primary'
                          : 'bg-primary text-primary-foreground'
                          }`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-border flex-shrink-0">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 Muhammad Mikran Sandhu
            </p>
            <p className="text-xs text-muted-foreground text-center">
              All rights reserved.
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

