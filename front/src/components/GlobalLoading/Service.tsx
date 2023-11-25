import { useState, ReactNode, createContext, useContext } from 'react';

export const GlobalLoadingContext = createContext({
    isLoading: true,
    showLoading: () => { },
    hideLoading: () => { }
})

export const useGlobalLoading = () => {
    const contextValue = useContext(GlobalLoadingContext);
    if (!contextValue) {
        throw new Error('useGlobalLoading must be used inside the GlobalLoadingProvider');
    }
    return contextValue;
};

export const GlobalLoadingProvider = ({ children }: { children: ReactNode }) => {

    const showLoading = () => {
        toggleLoading(prevState => {
            console.log("showLoading: " + JSON.stringify({
                ...prevState,
                isLoading: true
            }));
            return {
                ...prevState,
                isLoading: true
            }
        })
    }

    const hideLoading = () => {
        toggleLoading(prevState => {
            console.log("hideLoading: " + JSON.stringify({
                ...prevState,
                isLoading: false
            }));
            return {
                ...prevState,
                isLoading: false
            }
        })
    }

    const loadingState = {
        isLoading: false,
        showLoading,
        hideLoading
    }

    const [loading, toggleLoading] = useState(loadingState)

    return (
        <GlobalLoadingContext.Provider value={loading}>
            {children}
        </GlobalLoadingContext.Provider>
    )
}
