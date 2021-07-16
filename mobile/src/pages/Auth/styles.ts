import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100
    },
    form:{
        marginBottom: 20,
        justifyContent: 'center'
    },
    content:{
        alignItems: 'center',
        marginTop: 50
    },
    input: {
        paddingLeft: 38,
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 20,
    },
    button:{
        height: 45,
        width: 180,
        backgroundColor: '#0b465e',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext:{
        color: '#fff',
        fontWeight: 'bold'
    },
    loginwithContainer:{
        flexDirection: 'row',
        marginTop: 10
    },
    loginwithContentGoogle:{
        flexDirection: 'row',
        width: 130,
        height: 45,
        padding: 5,
        borderRadius: 15,
        backgroundColor: '#e34133',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginwithContentFacebook:{
        flexDirection: 'row',
        width: 130,
        height: 45,
        padding: 5,
        borderRadius: 15,
        backgroundColor: '#24479b',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginwithTextGoogle:{
        marginLeft: 5,
        fontSize: 9,
        color: '#fff',
        fontWeight: 'bold'
    },
    loginwithTextFacebook:{
        marginLeft: 5,
        fontSize: 9,
        color: '#fff',
        fontWeight: 'bold'
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 10
    },
    logoContainerLogin:{
        alignItems: 'center',
        marginTop: -40
    },
    logoText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -10
    },
    orLoginButton:{
        marginTop: 20,
        bottom: 0,
        alignItems: 'center',
        marginBottom: 50
    },
    orLoginText:{
        color: '#3f3f3f'
    },
    orLoginTextEntre:{
        color: '#3f3f3f',
        fontWeight: 'bold'
    },
    loginContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fillSpace:{
        height: 100
    },
    inputIcon:{
        position: 'absolute',
        marginLeft: 10
    }
})

export default styles
