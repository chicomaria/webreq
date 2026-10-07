// Data updates applied once by the app (see migrar() in index.html)
window.MIGRACOES = [
 {
  "id": "2026-10-07-bar-e-precos",
  "categorias": [
   "Bar"
  ],
  "novos": {
   "gelo": {
    "nome": "Gelo (saco 2 kg)",
    "categoria": "Bar",
    "unidade": "saco",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.95,
    "precoUnidade": "saco",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 10
   },
   "agua": {
    "nome": "Água 1,5 L",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.32,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 20
   },
   "cafe": {
    "nome": "Café em grão",
    "categoria": "Bar",
    "unidade": "kg",
    "habitual": null,
    "fornecedor": "",
    "preco": 18.0,
    "precoUnidade": "kg",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 30
   },
   "descafeinado": {
    "nome": "Café descafeinado em grão",
    "categoria": "Bar",
    "unidade": "kg",
    "habitual": null,
    "fornecedor": "",
    "preco": 21.0,
    "precoUnidade": "kg",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 40
   },
   "adamvs": {
    "nome": "Gin Adamus Organic Dry 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 40.97,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 50
   },
   "adamvs-signature": {
    "nome": "Gin Adamus Signature Edition 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 46.58,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 60
   },
   "sharish": {
    "nome": "Gin Sharish Original",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 33.5,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 70
   },
   "black-pig": {
    "nome": "Gin Black Pig Costa Alentejana 50 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 21.94,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 80
   },
   "arbun-medronho": {
    "nome": "Gin Arbun Medronho 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 26.79,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 90
   },
   "foxtale": {
    "nome": "Gin The Foxtale 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 14.63,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 100
   },
   "black-wolf-citrus": {
    "nome": "Gin Black Wolf Citrus 50 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 24.31,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 110
   },
   "ventozelo-dry": {
    "nome": "Gin Ventozelo Dry 50 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 21.13,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 120
   },
   "aguardente-medronho": {
    "nome": "Aguardente de Medronho 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 30.07,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 130
   },
   "whisky-centeio-black-wolf": {
    "nome": "Whisky Black Wolf 100% Centeio 50 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 32.44,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 140
   },
   "rum-william-hinton-3": {
    "nome": "Rum William Hinton 3 Anos 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 21.1,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 150
   },
   "rum-william-hinton-smoked": {
    "nome": "Rum William Hinton Smoked 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 34.62,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 160
   },
   "aguardente-crf": {
    "nome": "Aguardente Velha CR&F Reserva 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 16.25,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 170
   },
   "bagaceira-s-domingos": {
    "nome": "Aguardente Bagaceira São Domingos 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 10.97,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 180
   },
   "vermute-soberbo": {
    "nome": "Vermute Poças Soberbo 75 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 11.97,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 190
   },
   "ginjinha-vila-das-rainhas": {
    "nome": "Ginja Vila das Rainhas com Fruto 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 13.73,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 200
   },
   "licor-beirao": {
    "nome": "Licor Beirão 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 10.4,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 210
   },
   "licor-de-cafe": {
    "nome": "Licor de Café 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 8.13,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança baixa, confirmar).",
    "semanal": true,
    "ordem": 220
   },
   "amarguinha": {
    "nome": "Amarguinha 70 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 8.28,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança alta).",
    "semanal": true,
    "ordem": 230
   },
   "sagres-33": {
    "nome": "Cerveja Sagres 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.75,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 240
   },
   "sagres-zero-33": {
    "nome": "Cerveja Sagres Zero 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.78,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 250
   },
   "sagres-preta-33": {
    "nome": "Cerveja Sagres Preta 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.8,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 260
   },
   "bandida": {
    "nome": "Sidra Bandida do Pomar 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.95,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 270
   },
   "cerveja-2-clowns": {
    "nome": "Cerveja 2 Clowns 75 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 6.0,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança baixa, confirmar).",
    "semanal": true,
    "ordem": 280
   },
   "praxis-imperial-stout": {
    "nome": "Cerveja Praxis Imperial Stout 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 2.4,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança baixa, confirmar).",
    "semanal": true,
    "ordem": 290
   },
   "praxis-encruzado-grape-ale": {
    "nome": "Cerveja Praxis Encruzado Grape Ale 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 2.6,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança baixa, confirmar).",
    "semanal": true,
    "ordem": 300
   },
   "sumol-laranja": {
    "nome": "Sumol Laranja 20 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.55,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 310
   },
   "sumol-ananas": {
    "nome": "Sumol Ananás 20 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.55,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 320
   },
   "why-not-cola": {
    "nome": "Why Not Cola 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.45,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 330
   },
   "why-not-roma-pepino": {
    "nome": "Why Not Romã e Pepino 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.45,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 340
   },
   "why-not-limao": {
    "nome": "Why Not Limão e Erva-Mate 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.45,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 350
   },
   "why-not-framboesa": {
    "nome": "Why Not Framboesa e Tomilho 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.45,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 360
   },
   "why-not-pessego": {
    "nome": "Why Not Pêssego e Gengibre 33 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.45,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 370
   },
   "tonica-fever-tree": {
    "nome": "Água Tónica Fever-Tree 20 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.05,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 380
   },
   "tonica-litro": {
    "nome": "Água Tónica 1 L",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.3,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança baixa, confirmar).",
    "semanal": true,
    "ordem": 390
   },
   "ginger-beer": {
    "nome": "Ginger Beer Fever-Tree 20 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 1.1,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 400
   },
   "agua-pedras": {
    "nome": "Água Pedras Salgadas 25 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.45,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 410
   },
   "pedras-limao": {
    "nome": "Pedras Limão 25 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.7,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 420
   },
   "pedras-framboesa": {
    "nome": "Pedras Framboesa 25 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.7,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 430
   },
   "pedras-tangerina": {
    "nome": "Pedras Tangerina 25 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.7,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 440
   },
   "compal": {
    "nome": "Compal 20 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.65,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 450
   },
   "compal-laranja-algarve": {
    "nome": "Compal Laranja do Algarve 20 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.75,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 460
   },
   "compal-pera-rocha": {
    "nome": "Compal Pera Rocha 20 cl",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.75,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 470
   },
   "agua-luso-1l": {
    "nome": "Água Luso 1 L",
    "categoria": "Bar",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 0.75,
    "precoUnidade": "un",
    "obs": "Preço estimado por pesquisa (confiança média).",
    "semanal": true,
    "ordem": 480
   }
  },
  "precos": {
   "acelga": {
    "preco": 2.0,
    "precoUnidade": "kg",
    "unidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "alcatra": {
    "preco": 60.0,
    "precoUnidade": "peça",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "amendoa-descascada": {
    "preco": 9.5,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "banha-de-porco": {
    "preco": 3.5,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "barriga-de-porco": {
    "preco": 5.2,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "batata-nova": {
    "preco": 0.9,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "berbigao": {
    "preco": 6.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "bimis": {
    "preco": 6.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "bochecha": {
    "preco": 11.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "brioche": {
    "preco": 0.5,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "camarao": {
    "preco": 14.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "carvao": {
    "preco": 9.5,
    "precoUnidade": "saco",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "cenoura-bebe": {
    "preco": 3.5,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "chocolate-em-po": {
    "preco": 6.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "chocolate-negro": {
    "preco": 13.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "chocos": {
    "preco": 9.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "coco-ralado": {
    "preco": 6.5,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "coelho": {
    "preco": 6.8,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "costeletao": {
    "preco": 22.0,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "couve": {
    "preco": 1.2,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "enguia-fumada": {
    "preco": 12.0,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "entrecote": {
    "preco": 19.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "erva-patinha": {
    "preco": 5.0,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "farinha-de-arroz": {
    "preco": 2.2,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "farinha-t00": {
    "preco": 0.85,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "feijao-verde": {
    "preco": 3.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "frutos-vermelhos": {
    "preco": 5.5,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "gelado-de-hibisco": {
    "preco": 22.5,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "gelado-de-maca-assada": {
    "preco": 9.0,
    "precoUnidade": "L",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "gemas": {
    "preco": 8.0,
    "precoUnidade": "L",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "grao-de-bico": {
    "preco": 1.8,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "leite-de-coco-lata": {
    "preco": 1.6,
    "precoUnidade": "lata",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "lombelos": {
    "preco": 8.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "lombinhos-de-porco": {
    "preco": 4.0,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "mel": {
    "preco": 6.5,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "micro-amaranto": {
    "preco": 4.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-borragem": {
    "preco": 5.0,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-capuchinhas": {
    "preco": 5.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-cenoura": {
    "preco": 4.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-endro": {
    "preco": 4.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-erva-cidreira": {
    "preco": 5.0,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-ervilha": {
    "preco": 4.0,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-manjericao": {
    "preco": 4.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-mostarda-amarela": {
    "preco": 4.0,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-rabanete-vulcano": {
    "preco": 4.0,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-rucula": {
    "preco": 4.0,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-salsa": {
    "preco": 4.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-shiso-verde": {
    "preco": 5.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "micro-tagetes-huacatay": {
    "preco": 5.5,
    "precoUnidade": "caixa",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "mistolin": {
    "preco": 2.4,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "nougat": {
    "preco": 14.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "nozes": {
    "preco": 9.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "ovas-de-truta": {
    "preco": 8.12,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "pa-de-porco-desossada": {
    "preco": 12.0,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "pao-da-avo": {
    "preco": 1.6,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "pao-sem-gluten": {
    "preco": 2.5,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "papel-de-aluminio": {
    "preco": 12.0,
    "precoUnidade": "rolo",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "peixe": {
    "preco": 12.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "pimento-para-salada": {
    "preco": 2.5,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "pistacio": {
    "preco": 18.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "presa-de-porco-preto": {
    "preco": 17.0,
    "precoUnidade": "kg",
    "nota": "Preço estimado por pesquisa (confiança média)."
   },
   "t-bone": {
    "preco": 18.0,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança baixa, confirmar)."
   },
   "vinagre-balsamico": {
    "preco": 3.5,
    "precoUnidade": "un",
    "nota": "Preço estimado por pesquisa (confiança média)."
   }
  },
  "ajustes": {
   "aipo-bola": {
    "se": 1.78,
    "seUn": "kg",
    "set": {
     "preco": 1.42,
     "precoUnidade": "un"
    }
   },
   "alface-do-mar": {
    "se": 5.16,
    "seUn": "emb.",
    "set": {
     "precoUnidade": "un"
    }
   },
   "brocolos": {
    "se": 3.26,
    "seUn": "kg",
    "set": {
     "preco": 1.63,
     "precoUnidade": "un"
    }
   },
   "cabelo-de-velha": {
    "se": 4.13,
    "seUn": "emb.",
    "set": {
     "unidade": "emb."
    }
   },
   "cavala": {
    "se": 8,
    "seUn": "kg",
    "set": {
     "preco": 3.2,
     "precoUnidade": "un"
    }
   },
   "laranja": {
    "se": 0.2,
    "seUn": "un",
    "set": {
     "preco": 1.0,
     "precoUnidade": "kg"
    }
   },
   "limao": {
    "se": 0.2,
    "seUn": "un",
    "set": {
     "preco": 1.6,
     "precoUnidade": "kg"
    }
   },
   "micro-beterraba": {
    "se": 79.33,
    "seUn": "kg",
    "set": {
     "preco": 3.97,
     "precoUnidade": "caixa"
    }
   },
   "micro-coentro": {
    "se": 79.33,
    "seUn": "kg",
    "set": {
     "preco": 3.97,
     "precoUnidade": "caixa"
    }
   },
   "micro-mizuna": {
    "se": 2.91,
    "seUn": "emb.",
    "set": {
     "precoUnidade": "caixa"
    }
   },
   "philadelphia": {
    "se": 7.18,
    "seUn": "kg",
    "set": {
     "preco": 35.91,
     "precoUnidade": "un"
    }
   },
   "polvo": {
    "se": 17.23,
    "seUn": "kg",
    "set": {
     "preco": 60.31,
     "precoUnidade": "un"
    }
   },
   "roma": {
    "se": 2.76,
    "seUn": "kg",
    "set": {
     "preco": 0.97,
     "precoUnidade": "un"
    }
   }
  }
 },
 {
  "id": "2026-10-07-folha-francisco",
  "atualizar": {
   "alface-do-mar": {
    "habitual": 4.0
   },
   "erva-patinha": {
    "semanal": false
   },
   "cabelo-de-velha": {
    "habitual": 4.0
   },
   "azeite": {
    "preco": 90.0,
    "semanal": false,
    "precoUnidade": "caixa"
   },
   "gelo": {
    "habitual": 5.0,
    "fornecedor": "Makro"
   },
   "agua": {
    "habitual": 6.0,
    "fornecedor": "CAT"
   },
   "cafe": {
    "fornecedor": "Delta"
   },
   "descafeinado": {
    "fornecedor": "Delta"
   },
   "adamvs": {
    "fornecedor": "Paulino"
   },
   "adamvs-signature": {
    "fornecedor": "Paulino"
   },
   "sharish": {
    "fornecedor": "Garrafeira"
   },
   "black-pig": {
    "fornecedor": "Paulino"
   },
   "arbun-medronho": {
    "fornecedor": "Garrafeira"
   },
   "foxtale": {
    "fornecedor": "Paulino"
   },
   "black-wolf-citrus": {
    "fornecedor": "Garrafeira"
   },
   "ventozelo-dry": {
    "fornecedor": "Garrafeira"
   },
   "aguardente-medronho": {
    "fornecedor": "Garrafeira"
   },
   "whisky-centeio-black-wolf": {
    "fornecedor": "Garrafeira"
   },
   "rum-william-hinton-3": {
    "fornecedor": "Garrafeira"
   },
   "rum-william-hinton-smoked": {
    "fornecedor": "Garrafeira"
   },
   "aguardente-crf": {
    "fornecedor": "Paulino"
   },
   "bagaceira-s-domingos": {
    "fornecedor": "Paulino"
   },
   "vermute-soberbo": {
    "fornecedor": "Garrafeira"
   },
   "ginjinha-vila-das-rainhas": {
    "fornecedor": "Garrafeira"
   },
   "licor-beirao": {
    "fornecedor": "Paulino"
   },
   "licor-de-cafe": {
    "fornecedor": "Paulino",
    "preco": 9.0,
    "obs": ""
   },
   "amarguinha": {
    "fornecedor": "Paulino"
   },
   "sagres-33": {
    "fornecedor": "Paulino"
   },
   "sagres-zero-33": {
    "fornecedor": "Paulino"
   },
   "sagres-preta-33": {
    "fornecedor": "Paulino"
   },
   "bandida": {
    "fornecedor": "Paulino"
   },
   "cerveja-2-clowns": {
    "fornecedor": "Garrafeira",
    "preco": 5.0,
    "obs": ""
   },
   "praxis-imperial-stout": {
    "fornecedor": "Garrafeira",
    "preco": 1.9,
    "obs": ""
   },
   "praxis-encruzado-grape-ale": {
    "fornecedor": "Garrafeira",
    "preco": 6.0,
    "obs": ""
   },
   "sumol-laranja": {
    "fornecedor": "Paulino"
   },
   "sumol-ananas": {
    "fornecedor": "Paulino"
   },
   "why-not-cola": {
    "fornecedor": "Delta"
   },
   "why-not-roma-pepino": {
    "fornecedor": "Delta"
   },
   "why-not-limao": {
    "fornecedor": "Delta"
   },
   "why-not-framboesa": {
    "fornecedor": "Delta"
   },
   "why-not-pessego": {
    "fornecedor": "Delta"
   },
   "tonica-fever-tree": {
    "fornecedor": "Makro"
   },
   "tonica-litro": {
    "fornecedor": "Paulino"
   },
   "ginger-beer": {
    "fornecedor": "Makro"
   },
   "agua-pedras": {
    "fornecedor": "Paulino"
   },
   "pedras-limao": {
    "fornecedor": "Paulino"
   },
   "pedras-framboesa": {
    "fornecedor": "Paulino"
   },
   "pedras-tangerina": {
    "fornecedor": "Paulino"
   },
   "compal": {
    "fornecedor": "Paulino"
   },
   "compal-laranja-algarve": {
    "fornecedor": "Paulino"
   },
   "compal-pera-rocha": {
    "fornecedor": "Paulino"
   },
   "agua-luso-1l": {
    "fornecedor": "Paulino",
    "preco": 0.5,
    "obs": ""
   },
   "t-bone": {
    "preco": 21.0,
    "semanal": false,
    "obs": ""
   },
   "entrecote": {
    "preco": 23.0,
    "obs": ""
   },
   "presa-de-porco-preto": {
    "preco": 27.0,
    "obs": ""
   },
   "lombinhos-de-porco": {
    "preco": 8.5,
    "obs": "Já se pediu 5"
   },
   "lombelos": {
    "preco": 14.0,
    "obs": ""
   },
   "costeletao": {
    "preco": 21.0,
    "precoUnidade": "kg",
    "obs": "Já se pediu 8"
   },
   "pa-de-porco-desossada": {
    "preco": 6.0,
    "precoUnidade": "kg",
    "obs": ""
   },
   "barriga-de-porco": {
    "semanal": false
   },
   "banha-de-porco": {
    "semanal": false
   },
   "frutos-vermelhos": {
    "semanal": false
   },
   "pure-de-abacate": {
    "semanal": false
   },
   "castanhas": {
    "habitual": 2.5,
    "fornecedor": "Makro"
   },
   "coco-ralado": {
    "semanal": false
   },
   "gelado-cosi": {
    "semanal": true
   },
   "gelado-de-hibisco": {
    "preco": 15.0,
    "precoUnidade": "L",
    "obs": ""
   },
   "gelado-de-maca-assada": {
    "preco": 15.0,
    "obs": ""
   },
   "philadelphia": {
    "semanal": false
   },
   "ovos": {
    "preco": 12.0,
    "precoUnidade": "caixa"
   },
   "luvas-de-latex": {
    "semanal": false
   },
   "sacos-de-pasteleiro": {
    "semanal": false
   },
   "grao-de-bico": {
    "semanal": false
   },
   "mel": {
    "semanal": false
   },
   "leite-de-coco-lata": {
    "semanal": false
   },
   "vinagre-balsamico": {
    "semanal": false
   },
   "brioche-bun": {
    "fornecedor": "Jovial"
   },
   "pao-da-avo": {
    "preco": 2.4,
    "obs": "Por vezes 10"
   },
   "pao-sem-gluten": {
    "fornecedor": "Makro"
   },
   "wraps": {
    "semanal": false
   },
   "massa-quebrada": {
    "fornecedor": "Makro"
   },
   "polvo": {
    "semanal": false
   },
   "chocos": {
    "semanal": false
   },
   "camarao": {
    "semanal": false
   },
   "flor-de-sal": {
    "fornecedor": "Makro"
   },
   "sal-grosso": {
    "fornecedor": "Makro"
   },
   "sal-fino": {
    "fornecedor": "Makro"
   },
   "gengibre-em-po": {
    "semanal": false
   },
   "cominhos": {
    "semanal": false
   }
  },
  "apagar": []
 },
 {
  "id": "2026-10-07-vinhos",
  "categorias": [
   "Vinhos"
  ],
  "novos": {
   "vinho-marques-de-marialva-bruto": {
    "nome": "Marquês de Marialva Bruto",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Adega Coop Cantanhede",
    "preco": 4.92,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 14 €",
    "semanal": false,
    "ordem": 10
   },
   "vinho-marques-de-marialva-baga": {
    "nome": "Marquês de Marialva Baga",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Adega Coop Cantanhede",
    "preco": 5.4,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 15 €",
    "semanal": false,
    "ordem": 20
   },
   "vinho-pedra-so-tinta-roriz": {
    "nome": "Pedra Só Tinta Roriz",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Idálio Estanislau",
    "preco": 9.22,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 20 €",
    "semanal": false,
    "ordem": 30
   },
   "vinho-vadio-perpetuum": {
    "nome": "Vadio PERPETUUM",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 24.08,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 41 €",
    "semanal": false,
    "ordem": 40
   },
   "vinho-dinamite-brut-nature": {
    "nome": "Dinamite Brut Nature",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 13.35,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 26 €",
    "semanal": false,
    "ordem": 50
   },
   "vinho-esp-primavera-baga-bruto-0-75": {
    "nome": "ESP.PRIMAVERA BAGA BRUTO 0.75",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 8.59,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 19 €",
    "semanal": false,
    "ordem": 60
   },
   "vinho-primavera-baga-1944-extra-bruto-magnum": {
    "nome": "PRIMAVERA BAGA 1944 EXTRA BRUTO Magnum",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 36.6,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 58 €",
    "semanal": false,
    "ordem": 70
   },
   "vinho-silica-super-reserva-bdn": {
    "nome": "Silica Super reserva BdN",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 9.0,
    "precoUnidade": "un",
    "obs": "Espumante. PVP 20 €",
    "semanal": false,
    "ordem": 80
   },
   "vinho-vinho-branco-qta-do-regueiro-tra-alva-0-75": {
    "nome": "VINHO BRANCO QTA. DO REGUEIRO TRA/ALVA 0.75",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 5.21,
    "precoUnidade": "un",
    "obs": "Branco leve. Crocancia, tartarico. PVP 14 €",
    "semanal": false,
    "ordem": 90
   },
   "vinho-invincible-branco-no-1": {
    "nome": "Invincible Branco No 1",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 8.69,
    "precoUnidade": "un",
    "obs": "Branco leve. Secura máxima, acompanha peixe e mar. PVP 19 €",
    "semanal": false,
    "ordem": 100
   },
   "vinho-casta-boa": {
    "nome": "Casta boa",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Jorge Saleiro",
    "preco": 5.0,
    "precoUnidade": "un",
    "obs": "Branco leve. Alvarinho competente. PVP 14 €",
    "semanal": false,
    "ordem": 110
   },
   "vinho-pedra-so-bical-arinto": {
    "nome": "Pedra Só Bical Arinto",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Idálio Estanislau",
    "preco": 9.22,
    "precoUnidade": "un",
    "obs": "Branco leve. Alta acidez do arinto, gordura do bical. PVP 20 €",
    "semanal": false,
    "ordem": 120
   },
   "vinho-vinho-branco-titan-of-douro-0-75l": {
    "nome": "Vinho Branco Titan of Douro 0,75L",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 9.38,
    "precoUnidade": "un",
    "obs": "Branco médio. Madeira e estrutura. PVP 20 €",
    "semanal": false,
    "ordem": 130
   },
   "vinho-impecavel-encruzado-2022": {
    "nome": "IMPECÁVEL ENCRUZADO 2022",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Carlos raposo",
    "preco": 12.51,
    "precoUnidade": "un",
    "obs": "Branco médio. Frescura, fruta nova, encruzado icónico do carlos raposo. sem madeira. PVP 25 €",
    "semanal": false,
    "ordem": 140
   },
   "vinho-botao-bical": {
    "nome": "Botão Bical",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Nuno Jorge",
    "preco": 9.72,
    "precoUnidade": "un",
    "obs": "Branco médio. Quase curtimenta, complexo, notas de ferm secundárias. PVP 21 €",
    "semanal": false,
    "ordem": 150
   },
   "vinho-oboe": {
    "nome": "Oboé",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 35.0,
    "precoUnidade": "un",
    "obs": "Branco médio. Suspensão de particulas por ultrasons, tencicas avançadas de vinificação. PVP 56 €",
    "semanal": false,
    "ordem": 160
   },
   "vinho-v-branco-bairrada-aleixo-reserva-2020-5lt": {
    "nome": "V.Branco Bairrada Aleixo Reserva 2020 5lt",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 41.81,
    "precoUnidade": "un",
    "obs": "Branco médio. Corpo, maduro, algum envelhecimento e complexidade. PVP 66 €",
    "semanal": false,
    "ordem": 170
   },
   "vinho-vinhos-rominha-branco-talha-2021": {
    "nome": "Vinhos Rominha Branco Talha 2021",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 14.67,
    "precoUnidade": "un",
    "obs": "Branco sério. Complexo, secura e tons do barro, cor laranja, fermentações secundárias, acidez suave. PVP 28 €",
    "semanal": false,
    "ordem": 180
   },
   "vinho-filipa-pato-branco-dinamica": {
    "nome": "Filipa Pato Branco Dinâmica",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 11.37,
    "precoUnidade": "un",
    "obs": "Branco sério. Vinho artesanal. PVP 23 €",
    "semanal": false,
    "ordem": 190
   },
   "vinho-luis-pato-vv": {
    "nome": "Luís pato VV",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 8.85,
    "precoUnidade": "un",
    "obs": "Branco sério. PVP 19 €",
    "semanal": false,
    "ordem": 200
   },
   "vinho-torre-de-palma-arinto-alvarinho": {
    "nome": "Torre de palma Arinto Alvarinho",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Nuno Jorge",
    "preco": 18.0,
    "precoUnidade": "un",
    "obs": "Branco sério. PVP 32 €",
    "semanal": false,
    "ordem": 210
   },
   "vinho-reserva-do-comendador": {
    "nome": "Reserva do Comendador",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Delta",
    "preco": 16.95,
    "precoUnidade": "un",
    "obs": "Branco sério. PVP 31 €",
    "semanal": false,
    "ordem": 220
   },
   "vinho-bageiras-colheita": {
    "nome": "Bageiras Colheita",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Makro",
    "preco": 7.8,
    "precoUnidade": "un",
    "obs": "Branco médio. Madeira e uva madura. PVP 18 €",
    "semanal": false,
    "ordem": 230
   },
   "vinho-mob-encruzado": {
    "nome": "MOB Encruzado",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 20.0,
    "precoUnidade": "un",
    "obs": "Branco. PVP 35 €",
    "semanal": false,
    "ordem": 240
   },
   "vinho-gadarum-rose": {
    "nome": "Gadarum rosé",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 10.0,
    "precoUnidade": "un",
    "obs": "Rosé. Frutos vermelhos, levemente doce, boa acidez. PVP 21 €",
    "semanal": false,
    "ordem": 250
   },
   "vinho-pedra-so-baga": {
    "nome": "Pedra Só Baga",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Idálio Estanislau",
    "preco": 11.69,
    "precoUnidade": "un",
    "obs": "Rosé. Seco, madeira. PVP 23 €",
    "semanal": false,
    "ordem": 260
   },
   "vinho-adega-vila-real": {
    "nome": "Adega Vila Real",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 3.0,
    "precoUnidade": "un",
    "obs": "Tinto leve. PVP 11 €",
    "semanal": false,
    "ordem": 270
   },
   "vinho-quinta-dos-termos-vv": {
    "nome": "Quinta dos termos VV",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Makro",
    "preco": 7.5,
    "precoUnidade": "un",
    "obs": "Tinto leve. PVP 18 €",
    "semanal": false,
    "ordem": 280
   },
   "vinho-quinta-vale-da-roca-pinot-noir": {
    "nome": "Quinta Vale da Roca Pinot Noir",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Nuno Jorge",
    "preco": 20.62,
    "precoUnidade": "un",
    "obs": "Tinto leve. PVP 36 €",
    "semanal": false,
    "ordem": 290
   },
   "vinho-negra-mole-arvad": {
    "nome": "Negra Mole Arvad",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 14.23,
    "precoUnidade": "un",
    "obs": "Tinto leve. PVP 27 €",
    "semanal": false,
    "ordem": 300
   },
   "vinho-indio-rei": {
    "nome": "indio rei",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 10.0,
    "precoUnidade": "un",
    "obs": "Tinto leve. PVP 21 €",
    "semanal": false,
    "ordem": 310
   },
   "vinho-vinho-tinto-0-75l-botao-2020": {
    "nome": "Vinho Tinto 0.75L Botão 2020",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Nuno Jorge",
    "preco": 10.74,
    "precoUnidade": "un",
    "obs": "Tinto médio. PVP 22 €",
    "semanal": false,
    "ordem": 320
   },
   "vinho-gadarum-tinto": {
    "nome": "Gadarum tinto",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Rui RVV",
    "preco": 10.0,
    "precoUnidade": "un",
    "obs": "Tinto médio. PVP 21 €",
    "semanal": false,
    "ordem": 330
   },
   "vinho-mm-baga": {
    "nome": "MM baga",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Adega Coop Cantanhede",
    "preco": 6.4,
    "precoUnidade": "un",
    "obs": "Tinto médio. PVP 16 €",
    "semanal": false,
    "ordem": 340
   },
   "vinho-vadio-tinto-75-cl": {
    "nome": "Vadio Tinto 75 Cl",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 13.06,
    "precoUnidade": "un",
    "obs": "Tinto sério. PVP 25 €",
    "semanal": false,
    "ordem": 350
   },
   "vinho-avo-fausto": {
    "nome": "Avo Fausto",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 25.31,
    "precoUnidade": "un",
    "obs": "Tinto sério. PVP 42 €",
    "semanal": false,
    "ordem": 360
   },
   "vinho-sidonio-de-sousa-garrafeira": {
    "nome": "Sidónio de Sousa Garrafeira",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 57.63,
    "precoUnidade": "un",
    "obs": "Tinto sério. PVP 88 €",
    "semanal": false,
    "ordem": 370
   },
   "vinho-cave-primavera-baga": {
    "nome": "Cave primavera BAGA",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 22.0,
    "precoUnidade": "un",
    "obs": "Tinto sério. Magnum. PVP 38 €",
    "semanal": false,
    "ordem": 380
   },
   "vinho-bageiras-reserva": {
    "nome": "Bageiras reserva",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Makro",
    "preco": 13.0,
    "precoUnidade": "un",
    "obs": "Tinto sério. PVP 25 €",
    "semanal": false,
    "ordem": 390
   },
   "vinho-quinta-dos-nogueiroes-reserva-tinto": {
    "nome": "Quinta dos Nogueirões Reserva Tinto",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 13.0,
    "precoUnidade": "un",
    "obs": "Tinto. PVP 25 €",
    "semanal": false,
    "ordem": 400
   },
   "vinho-vinha-pan-tinto": {
    "nome": "Vinha Pan Tinto",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 37.38,
    "precoUnidade": "un",
    "obs": "Tinto. PVP 59 €",
    "semanal": false,
    "ordem": 410
   },
   "vinho-v-p-niepoort-dry-white-75-cl": {
    "nome": "V. P. Niepoort Dry White 75 Cl",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 8.59,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 19 €",
    "semanal": false,
    "ordem": 420
   },
   "vinho-messias-10-anos-tawny": {
    "nome": "Messias 10 anos Tawny",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 16.58,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 30 €",
    "semanal": false,
    "ordem": 430
   },
   "vinho-lbv-niepoort": {
    "nome": "LBV Niepoort",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 15.0,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 28 €",
    "semanal": false,
    "ordem": 440
   },
   "vinho-quinta-dos-penassais-late-harvest": {
    "nome": "Quinta dos Penassais Late Harvest",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 15.29,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 28 €",
    "semanal": false,
    "ordem": 450
   },
   "vinho-moscatel-horacio-simoes": {
    "nome": "Moscatel Horácio Simões",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 20.5,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 36 €",
    "semanal": false,
    "ordem": 460
   },
   "vinho-madeira-justinos-fanal": {
    "nome": "Madeira Justinos Fanal",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "Abel",
    "preco": 36.1,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 58 €",
    "semanal": false,
    "ordem": 470
   },
   "vinho-abafado-bageiras": {
    "nome": "Abafado Bageiras",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 45.0,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 70 €",
    "semanal": false,
    "ordem": 480
   },
   "vinho-madeira-barbeito": {
    "nome": "Madeira Barbeito",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 12.0,
    "precoUnidade": "un",
    "obs": "Fortificado. PVP 24 €",
    "semanal": false,
    "ordem": 490
   },
   "vinho-saima-baga-corga-2020": {
    "nome": "Saima Baga Corga 2020",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 10.17,
    "precoUnidade": "un",
    "obs": "Tipo por confirmar. PVP 21 €",
    "semanal": false,
    "ordem": 500
   },
   "vinho-ataide-semedo-garrafeira": {
    "nome": "Ataíde Semedo Garrafeira",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": null,
    "precoUnidade": "un",
    "obs": "Tipo por confirmar",
    "semanal": false,
    "ordem": 510
   },
   "vinho-ps": {
    "nome": "PS",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 16.19,
    "precoUnidade": "un",
    "obs": "Tipo por confirmar. PVP 30 €",
    "semanal": false,
    "ordem": 520
   },
   "vinho-outrora": {
    "nome": "Outrora",
    "categoria": "Vinhos",
    "unidade": "un",
    "habitual": null,
    "fornecedor": "",
    "preco": 39.29,
    "precoUnidade": "un",
    "obs": "Tipo por confirmar. PVP 62 €",
    "semanal": false,
    "ordem": 530
   }
  }
 },
 {
  "id": "2026-10-07-vinhos-remover",
  "apagar": [
   "vinho-saima-baga-corga-2020",
   "vinho-bageiras-reserva",
   "vinho-reserva-do-comendador",
   "vinho-mob-encruzado",
   "vinho-quinta-vale-da-roca-pinot-noir",
   "vinho-ataide-semedo-garrafeira",
   "vinho-oboe",
   "vinho-botao-bical",
   "vinho-silica-super-reserva-bdn",
   "vinho-mm-baga"
  ]
 },
 {
  "id": "2026-10-07-pa-de-porco",
  "atualizar": {
   "pa-de-porco-desossada": {
    "preco": 19.6,
    "precoUnidade": "un",
    "obs": "5,60 €/kg; cada peça tem 3 a 4 kg (custo calculado com 3,5 kg)."
   }
  }
 }
];
