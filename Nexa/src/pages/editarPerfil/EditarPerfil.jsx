import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";
import styles from "./EditarPerfilStyle";

export default function EditarPerfil() {

    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [bio, setBio] = useState("");
    const router = useRouter();

    const { nomeUsuario, atualizarPerfil } = useAuth();

    async function handleSalvar() {
        const resultado = await atualizarPerfil({
            nome,
            usuario: nomeUsuario,
            bio,
        });

        alert(resultado.mensagem);

        if (resultado.sucesso) {
            router.back();
        }
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
        >

            <View style={styles.container}>

                {/* Cabeçalho */}
                <View style={styles.header}>

                    <Text style={styles.titulo}>
                        Editar perfil
                    </Text>

                    <View style={styles.espaco} />

                </View>


                {/* Foto de perfil */}
                <View style={styles.fotoContainer}>

                    <View style={styles.foto}>
                        <View style={styles.cabeca} />
                        <View style={styles.corpo} />
                    </View>

                    <TouchableOpacity
                        style={styles.trocarFoto}
                    >
                        <Text style={styles.trocarFotoTexto}>
                            Alterar foto
                        </Text>
                    </TouchableOpacity>

                </View>


                {/* Nome */}
                <View style={styles.campoContainer}>

                    <Text style={styles.label}>
                        Nome
                    </Text>

                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Digite seu nome"
                        placeholderTextColor="#3B3C41"
                    />

                </View>


                {/* Usuário */}
                <View style={styles.campoContainer}>

                    <Text style={styles.label}>
                        Usuário
                    </Text>

                    <TextInput
                        style={styles.input}
                        value={usuario}
                        onChangeText={setUsuario}
                        placeholder="@seuusuario"
                        placeholderTextColor="#3B3C41"
                        autoCapitalize="none"
                    />

                </View>


                {/* Bio */}
                <View style={styles.campoContainer}>

                    <Text style={styles.label}>
                        Biografia
                    </Text>

                    <TextInput
                        style={styles.inputBio}
                        value={bio}
                        onChangeText={setBio}
                        placeholder="Digite sua biografia"
                        placeholderTextColor="#3B3C41"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />

                </View>


                {/* Botão salvar */}
                <TouchableOpacity
                    style={styles.botaoSalvar}
                    onPress={salvarAlteracoes}
                >

                    <Text style={styles.textoSalvar}>
                        Salvar alterações
                    </Text>

                </TouchableOpacity>


                {/* Botão cancelar */}
                <TouchableOpacity
                    style={styles.botaoCancelar}
                    onPress={() => router.back()}
                >
                    <Text style={styles.textoCancelar}>
                        Cancelar
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}