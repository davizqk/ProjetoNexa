import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    /* =========================================
       CONTAINER
    ========================================= */

    container: {
        flex: 1,
        backgroundColor: "#0B0B0C",
    },


    /* =========================================
       CABEÇALHO
    ========================================= */

    header: {
        height: 58,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 18,
    },

    botaoVoltar: {
        width: 30,
        height: 30,

        justifyContent: "center",
        alignItems: "flex-start",
    },

    titulo: {
        color: "#F5E6C8",

        fontSize: 16,
        fontWeight: "bold",
    },

    botaoNotificacao: {
        width: 30,
        height: 30,

        justifyContent: "center",
        alignItems: "flex-end",
    },


    /* =========================================
       CONTEÚDO
    ========================================= */

    scroll: {
        flex: 1,
    },

    conteudo: {
        paddingHorizontal: 22,
        paddingBottom: 12,
    },


    /* =========================================
       USUÁRIO
    ========================================= */

    usuario: {
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 18,
    },

    avatar: {
        width: 30,
        height: 30,

        borderRadius: 15,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#D4AF37",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 8,
    },

    informacoesUsuario: {
        flex: 1,
    },

    nome: {
        color: "#F5E6C8",

        fontSize: 10,
        fontWeight: "bold",
    },

    data: {
        color: "#3B3C41",

        fontSize: 7,

        marginTop: 2,
    },


    /* =========================================
       TEXTO DA PUBLICAÇÃO
    ========================================= */

    textoContainer: {
        marginBottom: 12,
    },

    textoPublicacao: {
        color: "#5A5A60",

        fontSize: 10,
        fontWeight: "bold",

        marginBottom: 4,
    },

    subTexto: {
        color: "#3B3C41",

        fontSize: 8,
    },


    /* =========================================
       IMAGEM DA PUBLICAÇÃO
    ========================================= */

    imagemContainer: {
        width: "100%",
        height: 160,

        backgroundColor: "#1A1B1F",

        borderRadius: 9,

        justifyContent: "center",
        alignItems: "center",

        marginBottom: 12,
    },

    imagemNotebook: {
        width: 147,
        height: 88,

        backgroundColor: "#3B3C41",

        borderRadius: 5,

        padding: 7,

        justifyContent: "center",
        alignItems: "center",
    },

    telaNotebook: {
        width: "100%",
        height: "100%",

        backgroundColor: "#F5E6C8",

        borderRadius: 2,

        justifyContent: "center",
        alignItems: "center",
    },

    linhaDourada: {
        width: "75%",
        height: 5,

        backgroundColor: "#D4AF37",

        borderRadius: 3,

        marginBottom: 9,
    },

    linhaTexto1: {
        width: "60%",
        height: 4,

        backgroundColor: "#3B3C41",

        borderRadius: 3,

        marginBottom: 8,
    },

    linhaTexto2: {
        width: "75%",
        height: 4,

        backgroundColor: "#3B3C41",

        borderRadius: 3,
    },

    baseNotebook: {
        width: 190,
        height: 9,

        backgroundColor: "#3B3C41",

        borderRadius: 5,

        marginTop: -2,
    },


    /* =========================================
       AÇÕES
    ========================================= */

    acoes: {
        flexDirection: "row",
        alignItems: "center",

        gap: 10,

        height: 30,
    },

    acao: {
        flexDirection: "row",
        alignItems: "center",

        gap: 5,
    },

    numeroAcao: {
        color: "#D4AF37",

        fontSize: 11,
    },


    /* =========================================
       DIVISÓRIA
    ========================================= */

    divisoria: {
        height: 1,

        backgroundColor: "#1A1B1F",

        marginTop: 8,
        marginBottom: 13,
    },


    /* =========================================
       COMENTÁRIOS
    ========================================= */

    tituloComentarios: {
        color: "#D4AF37",

        fontSize: 11,
        fontWeight: "bold",

        marginBottom: 13,
    },

    comentario: {
        flexDirection: "row",
        alignItems: "flex-start",

        marginBottom: 12,
    },

    avatarComentario: {
        width: 29,
        height: 29,

        borderRadius: 15,

        backgroundColor: "#1A1B1F",

        borderWidth: 1,
        borderColor: "#D4AF37",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 8,
    },

    conteudoComentario: {
        flex: 1,
    },

    nomeComentario: {
        color: "#F5E6C8",

        fontSize: 9,
        fontWeight: "bold",

        marginBottom: 2,
    },

    textoComentario: {
        color: "#3B3C41",

        fontSize: 8,
    },

    horarioComentario: {
        color: "#5A5A60",

        fontSize: 7,

        marginTop: 1,
    },


    /* =========================================
       CAMPO DE COMENTÁRIO
    ========================================= */

    areaComentario: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#1A1B1F",

        borderRadius: 8,

        height: 41,

        paddingHorizontal: 10,

        marginTop: 2,
    },

    inputComentario: {
        flex: 1,

        color: "#F5E6C8",

        fontSize: 8,

        paddingVertical: 7,

        minHeight: 35,
    },

    botaoEnviar: {
        width: 25,
        height: 30,

        justifyContent: "center",
        alignItems: "center",
    },


    /* =========================================
       MENU INFERIOR
    ========================================= */

    menu: {
        height: 62,

        backgroundColor: "#0B0B0C",

        borderTopWidth: 1,
        borderTopColor: "#1A1B1F",

        flexDirection: "row",

        justifyContent: "space-around",
        alignItems: "center",

        paddingHorizontal: 7,
    },

    item: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        gap: 2,
    },

    textoMenu: {
        color: "#F5E6C8",

        fontSize: 7,
    },

});

export default styles;
