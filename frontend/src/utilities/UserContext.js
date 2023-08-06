import { createContext, useContext, useEffect, useReducer } from "react";


const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {
    const initialState = {
        user: null
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'login':
                return { user: action.payload };
            case 'logout':
                return { user: null };
            default:
                return initialState;
        }
    }

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({
                type: 'login',
                payload: user
            })
        }
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{ user: state.user, dispatch }}>
            { children }
        </UserContext.Provider>
    )
}