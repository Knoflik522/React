import { useState, useEffect } from 'react';

function useLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(true); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return isLoggedIn;
}

export default useLoginStatus;
