import mongoose from "mongoose";
import dotenv from "dotenv";
import Artist from "../src/models/artistModel.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const artists = [
  {
    name: "MATRAKK",
    style: "Techno industrielle / Acid Techno",
    bio: "Producteur explosif de la scène électronique belge, MATRAKK mêle techno industrielle et rythmes acides dans des sets survoltés.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/matrakk___",
      youtube: "https://www.youtube.com/channel/UCXsdXRWByGcrLBRVNoXi5TA",
      spotify: "https://open.spotify.com/intl-fr/artist/5YJQDXCY8nFTf6BuHcYvJn?si=okp8TowwSEaL7wHK3_6naQ&nd=1&dlsi=675f225cb2da415d",
      soundcloud: "https://soundcloud.com/matrakk"
    },
    order: 1
  },
  {
    name: "AMYGDALA",
    style: "Techno hypnotique / Dark Techno",
    bio: "Plongeant dans les zones sombres de la techno, AMYGDALA explore l’intensité émotionnelle du son avec des textures hypnotiques et percutantes.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/aleixfresh/reels/",
      youtube: "https://www.youtube.com/@AmygdalaTek",
      spotify: "https://open.spotify.com/intl-fr/artist/7BGTl5Swxc7pcXnSgqzSSM",
      soundcloud: "https://soundcloud.com/aleix-perales"
    },
    order: 2
  },
  {
    name: "FENRICK",
    style: "Techno / Rave",
    bio: "DJ et producteur aux sonorités brutes, FENRICK fusionne la puissance de la rave et la profondeur de la techno moderne.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/fenrick_/",
      youtube: "https://www.youtube.com/channel/UCLSQvSxVNgwokVSqwFrB7YQ",
      spotify: "https://open.spotify.com/intl-fr/artist/4xfKbQQytFl4LWMGe2v5P3",
      soundcloud: "https://soundcloud.com/fenrickmusic"
    },
    order: 3
  },
  {
    name: "A5KM",
    style: "Techno / Hard Techno",
    bio: "Alliant basses lourdes et énergie rave, A5KM délivre une techno sans concession taillée pour les dancefloors.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/a5km_cloee/",
      youtube: "https://www.youtube.com/channel/UCsGO_oEv8qRhZeBAheWPGYA",
      spotify: "https://open.spotify.com/intl-fr/artist/3SIWzGY4GAe5R18PTHOK1v?si=V3CREIW-TCudbW_cIREQww&nd=1&dlsi=e65c3111d1b94fce",
      soundcloud: "https://soundcloud.com/cloee-a5km"
    },
    order: 4
  },
  {
    name: "EARGASM GOD",
    style: "Hard Techno / Experimental / Rave",
    bio: "Véritable architecte du chaos sonore, EARGASM GOD transcende les genres entre hard techno, trance et expérimentations extrêmes.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/eargasmgod/",
      youtube: "https://www.youtube.com/channel/UCbrBtLSNLGO0BLoO-3d2Y1w",
      spotify: "https://open.spotify.com/intl-fr/artist/4Fry0sEjFRKflf45xpPUMp",
      soundcloud: "https://soundcloud.com/eargasmgod"
    },
    order: 5
  },
  {
    name: "NURE",
    style: "Techno atmosphérique / Hypnotic Techno",
    bio: "Artiste aux ambiances sombres et progressives, NURE navigue entre techno atmosphérique et rythmes hypnotiques.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/nuremusic/",
      youtube: "https://www.youtube.com/channel/UC2QmI9TqoOphVTgEL5o3EAw",
      spotify: "https://open.spotify.com/intl-fr/artist/4zsl085OD62z4Pyc7JPhUq",
      soundcloud: "https://soundcloud.com/nure-music"
    },
    order: 6
  },
  {
    name: "KICHTA",
    style: "Rave Techno / Acid Techno",
    bio: "DJ passionné par les sonorités brutes et festives, KICHTA distille une techno énergique aux accents rave et acid.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/kichta.music/",
      spotify: "https://open.spotify.com/intl-fr/artist/7q6gx2J7fy969LK4hGRw8Y",
      soundcloud: "https://soundcloud.com/kichta-music"
    },
    order: 7
  },
  {
    name: "BEN CANDEL",
    style: "House / Tech-House",
    bio: "Maître du groove électronique, BEN CANDEL fait vibrer les foules avec une house lumineuse et contagieuse.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/ben_candel/",
      youtube: "https://www.youtube.com/channel/UCTpfJRwAwXpbftf4cTimGOw",
      spotify: "https://open.spotify.com/intl-fr/artist/1XGSGU6WX0Q1smgfF5ddr9",
      soundcloud: "https://soundcloud.com/bencandel"
    },
    order: 8
  },
  {
    name: "BENKEN",
    style: "Melodic Techno / Rave",
    bio: "Explorant la frontière entre techno mélodique et puissance rave, BENKEN déploie des sets immersifs et intenses.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/benken50cl/",
      youtube: "https://www.youtube.com/@benken50cl",
      spotify: "https://open.spotify.com/intl-fr/artist/3aXVxfPEHpK6vmrD5H03HT",
      soundcloud: "https://soundcloud.com/benken50cl"
    },
    order: 9
  },
  {
    name: "EUROPE",
    style: "Electronica / Experimental",
    bio: "Projet éclectique mêlant influences électroniques et expérimentales, EUROPE incarne la diversité sonore de la scène alternative.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/europe.dj/",
      soundcloud: "https://soundcloud.com/europe-dj"
    },
    order: 10
  },
  {
    name: "KATE SELECTA",
    style: "Reggae / Bass Music / Dancehall",
    bio: "Figure montante de la scène bass et reggae, KATE SELECTA enflamme les platines avec ses mix explosifs aux influences tropicales.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/kate.selecta/",
      soundcloud: "https://soundcloud.com/kat3side"
    },
    order: 11
  },
  {
    name: "JAKARTA",
    style: "Tribal Techno / Progressive Techno",
    bio: "Voyage musical entre techno percussive et sonorités tribales, JAKARTA offre une expérience sensorielle intense.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/jakarta.dj__/",
      soundcloud: "https://soundcloud.com/jennifer-lannen-783882554"
    },
    order: 12
  },
  {
    name: "LALUDE",
    style: "Style à venir",
    bio: "Bio à venir.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/ludo_burg/"
    },
    order: 13
  },
  {
    name: "MARCEL DK",
    style: "Techno / Club Techno",
    bio: "Passionné de groove et d’énergie brute, MARCEL DK mixe une techno incisive taillée pour le club.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/marcel_dk_music/",
      youtube: "https://www.youtube.com/channel/UCt6PIrr_yvBzHizMndQ-NCA",
      spotify: "https://open.spotify.com/intl-fr/artist/62stBnZFzDkJjumphGGnue",
      soundcloud: "https://soundcloud.com/marceldk"
    },
    order: 14
  },
  {
    name: "MILIORYANDO",
    style: "Electronica / Melodic Techno",
    bio: "Explorateur sonore aux influences multiples, MILIORYANDO construit des univers électroniques où la mélodie rencontre la puissance rythmique.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/milioruando/",
      youtube: "https://www.youtube.com/@milioruando",
      spotify: "https://open.spotify.com/intl-fr/artist/5rietLP1YOIXYeRY1yXGs9",
      soundcloud: "https://soundcloud.com/milioruando"
    },
    order: 15
  },
  {
    name: "NAT3",
    style: "Style à venir",
    bio: "Bio à venir.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/nat3_nat3_/",
      soundcloud: "https://soundcloud.com/nicolet-nathan"
    },
    order: 16
  },
  {
    name: "SEG",
    style: "Style à venir",
    bio: "Bio à venir.",
    image: "",
    socials: {
      instagram: "https://www.instagram.com/matthieuseguy__/"
    },
    order: 17
  }
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
    await Artist.deleteMany();
    console.log("🧹 Artist collection cleared");
    await Artist.insertMany(artists);
    console.log("🎉 Artists seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seed();
