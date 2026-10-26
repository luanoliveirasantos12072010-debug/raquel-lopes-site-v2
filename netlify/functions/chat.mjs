// Função da Netlify para o assistente virtual (responde em /api/chat).
// Configure ANTHROPIC_API_KEY em Site configuration → Environment variables.
import assistant from "../../lib/assistant.js";

export default async (req) => {
  if (req.method !== "POST") return Response.json({ error: "Método não permitido" }, { status: 405 });
  let body = {};
  try { body = await req.json(); } catch {}
  const out = await assistant.reply(body && body.messages);
  return Response.json(out.body, { status: out.status });
};

export const config = { path: "/api/chat" };
