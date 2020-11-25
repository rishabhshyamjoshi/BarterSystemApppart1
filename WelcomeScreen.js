import React,{Component} from 'react';
import { render } from 'react-dom';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:'',
        }
    }
    userLogin = (emailId, password)=>{
        console.log(emailId);
        console.log(password);
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(respone => {
            alert("LoggedIn Successfully");
            alert("hi");
        })
        .catch(function(error){
            alert(error.code, error.message)
        })
    }
    userSignUp = (emailId, password)=>{
            console.log("inside userSignUp");
            console.log(this.state.emailId, this.state.password);
            console.log(emailId);
            console.log(password);
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(response =>{
            alert("User Addded Successfully")
        })
        .catch(function(error){
            Alert.alert(error.code, error.message)
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {{
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                </View>
                <View  style = {styles.profileContainer}>
                    
                    <Text style = {styles.title}>BarterSystemApp</Text>
                </View>
                <View style = {styles.loginContainer}>
                    <TextInput 
                    style = {styles.loginBox} 
                    placeholder = "abc@example.com"
                    keyboardType = "email-adress"
                    onChangeText = {(text)=>{
                        this.setState({
                            emailId:text,
                        }) 
                    }}/>
                    <TextInput 
                     style = {styles.loginBox} 
                     placeholder = "Password" 
                     secureTextEntry = {true}
                     onChangeText = {(text)=>{
                        this.setState({
                            password:text,
                        })
                     }}/>
                    <TouchableOpacity onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
                    style = {styles.buttonStyle}><Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.userSignUp(this.state.emailId, this.state.password)}
                    }style = {styles.buttonStyle}><Text style = {styles.buttonText}>SignUp</Text></TouchableOpacity>
                  
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{ flex:1, backgroundColor:'#00bfff' },
    loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:20, paddingLeft:10 },
    profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', },
    title :{ fontSize:65, fontWeight:'bold', paddingBottom:30, color : 'white' },
    loginContainer:{ flex:1, alignItems:'center'},
    buttonText:{ color:'white', fontWeight:'200', fontSize:25 },
    buttonStyle:{ width:300, 
                height:50, 
                justifyContent:'center',
                alignItems:'center', 
                borderRadius:25, 
                backgroundColor:"black",
                shadowColor: "white", 
                shadowOffset: { width: 0, height: 8, }, 
                shadowOpacity: 0.30, shadowRadius: 10.32,
                elevation: 16, 
                marginTop:10,           
            },

    

})