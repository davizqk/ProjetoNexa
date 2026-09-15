import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // ==========================================
  // TELA
  // ==========================================

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#0B0B0C',
  },

  // ==========================================
  // HEADER
  // ==========================================

  header: {
    height: 82,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    color: '#D4AF37',
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: -0.5,
  },

  notificationTop: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  notificationIcon: {
    color: '#F5E6C8',
    fontSize: 26,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },

  notificationDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D4AF37',
    right: 6,
    top: 7,
  },

  // ==========================================
  // FEED
  // ==========================================

  feed: {
    flex: 1,
  },

  feedContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },

  // ==========================================
  // CARD DA PUBLICAÇÃO
  // ==========================================

  postCard: {
    width: '100%',
    minHeight: 168,
    backgroundColor: '#1A1B1F',
    borderRadius: 15,
    paddingHorizontal: 17,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 14,
  },

  // ==========================================
  // CABEÇALHO DO POST
  // ==========================================

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  avatarContainer: {
    width: 35,
    height: 35,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 9,
    backgroundColor: '#3B3C41',
  },

  avatar: {
    width: '100%',
    height: '100%',
  },

  userInfo: {
    justifyContent: 'center',
  },

  userName: {
    color: '#F5E6C8',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 3,
  },

  postTime: {
    color: '#3B3C41',
    fontSize: 10,
  },

  // ==========================================
  // TEXTO DO POST
  // ==========================================

  postText: {
    color: '#F5E6C8',
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '600',
    marginBottom: 20,
  },

  // ==========================================
  // LINHA DO POST
  // ==========================================

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#303136',
  },

  // ==========================================
  // ESPAÇO FINAL
  // ==========================================

  // bottomFeedSpace: {
  //   height: 100,
  // },

  // ==========================================
  // BOTÃO FLUTUANTE
  // ==========================================

  // floatingButton: {
  //   position: 'absolute',
  //   right: 22,
  //   bottom: 122,
  //   width: 51,
  //   height: 51,
  //   borderRadius: 26,
  //   backgroundColor: '#D4AF37',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   elevation: 5,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },

  //   shadowOpacity: 0.3,
  //   shadowRadius: 5,
  // },

  // floatingPlus: {
  //   color: '#0B0B0C',
  //   fontSize: 31,
  //   fontWeight: '300',
  //   lineHeight: 32,
  // },

  /* MENU */

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