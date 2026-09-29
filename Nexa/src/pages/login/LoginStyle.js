import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#121316",
        width: "100%",
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    card: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#1C1D22",
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: "#EAB308",
        padding: 24,
        shadowColor: "#EAB308",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 18,
        elevation: 15,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 8,
    },
    inputContainer: {
        width: "100%",
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "transparent",
        paddingHorizontal: 12,
    },
    inputContainerFocused: {
        borderColor: "#EAB308",
    },
    input: {
        flex: 1,
        height: 46,
        color: "#1C1D22",
        fontSize: 14,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    passwordButton: {
        padding: 5,
    },
    forgotPasswordText: {
        color: "#EAB308",
        fontSize: 12,
        fontWeight: "600",
        marginTop: 4,
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: "#0B0B0D",
        borderRadius: 8,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 14,
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#383A42",
    },
    dividerText: {
        color: "#8A8D9B",
        paddingHorizontal: 10,
        fontSize: 12,
    },
    googleButton: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
    },
    googleIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    googleButtonText: {
        color: "#1C1D22",
        fontWeight: "bold",
        fontSize: 14,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        color: "#8A8D9B",
        fontSize: 13,
    },
    signUpText: {
        color: "#2563EB",
        fontWeight: "bold",
        fontSize: 13,
    },
});