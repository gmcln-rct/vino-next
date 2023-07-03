import { createContext, useState, useEffect } from 'react';

const MainContext = createContext({});

export function MainContextProvider(props) {
    const [isNewVisit, setIsNewVisit] = useState(false);
    const [sessionStartDate, setSessionStartDate] = useState(undefined);
    // const [topScore, setTopScore] = useState(0);

    useEffect(() => {
      if (!sessionStartDate) {
            // First visit, store the session start time
            setSessionStartDate(Date.now());
            setIsNewVisit(true);
        } else {
            const ONE_HOUR = 60 * 60 * 1000; /* ms */
            if ((Date.now() - sessionStartDate) > ONE_HOUR) {
                // If session started more than an hour ago
                setIsNewVisit(true);
                setSessionStartDate(Date.now());
                // Update session start time
            } else {
                setIsNewVisit(false);
            }
        }
      }, []);
      
      useEffect(() => {
        console.log('isNewVisit ', isNewVisit);
    }, [isNewVisit]);

    const context = {
      isNewVisit,
      setIsNewVisit
    };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;
