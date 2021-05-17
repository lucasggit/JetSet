import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import logo from './assets/image1.jpeg';

export default function App() {
        return (
            <View style={styles.container}>
                {/*<ImageBackground source={bg} style={styles.bg} blurRadius={3}>*/}
                    <Image source={logo} style={styles.logo}/>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        // onChangeText={(username) => this.setState({ username })}
                        multiline={false}
                    />
                    <TextInput
                        placeholder="Mot de passe"
                        style={styles.textInput}
                        marginTop={15}
                        multiline={false}
                        secureTextEntry={true}
                        // onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
                        <Text style={styles.buttonText}>CONNEXION</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
                    <Text style={styles.buttonText}>INSCRIPTION</Text>
                    </TouchableOpacity>
                {/*</ImageBackground>*/}
                <StatusBar style="auto" />
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        width:'100%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        borderRadius: 200 / 2,
        width: 200,
        height: 200,
        marginTop: 40,
        borderColor: 'black',
        borderWidth: 2,
    },
    textInput: {
        // flex: 1,
        backgroundColor: '#fff',
        borderRadius: 50 / 2,
        width: 300,
        height: 60,
        marginTop: 200,
        borderColor: 'black',
        borderWidth: 2,
        textAlign:'center',
    },
    button: {
        backgroundColor: "#001766",
        padding: 12,
        borderRadius: 60 / 2,
        marginTop: 10,
        height:40,
        // borderColor: 'black',
        // borderWidth: 2,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
});