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

import styles from "./DetalhePubliStyle";

export default function DetalhePubli() {

    const router = useRouter();

    const [curtido, setCurtido] = useState(false);
    const [comentario, setComentario] = useState("");

    const [comentarios, setComentarios] = useState([
        {
            id: 1,
            nome: "davizqk",
            texto: "Muito bom! Continue assim 🚀",
            horario: "11:02",
        },
    ]);

    function handleComentar() {

        if (comentario.trim() === "") {
            return;
        }

        const novoComentario = {
            id: Date.now(),
            nome: "Késsia Milena",
            texto: comentario,
            horario: "Agora",
        };

        setComentarios((comentariosAtuais) => [
            ...comentariosAtuais,
            novoComentario,
        ]);

        setComentario("");
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
                        name="chevron-back"
                        size={22}
                        color="#F5E6C8"
                    />
                </TouchableOpacity>

                <Text style={styles.titulo}>
                    Publicação
                </Text>

                <TouchableOpacity
                    style={styles.botaoNotificacao}
                    onPress={() => router.push("/notificacoes")}
                >
                    <Ionicons
                        name="notifications-outline"
                        size={22}
                        color="#F5E6C8"
                    />
                </TouchableOpacity>

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
                            size={17}
                            color="#D4AF37"
                        />

                    </View>

                    <View style={styles.informacoesUsuario}>

                        <Text style={styles.nome}>
                            Paulozqk3
                        </Text>

                        <Text style={styles.data}>
                            Hoje às 10:30
                        </Text>

                    </View>

                </View>


                {/* TEXTO DA PUBLICAÇÃO */}

                <View style={styles.textoContainer}>

                    <Text style={styles.textoPublicacao}>
                        Aprendendo React Native e Expo Router!
                    </Text>

                    <Text style={styles.subTexto}>
                        Muito animado com o resultado do projeto.
                    </Text>

                </View>


                {/* IMAGEM DA PUBLICAÇÃO */}

                <View style={styles.imagemContainer}>

                    <View style={styles.imagemNotebook}>

                        <View style={styles.telaNotebook}>

                            <View style={styles.linhaDourada} />

                            <View style={styles.linhaTexto1} />

                            <View style={styles.linhaTexto2} />

                        </View>

                    </View>

                    <View style={styles.baseNotebook} />

                </View>


                {/* CURTIDAS E COMENTÁRIOS */}

                <View style={styles.acoes}>

                    <TouchableOpacity
                        style={styles.acao}
                        onPress={() => setCurtido(!curtido)}
                    >

                        <Ionicons
                            name={curtido ? "heart" : "heart-outline"}
                            size={21}
                            color={curtido ? "#D4AF37" : "#3B3C41"}
                        />

                        <Text style={styles.numeroAcao}>
                            {curtido ? 26 : 25}
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.acao}>

                        <Ionicons
                            name="chatbubble-outline"
                            size={20}
                            color="#3B3C41"
                        />

                        <Text style={styles.numeroAcao}>
                            {comentarios.length + 4}
                        </Text>

                    </TouchableOpacity>

                </View>


                {/* DIVISÓRIA */}

                <View style={styles.divisoria} />


                {/* COMENTÁRIOS */}

                <Text style={styles.tituloComentarios}>
                    Comentários
                </Text>


                {comentarios.map((item) => (

                    <View
                        key={item.id}
                        style={styles.comentario}
                    >

                        <View style={styles.avatarComentario}>

                            <Ionicons
                                name="person"
                                size={16}
                                color="#D4AF37"
                            />

                        </View>


                        <View style={styles.conteudoComentario}>

                            <Text style={styles.nomeComentario}>
                                {item.nome}
                            </Text>

                            <Text style={styles.textoComentario}>
                                {item.texto}
                            </Text>

                        </View>


                        <Text style={styles.horarioComentario}>
                            {item.horario}
                        </Text>

                    </View>

                ))}


                {/* CAMPO DE COMENTÁRIO */}

                <View style={styles.areaComentario}>

                    <TextInput
                        style={styles.inputComentario}
                        value={comentario}
                        onChangeText={setComentario}
                        placeholder="Escreva um comentário..."
                        placeholderTextColor="#5A5A60"
                        multiline
                    />

                    <TouchableOpacity
                        style={styles.botaoEnviar}
                        onPress={handleComentar}
                    >

                        <Ionicons
                            name="send"
                            size={17}
                            color="#D4AF37"
                        />

                    </TouchableOpacity>

                </View>

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
                    style={styles.item}
                    onPress={() => router.push("/publicacao")}
                >

                    <Ionicons
                        name="add"
                        size={25}
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