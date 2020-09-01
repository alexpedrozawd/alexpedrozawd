const black_cards = [
"black/anointed-deacon",
"black/arguels-blood-fast",
"black/arguels-blood-fast-temple-of-aclazotz",
"black/bishop-of-the-bloodstained",
"black/blight-keeper",
"black/bloodcrazed-paladin",
"black/boneyard-parley",
"black/contract-killing",
"black/costly-plunder",
"black/dark-nourishment",
"black/deadeye-tormentor",
"black/deadeye-tracker",
"black/deathless-ancient",
"black/desperate-castaways",
"black/dire-fleet-hoarder",
"black/dire-fleet-interloper",
"black/dire-fleet-ravager",
"black/duress",
"black/fathom-fleet-cutthroat",
"black/fatom-fleet-captain",
"black/grim-captains-call",
"black/heartless-pillage",
"black/kitesail-freebooter",
"black/lurking-chupacabra",
"black/march-of-the-drowned",
"black/mark-of-the-vampire",
"black/queens-agent",
"black/queens-bay-soldier",
"black/raiders-wake",
"black/revel-in-riches",
"black/ruin-raider",
"black/ruthless-knave",
"black/sanctum-seeker",
"black/seekers-squire",
"black/skittering-heartstopper",
"black/skulduggery",
"black/skymarch-bloodletter",
"black/spreading-rot",
"black/sword-point-diplomacy",
"black/vanquish-the-weak",
"black/vicious-conquistador",
"black/vraskas-contempt",
"black/walk-the-plank",
"black/wanted-scoundrels"
];

const blue_cards = [
"blue/air-elemental",
"blue/arcane-adaptation",
"blue/cancel",
"blue/chart-a-course",
"blue/daring-saboteur",
"blue/deadeye-quartermaster",
"blue/deeproot-waters",
"blue/depths-of-desire",
"blue/dive-down",
"blue/dreamcaller-siren",
"blue/entrancing-melody",
"blue/favorable-winds",
"blue/fleet-swallower",
"blue/headwater-sentries",
"blue/herald-of-secrets-streams",
"blue/jace-cunning-castaway",
"blue/kopala-warden-of-waves",
"blue/lookouts-dispersal",
"blue/navigators-ruin",
"blue/one-with-the-wind",
"blue/opt",
"blue/overflowing-insight",
"blue/perilous-voyage",
"blue/pirates-prize",
"blue/prosperous-pirates",
"blue/river-sneak",
"blue/rivers-rebuke",
"blue/run-aground",
"blue/sailor-of-means",
"blue/search-for-azcanta",
"blue/search-for-azcanta-azcanta-the-sunken-ruin",
"blue/shaper-apprentice",
"blue/shipwreck-looter",
"blue/shore-keeper",
"blue/siren-lookout",
"blue/sirens-ruse",
"blue/siren-stormtamer",
"blue/spell-pierce",
"blue/spell-swindle",
"blue/storm-fleet-aerialist",
"blue/storm-fleet-spy",
"blue/storm-sculptor",
"blue/tempest-caller",
"blue/watertrap-weaver",
"blue/wind-strider"
];

const green_cards = [
"green/ancient-brontodon",
"green/atzocan-archer",
"green/blinding-fog",
"green/blossom-dryad",
"green/carnage-tyrant",
"green/colossal-dreadmaw",
"green/commune-with-dinosaurs",
"green/crash-the-ramparts",
"green/crushing-canopy",
"green/deathgorge-scavenger",
"green/deeproot-champion",
"green/deeproot-warrior",
"green/drover-of-the-mighty",
"green/emergent-growth",
"green/emperors-vanguard",
"green/grazing-whiptail",
"green/growing-rites-of-itlimoc",
"green/growing-rites-of-itlimoc-itlimoc-cradle-of-the-sun",
"green/ixallis-diviner",
"green/ixallis-keeper",
"green/jade-guardian",
"green/jungle-delver",
"green/kumenas-speaker",
"green/merfolk-brachwalker",
"green/new-horizons",
"green/old-growth-dryads",
"green/pounce",
"green/ranging-raptors",
"green/ravenous-daggertooth",
"green/ripjaw-raptor",
"green/river-heralds-boon",
"green/savage-stomp",
"green/shapers-sanctuary",
"green/slice-in-twain",
"green/snapping-sailback",
"green/spike-tailed-ceratops",
"green/thundering-spineback",
"green/tishanas-wayfinder",
"green/verdant-rebirth",
"green/verdant-suns-avatar",
"green/vineshaper-mystic",
"green/waker-of-the-wilds",
"green/wildgrowth-walker"
];

