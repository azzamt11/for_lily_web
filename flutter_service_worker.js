'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5732232614a8eaedb2d4b92ca5a24e02",
".git/config": "042a037973fbf4bbb3ad99f1ef3fe1c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "99e788a4fb1c871070e082d83c91c8c6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0700b0f7d591380e6e0dbe6ad472d662",
".git/logs/refs/heads/main": "a7869393a05498eb9fa5e7f3d059ad36",
".git/logs/refs/remotes/origin/main": "cd4d571ee021db42d3b25d78f9438824",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/07/54c4777b444e6b957a67e1c76dc61470042d29": "55eb4fed06eb8760618e78418f02137a",
".git/objects/09/6ca50c31025c77a6e7f927a1d7f55207e353f1": "eda6c26f29811d5846660a3bcda9fab0",
".git/objects/19/5b2345834441a7ff1b4eb4acebb2894eda03fe": "653dd4e86036eb770d938395b8d0e721",
".git/objects/1e/bf0efab7a47dfb856bd37733ede5a016afffc2": "45169b2b77fc438bef10440bda7570c5",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/dd6c9c468b84700d67e8866fb9893740cfd7b6": "a92bbdf4c0b13684b3fa0e87b892a7f3",
".git/objects/23/243cdcf583bc6dbee011aaf5c0b083166c2cd8": "bd51fe2a6ef06411d9939bb18b40ba3d",
".git/objects/23/51865e39181be631ff266c9ddd1e63c78243f1": "aebe2b7d76bb95cf4b7de01f1883f96d",
".git/objects/25/f10505bed10db11d5df9d040cf9689169b68e9": "cfbc7d4d1d070297f536087f7cdd062b",
".git/objects/26/82af831f147fd5b84c3bd56cd9ce271b7acdbb": "2f00e3e2c92f6523854664e81a9074a3",
".git/objects/26/8bcfa4e044b633ab46fabc60ca6542b7ee7ef4": "10e422709466b951244bf48c470b25b2",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2f/485a5ded4943564f433924fdfe236986955c20": "09cd93e4fd8ba4f56e9df66bede00083",
".git/objects/34/40529f5fbf7c2dc09aaf1dacde4def2dc93ff2": "fea2c46db2ea9c7b98663c2af83185f3",
".git/objects/3e/013067530a4e31d19d2bd89ff8e9ca1ca3a09b": "3a3d2d01e746a15a8be606f2f29ababf",
".git/objects/3e/b48b47aa9c205ba4d56bf847609e4175ef6b98": "201c2fc87fb0fd7e4cb767fa6eef347d",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/43/1cd24492f8f1c2b8b93628991a81e01c706ede": "14794ba24a2db0e7ec37e5c27103fbc3",
".git/objects/46/46304251f6e27c8d1f5e13930ac3f025331852": "26a92a844a6c04cd7dbcd5764ed1c4f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d645a6eca3f9154209fdefc7d8e2cdd0a0875a": "e8a9d05f81f823c1c234ba9c54abfd06",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/74f33b6c9c9c4092bae11077a4aa36e68794ec": "50eb9cf1ae1fb02f920456065178eafd",
".git/objects/53/760043be6250c295eb9d4b524f0369d79aa743": "72d58c96661c46844393b8cc19391553",
".git/objects/59/bdf508b6190f2fe477a5689befc933c85dd304": "841ed875fcae07da0177f4e5f9e9d443",
".git/objects/5e/676066d570239fc0385199f1802633b6d80ae2": "6b5d0237e38f33a8d0335544575f4780",
".git/objects/61/726c257b81ad7e7b56e8fc21d5dd2dd0f0051b": "3713f081c87918820588cf0fc75955d1",
".git/objects/64/240cf8a85ae240a5644eb6bfb072d206411682": "8ddcb2e5e8a61391112ee933f3183289",
".git/objects/64/d5835aedeb4a342e6121cf23e008c67a2a00b0": "66c43efd1f9c9d16205645b9d875deb8",
".git/objects/69/7858f1dd1b30d81e32962827a129530c116ae0": "5060d28e50150a3d7052e65e8b293f21",
".git/objects/69/d4646c23d19541fa40cb9e0a9a3fd04a3244f3": "6a7dbc8a6ebabc5f01f78a28d7d7f715",
".git/objects/6a/47cb562dafd2da7c64a07c27d15c757d29a7c3": "7579aeeeffeb93e4746c4284835f49ee",
".git/objects/6a/f88b240253df05435b621e847fece9df546919": "6ac05a76a9be068a4bb2d3c39ea7dd80",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/f59fd59d4e991eb2b5a6210f930c699e926fe1": "549c339c5086d27d85c09019a4c9d69b",
".git/objects/6d/bcb313e7eb5b945df695f318420ce8c8eb4b75": "bc9cfccf96876ffce7e12be50d8b3875",
".git/objects/70/4d953f95344ac35b9e3e9458aeebafd544447a": "833b561d929c574bd4c4c392c1bd7832",
".git/objects/70/8c8409b330f8aae52865896e18cd975815837a": "93224e140985dad4b44bd7c998ff2dde",
".git/objects/71/70db122eebbe55932981a11361ab01d29dcdf0": "1e136af617791b10157244077dae00bb",
".git/objects/75/e08dcdf8dcd96c240aacccd27e1c8969a47c6e": "a76d06fe07a8de75a445751f2a79c8d1",
".git/objects/76/4ebc45f57b5b2243618230d2fbea2ce515fd61": "8eb7ca39f3c2d3eb8042c3aab9349f75",
".git/objects/77/95eec685acc95d41a4220adcbf7149dc674cc2": "6ee2096fc589c4646cdc04583817717b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/18675faa7edc04af6f1cc585224176ec4d7663": "2ceea55485132689083532187f964b4a",
".git/objects/7f/78e0dc29a947c8dfe0983a7a6cbcc6eb48cb21": "2b3903da09a574c1a3e5850dddba21cb",
".git/objects/80/af0ac8de0026faf682157a615b884cd7992ee7": "018a0ce5bc707f10155afba7a04ae43f",
".git/objects/84/de32784d1640e408c431aaa26e8612e1b8c258": "fc965e4603e0430150585dacfebaa08d",
".git/objects/84/e5a2ea9f5851dc7c5af0972dda2ff2ab25aa11": "31bdc90a17695a9e08281a6d49e1672b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/307af32686434f0148ca77d15249a12aa53e5f": "9fb5acf92053d51ecfe6d92ae3befdf3",
".git/objects/89/ef90c04cb3fdd950b3fd7ec892c9015e5ef1fe": "b25383af96f65378c5200c072cfade9e",
".git/objects/8a/a8141f38525e7dabd7fc833c1dad9a11651815": "a909cab8a3e1b71d93bbd204b32b7397",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5e1bb0d5f90abc9d47c8b52e8eee0cc2d320f9": "864ba34d9a40f8b6889ec42e865d3cad",
".git/objects/8f/d78a92bda8ee49ba880e22e7d4c7cf33ce663f": "5262d2a130ec223c6ae2ebe218786b64",
".git/objects/90/11e07b914f4743291cb23e0eb4c8dbbe5754cc": "7d6fefe007cabb5130bcf1b3ba9d4564",
".git/objects/96/080f2a33040830d5530f99ec68070d14846e47": "872af3feaa4606f02bee6133de0b34fa",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/1983e36131da693f76768ea4cc55151f7bef37": "3d4231173633029ded363a851a08026b",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a8/454631be1e1c7edd68237ebe1762adc77a5ead": "4e145338cc9ae5d97cdded2ffbe3a060",
".git/objects/ae/6a51107d4961c8aee6bdbb05e9e6b3031b1182": "59351e98919ae6ec761ca0dff103b08c",
".git/objects/ae/dc52670517296d7694601c68ac9f96ba1eda45": "881b7045c873fdedb138ca07d87c36ef",
".git/objects/af/372e2ed085d500aae83d27cbab511d3d36aea8": "9071ed17f1ef7ecf0087ff905da1d549",
".git/objects/b1/3324280f587467e430bb6f52725cdb110560bb": "08a5e43bb45236db3c5d3e58e436c4d4",
".git/objects/b3/3348e77d9104572f83850663ee9bd4ff84d205": "da2c7a94f05723647702a56d9640c602",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/2dda9bf8f91ba4e8236207df13ef5882e911f3": "aecf070f82f82c669bc1f98285337c36",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c9/11e682d831039c86057de816b51919350db8aa": "3912792e62e7c86b6c126864214e4f37",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/51b8a447cc374d5a507b457190ea5ef7009c3a": "4e44f7cb00ac273f30611d4dd2731d37",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/fc57702ccc7832212e99d1dab2ae76ca7b21c3": "475200ffbe4013c61def7eac8fd9b2fe",
".git/objects/ce/01c25b102dc0d903a6fdce8fc82c3198470a53": "149ab11874454891abe354c7998029c3",
".git/objects/d1/d9dbb654fee20146844b0c6600a2facf903bc1": "301120e02063abf6f46fbc8ea6743a6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/2bcafbe57ec58ffce5e99bbf2436a09def0974": "79a605a703f4ea13e361e4a2b93cb48a",
".git/objects/dc/91d9e2411be827a5c8b6e0a70687e75eccccaa": "9501fcb30e1ad6938c164a7c9cc009f4",
".git/objects/e2/68e48891c529ab9ddfc7220a018ee5f80e85f6": "e1f7d18dd1c43f4740bf72e4bd75be38",
".git/objects/e3/0d11e75c62a242e3b1e049e5d57e65c2862609": "c3ecabbee0d4c972bdbd196de9c6a3a8",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/a440b1b7f0028e1fb1063f30b19a55a4ac9e5d": "1cf728ccf8506235c89602c09e326e36",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/cc3e6645393d8f095e607eff25d9fed0577aa7": "c1e876d2673037e2d55461c9f517ce74",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ac37fa787d73e6293ca385d657ac3e9c5905bd": "f17ef6ef555c375e583ab0ada08afc3e",
".git/objects/ec/0c2b8da49cfdc13ba7d0a7c406cecc6a27d07e": "44f373affab62f4e60008c4717bfb065",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/064bc9b3e58233c62288d37412bfa2b2e2974f": "bdedcecb6c7e4980d09380058cb5c836",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8084706835de6ab55c943abf79252d676b31d1": "7870abef919eca198e2c9770586ce4fc",
".git/objects/f2/fad61878874b168473946466cc956f490b267c": "897c7347c2718ab2898f26951c7636b7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/e9653a626a9a7f80760ea0620ba456fc746494": "168f021215d99e84e2fc88c2fdad7db5",
".git/objects/fa/f9abd596c6b5c9dadc0c28067dc6b4ac7b635a": "cd415c677d8e8a55fec1f3cc6a17adbf",
".git/objects/fd/e2ca1c915c3c42a1d1fca15b417df8bb4a324c": "f178b1de809472f69d44063b72118bc4",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "76f7713f5dcc18336594a21612424d0c",
".git/refs/remotes/origin/main": "76f7713f5dcc18336594a21612424d0c",
"assets/AssetManifest.bin": "4705a5982c67fbefeeef1c33b975f4de",
"assets/AssetManifest.bin.json": "47afce7cc3aad2969a55bcb4c847f2f6",
"assets/AssetManifest.json": "892325ea0b1c898526f0308dec96fa43",
"assets/assets/cat_fishing_on_moon.json": "59de28a6e5b7d71cb65b4e9e93983fb0",
"assets/assets/cat_in_a_rocket.json": "41cb48c008dc15db5e34f1b85c7be50e",
"assets/assets/cat_is_sleeping_and_rolling.json": "d528bf4789754f46fae5b85b89fdb22b",
"assets/assets/cat_loading.json": "999bd9290aacbac58c7367d01e0e4cec",
"assets/assets/goldfish.json": "fb2114d35b08aa16d65d33bd9bb953b3",
"assets/assets/Gyubin__Really_Like_You.mp3": "a7bc2623e7554fcbfb767aa02ba288f3",
"assets/assets/happy_bird.json": "29598de350b31ee9043d02531dbe528e",
"assets/assets/hot_smiling_coffe.json": "681467149eb477ccbf379ac256230404",
"assets/assets/kitty_cat_error_404.json": "1b8b65395fc24369714824e0907143fe",
"assets/assets/lovely_cats.json": "736f6ed9399cfba741c7a0d98a71262c",
"assets/assets/lurking_cat.json": "e82b32e582413f83f4a86b9a9015ddf2",
"assets/assets/music_notes.json": "1b003c06ee18e04e2bf33267de174e48",
"assets/assets/no_activity_cat.json": "2e24a6be640974c6e83decf20a215b16",
"assets/assets/sleeping_cat.json": "219afdc5fe677cc2f315cebb19054802",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2d4ca35b9032701c4170ff449d41d902",
"assets/NOTICES": "a4d3618b552807a882471edffbc67597",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "899fbb84c7e1705c7d9d2a4bc504b98a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d8d6aa0070d143aa29ea166444c4983d",
"/": "d8d6aa0070d143aa29ea166444c4983d",
"main.dart.js": "d4fc491404c4a931262f26d4d3a66c4a",
"manifest.json": "f8e11b1049cfc573b21641b5f629b08e",
"version.json": "cd2a6f1e107d062c2f4fa67998d552e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
