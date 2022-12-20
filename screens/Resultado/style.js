import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const SubTexto = styled.Text`
    
    color: #fff; 
    padding: 5px;
    text-align:center;
    font-weight:bold;
    font-size:20px;
    width:85%;  

`;


export const styles = StyleSheet.create({
    loadingScreen: {
        position: 'absolute',

        display: 'flex',
        width: '100%',
        height: '110%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0008',
        opacity: 1,
        zIndex: 9999,
    },
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#58BB84',
        color: "#000"
    },

});
