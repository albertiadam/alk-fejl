import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import supabase from '../lib/supabase-client';
import { useState, createContext, useEffect} from 'react';


const Prog = ({ navigation }) => {
    const [szam,setSzam] = useState("")
    const [muvelet,setMuvelet] = useState("")
  return (
    <View style={styles.container}>
        <Text style={styles.cim}>Kurvára megakarok halni, de itt egy számológép</Text>
        <TextInput>{szam}</TextInput>
        <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"7")}><Text>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"8")}><Text>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"9")}><Text>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"+")}><Text>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"4")}><Text>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"5")}><Text>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"6")}><Text>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"-")}><Text>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"1")}><Text>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"2")}><Text>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"3")}><Text>3</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"*")}><Text>*</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(Szamolas(szam))}><Text>=</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"0")}><Text>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+".")}><Text>.</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"/")}><Text>/</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam("")}><Text>C</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(Torles(szam))}><Text>vissza</Text></TouchableOpacity> 
        </View> 
        <TouchableOpacity style={styles.kilepobutton} onPress={()=> signOut()}>
            <Text>Kilépés:D</Text>
        </TouchableOpacity>
    </View>
  )
}
function Torles(parameter){
    parameter  = String(parameter)
    if (parameter.length>0) {
        if (parameter.length>1) {
            parameter = parameter.slice(0,parameter.length-1)
            return parameter
        }
        else{
            parameter = '0'
            return parameter
        }
    }
    
}
function Szamolas(parameter){
    try {
        parameter = eval(parameter)
        if (parameter == Number.POSITIVE_INFINITY || parameter == Number.NEGATIVE_INFINITY) {
            return "Ne osszál 0-val hülyegyerek"
        }
        return parameter
    } catch (error) {
        alert(error.Message)
        alert("Ne buziskodj:D")
        return ""
    }
    
}

async function signOut(){ //kilépés
    let {error} = await supabase.signOut()
  }

export default Prog

const styles = StyleSheet.create({
    regtext:{
        color: 'black', 
        fontSize:20, 
        textAlign:'center',
        paddingBottom:10
      },
    
      cim: {
        fontSize:30, 
        paddingBottom:30, 
        fontWeight:'bold', 
        textAlign:'center'
      },
    
    
      container: {
        flex: 1,
        backgroundColor: '#12b0b0',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textInput: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#f69133',
        width: '20%',
        margin: 5,
        padding: 5,
        alignItems:'center',
      },
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '90%'
      },
    kilepobutton: {
        backgroundColor: '#f69133',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 16,
        padding: 16,
      }
    
})