import { createContext, useContext, useState } from 'react'

const IsOpenContext = createContext();

export const useIsOpenContext = () => (
    useContext(IsOpenContext)
)

export const IsOpenContextProvider = ({ children }) => {

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);

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

    const handleOpenEmail = () => {
        setOpenEmail(true)
    }
    const handleCloseEmail = () => {
        setOpenEmail(false)
    }

    return (
        <IsOpenContext.Provider value={{ isBurgerOpen, isMenuOpen, openBurgerMenu, closeBurgerMenu, openNavMenu, closeNavMenu, toggleNavMenu, openEmail, handleOpenEmail, handleCloseEmail }}>
            { children }
        </IsOpenContext.Provider>
    )
}