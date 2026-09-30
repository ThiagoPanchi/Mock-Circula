# Mock-Circula

Mock WebGIS estático do Circula, construído com Vite e Vue.

## Desenvolvimento

Instale as dependências:

```bash
npm install
```

Execute localmente:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

## Publicação No GitHub Pages

Este repositório está configurado para publicar gratuitamente no GitHub Pages usando GitHub Actions.

Configuração esperada:

- Em `Settings > Pages`, selecione `GitHub Actions` como fonte de publicação.
- Faça push para a branch `main` ou execute manualmente o workflow `Deploy to GitHub Pages`.
- O workflow instala dependências com `npm ci`, executa `npm run build` e publica a pasta `dist`.

URL esperada do projeto:

```text
https://thiagopanchi.github.io/Mock-Circula/
```

O build usa o caminho base `/Mock-Circula/` para que os arquivos JS, CSS e imagens sejam carregados corretamente no GitHub Pages e a página não fique em branco.
