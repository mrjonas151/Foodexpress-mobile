import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";

function Routes(){
    const { isAuthenticated, loading } = useContext(AuthContext);

    if(loading){
        return(
            <View style={{flex: 1, backgroundColor:'#1d1d2e', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={60} color="#FFF"/>
            </View>
        )   
    }

    return(
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;