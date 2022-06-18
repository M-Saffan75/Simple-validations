import { StyleSheet, TextInput, View, Text, Alert } from 'react-native'
import React, { useState } from 'react'

class TextInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            Repeatpassword: '',
            error: '',
            error1: '',
        }
    }

    handleEmail = (value) => {
        this.setState({
            email: value
        })
    }

    handlePassword = (value) => {
        this.setState({
            password: value
        })
    }

    handleName = (value) => {
        this.setState({
            name: value
        })
    }

    handleRepeatpassword = (value) => {
        this.setState({
            Repeatpassword: value
        })
    }

    validate = () => {
        this.setState({
            error: ''
        })

        const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.state.name.length) {
            this.setState({
                error: 'Name is Empty'
            })

        }
        else if (!expression.test(this.state.email)) {
            this.setState({
                error: 'Email is Empty'
            })
            return false;
        } 
        else if (this.state.password.length === 0) {
            this.setState({
                error: 'Password cannot be Empty'
            })

            return false;
        } else if (this.state.password.length < 8) {
            this.setState({
                error: 'Password Must Be 8 Characters long'
            })

        }  else if (this.state.Repeatpassword.length !==  this.state.password.length) {
            this.setState({
                error1: 'Password Does Not Match'
            })
        }
        return true;
    }
    submit = () => {
        if (this.validate()) {
            console.log('Everything is Fine');
        }
        else {
            console.log('Error');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.head}>ֆɨɢռ ʊք</Text>
                <TextInput style={styles.myinpt} type={'text'} placeholder="Name" onChangeText={this.handleName} />
                <TextInput style={styles.myinpt} type={'text'} placeholder="Email" autoCapitalize='none' onChangeText={this.handleEmail} />
                <TextInput style={styles.myinpt} type={'text'} placeholder="********" secureTextEntry onChangeText={this.handlePassword} />
                <TextInput style={styles.myinpt} type={'text'} placeholder="********" secureTextEntry onChangeText={this.handleRepeatpassword} />
                {
                    this.state.error1.length === 0 ? null : (<Text style={styles.alert}>{this.state.error}</Text>)
                }

                {
                    this.state.error.length === 0 ? null : (<Text style={styles.alert}>{this.state.error}</Text>)
                }
                <Text style={styles.btn} onPress={this.submit} >ֆɨɢռ ʊք</Text>
                <Text style={styles.backaccount}>Have an account ? Sign in</Text>
            </View>
        )
    }
}

export default TextInputs

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center',

    },

    head: {
        fontSize: 24,
        margin: 50,
        color: '#000',
        fontWeight: 'bold',
    },

    myinpt: {
        width: '90%',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        padding: 8,
        margin: 20,
        color: '#000',
    },

    btn: {
        width: "90%",
        padding: 10,
        marginTop: 40,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1,
        backgroundColor: '#000',
        textAlign: 'center',
    },

    backaccount: {
        color: '#000',
        letterSpacing: 1,
        textAlign: 'center',
        margin: 40,
    },

    alert: {
        color: 'red',
        letterSpacing: 1,
        fontWeight: 'bold',
    },
})