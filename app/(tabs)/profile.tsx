import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {

  const [opcao, setOpcao] = useState<"op1" | "op2" | "op3">("op1");

  const niveis: Record<"op1" | "op2" | "op3", any> = {
    op1: {
      nome: "Herói Novato",
      cor: ["#89CFF0", "#4EA8DE"],
      missoes: 5,
      medalha: require('@/assets/images/bronze.webp'),
    },
    op2: {
      nome: "Herói Intermediário",
      cor: ["#219ebc", "#126782"],
      missoes: 20,
      medalha: require('@/assets/images/prata.png'),
    },
    op3: {
      nome: "Herói Lendário",
      cor: ["#023047", "#001219"],
      missoes: 50,
      medalha: require('@/assets/images/ouro.png'),
    }
  };

  const ativo = niveis[opcao];

  function handleLogout() {
    Alert.alert("Sair da conta", "Deseja realmente sair?", [
      { text: "Cancelar", style: "cancel" },
      { 
        text: "Sair", 
        style: "destructive",
        onPress: () => router.replace("/login")
      }
    ]);
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
    >

      {/* ---- GRADIENT + HEADER ---- */}
      <View style={[styles.header, { backgroundColor: ativo.cor[0] }]}>

        {/* Avatar com glow */}
        <View style={styles.avatarGlow}>
          <Image 
            source={require('@/assets/images/nuvem.png')}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.name}>João Silva</Text>
        <Text style={styles.username}>@joaosilva</Text>

        <View style={styles.badgeCard}>
          <Image 
            source={ativo.medalha}
            style={{ width: 60, height: 60 }}
          />
          <Text style={styles.badgeText}>Nível atual: {ativo.nome}</Text>
        </View>
      </View>

      {/* ---- STATS ---- */}
      <View style={styles.statsCard}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{ativo.missoes}</Text>
          <Text style={styles.statLabel}>Missões</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Seguindo</Text>
        </View>
      </View>

      {/* ---- INFORMAÇÕES ---- */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Informações</Text>
        <Text style={styles.sectionItem}>📧 Email: joao@email.com</Text>
        <Text style={styles.sectionItem}>📍 Localização: São Paulo, SP</Text>

        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Categoria do Herói</Text>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={opcao}
            onValueChange={(value) => setOpcao(value as any)}
            dropdownIconColor="#fff"
            style={{ height: 50, color: "#fff" }}
          >
            <Picker.Item label="Herói Novato" value="op1" />
            <Picker.Item label="Herói Intermediário" value="op2" />
            <Picker.Item label="Herói Lendário" value="op3" />
          </Picker>
        </View>

        <Text style={styles.sectionSelected}>Selecionado: {ativo.nome}</Text>
      </View>

      {/* ---- BOTÕES ---- */}
      <View style={styles.buttonsContainer}>  
        <TouchableOpacity style={styles.button} onPress={() => router.push("/editar")}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/config")}>
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // Layout base
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  // HEADER -------------------
  header: {
    padding: 40,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },

  avatarGlow: {
    width: 140,
    height: 140,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff20",
    padding: 5,
    shadowColor: "#fff",
    shadowOpacity: 0.6,
    shadowRadius: 18,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    marginTop: 18,
  },

  username: {
    fontSize: 16,
    color: "#ffffff90",
    marginBottom: 10,
  },

  badgeCard: {
    marginTop: 12,
    backgroundColor: "#ffffff20",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    backdropFilter: "blur(5px)",
  },

  badgeText: {
    marginTop: 8,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  // STATS ---------------------
  statsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1e293b",
    marginHorizontal: 18,
    marginTop: -20,
    paddingVertical: 20,
    borderRadius: 16,
    elevation: 5,
  },

  stat: { alignItems: "center" },

  statNumber: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 13,
    color: "#94a3b8",
  },

  // INFO CARD ------------------------
  infoCard: {
    margin: 18,
    padding: 20,
    backgroundColor: "#1e293b",
    borderRadius: 16,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sectionItem: {
    color: "#cbd5e1",
    fontSize: 14,
    marginBottom: 6,
  },

  divider: {
    height: 1,
    backgroundColor: "#475569",
    marginVertical: 12,
  },

  pickerWrapper: {
    backgroundColor: "#334155",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
  },

  sectionSelected: {
    color: "#10b981",
    fontWeight: "bold",
    fontSize: 15,
  },

  // BUTTONS -------------------------
  buttonsContainer: {
    padding: 20,
    gap: 12,
  },

  button: {
    padding: 15,
    backgroundColor: "#334155",
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
  },

  logoutButton: {
    backgroundColor: "#ef4444",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
