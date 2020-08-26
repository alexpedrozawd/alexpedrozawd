const black_cards = [
"black/arterial-flow",
"black/canal-monitor",
"black/champion-of-dusk",
"black/dark-inquiry",
"black/dead-mans-chest",
"black/dinosaur-hunter",
"black/dire-fleet-poisoner",
"black/dusk-charger",
"black/dusk-legion-zealot",
"black/fathom-fleet-boarder",
"black/forerunner-of-the-coalition",
"black/golden-demise",
"black/grasping-scoundrel",
"black/gruesome-fate",
"black/impale",
"black/masterminds-acquisition",
"black/mausoleum-harpy",
"black/moment-of-craving",
"black/oathsworn-vampire",
"black/pitiless-plunderer",
"black/ravenous-chupacabra",
"black/reaver-ambush",
"black/recover",
"black/sadistic-skymarcher",
"black/tetzimoc-primal-death",
"black/tomb-robber",
"black/twilight-prophet",
"black/vampire-revenant",
"black/vonas-hunger",
"black/voracious-vampire"
];

const blue_cards = [
"blue/admirals-order",
"blue/aquatic-incursion",
"blue/crafty-cutpurse",
"blue/crashing-tide",
"blue/curious-obsession",
"blue/deadeye-rig-hauler",
"blue/expel-from-orazca",
"blue/flood-of-recollection",
"blue/hornsoggle",
"blue/induced-amnesia",
"blue/kitesail-corsair",
"blue/kumenas-awakening",
"blue/mist-cloaked-herald",
"blue/negate",
"blue/nezahal-primal-tide",
"blue/release-to-the-wind",
"blue/river-darter",
"blue/riverwise-augur",
"blue/sailor-of-means",
"blue/seafloor-oracle",
"blue/sea-legs",
"blue/secrets-of-the-golden-city",
"blue/silvergil-adept",
"blue/siren-reaver",
"blue/slippery-scoundrel",
"blue/soul-of-the-rapids",
"blue/spire-winder",
"blue/sworn-guardian",
"blue/timestream-navigator",
"blue/warkite-marauder",
"blue/waterknot"
];

const green_cards = [
"green/aggressive-urge",
"green/cacophodon",
"green/cherished-hatchling",
"green/colossal-dreadmaw",
"green/crested-herdcaller",
"green/deeproot-elite",
"green/enter-the-unknown",
"green/forerunner-of-the-heralds",
"green/ghalta-primal-hunger",
"green/giltgrove-stalker",
"green/hardy-veteran",
"green/hunt-the-weak",
"green/jade-bearer",
"green/jadecraft-artisan",
"green/jadelight-ranger",
"green/jungleborn-pioneer",
"green/knight-of-the-stampede",
"green/naturalize",
"green/orazca-frillback",
"green/overgrown-armasaur",
"green/path-of-discovery",
"green/plummet",
"green/polyraptor",
"green/strengh-of-the-pack",
"green/swift-warden",
"green/tendershoot-dryad",
"green/thrashing-brontodon",
"green/thunderherd-migration",
"green/wayward-swordtooth",
"green/world-shaper"
];

const red_cards = [
"red/blood-sun",
"red/bombard",
"red/brasss-bounty",
"red/brazen-freebooter",
"red/buccaneers-bravado",
"red/charging-tuskodon",
"red/daring-buccaneer",
"red/dire-fleet-daredevil",
"red/etali-primal-storm",
"red/fanatical-firebrand",
"red/forerunner-of-the-empire",
"red/form-of-the-dinosaur",
"red/frilled-deathspitter",
"red/goblin-trailblazer",
"red/munity",
"red/needletooth-raptor",
"red/orazca-raptor",
"red/pirates-pillage",
"red/reckless-rage",
"red/rekindiling-phoenix",
"red/see-red",
"red/shake-the-foundations",
"red/shatter",
"red/silverclad-ferocidons",
"red/stampeding-horncrest",
"red/storm-fleet-swashbuckler",
"red/sun-collared-raptor",
"red/swaggering-corsair",
"red/tilonallis-crown",
"red/tilonallis-summoner"
];

