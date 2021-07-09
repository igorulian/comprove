import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        color: '#0b465e',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    categoryContainer:{
        height: 80,
        width: screenWidth,
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        justifyContent: 'center'
    },
    categoryInfo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryName:{
        fontSize: 20,
        marginLeft: 10
    },
    categoryButtons:{
        width: 130,
        height: 80,
        right: 0,
        position: 'absolute',
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addButton:{
        backgroundColor: '#0b465e',
        height: 45,
        width: 110,
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 0
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default styles