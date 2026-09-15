import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./FeedStyle";

export default function Feed() {

  const router = useRouter();
  const insets = useSafeAreaInsets();

  // NAVEGAÇÃO

  const handleCriar = () => {
    router.push("/publicacao");
  };

  const handleNotificacoes = () => {
    router.push("/notificacoes");
  };

  const handlePerfil = () => {
    router.push("/perfil");
  };

  const handleInicio = () => {
    router.replace("/feed");
  };


  return (
    <SafeAreaView style={styles.container}>

      {/* =====================================
          HEADER
      ====================================== */}

      <View style={styles.header}>

        <Text style={styles.logo}>
          Nexa
        </Text>

        <TouchableOpacity
          style={styles.notificationTop}
          onPress={handleNotificacoes}
          activeOpacity={0.7}
        >

          <Ionicons
            name="notifications-outline"
            size={22}
            color="#F5E6C8"
          />

          {/* <View style={styles.notificationDot} /> */}

        </TouchableOpacity>

      </View>


      {/* =====================================
          FEED
      ====================================== */}

      <ScrollView
        style={styles.feed}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      >

        {/* ===================================
            PRIMEIRO POST
        ==================================== */}

        <View style={styles.postCard}>

          <View style={styles.postHeader}>

            <View style={styles.avatarContainer}>

              <Image
                source={require("../../../assets/images/logo-nexa.png")}
                style={styles.avatar}
                resizeMode="cover"
              />

            </View>

            <View style={styles.userInfo}>

              <Text style={styles.userName}>
                paulozqk
              </Text>

              <Text style={styles.postTime}>
                Hoje às 10:30
              </Text>

            </View>

          </View>


          <Text style={styles.postText}>
            Aprendendo React Native e
            {"\n"}
            Expo Router! 🚀
          </Text>


          <View style={styles.separator} />

        </View>


        {/* ===================================
            SEGUNDO POST
        ==================================== */}

        <View style={styles.postCard}>

          <View style={styles.postHeader}>

            <View style={styles.avatarContainer}>

              <Image
                source={require("../../../assets/images/logo-nexa.png")}
                style={styles.avatar}
                resizeMode="cover"
              />

            </View>

            <View style={styles.userInfo}>

              <Text style={styles.userName}>
                davizqk
              </Text>

              <Text style={styles.postTime}>
                Ontem às 18:20
              </Text>

            </View>

          </View>


          <Text style={styles.postText}>
            Meu primeiro projeto mobile
            {"\n"}
            ficou pronto! ✨
          </Text>


          <View style={styles.separator} />

        </View>


        {/* Espaço para o botão flutuante */}

        {/* <View style={styles.bottomFeedSpace} /> */}

      </ScrollView>


      {/* =====================================
          BOTÃO CRIAR
      ====================================== */}

      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={0.8}
        onPress={handleCriar}
      >

        <Text style={styles.floatingPlus}>
          +
        </Text>

      </TouchableOpacity>

      {/* =========================
           MENU INFERIOR
          ========================= */}

      <View
        style={[
          styles.menu,
          {
            height: 76 + insets.bottom,
            paddingBottom: insets.bottom,
          },
        ]}
      >

        {/* INÍCIO */}

        <TouchableOpacity
          style={styles.itemAtivo}
          onPress={() => router.replace("/feed")}
          activeOpacity={0.7}
        >

          <Ionicons
            name="home"
            size={22}
            color="#D4AF37"
          />

          <Text style={styles.textoMenuAtivo}>
            Início
          </Text>

        </TouchableOpacity>


        {/* CRIAR */}

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/publicacao")}
          activeOpacity={0.7}
        >

          <Ionicons
            name="add-circle-outline"
            size={22}
            color="#F5E6C8"
          />

          <Text style={styles.textoMenu}>
            Criar
          </Text>

        </TouchableOpacity>


        {/* NOTIFICAÇÕES */}

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/notificacoes")}
          activeOpacity={0.7}
        >

          <Ionicons
            name="notifications-outline"
            size={22}
            color="#F5E6C8"
          />

          <Text style={styles.textoMenu}>
            Notificações
          </Text>

        </TouchableOpacity>


        {/* PERFIL */}

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/perfil")}
          activeOpacity={0.7}
        >

          <Ionicons
            name="person-outline"
            size={22}
            color="#F5E6C8"
          />

          <Text style={styles.textoMenu}>
            Perfil
          </Text>

        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}