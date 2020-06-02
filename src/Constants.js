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
          amount: 1400,
        },
        description:
          "Inżynier is… an ideally constructed balance between maltiness and the taste of noble hops. The slightly sweet finish coming from cornmeal is countered by the hops bitterness. Dark-straw color and shapely white foam create a harmonious composition which is a refreshing temptation after an exhausting day of work. Ingredients: water, malts (Pilsen, Munich, Caramel Pils), hops (Sybilla, Lubelski, Hallertau Tradition), corn porridge, yeast(San Diego Super).",
          ingredients:"water, malts (Pilsen, Munich, Caramel Pils), hops (Sybilla, Lubelski, Hallertau Tradition), corn porridge, yeast(San Diego Super)"
      },
      {
        id: 2,
        name: "Profesor",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131309952270386/prof_id_2.PNG",
        price: {
          currency: "PLN",
          amount: 1600,
        },
        description:
          "New England India Pale Ale hopped with Mosaic, Citra and Equinox varieties. You sense the numerous fruit aromas associated with the tropics. First of all, mango and papaya but also pineapple and melon. The taste is clearly smooth with a velvety texture and very delicate bitterness. The long aftertaste is full of citrus and kerosene. It's best to serve in IPA glass or in pokal.",
      },
      {
        id: 3,
        name: "Piwowar",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131380588281965/prof_id_3.PNG",
        price: {
          currency: "PLN",
          amount: 1200,
        },
        description:
          "Piwowar is ... a classic wheat beer with a delicate character. A distinct note of clove phenols shines through the aroma of fresh bananas. The delicate, slightly bread-like taste is combined with banana fruitiness and the taste of cloves. Light hop notes, low maltiness and medium saturation make the beer light in reception and refreshing.",
      },
      {
        id: 4,
        name: "Jazzman",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131471382642748/prof_id_4.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "Jazzman is ... American India Pale Ale with a dark copper color. In the aroma, strong herbal - floral - citrus notes, derived from American hops, mix with malt aromas. Light roasted notes and toffee derived from malts are also noticeable. Solid bitterness is countered by clear maltiness, but the balance is shifted towards the first one. We only use liquid yeast of our own propagation!. \n Recommended serving temperature is 8-12 ° C.",
        ingredients:
          "water, barley malt (Red X, Pilsen, Black), hops (Columbus, Centennial, Citra, Simcoe), yeast (San Diego Super)",
      },
      {
        id: 5,
        name: "Kanclerz",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131532858294352/prof_id_5.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "Kanclerz. . . is a classic Berliner Weisse, a beer with a malty aroma complemented by sour notes. A light beer with a very crisp taste. For lovers of sour beers, we recommend drinking clean, for those who do not like sour beers, we recommend using good juice. In both cases, it refreshes perfectly. Ingredients: water, barley malt (Pilsen), wheat malt (light wheat) hops (Magnat, Hallertauer Tradition), yeast (Grodziskie), bacteria (lactobacillius brevis, lactococcus lactis, lactobacillius plantarum, lactobacillius delbrueckii)",
      },
      {
        id: 6,
        name: "Pogromca Smokow",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131599132754050/prof_id_6.PNG",
        price: {
          currency: "PLN",
          amount: 1200,
        },
        description:
          "Pogromca Smokow ... is a light top-fermented beer brewed with the addition of aromatic kaffir lime leaves. Perfectly balanced especially for long summer evenings. The deep fermentation is counterbalanced by the smoothness derived from oat flakes. The citrus-herbal aroma of kaffir lime leaves is complemented by tropical floral notes derived from the new wave Ekuanot hops. The corresponding taste and aroma makes the beer very drinkable and complete. Unpasteurised beer, unfiltered.",
        ingredients:
          "water, barley (Pilsner) malt, wheat malt (light wheat), Ekuanot hops, additives (oat flakes, wheat flakes, kaffir lime leaves), HotHead Ale yeast.",
      },
      {
        id: 7,
        name: "Szofer",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131665478123551/prof_id_7.PNG",
        price: {
          currency: "PLN",
          amount: 900,
        },
        description:
          "Szofer ... is a non-alcoholic beer with a pleasant, sweet aroma of orange and lemon, lined with American hops. The subtle herbal-spice flavor emphasizes the refreshing and sweet character. Due to the low alcohol content, the chauffeur will quench your thirst in almost every situation.Unfiltered, pasteurized beer.",
        ingredients:
          "water, barley malt (Pilsen), wheat flakes, hops (Chinook, Citra), additives (orange peel, grapefruit peel, lemon peel, coriander), yeast WLS17 Sacharomyces Ludwigi.",
      },
      {
        id: 8,
        name: "Latarnik",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131721849569360/prof_id_8.PNG",
        price: {
          currency: "PLN",
          amount: 1200,
        },
        description:
          "Latarnik is ... a light, roasted beer. The aroma has malt notes with an admixture of coffee and dark chocolate. Just like the aroma, coffee-chocolate notes are also noticeable. Hops bitterness and aroma are low. The delicate nature and low alcohol level means that it can easily be drunk in larger quantities. Refreshing, full of flavor and aroma. Unfiltered and unpasteurised beer.",
        ingredients:
          "water, barley malt (Pilsen, Special X, Biscuit, Extra Black, Dark chocolate), wheat malt (roasted wheat), hops (Styrian, Eureka), yeast (Scottish Ale). Recommended serving temperature is 8-12 ° C.",
      },
      {
        id: 9,
        name: "Alchemik",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131721849569360/prof_id_8.PNG",
        price: {
          currency: "PLN",
          amount: 1700,
        },
        description:
          "Alchemik is ... American IPA fermented 100% wild yeast. Beer brewed in the lower range of style, on the one hand, emphasizes the dominance of American hops, on the other, it highlights the typical Belgian aromas",
      },
      {
        id: 10,
        name: "Bard",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131873335378011/prof_id_10.PNG",
        price: {
          currency: "PLN",
          amount: 1300,
        },
        description:
          "Bard is ... a low saturated, slightly foggy in connection with cold hopping liquor with a hint of fruit aroma, enhanced by malt and caramel. There is also an intense aroma of American hops, mainly floral and tropical. Refreshing taste with moderate bitterness and balanced maltiness.",
      },
      {
        id: 11,
        name: "Przekupka",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717131944076378234/prof_id_11.PNG",
        price: {
          currency: "PLN",
          amount: 1500,
        },
        description:
          "Przekupka is ... the imperial version of Witbier, more complete than its summer counterpart, while also drinkable. Beer with a strong citrus taste, broken by a solid bitterness from Citra hops. The aroma is dominated by sweet accents of orange and lemon, broken by the subtle aroma of coriander.",
      },
      {
        id: 12,
        name: "Pilot",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717132004671488080/prof_id_12.PNG",
        price: {
          currency: "PLN",
          amount: 800,
        },
        description:
          "Pilot ... is a low-alcohol beer with an intense aroma of new-wave hops with fruity notes, black tea and bergamot. The taste has fruit, tea complemented with malt. Low alcohol level makes Pilot quench your thirst in almost every situation. Unfiltered, pasteurized beer. Ingredients: water, barley malt (Pilsen), oat flakes, hops (Chinook, Citra), additives (Earl Gray black tea), yeast WLS17 Sacharomyces Ludwigi.",
      },
      {
        id: 13,
        name: "Karuzelarz",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717132062800478289/prof_id_13.PNG",
        price: {
          currency: "PLN",
          amount: 1400,
        },
        description:
          "Cooperative beer from Profesja Brewery and Karuzela Brewery. Black Currant Brett Ale beer, which producers characterize briefly and emphatically: it is wild and fruity.",
      },
      {
        id: 14,
        name: "Dobosz",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717132120127963216/prof_id_14.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "Dobosz is ... Light, crisp wheat beer with a hop-malt, slightly fruity aroma.",
      },
      {
        id: 15,
        name: "Nurek",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717132184066064444/prof_id_15.PNG",
        price: {
          currency: "PLN",
          amount: 1700,
        },
        description:
          "Nurek is ... Unfiltered beer in the style of a double bock",
      },
    ],
  },
  {
    itemId: 2,
    name: "Stu Mostów",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456046688534578/100Mostow.png",
    beers: [
      {
        id: 16,
        name: "SALAMANDER PASSIONFRUIT AND NECTARINE GOSE",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717120384578617374/100M_id_1.PNG",
        price: {
          currency: "PLN",
          amount: 1200,
        },
        description:
          "The sessional nature of the beer means that it will work both during long summer evenings but also as a daily beer for lovers of fruit beers. Barley and wheat malt as a basis and wheat flakes were used for its production to give a smooth structure and fullness.",
      },
      {
        id: 17,
        name: "WRCLW CHERRY EISBOCK",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717120795406499920/100M_id_2.PNG",
        price: {
          currency: "PLN",
          amount: 2300,
        },
        description:
          "This amber lager, rich in caramel, toasted, dried fruit notes, has been enriched with Polish 100% cherry juice.",
      },
      {
        id: 18,
        name: "WRCLW BARLEY WINE",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717121017062883437/100M_id_3.PNG",
        price: {
          currency: "PLN",
          amount: 1900,
        },
        description:
          "Another (after WRCLW Rye RIS) powerful style in our offer. This time it's Barley Wine - a strong top-fermented beer with a unique malty character. As usual, in our edition - unusual, because with the addition of cane molasses. It is also the most extractive beer we've brewed so far - incredibly essential and very tasting.",
      },
      {
        id: 19,
        name: "WRCLW HEFEWEIZEN",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717121220511793292/100M_id_4.PNG",
        price: {
          currency: "PLN",
          amount: 1000,
        },
        description:
          "Hefeweizen, traditional Bavarian style, yeast light fermented wheat beer. With the specially selected yeast strains filled flavors reminiscent of ripe bananas and cloves. It is extremely light and refreshing thanks to its light acidity. It tastes best when fresh.",
      },
      {
        id: 20,
        name: "WRCLW SCHOPS SMOKED PLUMS PORTO B.A.",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717121470622335076/100M_id_5.PNG",
        price: {
          currency: "PLN",
          amount: 1900,
        },
        description:
          "Over a year after recreating the historic Schöps beer, we decided to rediscover this amazing story again! We have combined history with a new wave of brewing. The wheat symbol of Wrocław, which for centuries returned to the offer of Wrocław hams, went to oak rum barrels, where it aged with plums, freshly smoked on beech smoke. In this way, we have added the sweet and sour beer profile to the taste of oak steamed with rum. The aroma of nutmeg, honey and warm bread has been enriched with extremely interesting aromas of dried plum, focal smoke, cold smoked ham as well as delicate vanilla and coconut. History rediscovered.",
      },
      {
        id: 21,
        name: "ART+31 IMPERIAL BROWN ALE CHOCOLATE & HAZELNUT NITRO",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717121625379831908/100M_id_6.PNG",
        price: {
          currency: "PLN",
          amount: 1800,
        },
        description:
          "Imperial version of Brown Ale beer, extremely rare in Poland. Brewed in cooperation with the Swedish brewery Beerbliotek known, among others from the production of excellent dark and extractive beers. The ART + 31 we make is no exception: it is dark brown, essential beer, rich in aromas of nuts, chocolate, caramel and cookies, mainly from malts. We emphasize his character by adding hazelnuts and cocoa. It is a warming beer dessert with a taste and texture reminiscent of a nut-chocolate cream, topped with a fine bubble nitrogen foam - enjoy the first sip!",
      },
      {
        id: 22,
        name: "SALAMANDER NEW ENGLAND TRIPLE IPA",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717121816996348035/100M_id_7.PNG",
        price: {
          currency: "PLN",
          amount: 1000,
        },
        description:
          "It consists of a light malt base with the addition of a substantial amount of wheat and oat flakes, and even more hops! At all possible production stages, we have added huge amounts of hop pellets of American varieties: Mosaic, ElDorado and Citra, which resulted in an intense tropical aroma.",
      },
      {
        id: 23,
        name: "WILD NO. 5 BIÈRE DE SOIF REFERMENTED WITH CHERRIES",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717121980314157167/100M_id_8.PNG",
        price: {
          currency: "PLN",
          amount: 4000,
        },
        description:
          "Wild is a completely new brand containing unusual mixed fermentation beers. The 'Bière de soif' series are hybrids forming a bridge between the world of wine, cider and beer. The final product is a mixture of our Bière de soif base aged in wooden barrels with a huge amount of local cherries. WILD No. beer 5 is distinguished by a deep, red color, high saturation and a rich flavor profile",
      },
      {
        id: 24,
        name: "WRCLW COFFEE IMPERIAL STOUT NITRO",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717122147096461421/100M_id_9.PNG",
        price: {
          currency: "PLN",
          amount: 2000,
        },
        description:
          " variation on the theme of the strongest and densest beer in Browar Stu Mostów. Black, opaque, brewed with the largest amount of dark and roasted malts combined with a large amount of freshly roasted and ground coffee prepared by Etno Cafe. Filled to the brim with freshly brewed espresso aromas, chocolate and caramel aromas. Over time, it acquires notes of dark dried fruit and pumpernickel. Incredibly essential and very tasting.",
      },
      {
        id: 25,
        name: "ART+8 STRAWBERRY BERLINER WEISSE",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717122298959757402/100M_id_10.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "It is a mix of a German traditional brewing school, i.e. the historical style of bright, extremely light and refreshing German beer - Berliner Weisse, fermented with lactic acid bacteria, with new wave German hops - Comet and Huell Melon and a seasonal Polish accent - aromatic strawberries.",
      },
      {
        id: 26,
        name: "ART+18 HONEY AND COCONUT WHEAT WINE",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717122460381872128/100M_id_11.PNG",
        price: {
          currency: "PLN",
          amount: 2100,
        },
        description:
          "ART # 18, adult, brewed in cooperation with one of the most-valued craft breweries in the world - De Molen. John Brus, founder and main brewer, is famous for brewing excellent strong beers, so when he visited us, we couldn't choose another beer! But we wanted it to be something special that none of us had ever done before - we decided to brew a variation on 'beer wine', and thus Wheat Wine - wheat wine. Strong, full-bodied - but unlike Barley Wine or RIS - bright, with milder malty notes and more expressive yeast. In such a strong but soothing drink, it is possible to emphasize more subdued additions. We decided to divide the beer, half added delicious Polish acacia honey and aromatic Mexican vanilla sticks. The second went to a slightly more characteristic rapeseed honey, and freshly roasted, just before adding to HopGun, coconut chips.",
      },
      {
        id: 27,
        name: "WRCLW PILS",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717122630548848671/100M_id_12.PNG",
        price: {
          currency: "PLN",
          amount: 900,
        },
        description:
          "It is a classic representative of German Pilsner (Pilsa), a bottom fermented beer. The light color and slightly cereal aroma result from the use of almost only Pilsner malt in the batch. This allows you to fully enjoy the soul of this beer, which are noble German varieties of hops, above all those aromatic, characterized by a very pleasant, herbal-spicy scent. Beer for all occasions, with a distinct but fatigue-free bitterness.",
      },
      {
        id: 28,
        name: "WRCLW ROGGENBIER",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717122806009299024/100M_id_13.PNG",
        price: {
          currency: "PLN",
          amount: 1000,
        },
        description:
          "slightly darker and stronger representative of the classic top fermentation beer where more than half of the charge is rye malt. Although this type of malt hinders the filtration process, it gives a pleasant feeling of increased viscosity, enhancing taste sensations, and there are quite a lot of them. Caramel and Munich malts give a distinct fullness, enhanced by banana and clove notes produced during fermentation by specially selected yeast strains",
      },
      {
        id: 29,
        name: "WRCLW RYE RIS",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717122943854968922/100M_id_14.PNG",
        price: {
          currency: "PLN",
          amount: 1800,
        },
        description:
          "This type of beer is best enjoyed with glass accumulating aromas, such as sniffter or sensoric. It is necessary to drink them at a slightly elevated temperature so as to feel the entire palette of flavors and aromas. An interesting idea is to start tasting at a temperature of 10-120C and gradually heat the glass in your hands to reach 16-18 degrees. In the course of this, you can assess how the aromas change - we often talk about the fact that beer 'opens', i.e. it shows more and more other aromas that only become more intense at a higher temperature.",
      },
      {
        id: 30,
        name: "SALAMANDER OATMEAL CHOCOLATE MILK STOUT NITRO",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717123071684903033/100M_id_15.PNG",
        price: {
          currency: "PLN",
          amount: 1000,
        },
        description:
          "Sweet stout, often referred to as 'Cream stout' is opaque black. The malty notes of chocolate, caramel and coffee are dominant here and also appear in taste.",
      },
    ],
  },
  {
    itemId: 3,
    name: "AleBrowar",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456308971208744/hopheads.png",
    beers: [
      {
        id: 31,
        name: "AMBER BOY",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717123199568969765/ale_id_1.PNG",
        price: {
          currency: "PLN",
          amount: 1000,
        },
        description:
          "A light, amber beer in which caramel flavor notes harmonize with expressive citrus bitterness.",
      },
      {
        id: 32,
        name: "BLACK HOPE",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717124359332036659/ale_id_2.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "Black as asphalt, strong beer with strong but noble bitterness. A perfect marriage of the dark malt taste and hop aroma. Aromas: grapefruit, tropical fruit, chocolate.",
      },
      {
        id: 33,
        name: "CHILL GURU",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717126472971583649/ale_id_3.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "King of Chill. Excellent beer with clearly fruity aromas from American hops.",
      },
      {
        id: 34,
        name: "CRAZY MIKE",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717126663346978876/ale_id_4.PNG",
        price: {
          currency: "PLN",
          amount: 1300,
        },
        description:
          "A powerful beer in which the solid malt foundation has been balanced by strong bitterness. The aroma is given by a mixture of the five most interesting varieties of new-wave hops. Aromas: resin, tropical fruits, citruses.",
      },
      {
        id: 35,
        name: "EASY PALE ALE DDH COMET",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717126797262848050/ale_id_5.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "Velvety texture, delicate bitterness and a powerful aroma of citrus and tropical fruit obtained through the use of American hop varieties.",
      },
      {
        id: 36,
        name: "DDH DIPA CENTENNIAL + AMARILLO",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717127360629047357/ale_id_6.PNG",
        price: {
          currency: "PLN",
          amount: 1500,
        },
        description:
          "Velvety structure, relatively low bitterness and a POWERFUL aroma obtained thanks to double cold hopping.",
      },
      {
        id: 37,
        name: "HERR AXOLOTL WITH RASPBERRIES",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717128002613542912/ale_id_7.PNG",
        price: {
          currency: "PLN",
          amount: 1100,
        },
        description:
          "The fruit of AleBrowar's collaboration with Berlin's Himburgs Braukunstkeller. Berliner Weisse, a white sour beer with a low alcohol content, made from barley and wheat malt, brewed with raspberries in this edition. Very fruity aromas with a yogurt note, sour and round on the palate.",
      },
      {
        id: 38,
        name: "ROWING JACK",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717128162252947536/ale_id_8.PNG",
        price: {
          currency: "PLN",
          amount: 900,
        },
        description:
          "A light beer with a definite, noble bitterness from carefully selected Pacific hop varieties. Aroma: grapefruit, mango, pine.",
      },
      {
        id: 39,
        name: "ORTODOX PALE ALE",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717128296646705292/ale_id_9.PNG",
        price: {
          currency: "PLN",
          amount: 800,
        },
        description:
          "Light, everyday and undemanding island-style beer. The character is given by English hops with a herbal-floral aroma. Aromas: herbal, floral, fruity",
      },
      {
        id: 40,
        name: "SWEET COW",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717129072261726309/ale_id_10.PNG",
        price: {
          currency: "PLN",
          amount: 800,
        },
        description:
          "A very delicate, dark top-fermented beer, which is extraordinarily velvety and mild due to the addition of lactose, milk sugar.",
      },
      {
        id: 41,
        name: "SON OF THE SON",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717128799061540884/ale_id_11.PNG",
        price: {
          currency: "PLN",
          amount: 1400,
        },
        description:
          "The effect of cooperation between Polish AleBrowar and Swedish Poppels Bryggeri, as the creators assure, the effect of this cooperation is balanced, like Scandinavian hygge, juicy like the first DDH, classic and uncompromisingly good.",
      },
      {
        id: 42,
        name: "THIRD PART",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717129239706468413/ale_id_12.PNG",
        price: {
          currency: "PLN",
          amount: 900,
        },
        description:
          "In rugby, it's time to fight and celebrate together. What is ideal for beer brewed with New Zealand hops with a tropical fruit aroma and taste.",
      },
      {
        id: 43,
        name: "HULA HOP",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717129378739519528/ale_id_13.PNG",
        price: {
          currency: "PLN",
          amount: 900,
        },
        description:
          "An unusual combination of the Belgian witbier and the American IPA. In this light, wheat beer, we've emphasized the balance between the delicacy given by coriander and orange peel, and intensive hopping. Aroma: citrus, coriander, pineapple.",
      },
      {
        id: 44,
        name: "IMPERIAL HERR AXOLOTL Z NEKTARYNKĄ",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717130181579505704/ale_id_14.PNG",
        price: {
          currency: "PLN",
          amount: 2100,
        },
        description:
          "Made from barley and wheat malt, in this edition with the addition of nectarine",
      },
      {
        id: 45,
        name: "SHAKE THE WORLD",
        url:
          "https://cdn.discordapp.com/attachments/707186726896140319/717130314819829872/ale_id_15.PNG",
        price: {
          currency: "PLN",
          amount: 1000,
        },
        description:
          "A light beer in pale style but brewed with the addition of lactose and vanilla. Our idea was to create a beer equivalent of a milk shake. The beer is smooth and vanilla, the milk notes are derived from lactose and the whole is underlined by Australian Cascade hops.",
      },
    ],
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
