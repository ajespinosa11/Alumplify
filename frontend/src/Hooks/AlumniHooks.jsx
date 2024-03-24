import { AlumniContext } from "../Context/AlumniContext";
import { useContext } from "react";

export const AlumniHooks = () => {
    const context = useContext(AlumniContext)

    if(!context){
        throw Error('UseAlumniContext must be used inside an AlumnContextProvider')
    }

    return context;
}