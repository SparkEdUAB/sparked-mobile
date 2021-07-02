import 'react-native-gesture-handler'
import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

function AppEntry() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

AppRegistry.registerComponent(appName, () => AppEntry)
