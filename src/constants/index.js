import { retro_pcs, gaming_growth, top_laptops } from '../assets'

export const navbar = [ "Home", "New", "Popular", "Trending", "Categories" ];

export const hero = {
    title: "The Bright Future of Web 3.0?",
    content: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    btn: "Read More"
};

export const newList = {
    title: "New",
    content: [
        {
            title: "Hydrogen VS Electric Cars",
            content: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            title: "The Downsides of AI Artistry",
            content: "What are the possible adverse effects of on-demand AI image generation?"
        },
        {
            title: "Is VC Funding Drying Up?",
            content: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
    ]
};

export const popular = [
    {
        img: retro_pcs,
        number: "01",
        title: "Reviving Retro PCs",
        content: "What happens when old PCs are given modern upgrades?"
    },
    {
        img: top_laptops,
        number: "02",
        title: "Top 10 Laptops of 2022",
        content: "Our best picks for various needs and budgets."
    },
    {
        img: gaming_growth,
        number: "03",
        title: "The Growth of Gaming",
        content: "How the pandemic has sparked fresh opportunities."
    }
];