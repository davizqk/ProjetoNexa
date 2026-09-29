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

    const [comentario, setComentario] = useState("");
    const [curtido, setCurtido] = useState(false);
    const [salvo, setSalvo] = useState(false);

    function enviarComentario() {

        if (comentario.trim() === "") {
            return;
        }

        console.log("Comentário:", comentario);

        setComentario("");
    }

    return (
        <SafeAreaView style={styles.container}>

            {/* =========================
                HEADER
            ========================== */}

            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.botaoVoltar}
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color="#F5E6C8"
                    />
                </TouchableOpacity>

                <Text style={styles.titulo}>
                    Publicação
                </Text>

                <TouchableOpacity style={styles.botaoMais}>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={22}
                        color="#F5E6C8"
                    />
                </TouchableOpacity>

            </View>


            {/* =========================
                CONTEÚDO
            ========================== */}

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >

                {/* =========================
                    AUTOR
                ========================== */}

                <View style={styles.autorContainer}>

                    <View style={styles.avatar}>

                        <Ionicons
                            name="person"
                            size={25}
                            color="#D4AF37"
                        />

                    </View>

                    <View style={styles.autorInfo}>

                        <Text style={styles.nomeAutor}>
                            Paulozsk
                        </Text>

                        <Text style={styles.dataPublicacao}>
                            Hoje às 10:30
                        </Text>

                    </View>

                </View>


                {/* =========================
                    TEXTO
                ========================== */}

                <Text style={styles.textoPublicacao}>
                    Aprendendo React Native e Expo Router! 🚀
                    {"\n\n"}
                    Está sendo muito interessante desenvolver
                    esse projeto com React Native.
                </Text>


                {/* =========================
                    ÁREA DA IMAGEM
                ========================== */}

                <View style={styles.imagem}>

                    <Ionicons
                        name="image-outline"
                        size={55}
                        color="#3B3C41"
                    />

                    <Text style={styles.imagemTexto}>
                        Imagem da publicação
                    </Text>

                </View>


                {/* =========================
                    AÇÕES
                ========================== */}

                <View style={styles.acoes}>

                    {/* CURTIR */}

                    <TouchableOpacity
                        style={styles.acao}
                        onPress={() => setCurtido(!curtido)}
                        activeOpacity={0.7}
                    >

                        <Ionicons
                            name={
                                curtido
                                    ? "heart"
                                    : "heart-outline"
                            }
                            size={24}
                            color={
                                curtido
                                    ? "#D4AF37"
                                    : "#F5E6C8"
                            }
                        />

                        <Text style={styles.numeroAcao}>
                            {curtido ? "26" : "25"}
                        </Text>

                    </TouchableOpacity>


                    {/* COMENTÁRIOS */}

                    <TouchableOpacity
                        style={styles.acao}
                        activeOpacity={0.7}
                    >

                        <Ionicons
                            name="chatbubble-outline"
                            size={22}
                            color="#F5E6C8"
                        />

                        <Text style={styles.numeroAcao}>
                            4
                        </Text>

                    </TouchableOpacity>


                    {/* COMPARTILHAR */}

                    {/* <TouchableOpacity
                        style={styles.acao}
                        activeOpacity={0.7}
                    >

                        <Ionicons
                            name="paper-plane-outline"
                            size={23}
                            color="#F5E6C8"
                        />

                    </TouchableOpacity> */}


                    {/* SALVAR */}

                    <TouchableOpacity
                        style={styles.acaoSalvar}
                        onPress={() => setSalvo(!salvo)}
                        activeOpacity={0.7}
                    >

                        <Ionicons
                            name={
                                salvo
                                    ? "bookmark"
                                    : "bookmark-outline"
                            }
                            size={23}
                            color={
                                salvo
                                    ? "#D4AF37"
                                    : "#F5E6C8"
                            }
                        />

                    </TouchableOpacity>

                </View>


                {/* =========================
                    CURTIDAS
                ========================== */}

                <Text style={styles.curtidas}>
                    {curtido ? "26" : "25"} curtidas
                </Text>


                {/* =========================
                    DIVISOR
                ========================== */}

                <View style={styles.divisor} />


                {/* =========================
                    COMENTÁRIOS
                ========================== */}

                <Text style={styles.tituloComentarios}>
                    Comentários
                </Text>


                {/* COMENTÁRIO 1 */}

                <View style={styles.comentarioContainer}>

                    <View style={styles.avatarComentario}>

                        <Ionicons
                            name="person"
                            size={18}
                            color="#D4AF37"
                        />

                    </View>

                    <View style={styles.comentarioConteudo}>

                        <Text style={styles.comentarioTexto}>

                            <Text style={styles.comentarioNome}>
                                davizqk
                            </Text>

                            {" Muito bom! 🚀"}

                        </Text>

                        <Text style={styles.comentarioTempo}>
                            Há 15 minutos
                        </Text>

                    </View>

                </View>


                {/* COMENTÁRIO 2 */}

                <View style={styles.comentarioContainer}>

                    <View style={styles.avatarComentario}>

                        <Ionicons
                            name="person"
                            size={18}
                            color="#D4AF37"
                        />

                    </View>

                    <View style={styles.comentarioConteudo}>

                        <Text style={styles.comentarioTexto}>

                            <Text style={styles.comentarioNome}>
                                Maria
                            </Text>

                            {" Ficou muito legal!"}

                        </Text>

                        <Text style={styles.comentarioTempo}>
                            Há 8 minutos
                        </Text>

                    </View>

                </View>


                {/* COMENTÁRIO 3 */}

                <View style={styles.comentarioContainer}>

                    <View style={styles.avatarComentario}>

                        <Ionicons
                            name="person"
                            size={18}
                            color="#D4AF37"
                        />

                    </View>

                    <View style={styles.comentarioConteudo}>

                        <Text style={styles.comentarioTexto}>

                            <Text style={styles.comentarioNome}>
                                João
                            </Text>

                            {" Também estou aprendendo!"}

                        </Text>

                        <Text style={styles.comentarioTempo}>
                            Há 5 minutos
                        </Text>

                    </View>

                </View>


                {/* ESPAÇO */}

                <View style={styles.espacoFinal} />

            </ScrollView>


            {/* =========================
                CAMPO DE COMENTÁRIO
            ========================== */}

            <View style={styles.comentarContainer}>

                <TextInput
                    style={styles.comentarInput}
                    value={comentario}
                    onChangeText={setComentario}
                    placeholder="Adicione um comentário..."
                    placeholderTextColor="#3B3C41"
                />

                <TouchableOpacity
                    style={styles.botaoEnviar}
                    onPress={enviarComentario}
                    activeOpacity={0.7}
                >

                    <Ionicons
                        name="send"
                        size={20}
                        color="#D4AF37"
                    />

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}