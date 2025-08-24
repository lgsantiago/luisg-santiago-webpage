import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Luis G Santiago - Software Engineer & Developer Advocate",
  description = "Passionate software engineer based in Miami specializing in React, TypeScript, and modern web development. Building innovative applications that help businesses thrive in the digital world.",
  keywords = "Luis Santiago, Software Engineer, React Developer, TypeScript, JavaScript, Web Development, Frontend Developer, Full Stack Developer, Miami Developer, YouTube Creator",
  image = "https://your-domain.com/og-image.jpg", // Replace with actual image URL
  url = "https://your-domain.com", // Replace with actual domain
  type = "website"
}) => {
  const fullTitle = title.includes("Luis G Santiago") ? title : `${title} | Luis G Santiago`;
  
  useEffect(() => {
    // Set document title
    document.title = fullTitle;
    
    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property: boolean = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Set basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Luis G Santiago');
    setMetaTag('robots', 'index, follow');
    
    // Set Open Graph tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:site_name', 'Luis G Santiago Portfolio', true);
    
    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    
    // Add structured data JSON-LD
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script') as HTMLScriptElement;
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Luis G Santiago",
      "jobTitle": "Software Engineer",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://www.linkedin.com/in/luisg-santiago/",
        "https://medium.com/@luisg_santiago",
        "https://www.youtube.com/@lgsantiago",
        "https://github.com/luisg-santiago"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Web Development",
        "Software Engineering",
        "Frontend Development",
        "Full Stack Development"
      ]
    };
    
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
  }, [fullTitle, description, keywords, image, url, type]);
  
  return null; // This component doesn't render anything visible
};

export default SEOHead;