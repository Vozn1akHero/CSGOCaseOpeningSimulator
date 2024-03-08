import { Quality } from "public/scripts/drop/quality";
import { Knife } from "./knife";

const allQualities = [
    Quality["Battle-Scarred"],
    Quality["Well-Worn"],
    Quality["Minimal Wear"],
    Quality["Factory New"],
]

export const PrismaKnives: Array<Knife> = [
    {
        title: "★ Talon Knife | Damascus Steel",
        weapon: "★ Talon Knife",
        skin: "Damascus Steel",
        image: "/images/prismaknives/talondamascussteel.png",
        quality: allQualities,
        type: 6,
    },
    {
        title: "★ Talon Knife | Doppler",
        weapon: "★ Talon Knife",
        skin: "Doppler",
        image: "/images/prismaknives/talondoppler.png",
        quality: [Quality["Minimal Wear"], Quality["Factory New"]],
        type: 6,
    },
    {
        title: "★ Talon Knife | Marble Fade",
        weapon: "★ Talon Knife",
        skin: "Marble Fade",
        image: "/images/prismaknives/talonmarblefade.png",
        quality: [Quality["Minimal Wear"], Quality["Factory New"]],
        type: 6,
    },
    {
        title: "★ Talon Knife | Rust Coat",
        weapon: "★ Talon Knife",
        skin: "Rust Coat",
        image: "/images/prismaknives/talonrustcoat.png",
        quality: allQualities,
        type: 6,
    },
    {
        title: "★ Talon Knife | Tiger Tooth",
        weapon: "★ Talon Knife",
        skin: "Tiger Tooth",
        image: "/images/prismaknives/talontigertooth.png",
        quality: [Quality["Minimal Wear"], Quality["Factory New"]],
        type: 6,
    },
    {
        title: "★ Talon Knife | Ultraviolet",
        weapon: "★ Talon Knife",
        skin: "Ultraviolet",
        image: "/images/prismaknives/talonultraviolet.png",
        quality: allQualities,
        type: 6,
    },
]