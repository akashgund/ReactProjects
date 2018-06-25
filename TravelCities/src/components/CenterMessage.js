import React from 'react'

import{
    View,
    Text,
    StyleSheet
} from 'react-native'
import { colors } from '../theme';
console.log('reached here')
export default ({message})=>(
  
    <View style ={styles.container}>

        <Text style={styles.text}>
         {message}
            </Text>
        </View>
)

const styles = StyleSheet.create({
    container:{
        padding:10,
        borderBottomWidth: 5,
        borderBottomColor: colors.primary
    },
    text:{
        fontSize:10
    }
})