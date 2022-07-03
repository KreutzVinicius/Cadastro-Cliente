import {createContext } from 'react'

export const steps ={
    isStep1Complete: false,
    isStep2Complete: false,
    isStep3Complete: false
    
}

export const StepsContext = createContext({
    steps,
});
