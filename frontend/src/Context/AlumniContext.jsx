import { createContext, useReducer } from "react";

export const AlumniContext = createContext();

export const AlumniReducer = (state, action) => {
    switch(action.type){
        case 'SET_ALUM':
            return {
                Event: action.eventLoad,
                Stories: action.NSLoad,
                BOA: action.payload
            };
        case 'CREATE_ALUM':
            if(action.Variable === "Stories"){
                return{
                    Stories: [action.payload, ...state.Stories]
                }
            }else if(action.Variable === "Event"){
                return{
                    Event: [action.payload, ...state.Stories]
                }
            }else if(action.Variable === "BOA"){
                return{
                    BOA: [action.payload, ...state.BOA ]
                }
            }

            
        case 'DELETE_ALUM':
            if(action.Variable === "Stories"){
                return{
                    Stories: state.Stories.filter((w) => w._id !== action.payload._id)
                }
            }else if(action.Variable === "Event"){
                return{
                    Event: state.Event.filter((w) => w._id !== action.payload._id)
                }
            }else if(action.Variable === "BOA"){
                return{
                    BOA: state.BOA.filter((w) => w._id !== action.payload._id)
                }
            }
            return{
                Alumni: state.Alumni.filter((w) => w._id !== action.payload._id)
            }
        // case 'UPDATE_ALUM':
        //     return{
        //         Alumni: state.Alumni.filter((w) => w._id === action.payload._id)
        //     }
        
        default:
            return state;
    }
};

export const AlumnContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AlumniReducer, {
        BOA: [],
        Event: [],
        Stories: []
    })

    return(
        <AlumniContext.Provider value = {{... state, dispatch}} >
            {children}
        </AlumniContext.Provider>
    )
}