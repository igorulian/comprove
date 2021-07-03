import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    form:{
        marginBottom: 20
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
        color: '#fff'
    },
    loginwithContainer:{
        flexDirection: 'row',
        marginTop: 10
    },
    loginwithContent:{
        flexDirection: 'row',
        width: 110,
        height: 45,
        backgroundColor: '#f1f1f1',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginwithText:{
        marginLeft: 5
    },
    logoContainer:{
        top: 0,
        alignItems: 'center',
        marginBottom: 50
    },
    logoText:{
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default styles
