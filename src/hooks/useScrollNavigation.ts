import { useEffect, useState } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface UseScrollNavigationOptions {
  offset?: number;
  smooth?: boolean;
}

interface ScrollNavigationReturn {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isScrolling: boolean;
}

export const useScrollNavigation = (
  navigationItems: NavigationItem[],
  options: UseScrollNavigationOptions = {}
): ScrollNavigationReturn => {
  const { offset = 100, smooth = true } = options;
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setIsScrolling(true);

    const elementPosition = element.offsetTop - offset;
    
    if (smooth) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.scrollTo({
        top: elementPosition,
        behavior: 'instant'
      });
    }

    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    if (isScrolling) return; // Don't update active section while programmatically scrolling

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the current section based on scroll position
      let currentSection = '';
      
      for (const item of navigationItems) {
        const sectionId = item.href.replace('#', '');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If no section is found, check if we're near the top
      if (!currentSection && scrollPosition < 200) {
        currentSection = navigationItems[0]?.href.replace('#', '') || '';
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener with throttling
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [navigationItems, offset, isScrolling]);

  return {
    activeSection,
    scrollToSection,
    isScrolling
  };
};

export default useScrollNavigation;