# AnimaisAbandonados - AlertaPet

Este é um projeto de aplicativo mobile desenvolvido com **Expo** e **React Native** para ajudar no resgate e adoção de animais abandonados. O aplicativo AlertaPet permite que usuários reportem animais abandonados, conheçam animais disponíveis para adoção e saibam mais sobre o trabalho da ONG.

## 📱 Funcionalidades Principais

### Telas Implementadas
- **Tela Inicial** (`app/index.tsx`): Tela de login simplificada
- **Home** (`app/home.tsx`): Tela principal com navegação para todas as funcionalidades
- **Novo Chamado** (`app/new-report.tsx`): Formulário para reportar animais abandonados
- **Quero Adotar** (`app/adopt.tsx`): Galeria de animais disponíveis para adoção
- **Detalhes do Animal** (`app/animal-details.tsx`): Informações detalhadas de animais específicos
- **Sobre a ONG** (`app/about-ong.tsx`): Informações sobre o trabalho da organização
- **Confirmação** (`app/confirmation.tsx`): Confirmação de identidade para chamados
- **Notificações** (`app/notifications.tsx`): Sistema de notificações
- **Outras telas**: Registro, sucesso, revisão de chamados

### Funcionalidades por Tela

#### 🏠 Tela Home
- Botões de navegação para todas as funcionalidades
- Interface intuitiva com ícones representativos
- Seção motivacional com imagem

#### 📞 Novo Chamado
- Formulário para reportar animais abandonados
- Campos para tipo de animal, porte e descrição
- Integração com mapa interativo para localização

#### 🐾 Quero Adotar
- Grid responsivo com animais disponíveis
- Cards com foto, nome, idade e porte
- Navegação para detalhes (implementado para o exemplo da Maia)

#### 📋 Detalhes do Animal
- Informações completas do animal
- Foto em destaque
- Dados como data de resgate, cor e personalidade
- Botões para próximas ações

#### ℹ️ Sobre a ONG
- História e missão da organização
- Informações sobre o trabalho de resgate
- Campanhas de conscientização

## 🛠 Estrutura Técnica

### Tecnologias Utilizadas
- **Expo**: `~50.0.0` - Framework principal
- **React**: `18.2.0` - Biblioteca de interface
- **React Native**: `0.73.2` - Framework mobile
- **expo-router**: `^3.4.7` - Sistema de navegação
- **TypeScript**: `^5.1.3` - Tipagem estática

### Dependências Principais
```json
{
  "expo": "~50.0.0",
  "react": "18.2.0",
  "react-native": "0.73.2",
  "expo-router": "^3.4.7",
  "expo-status-bar": "~1.11.1",
  "@expo/vector-icons": "^14.0.0",
  "@react-native-picker/picker": "^2.6.1",
  "expo-location": "~16.5.3"
}
```

### Dependências de Desenvolvimento
```json
{
  "@babel/core": "^7.20.0",
  "@babel/preset-env": "^7.20.0",
  "@types/react": "~18.2.45",
  "typescript": "^5.1.3"
}
```

## 🗂 Estrutura de Arquivos

```
app/
├── index.tsx              # Tela inicial/login
├── home.tsx              # Tela principal
├── new-report.tsx        # Novo chamado
├── adopt.tsx             # Quero adotar
├── animal-details.tsx    # Detalhes do animal
├── about-ong.tsx         # Sobre a ONG
├── confirmation.tsx      # Confirmação
├── notifications.tsx     # Notificações
├── register.tsx          # Registro
├── success.tsx           # Sucesso
├── review-report.tsx     # Revisão de chamado
└── _layout.tsx           # Configuração de rotas
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Expo CLI** instalado globalmente

### Instalação
```bash
# 1. Clone ou baixe o projeto
# 2. Entre na pasta do projeto
cd AnimaisAbandonados

# 3. Instale as dependências
npm install

# 4. Instale dependências específicas (se necessário)
npm install @react-native-picker/picker
npm install expo-location

# 5. Inicie o projeto
npm start
# ou
npx expo start
```

### Executar em Dispositivo
- **Android**: Instale o Expo Go na Play Store
- **iOS**: Instale o Expo Go na App Store
- Escaneie o QR code que aparece no terminal

## 🗺 Funcionalidades do Mapa

O aplicativo inclui um mapa interativo com:
- Baseado no OpenStreetMap (gratuito)
- Estilo CARTO Voyager
- Marcadores personalizados
- Zoom com roda do mouse
- Arrastar e soltar marcadores
- Atualização automática de coordenadas
- Visualização em tela cheia
- Controles intuitivos

**Nota**: Utiliza Leaflet via CDN, sem necessidade de instalação adicional.

## 📋 Status de Desenvolvimento

### ✅ Implementado
- [x] Tela inicial e home
- [x] Sistema de navegação completo
- [x] Tela de novo chamado
- [x] Galeria de adoção
- [x] Detalhes de animais (exemplo: Maia)
- [x] Página sobre a ONG
- [x] Interface responsiva
- [x] Integração com mapas

---

**AlertaPet** - Salvando vidas, conectando corações 🐾❤️
