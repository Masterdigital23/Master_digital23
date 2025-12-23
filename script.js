// Base de datos completa de juegos
const juegosPS4PS5 = [
    { id: 1, nombre: "A Way Out", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07995_00/2/i_bf9451994583c160b23f72d11b5c28cdf341e271b35509d51696c3d833fb650b/i/icon0.png" },
    { id: 2, nombre: "Age of Empires II: Definitive Edition", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202503/2520/77bb996d0db3e50c549fe86be1140105343623436e61ab84.png" },
    { id: 3, nombre: "Aliens: Dark Descent", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202303/2213/099fc5e72fff1ba84d0588dc3d0634244096c1ee1ccd51a3.png" },
    { id: 4, nombre: "Assassin's Creed Mirage", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/phwiQjbJddEg979YucUoP3Vr.png" },
    { id: 5, nombre: "Assassin's Creed Valhalla", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png" },
    { id: 6, nombre: "Attack on Titan 2: Final Battle", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08956_00/3/i_c322e0379138cefcbfcb2d8fd776eb977f7cdf6d7d4b5175566d80fd962546aa/i/icon0.png" },
    { id: 9, nombre: "Batman: Arkham Knight", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/acpkgo/prod/CUSA00133_00/374/i_21516ca32977519346e7b5cbf52fcadf722998b0d0a781fbeeea687cd3dca173/i/icon0.png" },
    { id: 10, nombre: "Battlefield 1", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA02387_00/4/i_4f0735372ec946403df8905f3f520cfcec79b433a7fe90758500a025c3401d34/i/icon0_01.png" },
    { id: 11, nombre: "Battlefield 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00049_00/3/i_3836dd7afcf43e5ec1e276f0db327ada1fc7d63fbda8e701aebc73fa29446b54/i/icon0_01.png" },
    { id: 12, nombre: "Battlefield 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08670_00/2/i_bd313fa35615ab7418c1f552f24bc3af1a93992965e4729df39262ab37ed8880/i/icon0_01.png" },
    { id: 13, nombre: "Blasphemous", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0610/5MnmcnD6qqpjLbOS84kdIzJo.png" },
    { id: 14, nombre: "Blasphemous 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202410/3115/691423c0153320ea4e576899c45e07fbeb65c91f9e23038c.png" },
    { id: 15, nombre: "Bluey: The Videogame", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/3010/825364eca056cb581903517f67bfb10906ab6869fa9c9300.png" },
    { id: 17, nombre: "Call of Duty: Black Ops 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2921/4b45cf4b319a65e05f6e4f87a22c7b91d2e7e8aeb247b61f.png" },
    { id: 18, nombre: "Call of Duty: Black Ops Cold War", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202112/0618/cFLNC3xYfEdDl7D1Wvu4MVb1.png" },
    { id: 19, nombre: "Call of Duty: Modern Warfare II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/W5uSEsW7yefCNTHatS03v5q7.png" },
    { id: 20, nombre: "Call of Duty: Modern Warfare III", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202311/0921/331d5a7e34386f1103f95cf9083662a6ad39d3418f285398.png" },
    { id: 21, nombre: "Call of Duty: Vanguard", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/2402/x0TZ7gTngEzFGOAsuyi8yAsO.png" },
    { id: 23, nombre: "Captain Tsubasa: Rise of New Champions", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA14889_00/2/i_bb42051699ffb0b867a6092ae7aa5dfd7af2979fb536075ab13d65d58d02593d/i/icon0.png" },
    { id: 24, nombre: "Car Mechanic Simulator 2021", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/1610/twBZb8hAKAR9CkFuNCXdSPah.png" },
    { id: 25, nombre: "Crash Bandicoot 4: It's About Time", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/1602/TYk0GalUXvrSG0J6aAyfd1h6.png" },
    { id: 26, nombre: "Crash Bandicoot N. Sane Trilogy", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07402_00/3/i_47c34c88118d43321fcfe620f2ca248c461abbaa972b9176ac22971e4202050a/i/icon0.png" },
    { id: 27, nombre: "Crash Team Racing Nitro-Fueled", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA13795_00/3/i_1b96dbf425a8b6a943aedadb556d1e1d029400ba431f43980b1b453dbcb488b8/i/icon0.png" },
    { id: 28, nombre: "Cuphead", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA20469_00/1/i_3fa25ceb0c4d77fb214dce8cd1ad03d339d78d5db47c4f2511260595cbb38d00/i/icon0.png" },
    { id: 29, nombre: "Cyberpunk 2077", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202202/1517/UyPJCxbE3EoeLtUxjoFBnsD4.png" },
    { id: 30, nombre: "Dark Souls Remastered", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08692_00/3/i_7a180d9c3362c89e4149c949ad1173d9fc2159a1d26893f1d88b9f1e48d8d7d9/i/icon0.png" },
    { id: 31, nombre: "Dead by Daylight", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08032_00/3/i_1ef7033e599774239b53869b64c7362da504cfec72a2a7ff6bba26eb1121da6f/i/icon0.png" },
    { id: 32, nombre: "Dead Island 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/02bb2cef9a18a6af8b0d9bb0a63d33bedb1ea2f18b0e8e05.png" },
    { id: 33, nombre: "Demon Slayer: The Hinokami Chronicles", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1718/6Xy9RWNM8B5Cy2AkBhCYnMlV.png" },
    { id: 34, nombre: "Detroit: Become Human", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP9000/CUSA08344_00/HdvVSL0EbmwsM2sBcNB7Alr0cLZuNNMn.png" },
    { id: 35, nombre: "Devil May Cry 5 + Vergil", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA11658_00/xdj4UjyTnPxmJdUNNGzTjlJq0gY9gEVW.png" },
    { id: 36, nombre: "Diablo III: Eternal Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0002/CUSA00433_00/gy8fVsXMsaWgfXIh5wL2vqBmSsJmMX3T.png" },
    { id: 37, nombre: "Diablo IV", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/9e92c466f18085bbe0b91a0e3e1b7583c5b39b88ae5c1d64.png" },
    { id: 38, nombre: "DIRT 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2821/zE6mFvMhZxXj3N5SQgP3Qf8l.png" },
    { id: 39, nombre: "DOOM Eternal", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/0114/0MpPwlZMLRkfSnRV8hWq6GxH.png" },
    { id: 40, nombre: "Dragon Ball FighterZ", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0700/CUSA09072_00/R1xjJD71fNEvbKA0Xr8l8lQK1FtT0Uez.png" },
    { id: 41, nombre: "Dragon Ball Xenoverse 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0700/CUSA05350_00/rhiBwPJ97FJaJgvXAqECmGGJmXhhZDij.png" },
    { id: 42, nombre: "Dying Light 2 Stay Human", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2321/Dn4H2HXt1j1RcUzqOd9kWtBm.png" },
    { id: 43, nombre: "Evil West", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0921/JH2z8QX5GfxbXoGIj1eGM0MK.png" },
    { id: 44, nombre: "Far Cry 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202106/0722/R3GlLCPJQV8LjLIUjb3lU6QP.png" },
    { id: 45, nombre: "FC 25", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202407/1210/058a813cf55b52e65e357d608fb2b063e6dcb31a0a0e5318.png" },
    { id: 46, nombre: "Five Nights at Freddy's: Security Breach", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2815/v5O2RU9jhiU6WMO8lcqhpjFV.png" },
    { id: 47, nombre: "God of War Ragnarök", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" },
    { id: 48, nombre: "Grand Theft Auto V", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1004/CUSA00419_00/Ko9VEu7smfHxCCKvPOWDJLZZPmMhZobv.png" },
    { id: 49, nombre: "Hogwarts Legacy", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1222/XO47AkO40cmuvkyUqKTxTYHl.png" },
    { id: 50, nombre: "Horizon Forbidden West", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/4MKTvyQ5vJFG0iLb9HdBX9OC.png" },
    { id: 51, nombre: "Human: Fall Flat", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP4395/CUSA07215_00/YHHtXyW7JdDMGJqGJPZvj2v6c0e0a8lw.png" },
    { id: 52, nombre: "LEGO Batman 3: Beyond Gotham", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA00580_00/Kc3kYWWFzIV8N6AxF2T5xJvNlZ1YcLQd.png" },
    { id: 53, nombre: "LEGO DC Super-Villains", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA11481_00/sYAcBZIW8L7bHNIwfVhq4x4xdEAjI16E.png" },
    { id: 54, nombre: "LEGO Harry Potter Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA05954_00/jlxaJKKKcB5aKc0NQQEwrI2JoqLzCOPb.png" },
    { id: 55, nombre: "LEGO Jurassic World", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA01513_00/qPnBzSGQFxGmg8K0UyWb8YVpXYLfSBR2.png" },
    { id: 56, nombre: "LEGO Marvel Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202009/2816/ESmL2xPdL1ZwEIOjkH8xGi5l.png" },
    { id: 57, nombre: "LEGO Marvel's Avengers", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA02107_00/6LjF5Qn1LkDYlC7L5s1BlYMzYFEMsEK4.png" },
    { id: 58, nombre: "LEGO Star Wars: The Skywalker Saga", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202201/2816/wPxOHkFBEz8EvLq1bYsE3G0E.png" },
    { id: 59, nombre: "LEGO The Incredibles", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA09878_00/ynTVPuIVhN3LBe6SsA5EWXGHTHdXR4gX.png" },
    { id: 60, nombre: "Lies of P", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0902/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.png" },
    { id: 61, nombre: "Little Nightmares II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2621/YvJb9Gvp6mZgFDpfMPFpvXoZ.png" },
    { id: 62, nombre: "Marvel vs. Capcom Fighting Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/1215/b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6.png" },
    { id: 63, nombre: "Metro Exodus", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP4062/CUSA11407_00/iGnZ6f5RlEWMWQhILrKiRdSWOqTyBRMS.png" },
    { id: 64, nombre: "Minecraft", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP4433/CUSA00744_00/VELqQrLvO2SNMuH8RJEXqc3WHVp5dVLS.png" },
    { id: 65, nombre: "Mortal Kombat 11 Ultimate", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2615/T5ZFi2IqsTgxjC1SqMpfEKQf.png" },
    { id: 66, nombre: "Moving Out", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202004/2015/nGzQyg0VPmHB5fLO3Y8p9A5y.png" },
    { id: 67, nombre: "Moving Out 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/2816/f1e2d3c4b5a6978f0a1b2c3d4e5f6a7b.png" },
    { id: 68, nombre: "Naruto X Boruto Ultimate Ninja Storm Connections", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0816/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 69, nombre: "Need for Speed Heat", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0006/CUSA15081_00/VL1PzDlHgbvuAGxLOdpIrj1pSZSV1Tly.png" },
    { id: 70, nombre: "Need for Speed Payback", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0006/CUSA05999_00/NBqWyPFlz2Rw0lbkT3LWCFYe1XzqfWEP.png" },
    { id: 71, nombre: "No Man's Sky", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP2034/CUSA04841_00/WfbbeLi59M4y0P1Y66YdRxUWGDGBPqZQ.png" },
    { id: 72, nombre: "ONE PIECE ODYSSEY", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1617/PiTxSNWmUVpJOm8rRQ3Cv93J.png" },
    { id: 73, nombre: "Outlast Trials", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202402/1315/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6.png" },
    { id: 74, nombre: "Plants vs. Zombies: Battle for Neighborville", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0006/CUSA10863_00/mNZYnx0V8lfz4DfvSMKZXrQxhEHl1uNE.png" },
    { id: 75, nombre: "Red Dead Redemption 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png" },
    { id: 76, nombre: "Resident Evil 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA09193_00/Eqa6P70xcz86Rfa38gRWOSUVbj8P8KYL.png" },
    { id: 77, nombre: "Resident Evil 3", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202003/1015/SfXwN0d48YIRyESJlcQkMiFQ.png" },
    { id: 78, nombre: "Resident Evil 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/1711/R5KFbQTRYLRLTnR6YsYOZsKS.png" },
    { id: 79, nombre: "Resident Evil 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA04437_00/ZBLSlKMJUF1E1KMSr4aRXkzNLjXLFJEv.png" },
    { id: 80, nombre: "Resident Evil 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA03856_00/8aKNeMz5Wy7Nh40J0OAEkSHvYcU7k1KZ.png" },
    { id: 81, nombre: "Resident Evil 7 Biohazard", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA03962_00/Dg6pLDPr26fFoYULfYvXjQT6JDI3U2A3.png" },
    { id: 82, nombre: "Resident Evil Village", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTg07ILNa.png" },
    { id: 83, nombre: "Resident Evil Revelations 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA00924_00/1a6XWsgz4h6tqCOL1cNXjMeHELGP5TGe.png" },
    { id: 84, nombre: "Resident Evil Triple Pack", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1715/RxSQg6Y19lF9e0bDl1QSWisl.png" },
    { id: 85, nombre: "Riders Republic", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/0210/4obHpBRtmLzP8yRpgw20Vy8r.png" },
    { id: 86, nombre: "Rise of the Tomb Raider", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0082/CUSA05716_00/PbHLNJMoIrcOnhP9eqKsXqb3sMLLHCHa.png" },
    { id: 87, nombre: "Shadow of the Tomb Raider", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0082/CUSA10938_00/M6LmwVEgoLxHcJEA3FDdGvRqzkuBQl3D.png" },
    { id: 88, nombre: "SnowRunner", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202004/2817/B6Ds7aA6VB6C1eHTPf8q5YSt.png" },
    { id: 89, nombre: "Sniper Elite 4", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP4363/CUSA04220_00/oUXRZU4YRYJvj6QbKNHqx9b4qpLwGRGT.png" },
    { id: 90, nombre: "Sniper Elite 5", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202203/0315/YxIDvUH0fSejVVdVzPYXeNCd.png" },
    { id: 91, nombre: "Sonic Frontiers", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0800/yM0eeJJMu2G77UYs6m3T3SIc.png" },
    { id: 92, nombre: "Sonic Mania", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0177/CUSA07023_00/hjFHdmjC1Z9lAj7DqNMmKZJ8lnbEgJGR.png" },
    { id: 93, nombre: "Sonic Origins", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/1615/GWSI2EhHEqDSKtH4eAzWVSIl.png" },
    { id: 94, nombre: "Sonic Superstars", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1415/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 95, nombre: "Sonic X Shadow Generations", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/1815/e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.png" },
    { id: 96, nombre: "Star Wars Battlefront II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0006/CUSA05770_00/of1SxLI3rBKiXCQmPb6OoXYVfpJFrxPS.png" },
    { id: 97, nombre: "Star Wars Jedi: Fallen Order", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2817/RiBCEaFXvgMn0XOvRWb8nTPD.png" },
    { id: 98, nombre: "Street Fighter 6", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202303/0822/TwSLd7e8Yk7HEMrXyxPEVH0O.png" },
    { id: 99, nombre: "Street Fighter V", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA01200_00/dD1G1Rf3FswNLuNdwwQ8R2VtqOpK3eMz.png" },
    { id: 100, nombre: "Street Fighter 30th Anniversary Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA07828_00/f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6.png" },
    { id: 101, nombre: "Subnautica", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP5020/CUSA13529_00/EXbdZZsq4rVNNgdBD8s29b1n0SVV2J8Q.png" },
    { id: 102, nombre: "Subnautica: Below Zero", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202103/0412/VE5pHwfJoqQb12g6g2uoBXLn.png" },
    { id: 103, nombre: "Terraria", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP4040/CUSA00740_00/rPFDFgKuqJhALBDjXiNoJhSdckpqYWgF.png" },
    { id: 104, nombre: "The Crew Motorfest", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1315/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6.png" },
    { id: 105, nombre: "The Dark Pictures: Man of Medan", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202007/2815/QIAQ5PY3xSn4F5y5c5aDhKpV.png" },
    { id: 106, nombre: "The Dark Pictures: Little Hope", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2822/r2XSYkA8KrPdslH7VLRkO3ld.png" },
    { id: 107, nombre: "The Dark Pictures: House of Ashes", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1715/L1hN0F3XgR8gI3bA7T9p6fHv.png" },
    { id: 108, nombre: "The Dark Pictures: The Devil in Me", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202210/1711/y6gS3WNrUr6RqVJapmRTIBOm.png" },
    { id: 109, nombre: "The Elder Scrolls V: Skyrim", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1003/CUSA05333_00/v8pPQOo2eLJpP4cZKqlRdGBLqfPJx6V2.png" },
    { id: 110, nombre: "The Evil Within 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP1003/CUSA06166_00/b1a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.png" },
    { id: 111, nombre: "The Last of Us Part I", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202205/2618/Nqt7dqyyPMdfLAR7p3Aq0S9O.png" },
    { id: 112, nombre: "The Last of Us Part II", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y52vmHIcMwIwP4oJBHdJcxJH.png" },
    { id: 113, nombre: "The Witcher 3: Wild Hunt", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/EP4497/CUSA01439_00/c4vJRsdis0SPNVRMEwQNfaWd5MIa0L8k.png" },
    { id: 114, nombre: "Tomb Raider: Definitive Survivor Trilogy", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202203/0815/f1a2b3c4d5e6a7b8c9d0e1f2a3b4c5d6.png" },
    { id: 115, nombre: "Tony Hawk's Pro Skater 1 + 2", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1019/Z1TGOvPwuXfDqBYNRsJh7V8f.png" },
    { id: 116, nombre: "TopSpin 2K25", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202403/1415/f1e2d3c4b5a6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 117, nombre: "Ultimate Marvel vs. Capcom 3", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA04622_00/hONJnXFPKPKxqJDmJ5YDYOy9p6P5CMQR.png" },
    { id: 118, nombre: "Uncharted: The Nathan Drake Collection", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/cdn/UP9000/CUSA02320_00/8gCYJBKuJJQGqm8OwEP3SRSRMrNf0c0N.png" },
    { id: 119, nombre: "Watch Dogs: Legion", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/wvwgmfn5wLVcnSnGEo6ULUD6.png" },
    { id: 120, nombre: "Wo Long: Fallen Dynasty", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1617/S3sLT5gvxSH5vbVJnaMtMfxA.png" },
    { id: 121, nombre: "WRC 10", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/1919/gzOCy0nAjHAUx3TJsKqW3Y8o.png" },
    { id: 122, nombre: "WRC Generations", plataforma: "PS4 / PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202209/0815/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 216, nombre: "FC 26", plataforma: "PS5 / PS4", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=FC+26" },
];

const juegosPS5Exclusivos = [
    { id: 201, nombre: "Age of Mythology: Retold", plataforma: "PS5", imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1934680/header.jpg" },
    { id: 202, nombre: "Alan Wake 2", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2321/06d6c0cac34dae2b2a0b30e59e51d9e8e4e5e2a7c77b8b5a.png" },
    { id: 203, nombre: "Battlefield 6", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=Battlefield+6" },
    { id: 204, nombre: "Call of Duty: Black Ops 7", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=Black+Ops+7" },
    { id: 205, nombre: "Clair Obscur: Expedition 33", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0717/f1e2d3c4b5a6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 206, nombre: "Cronos: The New Dawn", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=Cronos" },
    { id: 207, nombre: "Death Stranding 2: On the Beach", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2921/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6.png" },
    { id: 208, nombre: "Demon Slayer: The Hinokami Chronicles 2", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=Demon+Slayer+2" },
    { id: 209, nombre: "Demon's Souls", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/PRfYtTZQsuj3ALrn9vF5SMY8.png" },
    { id: 210, nombre: "DOOM: The Dark Ages", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=DOOM+Dark+Ages" },
    { id: 211, nombre: "Dragon Age: The Veilguard", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0717/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.png" },
    { id: 212, nombre: "Dragon Ball Sparking! ZERO", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202403/1315/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6.png" },
    { id: 213, nombre: "Dragon's Dogma 2", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202309/1315/b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6.png" },
    { id: 214, nombre: "Elden Ring", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png" },
    { id: 215, nombre: "F1 25", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2815/e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.png" },
    { id: 217, nombre: "Forza Horizon 5", plataforma: "PS5", imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg" },
    { id: 218, nombre: "Gears of War: Reloaded", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=Gears+Reloaded" },
    { id: 219, nombre: "Ghost of Yotei", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202409/2413/7aa19d6c83f36f0e066e9d0c0bc05e32ec63f0c52dd4b1db.png" },
    { id: 220, nombre: "Hell Let Loose", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2821/qDOE0zPkHwJgbOxcaKB0wHHI.png" },
    { id: 221, nombre: "Indiana Jones and the Great Circle", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202406/1815/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6.png" },
    { id: 222, nombre: "METAL GEAR SOLID Δ: SNAKE EATER", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=MGS+Delta" },
    { id: 223, nombre: "Monster Hunter Wilds", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202412/0917/f1e2d3c4b5a6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 224, nombre: "Mortal Kombat 1", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/1210/56e2dfacfc69e34f7c6a8a6d9c8e6cf3c7e5c4b3a2d1e0f9.png" },
    { id: 225, nombre: "Palworld", plataforma: "PS5", imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg" },
    { id: 226, nombre: "Ready or Not", plataforma: "PS5", imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/header.jpg" },
    { id: 227, nombre: "Rise of the Ronin", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/2921/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 228, nombre: "Sea of Thieves", plataforma: "PS5", imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg" },
    { id: 229, nombre: "Silent Hill 2", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2815/f1e2d3c4b5a6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 230, nombre: "Silent Hill f", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=Silent+Hill+f" },
    { id: 231, nombre: "Sniper Elite: Resistance", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202410/1515/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.png" },
    { id: 232, nombre: "Star Wars Outlaws", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202404/1715/e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.png" },
    { id: 233, nombre: "Tekken 8", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0807/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.png" },
    { id: 234, nombre: "The First Berserker: Khazan", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=First+Berserker" },
    { id: 235, nombre: "The Precinct", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=The+Precinct" },
    { id: 236, nombre: "Tony Hawk's Pro Skater 3 + 4", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=THPS+3+4" },
    { id: 237, nombre: "UFC 5", plataforma: "PS5", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202307/1715/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6.png" },
    { id: 238, nombre: "Warhammer 40,000: Darktide", plataforma: "PS5", imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1361210/header.jpg" },
    { id: 239, nombre: "Wuchang: Fallen Feathers", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=Wuchang" },
    { id: 240, nombre: "WWE 2K25", plataforma: "PS5", imagen: "https://via.placeholder.com/300x180/0f3460/ffffff?text=WWE+2K25" }
];

// Combinar todos los juegos
const todosLosJuegos = [...juegosPS4PS5, ...juegosPS5Exclusivos];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contadorCarritoIcono = document.getElementById('contador-carrito');

// Renderizar catálogos
function renderizarCatalogos() {
    renderizarCatalogoPS4PS5();
    renderizarCatalogoPS5();
}

function renderizarCatalogoPS4PS5() {
    const grid = document.getElementById('catalogo-ps4-ps5-grid');
    grid.innerHTML = '';
    juegosPS4PS5.forEach(juego => {
        grid.appendChild(crearTarjetaJuego(juego));
    });
}

function renderizarCatalogoPS5() {
    const grid = document.getElementById('catalogo-ps5-grid');
    grid.innerHTML = '';
    juegosPS5Exclusivos.forEach(juego => {
        grid.appendChild(crearTarjetaJuego(juego, true));
    });
}

// Tarjeta de juego: imagen + cantidad + tipo de cuenta + botón Agregar
function crearTarjetaJuego(juego, esExclusivo = false) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const claseExclusivo = esExclusivo ? ' ps5-exclusive' : '';

    card.innerHTML = `
        <img src="${juego.imagen}" alt="${juego.nombre}" class="producto-img">


        <div class="opciones-compra">
            <label>Cantidad:
                <input type="number" min="1" value="1"
                       class="input-cantidad"
                       data-id="${juego.id}">
            </label>

            <label>Tipo de cuenta:
                <select class="select-tipo-cuenta" data-id="${juego.id}">
                    <option value="primaria">Cuenta primaria</option>
                    <option value="secundaria">Cuenta secundaria</option>
                </select>
            </label>
        </div>

        <button class="btn-agregar" onclick="agregarAlCarrito(${juego.id})">
            Agregar al Carrito
        </button>
    `;

    return card;
}

// ----- BUSCADOR -----
const inputBuscar = document.getElementById('input-buscar');
const btnLimpiar = document.getElementById('btn-limpiar-busqueda');
const resultadosSection = document.getElementById('resultados-busqueda');
const catalogoPS4PS5 = document.getElementById('catalogo-ps4-ps5');
const catalogoPS5 = document.getElementById('catalogo-ps5');

inputBuscar.addEventListener('input', function() {
    const termino = this.value.trim().toLowerCase();

    if (termino.length > 0) {
        btnLimpiar.style.display = 'block';
        buscarJuegos(termino);
    } else {
        btnLimpiar.style.display = 'none';
        mostrarCatalogosNormales();
    }
});

btnLimpiar.addEventListener('click', function() {
    inputBuscar.value = '';
    btnLimpiar.style.display = 'none';
    mostrarCatalogosNormales();
});

function buscarJuegos(termino) {
    const resultados = todosLosJuegos.filter(juego => 
        juego.nombre.toLowerCase().includes(termino)
    );

    mostrarResultados(resultados, termino);
}

function mostrarResultados(resultados, termino) {
    catalogoPS4PS5.style.display = 'none';
    catalogoPS5.style.display = 'none';
    resultadosSection.style.display = 'block';

    const textoResultados = document.getElementById('texto-resultados');
    const resultadosGrid = document.getElementById('resultados-grid');

    if (resultados.length === 0) {
        textoResultados.textContent = `No se encontraron resultados para "${termino}"`;
        resultadosGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">Intenta con otro nombre</p>';
    } else {
        textoResultados.textContent = `${resultados.length} juego(s) encontrado(s) para "${termino}"`;
        resultadosGrid.innerHTML = '';
        resultados.forEach(juego => {
            const esExclusivo = juego.plataforma === 'PS5';
            resultadosGrid.appendChild(crearTarjetaJuego(juego, esExclusivo));
        });
    }
}

function mostrarCatalogosNormales() {
    resultadosSection.style.display = 'none';
    catalogoPS4PS5.style.display = 'block';
    catalogoPS5.style.display = 'block';
}

// ----- CARRITO -----
// Lee cantidad y tipo de cuenta desde la tarjeta y agrega
function agregarAlCarrito(id) {
    const juego = todosLosJuegos.find(j => j.id === id);
    if (!juego) return;

    const inputCantidad = document.querySelector(`.input-cantidad[data-id="${id}"]`);
    const selectTipo = document.querySelector(`.select-tipo-cuenta[data-id="${id}"]`);

    const cantidad = parseInt(inputCantidad?.value, 10) || 1;
    const tipoCuenta = selectTipo?.value || 'primaria';

    const clave = `${juego.id}-${tipoCuenta}`;
    const enCarrito = carrito.find(item => item.clave === clave);

    if (enCarrito) {
        enCarrito.cantidad += cantidad;
    } else {
        carrito.push({
            ...juego,
            cantidad,
            tipoCuenta,
            clave
        });
    }

    actualizarCarrito();
    guardarCarrito();
    alert(`✅ ${cantidad} x ${juego.nombre} (${tipoCuenta === 'primaria' ? 'Cuenta primaria' : 'Cuenta secundaria'}) agregado(s) al carrito`);
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
    guardarCarrito();
}

function actualizarCarrito() {
    const carritoProductos = document.getElementById('carrito-productos');
    const totalJuegos = document.getElementById('total-juegos');

    if (carrito.length === 0) {
        carritoProductos.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío 🛒<br>¡Busca y agrega juegos que te interesen!</p>';
        totalJuegos.textContent = '0';
        if (contadorCarritoIcono) contadorCarritoIcono.textContent = '0';
        return;
    }

    carritoProductos.innerHTML = '';
    let totalItems = 0;

    carrito.forEach(item => {
        totalItems += item.cantidad;

        const carritoItem = document.createElement('div');
        carritoItem.className = 'carrito-item';
        carritoItem.innerHTML = `
            <div class="carrito-item-info">
                <h4>${item.nombre}</h4>
                <p style="color: #999;">Tipo de cuenta: ${item.tipoCuenta === 'primaria' ? 'Primaria' : 'Secundaria'}</p>
                <p style="color: #999;">Plataforma: ${item.plataforma}</p>
                <p style="color: #e94560;">Cantidad: ${item.cantidad}</p>
            </div>
            <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        carritoProductos.appendChild(carritoItem);
    });

    totalJuegos.textContent = totalItems;
    if (contadorCarritoIcono) contadorCarritoIcono.textContent = totalItems;
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function vaciarCarrito() {
    if (carrito.length === 0) {
        alert('El carrito ya está vacío');
        return;
    }

    if (confirm('¿Estás seguro de vaciar el carrito?')) {
        carrito = [];
        actualizarCarrito();
        guardarCarrito();
    }
}

// Consultar por WhatsApp
document.getElementById('btn-consultar-whatsapp').addEventListener('click', function() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega juegos antes de consultar.');
        return;
    }

    let mensaje = `🎮 *NUEVO PEDIDO*%0A%0A`;
    mensaje += `Hola, quiero saber la *DISPONIBILIDAD Y PRECIOS* de estos juegos:%0A%0A`;

    carrito.forEach((item, index) => {
        mensaje += `${index + 1}. *${item.nombre}*%0A`;
        mensaje += `   Tipo de cuenta: ${item.tipoCuenta === 'primaria' ? 'Primaria' : 'Secundaria'}%0A`;
        mensaje += `   Plataforma: ${item.plataforma}%0A`;
        mensaje += `   Cantidad: ${item.cantidad}%0A%0A`;
    });

    mensaje += `_Espero su respuesta. Gracias!_`;

    window.open(`https://wa.me/56994877783?text=${mensaje}`, '_blank');
});

// Botones
document.getElementById('btn-vaciar').addEventListener('click', vaciarCarrito);

// FAQ
document.querySelectorAll('.faq-pregunta').forEach(pregunta => {
    pregunta.addEventListener('click', function() {
        const respuesta = this.nextElementSibling;
        const estaActivo = this.classList.contains('active');

        document.querySelectorAll('.faq-pregunta').forEach(p => {
            p.classList.remove('active');
            p.nextElementSibling.style.maxHeight = null;
        });

        if (!estaActivo) {
            this.classList.add('active');
            respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        }
    });
});

// Formulario contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    let textoWhatsApp = `*CONSULTA WEB - Master_digital*%0A%0A`;
    textoWhatsApp += `*Nombre:* ${nombre}%0A`;
    textoWhatsApp += `*Email:* ${email}%0A`;
    textoWhatsApp += `*Mensaje:* ${mensaje}`;

    window.open(`https://wa.me/56994877783?text=${textoWhatsApp}`, '_blank');
    this.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Inicializar
renderizarCatalogos();
actualizarCarrito();

console.log('🎮 Master_digital - Catálogo completo cargado');
console.log('📱 WhatsApp: +56 9 9487 7783');
console.log('📸 Instagram: @Master_digital23');
console.log('🎯 Total de juegos: ' + todosLosJuegos.length);
