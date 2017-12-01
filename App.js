import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
  const { navigate } = this.props.navigation;
  return (
    <View>
      <Text>Savannah Tour of Homes and Gardens</Text>
      <Button
          onPress={() => navigate('User', {user: 'Molly'})}
          title="User"
      />
      <Button
          onPress={() => navigate('Friends')}
          title="Friends"
      />
      <Button
          onPress={() => navigate('Map')}
          title="Tour Map"
      />
    </View>
    );
  }
}

class FriendsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    title: 'Friends of the Tour'
  };
  render() {
  const { params } = this.props.navigation.state;
  return (
    <View>
      <Text>List of Friends here</Text>
    </View>
    );
  }
}

class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    title: 'Map'
  };
  render() {
  const { params } = this.props.navigation.state;
  return (
    <View>
      <Text>INSERT MAP</Text>
    </View>
    );
  }
}

class UserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    title: 'User Profile for ${navigation.state.params.user}'
  };
  render() {
  const { params } = this.props.navigation.state;
  return (
    <View>
      <Text>Well hello, {params.user}</Text>
    </View>
    );
  }
}

const TourAppCRNA = StackNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen},
  Friends: {screen: FriendsScreen },
  Map: { screen: MapScreen },
});

export default class App extends React.Component {
  render() {
    return <TourAppCRNA />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});