import { Dimensions, StyleSheet } from "react-native";


const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        paddingLeft: 20,
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 20,
        backgroundColor: '#ffff'
    },
    inputname:{
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'flex-start'
    },
    inputContainer:{
    },
    colorInputContainer:{
        marginTop: 20,
        width: 250,
        alignItems: 'center'
    },
    color:{
        width: 50,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBlur:{
        width: 50,
        height: 50,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '#fff',
        opacity: 0.5
    },
    btnCriar:{
        backgroundColor: '#0b465e',
        height: 45,
        width: screenWidth - 200,
        marginBottom: 30,
        marginTop: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnCriarTxt:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default styles