const black_cards = [
"black/abortador-da-frota-abissal",
"black/aquisicao-do-mentor",
"black/bau-do-morto",
"black/cacador-de-dinossauros",
"black/campeao-do-crepusculo",
"black/canalha-ganancioso",
"black/chupacabra-voraz",
"black/corcel-do-crepusculo",
"black/destino-horripilante",
"black/emboscada-dos-saqueadores",
"black/empalar",
"black/envenenadora-da-frota-macabra",
"black/espectro-vampirico",
"black/fluxo-arterial",
"black/fome-de-vona",
"black/harpia-do-mausoleu",
"black/interrogatorio-sombrio",
"black/ladrao-de-tumbas",
"black/marchador-celeste-sadico",
"black/momento-de-avidez",
"black/perecimento-dourado",
"black/pioneira-da-coalizao",
"black/profeta-do-crepusculo",
"black/recuperar",
"black/saqueador-impiedoso",
"black/saurio-do-canal",
"black/tetzimoc-morte-primordial",
"black/vampiro-jurado",
"black/vampiro-voraz",
"black/zelote-da-legiao-do-crepusculo"
];

const blue_cards = [
"blue/adepto-prateobranquio",
"blue/alma-das-corredeiras",
"blue/amnesia-induzida",
"blue/arauta-do-manto-de-bruma",
"blue/atraicoar",
"blue/augure-fluviossabio",
"blue/canalha-ardilosa",
"blue/cordamista-do-olho-morto",
"blue/corsario-do-aeroveleiro",
"blue/dardejadora-do-rio",
"blue/despertar-de-kumena",
"blue/despojador-sireno",
"blue/expelir-de-orazca",
"blue/exurrada-de-recordacoes",
"blue/guardia-jurada",
"blue/incursao-aquatica",
"blue/ladra-astuta",
"blue/mare-esmagadora",
"blue/marinheiro-de-posses",
"blue/navegadora-do-fluxo-temporal",
"blue/negar",
"blue/nezahal-mare-primordial",
"blue/no-dagua",
"blue/obsessao-curiosa",
"blue/oraculo-do-fundo-do-mar",
"blue/ordem-da-almirante",
"blue/pe-de-mar",
"blue/saqueador-do-aeroveleiro-belico",
"blue/segredos-da-cidade-dourada",
"blue/serpenteador-das-torres",
"blue/soltar-ao-vento"
];

const green_cards = [
"green/adentrar-o-desconhecido",
"green/armassauro-superdesenvolvido",
"green/artesado-jadeiro",
"green/bocarra-sinistra-colossal",
"green/brontodonte-destruidor",
"green/cacar-os-fracos",
"green/cacofossauro",
"green/caminho-da-descoberta",
"green/cavaleiro-do-estouro",
"green/convocador-da-manada-cristado",
"green/desbravadora-silvonata",
"green/dorso-frisado-de-orazca",
"green/driade-germinadora",
"green/elite-de-raiz-profunda",
"green/espreitadora-do-bosque-douro",
"green/filhote-querido",
"green/forca-da-manada",
"green/ghalta-fome-primordial",
"green/gladiodonte-descontrolado",
"green/guardia-veloz",
"green/impeto-agressivo",
"green/migracao-da-manada-do-trovao",
"green/molda-mundo",
"green/naturalizar",
"green/patrulheiro-jadeluzente",
"green/pioneira-dos-arautos",
"green/polirraptor",
"green/portadora-do-jade",
"green/tombar",
"green/veterana-calejada"
];

const red_cards = [
"red/abalar-as-fundacoes",
"red/bombardear",
"red/bravata-da-bucaneira",
"red/bucaneira-ousada",
"red/coroa-de-tilionalli",
"red/corsario-bravateiro",
"red/cospe-morte-franjado",
"red/cristocorneo-desembestado",
"red/desbravador-goblin",
"red/destemida-da-frota-macabra",
"red/espadachim-da-frota-da-tormenta",
"red/estilhacar",
"red/etali-tormenta-primordial",
"red/fenix-reavivante",
"red/ferocidontes-de-armadura-argentea",
"red/filibusteira-bronzea",
"red/forma-do-dinossauro",
"red/furia-temeraria",
"red/instigador-fanatico",
"red/invocadora-de-tilonalli",
"red/motim",
"red/pilhagem-do-pirata",
"red/pioneiro-do-imperio",
"red/presodonte-atacante",
"red/raptor-aguilhodonte",
"red/raptor-de-orazca",
"red/raptor-gola-de-sol",
"red/recompensa-de-bronze",
"red/sol-sangrento",
"red/ver-vermelho"
];

