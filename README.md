# CHV

⚡ Aplicação React moderna construída com Vite para máxima performance e experiência de desenvolvimento.

## 📋 Descrição

**CHV** é uma aplicação web moderna desenvolvida com React e Vite, oferecendo uma base sólida e otimizada para desenvolvimento rápido e eficiente. Com Hot Module Replacement (HMR) e configurações ESLint integradas, o projeto proporciona uma experiência de desenvolvimento fluida e produtiva.

## 🚀 Tecnologias Utilizadas

- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rápida com HMR
- **[JavaScript/ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** - Linguagem de programação moderna
- **[ESLint](https://eslint.org/)** - Linter para qualidade de código
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** - Estilização moderna

## ⚡ Plugins Disponíveis

O projeto suporta dois plugins oficiais para Fast Refresh:

### [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- Utiliza **[Babel](https://babeljs.io/)** para Fast Refresh
- Ideal para projetos que necessitam de transformações Babel customizadas

### [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
- Utiliza **[SWC](https://swc.rs/)** para Fast Refresh
- Performance superior para projetos grandes

## 📦 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** ou **pnpm**

### Instalação do Node.js

```bash
# Usando NVM (recomendado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
nvm use node

# Ou baixe diretamente do site oficial
# https://nodejs.org/
```

## 🛠️ Instalação e Configuração

### Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/feliciocavalcante/chv.git

# 2. Navegue até o diretório
cd chv

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

### Usando diferentes gerenciadores de pacotes

```bash
# Com Yarn
yarn install
yarn dev

# Com PNPM
pnpm install
pnpm dev
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento com HMR
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Lint do código
npm run lint

# Correção automática de lint
npm run lint:fix
```

## 🏗️ Estrutura do Projeto

```
chv/
├── public/                   # Arquivos estáticos
│   └── vite.svg             # Ícone do Vite
├── src/                     # Código fonte
│   ├── assets/              # Assets (imagens, ícones, etc.)
│   │   └── react.svg        # Logo do React
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Utilitários
│   ├── styles/             # Estilos globais
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos do App
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── index.html              # Template HTML
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
├── .eslintrc.cjs           # Configuração ESLint
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Documentação
```

## ⚙️ Configuração do Vite

O projeto utiliza uma configuração básica do Vite otimizada para React:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

### Configurações Customizáveis

```javascript
// Exemplo de configurações avançadas
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Para acesso via rede local
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

## 🎨 Desenvolvimento

### Hot Module Replacement (HMR)

O projeto está configurado com HMR para atualizações instantâneas:

- **JavaScript**: Recarregamento instantâneo de componentes
- **CSS**: Injeção de estilos sem reload da página
- **Fast Refresh**: Preserva o estado dos componentes React

### ESLint Configuration

```javascript
// .eslintrc.cjs
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
```

## 🔧 Migração para TypeScript

Para aplicações de produção, recomenda-se o uso do TypeScript:

```bash
# 1. Instalar dependências TypeScript
npm install -D typescript @types/react @types/react-dom

# 2. Criar tsconfig.json
npm run init:typescript

# 3. Renomear arquivos .js para .tsx/.ts
# 4. Configurar tipos
```

### Template TypeScript

Para novos projetos, use o template TypeScript:

```bash
# Criar novo projeto com TypeScript
npm create vite@latest my-app -- --template react-ts

# Ou
yarn create vite my-app --template react-ts
```

## 📊 Performance

### Otimizações Incluídas

- **Tree Shaking**: Eliminação de código não utilizado
- **Code Splitting**: Carregamento sob demanda
- **Minificação**: Código otimizado para produção
- **Source Maps**: Debug facilitado em produção

### Métricas de Build

```bash
# Analisar bundle size
npm run build
npm run preview

# Com bundle analyzer (opcional)
npm install -D rollup-plugin-visualizer
```

## 🚀 Deploy

### Build de Produção

```bash
# Gerar build otimizada
npm run build

# Arquivos gerados em /dist
# Pronto para deploy em qualquer servidor estático
```

### Opções de Deploy

```bash
# Vercel
npx vercel --prod

# Netlify
npm install -g netlify-cli
netlify deploy --prod

# GitHub Pages
npm install -D gh-pages
npm run build
npx gh-pages -d dist

# Servidor simples local
npx serve dist
```

### Deploy com Docker

```dockerfile
# Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🧪 Testes (Configuração Futura)

Para adicionar testes ao projeto:

```bash
# Vitest (recomendado para Vite)
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Jest (alternativa)
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### Configuração Vitest

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js']
  }
})
```

## 🔍 Debugging

### React Developer Tools

1. Instale a extensão [React Developer Tools](https://react.dev/learn/react-developer-tools)
2. Abra as ferramentas do desenvolvedor
3. Use as abas "Components" e "Profiler"

### Vite DevTools

```bash
# Debug detalhado
npm run dev -- --debug

# Profile da build
npm run build -- --profile
```

## 📚 Recursos e Documentação

### Links Úteis

- **[React Documentation](https://react.dev/)** - Documentação oficial do React
- **[Vite Guide](https://vitejs.dev/guide/)** - Guia completo do Vite
- **[ESLint Rules](https://eslint.org/docs/rules/)** - Regras do ESLint
- **[MDN Web Docs](https://developer.mozilla.org/)** - Referência web completa

### Exemplos de Código

```jsx
// Componente funcional básico
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  )
}

export default Counter
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Padrões de Código

```bash
# Antes de commitar
npm run lint          # Verificar padrões
npm run lint:fix      # Corrigir automaticamente
npm run build         # Testar build
```

### Convenções

- **Componentes**: PascalCase (`MyComponent.jsx`)
- **Arquivos**: camelCase (`utilityFunction.js`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`)
- **CSS Classes**: kebab-case (`my-component`)

## 🔧 Troubleshooting

### Problemas Comuns

#### Erro de Port já em uso
```bash
# Usar porta diferente
npm run dev -- --port 3001

# Ou matar processo
lsof -ti:3000 | xargs kill -9
```

#### Cache issues
```bash
# Limpar cache do npm
npm cache clean --force

# Remover node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### ESLint errors
```bash
# Corrigir automaticamente
npm run lint:fix

# Ignorar regra específica
// eslint-disable-next-line rule-name
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Felício Cavalcante**
- GitHub: [@feliciocavalcante](https://github.com/feliciocavalcante)

## 🆘 Suporte

Precisa de ajuda?

1. **Issues**: [GitHub Issues](https://github.com/feliciocavalcante/chv/issues)
2. **Documentação Vite**: [Vite Docs](https://vitejs.dev/)
3. **Documentação React**: [React Docs](https://react.dev/)
4. **Stack Overflow**: [Tag react-vite](https://stackoverflow.com/questions/tagged/react+vite)

## 🗺️ Roadmap

### Próximas Melhorias

- [ ] **TypeScript**: Migração para TypeScript
- [ ] **Testing**: Configuração de testes com Vitest
- [ ] **PWA**: Transformar em Progressive Web App
- [ ] **CI/CD**: Pipeline de integração contínua
- [ ] **Storybook**: Documentação de componentes
- [ ] **Performance**: Otimizações avançadas

### Funcionalidades Futuras

- [ ] **Router**: React Router para navegação
- [ ] **State Management**: Context API ou Zustand
- [ ] **UI Library**: Integração com shadcn/ui ou Chakra UI
- [ ] **API Integration**: Axios ou Fetch wrapper
- [ ] **Forms**: React Hook Form
- [ ] **Animations**: Framer Motion

---

⚡ **Desenvolvido com Vite para máxima velocidade!**

🚀 **Pronto para começar? Execute `npm run dev` e comece a codar!**
