
// Animation sequence utility
export const staggerChildren = (delay = 0.1, staggerTime = 0.1) => {
  return (index: number) => ({
    transitionDelay: `${delay + index * staggerTime}s`
  });
};

// Generate intersection observer options
export const getIntersectionObserverOptions = (
  rootMargin = '0px',
  threshold = 0.1
): IntersectionObserverInit => {
  return {
    rootMargin,
    threshold
  };
};

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Smooth scroll to element
export const scrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Generate random animation delay for staggered animations
export const randomDelay = (min = 0, max = 0.5): string => {
  return `${min + Math.random() * (max - min)}s`;
};
