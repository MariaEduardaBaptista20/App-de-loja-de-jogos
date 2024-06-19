import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    inicio:{
        width: '100%',
        height:'100%',
        display: 'flex',
        paddingTop: 30,
        alignItems: 'center',
    },
    titulo:{
        display: 'flex',
       fontSize: 30,
      backgroundColor: 'black',
      width: '100%',
      textAlign: 'center',
        color: '#FFF'


    },
    fraseBanner:{
        fontSize: 15,
         textAlign: 'center',
         backgroundColor: 'black',
         color: '#ededed',
         paddingVertical: 5
         
    },

    banner:{
       width: '100%',
       height: 200,
       
       
    },

   

    produtoSessao:{
     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'space-around',
     paddingTop: 10,
     backgroundColor: '#090921',
     paddingHorizontal: 10
    },

    divButtonsFiltro:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-around'

    },

    tituloButtonsFiltros:{
        color: '#ededed',
        marginBottom: 10
    },

    buttonFiltro:{
        borderColor: '#ededed',
        borderWidth: 2,
        padding: 2,
        fontSize: 9,
        width: 60,
        height: 35,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ededed',
        marginBottom: 20,
        
    },

    produto:{
       width: 90,
       display: 'flex',
       alignItems: 'center',
       borderColor: '#ededed',
       borderWidth: 2,
       marginBottom: 20,
       paddingVertical: 5,
       paddingHorizontal: 10,
       

    },

    img:{
       width: 80, 
       height: 100
    },
    containerTextoProduto:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 51.5,
        
        
    },
    produtoTitulo:{
        fontSize: 10,
        flexWrap: 'nowrap',
        textAlign: 'center',
        color: '#ededed'
    },
    produtoValor:{
        fontSize: 10,
        color: '#ededed'
        
    }
    
})