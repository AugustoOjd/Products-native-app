import { StyleSheet } from 'react-native';



export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        fontSize: 20
    },
    btnContainer:{
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    buttonText:{
        fontSize: 18,
        color: 'white'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    textInput: {
        paddingHorizontal: 15,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 15
    },
    btnToLogin : {
        position: 'absolute',
        top: 50,
        left: 20,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15
    }
})