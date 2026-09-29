import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./FeedStyle";

export default function Feed() {

  const router = useRouter();

  // =========================
  // ESTADOS DOS POSTS
  // =========================

  const [curtido, setCurtido] = useState({
    post1: false,
    post2: false,
  });

  const [salvo, setSalvo] = useState({
    post1: false,
    post2: false,
  });


  // =========================
  // CURTIR
  // =========================

  function alternarCurtida(post) {

    setCurtido((estadoAtual) => ({
      ...estadoAtual,
      [post]: !estadoAtual[post],
    }));

  }


  // =========================
  // SALVAR
  // =========================

  function alternarSalvo(post) {

    setSalvo((estadoAtual) => ({
      ...estadoAtual,
      [post]: !estadoAtual[post],
    }));

  }


  return (
    <SafeAreaView style={styles.container}>

      {/* =========================
                CABEÇALHO
            ========================== */}

      <View style={styles.header}>

        <Text style={styles.logo}>
          Nexa
        </Text>

        <TouchableOpacity
          style={styles.botaoNotificacao}
          onPress={() => router.push("/notificacoes")}
          activeOpacity={0.7}
        >

          <Ionicons
            name="notifications-outline"
            size={24}
            color="#F5E6C8"
          />

          <View style={styles.pontoNotificacao} />

        </TouchableOpacity>

      </View>


      {/* =========================
                FEED
            ========================== */}

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      >


        {/* ==================================================
                    POST 1
                =================================================== */}

        <View style={styles.postCard}>

          {/* Cabeçalho */}

          <View style={styles.postHeader}>

            <View style={styles.avatar}>

              <Ionicons
                name="person"
                size={22}
                color="#D4AF37"
              />

            </View>

            <View style={styles.userInfo}>

              <Text style={styles.userName}>
                paulozqk3
              </Text>

              <Text style={styles.postTime}>
                Hoje às 10:30
              </Text>

            </View>

            {/* <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal"
                size={20}
                color="#F5E6C8"
              />
            </TouchableOpacity> */}

          </View>


          {/* Texto */}

          <TouchableOpacity
            onPress={() =>
              router.push("/detalhePubli")
            }
            activeOpacity={0.8}
          >

            <Text style={styles.postText}>
              Aprendendo React Native e Expo Router! 🚀
            </Text>

          </TouchableOpacity>


          {/* Imagem */}

          <TouchableOpacity
            onPress={() =>
              router.push("/detalhePubli")
            }
            activeOpacity={0.8}
          >

            <View style={styles.postImage}>

              <Ionicons
                name="image-outline"
                size={45}
                color="#3B3C41"
              />

              <Text style={styles.imagemTexto}>
                Imagem da publicação
              </Text>

            </View>

          </TouchableOpacity>


          {/* AÇÕES */}

          <View style={styles.acoes}>


            {/* CURTIR */}

            <TouchableOpacity
              style={styles.acao}
              onPress={() =>
                alternarCurtida("post1")
              }
              activeOpacity={0.7}
            >

              <Ionicons
                name={
                  curtido.post1
                    ? "heart"
                    : "heart-outline"
                }
                size={22}
                color={
                  curtido.post1
                    ? "#D4AF37"
                    : "#F5E6C8"
                }
              />

              <Text style={styles.acaoTexto}>
                {curtido.post1 ? 26 : 25}
              </Text>

            </TouchableOpacity>


            {/* COMENTÁRIOS */}

            <TouchableOpacity
              style={styles.acao}
              onPress={() =>
                router.push("/detalhePubli")
              }
              activeOpacity={0.7}
            >

              <Ionicons
                name="chatbubble-outline"
                size={21}
                color="#F5E6C8"
              />

              <Text style={styles.acaoTexto}>
                4
              </Text>

            </TouchableOpacity>


            {/* SALVAR */}

            <TouchableOpacity
              style={styles.acaoDireita}
              onPress={() =>
                alternarSalvo("post1")
              }
              activeOpacity={0.7}
            >

              <Ionicons
                name={
                  salvo.post1
                    ? "bookmark"
                    : "bookmark-outline"
                }
                size={22}
                color={
                  salvo.post1
                    ? "#D4AF37"
                    : "#F5E6C8"
                }
              />

            </TouchableOpacity>

          </View>

        </View>


        {/* ==================================================
                    POST 2
                =================================================== */}

        <View style={styles.postCard}>

          {/* Cabeçalho */}

          <View style={styles.postHeader}>

            <View style={styles.avatar}>

              <Ionicons
                name="person"
                size={22}
                color="#D4AF37"
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

            {/* <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal"
                size={20}
                color="#F5E6C8"
              />
            </TouchableOpacity> */}

          </View>


          {/* Texto */}

          <TouchableOpacity
            onPress={() =>
              router.push("/detalhePubli")
            }
            activeOpacity={0.8}
          >

            <Text style={styles.postText}>
              Meu primeiro projeto mobile ficou pronto! ✨
            </Text>

          </TouchableOpacity>


          {/* Imagem */}

          <TouchableOpacity
            onPress={() =>
              router.push("/detalhePubli")
            }
            activeOpacity={0.8}
          >

            <View style={styles.postImage}>

              <Ionicons
                name="image-outline"
                size={45}
                color="#3B3C41"
              />

              <Text style={styles.imagemTexto}>
                Imagem da publicação
              </Text>

            </View>

          </TouchableOpacity>


          {/* AÇÕES */}

          <View style={styles.acoes}>


            {/* CURTIR */}

            <TouchableOpacity
              style={styles.acao}
              onPress={() =>
                alternarCurtida("post2")
              }
              activeOpacity={0.7}
            >

              <Ionicons
                name={
                  curtido.post2
                    ? "heart"
                    : "heart-outline"
                }
                size={22}
                color={
                  curtido.post2
                    ? "#D4AF37"
                    : "#F5E6C8"
                }
              />

              <Text style={styles.acaoTexto}>
                {curtido.post2 ? 33 : 32}
              </Text>

            </TouchableOpacity>


            {/* COMENTÁRIOS */}

            <TouchableOpacity
              style={styles.acao}
              onPress={() =>
                router.push("/detalhePubli")
              }
              activeOpacity={0.7}
            >

              <Ionicons
                name="chatbubble-outline"
                size={21}
                color="#F5E6C8"
              />

              <Text style={styles.acaoTexto}>
                8
              </Text>

            </TouchableOpacity>


            {/* SALVAR */}

            <TouchableOpacity
              style={styles.acaoDireita}
              onPress={() =>
                alternarSalvo("post2")
              }
              activeOpacity={0.7}
            >

              <Ionicons
                name={
                  salvo.post2
                    ? "bookmark"
                    : "bookmark-outline"
                }
                size={22}
                color={
                  salvo.post2
                    ? "#D4AF37"
                    : "#F5E6C8"
                }
              />

            </TouchableOpacity>

          </View>

        </View>


        <View style={styles.espacoFinal} />

      </ScrollView>


      {/* =========================
                BOTÃO CRIAR
            ========================== */}

      <TouchableOpacity
        style={styles.botaoCriar}
        onPress={() => router.push("/publicacao")}
        activeOpacity={0.8}
      >

        <Ionicons
          name="add"
          size={30}
          color="#0B0B0C"
        />

      </TouchableOpacity>


      {/* =========================
                MENU INFERIOR
            ========================== */}

      <View style={styles.menu}>

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