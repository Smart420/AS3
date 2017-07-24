/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    date,
    TouchableHighlight,
    Picker
} from 'react-native';

export default class hello extends Component {

    state = {
        name: 'Somewhere',
        weather: '',
        icon: 'openweathermap.org/img/w/10d.png',
        temp:0,
        date:"",
        bg:'#D3FFCE',
        unit:"Celcius"
    };
    _log() {
        console.log(this.state);
    }
    _Background_1(){
        this.setState({
            bg:'#D3FFCE'
            
        })
    }
    _handlePicker(itemValue, itemIndex){
        this.setState({
            unit: itemValue
        },this._log);
    }
    _Background_2(){
        this.setState({
            bg:'#FFCBC1'
            
        })

    }

    _handleName(event) {
        //console.log(event);
        var name = event.nativeEvent.text;
        var appid = '49b745799ce58d0b327e512ecb70ce08';
        var units =""

        if(this.state.unit === "Celcius"){
            units = "metric"
        }else if (this.state.unit ==="Fahrenheit"){
            units = "imperial"
        }

        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&appid=' + appid +'&units='+units)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    name: name,
                    weather: [responseJSON.list[0].weather[0].main,
                              responseJSON.list[8].weather[0].main,
                              responseJSON.list[16].weather[0].main,
                              responseJSON.list[24].weather[0].main,
                              responseJSON.list[32].weather[0].main,],
                    
                    icon: ['openweathermap.org/img/w/' + responseJSON.list[0].weather[0].icon + '.png',
                           'openweathermap.org/img/w/' + responseJSON.list[8].weather[0].icon + '.png',
                           'openweathermap.org/img/w/' + responseJSON.list[16].weather[0].icon + '.png',
                           'openweathermap.org/img/w/' + responseJSON.list[24].weather[0].icon + '.png',
                           'openweathermap.org/img/w/' + responseJSON.list[32].weather[0].icon + '.png',
                ],
                    temp: [responseJSON.list[0].main.temp,
                           responseJSON.list[8].main.temp,
                           responseJSON.list[16].main.temp,
                           responseJSON.list[24].main.temp,
                           responseJSON.list[32].main.temp,],

                    date: [responseJSON.list[0].dt,
                           responseJSON.list[8].dt,
                           responseJSON.list[16].dt,
                           responseJSON.list[24].dt,
                           responseJSON.list[32].dt,]
                    
                });
                console.loge(this.state.weather);
            })
            .catch((error) => {
                console.warn(error);
            });
        this.setState({
            name: name,
        }, //this._log
        );
    }

    render() {
        return (
            
            <View style={[styles.container,{backgroundColor :this.state.bg}]}>

                <Text style={{ fontSize: 18, color: "green" }}>
                    Where Are You?
                    </Text>
                <Text>
                    Please choose the temperature unit
                </Text>
                <Picker style={{width:150,height:50}}
                    selectedValue={this.state.unit}
                    onValueChange={(itemValue, itemIndex) => this._handlePicker(itemValue, itemIndex)}>
                    <Picker.Item label="Celcius" value="Celcius" />
                    <Picker.Item label="Fahrenheit" value="Fahrenheit" />
                </Picker>

                <TextInput style={{ width: 150, height: 50}}
                    onSubmitEditing={(event) => this._handleName(event)} />
                    <View style={styles.all}>
                    <View style={styles.DAY1}>
                        <Text>DAY 1</Text>
                        <Text style={styles.welcome}>
                            {this.state.name}
                        </Text>
                        
                        <Text style={styles.welcome}>
                            {this.state.temp[0]}{this.state.unit}
                        </Text>

                        <Text style={{fontSize:12 ,textAlign:'center'}}>
                            {this.state.weather[0]}
                        </Text>
                        <Text>
                            {this.state.date[0]}
                        </Text>
                        <Image
                            source={{ uri: 'http://' + this.state.icon[0] }}
                            style={{ width: 25, height: 25, borderWidth: 1 }}
                        />
                    </View>

                    <View style={styles.DAY1}>
                        <Text>DAY 2</Text>
                        <Text style={styles.welcome}>
                            {this.state.name}
                        </Text>
                        
                        <Text style={styles.welcome}>
                            {this.state.temp[1]}{this.state.unit}
                        </Text>

                        <Text style={{fontSize:12 ,textAlign:'center'}}>
                            {this.state.weather[1]}
                        </Text>
                        <Text>
                            {this.state.date[1]}
                        </Text>
                        <Image
                            source={{ uri: 'http://' + this.state.icon[1] }}
                            style={{ width: 25, height: 25, borderWidth: 1 }}
                        />
                    </View>

                    <View style={styles.DAY1}>
                        <Text>DAY 3</Text>
                        <Text style={styles.welcome}>
                            {this.state.name}
                        </Text>
                        
                        <Text style={styles.welcome}>
                            {this.state.temp[2]}{this.state.unit}
                        </Text>

                        <Text style={{fontSize:12 ,textAlign:'center'}}>
                            {this.state.weather[2]}
                        </Text>
                        <Text>
                            {this.state.date[2]}
                        </Text>
                        <Image
                            source={{ uri: 'http://' + this.state.icon[2] }}
                            style={{ width: 25, height: 25, borderWidth: 1 }}
                        />
                    </View>

                    <View style={styles.DAY1}>
                        <Text>DAY 4</Text>
                        <Text style={styles.welcome}>
                            {this.state.name}
                        </Text>
                        
                        <Text style={styles.welcome}>
                            {this.state.temp[3]}{this.state.unit}
                        </Text>

                        <Text style={{fontSize:12 ,textAlign:'center'}}>
                            {this.state.weather[3]}
                        </Text>
                        <Text>
                            {this.state.date[3]}
                        </Text>
                        <Image
                            source={{ uri: 'http://' + this.state.icon[3] }}
                            style={{ width: 25, height: 25, borderWidth: 1 }}
                        />
                    </View>
                    <View style={styles.DAY1}>
                        <Text>DAY 5</Text>
                        <Text style={styles.welcome}>
                            {this.state.name}
                        </Text>
                        
                        <Text style={styles.welcome}>
                            {this.state.temp[4]}{this.state.unit}
                        </Text>

                        <Text style={{fontSize:12 ,textAlign:'center'}}>
                            {this.state.weather[4]}
                        </Text>
                        <Text>
                            {this.state.date[4]}
                        </Text>
                        <Image
                            source={{ uri: 'http://' + this.state.icon[4] }}
                            style={{ width: 25, height: 25, borderWidth: 1 }}
                        />
                    </View>
                    </View>
                    <View>
                        <TouchableHighlight onPressIn = {()=> this._Background_1()}>
                            <View style={[styles.button, {backgroundColor:'gray'}]}>
                                <Text style={styles.textbutton}>
                                    THEME 1
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight onPressIn = {()=> this._Background_2()}>
                        <View style={[styles.button, {backgroundColor:'gray'}]}>
                            <Text style={styles.textbutton}>
                                THEME 2
                            </Text>
                        </View>

                        
                    </TouchableHighlight>


                    </View>
            </View>
        );
    }
}
const moreStyles = StyleSheet.create({
    name: {
        color: '#0000ff'
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    all:{
         flexDirection: 'row'
    },
    welcome: {
        fontSize: 10,
        textAlign: 'center',
        margin: 10,
    },
    DAY1:{
        borderWidth:1,
        width:70,
        height:200,
    }
});