const white_cards = [
"white/baffling-end",
"white/bishop-of-binding",
"white/blazing-hope",
"white/cleasing-ray",
"white/divine-verdict",
"white/everdawn-champion",
"white/exultant-skymarcher",
"white/famished-paladin",
"white/forerunner-of-the-legion",
"white/imperial-ceratops",
"white/legion-conquistador",
"white/luminous-bonds",
"white/majestic-heliopterus",
"white/martyr-of-dusk",
"white/moment-of-triumph",
"white/paladin-of-atonement",
"white/pride-of-conquerors",
"white/radiant-destiny",
"white/raptor-companion",
"white/sanguine-glorifier",
"white/skymarcher-aspirant",
"white/slaughter-the-strong",
"white/snubhorn-sentry",
"white/sphinxs-decree",
"white/squires-devotion",
"white/sun-crested-pterodon",
"white/sun-sentinel",
"white/temple-altisaur",
"white/trapjaw-tyrant",
"white/zetalpa-primal-dawn"
];

const multicolored_cards = [
"multicolored/angrath-the-flame-chained",
"multicolored/atzocan-seer",
"multicolored/azor-the-lawbringer",
"multicolored/deadeye-brawler",
"multicolored/dire-fleet-neckbreaker",
"multicolored/elenda-the-dusk-rose",
"multicolored/hadanas-climb",
"multicolored/hadanas-climb-winged-temple-of-orazca",
"multicolored/huatli-radiant-champion",
"multicolored/journey-to-eternity",
"multicolored/journey-to-eternity-atzal-cave-of-eternity",
"multicolored/jungle-creeper",
"multicolored/kumena-tyrant-of-orazca",
"multicolored/legion-lieutenant",
"multicolored/merfolk-mistbinder",
"multicolored/path-of-mettle",
"multicolored/path-to-metzali-metzali-tower-of-triumph",
"multicolored/profane-procession",
"multicolored/profane-procession-tomb-of-the-dusk-rose",
"multicolored/protean-raider",
"multicolored/raging-regisaur",
"multicolored/relentless-raptor",
"multicolored/resplendent-griffin",
"multicolored/siegehorn-ceratops",
"multicolored/storm-fleet-sprinter",
"multicolored/storm-the-vault",
"multicolored/storm-the-vault-vault-of-catlacan",
"multicolored/zacama-primal-calamity"
];

const artifacts_cards = [
"artifacts/awakened-amalgam",
"artifacts/azors-gateway",
"artifacts/azors-gateway-sanctum-of-the-sun",
"artifacts/captains-hook",
"artifacts/gleaming-barrier",
"artifacts/golden-guardian",
"artifacts/golden-guardian-gold-forge-garrison",
"artifacts/orazca-relic",
"artifacts/silent-gravestone",
"artifacts/strider-harness",
"artifacts/the-immortal-sun",
"artifacts/travelers-amulet"
];

const land_cards = [
"lands/arch-of-orazca",
"lands/evolving-wilds",
"lands/forsaken-sanctuary",
"lands/foul-orchad",
"lands/highland-lake",
"lands/stone-quarry",
"lands/woodland-stream",
];

for (let card of black_cards) {
	$('#black-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}
for (let card of blue_cards) {
	$('#blue-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}
for (let card of green_cards) {
	$('#green-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}
for (let card of red_cards) {
	$('#red-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}
for (let card of white_cards) {
	$('#white-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}
for (let card of multicolored_cards) {
	$('#multicolored-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}
for (let card of artifacts_cards) {
	$('#artifacts-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}
for (let card of land_cards) {
	$('#land-cards').append(`<img src="../img/cards/en-gb/rix-cards/${card}.png">`)
}