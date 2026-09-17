import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0B0B0C",
    },


    /* CABEÇALHO */

    header: {
        height: 68,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 20,

        borderBottomWidth: 1,
        borderBottomColor: "#3B3C41",
    },

    botaoVoltar: {
        width: 40,
        height: 40,

        justifyContent: "center",
        alignItems: "center",
    },

    titulo: {
        color: "#F5E6C8",

        fontSize: 20,
        fontWeight: "bold",
    },

    headerVazio: {
        width: 40,
    },


    /* SCROLL */

    scroll: {
        flex: 1,
    },

    conteudo: {
        padding: 20,
        paddingBottom: 100,
    },


    /* USUÁRIO */

    usuario: {
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 20,
    },

    avatar: {
        width: 50,
        height: 50,

        borderRadius: 25,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#D4AF37",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 12,
    },

    nome: {
        color: "#F5E6C8",

        fontSize: 15,
        fontWeight: "bold",
    },

    username: {
        color: "#3B3C41",

        fontSize: 12,

        marginTop: 3,
    },


    /* CAMPO DE TEXTO */

    input: {
        width: "100%",
        height: 190,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 10,

        padding: 15,

        color: "#F5E6C8",

        fontSize: 16,
        lineHeight: 22,
    },

    contador: {
        color: "#3B3C41",

        fontSize: 11,

        textAlign: "right",

        marginTop: 6,
        marginBottom: 20,
    },


    /* OPÇÕES */

    opcoes: {
        flexDirection: "row",

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 10,

        marginBottom: 20,

        paddingVertical: 12,
    },

    opcao: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        gap: 5,
    },

    opcaoTexto: {
        color: "#F5E6C8",

        fontSize: 11,
    },


    /* BOTÃO */

    botao: {
        height: 50,

        backgroundColor: "#D4AF37",

        borderRadius: 8,

        justifyContent: "center",
        alignItems: "center",
    },

    botaoDesativado: {
        opacity: 0.35,
    },

    textoBotao: {
        color: "#0B0B0C",

        fontSize: 15,
        fontWeight: "bold",
    },


    /* MENU INFERIOR */

    menu: {
        height: 76,

        backgroundColor: "#1A1B1F",

        borderTopWidth: 1,
        borderTopColor: "#3B3C41",

        flexDirection: "row",

        justifyContent: "space-around",
        alignItems: "center",
    },

    item: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        gap: 4,
    },

    itemAtivo: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        gap: 4,
    },

    textoMenu: {
        color: "#F5E6C8",

        fontSize: 10,
    },

    textoMenuAtivo: {
        color: "#D4AF37",

        fontSize: 10,
        fontWeight: "bold",
    },

});

export default styles;