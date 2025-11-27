import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProgressScreen() {
  const missoesFeitas = 12;
  const missoesMeta = 50;

  const progresso = missoesFeitas / missoesMeta;
  const porcentagem = Math.round(progresso * 100);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📊 Progresso do Herói</Text>
        <Text style={styles.headerSubtitle}>Acompanhe sua evolução na jornada</Text>
      </View>

      {/* CARD DO PROGRESSO */}
      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>Progresso Geral</Text>

        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Missões Concluídas</Text>
            <Text style={styles.progressText}>{missoesFeitas} / {missoesMeta}</Text>
          </View>

          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${porcentagem}%` }
              ]}
            />
          </View>

          <Text style={styles.percentText}>{porcentagem}% Completo</Text>
        </View>
      </View>

      {/* CARD DO NÍVEL */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Próximo Nível</Text>
        <Text style={styles.cardValue}>🏆 Lendário (50 missões)</Text>
      </View>

      {/* CARD DE DICAS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dicas para subir de nível</Text>
        <Text style={styles.cardText}>• Complete missões diárias</Text>
        <Text style={styles.cardText}>• Ajude outros usuários</Text>
        <Text style={styles.cardText}>• Participe de eventos semanais</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  // HEADER
  header: {
    backgroundColor: '#2E86AB',
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#E3F2FD',
    opacity: 0.9,
  },

  // PROGRESSO
  progressCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: -15,
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E86AB',
    marginBottom: 18,
    textAlign: 'center',
  },
  progressSection: {
    marginTop: 5,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 15,
    color: '#666',
    fontWeight: '600',
  },
  progressText: {
    fontSize: 15,
    color: '#2E86AB',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2E86AB',
  },
  percentText: {
    textAlign: 'center',
    color: '#2E86AB',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // CARDS
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardValue: {
    color: '#2E86AB',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardText: {
    color: '#666',
    fontSize: 15,
    marginBottom: 6,
  },
});
