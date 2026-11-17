import { Helmet } from 'react-helmet-async'

const SEOHead = ({
    title = "Muhammad Mikran Sandhu | Computer Science and AI Student",
    description = "BSc Computer Science student at the University of Central Punjab, Gujranwala Campus, graduating August 2027. Open to internships, research, graduate study, and jobs from 2027.",
    keywords = "Muhammad Mikran Sandhu, Computer Science student, AI, University of Central Punjab, Gujranwala, web developer, internships, graduate study, React, Python, Flask",
    canonical = "https://m-mikran-portfolio.vercel.app",
    image = "https://m-mikran-portfolio.vercel.app/MMS%20PIC.jpg"
}) => {
    const siteUrl = "https://m-mikran-portfolio.vercel.app"

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content="Muhammad Mikran Sandhu" />
            <meta name="revisit-after" content="7 days" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Muhammad Mikran Sandhu Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional SEO Tags */}
            <meta name="geo.region" content="PK-PB" />
            <meta name="geo.placename" content="Gujranwala" />
            <meta name="geo.position" content="32.1877;74.1945" />
            <meta name="ICBM" content="32.1877, 74.1945" />

            {/* Preconnect for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Schema.org structured data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Muhammad Mikran Sandhu",
                    "jobTitle": "Computer Science Student",
                    "url": siteUrl,
                    "image": image,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Gujranwala",
                        "addressRegion": "Punjab",
                        "addressCountry": "Pakistan"
                    },
                    "email": "mikran.student@gmail.com",
                    "sameAs": [
                        "https://www.linkedin.com/in/m-mikran-sandhu/",
                        "https://github.com/M-Mikran-Sandhu"
                    ],
                    "knowsAbout": [
                        "Computer Science", "Artificial Intelligence", "Python", "React",
                        "JavaScript", "Web Development", "Systems Software"
                    ],
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Alpha Solutions"
                    },
                    "alumniOf": {
                        "@type": "EducationalOrganization",
                        "name": "University of Central Punjab"
                    }
                })}
            </script>
        </Helmet>
    )
}

export default SEOHead