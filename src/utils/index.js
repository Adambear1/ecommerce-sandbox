export const numberToUSD = (x) => {
  return x.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const promotionArr = [true, false, false, false, false];
export const priceArr = [199, 250, 300, 450, 500, 650];
export const countryArr = [
  "Lebanon",
  "Uruguay",
  "Mexico",
  "Columbia",
  "Madagascar",
  "Fiji",
];
export const durationArr = ["3 Days", "1 Week", "10 Days", "1 Month"];
export const groupArr = ["Solo Travel", "Pair Travel", "Small Group Travel"];
export const descriptions = [
  {
    Columbia: [
      'Colombia is nicknamed the "gateway to South America" because it sits in the northwestern part of the continent where South America connects with Central and North America. It is the fifth largest country in Latin America and home to the worlds second largest population of Spanish-speaking people.',
      "Colombia is a land of extremes. Through its center run the towering, snow-covered volcanoes and mountains of the Andes. Tropical beaches line the north and west. And there are deserts in the north and vast grasslands, called Los Llanos, in the east.",
      "Dense forests fill Colombias Amazon Basin, which takes up nearly the countrys entire southern half. In northwest Colombia, a warm, wet, jungle-filled area called the Chocó reaches across the Panama border.",
      "Colombias people are as varied as its landscape. Most citizens are descended from three ethnic groups: Indians, African people brought to Colombia to work as slaves, and European settlers. This rich cultural mix makes the countrys foods, music, dance, and art diverse and unique.",
    ],
    Mexico: [
      "Mexico is a land of extremes, with high mountains and deep canyons in the center of the country, sweeping deserts in the north, and dense rain forests in the south and east.",
      "Mountains cover much of Mexico. Between the Sierra Madre Oriental mountain range in the east and the Sierra Madre Occidental in the west lie small mountain ranges on the Central Plateau. These regions are rich with valuable metals like silver and copper.",
      "The stretch of land called the Yucatán Peninsula juts into the Gulf of Mexico from Mexicos southeastern tip. It was once the home of the Maya civilization, an ancient culture whose amazing buildings can still be seen today.",
      "Mexico is the product of a rich Native American heritage, three centuries of Spanish rule, and a shared border with the worlds richest country, the United States. Today, many Mexicans are mestizos, which means they have a mix of Native American and Spanish blood.",
      "Throughout its history, Mexico has been home to great artists. The Maya and other Native Americans made impressive murals, sculptures, and jewelry. Modern Mexican artists include great painters, photographers, sculptors, and muralists.",
      "Mexicans take sports seriously. In ancient times, losers of a ritual ball game were once put to death. In some dangerous sports, like bullfighting and rodeo (which was invented in Mexico), competitors still put their lives on the line.",
    ],
    Lebanon: [
      "Paris of the East? Where does that come from? Well, its a paeon of praise that has occasionally been applied to Lebanon - and Beirut in particular - over the last 60 or so years. In particular, it applies to the gilded pre-war Sixties in the country, when its capital was viewed as an alternative to the Cote dAzur by the jet-set crowd.",
      "Lebanon is a small country located on the eastern shores of the Mediterranean Sea. Specifically, it is one of the world’s smallest sovereign states. Lebanon’s capital is Beirut. This might be one of the famous interesting facts about Lebanon. The country is an amazing nation in the Middle East. Moreover, it is a melting pot of cultures that shaped its history and traditions for a span of thousands of years. The current population of Lebanon is 6,822,054 based on Worldometers elaboration of the latest United Nations data. Moreover, the total land area is 10,452 km² (4,035.54 sq. miles).",
    ],
    Uruguay: [
      "Uruguay tends to fly under the radar. As a politically stable country of just 3.5 million people nothing much happens that grabs international headlines, or steals the spotlight from its larger and more famous neighbors, Argentina and Brazil. While it’s true that “no news is good news,” not many people know who we are!",
      "Outside the capital city of Montevideo, important industries are tourism and, as evidenced by our abundant bovine population, agriculture. Ranches, interestingly, are primarily small scale and run in the old-fashioned way. Gaucho (cowboy) culture is still very much alive and dear in the heart of Uruguayans. Agro-tourism is popular, drawing those who want to observe traditional farm life and explore the countryside on horseback. Uruguay’s beef industry has a sophisticated supply chain tracking system and its products are certified as natural and grass fed, highly prized in the world market.",
    ],
    Madagascar: [
      "Where is Madagascar? Located in the Indian Ocean, Madagascar is located 250 miles (400 km) off the east coast of mainland Africa. It is separated from the African coast by the Mozambique Channel. Madagascar split from India 88 million years ago following its initial separation from Gondwana the supercontinent (which included Africa, South America, Antarctica, and Australia) approximately 165 million years ago. That separation has resulted in fauna and flora found nowhere else on the planet.",
      "La Grand Île ranks fourth on the world’s biggest islands – after Greenland, Papua New Guinea and Borneo. Plunked in the Indian Ocean, it measures over 1,600km on its longest axis and 570km along its widest points. It coastline stretches over 5,000km of wide beaches and coral reefs. With such a massive land area, Madagascar features very diverse and distinctive terrains and habitats: ranging from volcanic mountain chains (highest peak at 2,876m), central highlands to the humid rainforests in the east, dry sandstone cliffs in the west and bizarre karst forests in the north.",
      "Having been isolated from the African continent 165 millions years ago, Madagascar’s bizarre wildlife have been evolving ever since. Today, there are over 70 species and sub-species of lemurs in Madagascar, while 16 have been wiped out since human’s arrival. Here is a full list of lemur species. The newest species of lemurs was discovered as recent as 1985. The most popular and well-known lemur species is the ring-tailed lemur. If you’ve seen a photo of a lemur, it is most probably the ring-tailed lemur. It is considered to be one of the most intelligent of them as well. Other lemur species that I love are the Verraux sifaka (that can dance sideways) and the tiny grey mouse lemur (smallest primate in Madagascar). ",
    ],
    Fiji: [
      "The Fiji Islands are arranged in a horseshoe configuration, with Viti Levu and adjacent islands on the west, Vanua Levu and Taveuni in the north, and the Lau Group on the east.  Together the Fiji Islands are scattered over 1,290,000 square kilometers of the South Pacific Ocean. If every single island was counted, the isles of the Fiji archipelago would number in the thousands. But a mere 322 are judged large enough for human habitation.",
      "The ambushed of English missionary Reverend Thomas Baker was the last cannibal act known in Fiji (1834-1907). The lack of animal meat could be one of the reasons for cannibalism to spread around the Fijian islands. But it is said that locals didn’t just eat human beings out of necessity. They actually enjoyed the taste, which they found similar to pork meat. History books are filled with gruesome stories from early missionaries. During our visit to Levuka, we met Bubu Kara (grandma Kara), said to be the last descendant of the cannibal tribe in Fiji.",
      "Since the beginning of time, the Fijian culture has always emphasized on strong family values and Fijians have maintained strong family ties even for those who have moved abroad. You hardly see any individuals living in an isolated house in the rural areas. They usually live together in a traditional bure (thatched hut made of bamboo walls and coconut leaf roof) as a family, with extended family members living around one another. Whatever crops they grow are divided with the entire extended family. Even in today’s era, those who have a job provide for the rest of the family.",
    ],
  },
];
