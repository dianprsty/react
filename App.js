/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component} from 'react';
import {
	Text,
	View,
	ScrollView,
	TextInput,
	StyleSheet,
	Button
} from 'react-native';

class App extends Component {
	constructor() {
		super();
		this.state = {
		  username: '',
		  password: '',
		  listuser:[]
		}
	  }
	
	
	loginUser = () => {
		const {username, password} = this.state
		console.log("Username : " + username + "\nPassword :" + password)
		if (username =="dian" && password=="dian123") {
			return alert("Login Succes !!!")
		}else{
			return alert("Login Gagal")
		}
	}

  render(){
	  return (
     	
		<ScrollView>
        <View style={styles.section}>
			<View style={{width: "100%",alignItems: 'center'}}>
				<Text style={{fontSize: 30,fontWeight: 'bold',marginVertical: 20}}>Login</Text>
			</View>
			<View style={styles.formGroup}>
				<Text style={styles.label}>Username</Text>
				<TextInput style={styles.formControl} placeholder="Masukan Username" onChangeText={username => this.setState({ username })} />
			</View>
			<View style={styles.formGroup}>
				<Text style={styles.label}>Password</Text>
				<TextInput secureTextEntry={true} style={styles.formControl} textContentType="password" onChangeText={password => this.setState({ password })} placeholder="Masukan Password" />
			</View>
			<View accessibilityRole="button" style={styles.formGroup}>
				<Button title="Login" onPress={this.loginUser} color="#3498db" />
			</View>
		</View>
        <View style={styles.box}>
          <View style={styles.title}>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', marginVertical: 20}}>
              Register
            </Text>
          </View>
          <View>
            <Text>Username</Text>
            <TextInput
              style={styles.formControl}
              placeholder="Masukan Username"
            />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.formControl}
              textContentType="password"
              placeholder="Masukan Password"
            />
          </View>
          <View>
            <Text>re-Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.formControl}
              textContentType="password"
              placeholder="Masukan re-Password"
            />
          </View>
            <View accessibilityRole="button" style={styles.formGroup}>
              <Button
                title="Login"
                color="#3498db"
                onPress={() => this.doLogin()}
              />
              </View>
        </View> 
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create( {
	container: {
		backgroundColor: "#fff",
		flex: 1,
		justifyContent: 'flex-end'
	},

	box: {
		backgroundColor: '#fff',
		borderRadius: 15,
		paddingHorizontal: 20,
		marginTop: 50,
		marginBottom: 50,
		shadowOffset: {
		  width: 0,
		  height: 10,
		},
		shadowOpacity: 0.15,
		shadowRadius: 10,
		elevation: 3,
		marginHorizontal: 20,
	  },
	section: {
		
		backgroundColor: "#fff",
		borderRadius: 15,
		paddingHorizontal: 20,
		marginBottom: 50,
		marginTop: 100,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.15,
		shadowRadius: 10,
		elevation: 3,
		marginHorizontal: 20
	},
	formControl: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "darkgrey"
	},
	formGroup: {
		marginBottom: 20
	}
} )
export default App;