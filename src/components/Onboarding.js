import React from 'react'
import {View, Image, StatusBar} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button, Text} from 'native-base'
import style from '../styles/Style.js'
import onBoardingIllustration from '../assets/onboardingIllustration.svg'

export default function Onboarding({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={style.onBoardingMainContainer}>
          <View style={style.inlineLogoContainer}>
            <Image
              source={require('../../logo.png')}
              style={style.inlineLogo}
              resizeMode="contain"
            />
            <Text style={style.logoText}>SparkEd</Text>
          </View>

          <View style={style.textDescriptionContainer}>
            <Text style={style.textDescription}>
              {' '}
              Software for organizing and presenting educational and training
              content for delivery on most platforms.
            </Text>

            <Image
              source={onBoardingIllustration}
              style={style.IllustrationContainer}
              resizeMode="contain"
            />
          </View>
          <View style={style.buttonContainer}>
            <Button
              block
              style={style.loginButtonStyle}
              onPress={() => navigation.navigate('Register')}>
              <Text style={style.textStyle}> Log in / Sign Up</Text>
            </Button>
            <Button block bordered light style={style.guestButton}>
              <Text style={style.guestButtonText}> Continue as Guest</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
