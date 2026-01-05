

// Base de datos completa de juegos
const juegosPS4PS5 = [
    { id: 1, nombre: "A Way Out", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07995_00/2/i_bf9451994583c160b23f72d11b5c28cdf341e271b35509d51696c3d833fb650b/i/icon0.png" },
    { id: 2, nombre: "A Plague Tale: Innocence", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA10812_00/3/i_a4d09cfb51b390c3d5f3ea77531bc847294e59386ed520f6edeb6ef377a3b4d7/i/icon0.png" },
    { id: 3, nombre: "ACE COMBAT 7: SKIES UNKNOWN", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07202_00/4/i_27e8211b463ec94c70e8e8c04cc652fe8d58389ad41f4aea0d0d0e86f9d4cd7e/i/icon0.png" },
    { id: 4, nombre: "Age of Empires II: Definitive Edition", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202503/2520/77bb996d0db3e50c549fe86be1140105343623436e61ab84.png" },
    { id: 5, nombre: "Alan Wake Remastered", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202109/2709/wMyl8RQ9Tvi99wjgPPEBGVyX.png" },
    { id: 6, nombre: "Aliens: Dark Descent", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202303/2213/099fc5e72fff1ba84d0588dc3d0634244096c1ee1ccd51a3.png" },
    { id: 7, nombre: "Assassin\'s Creed III: Remastered", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA11560_00/2/i_1f66fe8962ba359e0b0472732030643d8296fb427dd6b227dc67a966fab122ac/i/icon0.png" },
    { id: 8, nombre: "Assassin\'s Creed IV Black Flag", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00010_00/2/i_a110ff64504963885b07d2a8c28e2df650964d215c635fca7525bfc4211e488b/i/icon0.png" },
    { id: 9, nombre: "Assassin's Creed Mirage", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/phwiQjbJddEg979YucUoP3Vr.png" },
    { id: 10, nombre: "Assassin\'s Creed Odyssey", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA09303_00/3/i_d6b485c473b4b3d739197a5f020aeb7428f69d6c29e0dda514f6db41916dc3b6/i/icon0.png" },
    { id: 11, nombre: "Assassin's Creed Valhalla", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png" },
    { id: 12, nombre: "Assassin\'s Creed Origins", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA05625_00/3/i_1918d4f78a3ed7521b7936984d525927a03a03e241bdd3d748bfd23c104d45db/i/icon0.png" },
    { id: 13, nombre: "Attack on Titan 2: Final Battle", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08956_00/3/i_c322e0379138cefcbfcb2d8fd776eb977f7cdf6d7d4b5175566d80fd962546aa/i/icon0.png" },
    { id: 14, nombre: "Back 4 Blood", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202011/1900/sSZEg1DFAUrfWsA7ltLwpCdu.png" },
    { id: 15, nombre: "Batman: Arkham Knight", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/acpkgo/prod/CUSA00133_00/374/i_21516ca32977519346e7b5cbf52fcadf722998b0d0a781fbeeea687cd3dca173/i/icon0.png" },
    { id: 16, nombre: "Batman: Return to Arkham", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA04602_00/CtnSL5sl7NnGEjgiXuGWyh1ROQjfweGo.png" },
    { id: 17, nombre: "Battlefield 1", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA02387_00/4/i_4f0735372ec946403df8905f3f520cfcec79b433a7fe90758500a025c3401d34/i/icon0_01.png" },
    { id: 18, nombre: "Battlefield 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00049_00/3/i_3836dd7afcf43e5ec1e276f0db327ada1fc7d63fbda8e701aebc73fa29446b54/i/icon0_01.png" },
    { id: 19, nombre: "Battlefield 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08670_00/2/i_bd313fa35615ab7418c1f552f24bc3af1a93992965e4729df39262ab37ed8880/i/icon0_01.png" },
    { id: 20, nombre: "BioShock: The Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA03979_00/2/i_001dc6840592651af45f02312f1577964eacf959f82337314eb0e0398a66b002/i/icon0.png" },
    { id: 21, nombre: "Blasphemous", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0610/5MnmcnD6qqpjLbOS84kdIzJo.png" },
    { id: 22, nombre: "Blasphemous 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202410/3115/691423c0153320ea4e576899c45e07fbeb65c91f9e23038c.png" },
    { id: 23, nombre: "Bluey: The Videogame", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/3010/825364eca056cb581903517f67bfb10906ab6869fa9c9300.png" },
    { id: 24, nombre: "Borderlands 3", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08025_00/2/i_282052c0284d44dfc8a1c011fde114ea1a280f9f387f1be3bd204a65b5be322e/i/icon0.png" },
    { id: 25, nombre: "Burnout Paradise Remastered", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA10866_00/2/i_11a5c790f81c9c1cc4ecb3b6220515f354ef0b71f83498c253fa2d944545b8fa/i/icon0.png" },
    { id: 26, nombre: "Call of Duty: Black Ops 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2921/4b45cf4b319a65e05f6e4f87a22c7b91d2e7e8aeb247b61f.png" },
    { id: 27, nombre: "Call of Duty: Black Ops 7", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202512/0119/3206dc772d768cbd67d4468d9bed78ae7375696e8236041a.png" },
    { id: 28, nombre: "Call of Duty: Black Ops Cold War", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202112/0618/cFLNC3xYfEdDl7D1Wvu4MVb1.png" },
    { id: 29, nombre: "Call of Duty: Modern Warfare II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/W5uSEsW7yefCNTHatS03v5q7.png" },
    { id: 30, nombre: "Call of Duty: Modern Warfare III", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202311/0921/331d5a7e34386f1103f95cf9083662a6ad39d3418f285398.png" },
    { id: 31, nombre: "Call of Duty: Vanguard", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/2402/x0TZ7gTngEzFGOAsuyi8yAsO.png" },
    { id: 32, nombre: "Captain Tsubasa: Rise of New Champions", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA14889_00/2/i_bb42051699ffb0b867a6092ae7aa5dfd7af2979fb536075ab13d65d58d02593d/i/icon0.png" },
    { id: 33, nombre: "Car Mechanic Simulator 2021", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/1610/twBZb8hAKAR9CkFuNCXdSPah.png" },
    { id: 34, nombre: "Crash Bandicoot 4: It's About Time", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/1602/TYk0GalUXvrSG0J6aAyfd1h6.png" },
    { id: 35, nombre: "Crash Bandicoot N. Sane Trilogy", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07402_00/3/i_47c34c88118d43321fcfe620f2ca248c461abbaa972b9176ac22971e4202050a/i/icon0.png" },
    { id: 36, nombre: "Crash Team Racing Nitro-Fueled", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA13795_00/3/i_1b96dbf425a8b6a943aedadb556d1e1d029400ba431f43980b1b453dbcb488b8/i/icon0.png" },
    { id: 37, nombre: "Crash Bandicoot Bundle – N. Sane Trilogy + CTR Nitro-Fueled", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/cfn/113073Oz_RChfCPBmm85wFPMWWgSpByVRgaHPq6IS_uC4m_I0g_PrjnZiiiWyQv97jWzEhCNgYeXrBzHhwCSx1Irxv0dk_0u.png" },
    { id: 38, nombre: "Cuphead", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA20469_00/1/i_3fa25ceb0c4d77fb214dce8cd1ad03d339d78d5db47c4f2511260595cbb38d00/i/icon0.png"},
    { id: 39, nombre: "Cyberpunk 2077", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202202/1517/UyPJCxbE3EoeLtUxjoFBnsD4.png" },
    { id: 40, nombre: "Dark Souls Remastered", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08692_00/3/i_7a180d9c3362c89e4149c949ad1173d9fc2159a1d26893f1d88b9f1e48d8d7d9/i/icon0.png" },
    { id: 41, nombre: "DayZ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1014/ORrwkbfh9B1OwfQbPGLBsgs7.png" },
    { id: 42, nombre: "Dead by Daylight", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08032_00/3/i_1ef7033e599774239b53869b64c7362da504cfec72a2a7ff6bba26eb1121da6f/i/icon0.png" },
    { id: 43, nombre: "Dead Island 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1012/V6WJkRhfNIQ3ePfAmrLSfGng.png" },
    { id: 44, nombre: "Demon Slayer – Kimetsu no Yaiba – The Hinokami Chronicles", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png" },
    { id: 45, nombre: "Demon Slayer – Kimetsu no Yaiba – The Hinokami Chronicles 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202504/1707/5838807383baec8d94aaad989ca3f7c654e1efc2a1da66c2.png" },
    { id: 46, nombre: "Detroit: Become Human", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2119/wl4DB5QGzlEHAXy1KLUVgOAu.png" },
    { id: 47, nombre: "Devil May Cry 5 + Vergil", plataforma: "PS4 / PS5", imagen: "https://gaming-cdn.com/images/products/18043/380x218/devil-may-cry-5-vergil-pc-juego-steam-us-ca-cover.jpg?v=1732032989" },
    { id: 48, nombre: "Diablo III: Eternal Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0915/l6FRCUbbkHWBOzczup7hqmWA.png" },
    { id: 49, nombre: "Diablo IV", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202512/1022/f8cfd38a298fcefcd752e2b25832b443cf400e8196594192.png" },
    { id: 50, nombre: "DIRT 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202007/2111/AU9y67cQ8s4t6S0Tg2peRQ5s.png" },
    { id: 51, nombre: "DOOM Eternal", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/ERNPc4gFqeRDG1tYQIfOKQtM.png" },
    { id: 52, nombre: "Dragon Ball FighterZ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA09072_00/2/i_ba10c93d337235476e536bad5ea96750816247becc5b9d9caea5d0778856d6b6/i/icon0.png" },
    { id: 53, nombre: "Dragon Ball Xenoverse 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202312/2208/e4b4b4b9bba306e560f5ea1a6ea985692cce579f8b826c0b.png" },
    { id: 54, nombre: "DRAGON BALL Z: KAKAROT", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA14835_00/3/i_ccd05c92612de5e47b057adf385a52d009477d50172352893034c19d2513943b/i/icon0.png" },
    { id: 55, nombre: "Dying Light 2 Stay Human", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202501/3115/3c17bf3bb4c9b5b572f69217554f0afdebade3a37959bac3.png" },
    { id: 56, nombre: "Evil West", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202112/1000/V9R0ldWdLSgS6A4d8qplbAgi.png" },
    { id: 57, nombre: "Elden Ring", plataforma: "Ps4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/0902/fS3Hhaq06TqLrbjMVplA8MaY.png" },
    { id: 58, nombre: "ELDEN RING NIGHTREIGN", plataforma: "Ps4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202412/1301/308f8421ff74f3b061b231defc364d3f01e1710ea6fe6876.png" },
    { id: 59, nombre: "Far Cry 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202106/1514/xqoTYwf0S55ro6fwcIIY1KI4.png" },
    { id: 60, nombre: "Far Cry New Dawn", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA13885_00/2/i_26f5de10bfd55ff9d0bbbb6f253ef91fa6cb93dad780eb8a2f002aa3f6e9e5a0/i/icon0.png" },
    { id: 61, nombre: "FC 25", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202409/2712/1e1c42b14d92280e17bda697b8c4ae13ff9f91bdb10fca89.png" },
    { id: 62, nombre: "FC 26", plataforma: "PS5 / PS4", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202507/2511/19ad6574090b6a71c88f0e6152ae5a668cc85882d87c51b5.png" },
    { id: 63, nombre: "Five Nights at Freddy's: Security Breach", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202112/0804/2UTMvRFqn4SdaoxhtQnxchcn.png" },
    { id: 64, nombre: "God of War Ragnarok", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202503/2016/b69c06fb108299866057126b0d3a0530bdf96a39d2ce1cb9.png" },
    { id: 65, nombre: "Grand Theft Auto V", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png" },
    { id: 66, nombre: "Grand Theft Auto: The Trilogy – The Definitive Edition", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202110/0106/9EfOgkd9XN01Hzre1v61y27z.png" },
    { id: 67, nombre: "Gran Turismo 7", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/yZ7dpmjtHr1olhutHT57IFRh.png" },
    { id: 68, nombre: "HITMAN World of Assassination", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/2110/ac07d058f6beb641716cdc8a1ead438e145ea127137ff8d1.png" },
    { id: 69, nombre: "Horizon Forbidden West", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2915/kifM3lnke5lExwRd96mIDojQ.png" },
    { id: 70, nombre: "Hollow Knight: Silksong ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2505/66f43d82a3d31493a2b3edec5359872e45c0c097115a9fbd.png" },
    { id: 71, nombre: "Human: Fall Flat", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202404/2313/20c3b0843705a02f9fc7c0efb9c8a91086c00477144ee5ef.png" },
    { id: 72, nombre: "Injustice 2 ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307yTtQHHs5rGByVI5LQJK9AvsV7Q577v082BvkKfSmBsU7lzxIutUgVvcL3eofKipLaEvL_QzCJrkhL-TREkeZScQmBUo.png" },
    { id: 73, nombre: "It Takes Two  ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/0Xqi1LgRoEtJ5zlFprpd54Vu.png" },
    { id: 74, nombre: "L.A. Noire   ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA09084_00/3/i_0ef5b797157cf6f0808a161f5ed4be1849580077107e9d6ac174f5f0116ce9ff/i/icon0.png" },
    { id: 75, nombre: "Legacy of Kain Soul Reaver 1&2 Remastered", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202409/1715/14b9503de49035832456c264fe5e34bcb80dcaf31a5101a3.png" },
    { id: 76, nombre: "LEGO Batman 3: Beyond Gotham", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307O1Z2Iz2gA_ZqpmE9fYazSkbQwLaxVRPg4HYmCBQ94toNf9YfxsGVYgVSPRcjtEdOIIjgZrnLvxLc-2N1VjjKOIuaT8q.png" },
    { id: 77, nombre: "LEGO DC Super-Villains", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA11542_00/qkfR8v6usmIEgaceIetxC3tIgM7Zh5vZ.png" },
    { id: 78, nombre: "LEGO Harry Potter Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202408/2817/3ed20bb3b43ca71d45872ed6a5c2c3ca52ff9123814cafd1.png" },
    { id: 79, nombre: "LEGO Jurassic World", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA01513_00/3/i_4dd8727b85d4093f5eb59f5a757a38c7a69eb7da3647ec162f9ce257ef2f11f4/i/icon0.png" },
    { id: 80, nombre: "LEGO Marvel's Avengers", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA02107_00/4/i_7d0b4edba37243335dcba46b8091ab47725584af27eec09223d5f29e36b77231/i/icon0.png" },
    { id: 81, nombre: "LEGO Marvel Collection", plataforma: "PS4 / PS5", imagen: "https://cdn.marvel.com/content/2x/legomarvelcollectionbundle_lob_crd_01.jpg" },
    { id: 82, nombre: "LEGO Star Wars: The Skywalker Saga", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202112/2121/qrpfY71rsvMn6beyjgStw3cH.png" },
    { id: 83, nombre: "LEGO The Incredibles", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA09878_00/XvIVyw8RZPgz3YgfPKw9eG6PqJZZyh3N.png" },
    { id: 84, nombre: "Life is Strange 2 Complete Season", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307PfTcSkzoUXV6-OCmgIfOFz33WYgxJA1_7h5460YrKv021DjJMMWauCtY46PJ-Ld-eVv5nTteZikwBFKRvgC4CsAJw-B.png" },
    { id: 85, nombre: "Lies of P", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2308/06b354c8015b3c71e54f43aa883aab4641285d4a91734681.png" },
    { id: 86, nombre: "Little Nightmares II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202011/1922/LuLwaMcTF4VP0LHZGMkNGFNk.png" },
    { id: 87, nombre: "Little Nightmares III ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202502/2619/fadb00a02c9de2cbcf41e167001be8fd36c3f77957c038b6.png" },
    { id: 88, nombre: "LIMBO & INSIDE Bundle ", plataforma: "PS4 / PS5", imagen: "https://gamegifts.ir/wp-content/uploads/2019/07/ssssdadainsideandlimbo.jpg" },
    { id: 89, nombre: "MARVEL vs. CAPCOM Fighting Collection: Arcade Classics", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/1406/e817e48c6fc73a084705bcabad6a02e12176443cf9f26e18.png" },
    { id: 90, nombre: "Marvel’s Spider-Man: Miles Morales ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png" },
    { id: 91, nombre: "Marvel’s Spider-Man: ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png" },
    { id: 92, nombre: "Marvel’s Guardians of the Galaxy ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202106/0215/Pw9cWnyqkix3EoCOGqrN1cgN.png" },
    { id: 93, nombre: "Mafia: Trilogy", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202307/1422/cc8f9a5fea22800aaeed6c8b38032fcc94ab2c0c57a6746e.png" },
    { id: 94, nombre: "Metro Exodus", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA11407_00/2/i_e46ce2ddd1957c71c5e0a8a2a6e6aa00e4c211d0ccdf50a2cc901e0234214fc1/i/icon0.png" },
    { id: 95, nombre: "Metro Saga Bundle", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202102/2215/zt3FcAh6QaR3B5oysX5TWDek.png" },
    { id: 96, nombre: "Minecraft", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png" },
    { id: 97, nombre: "Middle-earth: Shadow of War", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA04402_00/4/i_104ac8e1b4e4e700ac38bff7103b9a3625959a28797b01db7d9935cbebc51160/i/icon0_03.png" },
    { id: 98, nombre: "Mortal Kombat 11 Ultimate", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202009/0123/bF1qmEL5RM6aMfL0oLcxRe8B.png" },
    { id: 99, nombre: "Mortal Kombat XL ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA00967_00/95B3EIOEjU0DPK5V5ltFAWlW9KYtZVP7ZbB5ofWactS47y5BWTkwN1MujcdezNZ4.png" },
    { id: 100, nombre: "Mount & Blade II: Bannerlord ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1215/AMVfKw3yLtykL3sMzhUQItMT.png" },
    { id: 101, nombre: "MudRunner American Wilds Edition", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP4133/CUSA09936_00/zgWd62VcyTyAE1jE3JFcLY1hFftyBIez.png" },
    { id: 102, nombre: "Moving Out", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA17670_00/1/i_f5ae2af40fb13c9a01df7067cdee8daa918bd4be34e15994664fe06c66174ad0/i/icon0.png" },
    { id: 103, nombre: "Moving Out 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202303/1614/43b9aea1c7215ea43e6eca921770ff97a37d21e1dd46957f.png" },
    { id: 104, nombre: "Naruto X Boruto Ultimate Ninja Storm Connections", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2407/ea5dc84380832b4790178dcc68e408afd8f28f2d318b5ea6.png" },
    { id: 105, nombre: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 Road to Boruto", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA02412_00/3/i_43f1d6d07f90918e7d34511510ae5f1fc83a6295a5d87bf21c606253d445bc28/i/icon0.png" },
    { id: 106, nombre: "NARUTO TO BORUTO: SHINOBI STRIKER ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08767_00/4/i_6f08e40b1401bb121ef8fbde6fa36f7de6f319c7d4d54c25693705d5323e63d5/i/icon0.png" },
    { id: 107, nombre: "Need for Speed Heat", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/3121/Xz6kd2CORZxe8JnfNJwvA35A.png" },
    { id: 108, nombre: "Need for Speed Hot Pursuit Remastered ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202209/2916/rqxVOS10A7YYdpHE2LwYgbAU.png" },
    { id: 109, nombre: "Need for Speed Payback", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/3122/P3Apt9Q4oXtXArsrnl0R6XTh.png" },
    { id: 110, nombre: "Need for Speed Rivals", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00113_00/5/i_11efdc42cc5e7e8f7b89fa0f365351b9fa404a4e6bbbdd28ca47a4b302f03581/i/icon0.png" },
    { id: 111, nombre: "NieR: Automata Game of the YoRHa Edition", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/EP0082/CUSA04480_00/P4ZghxHW2EEiwxim3ZZIG28aJB8LgebN.png" },
    { id: 112, nombre: "No Man’s Sky", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2714/107cd4a41110b3622a5e07959df3807ee61b1dd55d873674.png" },
    { id: 113, nombre: "NBA 2K26 ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202506/2509/ec1eec85d9130210701491db769cb9874cc09f6512ebca20.png" },
    { id: 114, nombre: "ONE PIECE ODYSSEY", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202209/0618/zgEjW4gX8C1GdU7F3P2NnLiH.png" },
    { id: 115, nombre: "Outlast Trials", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202512/0117/68948cda33380519c2937d525efa38bf87603164ee736993.png" },
    { id: 116, nombre: "Overcooked! + Overcooked! 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307sgsSrpxPwr-K3kn4mb7Quy8yzTXo-7krByB_GC-DNsMM562UByq1uMeNkP8glsbpYBIHzsuknNIp5E5esPp8XQaJyBC.png" },
    { id: 117, nombre: "Plants vs. Zombies: Battle for Neighborville", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA10863_00/3/i_4a4942a5c3bfc187e82e5731fd7e36b9afff7901891feb589795da6dc34f2c73/i/icon0.png" },
    { id: 118, nombre: "PAYDAY 2: CRIMEWAVE EDITION ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA01761_00/5/i_85387478d5b1585a262d86e95450935846ab7aa4a455052ae13054a13410a324/i/icon0.png" },
    { id: 119, nombre: "Plants vs. Zombies Garden Warfare 2 ", plataforma: "PS4 / PS5", imagen: "http://www.hdwallpapers.in/walls/plants_vs_zombies_garden_warfare_2-wide.jpg" },
    { id: 120, nombre: "Red Dead Redemption ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202307/3122/ef55ed5738ebfa27690b0db28787898f904edaf46a20115c.png" },
    { id: 121, nombre: "Red Dead Redemption 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png" },
    { id: 122, nombre: "RACCOON CITY EDITION (Resident Evil 2 + 3) ", plataforma: "PS4 / PS5", imagen: "https://www.qjugamos.com.mx/wp-content/uploads/2023/08/raccoon-city-edition-psn.png" },
    { id: 123, nombre: "Resident Evil 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0204/uDFoGvnMTTCLVmTwjj0njGWC.png" },
    { id: 124, nombre: "Resident Evil 2 Deluxe Edition", plataforma: "PS4 / PS5", imagen: "https://www.mobygames.com/images/covers/l/535384-resident-evil-2-deluxe-edition-playstation-4-front-cover.png" },
    { id: 125, nombre: "Resident Evil 3", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0206/WmriZBRlSeXWEEDLJOWW7MdW.png" },
    { id: 126, nombre: "Resident Evil 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png" },
    { id: 127, nombre: "Resident Evil 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA04437_00/3/i_a2f510de74ae53fb74e435d69080e2e4461b985fc556a4657578a5493c2e9457/i/icon0.png" },
    { id: 128, nombre: "Resident Evil 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA03856_00/3/i_d7f9767da70f402bc95732329d1061f8b8f3fc132dfd753b30bd75b6ead9cffa/i/icon0.png" },
    { id: 129, nombre: "Resident Evil 7 Biohazard", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0207/V6IViuKogBMRtajqjnYrcj0e.png" },
    { id: 130, nombre: "Resident Evil 7 Gold + Village Gold Edition", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202301/2006/4awSHeidkc4MhWt7J98SIcRj.png" },
    { id: 131, nombre: "Resident Evil Village", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png" },
    { id: 132, nombre: "Resident Evil Revelations 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00924_00/3/i_d0341a07f865b2c691749e312a26240848e3c898d0206bd0c837c3f4102fbd0c/i/icon0.png" },
    { id: 133, nombre: "Resident Evil Triple Pack (4+5+6)", plataforma: "PS4 / PS5", imagen: "https://gamedoony.com/uploads/product_images/2024-8-11/Resident-evil-triple-pack-(4%D8%8C5%D8%8C6-original-)/9wAEo-resident-evil-4-5-6-pack-triple-pack-pc-game-steam-europe-cover.jpg" },
    { id: 134, nombre: "Riders Republic", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202112/2100/7eEv1gTTKw9GA5OWi00yyT3s.png" },
    { id: 135, nombre: "Rise of the Tomb Raider", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA05716_00/3/i_8d554b8e828fb0b49e8f79f55ff9f1e7ab01c979d4009b001a3615935be3a127/i/icon0.png" },
    { id: 136, nombre: "Rise of the Tomb Raider: 20 Year Celebration ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA05716_00/3/i_8d554b8e828fb0b49e8f79f55ff9f1e7ab01c979d4009b001a3615935be3a127/i/icon0.png" },
    { id: 137, nombre: "Shadow of the Tomb Raider", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA10938_00/4/i_3118ca961def8dc29545a0b4251f4fe5a9deb8faa512cf1a8c0bdfe333cd181f/i/icon0.png" },
    { id: 138, nombre: "Sifu ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202201/1616/THJbARAq2YiRVUv5abCQ8GYQ.png" },
    { id: 139, nombre: "Sleeping Dogs Definitive Edition ", plataforma: "PS4 / PS5", imagen: "https://i.ytimg.com/vi/z0t1qjnacSs/maxresdefault.jpg" },
    { id: 140, nombre: "Slime Rancher ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0220/w5OuzDEu6HNzT2K4e5HRI7vJ.png" },
    { id: 141, nombre: "SnowRunner", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA17438_00/3/i_f9e7e34cb31a231de831a87875360b2fe3b5dfe2ec508fe55ddd3ad531701979/i/icon0.png" },
    { id: 142, nombre: "Sniper Elite 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA04099_00/3/i_c0ab7eef40ba7db7e4440093e88e9fd5425a5f2e07d14351b9181b7031e8527f/i/icon0.png" },
    { id: 143, nombre: "Sniper Elite: Resistance ", plataforma: "PS4 / PS5", imagen: "https://cdn1.epicgames.com/offer/532644adc3434590b6d5b644e05fec16/EGS_SniperEliteResistance_Rebellion_S1_2560x1440-fd6886fd5f5e54b01149a5330b484570" },
    { id: 144, nombre: "Sniper Elite 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA04099_00/3/i_c0ab7eef40ba7db7e4440093e88e9fd5425a5f2e07d14351b9181b7031e8527f/i/icon0.png" },
    { id: 145, nombre: "Sniper Elite 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA04099_00/3/i_c0ab7eef40ba7db7e4440093e88e9fd5425a5f2e07d14351b9181b7031e8527f/i/icon0.png" },
    { id: 146, nombre: "Sniper Elite 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202202/2116/59jHCjMBRhuRhPUKUUy2gkNd.png" },
    { id: 147, nombre: "Sniper Ghost Warrior Contracts 2 ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202104/2909/fYka67cdczJPdp6LwQrLuZ3Y.png" },
    { id: 148, nombre: "Sonic Frontiers", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/0519/G9fDIHISfuLRt7CQ0AfNxlJX.png" },
    { id: 149, nombre: "SONIC FORCES", plataforma: "PS4 / PS5", imagen: "https://images.launchbox-app.com/753c6627-e6b0-486c-be7e-07cf089e415e.jpg" },
    { id: 150, nombre: "Sonic Mania", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07010_00/3/i_ad76ec0060a76200ff44a8242a9204cb896f2f28444606d73b635fb7497468b8/i/icon0.png" },
    { id: 151, nombre: "Sonic Origins", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202203/1103/cMPUrcoTKvKYEmdXBOtcVHPi.png" },
    { id: 152, nombre: "Sonic Superstars", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202307/2416/9fb7d209dbb62357ddd5c305f6019a97238fc1bd1b540560.png" },
    { id: 153, nombre: "Sonic X Shadow Generations", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2308/1efd5c197776d8dd5d5c79261559cd5947b0d52fc23e1174.png" },
    { id: 154, nombre: "SpongeBob SquarePants: The Patrick Star Game", plataforma: "PS4 / PS5", imagen: "https://m.media-amazon.com/images/M/MV5BOTNlNzA5MWYtNGEyOC00ZDk2LWIxMzktNjJhMDk4ZWQxMjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 155, nombre: "Star Wars Battlefront II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA05749_00/4/i_d1fb05cea9c9978c82fce182d4e79120430b33de101d0652ef91edf150fedb9b/i/icon0_01.png" },
    { id: 156, nombre: "Star Wars Jedi: Fallen Order", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202012/1013/DKYIpVhskEQ4jbzr1PVxsO0Z.png" },
    { id: 157, nombre: "STAR WARS Jedi Fallen Order + Survivor Bundle", plataforma: "PS4 / PS5", imagen: "https://cdn.shopify.com/s/files/1/0511/9587/1385/files/StarWarsJediBundle-FallenOrder_SurvivorSteelbooksBundleFantasyBox.jpg?v=1683203991" },
    { id: 158, nombre: "Stray ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png" },
    { id: 159, nombre: "Street Fighter 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1407/XFU0aPBvtm3W2od1ZvhByAOv.png" },
    { id: 160, nombre: "Street Fighter V", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA01222_00/6/i_2beaeca28e28f1b3a97c97ac132a80b4f99f7c721c4a40aac12a5bda140d0dcf/i/icon0.png" },
    { id: 161, nombre: "Street Fighter 30th Anniversary Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07997_00/3/i_184e733e9067533d184a9f01a9ea9689d8cccb6023e75f5683d8f273815df624/i/icon0.png" },
    { id: 162, nombre: "Subnautica", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202009/3006/C76j3lYg8BNBWJRSYtI2ONbo.png" },
    { id: 163, nombre: "Subnautica: Below Zero", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202103/1000/ajXEVMJhzxXuOezVXR6bFOkK.png" },
    { id: 164, nombre: "Terraria", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00740_00/8/i_270392835a32e8b04f2190e7c328d921ec63bffec01f59d782ab1595b02fef4b/i/icon0.png" },
    { id: 165, nombre: "The Crew Motorfest", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2315/607d9ed1ac762c9de33ef73fd09b3431d0b96ef4985ac2fb.png" },
    { id: 166, nombre: "The Dark Pictures: House of Ashes", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202106/0713/fr4Pown4oUSQLx5AlMw3BNA1.png" },
    { id: 167, nombre: "The Dark Pictures: The Devil in Me", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/0310/djyWRx1PiY91ioSFONyo3we6.png" },
    { id: 168, nombre: "The Elder Scrolls V: Skyrim", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2818/FuG72QFUf4aRYbSBAMNH2xwm.png" },
    { id: 169, nombre: "The Evil Within 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0100/iLBYSuHyeGG5CVXTkSm4MKTo.png" },
    { id: 170, nombre: "The Forest", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3001/vx7oooKnjSCRqOdlodz8vVLC.png" },
    { id: 171, nombre: "theHunter: Call of the Wild ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08368_00/4/i_05034add1b438ea13fe506bcae383f189eca060827c418141e8505dbcf18ad13/i/icon0.png" },
    { id: 172, nombre: "The Last of Us Part I", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202011/1020/FKgazVvG7BcWouCr39mIiXkW.png" },
    { id: 173, nombre: "The Last of Us Part II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png" },
    { id: 174, nombre: "The Walking Dead: The Telltale Definitive Series ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA16490_00/11/i_d760d0948c9c39dc458f88648ff13d967b0ebb884894ddab0ffec0094abb5e7a/i/icon0.png" },
    { id: 175, nombre: "The Witcher 3: Wild Hunt", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1412/5YlA3POEEpaAJsUq3eg6U8d6.png" },
    { id: 176, nombre: "The Elder Scrolls V: Skyrim Special Edition ", plataforma: "PS4 / PS5", imagen: "https://i.ytimg.com/vi/SFY1wHWvyvE/maxresdefault.jpg" },
    { id: 177, nombre: "Tom Clancy\'s Ghost Recon Breakpoint ", plataforma: "PS4 / PS5", imagen: "https://vignette.wikia.nocookie.net/ghostrecon/images/8/89/GRBreakpoint.jpg/revision/latest?cb=20190609075331" },
    { id: 178, nombre: "Tom Clancy\'s Ghost Recon Wildlands ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA02819_00/4/i_2e028661bf2f2d1576bdd4819f151856bb0c3c4f40d0f67c1f6a32c8c13a671d/i/icon0.png" },
    { id: 179, nombre: "Tom Clancy\'s The Division 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1609/8ec54b35b5b955ec22cf9cd44fbaf8d9f568198626240424.png" },
    { id: 180, nombre: "Tomb Raider: Definitive Edition  ", plataforma: "PS4 / PS5", imagen: "https://www.mobygames.com/images/covers/l/276949-tomb-raider-definitive-edition-playstation-4-front-cover.jpg" },
    { id: 181, nombre: "Tony Hawk's Pro Skater 1 + 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/1603/SO3OCkc1gcyGMoInvSvbRzfA.png" },
    { id: 182, nombre: "TopSpin 2K25", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202403/0618/5eb7a7431f949782b41e96f098f555ad492c2981d1156f18.png" },
    { id: 183, nombre: "Teenage Mutant Ninja Turtles: Splintered Fate", plataforma: "PS4 / PS5", imagen: "https://pics.filmaffinity.com/teenage_mutant_ninja_turtles_splintered_fate-100550991-large.jpg" },
    { id: 184, nombre: "Ultimate Marvel vs. Capcom 3", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA04622_00/4/i_33019add83502e4a302212205fea04ef8e724e59cc343674bdcf90fa6e6bfa97/i/icon0.png" },
    { id: 185, nombre: "Uncharted: The Nathan Drake Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202011/1101/zC3kulm2Ho3ZE38ZUYHW7WMK.png" },
    { id: 186, nombre: "Unravel ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA02685_00/2/i_6d8d35e0119080ab94b8398becb09e82b8a7b2376eeb6c6ba73c7069f4852e48/i/icon0.png" },
    { id: 187, nombre: "Unravel Two ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA10483_00/1/i_ecfef667557d24171b6400897822c7ec6a153683a7da44b425dc7ca08b37fbff/i/icon0.png" },
    { id: 188, nombre: "Watch Dogs: Legion", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202007/0200/ohDfr1TcylLqbwva38ONyLHO.png" },
    { id: 189, nombre: "Watch Dogs 2 ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0001/CUSA04459_00/qBxvfDJJ9dbavai6xsWOcWaxRDGRb7h0.png" },
    { id: 190, nombre: "Wo Long: Fallen Dynasty", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/2609/lgPM04qlLofxYamtlfMfqkHZ.png" },
    { id: 191, nombre: "WRC Generations", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/1214/jrPHWEkxs0V0P19tJjgu2Li8.png" },
    { id: 192, nombre: "WWE 2K24", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202401/0902/8ef9ab648b8b46461778764d6942c44a1c485abd7879e7ce.png" },
    { id: 193, nombre: "WWE 2K23", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0418/BetMjkjJt9p8YH4EbvMDGhvt.png" },
    { id: 194, nombre: "WWE 2K22", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1915/GZu7bMokNvvuWIarYkhmzfGk.png" },
    { id: 195, nombre: "WWE 2K20", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA15666_00/5/i_8119fb65025d8c8d7e342507c026dca3b55de7d35ed675c94c69c312c3f2f052/i/icon0.png" }

];

const juegosPS5Exclusivos = [
    
    
    { id: 196, nombre: "A Plague Tale: Requiem", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1717/xIQOO3Mo5YMnIm81qkH3y5kJ.png" },
    { id: 197, nombre: "Age of Mythology: Retold", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2201/cb2cf451fcef9d66d2eeacd25b469bf096a8a9e7912afda8.png" },
    { id: 198, nombre: "Alan Wake 2", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/c3daf3037feb797d9e71b81618e3b5ff3ff1f9609db5a4a2.png" },
    { id: 199, nombre: "ARC Raiders", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202504/1515/3ef1ea90a64952c060b797fde8602ee745c2e7c73277c4a5.png" },
    { id: 200, nombre: "ARK: Survival Ascended", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/3119/62c379ea2d70eeffdaa610992087f7162ceb5d036a49aa9a.png" },
    { id: 201, nombre: "Assassin\'s Creed Shadows", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202404/1815/e67713e008d1cdb83ebf71916c193a5c03ae7e12b85133d2.png" },
    { id: 202, nombre: "ASTRO BOT", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0500/8f15268257b878597757fcc5f2c9545840867bc71fc863b1.png" },
    { id: 203, nombre: "Arma Reforger", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202411/0514/5c7c3f28cad703f2c2c066dcac0b319ef3578ef05ebee9f4.png" },
    { id: 204, nombre: "Avatar: Frontiers of Pandora", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/0113/38ad0cc5b92af440d46ccebf5d1f271213d656684fce3385.png" },
    { id: 205, nombre: "Battlefield 6", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202507/2217/7fb7a918a4b9dd1c98de342ec3adfe1421d06627f60397b9.png" },
    { id: 206, nombre: "Clair Obscur: Expedition 33", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2217/e5833a53529ff9879e87689f1e8b04d45ba7e6c97fa791e2.png" },
    { id: 207, nombre: "Cronos: The New Dawn", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202410/1511/3775082b58945a3e9659f576feb92e0102332ac42f87ec24.png" },
    { id: 208, nombre: "Death Stranding 2: On the Beach", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202511/2115/ae183c63bbeb38d05ecce96aa7f693b4a3769a1835020b63.png" },
    { id: 209, nombre: "Dead Space", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/2113/ZqpcW1r97RADDwHsYz2q2VaK.png" },
    { id: 210, nombre: "Devil May Cry 5 ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3012/lPldVWxsnIfFOUBvBTKXndnw.png" },
    { id: 211, nombre: "Demon's Souls", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/GemRaOZaCMhGxQ9dRhnQQyT5.png" },
    { id: 212, nombre: "DOOM: The Dark Ages", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/346673e154a94c7d1dba15de4040b8f148dd3aafda800100.png" },
    { id: 213, nombre: "Dragon Age: The Veilguard", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/2620/9c38e4effa67e909cbd3190f680268fc56aa071601b9d292.png" },
    { id: 214, nombre: "DRAGON BALL: Sparking! ZERO", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2306/e940c07107a4cefbbedbbd53451e26f0dbf292dcfab6c307.png" },
    { id: 215, nombre: "Dragon’s Dogma 2", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/3007/2fff756fa904befe46b838dd6f27fa49f6b53d9f3dbbb776.png" },
    { id: 216, nombre: "Dying Light: The Beast", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202412/1302/f8fd4296b1dbb01c02882e6a2b305265e52521e4cb51956b.png" },
    { id: 217, nombre: "F1 25", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202505/1521/44c15449fbe9485987e27e2fa2c86008a7b4a89d9ab7e0a8.png" },
    { id: 218, nombre: "FINAL FANTASY VII REBIRTH", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/3005/6de6b1c4b0c475b5c28fd2011655ab8206ed846926fa1671.png" },
    { id: 219, nombre: "FINAL FANTASY XVI", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/3007/lgFVhRm5BfoX02pRUt3lSmLV.png" },
    { id: 220, nombre: "Forza Horizon 5", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2717/42b3ee6b1b2094212231b0b0a82824f687fc5c4dc9bde31c.png" },
    { id: 221, nombre: "Gears of War: Reloaded", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202504/2818/6222f35e03490b9ab85092005f6c4843af9f18fba47bdab9.png" },
    { id: 222, nombre: "Ghost of Yotei", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/050bb77f895515e0b0e906b0b9d75b6174b37eece097b462.png" },
    { id: 223, nombre: "Hell Let Loose", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202506/2316/86150b8e592e33e766539e1f4250ec79f097b8bd02509381.png" },
    { id: 224, nombre: "Hogwarts Legacy", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202503/2716/ce2e7f5896365b4e35a192b1f7592b590fee98827644ddb4.png" },
    { id: 225, nombre: "Indiana Jones y el Gran Circulo", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202412/0515/12efff690479d0dd1ad28e78becf903cdd1e582a2e1f27df.png" },
    { id: 226, nombre: "Lords of the Fallen Deluxe Edition ", plataforma: "PS5", imagen: "https://cdn1.epicgames.com/spt-assets/56420acb023b4f9597401dc2c5ea9352/lords-of-the-fallen-g4dql.jpg" },
    { id: 227, nombre: "Marvel’s Midnight Suns ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/2700/HNT7Av8LkRN6M3OiFe0DRq8T.png" },
    { id: 228, nombre: "Marvel’s Spider-Man 2  ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png" },
    { id: 229, nombre: "METAL GEAR SOLID Delta: SNAKE EATER", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0513/d35b305652ee922a72b4020bd5d6ef36675cf526dd4945d1.png" },
    { id: 230, nombre: "MLB The Show 25", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202509/0922/42277abc2f6993a5c8194cfb77f82b36e0f9ba510f7a4403.png" },
    { id: 231, nombre: "MotoGP 25 ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202502/1214/96ce964e849cc8d3a571c511b395071cb912c016db3a778a.png" },
    { id: 232, nombre: "Monster Hunter Wilds", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202409/0506/aa5c40ba185302dfcc88edc276a876fdc6c516c4db07ec9d.png" },
    { id: 233, nombre: "Mortal Kombat 1", plataforma: "PS5", imagen: "https://img.odcdn.com.br/wp-content/uploads/2023/05/Mortal-Kombat.png" },
    { id: 234, nombre: "Need for Speed Unbound ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202209/0913/3CmlwTUjrvYOei0WDNdBsYPp.png" },
    { id: 235, nombre: "Palworld", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2108/a9c0fb99b704bfd04e85512a280acaf9a19901c8548b6792.png" },
    { id: 236, nombre: "PAYDAY 3 ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2616/74efe3cba65d7ac5f08389b840602fa8349b075c4753901e.png" },
    { id: 237, nombre: "Phasmophobia ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1214/9ec3be8acd540e2f84e7362cb492e8d53b93e8a7bea4cd5f.png" },
    { id: 238, nombre: "Ready or Not", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202504/0914/ccad4abd77d40d3b3c7d77b8e4c9024fae86df781334ed93.png" },
    { id: 239, nombre: "RIDE 5 ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202303/3115/1bbebbbefdadb88f52c2623a7a51735455233a5ba659186f.png" },
    { id: 240, nombre: "Sea of Thieves", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202402/2811/d0338c0adc01bdaf7407068a90b4bf8a865939ce44ae22ac.png" },
    { id: 241, nombre: "Senua\'s Saga: Hellblade II ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202505/2009/936e8ddd93d816ad2a81b40269ae8bf0e42d1771b0e5db79.png" },
    { id: 242, nombre: "Silent Hill 2", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/IgwsFz9BiBrFvyV7pIWpoVgd.png" },
    { id: 243, nombre: "Silent Hill f", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202505/0704/e81b1e0b80b2001d8a5070c5c465cbc7246e02d1da39fe76.png" },
    { id: 244, nombre: "Slime Rancher 2 ", plataforma: "PS5", imagen: "https://images7.alphacoders.com/127/1274372.jpg" },
    { id: 245, nombre: "Split Fiction  ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202411/2918/90ad70c1ef581f93454184750cba9e0ca37bc7e30a4d1f55.png" },
    { id: 246, nombre: "Star Wars Outlaws", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/bca42b94af09b7a7ffd27fcb76a7bb1e46b60ed0c5f99322.png" },
    { id: 247, nombre: "Tekken 8", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202212/1621/rCvLik1PKDSoCaEvTIx42H3Q.png" },
    { id: 248, nombre: "The last of us 1 ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png" },
    { id: 249, nombre: "The last of us 2 ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/315718bce7eed62e3cf3fb02d61b81ff1782d6b6cf850fa4.png" },
    { id: 250, nombre: "The Outer Worlds 2  ", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202510/1609/a4fda8e001ee32a4f11cba7bac0c5bbeefc7cd47947ccff6.png" },
    { id: 251, nombre: "Tony Hawk's Pro Skater 3 + 4", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202502/2100/90881f77d349bee47f6629b340a2b722925975e587c26bd4.png" },
    { id: 252, nombre: "UFC 5", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202309/0421/418704276d35ce02e8cb532c6ca3826cf866ad2ec66c0b17.png" },
    { id: 253, nombre: "Warhammer 40,000: Space Marine 2", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0711/MKweDX2LQpXiPcU6Jitg9KAg.png" },
    { id: 254, nombre: "Wuchang: Fallen Feathers", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202504/0311/b3f7ebea4f31c2b33cb8119f893f07f5ad9c605137b06b8d.png" },
    { id: 255, nombre: "World War Z: Aftermath", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202108/2615/uRu5yeMX0RzVjwGEhIFVJgfv.png" },
    { id: 256, nombre: "WWE 2K25", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202501/1623/068123d291265a61f85713615aa2f255077fbf164186908e.png" },
    { id: 257, nombre: "WRC 10", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202104/1314/VpfiBsNcPVln9ZjsKYuDDlvo.png" },
];

// Combinar todos los juegos
const todosLosJuegos = [...juegosPS4PS5, ...juegosPS5Exclusivos];



// ===== VARIABLES GLOBALES =====
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let seccionActual = 'inicio';
let juegoSeleccionado = null;
let contadorCarritoIcono = null;

document.addEventListener('click', (e) => {
  if (e.target.id === 'modal-producto' || e.target.id === 'modal-cerrar') {
    juegoSeleccionado = null;
  }
});

// ===== OFERTAS COMPLETAS =====
const ofertas = [
  { nombre: 'FC 26', primaria: 27000, secundaria: 22000 },
  { nombre: 'A Way Out', primaria: 11990, secundaria: 8990 },
  { nombre: 'A Plague Tale: Innocence', primaria: 14990, secundaria: 10990 },
  { nombre: 'A Plague Tale: Requiem', primaria: 22990, secundaria: 17990 },
  { nombre: 'ACE COMBAT 7: SKIES UNKNOWN', primaria: 11990, secundaria: 8990 },
  { nombre: 'Alan Wake 2', primaria: 18990, secundaria: 13990 },
  { nombre: 'Alan Wake Remastered', primaria: 11990, secundaria: 8990 },
  { nombre: 'ARC Raiders', primaria: 28990, secundaria: 22990 },
  { nombre: 'ARK: Survival Ascended', primaria: 22990, secundaria: 17990 },
{ nombre: 'Arma Reforger', primaria: 24990, secundaria: 19990 },
{ nombre: 'Assassin\'s Creed III: Remastered', primaria: 14990, secundaria: 10990 },
{ nombre: 'Assassin\'s Creed IV Black Flag', primaria: 14990, secundaria: 10990 },
{ nombre: 'Assassin\'s Creed Mirage', primaria: 18990, secundaria: 13990 },
{ nombre: 'Assassin\'s Creed Odyssey', primaria: 14990, secundaria: 10990 },
{ nombre: 'Assassin\'s Creed Origins', primaria: 11990, secundaria: 8990 },
{ nombre: 'Assassin\'s Creed Shadows', primaria: 32990, secundaria: 23990 },
{ nombre: 'Assassin\'s Creed Valhalla', primaria: 14990, secundaria: 10990 },
{ nombre: 'ASTRO BOT', primaria: 34990, secundaria: 24990 },
{ nombre: 'Attack on Titan 2: Final Battle', primaria: 28990, secundaria: 22990 },
{ nombre: 'Avatar: Frontiers of Pandora', primaria: 22990, secundaria: 17990 },
{ nombre: 'Back 4 Blood', primaria: 11990, secundaria: 8990 },
{ nombre: 'Batman: Return to Arkham', primaria: 11990, secundaria: 8990 },
{ nombre: 'Battlefield 6', primaria: 37990, secundaria: 27990 },
{ nombre: 'BioShock: The Collection', primaria: 14990, secundaria: 10990 },
{ nombre: 'Bluey: The Videogame', primaria: 18990, secundaria: 13990 },
{ nombre: 'Borderlands 3', primaria: 11990, secundaria: 8990 },
{ nombre: 'Burnout Paradise Remastered', primaria: 11990, secundaria: 8990 },
{ nombre: 'Call of Duty: Black Ops 6', primaria: 24990, secundaria: 18990 },
{ nombre: 'Call of Duty: Black Ops 7', primaria: 34990, secundaria: 24990 },
{ nombre: 'Captain Tsubasa: Rise of New Champions', primaria: 14990, secundaria: 10990 },
{ nombre: 'Clair Obscur: Expedition 33', primaria: 34990, secundaria: 24990 },
{ nombre: 'Crash Bandicoot Bundle – N. Sane Trilogy + CTR Nitro-Fueled', primaria: 24990, secundaria: 19990 },
{ nombre: 'Crash Bandicoot N. Sane Trilogy', primaria: 18990, secundaria: 13990 },
{ nombre: 'Crash Team Racing Nitro-Fueled', primaria: 17990, secundaria: 12990 },
{ nombre: 'Crash Bandicoot 4: It\'s About Time', primaria: 19990, secundaria: 14990 },
{ nombre: 'Cuphead', primaria: 17990, secundaria: 12990 },
{ nombre: 'Cyberpunk 2077', primaria: 22990, secundaria: 17990 },
{ nombre: 'DayZ', primaria: 24990, secundaria: 19990 },
{ nombre: 'Dead Island 2', primaria: 17990, secundaria: 12990 },
{ nombre: 'Dead Space', primaria: 17990, secundaria: 12990 },
{ nombre: 'DEATH STRANDING 2: ON THE BEACH', primaria: 37990, secundaria: 27990 },
{ nombre: 'Demon Slayer – Kimetsu no Yaiba – The Hinokami Chronicles', primaria: 18990, secundaria: 13990 },
{ nombre: 'Demon Slayer – Kimetsu no Yaiba – The Hinokami Chronicles 2', primaria: 37990, secundaria: 27990 },
{ nombre: 'Devil May Cry 5 + Vergil', primaria: 14990, secundaria: 10990 },
{ nombre: 'Diablo IV', primaria: 28990, secundaria: 22990 },
{ nombre: 'DIRT 5', primaria: 18990, secundaria: 13990 },
{ nombre: 'DOOM Eternal', primaria: 18990, secundaria: 13990 },
{ nombre: 'DRAGON BALL: Sparking! ZERO', primaria: 32990, secundaria: 23990 },
{ nombre: 'DRAGON BALL XENOVERSE 2', primaria: 14990, secundaria: 10990 },
{ nombre: 'DRAGON BALL Z: KAKAROT', primaria: 18990, secundaria: 13990 },
{ nombre: 'Dragon Age: The Veilguard', primaria: 24990, secundaria: 19990 },
{ nombre: 'Dragon’s Dogma 2', primaria: 28990, secundaria: 22990 },
{ nombre: 'Dying Light 2 Stay Human', primaria: 18990, secundaria: 13990 },
{ nombre: 'Dying Light: The Beast', primaria: 37990, secundaria: 27990 },
{ nombre: 'ELDEN RING', primaria: 32990, secundaria: 23990 },
{ nombre: 'ELDEN RING NIGHTREIGN', primaria: 28990, secundaria: 22990 },
{ nombre: 'F1 25', primaria: 32990, secundaria: 23990 },
{ nombre: 'Far Cry 6', primaria: 17990, secundaria: 12990 },
{ nombre: 'Far Cry New Dawn', primaria: 14990, secundaria: 10990 },
{ nombre: 'FINAL FANTASY VII REBIRTH', primaria: 32990, secundaria: 23990 },
{ nombre: 'FINAL FANTASY XVI', primaria: 24990, secundaria: 19990 },
{ nombre: 'Forza Horizon 5', primaria: 32990, secundaria: 23990 },
{ nombre: 'Gears of War: Reloaded', primaria: 19990, secundaria: 14990 },
{ nombre: 'God of War Ragnarok', primaria: 19990, secundaria: 14990 },
{ nombre: 'Gran Turismo 7', primaria: 34990, secundaria: 24990 },
{ nombre: 'Grand Theft Auto V', primaria: 18990, secundaria: 13990 },
{ nombre: 'Grand Theft Auto: The Trilogy – The Definitive Edition', primaria: 19990, secundaria: 14990 },
{ nombre: 'Hell Let Loose', primaria: 17990, secundaria: 12990 },
{ nombre: 'HITMAN World of Assassination', primaria: 24990, secundaria: 19990 },
{ nombre: 'Hogwarts Legacy', primaria: 17990, secundaria: 12990 },
{ nombre: 'Hollow Knight: Silksong', primaria: 18990, secundaria: 13990 },
{ nombre: 'Injustice 2', primaria: 11990, secundaria: 8990 },
{ nombre: 'It Takes Two', primaria: 17990, secundaria: 12990 },
{ nombre: 'L.A. Noire', primaria: 19990, secundaria: 14990 },
{ nombre: 'LEGO DC Super-Villains', primaria: 14990, secundaria: 10990 },
{ nombre: 'LEGO Harry Potter Collection', primaria: 14990, secundaria: 10990 },
{ nombre: 'LEGO Jurassic World', primaria: 11990, secundaria: 8990 },
{ nombre: 'LEGO Marvel Collection', primaria: 14990, secundaria: 10990 },
{ nombre: 'LEGO Marvel\'s Avengers', primaria: 11990, secundaria: 8990 },
{ nombre: 'LEGO Star Wars: The Skywalker Saga', primaria: 17990, secundaria: 12990 },
{ nombre: 'Legacy of Kain Soul Reaver 1&2 Remastered', primaria: 18990, secundaria: 13990 },
{ nombre: 'Lies of P', primaria: 28990, secundaria: 22990 },
{ nombre: 'Life is Strange 2 Complete Season', primaria: 14990, secundaria: 10990 },
{ nombre: 'Little Nightmares III', primaria: 24990, secundaria: 19990 },
{ nombre: 'LIMBO & INSIDE Bundle', primaria: 11990, secundaria: 8990 },
{ nombre: 'Lords of the Fallen Deluxe Edition', primaria: 18990, secundaria: 13990 },
{ nombre: 'Mafia: Trilogy', primaria: 18990, secundaria: 13990 },
{ nombre: 'MARVEL vs. CAPCOM Fighting Collection: Arcade Classics', primaria: 24990, secundaria: 19990 },
{ nombre: 'Marvel’s Guardians of the Galaxy', primaria: 14990, secundaria: 10990 },
{ nombre: 'Marvel’s Midnight Suns', primaria: 14990, secundaria: 10990 },
{ nombre: 'Marvel’s Spider-Man 2', primaria: 28990, secundaria: 22990 },
{ nombre: 'Marvel’s Spider-Man: Miles Morales', primaria: 19990, secundaria: 14990 },
{ nombre: 'Metro Saga Bundle', primaria: 19990, secundaria: 14990 },
{ nombre: 'Middle-earth: Shadow of War', primaria: 11990, secundaria: 8990 },
{ nombre: 'Minecraft', primaria: 18990, secundaria: 13990 },
{ nombre: 'MLB The Show 25', primaria: 19990, secundaria: 14990 },
{ nombre: 'Monster Hunter Wilds', primaria: 32990, secundaria: 23990 },
{ nombre: 'Mortal Kombat 1', primaria: 17990, secundaria: 12990 },
{ nombre: 'Mortal Kombat 11 Ultimate', primaria: 14990, secundaria: 10990 },
{ nombre: 'Mortal Kombat XL', primaria: 11990, secundaria: 8990 },
{ nombre: 'MotoGP 25', primaria: 22990, secundaria: 17990 },
{ nombre: 'Mount & Blade II: Bannerlord', primaria: 24990, secundaria: 19990 },
{ nombre: 'Moving Out 2', primaria: 14990, secundaria: 10990 },
{ nombre: 'MudRunner American Wilds Edition', primaria: 14990, secundaria: 10990 },
{ nombre: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 Road to Boruto', primaria: 19990, secundaria: 14990 },
{ nombre: 'NARUTO TO BORUTO: SHINOBI STRIKER', primaria: 14990, secundaria: 10990 },
{ nombre: 'NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS', primaria: 22990, secundaria: 17990 },
{ nombre: 'Need for Speed Heat', primaria: 14990, secundaria: 10990 },
{ nombre: 'Need for Speed Hot Pursuit Remastered', primaria: 14990, secundaria: 10990 },
{ nombre: 'Need for Speed Payback', primaria: 14990, secundaria: 10990 },
{ nombre: 'Need for Speed Rivals', primaria: 11990, secundaria: 8990 },
{ nombre: 'Need for Speed Unbound', primaria: 17990, secundaria: 12990 },
{ nombre: 'NieR: Automata Game of the YoRHa Edition', primaria: 18990, secundaria: 13990 },
{ nombre: 'No Man’s Sky', primaria: 22990, secundaria: 17990 },
{ nombre: 'NBA 2K26', primaria: 24990, secundaria: 19990 },
{ nombre: 'Overcooked! + Overcooked! 2', primaria: 14990, secundaria: 10990 },
{ nombre: 'PAYDAY 2: CRIMEWAVE EDITION', primaria: 11990, secundaria: 8990 },
{ nombre: 'PAYDAY 3', primaria: 17990, secundaria: 12990 },
{ nombre: 'Phasmophobia', primaria: 17990, secundaria: 12990 },
{ nombre: 'Plants vs. Zombies Garden Warfare 2', primaria: 11990, secundaria: 8990 },
{ nombre: 'RACCOON CITY EDITION (Resident Evil 2 + 3)', primaria: 18990, secundaria: 13990 },
{ nombre: 'Ready or Not', primaria: 34990, secundaria: 24990 },
{ nombre: 'Red Dead Redemption', primaria: 24990, secundaria: 19990 },
{ nombre: 'Red Dead Redemption 2', primaria: 18990, secundaria: 13990 },
{ nombre: 'Resident Evil 2 Deluxe Edition', primaria: 17990, secundaria: 12990 },
{ nombre: 'Resident Evil 4', primaria: 18990, secundaria: 13990 },
{ nombre: 'Resident Evil 7 biohazard', primaria: 14990, secundaria: 10990 },
{ nombre: 'Resident Evil 7 Gold + Village Gold Edition', primaria: 19990, secundaria: 14990 },
{ nombre: 'Resident Evil Triple Pack (4+5+6)', primaria: 17990, secundaria: 12990 },
{ nombre: 'RIDE 5', primaria: 14990, secundaria: 10990 },
{ nombre: 'Rise of the Tomb Raider: 20 Year Celebration', primaria: 11990, secundaria: 8990 },
{ nombre: 'Sea of Thieves', primaria: 17990, secundaria: 12990 },
{ nombre: 'Senua\'s Saga: Hellblade II', primaria: 28990, secundaria: 22990 },
{ nombre: 'Sifu', primaria: 17990, secundaria: 12990 },
{ nombre: 'SILENT HILL 2', primaria: 32990, secundaria: 23990 },
{ nombre: 'SILENT HILL f', primaria: 34990, secundaria: 24990 },
{ nombre: 'Sleeping Dogs Definitive Edition', primaria: 11990, secundaria: 8990 },
{ nombre: 'Slime Rancher', primaria: 11990, secundaria: 8990 },
{ nombre: 'Slime Rancher 2', primaria: 18990, secundaria: 13990 },
{ nombre: 'Sniper Elite 5', primaria: 17990, secundaria: 12990 },
{ nombre: 'Sniper Elite: Resistance', primaria: 34990, secundaria: 24990 },
{ nombre: 'Sniper Ghost Warrior Contracts 2', primaria: 11990, secundaria: 8990 },
{ nombre: 'SnowRunner', primaria: 18990, secundaria: 13990 },
{ nombre: 'Sonic Origins', primaria: 17990, secundaria: 12990 },
{ nombre: 'SONIC FORCES', primaria: 14990, secundaria: 10990 },
{ nombre: 'Split Fiction', primaria: 32990, secundaria: 23990 },
{ nombre: 'SpongeBob SquarePants: The Patrick Star Game', primaria: 18990, secundaria: 13990 },
{ nombre: 'STAR WARS Jedi: Fallen Order', primaria: 11990, secundaria: 8990 },
{ nombre: 'STAR WARS Jedi Fallen Order + Survivor Bundle', primaria: 19990, secundaria: 14990 },
{ nombre: 'Star Wars Outlaws', primaria: 22990, secundaria: 17990 },
{ nombre: 'Street Fighter 6', primaria: 19990, secundaria: 14990 },
{ nombre: 'Stray', primaria: 18990, secundaria: 13990 },
{ nombre: 'TEKKEN 8', primaria: 22990, secundaria: 17990 },
{ nombre: 'Teenage Mutant Ninja Turtles: Splintered Fate', primaria: 17990, secundaria: 12990 },
{ nombre: 'The Crew Motorfest', primaria: 17990, secundaria: 12990 },
{ nombre: 'The Elder Scrolls V: Skyrim Special Edition', primaria: 14990, secundaria: 10990 },
{ nombre: 'The Evil Within', primaria: 11990, secundaria: 8990 },
{ nombre: 'The Forest', primaria: 11990, secundaria: 8990 },
{ nombre: 'The Last of Us Part I', primaria: 18990, secundaria: 13990 },
{ nombre: 'The Last of Us Part II', primaria: 19990, secundaria: 14990 },
{ nombre: 'The last of us 1', primaria: 26990, secundaria: 19990 },
{ nombre: 'The last of us 2', primaria: 26990, secundaria: 19990 },
{ nombre: 'The Outer Worlds 2', primaria: 37990, secundaria: 27990 },
{ nombre: 'The Walking Dead: The Telltale Definitive Series', primaria: 14990, secundaria: 10990 },
{ nombre: 'The Witcher 3: Wild Hunt', primaria: 14990, secundaria: 10990 },
{ nombre: 'theHunter: Call of the Wild', primaria: 18990, secundaria: 13990 },
{ nombre: 'Tom Clancy\'s Ghost Recon Breakpoint', primaria: 14990, secundaria: 10990 },
{ nombre: 'Tom Clancy\'s Ghost Recon Wildlands', primaria: 17990, secundaria: 12990 },
{ nombre: 'Tom Clancy\'s The Division 2', primaria: 14990, secundaria: 10990 },
{ nombre: 'Tomb Raider: Definitive Edition', primaria: 11990, secundaria: 8990 },
{ nombre: 'Tony Hawk\'s Pro Skater 3 + 4', primaria: 28990, secundaria: 22990 },
{ nombre: 'TopSpin 2K25', primaria: 18990, secundaria: 13990 },
{ nombre: 'UFC 5', primaria: 17990, secundaria: 12990 },
{ nombre: 'Ultimate Marvel vs. Capcom 3', primaria: 14990, secundaria: 10990 },
{ nombre: 'Unravel', primaria: 11990, secundaria: 8990 },
{ nombre: 'Unravel Two', primaria: 11990, secundaria: 8990 },
{ nombre: 'Watch Dogs 2', primaria: 14990, secundaria: 10990 },
{ nombre: 'Watch Dogs: Legion', primaria: 11990, secundaria: 8990 },
{ nombre: 'Warhammer 40,000: Space Marine 2', primaria: 24990, secundaria: 19990 },
{ nombre: 'World War Z: Aftermath', primaria: 19990, secundaria: 14990 },
{ nombre: 'WUCHANG: Fallen Feathers', primaria: 34990, secundaria: 24990 },
{ nombre: 'WWE 2K25', primaria: 22990, secundaria: 17990 }  

];


// ===== Inicializacion =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Master Digital cargado');
  console.log('Juegos:', todosLosJuegos.length);
  console.log('Ofertas:', ofertas.length);
  
  inicializarNavegacion();
  inicializarFiltros();
  renderizarCatalogos();   // Catálogo 120+ juegos
  renderizarOfertas();     // Ofertas 130 grid  
  actualizarContadores();
  actualizarCarrito();
  inicializarBuscador();
});



// ===== NAVEGACIÓN =====
function inicializarNavegacion() {
  document.querySelectorAll('[data-seccion]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      cambiarSeccion(link.getAttribute('data-seccion'));
    });
  });
  document.querySelectorAll('[data-navegar]').forEach(card => {
    card.addEventListener('click', () => {
      cambiarSeccion(card.getAttribute('data-navegar'));
    });
  });
}

function cambiarSeccion(nombreSeccion) {
  document.querySelectorAll('.seccion-contenido').forEach(seccion => {
    seccion.classList.remove('activa');
  });
  const seccionNueva = document.getElementById(`seccion-${nombreSeccion}`);
  if (seccionNueva) seccionNueva.classList.add('activa');
  seccionActual = nombreSeccion;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== RENDERIZAR CATÁLOGO (FALTABA ESTA FUNCIÓN) =====
function renderizarCatalogos() {
  renderizarCatalogoCompleto();
}

function renderizarCatalogoCompleto() {
  const grid = document.getElementById('catalogo-completo-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  const juegosOrdenados = [...todosLosJuegos].sort((a, b) => a.nombre.localeCompare(b.nombre));
  
  juegosOrdenados.forEach(juego => {
    const esExclusivo = juego.plataforma.includes('PS5') && !juego.plataforma.includes('PS4');
    grid.appendChild(crearTarjetaJuego(juego, esExclusivo));
  });
  
  actualizarContadorMostrados(juegosOrdenados.length);
}

// Actualizar contador catálogo inmediatamente
const totalCatalogo = document.getElementById('total-catalogo');
if (totalCatalogo) {
  totalCatalogo.textContent = todosLosJuegos.length + ' juegos';
}
actualizarContadores();


let paginaOfertas = 0; // Variable global para página actual

function renderizarOfertas() {
  const grid = document.getElementById('ofertas-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  ofertas.forEach((oferta, index) => {
    // Buscar juego en base de datos (normalizando nombres)
    const nombreLimpio = oferta.nombre.replace(/PS4|PS5/gi, '').trim().toLowerCase();
    const juegoBase = todosLosJuegos.find(j => 
      j.nombre.toLowerCase().replace(/PS4|PS5/gi, '').trim().includes(nombreLimpio)
    );
    
    // Plataforma del juego real (o fallback)
    const plataforma = juegoBase ? juegoBase.plataforma : 'PS4 PS5';
    const esExclusivoPS5 = plataforma.toLowerCase().includes('ps5') && !plataforma.toLowerCase().includes('ps4');
    
    // Imagen con fallback
    const imagen = juegoBase?.imagen || `https://dummyimage.com/300x220/1a1e3a/afffff?text=${encodeURIComponent(oferta.nombre.slice(0,10))}`;
    
    const card = document.createElement('div');
    card.className = `producto-card ${esExclusivoPS5 ? 'ps5-exclusive' : ''}`;
    
    card.innerHTML = `
      <img src="${imagen}" alt="${oferta.nombre}" class="producto-img" loading="lazy" 
           onerror="this.src='https://dummyimage.com/300x220/1a1e3a/afffff?text=${encodeURIComponent(oferta.nombre.slice(0,10))}'; this.style.objectFit='contain';">
      <span class="producto-plataforma">${esExclusivoPS5 ? 'PS5 EXCLUSIVO' : plataforma}</span>
      <div class="producto-info">
        <h3>${oferta.nombre}</h3>
        <div class="precio-oferta">
          <div class="precio-primaria">Primaria $${oferta.primaria.toLocaleString('es-CL')}</div>
          <div class="precio-secundaria">Secundaria $${oferta.secundaria.toLocaleString('es-CL')}</div>
        </div>
        <div class="producto-controles">
          <button class="btn-agregar" onclick="abrirModalOferta(${index})">Ver producto</button>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}


function actualizarPaginacionOfertas() {
  const grid = document.getElementById('ofertas-grid');
  if (!grid) return;

  const totalPaginas = Math.ceil(ofertas.length / 25);
  const contenedorPaginacion = document.querySelector('#seccion-ofertas .paginacion-ofertas');
  
  if (!contenedorPaginacion) {
    // Crear contenedor si no existe
    const nuevoCont = document.createElement('div');
    nuevoCont.className = 'paginacion-ofertas';
    nuevoCont.style.cssText = 'text-align:center; margin-top:3rem; padding:2rem; background:rgba(233,69,96,0.1); border-radius:15px;';
    grid.parentNode.insertBefore(nuevoCont, grid.nextSibling);
  } else {
    contenedorPaginacion.innerHTML = '';
  }

  if (totalPaginas <= 1) return;

  // Anterior
  if (paginaOfertas > 0) {
    const btn = document.createElement('button');
    btn.textContent = '◀ Anterior';
    btn.onclick = () => { paginaOfertas--; renderizarOfertas(); };
    contenedorPaginacion.appendChild(btn);
  }

  // Páginas
  for (let i = 0; i < totalPaginas; i++) {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.className = i === paginaOfertas ? 'btn-pagina-activa' : '';
    btn.onclick = () => { paginaOfertas = i; renderizarOfertas(); };
    contenedorPaginacion.appendChild(btn);
  }

  // Siguiente
  if (paginaOfertas < totalPaginas - 1) {
    const btn = document.createElement('button');
    btn.textContent = 'Siguiente ▶';
    btn.onclick = () => { paginaOfertas++; renderizarOfertas(); };
    contenedorPaginacion.appendChild(btn);
  }
}


// FILTROS DEL CATÁLOGO
let juegosFiltrados = [...todosLosJuegos];

function inicializarFiltros() {
    const filtroPlataforma = document.getElementById('filtro-plataforma');
    const filtroGenero = document.getElementById('filtro-genero');
    const filtroOrden = document.getElementById('filtro-orden');
    
    if (!filtroPlataforma || !filtroGenero || !filtroOrden) return;
    
    // Event listeners para filtros
    filtroPlataforma.addEventListener('change', aplicarFiltros);
    filtroGenero.addEventListener('change', aplicarFiltros);
    filtroOrden.addEventListener('change', aplicarFiltros);
    
    // Aplicar filtros iniciales
    aplicarFiltros();
}

function aplicarFiltros() {
    const filtroPlataforma = document.getElementById('filtro-plataforma').value;
    const filtroGenero = document.getElementById('filtro-genero').value;
    const filtroOrden = document.getElementById('filtro-orden').value;
    
    juegosFiltrados = [...todosLosJuegos];
    
    // Filtro por plataforma
    if (filtroPlataforma !== 'todos') {
        if (filtroPlataforma === 'ps4-ps5') {
            juegosFiltrados = juegosFiltrados.filter(juego => 
                juego.plataforma.toLowerCase().includes('ps4') && juego.plataforma.toLowerCase().includes('ps5')
            );
        } else if (filtroPlataforma === 'ps5') {
            juegosFiltrados = juegosFiltrados.filter(juego => 
                juego.plataforma.toLowerCase().includes('ps5') && !juego.plataforma.toLowerCase().includes('ps4')
            );
        }
    }
    
    // Filtro por género (agrega géneros a tus juegos o usa palabras clave)
    if (filtroGenero !== 'todos') {
        juegosFiltrados = juegosFiltrados.filter(juego => {
            const nombre = juego.nombre.toLowerCase();
            const generos = {
                'lucha': ['fighter', 'street fighter', 'tekken', 'mortal kombat', 'dragon ball', 'naruto'],
                'accion': ['god of war', 'assassin', 'doom', 'resident evil', 'call of duty', 'battlefield'],
                'aventura': ['uncharted', 'horizon', 'tomb raider', 'last of us'],
                'deportes': ['fc', 'fifa', 'pes', 'topspin', 'ufc'],
                'infantil': ['lego', 'bluey', 'crash bandicoot'],
                'carreras': ['need for speed', 'dirt', 'wrc', 'crew'],
                'shooter': ['call of duty', 'battlefield', 'far cry'],
                'rpg': ['witcher', 'cyberpunk', 'skyrim', 'diablo']
            };
            
            return Object.keys(generos).some(genero => 
                genero === filtroGenero && generos[genero].some(palabra => nombre.includes(palabra))
            );
        });
    }
    
    // Ordenamiento
    switch (filtroOrden) {
        case 'nombre-asc':
            juegosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'nombre-desc':
            juegosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
    }
    
    renderizarJuegosFiltrados(juegosFiltrados);
}

function renderizarJuegosFiltrados(juegos) {
    const grid = document.getElementById('catalogo-completo-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    juegos.forEach(juego => {
        const esExclusivo = juego.plataforma.toLowerCase().includes('ps5') && 
                           !juego.plataforma.toLowerCase().includes('ps4');
        grid.appendChild(crearTarjetaJuego(juego, esExclusivo));
    });
    
    actualizarContadorMostrados(juegos.length);
}

// ===== CREAR TARJETA JUEGO =====
function crearTarjetaJuego(juego, esExclusivo = false) {
  const card = document.createElement('div');
  card.className = `producto-card ${esExclusivo ? 'ps5-exclusive' : ''}`;

  card.innerHTML = `
    <img 
      src="${juego.imagen}" 
      alt="${juego.nombre}" 
      class="producto-img"
      loading="lazy"
      decoding="async"
      onerror="this.src='https://via.placeholder.com/300x220/1a1e3a/ffffff?text=JUEGO'"
    >
    <span class="producto-plataforma">
      ${esExclusivo ? 'PS5 EXCLUSIVO' : juego.plataforma}
    </span>
    <h3 class="producto-titulo">${juego.nombre}</h3>
    <div class="producto-controles">
      <button class="btn-agregar" onclick="abrirModalProducto(${juego.id})">
        Ver producto
      </button>
    </div>
  `;

  return card;
}





function actualizarContadorMostrados(cantidad) {
  const contador = document.getElementById('juegos-mostrados');
  if (contador) contador.textContent = cantidad;
}

// ===== CARRITO =====
function agregarAlCarrito(id, tipo = 'primaria', plat = 'ps4', cantidad = 1) {
  const juego = todosLosJuegos.find(j => j.id == id);
  if (!juego) {
    mostrarToast('Juego no encontrado', 'error');
    return;
  }
  
  if (cantidad < 1 || cantidad > 10) {
    mostrarToast('Cantidad entre 1-10', 'error');
    return;
  }
  
  // Plataforma del select
  const plataformaSelect = document.getElementById('modal-plataforma-select');
  const plataforma = plataformaSelect ? 
    plataformaSelect.options[plataformaSelect.selectedIndex].textContent.toLowerCase() : 
    plat.toLowerCase();
  
  // Precio ofertas
  const oferta = ofertas.find(o => 
    o.nombre.toLowerCase().includes(juego.nombre.toLowerCase())
  );
  const precioUnitario = oferta ? 
    (tipo === 'primaria' ? oferta.primaria : oferta.secundaria) : 
    14990;
  
  const clave = `${juego.id}-${tipo}-${plataforma}`;
  
  // Buscar en carrito
  const enCarrito = carrito.find(item => item.clave === clave);
  if (enCarrito) {
    enCarrito.cantidad += cantidad;  // ← SUMA cantidad correcta
    enCarrito.plataforma = plataforma;
    enCarrito.precioUnitario = precioUnitario;
    mostrarToast(`+${cantidad}x ${juego.nombre} ${plataforma}`, 'success');
  } else {
    carrito.push({
      ...juego,
      cantidad,  // ← cantidad del input (1,2,5...)
      tipoCuenta: tipo,
      clave,
      plataforma,
      precioUnitario
    });
    mostrarToast(`${cantidad}x ${juego.nombre} ${plataforma} agregado`, 'success');
  }
  
  actualizarCarrito();
  guardarCarrito();
  actualizarContadores();
}




function eliminarDelCarrito(clave) {
  carrito = carrito.filter(i => i.clave !== clave);
  mostrarToast('Juego eliminado', 'success');
  actualizarCarrito();
  guardarCarrito();
}

function vaciarCarrito() {
  if (carrito.length === 0) return mostrarToast('Carrito vacío', 'error');
  if (confirm('¿Vaciar carrito?')) {
    carrito = [];
    actualizarCarrito();
    guardarCarrito();
    mostrarToast('Carrito vaciado', 'success');
  }
}

function actualizarCarrito() {
  const carritoProductos = document.getElementById('carrito-productos');
  const totalJuegos = document.getElementById('total-juegos');
  const carritoVacio = document.getElementById('carrito-vacio');
  const totalOfertas = document.getElementById('total-ofertas-precio');
  
  if (!carritoProductos || !totalJuegos || !carritoVacio || !totalOfertas) return;

  if (carrito.length === 0) {
    carritoVacio.style.display = 'block';
    carritoProductos.innerHTML = '';
    totalJuegos.textContent = '0';
    totalOfertas.textContent = '$0';
  } else {
    carritoVacio.style.display = 'none';
    carritoProductos.innerHTML = carrito.map(item => `
      <div class="carrito-item">
        <div class="carrito-item-info">
          <h4>${item.nombre}</h4>
          <p><strong>Plataforma:</strong> ${item.plataforma}</p>
          <p><strong>Tipo:</strong> ${item.tipoCuenta === 'primaria' ? 'Primaria' : 'Secundaria'}</p>
          <p><strong>Cant:</strong> ${item.cantidad}</p>
          ${item.precioUnitario ? `<p><strong>Total oferta:</strong> $${(item.precioUnitario * item.cantidad).toLocaleString('es-CL')}</p>` : ''}
        </div>
        <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.clave}')">Eliminar</button>
      </div>
    `).join('');

    totalJuegos.textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
    // TOTAL SOLO OFERTAS
    const totalOfertasPrecio = carrito.reduce((sum, item) => {
      return sum + (item.precioUnitario * item.cantidad || 0);
    }, 0);
    totalOfertas.textContent = `$${totalOfertasPrecio.toLocaleString('es-CL')}`;
  }
  
  actualizarContadores();
  actualizarCarruselCarrito(); // ← CARRUSEL NUEVO
}



// CARRUSEL CARRITO INICIO - AGREGAR DESPUÉS
function actualizarCarruselCarrito() {
  const track = document.getElementById('carrito-carrusel-track');
  const placeholder = document.querySelector('.carrito-placeholder');
  const accesoCarrito = document.getElementById('acceso-carrito');
  
  if (!track || !placeholder) return;
  
  if (carrito.length === 0) {
    track.style.display = 'none';
    placeholder.style.display = 'flex';
    if (accesoCarrito) accesoCarrito.style.borderColor = 'rgba(233,69,96,0.3)';
  } else {
    track.style.display = 'flex';
    placeholder.style.display = 'none';
    if (accesoCarrito) accesoCarrito.style.borderColor = '#00e676';
    
    track.innerHTML = carrito.slice(0, 5).map(item => `
      <div class="carrito-item-mini" 
           style="background-image: url('${item.imagen || 'https://via.placeholder.com/300x220/1a1e3a/ffffff?text=JUEGO'}');">
        <div class="mini-overlay">
          <h4>${item.nombre}</h4>
          <span>${item.cantidad}x</span>
        </div>
      </div>
    `).join('');
    
    // Auto rotación cada 3s
    let index = 0;
    const total = track.children.length;
    clearInterval(window.carruselInterval); // Limpia anterior
    window.carruselInterval = setInterval(() => {
      index = (index + 1) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  }
}



function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function consultarPorWhatsApp() {
  if (carrito.length === 0) return mostrarToast('Agrega juegos primero', 'error');
  
  let mensaje = '🛒 PEDIDO MASTER_DIGITAL\n\n';
  let totalGlobal = 0;

  carrito.forEach((item, i) => {
    const totalItem = (item.precioUnitario || 0) * item.cantidad;
    totalGlobal += totalItem;

    mensaje += `${i + 1}. ${item.nombre}\n`;
    mensaje += `   Plataforma: ${item.plataforma}\n`;
    mensaje += `   Tipo: ${item.tipoCuenta === 'primaria' ? 'Primaria' : 'Secundaria'}\n`;
    mensaje += `   Cantidad: ${item.cantidad}\n`;
    if (item.precioUnitario) {
      mensaje += `   Precio unitario oferta: $${item.precioUnitario.toLocaleString('es-CL')}\n`;
      mensaje += `   Total: $${totalItem.toLocaleString('es-CL')}\n`;
    }
    mensaje += `\n`;
  });

  mensaje += `Total juegos: ${carrito.reduce((s, i) => s + i.cantidad, 0)}\n`;
  if (totalGlobal > 0) {
    mensaje += `Total a pagar ofertas: $${totalGlobal.toLocaleString('es-CL')}`;
  }

  window.open(`https://wa.me/56994877783?text=${encodeURIComponent(mensaje)}`, '_blank');
  mostrarToast('Enviado a WhatsApp', 'success');
}


function actualizarContadores() {
  // HEADER CARRITO
  const contadorCarrito = document.getElementById('contador-carrito');
  const totalCarritoInicio = document.getElementById('total-carrito-inicio');
  
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  
  if (contadorCarrito) contadorCarrito.textContent = totalItems;
  if (totalCarritoInicio) totalCarritoInicio.textContent = totalItems;
  
  // Animación contador
  if (totalItems > 0) {
    contadorCarrito?.classList.add('bounce');
    setTimeout(() => contadorCarrito?.classList.remove('bounce'), 500);
  }
}


// ===== MODAL =====
function abrirModalProducto(id) {
  const juego = todosLosJuegos.find(j => j.id == id);
  if (!juego) return mostrarToast('Juego no encontrado', 'error');
  
  juegoSeleccionado = juego;
  
  // Cachear elementos DOM
  const modal = document.getElementById('modal-producto');
  const titulo = document.getElementById('modal-titulo');
  const imagen = document.getElementById('modal-imagen');
  const plataforma = document.getElementById('modal-plataforma');
  const cantidad = document.getElementById('modal-cantidad');
  const tipoCuenta = document.getElementById('modal-tipo-cuenta');
  const select = document.getElementById('modal-plataforma-select');
  
  // Datos básicos
  titulo.textContent = juego.nombre;
  imagen.src = juego.imagen;
  imagen.alt = juego.nombre;
  plataforma.textContent = juego.plataforma;
  cantidad.value = 1;
  tipoCuenta.value = 'primaria';
  
  // Plataformas
  select.innerHTML = '';
  select.disabled = false;
  const plataformas = juego.plataforma.toLowerCase();
  
  if (plataformas.includes("ps5") && !plataformas.includes("ps4")) {
    const opt = document.createElement("option");
    opt.value = "ps5";
    opt.textContent = "PS5";
    select.appendChild(opt);
    select.disabled = true;
  } else if (plataformas.includes("ps4") && !plataformas.includes("ps5")) {
    const opt = document.createElement("option");
    opt.value = "ps4";
    opt.textContent = "PS4";
    select.appendChild(opt);
    select.disabled = true;
  } else {
    const opt1 = document.createElement("option");
    opt1.value = "ps4";
    opt1.textContent = "PS4";
    select.appendChild(opt1);
    
    const opt2 = document.createElement("option");
    opt2.value = "ps5";
    opt2.textContent = "PS5";
    select.appendChild(opt2);
    select.disabled = false;
  }
  
  // 🔥 FIX DEFINITIVO 100% ANTI-DUPLICADOS
  const btnAgregar = document.getElementById('modal-btn-agregar');
  
  // 1️⃣ CLONE + REPLACE = 0 LISTENERS
  const nuevoBtn = btnAgregar.cloneNode(true);
  btnAgregar.parentNode.replaceChild(nuevoBtn, btnAgregar);
  
  // 2️⃣ NUEVO BOTÓN LIMPIO
  const btnLimpiado = document.getElementById('modal-btn-agregar');
  
  // 3️⃣ SINGLE LISTENER CON PROTECCIÓN
  btnLimpiado.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    // ❌ BLOQUEA DOBLES EJECUCIONES
    if (btnLimpiado.disabled) return;
    
    btnLimpiado.disabled = true;
    btnLimpiado.textContent = '⏳ Agregando...';
    
    const cant = parseInt(cantidad.value) || 1;
    const tipo = tipoCuenta.value || 'primaria';
    const plat = select.value || 'ps4';
    
    agregarAlCarrito(juego.id, tipo, plat, cant);
    
    modal.classList.remove('activo');
    juegoSeleccionado = null;
    
    mostrarToast(`${juego.nombre} (${cant}x ${tipo} ${plat.toUpperCase()}) ¡Agregado!`, 'success');
    actualizarContadores();
    
    // 🔄 RESET EN 2 SEG
    setTimeout(() => {
      btnLimpiado.disabled = false;
      btnLimpiado.textContent = 'Agregar al carrito';
    }, 2000);
  }, { once: false }); // Se puede reutilizar pero con protecciones
  
  modal.classList.add('activo');
}





function abrirModalOferta(index) {
  const oferta = ofertas[index];
  const juegoBase = todosLosJuegos.find(j => 
    j.nombre.toLowerCase().replace(/ PS[45].*$/i, '').trim().includes(
      oferta.nombre.replace(/ PS[45].*$/i, '').trim().toLowerCase()
    )
  );
  
  // Si no encuentra juego base, usa datos de oferta
  const juego = juegoBase || {
    id: `oferta-${index}`,
    nombre: oferta.nombre,
    plataforma: 'PS4 / PS5',
    imagen: `https://dummyimage.com/400x300/1a1e3a/ffffff&text=${encodeURIComponent(oferta.nombre)}`
  };
  
  abrirModalProducto(juego.id);  // Reusa la función existente
}
window.abrirModalOferta = abrirModalOferta;


// PANTALLA DE CARGA 7 SEGUNDOS
setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('oculta');
    
    // Esperar transición y remover del DOM
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
}, 1000); 

// IMÁGENES COMPLETAS CON FALLBACK
document.addEventListener('DOMContentLoaded', () => {
    // Catálogo
    document.querySelectorAll('.producto-img').forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/300x220/1a1e3a/ffffff?text=Juego';
            this.style.objectFit = 'contain';
        };
    });

    
});


// Cerrar modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-producto');
    const cerrarBtn = document.getElementById('modal-cerrar');
    
    if (cerrarBtn) {
        cerrarBtn.addEventListener('click', () => {
            modal.classList.remove('activo');
        });
    }
    
    // Click fuera del modal cierra
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('activo');
        }
    });
    
    // Botón agregar al carrito en modal
    const btnAgregarModal = document.getElementById('modal-btn-agregar');
    if (btnAgregarModal) {
        btnAgregarModal.addEventListener('click', () => {
            if (juegoSeleccionado) {
                agregarAlCarrito(juegoSeleccionado.id);
                modal.classList.remove('activo');
            }
        });
    }
});


// ===== TOAST =====
function mostrarToast(msg, tipo = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.innerHTML = `
    <div style="display:flex;gap:1rem;align-items:center">
      <span style="font-size:1.5rem">${tipo === 'success' ? '✓' : '⚠'}</span>
      <div>${msg}</div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => toast.remove(), 3200);
}

// ===== BUSCADOR =====
function inicializarBuscador() {
  const input = document.getElementById('input-buscar');
  const limpiar = document.getElementById('btn-limpiar-busqueda');
  if (!input) return;

  let timeout;
  input.addEventListener('input', e => {
    clearTimeout(timeout);
    const term = e.target.value.trim();
    if (term.length >= 2) {
      limpiar.style.display = 'block';
      timeout = setTimeout(() => buscarJuego(term), 300);
    } else if (!term) {
      limpiar.style.display = 'none';
    }
  });

  if (limpiar) {
    limpiar.addEventListener('click', () => {
      input.value = '';
      limpiar.style.display = 'none';
    });
  }
}

function buscarJuego(termino) {
  const resultados = todosLosJuegos.filter(j => 
    j.nombre.toLowerCase().includes(termino.toLowerCase())
  );
  mostrarResultados(resultados, termino);
}

function mostrarResultados(resultados, termino) {
  cambiarSeccion('resultados');
  const grid = document.getElementById('resultados-grid');
  const texto = document.getElementById('texto-resultados');
  
  if (resultados.length === 0) {
    texto.innerHTML = `<span style="color:#e94560">No hay resultados para "${termino}"</span>`;
    grid.innerHTML = '';
  } else {
    texto.innerHTML = `<span style="color:#00e676">${resultados.length}</span> resultados para "${termino}"`;
    grid.innerHTML = '';
    resultados.forEach(juego => {
      grid.appendChild(crearTarjetaJuego(juego));
    });
  }
}

// ===== FAQ =====
function inicializarFAQ() {
  document.querySelectorAll('.faq-float-pregunta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const respuesta = btn.nextElementSibling;
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      // Cerrar todas
      document.querySelectorAll('.faq-float-item').forEach(faq => {
        faq.classList.remove('active');
        const resp = faq.querySelector('.faq-float-respuesta');
        if (resp) resp.style.maxHeight = '0px';
      });

      // Abrir actual si no está activo
      if (!isActive) {
        item.classList.add('active');
        respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
      }
    });
  });
}

// Inicializar FAQ al cargar
document.addEventListener('DOMContentLoaded', inicializarFAQ);


// Animación números estadísticas
function animarEstadisticas() {
    const numeros = document.querySelectorAll('.stat-number[data-target]');
    numeros.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        const incremento = target / 100;
        let actual = 0;
        const timer = setInterval(() => {
            actual += incremento;
            if (actual >= target) {
                num.textContent = target;
                clearInterval(timer);
            } else {
                num.textContent = Math.floor(actual);
            }
        }, 30);
    });
}

// Animación números estadísticas
function animarEstadisticas() {
    const numeros = document.querySelectorAll('.stat-number[data-target]');
    numeros.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        const incremento = target / 100;
        let actual = 0;
        const timer = setInterval(() => {
            actual += incremento;
            if (actual >= target) {
                num.textContent = target;
                clearInterval(timer);
            } else {
                num.textContent = Math.floor(actual);
            }
        }, 30);
    });
}

// Animación números estadísticas
function animarEstadisticas() {
    const numeros = document.querySelectorAll('.stat-number[data-target]');
    numeros.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        const incremento = target / 100;
        let actual = 0;
        const timer = setInterval(() => {
            actual += incremento;
            if (actual >= target) {
                num.textContent = target;
                clearInterval(timer);
            } else {
                num.textContent = Math.floor(actual);
            }
        }, 30);
    });
}

// CARRUSEL 7 JUEGOS - FLUIDO Y SUAVE
let carruselIndex = 0;
const totalJuegos = 7; // 7 juegos ahora
const carruselTrack = document.getElementById('carrusel-track');

function siguienteJuego() {
    carruselIndex = (carruselIndex + 1) % totalJuegos;
    carruselTrack.style.transform = `translateX(-${carruselIndex * 400}px)`; // 400px por juego

}

// Velocidad perfecta: cambia cada 3.5 segundos
setInterval(siguienteJuego, 3500);

// Inicializar posición
carruselTrack.style.transform = `translateX(0px)`;


setInterval(siguienteJuego, 4000); // Cambia cada 4 segundos

// DETECTAR IMÁGENES CARGADAS
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.producto-img');
  imgs.forEach((img, index) => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
});


function inicializarFormulario() {
  // Por ahora no hace nada, solo evita el error
}

// Buscador catálogo independiente
document.addEventListener('DOMContentLoaded', () => {
  const inputCatalogo = document.getElementById('input-catalogo');
  const limpiarCatalogo = document.getElementById('btn-limpiar-catalogo');
  
  if (inputCatalogo) {
    inputCatalogo.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      limpiarCatalogo.style.display = term ? 'flex' : 'none';
      
      const cards = document.querySelectorAll('#catalogo-completo-grid .producto-card');
      let visibles = 0;
      cards.forEach(card => {
        const nombre = card.querySelector('h3')?.textContent.toLowerCase() || '';
        if (nombre.includes(term) || !term) {
          card.style.display = 'block';
          visibles++;
        } else {
          card.style.display = 'none';
        }
      });
      document.getElementById('juegos-mostrados').textContent = visibles;
    });
    
    limpiarCatalogo?.addEventListener('click', () => {
      inputCatalogo.value = '';
      limpiarCatalogo.style.display = 'none';
      document.querySelectorAll('#catalogo-completo-grid .producto-card').forEach(card => {
        card.style.display = 'block';
      });
      document.getElementById('juegos-mostrados').textContent = todosLosJuegos.length;
    });
  }
});



// ===== EXPORTAR FUNCIONES =====
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.vaciarCarrito = vaciarCarrito;
window.consultarPorWhatsApp = consultarPorWhatsApp;
window.abrirModalProducto = abrirModalProducto;
