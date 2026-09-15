import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './LoginStyle';

export default function Login() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Estados para controlar o foco dos inputs
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSenhaFocused, setIsSenhaFocused] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Text style={styles.title}>Login</Text>

            {/* E-mail */}
            <View style={styles.inputGroup}>

              <Text style={styles.label}>
                E-mail
              </Text>

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
                  autoCorrect={false}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />

              </View>

            </View>

            {/* Senha */}
            <View style={styles.inputGroup}>

              <Text style={styles.label}>
                Senha
              </Text>

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
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onFocus={() => setIsSenhaFocused(true)}
                  onBlur={() => setIsSenhaFocused(false)}
                />

                <TouchableOpacity
                  style={styles.passwordButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={
                      showPassword
                        ? "eye-outline"
                        : "eye-off-outline"
                    }
                    size={20}
                    color="#6B7280"
                  />
                </TouchableOpacity>

              </View>

            </View>

            {/* Esqueceu a senha */}
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            {/* Botão Entrar */}
            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              onPress={() => router.replace("/feed")}
            >
              <Text style={styles.loginButtonText}>
                Entrar
              </Text>
            </TouchableOpacity>

            {/* Divisor "ou" */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Botão Google */}
            <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
                }}
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}>Entrar com Google</Text>
            </TouchableOpacity>

            {/* Rodapé - Criar Conta */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                Não tem uma conta?{" "}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push("/cadastro")}
              >
                <Text style={styles.signUpText}>
                  Criar conta
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}