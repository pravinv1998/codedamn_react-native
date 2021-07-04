/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.welcome}> Pravin Vargad </Text>
        {/* <Image
          style={styles.image}
          source={{
            uri: 'https://image.shutterstock.com/image-photo/kiev-july-29-2019-lenovo-260nw-1587918376.jpg',
          }}
        /> */}
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://www.lenovo.com/medias/lenovo-thinkpad-e14-gallery-01.jpg?context=bWFzdGVyfHJvb3R8NTAxMjB8aW1hZ2UvanBlZ3xoYmMvaDM5LzEwNTg5NTEyNzYxMzc0LmpwZ3xkYWJlMGJkYTkxZjQ1YjJkZGE3YjFhYzQ1M2M1NTk0MDI2ZWFjOWJiMzI1OTgyMjNhNGY4M2RmMTBlYzI3MDUy',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
