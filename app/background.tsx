import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <ImageBackground
    source={require('../assets/images/kitchen_background_image.png')}
      style={styles.background}
    >
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',   
  },
});

export default BackgroundWrapper;
