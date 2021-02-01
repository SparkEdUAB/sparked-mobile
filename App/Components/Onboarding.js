import React from 'react'
import {View, Image} from 'react-native'
import {Button, Text} from 'native-base'
import style from './Style.js'
import Svg from 'react-native-svg'
import onBoardingIllustration from '../assets/onboardingIlustration.png'

export default function Onboarding() {
  return (
    <View
      style={style.onBoardingMainContainer}>
      <View
        style={style.inlineLogoContainer}>
        <Image
          source={require('../../logo.png')}
          style={style.inlineLogo}
          resizeMode="contain"
        />
        <Text
          style={style.logoText}>
          SparkEd
        </Text>
      </View>

      <View
        style={style.textDescriptionContainer}>
        <Text
          style={style.textDescription}>
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
      <View
        style={style.buttonContainer}>
        <Button block style={style.loginButtonStyle}>
          <Text style={style.textStyle}> Log in / Sign Up</Text>
        </Button>
        <Button
          block
          bordered
          light
          style={style.guestButton}>
          <Text style={style.guestButtonText}> Continue as Guest</Text>
        </Button>
      </View>
    </View>
  )
}
