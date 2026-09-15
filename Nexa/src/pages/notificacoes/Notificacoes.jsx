import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./NotificacoesStyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notificacoes() {

    const router = useRouter();

    return (
            <SafeAreaView style={styles.container}>

                {/* =========================
                CABEÇALHO
            ========================== */}

                <View style={styles.header}>

                    <Text style={styles.titulo}>
                        Notificações
                    </Text>

                </View>


                {/* =========================
                LISTA
            ========================== */}

                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.lista}
                    showsVerticalScrollIndicator={false}
                >

                    {/* João Silva */}

                    <TouchableOpacity style={styles.card}>

                        <View style={styles.iconeContainer}>

                            <Ionicons
                                name="heart"
                                size={24}
                                color="#D4AF37"
                            />

                        </View>

                        <View style={styles.conteudo}>

                            <Text style={styles.mensagem}>
                                <Text style={styles.nome}>
                                    João Silva
                                </Text>

                                {" curtiu sua publicação."}
                            </Text>

                            <Text style={styles.tempo}>
                                10:30
                            </Text>

                        </View>

                    </TouchableOpacity>


                    {/* Maria Oliveira */}

                    <TouchableOpacity style={styles.card}>

                        <View style={styles.iconeContainer}>

                            <Ionicons
                                name="chatbubble"
                                size={23}
                                color="#D4AF37"
                            />

                        </View>

                        <View style={styles.conteudo}>

                            <Text style={styles.mensagem}>
                                <Text style={styles.nome}>
                                    Maria Oliveira
                                </Text>

                                {" comentou sua publicação."}
                            </Text>

                            <Text style={styles.tempo}>
                                09:45
                            </Text>

                        </View>

                    </TouchableOpacity>


                    {/* Carlos Lima */}

                    <TouchableOpacity style={styles.card}>

                        <View style={styles.iconeContainer}>

                            <Ionicons
                                name="person-add-outline"
                                size={24}
                                color="#D4AF37"
                            />

                        </View>

                        <View style={styles.conteudo}>

                            <Text style={styles.mensagem}>
                                <Text style={styles.nome}>
                                    Carlos Lima
                                </Text>

                                {" começou a seguir você."}
                            </Text>

                            <Text style={styles.tempo}>
                                Ontem
                            </Text>

                        </View>

                    </TouchableOpacity>


                    {/* Ana Paula */}

                    <TouchableOpacity style={styles.card}>

                        <View style={styles.iconeContainer}>

                            <Ionicons
                                name="heart"
                                size={24}
                                color="#D4AF37"
                            />

                        </View>

                        <View style={styles.conteudo}>

                            <Text style={styles.mensagem}>
                                <Text style={styles.nome}>
                                    Ana Paula
                                </Text>

                                {" curtiu sua publicação."}
                            </Text>

                            <Text style={styles.tempo}>
                                Ontem
                            </Text>

                        </View>

                    </TouchableOpacity>


                    {/* Lucas */}

                    <TouchableOpacity style={styles.card}>

                        <View style={styles.iconeContainer}>

                            <Ionicons
                                name="chatbubble"
                                size={23}
                                color="#D4AF37"
                            />

                        </View>

                        <View style={styles.conteudo}>

                            <Text style={styles.mensagem}>
                                <Text style={styles.nome}>
                                    Lucas
                                </Text>

                                {" comentou sua publicação."}
                            </Text>

                            <Text style={styles.tempo}>
                                2 dias atrás
                            </Text>

                        </View>

                    </TouchableOpacity>

                </ScrollView>


                {/* =========================
                MENU INFERIOR
            ========================== */}

                <View style={styles.menu}>

                    {/* INÍCIO */}

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => router.replace("/feed")}
                    >

                        <Ionicons
                            name="home-outline"
                            size={22}
                            color="#F5E6C8"
                        />

                        <Text style={styles.textoMenu}>
                            Início
                        </Text>

                    </TouchableOpacity>


                    {/* CRIAR */}

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => router.push("/publicacao")}
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
                        style={styles.itemAtivo}
                    >

                        <Ionicons
                            name="notifications"
                            size={22}
                            color="#D4AF37"
                        />

                        <Text style={styles.textoMenuAtivo}>
                            Notificações
                        </Text>

                    </TouchableOpacity>


                    {/* PERFIL */}

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => router.push("/perfil")}
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