export interface City {
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  continent: string;
  tagline: string;
  description: string;
  image: string;
  fanRating: number;
  budgetLevel: string;
  topSports: string[];
  topVenues: string[];
  hostelsCount: number;
  avgPrice: number;
  highlights: string[];
  transitTips: string;
  safetyRating: number;
  fanCulture: string;
}

export const cities: City[] = [
  {
    slug: 'london',
    name: 'London',
    country: 'England',
    countryCode: 'GB',
    continent: 'Europe',
    tagline: 'Where Football Was Born',
    description:
      'London is the ultimate destination for football fans, home to over a dozen professional clubs spanning the Premier League and Championship. From the roar of 90,000 at Wembley to the electric atmosphere of a North London derby, the city pulses with sporting passion year-round. Beyond football, world-class cricket at Lord\'s, tennis at Wimbledon, and a thriving live music scene at The O2 and Brixton Academy make London a fan\'s paradise.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$$',
    topSports: ['Football', 'Cricket', 'Rugby', 'Tennis'],
    topVenues: ['wembley-stadium', 'emirates-stadium', 'the-o2-arena'],
    hostelsCount: 3,
    avgPrice: 38,
    highlights: [
      'Premier League match days with pre-game pub culture',
      'Wembley Stadium tours and international fixtures',
      'The O2 Arena for world-class concerts and UFC events',
      'Historic pubs screening every match with passionate locals',
      'Wimbledon Championships in summer',
    ],
    transitTips:
      'The Tube is your best friend. Get an Oyster card or use contactless payment. Most stadiums have dedicated Tube stations. Night Tube runs on Fridays and Saturdays. Black cabs are expensive — use the bus or walk between nearby venues.',
    safetyRating: 4,
    fanCulture:
      'London fan culture is tribal and deeply rooted in local neighborhoods. Each club has its own identity — from the working-class pride of West Ham to the cosmopolitan energy of Arsenal. Pre-match rituals revolve around the pub, with pints flowing hours before kickoff. Away fans are respected but rivalries run deep. Singing and chanting are non-negotiable.',
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    countryCode: 'ES',
    continent: 'Europe',
    tagline: 'Mes Que Un Club, Mes Que Una Ciutat',
    description:
      'Barcelona is where football meets art, where the beautiful game is played the beautiful way. Camp Nou — one of the largest stadiums on Earth — is a cathedral of football that every fan must visit at least once. The city\'s passion extends beyond FC Barcelona to Espanyol, world-class basketball at Palau Blaugrana, and an incredible festival and concert scene. Combine that with beaches, tapas, and Gothic Quarter nightlife for the perfect fan trip.',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$',
    topSports: ['Football', 'Basketball', 'Tennis', 'Motorsport'],
    topVenues: ['camp-nou', 'palau-sant-jordi', 'estadi-olimpic'],
    hostelsCount: 3,
    avgPrice: 28,
    highlights: [
      'FC Barcelona at the legendary Camp Nou',
      'El Clasico — the biggest club match in world football',
      'Primavera Sound and Sonar music festivals',
      'Basketball at Palau Blaugrana with passionate culers',
      'La Rambla fan walks before big European nights',
    ],
    transitTips:
      'Metro is clean, cheap, and covers all major venues. T-Casual card gives you 10 rides. Camp Nou is at Collblanc or Les Corts stations. Walking is great in the city center. Late-night buses (NitBus) run all night on weekends.',
    safetyRating: 4,
    fanCulture:
      'Catalan football culture is inseparable from regional identity. FC Barcelona is more than a club — it represents Catalonia itself. Match days are family affairs with multigenerational crowds. The mosaic tifos are legendary. Fans gather at bars along Carrer de Sants before games. The atmosphere during Champions League nights is spine-tingling.',
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    countryCode: 'DE',
    continent: 'Europe',
    tagline: 'Raw Energy, Unfiltered Fandom',
    description:
      'Berlin brings raw, unfiltered fan energy like nowhere else in Europe. The Olympiastadion hosts Hertha BSC and major international finals, while Union Berlin\'s Alte Forsterei in Kopenick offers one of football\'s most authentic fan experiences. Germany\'s capital also boasts the Mercedes-Benz Arena for basketball, hockey, and massive concerts, plus the legendary Waldbuhne amphitheater. Add in the world\'s best techno scene and you have a city built for fans who never sleep.',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$',
    topSports: ['Football', 'Basketball', 'Ice Hockey', 'Athletics'],
    topVenues: ['olympiastadion-berlin', 'mercedes-benz-arena-berlin', 'waldbuhne'],
    hostelsCount: 2,
    avgPrice: 22,
    highlights: [
      'Union Berlin\'s standing-only Alte Forsterei atmosphere',
      'Olympiastadion — host of the 2006 World Cup Final',
      'DFB-Pokal Final every May at the Olympiastadion',
      'Waldbuhne open-air concerts under the stars',
      'Legendary post-match nightlife in Kreuzberg and Friedrichshain',
    ],
    transitTips:
      'BVG day tickets are great value. U-Bahn and S-Bahn cover the city thoroughly. Olympiastadion has its own S-Bahn station. Rent a bike for exploring between venues. Berlin is very spread out so plan transit time accordingly.',
    safetyRating: 4,
    fanCulture:
      'Berlin\'s fan culture is fiercely democratic and anti-commercial. Union Berlin embodies the 50+1 rule with fans who literally built their own stadium. Hertha BSC brings big-city energy to the Olympiastadion. Standing sections, ultras culture, and fan-owned clubs define the experience. Beer is cheap, atmospheres are loud, and the post-match party never ends.',
  },
  {
    slug: 'new-york-city',
    name: 'New York City',
    country: 'United States',
    countryCode: 'US',
    continent: 'North America',
    tagline: 'The City That Never Stops Competing',
    description:
      'New York City is the sporting capital of North America, home to iconic franchises across every major league. Madison Square Garden — the World\'s Most Famous Arena — hosts the Knicks, Rangers, and the biggest concerts on the planet. Yankee Stadium is a baseball cathedral, and MetLife Stadium brings NFL action with the Giants and Jets. The energy of 8 million people fuels an intensity you won\'t find anywhere else.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$$',
    topSports: ['Basketball', 'Baseball', 'Football', 'Hockey', 'Soccer'],
    topVenues: ['madison-square-garden', 'yankee-stadium', 'barclays-center'],
    hostelsCount: 2,
    avgPrice: 45,
    highlights: [
      'Knicks at Madison Square Garden — the Mecca of Basketball',
      'Yankees at the iconic Yankee Stadium in the Bronx',
      'Nets games at Barclays Center in Brooklyn',
      'World-class concerts at MSG, Barclays, and Radio City',
      'Sports bars in every neighborhood screening every game',
    ],
    transitTips:
      'The subway runs 24/7 and goes everywhere. Get an OMNY card or tap contactless. MSG is right at Penn Station. Yankee Stadium is on the 4/B/D lines. Barclays Center sits atop Atlantic Terminal. Uber and Lyft surge hard after big events — take the train.',
    safetyRating: 4,
    fanCulture:
      'New York fans are loud, opinionated, and unapologetically passionate. Knicks fans at MSG create an atmosphere that rivals any European stadium. Yankees fans bleed pinstripes. The city\'s sports talk radio culture means debates never end. Tailgating happens at MetLife, but in Manhattan it\'s all about the sports bar pre-game. Expect heckling, chanting, and pure intensity.',
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    country: 'United States',
    countryCode: 'US',
    continent: 'North America',
    tagline: 'Where Sports Meet Showbiz',
    description:
      'Los Angeles blends sports and entertainment like nowhere else on Earth. SoFi Stadium is a $5 billion spaceship hosting the Rams, Chargers, and mega concerts. Crypto.com Arena is home to the Lakers dynasty and the Kings. The Dodgers pack 56,000 into their iconic hilltop stadium every summer night. Add in the Hollywood Bowl, Coachella within driving distance, and year-round sunshine, and LA is a fan destination that delivers spectacle at every turn.',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80',
    fanRating: 4,
    budgetLevel: '$$$',
    topSports: ['Basketball', 'Baseball', 'American Football', 'Soccer', 'Hockey'],
    topVenues: ['sofi-stadium', 'crypto-com-arena', 'hollywood-bowl'],
    hostelsCount: 2,
    avgPrice: 40,
    highlights: [
      'Lakers at Crypto.com Arena — basketball royalty',
      'Dodgers games with sunset views over Chavez Ravine',
      'SoFi Stadium — the most expensive venue ever built',
      'Hollywood Bowl summer concert series under the stars',
      'LAFC at BMO Stadium for MLS atmosphere',
    ],
    transitTips:
      'LA is a car city but Metro is expanding. The E Line goes to SoFi Stadium area. Crypto.com Arena is walkable from 7th St/Metro Center. Dodger Stadium has a shuttle from Union Station on game days. Rideshare is common but traffic is brutal — leave early for everything.',
    safetyRating: 3,
    fanCulture:
      'LA fan culture gets unfairly criticized but the passion is real. Lakers fans are among the most dedicated in the NBA. Dodger Stadium on a Friday night is pure magic. The city\'s diversity creates a unique melting pot of fan traditions. Celebrity sightings at games are common. Tailgating culture is strong at SoFi. The late-arriving, early-leaving stereotype is outdated — true fans show up.',
  },
  {
    slug: 'mexico-city',
    name: 'Mexico City',
    country: 'Mexico',
    countryCode: 'MX',
    continent: 'North America',
    tagline: 'Passion at 2,240 Meters',
    description:
      'Mexico City delivers some of the most intense fan experiences on the planet. Estadio Azteca — the only stadium to host two World Cup finals — holds over 87,000 roaring fans. Club America and Cruz Azul derbies shake the earth. Lucha libre at Arena Mexico is a must-see spectacle. The city\'s concert scene is booming with Foro Sol hosting global tours. All of this at altitude, with incredible street food, and at prices that let you experience more for less.',
    image: 'https://images.unsplash.com/photo-1518659526054-190340b32735?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$',
    topSports: ['Football', 'Boxing', 'Lucha Libre', 'Baseball'],
    topVenues: ['estadio-azteca', 'foro-sol', 'palacio-de-los-deportes'],
    hostelsCount: 2,
    avgPrice: 15,
    highlights: [
      'Estadio Azteca — sacred ground of world football',
      'Club America vs Cruz Azul — the Clasico Joven',
      'Lucha libre at Arena Mexico every Tuesday and Friday',
      'Foro Sol concerts with 65,000 passionate fans',
      'Street food and mezcal-fueled post-match celebrations',
    ],
    transitTips:
      'Mexico City Metro is one of the cheapest in the world. Estadio Azteca has its own Metro station (Tasquena line + light rail). Metrobus lines are fast and reliable. Uber is widely used and affordable. Avoid driving — traffic is legendary. The city is at high altitude so pace yourself.',
    safetyRating: 3,
    fanCulture:
      'Mexican fan culture is among the most passionate and colorful in the world. Porras (organized fan groups) bring drums, flags, and non-stop chanting that creates a wall of sound. The Azteca\'s \"Mexican Wave\" was popularized during the 1986 World Cup. Families attend together and the atmosphere is festive rather than threatening. Green jerseys flood the streets before El Tri matches. Post-match street parties are legendary.',
  },
  {
    slug: 'buenos-aires',
    name: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    continent: 'South America',
    tagline: 'The Most Passionate Fans on Earth',
    description:
      'Buenos Aires is, without debate, the most passionate football city on the planet. With over 20 professional clubs in the greater metro area, the city breathes football every day of the week. La Bombonera — Boca Juniors\' fortress — creates an atmosphere so intense the stadium literally shakes. River Plate\'s Monumental holds 84,000. The Superclasico between them is the biggest rivalry in world sport. Beyond football, Buenos Aires offers incredible tango, steak, and nightlife that runs until sunrise.',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$',
    topSports: ['Football', 'Rugby', 'Polo', 'Basketball'],
    topVenues: ['la-bombonera', 'estadio-monumental', 'movistar-arena-ba'],
    hostelsCount: 3,
    avgPrice: 14,
    highlights: [
      'Boca Juniors at La Bombonera — the most intense atmosphere in football',
      'The Superclasico — Boca vs River, the biggest derby on Earth',
      'River Plate at the Monumental with 84,000 fans',
      'Asado and Malbec pre-match rituals',
      'San Lorenzo, Racing, and Independiente derbies',
    ],
    transitTips:
      'Subte (metro) is cheap and covers the city center. La Bombonera is best reached by bus or taxi to La Boca. The Monumental is near Nunez station on Line D. SUBE card is essential for all public transport. Taxis are affordable — use radio taxis or Uber for safety. Walking in La Boca outside match days requires caution.',
    safetyRating: 3,
    fanCulture:
      'Argentine fan culture is the gold standard of global football passion. Barras bravas (ultras) control the terraces with massive flags, confetti storms, and non-stop singing for 90 minutes. The bounce at La Bombonera is a religious experience. Away fans are often banned from derbies due to intensity. Every neighborhood has a club and every person has a team. Football is not a hobby here — it is life itself.',
  },
];
