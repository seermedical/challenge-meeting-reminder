import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native'
import {generateMeetings} from './utils/mockData'

const existingMeetings = generateMeetings(6, 8.64e7)

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#CCC',
    flex: 1,
  },
  header: {
    backgroundColor: '#353535',
    padding: 15,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
  },
  body: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'space-between',
  },
  existingMeetings: {
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Meeting Reminders</Text>
  </View>
)

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.SafeAreaView}>
      <Header />
      <View style={styles.body}>
        <View style={styles.existingMeetings}>
          <Text>Existing Meetings</Text>
          {existingMeetings.map(meeting => (
            <Text key={meeting.id}>
              Meeting with {meeting.person} on{' '}
              {new Date(meeting.time).toString().slice(0, -15)}
            </Text>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Get Meeting Requests'} />
          <Button title={'Declined Meetings'} disabled />
        </View>
      </View>
    </SafeAreaView>
  </>
)

export default App
