import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { useRouter } from "expo-router";
import styles from "./PerfilStyle";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Perfil() {

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

            <ScrollView>

                {/* Cabeçalho */}
                <View style={styles.header}>

                    <Text style={styles.titulo}>
                        Perfil
                    </Text>

                    <Text style={styles.config}>
                        ⚙
                    </Text>

                </View>


                {/* Perfil */}
                <View style={styles.perfil}>

                    {/* Foto */}
                    <View style={styles.fotoContainer}>

                        <View style={styles.foto}>
                            <View style={styles.cabeca} />
                            <View style={styles.corpo} />
                        </View>

                    </View>


                    {/* Nome */}
                    <Text style={styles.nome}>
                        Késsia Milena
                    </Text>

                    <Text style={styles.usuario}>
                        @kessia.milena
                    </Text>


                    {/* Estatísticas */}
                    <View style={styles.estatisticas}>

                        <View style={styles.stat}>
                            <Text style={styles.numero}>
                                12
                            </Text>

                            <Text style={styles.label}>
                                Publicações
                            </Text>
                        </View>


                        <View style={styles.stat}>
                            <Text style={styles.numero}>
                                150
                            </Text>

                            <Text style={styles.label}>
                                Seguidores
                            </Text>
                        </View>


                        <View style={styles.stat}>
                            <Text style={styles.numero}>
                                80
                            </Text>

                            <Text style={styles.label}>
                                Seguindo
                            </Text>
                        </View>

                    </View>


                    {/* Bio */}
                    <Text style={styles.bio}>
                        Desenvolvedora e entusiasta de tecnologia.{"\n"}
                        Apaixonada por compartilhar conhecimento!
                    </Text>


                    {/* Botão */}
                    <TouchableOpacity
                        style={styles.botaoEditar}
                        onPress={() => router.navigate("/editarPerfil")}
                    >
                        <Text style={styles.textoBotao}>
                            ✎ Editar perfil
                        </Text>
                    </TouchableOpacity>

                </View>


                {/* Abas */}
                <View style={styles.abas}>

                    <TouchableOpacity
                        style={styles.abaAtiva}
                    >
                        <Text style={styles.iconeAba}>
                            ▦
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.aba}>
                        <Ionicons
                            name="bookmark-outline"
                            size={24}
                            color="#F5E6C8"
                        />
                    </TouchableOpacity>

                </View>


                {/* Publicações */}
                <View style={styles.publicacoes}>

                    <View style={styles.post}>
                        <Text style={styles.iconePost}>
                            ▧
                        </Text>
                    </View>

                    <View style={styles.post}>
                        <Text style={styles.iconePost}>
                            ▧
                        </Text>
                    </View>

                    <View style={styles.post}>
                        <Text style={styles.iconePost}>
                            ▧
                        </Text>
                    </View>

                    <View style={styles.post}>
                        <Text style={styles.iconePost}>
                            ▧
                        </Text>
                    </View>

                    <View style={styles.post}>
                        <Text style={styles.iconePost}>
                            ▧
                        </Text>
                    </View>

                    <View style={styles.post}>
                        <Text style={styles.iconePost}>
                            ▧
                        </Text>
                    </View>

                </View>

            </ScrollView>


            {/* =========================
                 MENU INFERIOR
             ========================== */}

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
                    style={styles.item}
                    onPress={() => router.replace("/feed")}
                    activeOpacity={0.7}
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
                    style={styles.itemAtivo}
                    activeOpacity={0.7}
                >

                    <Ionicons
                        name="person"
                        size={22}
                        color="#D4AF37"
                    />

                    <Text style={styles.textoMenuAtivo}>
                        Perfil
                    </Text>

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}