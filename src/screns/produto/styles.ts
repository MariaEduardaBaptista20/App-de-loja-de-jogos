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
        width: 230, 
        height: 300

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
        color: '#FFF',
       

    },
    botoes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        marginTop: 10

    }

})