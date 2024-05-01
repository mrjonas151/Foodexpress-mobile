import React from "react";
import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard(){
    const { signOut } = useContext(AuthContext);

    return(
        <View>
            <Text>Tela dashboard</Text>
            <Button title="Sair do APP" onPress={signOut}/>
        </View>
    )
}