import { Quality } from "../scripts/drop/quality";

export const Knives = {
  1: {
    id: 1,
    title: "Prisma Knives",
    items: [
      {
        title: "★ Talon Knife | Damascus Steel",
        weapon: "★ Talon Knife",
        skin: "Damascus Steel",
        image: "/images/prismaknives/talondamascussteel.png",
        type: 6,
      },
      {
        title: "★ Talon Knife | Doppler",
        weapon: "★ Talon Knife",
        skin: "Doppler",
        image: "/images/prismaknives/talondoppler.png",
        type: 6,
      },
      {
        title: "★ Talon Knife | Marble Fade",
        weapon: "★ Talon Knife",
        skin: "Marble Fade",
        image: "/images/prismaknives/talonmarblefade.png",
        type: 6,
      },
      {
        title: "★ Talon Knife | Rust Coat",
        weapon: "★ Talon Knife",
        skin: "Rust Coat",
        image: "/images/prismaknives/talonrustcoat.png",
        type: 6,
      },
      {
        title: "★ Talon Knife | Tiger Tooth",
        weapon: "★ Talon Knife",
        skin: "Tiger Tooth",
        image: "/images/prismaknives/talontigertooth.png",
        type: 6,
      },
      {
        title: "★ Talon Knife | Ultraviolet",
        weapon: "★ Talon Knife",
        skin: "Ultraviolet",
        image: "/images/prismaknives/talonultraviolet.png",
        type: 6,
      },
    ],
  },
  default: [
    {
      title: "★ Karambit",
      weapon: "★ Karambit",
      skin: "",
      image: "/images/defaultknives/karambit.png",
      quality: null,
      type: 6,
    },
    {
      title: "★ Karambit | Fade",
      weapon: "★ Karambit",
      skin: "Fade",
      image: "/images/defaultknives/karambitfade.png",
      quality: [Quality["Minimal Wear"], Quality["Factory New"]],
      type: 6,
    },
    {
      title: "★ Karambit | Case Hardened",
      weapon: "★ Karambit",
      skin: "Case Hardened",
      image: "/images/defaultknives/karambitcasehardened.png",
      quality: [
        Quality["Battle-Scarred"],
        Quality["Well-Worn"],
        Quality["Minimal Wear"],
        Quality["Factory New"],
      ],
      type: 6,
    },
    {
      title: "★ Bayonet | Case Hardened",
      weapon: "★ Bayonet",
      skin: "Case Hardened",
      image: "/images/defaultknives/bayonetcasehardened.png",
      quality: [
        Quality["Battle-Scarred"],
        Quality["Well-Worn"],
        Quality["Minimal Wear"],
        Quality["Factory New"],
      ],
      type: 6,
    },
  ],
};
