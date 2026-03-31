import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const currentTarget = targetRef.current;
    
    // Default options
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
       
        if (currentTarget) {
          observer.unobserve(currentTarget);
        }
      }
    }, observerOptions);

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]); 

  return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
