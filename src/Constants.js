const FONT_COLOR = "#693800";
const FONT_FAMILY = "SanvitoPro-Bold";
const BACKGROUND_COLOR = "#FFFDD0";
const CONTAINER_BACKGROUND_COLOR = "#F8F0C6";
const TOPBAR_BACKGROUND_COLOR = "#D99311";
const LOGO_URL =
  "https://cdn.discordapp.com/attachments/707186726896140319/714517416755069008/beer-logo-vector-2.png";

const SMALL_CONTAINER_BACKGROUND_COLOR = "#FAFFE4";
const SMALL_CONTAINER_BORDER_COLOR = "#693800";
const DEFAULT_CURRENCY = "PLN";

const BREWERIES = [
  {
    itemId: 1,
    name: "Profesja",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456379418476564/NoPath.png",
    description: `A craft brewery from Wrocław, founded by home brewers and beer enthusiasts - we brew beers that we gladly reach for ourselves. We come from the Wrocław home brewing environment - brewing has become our profession, and quality is a hallmark. We brew on our own equipment, we use only liquid yeast and the highest quality raw materials.`,
    fullName: "Browar Profesja Sp. z o.o.",
    address: "ul. Kwidzyńska 6E 51-416 Wroclaw",
    email: "biuro@browarprofesja.pl",
    phone: "+48 733 703 101",
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
    itemId: 15,
    name: "Stu Mostów",
    beers: [
      {
        id: 20,
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
    itemId: 16,
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
  BREWERIES,
  CONTAINER_BACKGROUND_COLOR,
  LOGO_URL,
  TOPBAR_BACKGROUND_COLOR,
  SMALL_CONTAINER_BACKGROUND_COLOR,
  SMALL_CONTAINER_BORDER_COLOR,
  DEFAULT_CURRENCY,
};
