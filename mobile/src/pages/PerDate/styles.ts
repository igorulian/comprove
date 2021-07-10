import { StyleSheet } from "react-native";


const fileStyle = StyleSheet.create({
    container:{
        height: 80,
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        elevation: 2
    },
    content:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10
    },
    contentLeft:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    contentRight:{
        width: 180,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    teste:{
        height: 50,
        width: 50,
        backgroundColor: '#333'
    },
    info:{
        alignItems: 'flex-start',
    },
    datetxt:{
        color: '#c1c1c1'
    },
    categoryContainer:{
        backgroundColor: '#0b465e',
        width: 70,
        height: 25,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    categoryText:{
        color: '#fff',
        fontSize: 13
    }
})

export {fileStyle}