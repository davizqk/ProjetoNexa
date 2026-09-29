import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext.jsx";

export default function Layout() {
    return (
        <AuthProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: "#0B0B0C",
                    },
                }}
            />
        </AuthProvider>
    );
}