import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    conta:{
      
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#090921',
        gap: 50
    },
    imgProfile:{
        borderRadius: 100,
        height: 200,
        width: 200,
        marginBottom: 10,
        borderWidth: 2,
        borderColor:'#ededed'

    },
    nome:{
        fontSize: 30,
        paddingBottom: 100,
        color: '#ededed',
    },
    sair:{
        minWidth: "70%",
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: 'black',
        color: '#ededed',
        fontSize: 18,
        borderColor: '#ededed',
        borderWidth: 2,
        borderRadius: 10,

    }
})