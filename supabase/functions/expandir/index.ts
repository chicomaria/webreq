// Supabase Edge Function "expandir": Claude develops a social media idea from the back office (redes.html).
// Set up once (Supabase CLI, project amzvovfwbfxaubotcrot):
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-... --project-ref amzvovfwbfxaubotcrot
//   supabase functions deploy expandir --project-ref amzvovfwbfxaubotcrot
// Only the team's signed-in account can call it, so the API key never leaves Supabase.
import Anthropic from "npm:@anthropic-ai/sdk";
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const resposta = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const SISTEMA = `És a pessoa que escreve as redes sociais (Instagram e Facebook) do Chico Maria, na Tocha (Cantanhede, Gândara, distrito de Coimbra).

O Chico Maria nasceu da taberna-mercearia do avô, Francisco Maria Andrade, ponto de encontro da aldeia durante gerações. Hoje é bar and kitchen e mercearia: jantar com calma, lanchar com os miúdos, um cocktail ao fim do dia. A cozinha trabalha com produtores da Gândara e arredores (cogumelos do Cesto D'Alice, hortícolas da Quinta dos Sardões, peixe do Carlos Camarinho e da arte xávega da praia da Tocha, enguia dos Irmãos Norinho, algas da Algaplus, berbigão da Depurafoz, arroz carolino do Baixo Mondego, pão de massa mãe do Fidalgo da Baixa) e com vinhos da Bairrada. Faz fermentações, aproveita tudo, serve pratos de partilha ao centro da mesa e recupera receitas e ingredientes esquecidos. "Comer esmarado" é fine dining em gandarês: comer bem, com tempo e sem cerimónia. A carta divide-se em Sustento, Paparicos, Comedeirices e Lambarices.

Vais receber uma ideia curta, às vezes ditada, e preenches os campos de uma publicação:
- tema: um dos temas que já existem na tabela, se algum servir; senão um tema curto no mesmo estilo.
- mencoes: quem marcar (produtores, parceiros, pessoas), separados por vírgulas. Mantém o que a equipa já indicou. Não inventes @ de contas que não conheces: escreve o nome e a equipa põe o @.
- copy: português de Portugal, nunca do Brasil. Uma a quatro frases curtas, calorosas e concretas, na primeira pessoa do plural. Diz o que se vê, quem fez e porque importa. Usa palavras que as pessoas procuram (o prato, o produto, Tocha, Gândara), porque o Instagram pesquisa o texto da legenda. Fecha com um convite simples quando fizer sentido (vir provar, reservar, perguntar ao balcão). No máximo um emoji. Sem clichés de marketing, sem pontos de exclamação em série, sem hashtags no texto.
- hashtags: exatamente cinco, porque o Instagram passou a aceitar só cinco por publicação. As duas primeiras são sempre #chicomaria #tocha. As outras três vêm do conteúdo do post: uma de alcance médio sobre o tema (ex.: #comidaportuguesa, #vinhosdabairrada, #produtolocal, #cocktails) e duas de nicho sobre o produto, o produtor, a técnica ou o lugar (ex.: #gandara, #cantanhede, #bairrada, #figueiradafoz, #baixomondego, #riadeaveiro, #costadeprata, #arrozcarolino, #massamae, #fermentacao, #comeresmarado). Minúsculas, sem acentos, sem genéricas tipo #food ou #instafood. Separadas por espaços.
- imagens: formato (Reel, carrossel ou foto) e o que filmar ou fotografar, numa ou duas linhas.

Se a equipa já deu um tema, @ ou texto, respeita-o e completa à volta.`;

const FORMATO = {
  type: "object",
  properties: {
    tema: { type: "string" },
    mencoes: { type: "string" },
    copy: { type: "string" },
    hashtags: { type: "string" },
    imagens: { type: "string" },
  },
  required: ["tema", "mencoes", "copy", "hashtags", "imagens"],
  additionalProperties: false,
};

type Exemplo = { ideia: string; tema?: string; copy: string; hashtags?: string };

const anthropic = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY") });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return resposta({ erro: "Use POST." }, 405);

  // only the team's account may spend the key
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!);
  const { data } = await sb.auth.getUser(token);
  if (!data.user) return resposta({ erro: "Sem sessão da equipa." }, 401);

  const corpo = await req.json().catch(() => ({}));
  const ideia = String(corpo.ideia ?? "").trim();
  if (!ideia) return resposta({ erro: "Falta a ideia." }, 400);
  const temas: string[] = Array.isArray(corpo.temas) ? corpo.temas.map(String) : [];
  const exemplos: Exemplo[] = Array.isArray(corpo.exemplos) ? corpo.exemplos.slice(0, 4) : [];
  const pedido = [
    "Ideia: " + ideia,
    corpo.tema ? "Tema já escolhido: " + corpo.tema : temas.length ? "Temas que já existem na tabela: " + temas.join("; ") : "",
    corpo.mencoes ? "Quem marcar, já indicado pela equipa: " + corpo.mencoes : "",
    exemplos.length ? "Publicações já escritas, para manter a mesma voz:\n\n" +
      exemplos.map((e) => `Ideia: ${e.ideia}\nCopy: ${e.copy}\nHashtags: ${e.hashtags ?? ""}`).join("\n\n") : "",
  ].filter(Boolean).join("\n\n");

  try {
    const msg = await anthropic.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 8000,
      thinking: { type: "adaptive" },
      system: SISTEMA,
      messages: [{ role: "user", content: pedido }],
      output_config: { format: { type: "json_schema", schema: FORMATO } },
    });
    if (msg.stop_reason === "refusal") return resposta({ erro: "O Claude não quis desenvolver esta ideia." }, 422);
    const texto = msg.content.find((b) => b.type === "text");
    if (!texto || texto.type !== "text") return resposta({ erro: "Resposta vazia." }, 502);
    return resposta(JSON.parse(texto.text));
  } catch (e) {
    if (e instanceof Anthropic.APIError) return resposta({ erro: "Claude: " + e.message }, 502);
    throw e;
  }
});
