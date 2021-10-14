import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Login(){
    return <View style={{flex:1, 
    alignItems:"center", 
    justifyContent:"center"}}>
        <Image 
        style={{width:150,
            height:150, 
            borderRadius:10, 
            marginBottom: 25,
            transform: [{rotate: '350deg'}]
        }}
        source={{uri:"https://cdn.shopify.com/s/files/1/2081/1519/products/1_grande.jpg?v=1577197246"}}
        />
        <Text 
        style={{color: "#bab1ab", 
        fontSize:24}}>Welcome to</Text>

        <Text style={{color:"black", fontSize:30, fontWeight:'700', marginBottom:10}}>Power Bike Shop</Text>
        <TouchableOpacity style={{fontSize:20,
            flexDirection:"row", 
            backgroundColor:"#d3dbd5", 
            padding:15, 
            paddingHorizontal:60, 
            margin:10, 
            borderRadius:10}}>
            <Image
            style={{height:20, width:20, 
                marginRight:30}} 
            source={{uri:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"}}/>

            <Text style={{fontSize:20}}>
                Login with Gmail
                </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{backgroundColor:"black",
        flexDirection:"row", 
        padding:15, 
        paddingHorizontal:60,
        fontSize:20, 
        borderRadius:10}}>
            <AntDesign name="apple1" size={24} color="white" />

            <Text 
            style={{color:'white', 
            marginLeft:30, 
            fontSize:20}}>
                Login with Apple
                </Text>
        </TouchableOpacity>
        <Text style={{marginTop:20, fontWeight:'600',
        color: "#bab1ab"}}>
            Not a member? <TouchableOpacity><Text style={{color:"orange"}}>SignUp</Text></TouchableOpacity>
        </Text>
    </View>
}
