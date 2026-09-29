import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    /* =========================
       TELA
    ========================== */

    container: {
        flex: 1,
        backgroundColor: "#0B0B0C",
    },


    /* =========================
       CABEÇALHO
    ========================== */

    header: {
        height: 68,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 20,

        backgroundColor: "#0B0B0C",

        borderBottomWidth: 1,
        borderBottomColor: "#3B3C41",
    },

    botaoVoltar: {
        width: 40,
        height: 40,

        alignItems: "center",
        justifyContent: "center",
    },

    titulo: {
        color: "#F5E6C8",

        fontSize: 20,
        fontWeight: "bold",
    },

    headerEspaco: {
        width: 40,
    },


    /* =========================
       SCROLL
    ========================== */

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 100,
    },


    /* =========================
       USUÁRIO
    ========================== */

    usuarioContainer: {
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 20,
    },

    avatar: {
        width: 52,
        height: 52,

        borderRadius: 26,

        backgroundColor: "#1A1B1F",

        borderWidth: 1.5,
        borderColor: "#D4AF37",

        alignItems: "center",
        justifyContent: "center",

        marginRight: 12,
    },

    nome: {
        color: "#F5E6C8",

        fontSize: 15,
        fontWeight: "bold",

        marginBottom: 3,
    },

    usuario: {
        color: "#3B3C41",

        fontSize: 12,
    },


    /* =========================
       TEXTO
    ========================== */

    textoContainer: {
        width: "100%",
        minHeight: 190,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 10,

        padding: 15,

        marginBottom: 18,
    },

    textInput: {
        width: "100%",
        minHeight: 145,

        color: "#F5E6C8",

        fontSize: 16,

        lineHeight: 23,

        padding: 0,
    },

    contador: {
        color: "#3B3C41",

        fontSize: 11,

        textAlign: "right",

        marginTop: 8,
    },


    /* =========================
       OPÇÕES
    ========================== */

    opcoes: {
        width: "100%",

        flexDirection: "row",

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 10,

        paddingVertical: 12,

        marginBottom: 18,
    },

    opcao: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        gap: 5,
    },

    opcaoTexto: {
        color: "#F5E6C8",

        fontSize: 10,
    },


    /* =========================
       PREVIEW
    ========================== */

    preview: {
        width: "100%",
        height: 120,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 10,

        alignItems: "center",
        justifyContent: "center",

        marginBottom: 20,
    },

    previewTexto: {
        color: "#3B3C41",

        fontSize: 12,

        marginTop: 8,
    },


    /* =========================
       BOTÃO PUBLICAR
    ========================== */

    botaoPublicar: {
        width: "100%",
        height: 50,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        gap: 8,

        backgroundColor: "#D4AF37",

        borderRadius: 8,
    },

    botaoDesabilitado: {
        opacity: 0.35,
    },

    textoPublicar: {
        color: "#0B0B0C",

        fontSize: 15,
        fontWeight: "bold",
    },


    /* =========================
       MENU INFERIOR
    ========================== */

    menu: {
        // position: "absolute",

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