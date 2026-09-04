import { useEffect, useRef } from 'react';

export default function useInactivityTimeout(onTimeout, timeoutMs = 15 * 60 * 1000) {
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (typeof onTimeout === 'function') {
      timerRef.current = setTimeout(onTimeout, timeoutMs);
    }
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
    
    resetTimer();

    const handleUserActivity = () => {
      resetTimer();
    };

    events.forEach(event => window.addEventListener(event, handleUserActivity, { passive: true }));

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach(event => window.removeEventListener(event, handleUserActivity));
    };
  }, [onTimeout, timeoutMs]);
}
