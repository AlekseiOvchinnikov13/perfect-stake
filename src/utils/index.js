export const isBrowser = typeof window !== 'undefined';

const MobileWidth = '950';
export const isMobile = isBrowser && window.innerWidth <= MobileWidth;