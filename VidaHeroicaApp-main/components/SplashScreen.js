import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  // Animação de fade in (opacidade)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Anima o logo e o texto aparecendo suavemente
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 80,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1200), // espera um pouco
    ]).start(() => {
      router.replace('/login'); // troca para a tela de login
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Efeito de luz no fundo */}
      <View style={styles.lightEffect} />

      {/* Logo animado */}
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightEffect: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: '30%',
    left: '15%',
    transform: [{ scaleX: 1.5 }],
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0F7FF',
    marginTop: 8,
    letterSpacing: 0.5,
  },
});
