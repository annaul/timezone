import React, { useState, useEffect } from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import timeChange from './actions/timeAction'


const App: React.FC =  (props: any) => {

  const [ lat, setLat ] = useState('')
  const [ lng, setLng ] = useState('')
  const dispatch = useDispatch()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>{useSelector(state => state.timeReducer.time)}</Text>
        <Text style={styles.title}>Enter latitude and longitude to see time for that location</Text>
        <TextInput placeholder={'latitude'} 
        onChangeText={(text: string) => setLat(text)} 
        />
        <TextInput placeholder={'longitude'} 
        onChangeText={(text: string) => setLng(text)} 
        />
        <Button 
          onPress={() => dispatch(timeChange({ lat, lng }))}
          title={'Press me'} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: 50
  }
});

export default App;
