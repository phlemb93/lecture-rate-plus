import { createContext, useContext, useState } from 'react'

const IsOpenContext = createContext();

export const useIsOpenContext = () => (
    useContext(IsOpenContext)
)

export const IsOpenContextProvider = ({ children }) => {

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openBurgerMenu = () => {
        setIsBurgerOpen(true)
    }
    const closeBurgerMenu = () => {
        setIsBurgerOpen(false)
    }
    const openNavMenu = () => {
        setIsMenuOpen(true)
    }
    const closeNavMenu = () => {
        setIsMenuOpen(false)
    }
    const toggleNavMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <IsOpenContext.Provider value={{ isBurgerOpen, isMenuOpen, openBurgerMenu, closeBurgerMenu, openNavMenu, closeNavMenu, toggleNavMenu }}>
            { children }
        </IsOpenContext.Provider>
    )
}