import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,TouchableOpacity,Image, FlatList, View,TextInput} from 'react-native';
import data from './node_modules/generated.json'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


            {/*Home screen*/}
function HomeScreen() {


      const renderItems = ({item}) => (
    <TouchableOpacity>
      <View  style={styles.listcontainer}>

      <Text style={styles.pname}>{item.projectname}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.desc}>{item.location}            {item.duration}</Text>
      <Text style={styles.desc}>Amount : ${item.amount}</Text>

      </View>
    </TouchableOpacity>
);

      return (

        <SafeAreaView style={styles.container}>

       
              
             
              <View style={styles.search}>
              <Text style={styles.searchtext}>Find a project</Text>
              <TextInput
                style={styles.searchBar}
                placeholder="Search projects..."
                />
              </View>
        
              <View style={styles.list}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItems}
                />
              </View>
        
            </SafeAreaView>
  );
}

            {/*Team screen*/}
function TeamScreen() {
  return (
    <View style={styles.container}>
      <Text>Team Screen</Text>
    </View>
  );
}

            {/*myproject screen*/}
function MyProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text>My Projects Screen</Text>
    </View>
  );
}


            {/*profile screen*/}
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {



  return (
    <NavigationContainer>
      <StatusBar style="auto" />
              <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Team" component={TeamScreen} />
                <Tab.Screen name="My Projects" component={MyProjectsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
              </Tab.Navigator>
    </NavigationContainer>
              
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEFe1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hi: {
    fontWeight:'bold',
    fontSize:30,
    
  },

  list:{
    width:'90%',
  },
  listcontainer:{
    backgroundColor: '#BACDd1',
    marginTop: 20,
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    paddingLeft:10,
    elevation:5,
  },
  search:{
    marginBottom:15,
  },
  searchBar:{
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '35%',
    backgroundColor: '#f9f9f9',
    elevation:5,
  },
  searchtext:{
    fontSize: 30,
    marginTop: '30%',  
    fontWeight: 'bold',  
    color: '#323',
    marginBottom:10,
    paddingLeft:20,
  },
  pname:{
    fontWeight:"bold",
    fontSize:20,
    alignItems:"left",
    color:'#323',
  },
  desc:{
    fontWeight:"300",
    fontSize:15,
  },
});

