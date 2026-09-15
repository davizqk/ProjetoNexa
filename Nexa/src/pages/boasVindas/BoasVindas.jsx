import React from "react";
import {
    View,
    Text,
    Image,  
    TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import styles from "./BoasVindasStyle";

export default function BoasVindas() {

    const router = useRouter();

    function entrar() {
        router.navigate("/login");
    }

    function criarConta() {
        router.navigate("/cadastro");
    }

    return (
        <View style={styles.container}>

            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/images/logo-nexa.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>


            {/* Conteúdo */}
            <View style={styles.conteudo}>

                <Text style={styles.titulo}>
                    NEXA
                </Text>

                <Text style={styles.subtitulo}>
                    Conecte-se com pessoas{"\n"}
                    e compartilhe momentos.
                </Text>

            </View>


            {/* Botões */}
            <View style={styles.botoes}>

                <TouchableOpacity
                    style={styles.botaoEntrar}
                    onPress={entrar}
                >
                    <Text style={styles.textoEntrar}>
                        Entrar
                    </Text>
                </TouchableOpacity>


                <Text style={styles.ou}>
                    ou
                </Text>


                <TouchableOpacity
                    style={styles.botaoCriar}
                    onPress={criarConta}
                >
                    <Text style={styles.textoCriar}>
                        Criar conta
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}