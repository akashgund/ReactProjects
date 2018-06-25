import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    
    TouchableOpacity
} from 'react-native';

import uuidV4 from 'uuid/v4';
import {colors} from'../theme';

class AddCity extends React.Component{

    state={
        city:'',
        country:''
    }
    onChangeText = (key,value)=>{
   
        this.setState({
            [key]:value
        })
    }


    submit=() =>{
        if(this.state.city==='' ||this.state.country==='')
        {
            return
        }
        const city ={
            city:this.state.city,
            country:this.state.country,
            locations:[],
            id:uuidV4()
        }
        this.props.screenProps.addCity(city);
        this.setState({
            city:'',
            country:''
        },() => {
            this.props.navigation.navigate('cities')
        });
    }
    render()
    {
        console.log('props:',this.props);
        return(
            <View style={styles.container}>
            <Text style={styles.heading}> ADD CITY</Text>
                <TextInput style ={styles.input}
                placeholder='City Name'
                value={this.state.city}
                onChangeText={val=>this.onChangeText('city',val)}
                />
                 <TextInput style ={styles.input}
                  placeholder='Country Name'
                  value={this.state.country}
                  onChangeText={val=>this.onChangeText('country',val)}
                />

                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Add City</Text>

                        </View>
                    </TouchableOpacity>

            </View>

        );
    }
}

const styles =StyleSheet.create({
input:{
    backgroundColor:'white',
    margin:10,
    paddingHorizontal:8,
    height:50
},
button:{
    height :50,
    backgroundColor:'#666',
    justifyContent :'center',
    alignItems:'center',
    margin:10
},
buttonText:{
    color:'white'
},
container:{
    backgroundColor:colors.primary,
    flex:1,
    justifyContent:'center'
},
heading:{
    fontSize:30,
    textAlign:'center',
    margin:10,
    color:'white'
}

})
export default AddCity;
