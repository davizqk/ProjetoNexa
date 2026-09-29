import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    /* =========================
       CONTAINER
    ========================== */

    container: {
        flex: 1,
        backgroundColor: "#0B0B0C",
    },


    /* =========================
       HEADER
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

        justifyContent: "center",
        alignItems: "center",
    },

    titulo: {
        color: "#F5E6C8",

        fontSize: 20,
        fontWeight: "bold",
    },

    botaoMais: {
        width: 40,
        height: 40,

        justifyContent: "center",
        alignItems: "center",
    },


    /* =========================
       SCROLL
    ========================== */

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingHorizontal: 18,
        paddingTop: 20,
        paddingBottom: 90,
    },


    /* =========================
       AUTOR
    ========================== */

    autorContainer: {
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 18,
    },

    avatar: {
        width: 48,
        height: 48,

        borderRadius: 24,

        backgroundColor: "#1A1B1F",

        borderWidth: 1.5,
        borderColor: "#D4AF37",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 12,
    },

    autorInfo: {
        flex: 1,
    },

    nomeAutor: {
        color: "#F5E6C8",

        fontSize: 15,
        fontWeight: "bold",
    },

    dataPublicacao: {
        color: "#3B3C41",

        fontSize: 11,

        marginTop: 3,
    },


    /* =========================
       TEXTO
    ========================== */

    textoPublicacao: {
        color: "#F5E6C8",

        fontSize: 15,

        lineHeight: 23,

        marginBottom: 18,
    },


    /* =========================
       IMAGEM
    ========================== */

    imagem: {
        width: "100%",
        height: 220,

        backgroundColor: "#1A1B1F",

        borderRadius: 10,

        justifyContent: "center",
        alignItems: "center",
    },

    imagemTexto: {
        color: "#3B3C41",

        fontSize: 12,

        marginTop: 8,
    },


    /* =========================
       AÇÕES
    ========================== */

    acoes: {
        flexDirection: "row",
        alignItems: "center",

        paddingTop: 15,
        paddingBottom: 8,
    },

    acao: {
        flexDirection: "row",
        alignItems: "center",

        marginRight: 22,
    },

    numeroAcao: {
        color: "#F5E6C8",

        fontSize: 12,

        marginLeft: 5,
    },

    acaoSalvar: {
        marginLeft: "auto",

        width: 35,
        height: 35,

        justifyContent: "center",
        alignItems: "flex-end",
    },


    /* =========================
       CURTIDAS
    ========================== */

    curtidas: {
        color: "#F5E6C8",

        fontSize: 13,
        fontWeight: "bold",

        marginBottom: 15,
    },


    /* =========================
       DIVISOR
    ========================== */

    divisor: {
        height: 1,

        backgroundColor: "#3B3C41",

        marginBottom: 18,
    },


    /* =========================
       COMENTÁRIOS
    ========================== */

    tituloComentarios: {
        color: "#F5E6C8",

        fontSize: 16,
        fontWeight: "bold",

        marginBottom: 15,
    },

    comentarioContainer: {
        flexDirection: "row",

        marginBottom: 18,
    },

    avatarComentario: {
        width: 38,
        height: 38,

        borderRadius: 19,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#3B3C41",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 10,
    },

    comentarioConteudo: {
        flex: 1,

        paddingTop: 2,
    },

    comentarioTexto: {
        color: "#F5E6C8",

        fontSize: 13,

        lineHeight: 19,
    },

    comentarioNome: {
        color: "#D4AF37",

        fontWeight: "bold",
    },

    comentarioTempo: {
        color: "#3B3C41",

        fontSize: 10,

        marginTop: 4,
    },


    /* =========================
       ESPAÇO
    ========================== */

    espacoFinal: {
        height: 20,
    },


    /* =========================
       CAMPO DE COMENTÁRIO
    ========================== */

    comentarContainer: {
        minHeight: 65,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 15,
        paddingVertical: 10,

        backgroundColor: "#1A1B1F",

        borderTopWidth: 1,
        borderTopColor: "#3B3C41",
    },

    comentarInput: {
        flex: 1,

        height: 42,

        backgroundColor: "#0B0B0C",

        borderWidth: 1,
        borderColor: "#3B3C41",

        borderRadius: 21,

        paddingHorizontal: 15,

        color: "#F5E6C8",

        fontSize: 13,
    },

    botaoEnviar: {
        width: 42,
        height: 42,

        justifyContent: "center",
        alignItems: "center",

        marginLeft: 8,
    },

});

export default styles;