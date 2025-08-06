# Banco API Performance

Repositório dedicado aos testes de performance da API bancária utilizando K6, uma ferramenta moderna de teste de carga escrita em JavaScript.

## 📋 Introdução

Este projeto contém uma suíte completa de testes de performance para uma API bancária, desenvolvida com K6. Os testes simulam cenários reais de uso, incluindo autenticação de usuários e operações de transferência entre contas, garantindo que a aplicação mantenha performance adequada sob diferentes cargas de trabalho.

### Principais Funcionalidades Testadas:
- **Autenticação de Usuários**: Teste de login com validação de token
- **Transferências Bancárias**: Simulação de operações de transferência entre contas
- **Cenários de Carga**: Testes com diferentes níveis de usuários simultâneos
- **Métricas de Performance**: Monitoramento de tempo de resposta e taxa de erro

## 🛠️ Tecnologias Utilizadas

- **[K6](https://k6.io/)**: Ferramenta de teste de carga e performance
- **JavaScript**: Linguagem de programação para desenvolvimento dos testes
- **JSON**: Para extração de dados em respostas JSON
- Variáveis de ambiente para configuração dinâmica (ex: BASE_URL)

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── config/
│   └── config.local.json          # Configurações locais da aplicação
├── fixtures/
│   └── postLogin.json             # Dados de teste para autenticação
├── helpers/
│   └── autenticacao.js            # Funções auxiliares para autenticação
├── tests/
│   ├── login.test.js              # Teste de performance para login
│   └── transferencias.test.js     # Teste de performance para transferências
├── utils/
│   └── variaveis.js               # Utilitários para gerenciamento de variáveis
└── README.md                      # Documentação do projeto
```

## 🎯 Objetivo de Cada Grupo de Arquivos

### 📂 **config/**
Contém arquivos de configuração da aplicação:
- **config.local.json**: Define a URL base da API para ambiente local

### 📂 **fixtures/**
Armazena dados estáticos utilizados nos testes:
- **postLogin.json**: Credenciais de teste para autenticação

### 📂 **helpers/**
Funções auxiliares reutilizáveis:
- **autenticacao.js**: Função para obter token de autenticação via API

### 📂 **tests/**
Scripts de teste de performance:
- **login.test.js**: Teste de carga para endpoint de login com validações
- **transferencias.test.js**: Teste de carga para operações de transferência

### 📂 **utils/**
Utilitários e funções compartilhadas:
- **variaveis.js**: Gerenciamento de variáveis de ambiente e configuração

## 🚀 Instalação

### Pré-requisitos
- [K6](https://k6.io/docs/getting-started/installation/) instalado no sistema
- Node.js (opcional, para desenvolvimento)

### Passos para Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ludmilavila/banco-api-performance.git
   cd banco-api-performance
   ```

2. **Configure a variável de ambiente BASE_URL:**
Altere o arquivo config.local.json e defina a URL base da API a ser testada:

```bash
{
    "baseUrl": "http://localhost:3000"
}
```

3. **Verifique a instalação do K6:**
```bash
   k6 version
```

## ▶️ Execução dos Testes

### Execução Básica

**Teste de Login:**
```bash
k6 run tests/login.test.js
```

**Teste de Transferências:**
```bash
k6 run tests/transferencias.test.js
```

Certifique-se de passar a variável de ambiente BASE_URL, caso não esteja usando um config.local.json ou uma abordagem de carregamento automático:

```bash
k6 run tests/autenticacao/login.test.js -e BASE_URL=http://localhost:3000
```

### Execução com Dashboard em Tempo Real + Exportação de Relatório

Você pode ativar o modo dashboard do K6 e exportar o relatório ao final do teste:

```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/autenticacao/login.test.js \
-e BASE_URL=http://localhost:3000
```

Após a execução, o relatório estará salvo como html-report.html.


## 📊 Interpretação dos Resultados

### Métricas Principais
- **http_req_duration**: Tempo de resposta das requisições
- **http_req_failed**: Taxa de falhas nas requisições
- **iterations**: Número de iterações executadas
- **vus**: Usuários virtuais simultâneos

### Thresholds Configurados
- 90% das requisições devem responder em menos de 3 segundos
- Nenhuma requisição deve demorar mais de 5 segundos
- Taxa de falha deve ser menor que 1%


## 👥 Autor

**Ludmila Ávila**
- GitHub: [@ludmilavila](https://github.com/ludmilavila)
- Repositório: [banco-api-performance](https://github.com/ludmilavila/banco-api-performance)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