const red_cards = [
"red/angraths-marauders",
"red/bonded-horncrest",
"red/brazen-buccaneers",
"red/burning-suns-avatar",
"red/captain-lannery-storm",
"red/captivating-crew",
"red/charging-monstrosaur",
"red/demolish",
"red/dinosaur-stampede",
"red/dual-shot",
"red/fathom-fleet-firebrand",
"red/fiery-cannonade",
"red/firecannon-blast",
"red/fire-shrine-keeper",
"red/frenzied-raptor",
"red/headstrong-brute",
"red/hjack",
"red/lightning-rig-crew",
"red/lightning-strike",
"red/makeshift-munitions",
"red/nest-robber",
"red/otepec-huntmaster",
"red/rampaging-ferocidon",
"red/raptor-hatchling",
"red/repeating-barrage",
"red/rigging-runner",
"red/rile",
"red/rowdy-crew",
"red/rummaging-goblin",
"red/star-of-extinction",
"red/storm-fleet-arsonist",
"red/storm-fleet-pyromancer",
"red/sunbirds-invocation",
"red/sun-crowned-hunters",
"red/sure-strike",
"red/swashbukling",
"red/thrash-of-raptors",
"red/tilonallis-knight",
"red/tilonallis-skinshifter",
"red/trove-of-temptation",
"red/unfriendly-fire",
"red/vances-blasting-cannons",
"red/vinces-blasting-cannons-spitfire-bastion",
"red/wily-goblin"
];

const white_cards = [
"white/adanto-vanguard",
"white/ashes-of-the-abhorrent",
"white/axis-of-mortality",
"white/bellowing-aegisaur",
"white/bishop-of-rebirth",
"white/bishops-soldier",
"white/bright-reprisal",
"white/demystify",
"white/duskborne-skymarcher",
"white/emissary-of-sunrise",
"white/encampment-keeper",
"white/glorifier-of-dusk",
"white/goring-ceratops",
"white/imperial-aerosaur",
"white/imperial-lancer",
"white/inspiring-cleric",
"white/ixalans-binding",
"white/kinjallis-caller",
"white/kinjallis-sunwing",
"white/legion-conquistador",
"white/legions-judgement",
"white/legions-landing",
"white/legions-landing-adanto-the-first-fort",
"white/looming-altisaur",
"white/mavren-fein-dusk-apostle",
"white/paladin-of-the-bloodstained",
"white/pious-interdiction",
"white/priest-of-the-wakening-sun",
"white/pterodon-knight",
"white/queens-commission",
"white/rallying-roar",
"white/raptor-companion",
"white/ritual-of-rejuvenation",
"white/sanguine-sacrament",
"white/settle-the-wreckage",
"white/sheltering-light",
"white/shining-aerosaur",
"white/skyblade-of-the-legion",
"white/slash-of-talons",
"white/steadfast-armasaur",
"white/sunrise-seeker",
"white/territorial-hammerskull",
"white/tocatli-honor-guard",
"white/vampires-zeal",
"white/wakening-suns-avatar"
];

const multicolored_cards = [
"multicolored/admiral-beckett-brass",
"multicolored/belligerent-brontodon",
"multicolored/call-to-the-feast",
"multicolored/deadeye-plunderers",
"multicolored/dire-fleet-captain",
"multicolored/gishath-suns-avatar",
"multicolored/hostage-taker",
"multicolored/huatli-warrior-poet",
"multicolored/marauding-looter",
"multicolored/raging-swordtooth",
"multicolored/regisaur-alpha",
"multicolored/shapers-of-nature",
"multicolored/sky-terror",
"multicolored/tishana-voice-of-thunder",
"multicolored/vona-butcher-of-magan",
"multicolored/vraska-relic-seeker"
];

const artifacts_cards = [
"artifacts/cobbled-wings",
"artifacts/conquerors-galleon",
"artifacts/conquerors-galleon-conquerors-foothold",
"artifacts/dowsing-dagger",
"artifacts/dowsing-dagger-lost-vale",
"artifacts/dusk-legion-dreadnought",
"artifacts/elaborate-firecannon",
"artifacts/fell-flagship",
"artifacts/gilded-sentinel",
"artifacts/hierophants-chalice",
"artifacts/pillar-of-origins",
"artifacts/pirate's-cutlass",
"artifacts/primal-amulet",
"artifacts/primal-amulet-primal-wellspring",
"artifacts/prying-blade",
"artifacts/sentinel-totem",
"artifacts/shadowed-caravel",
"artifacts/sleek-schooner",
"artifacts/sorcerous-spyglass",
"artifacts/thaumatic-compass",
"artifacts/thaumatic-compass-spires-of-orazca",
"artifacts/treasure-map",
"artifacts/treasure-map-treasure-cove",
"artifacts/vanquishers-banner"
];

const land_cards = [
"lands/dragonskull-summit",
"lands/drowned-catacomb",
"lands/field-of-ruin",
"lands/glacial-fortress",
"lands/rootbound-crag",
"lands/unclaimed-territory",
"lands/unknow-shores"
];

for (let card of black_cards) {
	$('#black-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}
for (let card of blue_cards) {
	$('#blue-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}
for (let card of green_cards) {
	$('#green-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}
for (let card of red_cards) {
	$('#red-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}
for (let card of white_cards) {
	$('#white-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}
for (let card of multicolored_cards) {
	$('#multicolored-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}
for (let card of artifacts_cards) {
	$('#artifacts-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}
for (let card of land_cards) {
	$('#land-cards').append(`<img src="../img/cards/en-gb/xln-cards/${card}.png">`)
}