import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    /* =========================
       SCROLL
    ========================= */

    scroll: {
        flexGrow: 1,
        backgroundColor: "#0B0B0C",
        paddingBottom: 40,
        paddingTop: 20,
    },

    /* =========================
       CONTAINER
    ========================= */

    container: {
        flex: 1,
        backgroundColor: "#0B0B0C",
    },


    /* =========================
       HEADER
    ========================= */

    header: {
        height: 68,
        flexDirection: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#0B0B0C",
        borderBottomWidth: 1,
        borderBottomColor: "#3B3C41",
    },

    voltar: {
        color: "#F5E6C8",

        fontSize: 36,
        fontWeight: "300",

        lineHeight: 40,

        width: 35,
        textAlign: "center",
    },

    titulo: {
        color: "#F5E6C8",

        fontSize: 20,
        fontWeight: "bold",

        textAlign: "center",
    },

    espaco: {
        width: 35,
    },


    /* =========================
       FOTO
    ========================= */

    fotoContainer: {
        alignItems: "center",

        paddingTop: 38,
        paddingBottom: 32,
    },

    foto: {
        width: 115,
        height: 115,

        borderRadius: 57.5,

        backgroundColor: "#1A1B1F",

        borderWidth: 2,
        borderColor: "#D4AF37",

        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#D4AF37",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 4,
    },

    cabeca: {
        width: 30,
        height: 30,

        borderRadius: 15,

        backgroundColor: "#D4AF37",

        marginBottom: 6,
    },

    corpo: {
        width: 62,
        height: 36,

        borderRadius: 31,

        backgroundColor: "#D4AF37",
    },

    trocarFoto: {
        marginTop: 14,

        paddingVertical: 4,
        paddingHorizontal: 10,
    },

    trocarFotoTexto: {
        color: "#D4AF37",

        fontSize: 14,
        fontWeight: "bold",
    },


    /* =========================
       CAMPOS
    ========================= */

    campoContainer: {
        paddingHorizontal: 20,

        marginBottom: 20,
    },

    label: {
        color: "#F5E6C8",

        fontSize: 13,
        fontWeight: "bold",

        marginBottom: 8,
    },

    input: {
        width: "100%",
        height: 50,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 8,

        paddingHorizontal: 15,

        color: "#F5E6C8",

        fontSize: 14,
    },

    inputBio: {
        width: "100%",
        minHeight: 105,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 8,

        paddingHorizontal: 15,
        paddingTop: 14,
        paddingBottom: 14,

        color: "#F5E6C8",

        fontSize: 14,

        lineHeight: 20,
    },


    /* =========================
       BOTÃO SALVAR
    ========================= */

    botaoSalvar: {
        height: 50,

        marginHorizontal: 20,

        marginTop: 5,

        borderRadius: 8,

        backgroundColor: "#D4AF37",

        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#D4AF37",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,

        elevation: 3,
    },

    textoSalvar: {
        color: "#0B0B0C",

        fontSize: 15,
        fontWeight: "bold",
    },


    /* =========================
       BOTÃO CANCELAR
    ========================= */

    botaoCancelar: {
        height: 50,

        marginHorizontal: 20,

        marginTop: 12,

        borderRadius: 8,

        borderWidth: 1,
        borderColor: "#3B3C41",

        backgroundColor: "#1A1B1F",

        alignItems: "center",
        justifyContent: "center",
    },

    textoCancelar: {
        color: "#F5E6C8",

        fontSize: 15,
        fontWeight: "bold",
    },

});

export default styles;