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
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    continent: 'Asia',
    tagline: 'Where Sports Meet Perfection',
    description:
      'Tokyo is a sports fan\'s dream where precision and passion collide in spectacular fashion. From the electric atmosphere of a J-League match to the ancient rituals of sumo at Ryogoku Kokugikan, and the crack of the bat at legendary Tokyo Dome for NPB baseball, the city offers a sporting tapestry unlike anywhere else. The legacy of the 2020 Olympics has left world-class venues scattered across the city, while Japanese fan culture — with its organized chants, choreographed displays, and impeccable respect — redefines what it means to support your team.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$',
    topSports: ['Baseball', 'Football', 'Sumo', 'Basketball'],
    topVenues: ['tokyo-dome', 'national-stadium-tokyo', 'nippon-budokan'],
    hostelsCount: 3,
    avgPrice: 28,
    highlights: [
      'Tokyo Dome — the Big Egg — home of the Yomiuri Giants and massive concerts',
      'Sumo wrestling tournaments at Ryogoku Kokugikan three times a year',
      'J-League matches with choreographed fan sections and thunderous drums',
      'Incredible transit system that gets you to any venue in minutes',
      'The 2020 Olympics legacy venues including the stunning National Stadium',
    ],
    transitTips:
      'Tokyo\'s rail system is the best in the world. Get a Suica or Pasmo IC card for seamless travel. Tokyo Dome is at Suidobashi Station. The National Stadium is near Sendagaya Station. Trains stop around midnight but resume before 5am. The Yamanote Line loops around the city and hits most major areas.',
    safetyRating: 5,
    fanCulture:
      'Japanese fan culture is a masterclass in organized passion. Baseball fans have unique chant songs for every batter, performed in perfect unison with trumpets and drums. J-League supporters bring European-style ultra energy but with distinctly Japanese discipline — no away bans are needed because fans police themselves. After every match, fans clean up their section of the stadium. The respect between rival supporters is legendary, and visiting fans are warmly welcomed. It is loud, joyful, and impeccably organized.',
  },
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    countryCode: 'FR',
    continent: 'Europe',
    tagline: 'City of Lights, City of Champions',
    description:
      'Paris is where sporting grandeur meets cultural elegance. PSG has transformed the Parc des Princes into one of Europe\'s most intimidating fortresses, while the Stade de France in Saint-Denis hosts Les Bleus, Rugby Six Nations showdowns, and the biggest concerts on the continent. Roland Garros delivers two weeks of world-class tennis every spring, and the Tour de France\'s iconic Champs-Elysees finish turns the city into a cycling cathedral each July.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    fanRating: 4,
    budgetLevel: '$$$',
    topSports: ['Football', 'Rugby', 'Tennis', 'Cycling'],
    topVenues: ['parc-des-princes', 'stade-de-france', 'accor-arena-paris'],
    hostelsCount: 3,
    avgPrice: 35,
    highlights: [
      'PSG at Parc des Princes — one of Europe\'s loudest grounds on Champions League nights',
      'Stade de France for Les Bleus internationals and Six Nations rugby',
      'Roland Garros — the crown jewel of clay-court tennis every May-June',
      'Tour de France finish on the Champs-Elysees in July',
      'Accor Arena for basketball, handball, and world-tour concerts',
    ],
    transitTips:
      'The Metro is extensive and affordable — buy a carnet of 10 tickets or use Navigo Easy. Parc des Princes is at Porte de Saint-Cloud (Line 9). Stade de France is at Saint-Denis station (RER B/D). Roland Garros is near Porte d\'Auteuil (Line 10). Paris is very walkable in the center and Velib bike-share is everywhere.',
    safetyRating: 4,
    fanCulture:
      'Parisian fan culture has exploded in intensity since PSG\'s rise to European elite status. The Virage Auteuil at Parc des Princes produces a wall of noise with flares, banners, and coordinated chanting that rivals any stadium in Europe. French rugby fans bring a festive, family-friendly energy to the Stade de France, often fueled by wine and cheese picnics before kickoff. Roland Garros crowds are knowledgeable and passionate, with French players receiving thunderous home support. The city\'s cafe culture means post-match analysis over espresso is a way of life.',
  },
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    countryCode: 'NL',
    continent: 'Europe',
    tagline: 'Total Football, Total Experience',
    description:
      'Amsterdam is the spiritual home of Total Football, where Ajax\'s philosophy of beautiful, attacking play was born and continues to thrive at the Johan Cruyff Arena. The city\'s compact size and legendary canal culture make it one of Europe\'s most walkable and bike-friendly fan destinations. Beyond football, the Ziggo Dome and AFAS Live host world-class concerts and events, while the Dutch passion for cycling and ice skating adds unique sporting flavors you won\'t find anywhere else.',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5571?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$',
    topSports: ['Football', 'Cycling', 'Ice Skating'],
    topVenues: ['johan-cruyff-arena', 'ziggo-dome', 'afas-live-amsterdam'],
    hostelsCount: 2,
    avgPrice: 32,
    highlights: [
      'Ajax at the Johan Cruyff Arena — the cathedral of Total Football',
      'The F-Side and VAK410 supporter sections creating a sea of red and white',
      'Ziggo Dome for arena concerts and major entertainment events',
      'Canal-side pubs packed with fans before and after matchday',
      'Cycling culture that lets you bike between every venue in the city',
    ],
    transitTips:
      'Amsterdam is a cycling city — rent a bike and you can reach anywhere in 20 minutes. The Johan Cruyff Arena is at Bijlmer ArenA station (Metro 54). Trams cover the city center efficiently. Buy an OV-chipkaart for all public transport. Walking along the canals is the best way to soak in the pre-match atmosphere.',
    safetyRating: 4,
    fanCulture:
      'Amsterdam\'s fan culture revolves around Ajax, one of the most storied clubs in European football. The F-Side ultras are among the most passionate in the Netherlands, known for spectacular choreographed displays and relentless singing. The Three Little Birds tradition — where the entire stadium sings Bob Marley in unison — is one of football\'s most iconic moments. Dutch fans are famously welcoming to visiting supporters, and the pub culture around Leidseplein and Rembrandtplein makes pre-match socializing a highlight in itself. Orange fever during international tournaments transforms the entire city.',
  },
  {
    slug: 'madrid',
    name: 'Madrid',
    country: 'Spain',
    countryCode: 'ES',
    continent: 'Europe',
    tagline: 'Capital of Champions',
    description:
      'Madrid is the undisputed capital of champions, home to Real Madrid — the most decorated club in European football history — and Atletico Madrid, whose Metropolitano fortress breeds one of the continent\'s fiercest fan cultures. The newly renovated Santiago Bernabeu is a futuristic sporting cathedral with a retractable pitch, while the WiZink Center delivers top-tier basketball and concerts year-round. With tapas bars on every corner, late-night dining culture, and sunshine nearly every day, Madrid is a fan city that never disappoints.',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$',
    topSports: ['Football', 'Basketball', 'Tennis'],
    topVenues: ['santiago-bernabeu', 'metropolitano', 'wizink-center'],
    hostelsCount: 3,
    avgPrice: 25,
    highlights: [
      'Real Madrid at the newly renovated Santiago Bernabeu — a futuristic football temple',
      'Atletico Madrid at Metropolitano — raw, intense, and unforgettable atmosphere',
      'The Madrid Derby — one of the fiercest rivalries in European football',
      'WiZink Center for Real Madrid basketball and world-tour concerts',
      'Late-night tapas crawls through La Latina after evening kickoffs',
    ],
    transitTips:
      'Madrid Metro is excellent and affordable. Santiago Bernabeu station (Line 10) drops you right at the stadium. Metropolitano is at Estadio Metropolitano station (Line 7). WiZink Center is at Goya (Lines 2/4). A 10-trip Metrobus ticket is great value. The city center is very walkable and nightlife runs past 3am.',
    safetyRating: 4,
    fanCulture:
      'Madrid\'s fan culture is split between two passionate tribes. Real Madrid fans — the Madridistas — carry the weight of 15 Champions League titles with regal pride, expecting nothing less than excellence. The Bernabeu\'s Fondo Sur is where the ultras create the noise. Atletico fans — the Colchoneros — are the working-class heart of the city, with the Frente Atletico bringing ferocious energy to every match. The Madrid derby is electric and all-consuming. Tapas and canas (small beers) before the match are sacred ritual, and debates between Madridistas and Colchoneros fuel every bar conversation.',
  },
  {
    slug: 'milan',
    name: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    continent: 'Europe',
    tagline: 'Where Style Meets the Beautiful Game',
    description:
      'Milan is where Italian style meets the beautiful game in a city that lives and breathes calcio. The legendary San Siro — shared by AC Milan and Inter Milan — is one of football\'s most iconic cathedrals, with its towering spiral ramps and deafening Curva atmospheres. The Derby della Madonnina between the two giants is among the most dramatic spectacles in world sport. Beyond football, the Mediolanum Forum hosts top basketball and concerts, while the city\'s fashion-forward culture and aperitivo tradition make every matchday a stylish affair.',
    image: 'https://images.unsplash.com/photo-1520440229-6469d149e7c0?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$$',
    topSports: ['Football', 'Basketball', 'Cycling'],
    topVenues: ['san-siro', 'mediolanum-forum', 'teatro-la-scala'],
    hostelsCount: 2,
    avgPrice: 28,
    highlights: [
      'San Siro — the legendary shared home of AC Milan and Inter Milan',
      'Derby della Madonnina — the most stylish and intense derby in Italy',
      'The Curva Sud (Milan) and Curva Nord (Inter) ultra sections in full voice',
      'Mediolanum Forum for basketball and international concert tours',
      'Navigli district aperitivo culture for pre-match rituals along the canals',
    ],
    transitTips:
      'Milan Metro is clean and efficient. San Siro is at San Siro Stadio station (Line 5/M5 Lilla). Mediolanum Forum is in Assago, reachable via M2 Green line to Assago Milanofiori Forum. Buy an ATM day pass for unlimited travel. The city center is walkable and the tram network is charming. Pre-match, the area around San Siro fills with food trucks and fan stalls.',
    safetyRating: 4,
    fanCulture:
      'Milanese fan culture is steeped in history, drama, and fierce loyalty. AC Milan\'s Curva Sud and Inter\'s Curva Nord are two of the most iconic ultra sections in world football, producing massive choreographies, pyro displays, and non-stop chanting. The Derby della Madonnina splits families and friendships — you are born Rossoneri or Nerazzurri, and you never switch. Italian tifo culture was arguably born here, with elaborate banners and coordinated displays that turn the San Siro into a living theater. Pre-match espresso and post-match debate at the local bar are essential parts of the ritual.',
  },
  {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    countryCode: 'BR',
    continent: 'South America',
    tagline: 'Jogo Bonito Lives Here',
    description:
      'Rio de Janeiro is where jogo bonito — the beautiful game — was born and where football and life merge into one glorious celebration. The Maracana is the spiritual home of Brazilian football, a colosseum that has hosted World Cup finals and witnessed Pele, Zico, and Ronaldo at their peak. Flamengo\'s 40 million fans pack the stadium in a sea of red and black, while Vasco, Botafogo, and Fluminense add layers to the city\'s rich footballing tapestry. When Carnival meets football season, Rio becomes the most exhilarating city on Earth.',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
    fanRating: 5,
    budgetLevel: '$',
    topSports: ['Football', 'Volleyball', 'MMA', 'Surfing'],
    topVenues: ['maracana', 'engenhao', 'jeunesse-arena'],
    hostelsCount: 3,
    avgPrice: 16,
    highlights: [
      'Maracana — the temple of world football and host of two World Cup finals',
      'Flamengo matchday — 60,000 fans in red and black creating samba-fueled pandemonium',
      'Fla-Flu and the Classico dos Milhoes — Rio\'s legendary derbies',
      'Beach football and volleyball culture on Copacabana and Ipanema',
      'Post-match street parties in Lapa with live samba and cold chopp beer',
    ],
    transitTips:
      'Rio Metro is modern and covers key areas. Maracana station (Line 2) drops you right at the stadium. Engenhao (Nilton Santos) is near Engenhao station. Buses are extensive but can be confusing — use the Moovit app. Uber is widely used and affordable. Avoid driving on matchdays. Be aware of your surroundings in less touristy areas, especially at night.',
    safetyRating: 3,
    fanCulture:
      'Carioca fan culture is pure emotion distilled into 90 minutes of ecstasy and agony. Flamengo\'s torcida is the largest in Brazil, and when the Maracana is full of Mengao fans, the samba drums, flares, and singing create an atmosphere that borders on spiritual. Organized torcidas bring banners, fireworks, and choreographed displays that turn the stands into a moving carnival. Football in Rio is inseparable from music — chants borrow from samba and funk rhythms. Rival fans share the same beaches and bars but the banter is relentless. This is where football is not just watched but felt in the soul.',
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    countryCode: 'CA',
    continent: 'North America',
    tagline: 'The North\'s Greatest Sports City',
    description:
      'Toronto is Canada\'s undisputed sports capital, a city where hockey is religion, basketball captured a nation, and baseball fills summer nights with magic. Scotiabank Arena — home to the Maple Leafs and Raptors — sits in the heart of downtown and pulses with energy year-round. Rogers Centre\'s retractable roof shelters Blue Jays fans through the season, while BMO Field has turned Toronto FC into a genuine force in MLS. The 2019 Raptors championship run united the entire country and proved Toronto belongs among the world\'s great sports cities.',
    image: 'https://images.unsplash.com/photo-1517090504332-84f44a60c563?w=800&q=80',
    fanRating: 4,
    budgetLevel: '$$$',
    topSports: ['Hockey', 'Basketball', 'Baseball', 'Football'],
    topVenues: ['scotiabank-arena', 'rogers-centre', 'bmo-field-toronto'],
    hostelsCount: 2,
    avgPrice: 38,
    highlights: [
      'Maple Leafs at Scotiabank Arena — hockey\'s most passionate (and long-suffering) fanbase',
      'Raptors games with the energy that powered the 2019 championship run',
      'Blue Jays at Rogers Centre with the retractable roof open on summer nights',
      'Toronto FC at BMO Field with the South End supporters creating MLS\'s best atmosphere',
      'Jurassic Park — the outdoor viewing plaza that became a global phenomenon',
    ],
    transitTips:
      'TTC subway and streetcars cover the city well. Scotiabank Arena and Rogers Centre are both at Union Station. BMO Field is reachable via the 509/510 streetcar to Exhibition. Get a Presto card for all transit. The PATH underground walkway connects Union Station to the arena district in winter. Uber and Lyft are widely available.',
    safetyRating: 5,
    fanCulture:
      'Toronto fan culture is a unique blend of Canadian politeness and fierce, pent-up passion. Maple Leafs fans are among the most devoted in all of sports, filling Scotiabank Arena despite decades without a Stanley Cup — Leafs Nation is a testament to unconditional love. The Raptors\' 2019 championship run created Jurassic Park, where thousands gathered outside the arena to watch on screens in a phenomenon that captivated the world. Blue Jays fans pack Rogers Centre and bring the energy of a hockey crowd to baseball. TFC\'s South End supporters have built a genuine European-style atmosphere at BMO Field with drums, scarves, and songs. Toronto fans are welcoming, diverse, and fiercely proud of their city.',
  },
];
