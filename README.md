# Site Raquel Lopes

## Como publicar
1. Crie um repositório no GitHub e envie todos os arquivos desta pasta (index.html, assets/, api/).
2. Na Vercel: Add New → Project → importe o repositório → Deploy (não precisa configurar build).

## Ativar o assistente com IA (tipo ChatGPT)
1. Crie uma chave em https://console.anthropic.com (é paga por uso).
2. Na Vercel: Project → Settings → Environment Variables:
   - ANTHROPIC_API_KEY = sua chave
   - (opcional) ANTHROPIC_MODEL = claude-haiku-5-5
3. Faça um novo deploy.

Sem a chave, o assistente continua funcionando com as informações do site (respostas prontas).
A chave fica só no servidor (api/chat.js), nunca no navegador.

## Marca-d'água
A área reservada no canto inferior direito é configurada no topo do CSS (--wm-w e --wm-h).
Abra o site com #zona-segura no final do endereço para ver a área desenhada na tela.

## Publicar na Netlify (grátis, permite uso comercial)
1. Acesse: https://app.netlify.com/start/deploy?repository=https://github.com/luanoliveirasantos12072010-debug/raquel-lopes-site
2. Entre com o GitHub e clique em Deploy.
3. Para a IA: Site configuration → Environment variables → ANTHROPIC_API_KEY. Depois: Deploys → Trigger deploy.
