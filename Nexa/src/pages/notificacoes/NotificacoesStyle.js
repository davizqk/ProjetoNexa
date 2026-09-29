import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    /* =========================
       CONTAINER
    ========================== */

    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#0B0B0C",
    },


    /* =========================
       HEADER
    ========================== */

    header: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B0B0C",
        borderBottomWidth: 1,
        borderBottomColor: "#3B3C41",
    },

    titulo: {
        color: "#F5E6C8",
        fontSize: 20,
        fontWeight: "bold",
    },


    /* =========================
       SCROLL
    ========================== */

    scroll: {
        flex: 1,
    },

    lista: {
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 100,
    },


    /* =========================
       CARD DE NOTIFICAÇÃO
    ========================== */

    card: {
        minHeight: 76,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 12,

        paddingHorizontal: 14,
        paddingVertical: 12,

        marginBottom: 12,
    },


    /* =========================
       ÍCONE
    ========================== */

    iconeContainer: {
        width: 46,
        height: 46,

        borderRadius: 23,

        backgroundColor: "#0B0B0C",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 13,
    },


    /* =========================
       CONTEÚDO
    ========================== */

    conteudo: {
        flex: 1,
    },

    mensagem: {
        color: "#F5E6C8",
        fontSize: 14,
        lineHeight: 19,
    },

    nome: {
        color: "#D4AF37",
        fontWeight: "bold",
    },

    tempo: {
        color: "#3B3C41",
        fontSize: 12,
        marginTop: 4,
    },


    /* =========================
       MENU INFERIOR
    ========================== */

    menu: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 76,
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