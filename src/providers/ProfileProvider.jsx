/* eslint-disable react/prop-types */
import { useReducer } from "react"
import { initialState, profileReducer } from "../reducers/ProfileReducers"
import { ProfileContext} from "../context"

export const ProfileProvider = ({children}) =>{
    const [state, dispatch] = useReducer(profileReducer,initialState)
    return (
        <ProfileContext.Provider value={{state, dispatch}}>
            {children}
        </ProfileContext.Provider>
    )
}