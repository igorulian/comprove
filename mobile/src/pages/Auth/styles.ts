import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    form:{
        marginBottom: 20
    },
    content:{
        alignItems: 'center',
        marginTop: 50
    },
    input: {
        paddingLeft: 20,
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 20,
    },
    button:{
        height: 45,
        width: 180,
        backgroundColor: '#f78139',
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
    loginwithContent:{
        flexDirection: 'row',
        width: 130,
        height: 45,
        padding: 5,
        borderRadius: 15,
        backgroundColor: '#fff',
        margin: 10,
        borderWidth: .5,
        borderColor: '#c4c4c4',
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginwithText:{
        marginLeft: 5,
        fontSize: 9
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 50
    },
    logoText:{
        fontSize: 20,
        fontWeight: 'bold'
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
    }
})

export default styles
