import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const home = require('./img/home.png');
const custemer = require('./img/custemer.png');
const tambah = require('./img/tambah.png');

class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
 };
	render() {
		return (
			<ImageBackground
          source={require('./img/bg1.jpg')}
          style={styles.container}>
            <View style={styles.containerMain}>
              <StatusBar
                backgroundColor="#AD1457"
                barStyle="light-content"
              />
              <Text style={styles.title}>MY OWNRECEIP</Text>
              <Text style={styles.subTitle}></Text>
             <View style={styles.box}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('inputScreen')}>
          <Text> RESEP BARU</Text>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CustemerScreen')}>
            <Text> RESEP SAYA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CustemerScreen')}>
            <Text> REFERENSI RESEP</Text>
          </TouchableOpacity>
        </View> 
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={home} style={styles.menuIcon} />
            
          </TouchableOpacity> 
        </View>

            </View>
            
          </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  containerMain: {
    flex: 1,
    
  },
  title: {
    
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(76,175,80, .4)'
  },
  subTitle: {
    backgroundColor: 'rgba(76,175,80, .4)',
    color: '#fff',
    fontSize: 14,
    paddingBottom: 12,
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: 'rgba(27,94,32, .6)',
    paddingVertical: 12,
    flexDirection: 'row',
    flex: 0.05,

  },
  menu:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 
  },
  menuIcon:{
    tintColor: '#000',
    height: 30,
    width: 30,
  },
  menuIconSelected:{
    color: '#00BCD4',
    textAlign: 'center'
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: 'rgba(255,255,255, .4)',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  button: {
    height: 70,
    width: 170,
    backgroundColor: 'rgba(255,255,255, .4)',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
