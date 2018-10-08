import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  playButton: {
    opacity: 0.9
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const PlayButton = props => (
  <View style={styles.playContainer}>
    <TouchableOpacity
      onPress={() => props.onPress()}
    >
      <FontAwesome5Pro
        style={styles.playButton}
        name={props.paused ? 'play-circle' : 'pause-circle'}
        color={props.theme}
        size={75}
      />
    </TouchableOpacity>
  </View>
)

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
}

export { PlayButton }
