// Função de servidor da Vercel para o assistente virtual.
// Configure ANTHROPIC_API_KEY nas variáveis de ambiente do projeto.
const { reply } = require("../lib/assistant.js");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") { res.setHeader("Allow", "POST"); return res.status(405).json({ error: "Método não permitido" }); }
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const out = await reply(body && body.messages);
  return res.status(out.status).json(out.body);
};
