import { createContext, useState, useEffect } from 'react';

// Uppercase because it's a component
const MainContext = createContext({
});


export function MainContextProvider(props) {
    // const [currentDate, setCurrentDate] = useState(new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear();
    const [isNewVisit, setIsNewVisit] = useState(false);
  
    useEffect(() => {
      const sessionStartDate = sessionStorage.getItem('sessionStartDate');
    //   console.log('sessionStartDate ', sessionStartDate)

        const currentDate = (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear();
        console.log('currentDate.getDate() ', currentDate);
        if (currentDate !== sessionStartDate) {
          setIsNewVisit(true);
        //   setCurrentDate(currentDate);
          sessionStorage.setItem('sessionStartDate', currentDate);
      } else {
        setIsNewVisit(false);
      }
    }, []);
  
    console.log('isNewVisit ', isNewVisit);
    // console.log('currentDate ', currentDate)
  
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