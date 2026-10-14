// French texts for the menu page (carta.html?lang=fr). Dishes and drinks are matched by their id;
// anything without a translation here (e.g. a dish added later) is shown in Portuguese.
window.CARTA_FR = {
  locale: "fr-FR",
  // words bolded as allergens in dish descriptions
  alerg: /(?<!\p{L})(pain|brioche|beurre|lupins?|amandes?|noix|fromage frais|fromages?|coques|mayonnaise|jaune d'œuf|blanc d'œuf|œufs?|crème|lait)(?!\p{L})/giu,
  ui: {
    titulo: "Carte · Chico Maria", consulta: ["sur", "demande"], vazio: "Aucun plat à la carte.",
    carregar: "Chargement de la carte…", semLigacao: "Pas de connexion à la base de données.",
    sub: "Carte en français, mise à jour avec le manuel des plats et la carte des vins",
    alt: "Quatre affiches illustrées en noir et blanc avec Chico Maria",
  },
  secoes: {
    "Sustento": "Pour commencer", "Paparicos": "Petits plaisirs", "Comedeirices": "Grandes assiettes", "Lambarices": "Gourmandises",
    "Binho": "Vin", "Espumantes": "Effervescents", "Branco": "Blanc", "Rosé": "Rosé", "Tinto": "Rouge", "Sobremesa": "Vins de dessert",
    "Gin": "Gin", "Espirituosas": "Spiritueux", "Cerveja": "Bière", "Laranjadas caseiras": "Sodas maison",
    "Bicas": "Café & thé", "Pingas sem álcool": "Sans alcool", "Coquetéis": "Cocktails",
  },
  niveis: { leve: "Légers et enthousiastes", medio: "Polyvalents et curieux", serio: "Sérieux et complexes" },
  pratos: {
    "trilogia-de-sustentos": { nome: "Trilogie maison", curta: "Pain au levain, beurre aux algues, houmous de lupin, huile d'olive et fleur de sel" },
    "pao-de-massa-mae": { nome: "Pain au levain", curta: "Levain à fermentation naturelle, mélange de farines moulues artisanalement" },
    "manteiga-de-algas": { nome: "Beurre aux algues", curta: "Beurre portugais, laitue de mer" },
    "hummus-de-tremoco": { nome: "Houmous de lupin", curta: "Lupins locaux, ail, huile d'olive, citron" },
    "azeite-virgem-extra": { nome: "Huile d'olive vierge extra", curta: "Huile d'olive premium, fleur de sel, vinaigre de vin rouge" },
    "tabua-de-regionais": { nome: "Planche régionale", curta: "Sélection de fromages, charcuteries et confitures de la région" },
    "sopa-de-outono": { nome: "Soupe d'automne", curta: "Velouté de courge butternut, champignons et châtaignes" },
    "salada-de-frutas": { nome: "Salade de fruits", curta: "Poire Rocha, pomme Bravo de Esmolfe, noix, grenade, fromage frais" },
    "berbigao-a-bulhao-pato": { nome: "Coques à la Bulhão Pato", curta: "Coques des estuaires portugais, ail, citron et coriandre. Version végétarienne aux champignons frais variés (6 €)" },
    "enguia-fumada": { nome: "Anguille fumée", curta: "Tartine à l'huile d'olive, filet d'anguille fumée, mayonnaise à l'ail noir, ponzu de la Gândara, mizuna" },
    "tartaro-de-novilho": { nome: "Tartare de jeune bœuf", curta: "Filet de jeune bœuf, jaune d'œuf fumé, pickles maison, persil" },
    "brioche-desfiado": { nome: "Brioche au porc effiloché", curta: "Brioche au levain, porc noir effiloché, coleslaw pomme et céleri, pickles maison, mayonnaise épicée" },
    "arroz-de-mar": { nome: "Riz de la mer", curta: "Poisson frais du jour, riz carolino du Mondego, coques, algues et salicorne. Option végane aux haricots verts en tempura" },
    "bife-a-chico-maria": { nome: "Steak Chico Maria", curta: "Cœur de rumsteck de pâturages locaux, frites de pommes de terre Agria, légumes du potager sautés" },
    "lombinhos-de-porco-bisaro": { nome: "Filet mignon de porc bísaro", curta: "Filet mignon de porc bísaro et son jus, ragoût de champignons et châtaignes, pommes de terre rôties" },
    "brocolo-grelhado": { nome: "Brocoli grillé", curta: "Fleurettes de brocoli grillées, pesto aux cinq herbes, purée d'amandes de la Beira Interior, amandes grillées, mizuna" },
    "peixe-do-dia": { nome: "Poisson du jour", curta: "Filet de poisson sauvage, purée de pommes de terre, sauce aux haricots canari" },
    "puxa-carroca": { nome: "Puxa carroça", curta: "Pièce noble de races portugaises autochtones, pommes de terre écrasées et légumes du potager" },
    "superfresco": { nome: "Superfresco", curta: "Le choix du chef selon le produit du jour" },
    "tarte-de-abobora": { nome: "Tarte à la courge", curta: "Tarte à la courge Hokkaido, glace vanille et bourbon" },
    "mousse-de-nougat": { nome: "Mousse au nougat", curta: "Nougat de la torréfaction locale, crème, crumble" },
    "maca-e-morangueira": { nome: "Pomme et morangueira", curta: "Pomme rôtie, glace au raisin morangueira de notre treille, crumble d'amandes" },
  },
  bebidas: {
    "espirituosas-aguardente-medronho": { nome: "Eau-de-vie de medronho" },
    "espirituosas-whisky-centeio-black-wolf": { nome: "Whisky de seigle Black Wolf" },
    "espirituosas-aguardente-cr-f": { nome: "Eau-de-vie CR&F" },
    "espirituosas-bagaceira-s-domingos": { nome: "Marc S. Domingos" },
    "espirituosas-vermute-soberbo": { nome: "Vermouth Soberbo" },
    "espirituosas-ginjinha-vila-das-rainhas": { nome: "Ginjinha Vila das Rainhas" },
    "espirituosas-licor-de-cafe": { nome: "Liqueur de café" },
    "espirituosas-amarguinha": { nome: "Amarguinha (amande amère)" },
    "cerveja-cerveja-2-clowns-0-75l": { nome: "Bière 2 Clowns 0,75 l" },
    "laranjadas-caseiras-sumo-de-laranja-natural": { nome: "Jus d'orange pressé" },
    "laranjadas-caseiras-limonada-copo": { nome: "Limonade (verre)" },
    "laranjadas-caseiras-limonada-litro": { nome: "Limonade (litre)" },
    "bicas-cafe-decaf": { nome: "Café / décaféiné" },
    "bicas-galao-capuccino": { nome: "Galão (café au lait) / cappuccino" },
    "bicas-chas-e-infusoes": { nome: "Thés et infusions", nota: "Thé vert Gorreana | Menthe | Verveine citronnée | Citron | Boldo" },
    "pingas-sem-alcool-sumol-laranja-ananas": { nome: "Sumol orange-ananas" },
    "pingas-sem-alcool-tonica": { nome: "Tonic" },
    "pingas-sem-alcool-agua-pedras": { nome: "Eau gazeuse Pedras" },
    "pingas-sem-alcool-pedras": { nome: "Pedras aromatisée", nota: "Citron / Framboise / Mandarine" },
    "pingas-sem-alcool-compal": { nota: "Orange de l'Algarve / Poire Rocha" },
    "pingas-sem-alcool-agua-luso-33cl": { nome: "Eau plate Luso 33 cl" },
    "pingas-sem-alcool-agua-luso-1l": { nome: "Eau plate Luso 1 l" },
    "coqueteis-mula": { nome: "Mule", nota: "Ginger beer maison, citron vert, sirop", nota2: "**Gin, vodka ou rhum de Madère**" },
    "coqueteis-caipi": { nota: "Citron vert, sucre roux", nota2: "Rhum de Madère" },
    "coqueteis-margarida": { nota: "Citron vert, cordial de fleur d'oranger", nota2: "Rhum de Madère, triple sec, amarguinha" },
    "coqueteis-amargo": { nota: "Citron, blanc d'œuf, bitter maison", nota2: "Medronho, whisky ou rhum de Madère" },
    "coqueteis-cafe-com-cheirinho": { nota: "Expresso", nota2: "Liqueur de café et eau-de-vie vieillie" },
    "coqueteis-negroni": { nota: "Orange", nota2: "Gin, Per Se et vermouth" },
  },
  // wine regions, grapes and formats: small phrase replacements, names stay as they are
  vinho: [
    [/Lote em solera desde (\d+)/, "Assemblage en solera depuis $1"], [/Porto branco seco/i, "Porto blanc sec"], [/Colheita tardia/i, "Vendanges tardives"],
    [/\((\d+) anos\)/, "($1 ans)"], [/ e /g, " et "],
  ],
  textos: {
    desde: "Depuis 1940", local: "Vila da Tocha", volume: "Vol. II", lema: "Mieux vaut mal faire que gaspiller",
    aviso: "Avertissement : le contenu de cette carte peut provoquer des sensations d'extase et de transcendance",
    titulo: "Comer esmarado",
    legenda: "Illustrations de Patarra, artiste de la Gândara",
    rodape: "Les principaux allergènes sont indiqués en **gras.**\nDemandez à notre équipe pour les allergènes et autres restrictions alimentaires\nTVA incluse au taux en vigueur",
    texto: `Écrire sur cette idée est presque aussi difficile que de la réaliser. Pas seulement à cause de mon indécision naturelle, mais à cause des multiples visages que cette maison peut prendre. On peut la voir comme l'emblématique taverne-épicerie qui a posé les fondations de ce lieu, le commerce de ce qui était autrefois un village, où se retrouvaient les familles, les travailleurs et les marchands, ou comme un bar and kitchen à la mode, ou simplement comme une tasca de fusion, un concept qui me semble encore à explorer.

Mon grand-père, Francisco Maria Andrade, a créé un lieu fréquenté par des générations, où l'on faisait de son mieux avec ce que notre terre offrait. Sans chaînes de transport, sans fruits de l'autre bout du monde, sans tomates en hiver. On y trouvait peut-être le café et le chocolat qui, ironiquement, vont devenir des denrées rares et de luxe dans les prochaines décennies, plus encore qu'il y a 50 ans, quand ils étaient rares parce que lointains et chers.

Le défi que je lance au chef de cette maison est d'explorer en toute liberté créative le meilleur que l'on puisse faire avec les produits locaux, avec toute la connaissance du monde. Ce que je propose à ceux qui nous rendent visite, ce sont des plats généreux, des recettes perdues, des ingrédients oubliés, ou tout simplement un bife à Chico Maria.

Sans jamais nous laisser enfermer par la tradition, mais sans l'oublier, nous puisons dans les inspirations de la Gândara et les philosophies de Chico Maria pour appliquer au meilleur de notre terre toute la sagesse et la technique que le monde nous apporte.

Manger ce qui est à nous, c'est valoriser le territoire, donner de la force à nos producteurs et à ceux qui prennent soin de nos terres, redonner vie à notre communauté, bien au-delà du sens économique.

Manger ce qui est à nous, c'est aussi manger plus sainement, connaître le visage de celui qui a produit, cultivé ou pêché notre produit. C'est se rappeler qu'il y a beaucoup de bonne cuisine avec les produits d'ici, de la Gândara et des environs, du poisson frais de notre côte aux viandes de pâturage, des légumes de nos voisins au riz du Mondego.

Le choix de cette carte s'inspire d'un imaginaire rétro-futuriste local, désormais dans un format plus proche de la gastronomie fine. Je l'appellerais « comer esmarado ».

Bon appétit !`,
  },
};
