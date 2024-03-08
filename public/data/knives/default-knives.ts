import { Quality } from "public/scripts/drop/quality";
import { Knife } from "./knife";

const allQualities = [
    Quality["Battle-Scarred"],
    Quality["Well-Worn"],
    Quality["Minimal Wear"],
    Quality["Factory New"],
]

export const DefaultKnives: Array<Knife> = [
    {
        title: "★ Karambit",
        weapon: "★ Karambit",
        skin: "",
        image: "/images/defaultknives/karambit.png",
        imageUrl: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ejxQ7dG0nZTFw_H3a--IlTwCuMQl3r2UoY6n3QLj80I5MDr0JIbBJg9qYFnRrFS_wvCv28FbcdtZVg/360fx360f",
        quality: null,
        type: 6,
    },
    {
        title: "★ Karambit | Fade",
        weapon: "★ Karambit",
        skin: "Fade",
        image: "/images/defaultknives/karambitfade.png",
        imageUrl: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlYG0kfbwNoTdn2xZ_Isn3uyTpN7zjlHt-ENsZjumcoCUJAZqaV_QqVa9xL3thsC-tZyYznIypGB8sly_Gx3i/360fx360f",
        quality: [Quality["Minimal Wear"], Quality["Factory New"]],
        type: 6,
    },
    {
        title: "★ Karambit | Case Hardened",
        weapon: "★ Karambit",
        skin: "Case Hardened",
        image: "/images/defaultknives/karambitcasehardened.png",
        imageUrl: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_ummJW4NE_3r7HpI-iiQzk-hU6YmGgLIfDJFA-YQzS8wXokubqgJ-4u53NwXs1uT5iuygtaoBsBg/360fx360f",
        quality: allQualities,
        type: 6,
    },
    {
        title: "★ Bayonet | Case Hardened",
        weapon: "★ Bayonet",
        skin: "Case Hardened",
        image: "/images/defaultknives/bayonetcasehardened.png",
        imageUrl: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-HnvD8J_XUlG0Ivp0n3buYodSiiQzh-xFtNz2gdoeVdQI3ZwmF_Fm3yebs0ZW8ot2XnsLeT2tM/360fx360f",
        quality: allQualities,
        type: 6,
    },
]