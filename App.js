import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
  const { navigate } = this.props.navigation;
  return (
    
      <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image 
              source={require("../imgs/STHG_logo_green.png")}
              style={{ height: 450, width: 320 }}
            />
      {/* <Text>Savannah Tour of Homes and Gardens</Text> */}
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
      <Button
          onPress={() => navigate('Homes')}
          title="Homes"
      />
      <Button
          onPress={() => navigate('Sponsors')}
          title="Sponsors"
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

class SponsorsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    title: 'Sponsors'
  };
  render() {
  const { params } = this.props.navigation.state;
  return (
    <View>
      <Text>List of sponsors with links to external sites? coupon codes or specials listed?</Text>
    </View>
    );
  }
}

class HomesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    title: 'Homes'
  };
  render() {
  const { params } = this.props.navigation.state;
  return (
    <View>
      <Text>Homes with images and cards possibly</Text>
    </View>
    );
  }
}

class FavoritesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    title: 'Favorites'
  };
  render() {
  const { params } = this.props.navigation.state;
  return (
    <View>
      <Text>Where the favorites and can live when marked along the tour.</Text>
      <Text>This will be a nice touch that users can keep the images of the homes they loved most.</Text>
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
      <Text />
      <Text>Thinking we could put a list of stops TO VISIT and those VISITED (tab navigation here)?</ Text><Text> Thoughts?</Text>
    </View>
    );
  }
}

const TourAppCRNA = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  User: { screen: UserScreen},
  Friends: {screen: FriendsScreen },
  Sponsors: {screen: SponsorsScreen },
  Homes: {screen: HomesScreen },
  Favorites: {screen: FavoritesScreen },
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