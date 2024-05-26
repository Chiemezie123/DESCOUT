import React, { createContext, useState, useContext } from 'react';
import { DriverDataProps } from './index.types';
import useLocalStorage from '@hooks/useLocalStorage';


interface AppContextType {
  driverState: DriverDataProps[],
  getDriverData: (item: DriverDataProps) => void;
}


// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const initialDriverData:DriverDataProps[] =[];
interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider:React.FC<AppProviderProps> = ({ children }:any) => {

  const[storedValue, setValue]= useLocalStorage("storedDriverInfo",initialDriverData);

  const [driverState,setDriverState] = useState<DriverDataProps[]>(storedValue);

  const getDriverData =(item:DriverDataProps)=>{
    setDriverState([item]);
    setValue([item]);
  }

  const values:AppContextType ={
    driverState,
    getDriverData,
  }
  return (
    <AppContext.Provider
      value={values}
    >
      {children}
    </AppContext.Provider>
  );
};
