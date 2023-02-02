import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HeaderTabs from './components/HeaderTabs';
import Home from './screens/Home';

export default function App() {
  return (
   <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>  
   <View style={{backgroundColor:'white',padding:15}}>
   <Home/>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
