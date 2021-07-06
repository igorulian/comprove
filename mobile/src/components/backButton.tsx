import React from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const BackButton:React.FC = () =>{

    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container} onPress={() => {navigation.goBack()}}>
            <MaterialCommunityIcons name="arrow-left" color={'#0b465e'} size={30} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 20
    }
})

export default BackButton