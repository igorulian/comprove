import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    fileContainer:{
        marginTop: 70,
        width: 200,
        height: 250,
        alignSelf: 'center'
    },
    fileContent:{
        flex: 1
    },
    shareButton:{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10,
        marginRight: -12,
        marginTop: -12,
        // width: 50,
        // height: 50,
        // backgroundColor: '#FAFAFA',
        // borderRadius: 50,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    btnSave:{
        backgroundColor: '#0b465e',
        height: 45,
        width: screenWidth - 200,
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnSaveText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    fileInfoContainer:{
        marginTop: 20,
        width: screenWidth - 20,
        padding: 5
    },
    fileInfoText: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    categoryContainer:{
        flexDirection: 'row',
        alignSelf: 'center'
    },
    datePicker:{
        width: 200,
        height: 120,
        marginLeft: 5,
        alignSelf: 'center'
    }
})

export {styles}