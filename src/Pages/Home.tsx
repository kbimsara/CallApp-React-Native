import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { myColors } from '../Styles/Colors';
import Button from '../Components/Button';
import MyKeyBoard from '../Components/MyKeyBoard';

export default function Home() {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={theme}>
            <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
                <Switch
                    value={theme === 'light'}
                    onValueChange={
                        () => setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                />
                <MyKeyBoard/>
                {/* <Button title='3' onPress={function (): void {
                    throw new Error('Function not implemented.');
                } } /> */}
            </SafeAreaView>
        </ThemeContext.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: myColors.light,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});