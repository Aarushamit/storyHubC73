import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class ReadStoryScreen extends React.Component {
    render() {
        return(
            <View>
                <Text style = {styles.readText}> this is the screen to read the story!</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    readText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 100,
        
        },
})