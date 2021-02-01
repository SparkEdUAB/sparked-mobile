import React from 'react'
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native'
import {Colors, ReloadInstructions} from 'react-native/Libraries/NewAppScreen'
import Onboarding from './App/Components/Onboarding'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          {/* <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Welcome to SparkEd Mobile</Text>
            <Text style={styles.sectionDescription}>
              <ReloadInstructions />
            </Text>
          </View> */}

          <Onboarding />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
})

export default App
