import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Input, Avatar } from 'react-native-elements';


class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameFilter:""
        }
    }
    
    showCard = () => {
        const { players } = this.props
        const { nameFilter } = this.state

        let filterPlayers = players.filter(player => {
            return player.name.toLowerCase().includes(nameFilter.toLowerCase())
        })

        return filterPlayers.map((player, idx) => {
            return (                
                <View key={idx} style={{margin:20}}>                    
                    <Avatar source={{uri: player.picture}} style={{width:75, height:75, borderRadius:5}}/>
                    <Text>{player.name}</Text>
                </View>
            )
        })
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textHead}>Home</Text>
                    <View style={{width:"100%"}}>
                        <Input
                            placeholder='Find Name'
                            onChangeText={(nameFilter) => this.setState({nameFilter})}
                        />
                    </View>
                    <View style={styles.card}>
                        {this.showCard()}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textHead: { fontSize: 25 },
    container: { flex: 1, flexDirection: "column", alignItems:"center", padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    inputIcon : { width: 25, height: 25, marginRight: 10 },
    button: { alignItems: "center", justifyContent: "center", width: 100, height: 40, backgroundColor:"#DDDDDD", borderRadius: 5 },
    card: { flexDirection: "row",  flexWrap: "wrap" }
})

export default HomeScreen