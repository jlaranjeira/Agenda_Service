import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Visualizar({route}){    
    const navigation = useNavigation();
    return(   
              
        <View style={styles.container}>            
            <Text style={styles.titulo}>Detalhes do agendamento</Text>
            <View style={styles.contentv}>
                <Text style={styles.subtitulo}>Dados do cliente</Text>
                <Text style={styles.campo}>Nome: {route.params.nome}</Text>
                <Text style={styles.campo}>Email: {route.params.email}</Text>
                <Text style={styles.campo}>Telefone: {route.params.telefone}</Text>
                <Text style={styles.campo}>Endereço: {route.params.endereco}</Text>
                <Text style={styles.campo}>Serviço: {route.params.title}</Text>
                <Text style={styles.campo}>Data: {route.params.start}</Text>             

            </View>

            <TouchableOpacity 
                style={styles.btnvoltar}
                onPress={ () => navigation.navigate('Home')}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#0347a0',
          
          
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff',
        marginBottom: 20,
        marginTop: 20
    },
    subtitulo:{
        fontSize: 16,
        fontWeight: 'bold',        
        color: '#fff',
        
    },
    contentv:{
        gap: 15,        
        backgroundColor: '#fff',        
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 30,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20 
    },
    campo:{
        fontSize: 18,
        color: '#000',
    },
    btnvoltar:{
        backgroundColor: '#3580cb',
        padding: 25,
        color: '#fff',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10
    },
        btnText:{
            color: '#fff',
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            

        }

})
