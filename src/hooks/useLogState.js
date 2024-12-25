import { useEffect } from 'react';

function useLogState(state) {
  useEffect(() => {
    console.log('Поточний стан:', state);
  }, [state]); 
}

export default useLogState;
