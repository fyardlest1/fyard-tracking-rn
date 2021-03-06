import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './../components/Spacer';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for tracker</Text>
            </Spacer>
            <Input 
                label='Email' 
                value={email} 
                onChangeText={(newEmail) => setEmail(newEmail)} 
                autoCapitalize='none'
                autoCorrect={false}
                />
            <Spacer />
            <Input 
                secureTextEntry
                label='Password' 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer>
                <Button title='Sign up'  />
            </Spacer>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
})
