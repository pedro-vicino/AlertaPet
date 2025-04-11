# AnimaisAbandonados

Este é um projeto de aplicativo mobile desenvolvido com **Expo** e **React Native** para ajudar a reportar animais abandonados. O aplicativo permite que o usuário abra um chamado com informações sobre o animal (tipo, porte, descrição) e confirme sua identidade com nome e telefone. O projeto foi estruturado com navegação entre telas usando o `expo-router`.

## Estrutura do Projeto

O aplicativo possui as seguintes telas:
- **Tela 0** (`app/index.tsx`): Tela inicial de login (simplificada).
- **Tela 1** (`app/home.tsx`): Tela principal com botões para navegação.
- **Tela 2** (`app/new-report.tsx`): Tela para abrir um chamado, com campos para tipo de animal, porte e descrição.
- **Tela 3** (`app/confirmation.tsx`): Tela de confirmação de identidade, com campos para nome e telefone.

## Dependências do Projeto

O projeto utiliza as seguintes dependências, listadas no arquivo `package.json`:

### Dependências principais
- **expo**: `~50.0.0` (ou a versão mais recente instalada pelo `create-expo-app@latest`)
  - Framework principal para desenvolvimento com React Native.
- **react**: `18.2.0`
  - Biblioteca principal para construção de interfaces.
- **react-native**: `0.73.2`
  - Framework para desenvolvimento de aplicativos nativos.
- **expo-router**: `^3.4.7`
  - Biblioteca para navegação baseada em arquivos no Expo.
- **expo-status-bar**: `~1.11.1`
  - Componente para gerenciar a barra de status do dispositivo.
- **@expo/vector-icons**: `^14.0.0`
  - Biblioteca de ícones (usada para ícones como câmera e localização).
- **@react-native-picker/picker**: `^2.6.1`
  - Componente de dropdown (usado para selecionar tipo de animal e porte).

### Instalar dependências
- **prompt de comando/powershell**: entre no cmd e, dentro da pasta do projeto, utilize (na sequência):
   - npm install (Instala todas as dependências listadas no package.json.)

   - npx create-expo-app@latest AnimaisAbandonados;
     cd AnimaisAbandonados (Cria um novo projeto Expo chamado AnimaisAbandonados e entra na pasta do projeto.)

   - npm start run (Inicia o projeto)

   - npm install @react-native-picker/picker (Instala o componente de dropdown para os campos de tipo de animal e porte.)

   - npm install expo-location expo-image-picker (Instala bibliotecas para localização e upload de imagens (posteriormente removidas do projeto).)

### Dependências de desenvolvimento (devDependencies)
- **@babel/core**: `^7.20.0`
  - Compilador para transformar código JavaScript moderno.
- **@babel/preset-env**: `^7.20.0`
  - Preset do Babel para compilar código ES6+.
- **@types/react**: `~18.2.45`
  - Tipagens para React (usado com TypeScript).
- **typescript**: `^5.1.3`
  - Suporte a TypeScript para tipagem estática.

## Pré-requisitos

Antes de executar o projeto, você precisa ter o seguinte instalado:
- **Node.js** (versão 18 ou superior recomendada)
- **npm** (geralmente instalado com o Node.js)
- **Expo CLI**: Para gerenciar e executar o projeto Expo.
  - Instale globalmente com:
    ```bash
    npm install -g expo-cli