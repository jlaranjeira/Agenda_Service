import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import DataList from '../../components/DataList';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
const navigation = useNavigation();

    return(       
        
        <View style={styles.container}>
            <View
                style={{          
                width: '100',
                height: 70,
                padding: 10,
                backgroundColor: '#0347a0',
                alignItems:'center',
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
          
                }}
            > 
                <Image 
                    source={require("../../assets/agenda.png")}
                    style={{
                        width: 40,
                        height: 40,
                    }}   
                />                
                <Text style={styles.title}>Agenda do dia</Text>
                <TouchableOpacity 
                    onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.btnSair}>Sair</Text>
                </TouchableOpacity>
        
        </View>                             
            

            <View style={styles.content}>                
                <DataList />
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',      
    },
    texto:{              
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    content:{
        flex: 10,       
        marginTop: 20,
        marginHorizontal: 10,
        marginVertical:10,
        
    },
    title:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',               
    },
    btnSair:{
        fontSize: 18,
        color: '#fff'
    }    
    
})