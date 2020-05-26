const FONT_COLOR = "#693800";
const FONT_FAMILY = "SanvitoPro-Bold";
const BACKGROUND_COLOR = "#FFFDD0";
const CONTAINER_BACKGROUND_COLOR = "#F8F0C6";
const TOPBAR_BACKGROUND_COLOR = "#D99311";
const LOGO_URL =
  "https://cdn.discordapp.com/attachments/707186726896140319/714517416755069008/beer-logo-vector-2.png";

const BREWERS = [
  {
    itemId: 1,
    name: "Profesja",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456379418476564/NoPath.png",
    beers: [
      {
        id: 1,
        name: "Inzynier",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/714907834864762880/inzynier_piwo.png",
        price: {
          currency: "PLN",
          amount: 500,
        },
      },
      {
        id: 2,
        name: "Inzynier",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/714907834864762880/inzynier_piwo.png",
        price: {
          currency: "PLN",
          amount: 600,
        },
      },
      {
        id: 3,
        name: "Inzynier",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/714907834864762880/inzynier_piwo.png",
        price: {
          currency: "PLN",
          amount: 900,
        },
      },
      {
        id: 4,
        name: "Inzynier",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/714907834864762880/inzynier_piwo.png",
        price: {
          currency: "PLN",
          amount: 1000,
        },
      },
      {
        id: 5,
        name: "Inzynier",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/714907834864762880/inzynier_piwo.png",
        price: {
          currency: "PLN",
          amount: 500,
        },
      },
      {
        id: 6,
        name: "Inzynier",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/714907834864762880/inzynier_piwo.png",
        price: {
          currency: "PLN",
          amount: 500,
        },
      },
    ],
  },
  {
    itemId: 2,
    name: "Stu Mostów",
    beers: [
      {
        id: 1,
        name: "Inzynier",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/714907834864762880/inzynier_piwo.png",
        price: {
          currency: "PLN",
          amount: 500,
        },
      },
    ],
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456046688534578/100Mostow.png",
  },
  {
    itemId: 3,
    beers: [],
    name: "AleBrowar",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456308971208744/hopheads.png",
  },
];

export {
  FONT_COLOR,
  FONT_FAMILY,
  BACKGROUND_COLOR,
  BREWERS,
  CONTAINER_BACKGROUND_COLOR,
  LOGO_URL,
  TOPBAR_BACKGROUND_COLOR,
};
