import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { auth } from "../config/firebase";
import { sair } from "../services/auth";

export default function Home({ navigation }) {
    async function realizarLogOut() {
        await sair()
        navigation.navigate('Login')
    }

    let [passo, setPasso] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Olá, seja bem-vindo(a)!</Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Sua conta</Text>
                    <Text style={styles.email}>{auth.currentUser?.email}</Text>
                </View>

                <Text style={styles.titulo}>Manual - Firebase Authentication com React Native</Text>
                <Text style={styles.descricao}>Laura Lisboa e Giovanna Cintra</Text>
                <View style={styles.card1}>
                <Text style={styles.titulo}>
                    {[
                        "Passo 1 - Instalar GitHub Codespaces",
                        "Passo 2 - Faça login no GitHub",
                        "Passo 3 - Crie um repositório",
                        "Passo 4 - Conecte repositório com VS Code",
                        "Passo 5 - Instale parte das dependências no Terminal",
                        "Passo 6 - Comece com o Firebase",
                        "Passo 7 - Crie o firebase.js",
                        "Passo 8 - Instale as outras dependências",
                        "Passo 9 - Crie o front-end",
                        "Passo 10 - Construa a autenticação",
                        "Passo 11 - Teste o app"
                    ][passo]}
                </Text>

                <Text style={styles.descricao}>
                    {[
                        "Dentro do Visual Studio Code, em Extensions, pesquise GitHub Codespaces e instale.",
                        "Quando instalar o GitHub Codespaces, aparecerá um ícone de Computador (Remote Explorer), onde terá um botão de \"Sign In to GitHub\". Ele te redirecionará para um site no navegador. Entre na sua conta.",
                        "No GitHub, crie um repositório público ou privado com README.md.",
                        "Ainda no ícone de Computador (Remote Explorer), clique no seu repositório. Caso não apareça, clique no ícone de + e escolha seu repositório, depois \"main\" > \"4 cores, 8GB RAM, 32 GB storage\".",
                        "Escreva esses códigos, em sequência: \"npx create-expo-app@latest --template blank\", responda as perguntas e crie um NomeDoApp; depois \"cd NomeDoApp\" e \"npx expo install firebase\".",
                        "No navegador, pesquise \"Firebase | Google's Mobile and Web App Development Platform\" e faça login. Clique em \"Get started in console\" e crie um novo projeto.",
                        "Ainda no Firebase, crie um App Web, nomeie e copie o código criado pelo próprio. No VS Code, crie a pasta config e, dentro dela, o arquivo firebase.js e cole o código do Firebase.",
                        "\"npm install @react-navigation/native\"; \"npx expo install react-native-screens react-native-safe-area-context\"; \"npm install @react-navigation/native-stack\"; \"npx expo install react-dom react-native-web\".",
                        "Altere o App.js e crie a pasta screens com os arquivos Cadastro.js, Home.js e Login.js.",
                        "Crie a pasta services e, dentro dela, o arquivo auth.js com as funções cadastrar, entrar e sair.",
                        "No terminal, escreva \"npm start\" e depois \"Open in browser\" para ver seu projeto."
                    ][passo]}
                </Text>

                    <View style={styles.botoes}>
                        <Button
                            title="Voltar"
                            onPress={() => setPasso(passo - 1)}
                            disabled={passo === 0}
                        />

                        <Button
                            title="Próximo"
                            onPress={() => setPasso(passo + 1)}
                            disabled={passo === 10}
                        />
                    </View>
                </View>

                <Button
                    title='Sair'
                    onPress={realizarLogOut}
                    style={styles.botao}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f9fc",
        justifyContent: "center",
        paddingHorizontal: 25,
    },

    conteudo: {
        alignItems: "center",
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#3498db",
        marginBottom: 15,
    },

    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 20,
        marginBottom: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },

    cardTitulo: {
        fontSize: 14,
        color: "#888",
    },

    email: {
        fontSize: 17,
        fontWeight: "600",
        color: "#3498db",
    },

    mensagem: {
        fontSize: 15,
        color: "#666",
        textAlign: "center",
        lineHeight: 22,
        marginBottom: 25,
    },

    botao: {
        marginTop: 5,
        marginBottom: 12,
        borderRadius: 30,
        overflow: "hidden",
        width: "100%",
    },

    card1: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 25,
        marginBottom: 20,
        width: "100%",
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    
    descricao: {
        fontSize: 17,
        color: "#555",
        lineHeight: 25,
        marginBottom: 25,
    },

    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 30,
        marginBottom: 2,
    },
});