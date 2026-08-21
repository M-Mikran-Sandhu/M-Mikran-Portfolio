import { Helmet } from 'react-helmet-async'

const SEOHead = ({
    title = "Muhammad Mikran Sandhu | Software Developer & Alpha Group Owner",
    description = "Professional software developer and owner of Alpha Group. Expert in React, Node.js, full-stack development, and digital solutions. 28+ certifications, 22+ successful projects. Contact: +92 349 420 6922",
    keywords = "Muhammad Mikran Sandhu, Alpha Group, software developer, web developer, React developer, Node.js, full stack developer, Gujranwala developer, Pakistan developer, digital solutions, web design, Alpha Solutions",
    canonical = "https://mikran.alphasolutions.online",
    image = "https://mikran.alphasolutions.online/MMS%20PIC.jpg"
}) => {
    const siteUrl = "https://mikran.alphasolutions.online"

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
                    "jobTitle": "Software Developer & Owner of Alpha Group",
                    "url": siteUrl,
                    "image": image,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Gujranwala",
                        "addressRegion": "Punjab",
                        "addressCountry": "Pakistan"
                    },
                    "telephone": "+923494206922",
                    "email": "contact@mikran.alphasolutions.online",
                    "sameAs": [
                        "https://www.linkedin.com/in/m-mikran-sandhu/",
                        "https://github.com/m-mikran-sandhu",
                        "https://taplink.cc/mmikransandhu"
                    ],
                    "knowsAbout": [
                        "React", "Node.js", "JavaScript", "Full Stack Development",
                        "Web Development", "UI/UX Design", "Digital Marketing", "SEO"
                    ],
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Alpha Group",
                        "url": "https://alphagroup.alphasolutions.online"
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