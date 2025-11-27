import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/nuvem.png')} // Ou use uma URL
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.name}>João Silva</Text>
        <Text style={styles.username}>@joaosilva</Text>
        <Text style={styles.bio}>Desenvolvedor mobile</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>42</Text>
          <Text style={styles.statLabel}>Missões</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>128</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>56</Text>
          <Text style={styles.statLabel}>Seguindo</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações</Text>
        <Text>Email: joao@email.com</Text>
        <Text>Localização: São Paulo, SP</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ddd',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#0079c8',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#0079c8',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
});