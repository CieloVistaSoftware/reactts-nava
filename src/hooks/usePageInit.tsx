import { useEffect } from 'react';
import { initAllScripts } from '../utils/initScripts';

/**
 * Custom hook to initialize page scripts and handle preloader
 * @param title - Page title to set
 */
export const usePageInit = (title: string): void => {
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Initialize all external JavaScript libraries with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize all scripts
      initAllScripts();
      
      // Manually hide preloader if it still exists in the DOM from main.js
      if (document.querySelector('.preloader')) {
        const preloader = document.querySelector('.preloader') as HTMLElement;
        if (preloader) {
          preloader.style.display = 'none';
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [title]);
};

export default usePageInit;
