import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0B0B0C",
    },


    /* HEADER */

    header: {
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#3B3C41",
    },

    titulo: {
        color: "#F5E6C8",
        fontSize: 22,
        fontWeight: "bold",
    },

    config: {
        color: "#F5E6C8",
        fontSize: 24,
    },


    /* PERFIL */

    perfil: {
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 15,
    },


    /* FOTO */

    fotoContainer: {
        position: "relative",
        width: 110,
        height: 110,
        marginBottom: 15,
    },

    foto: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: "#3B3C41",
        borderWidth: 2,
        borderColor: "#D4AF37",
        alignItems: "center",
        justifyContent: "center",
    },

    cabeca: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#D4AF37",
        marginBottom: 5,
    },

    corpo: {
        width: 60,
        height: 35,
        borderRadius: 30,
        backgroundColor: "#D4AF37",
    },

    editarFoto: {
        position: "absolute",
        right: -5,
        bottom: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#D4AF37",
        alignItems: "center",
        justifyContent: "center",
    },


    /* NOME */

    nome: {
        color: "#F5E6C8",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
    },

    usuario: {
        color: "#3B3C41",
        fontSize: 14,
        marginBottom: 25,
    },


    /* ESTATÍSTICAS */

    estatisticas: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#0B0B0C",
        paddingVertical: 15,
        marginBottom: 18,
    },

    stat: {
        alignItems: "center",
    },

    numero: {
        color: "#D4AF37",
        fontSize: 18,
        fontWeight: "bold",
    },

    label: {
        color: "#F5E6C8",
        fontSize: 12,
        marginTop: 4,
    },


    /* BIO */

    bio: {
        color: "#F5E6C8",
        textAlign: "center",
        fontSize: 13,
        lineHeight: 20,
        marginBottom: 20,
    },


    /* BOTÃO */

    botaoEditar: {
        width: "100%",
        height: 42,
        backgroundColor: "#1A1B1F",
        borderWidth: 1,
        borderColor: "#D4AF37",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    textoBotao: {
        color: "#D4AF37",
        fontSize: 14,
        fontWeight: "bold",
    },


    /* ABAS */

    abas: {
        height: 55,
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#3B3C41",
    },

    aba: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },

    abaAtiva: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#D4AF37",
    },

    iconeAba: {
        color: "#D4AF37",
        fontSize: 24,
    },


    /* PUBLICAÇÕES */

    publicacoes: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 3,
        padding: 3,
    },

    post: {
        width: "32.8%",
        height: 120,
        backgroundColor: "#1A1B1F",
        borderWidth: 1,
        borderColor: "#3B3C41",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    iconePost: {
        color: "#3B3C41",
        fontSize: 32,
    },


    menu: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#1A1B1F",
        borderTopWidth: 1,
        borderTopColor: "#3B3C41",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },


    /* =========================
       ITENS DO MENU
    ========================== */

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