import { createContext, useState, useEffect } from 'react';

// Uppercase because it's a component
const MainContext = createContext({});

export function MainContextProvider(props) {
    const [isNewVisit, setIsNewVisit] = useState(false);
    const currentDate = new Date().toISOString().slice(0,10); // "YYYY-MM-DD"

    useEffect(() => {
        const sessionStartDate = sessionStorage.getItem('sessionStartDate');

        console.log('sessionStartDate ', sessionStartDate);
        console.log('currentDate.getDate() ', currentDate);
        console.log('equal? ', currentDate === sessionStartDate);
        if (currentDate === sessionStartDate) {
          setIsNewVisit(false);
        } else {
          setIsNewVisit(true);
          sessionStorage.setItem('sessionStartDate', currentDate);
        }
    }, [currentDate]);

    useEffect(() => {
      console.log('isNewVisit ', isNewVisit);
    }, [isNewVisit]);
  
    const context = {
      isNewVisit,
    };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;