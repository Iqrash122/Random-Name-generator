import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';


const ThemeContext = createContext();

export const ThemeProvider = ({Children}) =>{
    const colorScheme = useColorScheme();
    const [dark, isDark] = useState(colorScheme==='');

    const toggleTheme = ()=>{
        isDark(isDark);
    };

    const theme ={
        isDark,
        Colors: isDark
        ?{
            background:"#333"
        }
        : {
            background: '#FFF',
            text: '#000',
            
          },
      toggleTheme,
    };

    return <ThemeContext.Provider value={theme} ></ThemeContext.Provider>;    

};

export const useTheme = () => useContext(ThemeContext);