const white_cards = [
"white/altissauro-do-templo",
"white/amarras-luminosas",
"white/aspirante-a-marchadora-celeste",
"white/bispo-do-aprisionamento",
"white/campea-da-aurora-eterna",
"white/ceratopo-imperial",
"white/companheiro-raptor",
"white/conquistador-da-legiao",
"white/decreto-da-esfinge",
"white/destino-radiante",
"white/devocao-da-escudeira",
"white/esperanca-resplandecente",
"white/fim-desconcertante",
"white/fulmen-purificador",
"white/glorificadora-sanguinea",
"white/helioptero-majestico",
"white/marchadora-celeste-exultante",
"white/martir-do-crepusculo",
"white/matar-os-fortes",
"white/momento-do-triunfo",
"white/orgulho-dos-conquistadores",
"white/paladino-da-expiacao",
"white/paladino-faminto",
"white/pioneiro-da-legiao",
"white/pterodonte-crista-solar",
"white/sentinela-nodocornea",
"white/sentinela-solar",
"white/tirano-armandibula",
"white/veredito-divino",
"white/zetalpa-aurora-primordial"
];

const multicolored_cards = [
"multicolored/angrath-das-correntes-flamejantes",
"multicolored/azor-o-legislador",
"multicolored/brigao-da-olho-morto",
"multicolored/caminho-da-bravura",
"multicolored/caminho-da-bravura-metzali-torre-do-triunfo",
"multicolored/ceratopo-chifre-de-cerco",
"multicolored/elenda-a-rosa-do-crepusculo",
"multicolored/grifo-resplandecente",
"multicolored/huatli-campea-radiante",
"multicolored/invadir-a-camara",
"multicolored/invadir-a-camara-camara-de-catlacan",
"multicolored/jornada-para-a-eternidade",
"multicolored/jornada-para-a-eternidade-atzal-caverna-da-eternidade",
"multicolored/kumena-tirano-de-orazca",
"multicolored/procissao-profana",
"multicolored/procissao-profana-tumba-da-rosa-do-crepusculo",
"multicolored/quebra-pescocos-da-frota-macabra",
"multicolored/raptor-implacavel",
"multicolored/rastejador-da-selva",
"multicolored/regissauro-enfurecido",
"multicolored/saqueadora-multiforme",
"multicolored/subida-de-adana",
"multicolored/subida-de-hadana-templo-alado-de-orazca",
"multicolored/tenente-da-legiao",
"multicolored/trita-das-nevoas",
"multicolored/velocista-da-frota-da-tormenta",
"multicolored/vidente-de-atzocan",
"multicolored/zacama-calamidade-primordial"
];

const artifacts_cards = [
"artifacts/amalgama-acordado",
"artifacts/amuleto-do-viajante",
"artifacts/arreio-de-andarilho",
"artifacts/barreira-reluzente",
"artifacts/guardiao-aureo",
"artifacts/guardiao-aureo-guarnicao-da-forja-do-ouro",
"artifacts/lapide-silenciosa",
"artifacts/o-sol-imortal",
"artifacts/portal-de-azor",
"artifacts/portal-de-azor-sacrario-do-sol",
"artifacts/pt_XaMrosoV0P",
"artifacts/reliquia-de-orazca"
];

const land_cards = [
"lands/arco-de-orazca",
"lands/lago-montanhes",
"lands/pedreira",
"lands/pomar-hediondo",
"lands/riacho-da-floresta",
"lands/santuario-abandonado",
"lands/terras-em-desenvolvimento"
];

for (let card of black_cards) {
	$('#black-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}
for (let card of blue_cards) {
	$('#blue-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}
for (let card of green_cards) {
	$('#green-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}
for (let card of red_cards) {
	$('#red-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}
for (let card of white_cards) {
	$('#white-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}
for (let card of multicolored_cards) {
	$('#multicolored-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}
for (let card of artifacts_cards) {
	$('#artifacts-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}
for (let card of land_cards) {
	$('#land-cards').append(`<img src="../img/cards/pt-br/rix-cards/${card}.png">`)
}