// English texts for the menu page (carta.html?lang=en). Dishes and drinks are matched by their id;
// anything without a translation here (e.g. a dish added later) is shown in Portuguese.
window.CARTA_EN = {
  ui: {
    titulo: "Menu · Chico Maria", consulta: ["on", "request"], vazio: "No dishes on the menu.",
    carregar: "Loading the menu…", semLigacao: "No connection to the database.",
    sub: "English menu, updated with the dish manual and the wine list",
    alt: "Four black and white illustrated posters featuring Chico Maria",
  },
  secoes: {
    "Sustento": "Sustenance", "Paparicos": "Small pleasures", "Comedeirices": "Hearty plates", "Lambarices": "Sweet tooth",
    "Binho": "Wine", "Espumantes": "Sparkling", "Branco": "White", "Rosé": "Rosé", "Tinto": "Red", "Sobremesa": "Dessert wines",
    "Gin": "Gin", "Espirituosas": "Spirits", "Cerveja": "Beer", "Laranjadas caseiras": "Homemade sodas",
    "Bicas": "Coffee & tea", "Pingas sem álcool": "Alcohol-free", "Coquetéis": "Cocktails",
  },
  niveis: { leve: "Light and lively", medio: "Versatile and curious", serio: "Serious and complex" },
  pratos: {
    "trilogia-de-sustentos": { nome: "Sustenance trilogy", curta: "Sourdough bread, seaweed butter, lupin hummus, olive oil and fleur de sel" },
    "pao-de-massa-mae": { nome: "Sourdough bread", curta: "Naturally fermented sourdough, artisan stone-milled flour blend" },
    "manteiga-de-algas": { nome: "Seaweed butter", curta: "Portuguese butter, sea lettuce" },
    "hummus-de-tremoco": { nome: "Lupin hummus", curta: "Local lupin beans, garlic, olive oil, lemon" },
    "azeite-virgem-extra": { nome: "Extra virgin olive oil", curta: "Premium olive oil, fleur de sel, red wine vinegar" },
    "tabua-de-regionais": { nome: "Regional board", curta: "A selection of regional cheeses, cured meats and preserves" },
    "sopa-de-outono": { nome: "Autumn soup", curta: "Butternut squash cream, mushrooms and chestnuts" },
    "salada-de-frutas": { nome: "Fruit salad", curta: "Rocha pear, Bravo de Esmolfe apple, walnuts, pomegranate, fresh cheese" },
    "berbigao-a-bulhao-pato": { nome: "Cockles Bulhão Pato", curta: "Cockles from Portuguese estuaries, garlic, lemon and coriander. Vegetarian version with assorted fresh mushrooms (6 €)" },
    "enguia-fumada": { nome: "Smoked eel", curta: "Toast in olive oil, smoked eel fillet, black garlic mayonnaise, Gândara ponzu, mizuna" },
    "tartaro-de-novilho": { nome: "Young beef tartare", curta: "Young beef tenderloin, smoked egg yolk, house pickles, parsley" },
    "brioche-desfiado": { nome: "Pulled pork brioche", curta: "Sourdough brioche, pulled black pork, apple and celery coleslaw, house pickles, spicy mayonnaise" },
    "arroz-de-mar": { nome: "Sea rice", curta: "Fresh fish of the day, Mondego carolino rice, cockles, seaweed and samphire. Vegan option with tempura green beans" },
    "bife-a-chico-maria": { nome: "Chico Maria steak", curta: "Heart of rump from local pastures, Agria potato chips, sautéed garden vegetables" },
    "lombinhos-de-porco-bisaro": { nome: "Bísaro pork tenderloin", curta: "Bísaro pork tenderloin with its own jus, mushroom and chestnut ragout, roast potatoes" },
    "brocolo-grelhado": { nome: "Grilled broccoli", curta: "Grilled broccoli florets, five-herb pesto, Beira Interior almond purée, toasted almonds, mizuna" },
    "peixe-do-dia": { nome: "Fish of the day", curta: "Wild fish fillet, mashed potato, canary bean sauce" },
    "puxa-carroca": { nome: "Puxa carroça", curta: "Premium cut from native Portuguese breeds, smashed potatoes and garden vegetables" },
    "superfresco": { nome: "Superfresco", curta: "Chef's choice with the produce of the day" },
    "tarte-de-abobora": { nome: "Pumpkin tart", curta: "Hokkaido pumpkin tart, vanilla and bourbon ice cream" },
    "mousse-de-nougat": { nome: "Nougat mousse", curta: "Nougat from the local roastery, cream, crumble" },
    "maca-e-morangueira": { nome: "Apple and morangueira", curta: "Baked apple, morangueira grape ice cream from our own vine, almond crumble" },
  },
  bebidas: {
    "espirituosas-aguardente-medronho": { nome: "Medronho brandy" },
    "espirituosas-whisky-centeio-black-wolf": { nome: "Black Wolf rye whisky" },
    "espirituosas-aguardente-cr-f": { nome: "CR&F brandy" },
    "espirituosas-bagaceira-s-domingos": { nome: "S. Domingos grape marc" },
    "espirituosas-vermute-soberbo": { nome: "Soberbo vermouth" },
    "espirituosas-ginjinha-vila-das-rainhas": { nome: "Vila das Rainhas ginjinha" },
    "espirituosas-licor-de-cafe": { nome: "Coffee liqueur" },
    "espirituosas-amarguinha": { nome: "Amarguinha (bitter almond)" },
    "cerveja-cerveja-2-clowns-0-75l": { nome: "2 Clowns beer 0.75 l" },
    "laranjadas-caseiras-sumo-de-laranja-natural": { nome: "Fresh orange juice" },
    "laranjadas-caseiras-limonada-copo": { nome: "Lemonade (glass)" },
    "laranjadas-caseiras-limonada-litro": { nome: "Lemonade (litre)" },
    "bicas-cafe-decaf": { nome: "Espresso / decaf" },
    "bicas-galao-capuccino": { nome: "Galão (latte) / cappuccino" },
    "bicas-chas-e-infusoes": { nome: "Teas and infusions", nota: "Gorreana green | Mint | Lemon verbena | Lemon | Boldo" },
    "pingas-sem-alcool-sumol-laranja-ananas": { nome: "Sumol orange & pineapple" },
    "pingas-sem-alcool-tonica": { nome: "Tonic water" },
    "pingas-sem-alcool-agua-pedras": { nome: "Pedras sparkling water" },
    "pingas-sem-alcool-pedras": { nome: "Pedras flavoured", nota: "Lemon / Raspberry / Tangerine" },
    "pingas-sem-alcool-compal": { nota: "Algarve orange / Rocha pear" },
    "pingas-sem-alcool-agua-luso-33cl": { nome: "Luso still water 33 cl" },
    "pingas-sem-alcool-agua-luso-1l": { nome: "Luso still water 1 l" },
    "coqueteis-mula": { nome: "Mule", nota: "Homemade ginger beer, lime, syrup", nota2: "**Gin, vodka or Madeira rum**" },
    "coqueteis-caipi": { nota: "Lime, brown sugar", nota2: "Madeira rum" },
    "coqueteis-margarida": { nota: "Lime, orange blossom cordial", nota2: "Madeira rum, triple sec, amarguinha" },
    "coqueteis-amargo": { nota: "Lemon, egg white, house bitters", nota2: "Medronho, whisky or Madeira rum" },
    "coqueteis-cafe-com-cheirinho": { nota: "Espresso", nota2: "Coffee liqueur and aged brandy" },
    "coqueteis-negroni": { nota: "Orange", nota2: "Gin, Per Se and vermouth" },
  },
  // wine regions, grapes and formats: small phrase replacements, names stay as they are
  vinho: [
    [/Lote em solera desde (\d+)/, "Solera blend since $1"], [/Porto branco seco/i, "Dry white Port"], [/Colheita tardia/i, "Late harvest"],
    [/\((\d+) anos\)/, "($1 years)"], [/(\d),(\d)/g, "$1.$2"], [/ e /g, " and "],
  ],
  textos: {
    desde: "Since 1940", local: "Vila da Tocha", volume: "Vol. II", lema: "Better done badly than gone to waste",
    aviso: "Warning: the contents of this menu may cause feelings of ecstasy and transcendence",
    titulo: "Comer esmarado",
    legenda: "Illustrations by Patarra, an artist from the Gândara",
    rodape: "The main allergens are marked in **bold.**\nPlease ask our team about allergens and other dietary restrictions\nVAT included at the current rate",
    texto: `Writing about this idea is almost as hard as making it happen. Not only because of my indecisive nature, but because of the many faces this house can take on. We can see it as the iconic tavern and grocery that laid the foundations of this place, the shop of what was once a village, where families, workers and traders would meet, or as a trendy bar and kitchen, or simply as a fusion tasca, a concept that seems to me still waiting to be explored.

My grandfather, Francisco Maria Andrade, created a place frequented by generations, where people made the best of what our land had to offer. No supply chains, no fruit from the other side of the world, no tomatoes in winter. We might have found coffee and chocolate which, ironically, will become scarce luxury goods in the coming decades, even more than 50 years ago, when they were rare because they were far away and expensive.

The challenge I set the chef of this house is to explore, with complete creative freedom, the very best that can be done with local produce and all the knowledge in the world. What I offer those who visit us is generous dishes, lost recipes, forgotten ingredients, or simply a bife à Chico Maria.

Never letting tradition limit us, but never forgetting it, we draw on the inspirations of the Gândara and the philosophies of Chico Maria, and apply all the wisdom and technique the world brings us to the best our land gives us.

Eating what is ours is to value the territory, to strengthen our producers and those who care for our land, to revive our community, far beyond the economic sense.

Eating what is ours is also eating more healthily, knowing the face of whoever produced, grew or caught our food. It is remembering that there is plenty of good food made with produce from here, from the Gândara and around, from fresh fish from our coast to pasture-raised meat, our neighbours' vegetables and Mondego rice.

This menu draws on a local retro-futurist imagination, now in a format closer to fine dining. I would call it "comer esmarado".

Enjoy!`,
  },
};
