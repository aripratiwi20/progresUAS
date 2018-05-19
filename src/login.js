import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image,
 TextInput,
 ScrollView,
 Alert, ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const home = require('./img/home.png');
const custemer = require('./img/custemer.png');
const tambah = require('./img/tambah.png');
class loginScreen extends React.Component {
  static navigationOptions = {
    header: null
 };
  
  constructor()
    {
        super();
        this.state = {
          nama: '',
          bahan: '',
          langkah: '',
        }
    }
    Insert_Data_Into_MySQL = () =>

    {

        this.setState({ ActivityIndicator_Loading : true }, () =>

        {

            fetch('http:mhs.rey1024.com/appmobile/D1615051093/kirimData.php',

            {

                method: 'POST',

                headers: 

                {

                    'Accept': 'application/json',

                    'Content-Type': 'application/json',

                },

                body: JSON.stringify(

                {

                  nama : this.state.nama,

                  bahan : this.state.bahan,

                  langkah : this.state.langkah,

                })

 

            }).then((response) => response.json()).then((responseJsonFromServer) =>

            {

                Alert.alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>

            {

                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});

            });

        });

    }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#FFFFFF' size='large'/>
        </View>
      );
    }

    return(
      <ImageBackground
          source={require('./img/bg1.jpg')}
          style={styles.container}>
            <View style={styles.containerMain}>
              <StatusBar
                backgroundColor="#AD1457"
                barStyle="light-content"
              />
              <Text style={styles.title}>MY OWN RECEIPT</Text>
              <Text style={styles.subTitle}></Text>
              <View style={{ backgroundColor: 'rgba(255,255,255, .4)', marginTop: 120 }}>
              <ScrollView>
               <View style={styles.box}>
          <Text style={styles.judul2} > username :</Text>
              <TextInput

                  style={styles.judul} 
                  placeholder="Masukan Username"
                  onChangeText = {(TextInputText) => this.setState({ Nama: TextInputText })}
                  
              />
              <Text style={styles.judul2} > Password :</Text>
              <TextInput
                  style={styles.judul}
                  placeholder="Masukkan Password"
                  onChangeText = {(TextInputText) => this.setState({ alamat: TextInputText })}
                  
              />

        </View> 
              
                 <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={{ fontSize: 17, color: '#fff',fontWeight: 'bold' }}>LOGIN</Text>
              </TouchableOpacity>
              </View>
              </ScrollView>
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
    backgroundColor: 'rgba(76,175,80, .6)'
  },
  subTitle: {
    backgroundColor: 'rgba(76,175,80, .6)',
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
  judul: {
   height: 35,
    width: 150,
    backgroundColor: 'rgba(255,255,255, .4)',
    alignItems: 'center', 
    margin: 10,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 2,
    textAlign: 'center'
  },
  button: {
    height: 35,
    width: 170,
    backgroundColor: '#01579b',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10, 
    justifyContent: 'center',
  },
  judul2:{
    padding: 1,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold'
  },
   box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default loginScreen;