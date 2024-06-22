import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    tela:{
        width: '100%',
        height:'100%',
        display: 'flex',
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: '#090921',
    },
    img:{
        width: 250, 
        height: 320

    },
    titulo:{
        fontSize: 40,
        textAlign: 'center',
        color: '#ededed',
        paddingVertical: 5
        
    },
    plataforma:{
        fontSize: 15,
        textAlign: 'center',
        color: '#ededed',
        paddingVertical: 5
        
    },
    preco:{
        fontSize: 30,
        textAlign: 'center',
        color: 'red',
        paddingVertical: 5
    }

})