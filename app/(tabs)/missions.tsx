import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Tipos
type Mission = {
  id: number;
  title: string;
  description: string;
  xp: number;
  type: string;
  duration: string;
  difficulty: string;
  rewards: string[];
  image: any;
};


// Card de Missão
const MissionCard: React.FC<{
  mission: Mission;
  status: string;
  onStartMission: (id: number) => void;
  onCompleteMission: (id: number) => void;
}> = ({ mission, status, onStartMission, onCompleteMission }) => (
  <View
    style={[
      styles.missionCard,
      status === 'active' && styles.missionCardActive,
      status === 'completed' && styles.missionCardCompleted
    ]}
  >
    {/* Cabeçalho */}
    <View style={styles.missionHeader}>
      <View style={styles.titleContainer}>
        <Image source={mission.image} style={styles.missionIcon} resizeMode="contain" />
        <Text style={styles.missionTitle}>{mission.title}</Text>
      </View>
      <View
        style={[
          styles.statusBadge,
          status === 'active' && styles.statusBadgeActive,
          status === 'completed' && styles.statusBadgeCompleted
        ]}
      >

        <Text style={styles.statusText}>
          {status === 'completed' ? '🏆' : status === 'active' ? '⚔️' : '🕹️'}
        </Text>
      </View>
    </View>

    {/* Descrição */}
    <Text style={styles.missionDescription}>{mission.description}</Text>

    {/* Informações */}
    <View style={styles.missionMeta}>
      <View style={styles.metaItem}>
        <Text style={styles.metaLabel}>⏳ Duração</Text>
        <Text style={styles.metaValue}>{mission.duration}</Text>
      </View>
      <View style={styles.metaItem}>
        <Text style={styles.metaLabel}>🔥 Dificuldade</Text>
        <Text
          style={[
            styles.metaValue,
            mission.difficulty === 'Iniciante' && { color: '#7EE081' },
            mission.difficulty === 'Intermediário' && { color: '#FFC857' },
            mission.difficulty === 'Avançado' && { color: '#FF6B6B' }
          ]}
        >
          {mission.difficulty}
        </Text>
      </View>
      <View style={styles.metaItem}>
        <Text style={styles.metaLabel}>⭐ XP</Text>
        <Text style={[styles.metaValue, { color: '#FFD700' }]}>+{mission.xp}</Text>
      </View>
    </View>

    {/* Recompensas */}
    <View style={styles.rewardsSection}>
      <Text style={styles.rewardsTitle}>🎁 Recompensas</Text>
      <View style={styles.rewardsList}>
        {mission.rewards.map((reward, index) => (
          <Text key={index} style={styles.rewardItem}>
            • {reward}
          </Text>
        ))}
      </View>
    </View>

    {/* Ações */}
    <View style={styles.missionActions}>
      {status === 'available' && (
        <TouchableOpacity style={styles.startButton} onPress={() => onStartMission(mission.id)}>
          <Text style={styles.startButtonText}>Iniciar Missão</Text>
        </TouchableOpacity>
      )}
      {status === 'active' && (
        <TouchableOpacity style={styles.completeButton} onPress={() => onCompleteMission(mission.id)}>
          <Text style={styles.completeButtonText}>Concluir Missão</Text>
        </TouchableOpacity>
      )}
      {status === 'completed' && (
        <View style={styles.completedBadge}>
          <Text style={styles.completedText}>Missão Concluída 🏅</Text>
        </View>
      )}
    </View>
  </View>
);

export default function MissionsScreen() {
  const [activeMissions, setActiveMissions] = useState<number[]>([1]);
  const [completedMissions, setCompletedMissions] = useState<number[]>([3]);

  const allMissions: Mission[] = [
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

  const handleStartMission = (missionId: number) => {
    if (!activeMissions.includes(missionId)) {
      setActiveMissions([...activeMissions, missionId]);
      Alert.alert('Missão Iniciada 🚀', 'Boa sorte, aventureiro!');
    }
  };

  const handleCompleteMission = (missionId: number) => {
    setActiveMissions(activeMissions.filter(id => id !== missionId));
    setCompletedMissions([...completedMissions, missionId]);
    Alert.alert('Missão Concluída 🎉', 'Você ganhou XP e recompensas!');
  };

  const getMissionStatus = (missionId: number): string => {
    if (completedMissions.includes(missionId)) return 'completed';
    if (activeMissions.includes(missionId)) return 'active';
    return 'available';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Missões Diárias</Text>
        <Text style={styles.headerSubtitle}>Complete desafios e ganhe XP!</Text>
      </View>

      <View style={styles.missionsContainer}>
        {allMissions.map(mission => (
          <MissionCard
            key={mission.id}
            mission={mission}
            status={getMissionStatus(mission.id)}
            onStartMission={handleStartMission}
            onCompleteMission={handleCompleteMission}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA'
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#373737ff'
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#373737ff',
    marginTop: 5
  },
  missionsContainer: {
    padding: 16
  },
  missionCard: {
    backgroundColor: '#414141ff',
    borderWidth: 1,
    borderColor: '#000000ff',
    borderRadius: 16,
    marginBottom: 18,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4
  },
  missionCardActive: {
    borderColor: '#3498DB',
    backgroundColor: '#17202A'
  },
  missionCardCompleted: {
    borderColor: '#27AE60',
    backgroundColor: '#0E2014'
  },
  missionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  missionIcon: {
    width: 36,
    height: 36,
    marginRight: 10
  },
  missionTitle: {
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: '700'
  },
  statusBadge: {
    backgroundColor: '#2E4053',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  statusBadgeActive: {
    backgroundColor: '#5f5f5fff'
  },
  statusBadgeCompleted: {
    backgroundColor: '#27AE60'
  },
  statusText: {
    color: '#FFF',
    fontSize: 16
  },
  missionDescription: {
    color: '#BFC9CA',
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 20
  },
  missionMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#2C3E50',
    paddingVertical: 8,
    marginBottom: 10
  },
  metaItem: {
    alignItems: 'center'
  },
  metaLabel: {
    color: '#95A5A6',
    fontSize: 12
  },
  metaValue: {
    color: '#ECF0F1',
    fontWeight: '600',
    fontSize: 14
  },
  rewardsSection: {
    marginBottom: 10
  },
  rewardsTitle: {
    color: '#F1C40F',
    fontWeight: '600',
    marginBottom: 5
  },
  rewardsList: {
    marginLeft: 10
  },
  rewardItem: {
    color: '#BDC3C7',
    fontSize: 13
  },
  missionActions: {
    alignItems: 'center'
  },
  startButton: {
    backgroundColor: '#2E86AB',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  startButtonText: {
    color: '#FFF',
    fontWeight: '600'
  },
  completeButton: {
    backgroundColor: '#27AE60',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  completeButtonText: {
    color: '#FFF',
    fontWeight: '600'
  },
  completedBadge: {
    backgroundColor: '#1B4332',
    borderRadius: 8,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center'
  },
  completedText: {
    color: '#2ECC71',
    fontWeight: '700'
  }
});
