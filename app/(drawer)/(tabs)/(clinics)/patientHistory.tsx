import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleBar from '~/components/TitleBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '~/app/styles'

const Page = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title='Patient History'/>
      
    </SafeAreaView>
  )
}

export default Page