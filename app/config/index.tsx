import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function ConfigScreen() {
  const router = useRouter();
  const [notificacoes, setNotificacoes] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(false);

  return (
    <View style={styles.container}>

      {/* BOTÃO DE VOLTAR */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push("/(tabs)/profile")}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Configurações</Text>

      {/* Notificações */}
      <View style={styles.option}>
        <Text style={styles.label}>Notificações</Text>
        <Switch
          value={notificacoes}
          onValueChange={setNotificacoes}
          thumbColor="#fff"
          trackColor={{ false: "#8ecae6", true: "#023047" }}
        />
      </View>

      {/* Tema Escuro */}
      <View style={styles.option}>
        <Text style={styles.label}>Modo Escuro</Text>
        <Switch
          value={modoEscuro}
          onValueChange={setModoEscuro}
          thumbColor="#fff"
          trackColor={{ false: "#8ecae6", true: "#023047" }}
        />
      </View>

      {/* Editar Perfil */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/editar")}
      >
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Sair */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#d62828" }]}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#219ebc",
    padding: 20,
    paddingTop: 60,
  },

  backButton: {
    marginBottom: 20,
    backgroundColor: "#ffffff30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 120,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },

  option: {
    backgroundColor: "#8ecae6",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    color: "#023047",
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#023047",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
