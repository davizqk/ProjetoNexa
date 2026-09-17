import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// IMPORT CORRIGIDO
import styles from "./CriarPublicaoStyle";

export default function CriarPublicacao() {

    const router = useRouter();

    const [texto, setTexto] = useState("");

    function handlePublicar() {

        if (texto.trim() === "") {
            return;
        }

        console.log("Nova publicação:", texto);

        router.replace("/feed");
    }

    return (

        <SafeAreaView style={styles.container}>

            {/* CABEÇALHO */}

            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.botaoVoltar}
                    onPress={() => router.back()}
                >

                    <Ionicons
                        name="close"
                        size={25}
                        color="#F5E6C8"
                    />

                </TouchableOpacity>

                <Text style={styles.titulo}>
                    Nova publicação
                </Text>

                <View style={styles.headerVazio} />

            </View>


            {/* CONTEÚDO */}

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.conteudo}
                showsVerticalScrollIndicator={false}
            >

                {/* USUÁRIO */}

                <View style={styles.usuario}>

                    <View style={styles.avatar}>

                        <Ionicons
                            name="person"
                            size={26}
                            color="#D4AF37"
                        />

                    </View>

                    <View>

                        <Text style={styles.nome}>
                            Késsia Milena
                        </Text>

                        <Text style={styles.username}>
                            @kessia.milena
                        </Text>

                    </View>

                </View>


                {/* TEXTO */}

                <TextInput
                    style={styles.input}
                    value={texto}
                    onChangeText={setTexto}
                    placeholder="O que você está pensando?"
                    placeholderTextColor="#3B3C41"
                    multiline
                    maxLength={280}
                    textAlignVertical="top"
                />

                <Text style={styles.contador}>
                    {texto.length}/280
                </Text>


                {/* OPÇÕES */}

                <View style={styles.opcoes}>

                    <TouchableOpacity style={styles.opcao}>

                        <Ionicons
                            name="image-outline"
                            size={22}
                            color="#D4AF37"
                        />

                        <Text style={styles.opcaoTexto}>
                            Imagem
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.opcao}>

                        <Ionicons
                            name="location-outline"
                            size={22}
                            color="#D4AF37"
                        />

                        <Text style={styles.opcaoTexto}>
                            Localização
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.opcao}>

                        <Ionicons
                            name="happy-outline"
                            size={22}
                            color="#D4AF37"
                        />

                        <Text style={styles.opcaoTexto}>
                            Sentimento
                        </Text>

                    </TouchableOpacity>

                </View>


                {/* BOTÃO PUBLICAR */}

                <TouchableOpacity
                    style={[
                        styles.botao,
                        texto.trim() === "" && styles.botaoDesativado,
                    ]}
                    onPress={handlePublicar}
                    disabled={texto.trim() === ""}
                >

                    <Text style={styles.textoBotao}>
                        Publicar
                    </Text>

                </TouchableOpacity>

            </ScrollView>


            {/* MENU INFERIOR */}

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
                    style={styles.itemAtivo}
                >

                    <Ionicons
                        name="add-circle"
                        size={22}
                        color="#D4AF37"
                    />

                    <Text style={styles.textoMenuAtivo}>
                        Criar
                    </Text>

                </TouchableOpacity>


                {/* NOTIFICAÇÕES */}

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => router.push("/notificacoes")}
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