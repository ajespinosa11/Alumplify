import { createContext, useReducer } from "react";

export const AlumniContext = createContext();

export const AlumniReducer = (state, action) => {
    switch(action.type){
        case 'SET_ALUM':
            return {
                Alumni: action.payload
            };
        case 'CREATE_ALUM':
            return{
                Alumni: [action.payload, ...state.Alumni ]
            }
        case 'DELETE_ALUM':
            return{
                Alumni: state.Alumni.filter((w) => w._id !== action.payload._id)
            }
        case 'UPDATE_ALUM':
            return{
                Alumni: state.Alumni.filter((w) => w._id === action.payload._id)
            }
        case 'INDIV_SET_ALUM':
            console.log(action.payload)
            return{
                Alumni: state.Alumni.filter((w) => w._id === action.payload._id)
            }
        default:
            return state;
    }
};

export const AlumnContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AlumniReducer, {
        Alumni: []
    })

    return(
        <AlumniContext.Provider value = {{... state, dispatch}} >
            {children}
        </AlumniContext.Provider>
    )
}