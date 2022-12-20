import styled from 'styled-components/native';
import { StyleSheet } from "react-native";


export const TextoBotao = styled.Text`
    font-size: 20px;
    font-weight: bold; 
    color: #FFFFFF;
       
`;

export const Botao = styled.TouchableOpacity`
    padding: 10px 20px;
    padding-bottom:12px;
    background-color: #216651;   
    margin:10px auto;  
    border-radius: 16px;  
}
`;

export const Texto = styled.Text`
    
    color: #2e2e2e; 
    padding: 5px;
    text-align:center;
    font-weight:bold;
    font-size:30px;
    width:85%;  

`;

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#58BB84',
        color: "#000"
    },

});
