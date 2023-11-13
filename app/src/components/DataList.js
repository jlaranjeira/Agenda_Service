import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 
'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';







//const events = [{dados}]
   /* {
        id: '01',
        nome: 'José Laranjeira',
        email: 'jlaranjeira@hotmail.com',        
        telefone: '(91) 99132-1445',
        endereco: 'Rua Bolonha, 25 - Bairro centro - Benevides',
        servico: 'Limpeza de Tapete',
        date: '12-11-2023 08;00'
    },
    {
        id: '02',
        nome: 'Maria Flor de Lima Laranjeira',
        email: 'jlaranjeira@hotmail.com',         
        telefone: '(91) 99246-5563',
        endereco: 'Rua Bolonha, 25 - Bairro centro - Benevides',
        servico: 'Limpeza de Tapete',
        date: '12-11-2023 08;00'
    },
    {
        id: '03',
        nome: 'Leila Lima',
        email: 'jlaranjeira@hotmail.com',         
        telefone: '(91) 98806-7101',
        endereco: 'Rua Bolonha, 25 - Bairro centro - Benevides',
        servico: 'Limpeza de Tapete',
        date: '12-11-2023 08:00'
    },

]*/

export default function DataList(){
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])
    
    useEffect(() => {
                    fetch('http://localhost:3000/clients')
                    .then((resp) => resp.json())
                    .then((json) => setDados(json))
                    .catch(() => ('erro ao carregar lita de clients'))
                    .finally(() => setCarregando(false))          
                },[]      
                
    )


    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            {

                carregando ? <ActivityIndicator /> : (
            <FlatList 
                data={dados}                
                keyExtractor={item=>item.id}
                renderItem={({item}) =>
                <View style={styles.cell}>
                    <TouchableOpacity onPress={ () => navigation.navigate('Visualizar', item)}>
                        <Text style={styles.textItem}>Nome:</Text>
                        <Text style={styles.item}>{item.nome}</Text>
                        <Text style={styles.textItem}>Serviço:</Text>
                        <Text style={styles.item}>{item.title}</Text>
                        <Text style={styles.textItem}>Telefone:</Text>
                        <Text style={styles.item}>{item.telefone}</Text>
                    </TouchableOpacity>                  
                    
                </View>}            
            />
            ) 
            }            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,               
      },

    cell:{
        marginTop: 10,
        backgroundColor: "#E6E6FA",        
        padding: 10,
        borderRadius: 10
        
    },
    item:{
        color: '#000',
        fontSize: 18
    },
    textItem:{
        fontWeight: 'bold'
    }
})