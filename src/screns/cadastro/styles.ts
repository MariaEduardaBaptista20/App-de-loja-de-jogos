import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    login:{
      
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#090921',
        gap: 10
    },
    image:{
        borderRadius: 100,
        height: 200,
        width: 200,
        marginBottom: 10,
        borderWidth: 2,
        borderColor:'#ededed',

    },
    text:{
        fontSize: 30,
        color: '#ededed',
    },
    cadastrar:{
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: 'black',
        color: '#ededed',
        fontSize: 18,
        borderColor: '#ededed',
        borderWidth: 2,
        borderRadius: 10,
        margin: 20,
        
    },

   textInput:{
    backgroundColor:'#ededed',
    width:'80%',
    height: 30
   }

    
})