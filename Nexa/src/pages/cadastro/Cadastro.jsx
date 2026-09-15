import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './CadastroStyle';

export default function Cadastro() {

    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Controle de foco dos campos
    const [isNomeFocused, setIsNomeFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isSenhaFocused, setIsSenhaFocused] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    <Text style={styles.title}>Cadastro</Text>

                    {/* Nome Completo */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <View
                            style={[
                                styles.inputContainer,
                                isNomeFocused && styles.inputContainerFocused,
                            ]}
                        >
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu nome completo"
                                placeholderTextColor="#9CA3AF"
                                value={nome}
                                onChangeText={setNome}
                                autoCapitalize="words"
                                underlineColorAndroid="transparent"
                                onFocus={() => setIsNomeFocused(true)}
                                onBlur={() => setIsNomeFocused(false)}
                            />
                        </View>
                    </View>

                    {/* E-mail */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>E-mail</Text>
                        <View
                            style={[
                                styles.inputContainer,
                                isEmailFocused && styles.inputContainerFocused,
                            ]}
                        >
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu e-mail"
                                placeholderTextColor="#9CA3AF"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}
                            />
                        </View>
                    </View>

                    {/* Senha */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Senha</Text>
                        <View
                            style={[
                                styles.inputContainer,
                                isSenhaFocused && styles.inputContainerFocused,
                            ]}
                        >
                            <TextInput
                                style={styles.input}
                                placeholder="Digite sua senha"
                                placeholderTextColor="#9CA3AF"
                                secureTextEntry={!showPassword}
                                value={senha}
                                onChangeText={setSenha}
                                underlineColorAndroid="transparent"
                                onFocus={() => setIsSenhaFocused(true)}
                                onBlur={() => setIsSenhaFocused(false)}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    size={20}
                                    color="#6B7280"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Botão Criar Conta */}
                    <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                        <Text style={styles.actionButtonText}>Criar conta</Text>
                    </TouchableOpacity>

                    {/* Rodapé - Já tem uma conta? Entrar */}
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>
                            Já tem uma conta?
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => router.push("/login")}
                        >
                            <Text style={styles.linkText}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
