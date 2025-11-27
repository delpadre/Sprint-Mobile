# 📱 DuoHealth - RPG de Bem-Estar

O **DuoHealth** é um aplicativo gamificado que transforma hábitos saudáveis em missões de RPG.  
A ideia é incentivar o bem-estar físico e mental de forma divertida, recompensando o usuário com XP e conquistas ao completar desafios diários.

---

## 👥 Integrantes do Grupo
- Lucas bertolassi iori - RM553183
- Giovanna Franco - RM553701
- Rafael Almeida - RM554019
- Rafael Jorge Del Padre - Rm552765

---
Objetivo

Promover hábitos saudáveis de forma divertida e interativa, transformando o bem-estar em uma jornada épica de RPG.
---

## 🚀 Funcionalidades do Aplicativo

### 🔑 Autenticação
- Tela de **Login** com credenciais de teste (`teste@email.com / 123456`).
- Redirecionamento para a área principal após login bem-sucedido.

### 🏠 Tela Inicial (Dashboard)
- Exibe **status do herói**: Vitalidade, Clareza, Harmonia.
- Mostra **nível atual**, XP acumulado e progresso para o próximo nível.
- Registro de **hidratação**: usuário informa quantos ml de água bebeu no dia.
- Missões em destaque com seleção rápida.
- Ações rápidas: Progresso, Missões, Conquistas e Configurações.

### 🎯 Missões
- Lista de missões diárias com status:
  - **Disponível** → pode ser iniciada.
  - **Ativa** → em andamento.
  - **Concluída** → finalizada com recompensas.
- Exemplos de missões:
  - Beber 2L de água.
  - Dormir 8 horas.
  - Caminhar 30 minutos.
- Cada missão concede XP e recompensas específicas.

### 📊 Progresso
- Exibe **quantidade de missões concluídas** e meta para próximo nível.
- Barra de progresso visual com porcentagem.
- Dicas para evoluir mais rápido (missões diárias, eventos, interação com outros usuários).

### 👤 Perfil
- Avatar com efeito glow.
- Nome e username do usuário.
- Estatísticas: missões concluídas, seguidores e seguindo.
- Categoria do herói (Novato, Intermediário, Lendário) com medalha correspondente.
- Informações pessoais: email e localização.
- Botões para editar perfil, acessar configurações e sair da conta.

### ⚙️ Configurações
- Alternar **notificações** (on/off).
- Alternar **modo escuro**.
- Acesso rápido para editar perfil.
- Botão de logout.

### 🖼️ Modal
- Exemplo de modal com navegação de retorno para a tela inicial.

---

## 🛠️ Tecnologias Utilizadas
- **React Native** com Expo.
- **Expo Router** para navegação.
- **React Hooks** (`useState`, `useRouter`).
- **@react-native-picker/picker** para seleção de categoria.
- **FontAwesome** para ícones nas abas.
- Estrutura de **Tabs**: Início, Missões, Progresso, Perfil.

---

## 📂 Estrutura de Pastas

```text
VidaHeroicaApp/
├─ components/
│  └─ SplashScreen.tsx
├─ assets/images/
│  ├─ boneco.png
│  ├─ coraacao.png
│  ├─ raio.png
│  ├─ nuvem.png
│  ├─ bronze.webp
│  ├─ prata.png
│  └─ ouro.png
├─ pages/
│  ├─ login.tsx
│  ├─ missions.tsx
│  ├─ progress.tsx
│  ├─ profile.tsx
│  ├─ editar/
│  │  └─ index.tsx
│  ├─ config/
│  │  └─ index.tsx
│  └─ tabs/
│     └─ _layout.tsx

```


---

## ▶️ Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repositorio/duohealth.git
---
Instale as dependências 
npm install
---
Execute o projeto
npx expo start
---


