import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Add the new stack navigator above this line

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen}/>
  </Tab.Navigator>
)

const HomeScreen = ({ navigation }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <Button title="Feed" onPress={() => navigation.navigate("Feed")} />
    <Button title="Messages" onPress={() => navigation.navigate("Messages")} />
  </View>
);

const SettingsScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Settings</Text>
  </View>
);

const FeedScreen = ({ navigation }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
    <Button title="Feed Pics" onPress={() => navigation.navigate("Feed Pics")} />

  </View>
);

const FeedPicsScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed Pics</Text>
  </View>
);

const MessagesScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Messages</Text>
  </View>
);


export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
        name="Home"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Feed Pics" component={FeedPicsScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Messages" component={MessagesScreen} />
      </Stack.Group>
    </Stack.Navigator>  
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});