import React from "react"

import { Image, View, ViewStyle } from "react-native"

const imageStyle: ViewStyle = {
  borderColor: "white",
  borderRadius: 40,
  width: 80,
  height: 80,
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center",
}

export default (props: any /* STRICTNESS_MIGRATION */) => (
  <View style={[imageStyle, props.style]}>
    <Image source={props.source} />
  </View>
)
