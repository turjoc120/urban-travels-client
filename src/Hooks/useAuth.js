import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";


const useAuth = () => {
    return useContext(authContext)
};

export default useAuth;