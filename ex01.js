let lis1 = [ "artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty", "cullionly", "fusty", "caluminous", "wimpled", "burly-boned", "misbegotten", "odiferous", "poisonous", "fishified", "Wart-necked" ];
let lis2 = [ "base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten", "whoreson", "malmsey-nosed", "rampallian", "lily-livered", "scurvy-valiant", "brazen-faced", "unwashed", "bunch-backd", "leaden-footed", "muddy-mettled", "pigeon-liverd", "scale-sided" ];
let lis3 = [ "apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail", "knave", "blind-worm", "popinjay", "scullian", "jolt-head", "malcontent", "devil-monk", "toad", "rascal", "Basket-Cockle" ];

function generar(){
    let par1 = lis1[Math.floor(Math.random() * lis1.length)]; // math.floor sirve para cojer un valor .random para que te de un valor aleatrorio .length para ver cuando acaba la frase
    let par2 = lis2[Math.floor(Math.random() * lis2.length)]; // list == lista
    let par3 = lis3[Math.floor(Math.random() * lis3.length)];

    let frase = `Thow, ${par1} ${par2} ${par3}`; // par == paraula
    return frase;
}
function mostra(){
    let insult = generar(); // muestra la frase de la funcion anterior 
    let crear = document.getElementById('insult'); // es para asignar la funcion insult para que lo muetre
    crear.textContent = insult; // te muestra la frase
}

let crear = document.getElementById("crearinsult"); // cuando pulso el boton creo la frase
crear.addEventListener('click', mostra); // addEventListener == escucha click == pulsar el boton

function esborra(){
    document.getElementById('insult').innerHTML= ''; // innerHTML == escribe en el html; = '' es para dejarlo vacio
}
