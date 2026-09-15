import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#0B0B0C",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingTop: 130,
        paddingBottom: 230,
    },


    /* LOGO */

    logoContainer: {
        width: '100%',
        height: 105,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },

    linhaLogo: {
        width: 170,
        height: 3,
        backgroundColor: "#D4AF37",
        borderRadius: 5,
        transform: [
            {
                rotate: "-10deg",
            },
        ],
        marginTop: -5,
    },


    /* CONTEÚDO */

    conteudo: {
        alignItems: "center",
        flex: 1,
    },

    titulo: {
        color: "#F5E6C8",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },

    subtitulo: {
        color: "#3B3C41",
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
    },


    /* BOTÕES */

    botoes: {
        width: "100%",
        alignItems: "center",
    },

    botaoEntrar: {
        width: "100%",
        height: 54,
        backgroundColor: "#D4AF37",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    textoEntrar: {
        color: "#0B0B0C",
        fontSize: 15,
        fontWeight: "bold",
    },


    /* OU */

    ou: {
        color: "#3B3C41",
        fontSize: 14,
        marginVertical: 18,
    },


    /* CRIAR CONTA */

    botaoCriar: {
        width: "100%",
        height: 54,
        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 10,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
    },

    textoCriar: {
        color: "#F5E6C8",
        fontSize: 15,
        fontWeight: "bold",
    },

});

export default styles;