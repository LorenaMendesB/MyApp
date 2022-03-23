import { Platform, StyleSheet, TextInput } from "react-native";
export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        color: 'white',
        margin: 20,
    },
    input:{
        backgroundColor: '#1f1e25',
        color: 'white',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginHorizontal: 20,
    },
    button:{
        backgroundColor: 'green',
        padding: 15,
        margin: 20,
        alignItems: 'center',
        borderRadius: 7,
        

    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
    })  
    //Com o Platform é possível testar qual sistema operacionar para 
    // fazer configurações
