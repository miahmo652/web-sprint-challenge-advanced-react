import {useLocalStorage} from './useLocalStorage.js'
import React, {useEffect} from 'react'


export const useDarkMode=()=>{

    const[darkMode, setDarkMode] = useLocalStorage("darkmode");

    useEffect(()=>{
        if(darkMode){
            document.querySelector('body').classList.add("dark-mode")
           /*document.querySelector('form').classList.add("dark-mode") */
        }
        else{
            document.querySelector('body').classList.remove("dark-mode")
            /*document.querySelector('form').classList.remove("dark-mode")*/
        }
    }, [darkMode])
 
    return [darkMode, setDarkMode];
}