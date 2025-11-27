import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Tabs } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const [waterIntake, setWaterIntake] = useState('');

  const allMissions = [
    {
      id: 1,
      title: 'A Fonte Seca',
      description: 'Beba 2L de água hoje para restaurar a fonte da vida.',
      xp: 100,
      type: 'hydration',
      duration: 'Diária',
      difficulty: 'Iniciante',
      rewards: ['+10 Vitalidade', '+100 XP'],
      image: require('../../assets/images/nuvem.png')
    },
    {
      id: 2,
      title: 'O Templo do Descanso',
      description: 'Durma 8 horas para recuperar suas energias mentais.',
      xp: 150,
      type: 'sleep',
      duration: 'Diária',
      difficulty: 'Intermediário',
      rewards: ['+15 Clareza Mental', '+150 XP'],
      image: require('../../assets/images/coraacao.png')
    },
    {
      id: 3,
      title: 'Os Jardins do Movimento',
      description: 'Caminhe 30 minutos para fortalecer corpo e mente.',
      xp: 120,
      type: 'activity',
      duration: 'Diária',
      difficulty: 'Iniciante',
      rewards: ['+12 Harmonia', '+120 XP'],
      image: require('../../assets/images/raio.png')
    }
  ];

  const characterStats = {
    vitality: 75,
    clarity: 60,
    harmony: 80,
    level: 3,
    xp: 450,
    nextLevel: 1000
  };

  const handleMissionSelect = (missionId: number) => {
    setSelectedMission(missionId);
    Alert.alert(
      "🎯 Missão Selecionada!",
      "Acesse a aba 'Missões' para ver detalhes completos e iniciar sua jornada!",
      [
        { 
          text: "Ver Missões", 
          onPress: () => router.push('/missions') 
        },
        { text: "Ficar Aqui" }
      ]
    );
  };

  const handleWaterTracking = () => {
    if (!waterIntake) {
      Alert.alert("💧 Registro de Água", "Por favor, digite quantos ml de água você bebeu.");
      return;
    }
    
    const ml = parseInt(waterIntake);
    if (ml < 0) {
      Alert.alert("❌ Valor Inválido", "Por favor, digite um valor positivo.");
      return;
    }

    Alert.alert(
      "✅ Água Registrada!",
      `Você registrou ${ml}ml de água hoje!\nContinue hidratado para ganhar bônus de Vitalidade!`,
      [{ text: "Ótimo!" }]
    );
    setWaterIntake('');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image 
            source={require('@/assets/images/boneco.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>DuoHealth</Text>
            <Text style={styles.headerSubtitle}>RPG de Bem-Estar</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Nível {characterStats.level}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* STATUS */}
      <View style={styles.statsCard}>
        <Text style={styles.cardTitle}>Status do Herói</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCircle}>
            <Text style={styles.statNumber}>{characterStats.vitality}%</Text>
            <Text style={styles.statLabel}>Vitalidade</Text>
          </View>
          <View style={styles.statCircle}>
            <Text style={styles.statNumber}>{characterStats.clarity}%</Text>
            <Text style={styles.statLabel}>Clareza</Text>
          </View>
          <View style={styles.statCircle}>
            <Text style={styles.statNumber}>{characterStats.harmony}%</Text>
            <Text style={styles.statLabel}>Harmonia</Text>
          </View>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Progresso para o Próximo Nível</Text>
            <Text style={styles.progressText}>
              {characterStats.xp} / {characterStats.nextLevel} XP
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${(characterStats.xp / characterStats.nextLevel) * 100}%` }
              ]} 
            />
          </View>
        </View>
      </View>

      {/* REGISTRO DE ÁGUA */}
      <View style={styles.inputCard}>
        <Text style={styles.cardTitle}>💧 Registro de Hidratação</Text>
        <Text style={styles.inputDescription}>Quantos ml de água você bebeu hoje?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ex: 500, 1000, 2000"
          value={waterIntake}
          onChangeText={setWaterIntake}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
        <TouchableOpacity 
          style={styles.recordButton}
          onPress={handleWaterTracking}
        >
          <Text style={styles.recordButtonText}>Registrar Consumo</Text>
        </TouchableOpacity>
      </View>

      {/* MISSÕES DESTAQUE */}
      <View style={styles.missionsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Missões em Destaque</Text>
          <TouchableOpacity onPress={() => router.push('/missions')}>
            <Text style={styles.seeAllText}>Ver Todas →</Text>
          </TouchableOpacity>
        </View>

        {allMissions.map((mission) => (
          <TouchableOpacity 
            key={mission.id}
            style={[
              styles.missionCard,
              selectedMission === mission.id && styles.missionCardSelected
            ]}
            onPress={() => handleMissionSelect(mission.id)}
          >
          <View style={styles.missionIcon}>
  <Image
    source={
      mission.type === 'hydration'
        ? require('../../assets/images/nuvem.png')
        : mission.type === 'sleep'
        ? require('../../assets/images/coraacao.png')
        : mission.type === 'activity'
        ? require('../../assets/images/raio.png')
        : require('../../assets/images/nuvem.png') // imagem padrão
    }
    style={styles.missionImage}
    resizeMode="contain"
  />
</View>


            <View style={styles.missionContent}>
              <Text style={styles.missionTitle}>{mission.title}</Text>
              <Text style={styles.missionDescription}>{mission.description}</Text>
              <View style={styles.missionFooter}>
                <View style={styles.xpBadge}>
                  <Text style={styles.xpText}>+{mission.xp} XP</Text>
                </View>
                <Text style={styles.attributeBadge}>{mission.duration}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* AÇÕES RÁPIDAS */}
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionEmoji}>📊</Text>
            <Text style={styles.actionText}>Progresso</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => router.push('/missions')}
          >
            <Text style={styles.actionEmoji}>🎯</Text>
            <Text style={styles.actionText}>Missões</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionEmoji}>🏆</Text>
            <Text style={styles.actionText}>Conquistas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionEmoji}>⚙️</Text>
            <Text style={styles.actionText}>Config</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#2E86AB',
    paddingVertical: 30,
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 10,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E3F2FD',
    opacity: 0.9,
    marginBottom: 12,
  },
  levelBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  levelText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: -20,
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
    marginBottom: 20,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  statCircle: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E86AB',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  progressSection: {
    marginTop: 10,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  progressText: {
    fontSize: 14,
    color: '#2E86AB',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2E86AB',
    borderRadius: 5,
  },
  inputCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: 10,
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  inputDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  textInput: {
    backgroundColor: '#F8F9FA',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  recordButton: {
    backgroundColor: '#2E86AB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  recordButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  missionsSection: {
    margin: 20,
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E86AB',
  },
  seeAllText: {
    fontSize: 14,
    color: '#2E86AB',
    fontWeight: '600',
  },
  missionCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  missionCardSelected: {
    borderColor: '#2E86AB',
    backgroundColor: '#F0F8FF',
  },
  missionIcon: {
  width: 56,
  height: 56,
  borderRadius: 14,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 12,
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.08,
  shadowRadius: 6,
  elevation: 2,
},
missionImage: {
  width: 36,
  height: 36,
},
  missionEmoji: {
    fontSize: 32,
  },
  missionContent: {
    flex: 1,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  missionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  missionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  xpBadge: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  xpText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  attributeBadge: {
    fontSize: 12,
    color: '#2E86AB',
    fontWeight: '600',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  quickActions: {
    margin: 20,
    marginTop: 10,
    marginBottom: 40,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E86AB',
    textAlign: 'center',
  },

});