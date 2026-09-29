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

  logo: {
    color: "#D4AF37",

    fontSize: 24,
    fontWeight: "bold",
  },

  botaoNotificacao: {
    width: 40,
    height: 40,

    alignItems: "center",
    justifyContent: "center",

    position: "relative",
  },

  // pontoNotificacao: {
  //     position: "absolute",

  //     width: 7,
  //     height: 7,

  //     borderRadius: 4,

  //     backgroundColor: "#D4AF37",

  //     top: 8,
  //     right: 8,
  // },


  /* =========================
     SCROLL
  ========================== */

  scroll: {
    flex: 1,
  },

  feedContent: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 25,
  },


  /* =========================
     POST
  ========================== */

  postCard: {
    backgroundColor: "#1A1B1F",

    borderWidth: 1,
    borderColor: "#3B3C41",

    borderRadius: 12,

    padding: 14,

    marginBottom: 15,
  },


  /* =========================
     CABEÇALHO DO POST
  ========================== */

  postHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 14,
  },

  avatar: {
    width: 44,
    height: 44,

    borderRadius: 22,

    backgroundColor: "#0B0B0C",

    borderWidth: 1,
    borderColor: "#D4AF37",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 10,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    color: "#F5E6C8",

    fontSize: 14,
    fontWeight: "bold",
  },

  postTime: {
    color: "#3B3C41",

    fontSize: 11,

    marginTop: 3,
  },


  /* =========================
     TEXTO
  ========================== */

  postText: {
    color: "#F5E6C8",

    fontSize: 14,

    lineHeight: 21,

    marginBottom: 14,
  },


  /* =========================
     IMAGEM
  ========================== */

  postImage: {
    width: "100%",
    height: 180,

    backgroundColor: "#0B0B0C",

    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },

  imagemTexto: {
    color: "#3B3C41",

    fontSize: 11,

    marginTop: 7,
  },


  /* =========================
     AÇÕES
  ========================== */

  acoes: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 13,

    paddingTop: 12,

    borderTopWidth: 1,
    borderTopColor: "#3B3C41",
  },

  acao: {
    flexDirection: "row",

    alignItems: "center",

    marginRight: 20,
  },

  acaoTexto: {
    color: "#F5E6C8",

    fontSize: 12,

    marginLeft: 5,
  },

  acaoDireita: {
    marginLeft: "auto",
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
     ESPAÇO
  ========================== */

  espacoFinal: {
    height: 20,
  },


  /* =========================
     BOTÃO CRIAR
  ========================== */

  botaoCriar: {
    position: "absolute",
    right: 20,
    bottom: 92,
    width: 55,
    height: 55,
    bottom: 140,
    borderRadius: 28,
    backgroundColor: "#D4AF37",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#D4AF37",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },


  /* =========================
     MENU INFERIOR
  ========================== */

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