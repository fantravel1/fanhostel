export interface Venue {
  slug: string;
  name: string;
  citySlug: string;
  city: string;
  type: 'stadium' | 'arena' | 'concert-hall' | 'festival-grounds';
  capacity: number;
  sport?: string;
  teams: string[];
  image: string;
  description: string;
  nearbyHostels: number;
  walkingDistance: string;
  transitInfo: string;
  fanTips: string[];
  events: string[];
}

export const venues: Venue[] = [
  // ===== LONDON =====
  {
    slug: 'wembley-stadium',
    name: 'Wembley Stadium',
    citySlug: 'london',
    city: 'London',
    type: 'stadium',
    capacity: 90000,
    sport: 'Football',
    teams: ['England National Team', 'Tottenham Hotspur (temporary)'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'The home of English football and the most iconic stadium in the country. Wembley hosts England internationals, FA Cup Finals, League Cup Finals, NFL London games, and the biggest concerts in the world. The 90,000-seat venue with its famous arch is a pilgrimage site for every football fan.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Wembley Park station',
    transitInfo:
      'Wembley Park station (Metropolitan & Jubilee lines) is a 10-minute walk. Wembley Stadium station (Chiltern Railways) is even closer. Special event buses run on match days.',
    fanTips: [
      'Arrive at least 90 minutes early — the Wembley Way walk is part of the experience',
      'Green Man pub and Torch pub on Wembley Way are prime pre-match spots',
      'Sit behind the goal in the lower tier for the best atmosphere',
      'Book hostels in Wembley or along the Jubilee line for quick access',
    ],
    events: [
      'england-vs-germany-nations-league',
      'fa-cup-final-2026',
      'coldplay-wembley-2026',
    ],
  },
  {
    slug: 'emirates-stadium',
    name: 'Emirates Stadium',
    citySlug: 'london',
    city: 'London',
    type: 'stadium',
    capacity: 60704,
    sport: 'Football',
    teams: ['Arsenal FC'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'Home of Arsenal FC since 2006, the Emirates Stadium in Holloway is one of the Premier League\'s most impressive grounds. The sleek, modern design holds over 60,000 fans who create a formidable atmosphere, especially during North London derbies and Champions League nights under the floodlights.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Arsenal station',
    transitInfo:
      'Arsenal station (Piccadilly line) is right next to the ground. Holloway Road and Finsbury Park stations are also close. Walking from Highbury & Islington takes about 15 minutes.',
    fanTips: [
      'The Tollington pub on Hornsey Road is the classic Arsenal pre-match pub',
      'Clock End lower tier has the most vocal home fans',
      'Stadium tours run on non-match days and include the dressing rooms',
      'Piebury Corner near the ground serves legendary football pies',
    ],
    events: [
      'arsenal-vs-tottenham-north-london-derby',
      'arsenal-vs-barcelona-ucl',
    ],
  },
  {
    slug: 'the-o2-arena',
    name: 'The O2 Arena',
    citySlug: 'london',
    city: 'London',
    type: 'arena',
    capacity: 20000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'The O2 Arena on the Greenwich Peninsula is London\'s premier indoor entertainment venue, hosting everything from NBA London games and UFC Fight Nights to massive concert tours by the world\'s biggest artists. The distinctive dome shape is recognizable from anywhere along the Thames.',
    nearbyHostels: 1,
    walkingDistance: '2 min from North Greenwich station',
    transitInfo:
      'North Greenwich station (Jubilee line) is directly connected. Thames Clippers river bus also stops here. Plenty of bus routes serve the area.',
    fanTips: [
      'Arrive early to explore the Entertainment District restaurants and bars',
      'Floor seats are incredible for concerts but the upper tiers have great sightlines too',
      'Up at The O2 climbing experience is a must-do on non-event days',
      'Book accommodation in Greenwich or along the Jubilee line',
    ],
    events: [
      'ufc-london-2026',
      'drake-o2-london-2026',
    ],
  },

  // ===== BARCELONA =====
  {
    slug: 'camp-nou',
    name: 'Camp Nou',
    citySlug: 'barcelona',
    city: 'Barcelona',
    type: 'stadium',
    capacity: 99354,
    sport: 'Football',
    teams: ['FC Barcelona'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Camp Nou is the largest stadium in Europe and the spiritual home of FC Barcelona. The sheer scale of nearly 100,000 fans chanting "Barca, Barca, Baaarca" is something every football fan must experience. The ongoing Espai Barca renovation project will make it even more spectacular. Champions League nights here are genuinely life-changing.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Les Corts metro',
    transitInfo:
      'Metro stations Collblanc (L5) and Les Corts (L3) are both within walking distance. Match-day bus services run from Placa Catalunya. The tramway also stops nearby.',
    fanTips: [
      'Book tickets well in advance — Camp Nou sells out for big matches',
      'Gol Nord (North Goal) is where the most vocal fans sit',
      'The Camp Nou Experience museum and tour is world-class',
      'Carrer de Sants has great bars for pre-match atmosphere',
      'Bring a cushion — the concrete seats are unforgiving',
    ],
    events: [
      'barcelona-vs-real-madrid-el-clasico',
      'barcelona-vs-psg-ucl',
    ],
  },
  {
    slug: 'palau-sant-jordi',
    name: 'Palau Sant Jordi',
    citySlug: 'barcelona',
    city: 'Barcelona',
    type: 'arena',
    capacity: 18000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    description:
      'Built for the 1992 Olympics, Palau Sant Jordi sits atop Montjuic hill and is Barcelona\'s premier indoor arena. It hosts major concerts, basketball events, and sporting spectacles. The Arata Isozaki-designed venue combines stunning architecture with incredible acoustics, making every event feel monumental.',
    nearbyHostels: 2,
    walkingDistance: '20 min walk uphill from Espanya metro',
    transitInfo:
      'Espanya metro station (L1, L3) is at the base of Montjuic. Shuttle buses run for major events. The walk up involves stairs but the views are worth it.',
    fanTips: [
      'Wear comfortable shoes — it\'s an uphill walk from the metro',
      'The venue plaza has food trucks during major events',
      'Combine a concert with a visit to the Magic Fountain show',
      'Poble Sec neighborhood below Montjuic has great pre-show restaurants',
    ],
    events: [
      'ed-sheeran-barcelona-2026',
    ],
  },
  {
    slug: 'estadi-olimpic',
    name: 'Estadi Olimpic Lluis Companys',
    citySlug: 'barcelona',
    city: 'Barcelona',
    type: 'stadium',
    capacity: 55926,
    sport: 'Football',
    teams: ['FC Barcelona (temporary during Camp Nou renovation)'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'The 1992 Olympic Stadium on Montjuic has served as FC Barcelona\'s temporary home during the Camp Nou renovation. Originally built in 1927 and rebuilt for the Olympics, it offers panoramic views over the city. The intimate atmosphere in a historic setting creates a unique matchday experience.',
    nearbyHostels: 2,
    walkingDistance: '20 min from Espanya metro',
    transitInfo:
      'Same access as Palau Sant Jordi via Espanya metro. Match-day buses run from central Barcelona. Funicular de Montjuic is nearby.',
    fanTips: [
      'Sunsets from the upper tiers during evening matches are spectacular',
      'Limited capacity means tickets are harder to get — book early',
      'The Olympic Museum next door is worth a pre-match visit',
      'Streets around Parallel have great tapas bars for pre-game',
    ],
    events: [
      'barcelona-vs-real-madrid-el-clasico',
    ],
  },

  // ===== BERLIN =====
  {
    slug: 'olympiastadion-berlin',
    name: 'Olympiastadion Berlin',
    citySlug: 'berlin',
    city: 'Berlin',
    type: 'stadium',
    capacity: 74475,
    sport: 'Football',
    teams: ['Hertha BSC'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Built for the 1936 Olympics and renovated for the 2006 World Cup, Berlin\'s Olympiastadion is a monument of sporting history. Home to Hertha BSC and the annual DFB-Pokal Final, this 74,000-capacity stadium has witnessed some of football\'s greatest moments, including Zidane\'s World Cup Final headbutt. The architecture is breathtaking and the atmosphere during cup finals is electric.',
    nearbyHostels: 1,
    walkingDistance: '5 min from Olympiastadion S-Bahn',
    transitInfo:
      'Olympiastadion S-Bahn station (S3, S9) is directly adjacent. U-Bahn Olympia-Stadion (U2) is also close. Special event trains run before and after matches.',
    fanTips: [
      'The Ostkurve (East Curve) is where the Hertha ultras create the atmosphere',
      'DFB-Pokal Final in May is the biggest annual event — book months ahead',
      'Stadium tours are available and include the VIP areas and tunnel',
      'Olympiapark surrounding the stadium is great for a pre-match walk',
    ],
    events: [
      'hertha-vs-union-berlin-derby',
      'dfb-pokal-final-2026',
    ],
  },
  {
    slug: 'mercedes-benz-arena-berlin',
    name: 'Mercedes-Benz Arena',
    citySlug: 'berlin',
    city: 'Berlin',
    type: 'arena',
    capacity: 17000,
    teams: ['Alba Berlin', 'Eisbaeren Berlin'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Located in the heart of Friedrichshain at the East Side Gallery, the Mercedes-Benz Arena is Berlin\'s modern indoor venue for basketball, ice hockey, and major concerts. Home to Alba Berlin (basketball) and Eisbaeren Berlin (ice hockey), it sits within the Mercedes Platz entertainment district packed with restaurants and bars.',
    nearbyHostels: 2,
    walkingDistance: '3 min from Warschauer Strasse station',
    transitInfo:
      'Warschauer Strasse station (S-Bahn and U-Bahn) is right next door. The East Side Gallery is literally across the street. Walking from Ostbahnhof takes about 10 minutes.',
    fanTips: [
      'Mercedes Platz has plenty of bars and restaurants for pre-event drinks',
      'Alba Berlin basketball games are surprisingly intense — try it',
      'After events, walk to the East Side Gallery for Berlin Wall history',
      'The surrounding Friedrichshain nightlife keeps the party going until dawn',
    ],
    events: [
      'alba-berlin-vs-bayern-basketball',
      'taylor-swift-berlin-2026',
    ],
  },
  {
    slug: 'waldbuhne',
    name: 'Waldbuhne',
    citySlug: 'berlin',
    city: 'Berlin',
    type: 'concert-hall',
    capacity: 22290,
    teams: [],
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    description:
      'The Waldbuhne is one of the most beautiful open-air amphitheaters in the world. Nestled in a natural forest clearing near the Olympiastadion, this 22,000-capacity venue was built for the 1936 Olympics. Summer concerts here — surrounded by trees with the sun setting — are truly magical experiences that belong on every music fan\'s bucket list.',
    nearbyHostels: 1,
    walkingDistance: '15 min from Pichelsberg S-Bahn',
    transitInfo:
      'Pichelsberg S-Bahn station (S3, S9) serves the venue during events. Special shuttle buses run from Olympiastadion station. Walking through the forest from the station is part of the experience.',
    fanTips: [
      'Bring a blanket and picnic — it\'s tradition to enjoy food and drinks',
      'Seats are concrete so a cushion is wise',
      'The last song tradition: everyone lights their phone flashlight and sways',
      'Summer concerts sell out fast — book as soon as lineups are announced',
    ],
    events: [
      'berlin-philharmonic-waldbuhne-2026',
    ],
  },

  // ===== NEW YORK CITY =====
  {
    slug: 'madison-square-garden',
    name: 'Madison Square Garden',
    citySlug: 'new-york-city',
    city: 'New York City',
    type: 'arena',
    capacity: 20789,
    sport: 'Basketball',
    teams: ['New York Knicks', 'New York Rangers'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'The World\'s Most Famous Arena. Madison Square Garden sits atop Penn Station in the heart of Manhattan and has hosted every legend from Muhammad Ali to Michael Jordan to Billy Joel. The Knicks and Rangers call it home, and when the Garden is rocking during a playoff game, there is no louder building in sports. Every sports and music fan needs to experience MSG at least once.',
    nearbyHostels: 1,
    walkingDistance: '0 min — directly above Penn Station',
    transitInfo:
      'Penn Station is directly below MSG, connecting to every subway line in Manhattan plus NJ Transit and LIRR. It\'s the most accessible venue in New York City.',
    fanTips: [
      'Stout NYC and Blarney Rock Pub across the street are classic pre-game spots',
      'Upper deck center court still has great views — MSG is perfectly designed',
      'Billy Joel plays a residency here — catch one if you can',
      'Knicks playoff games are the hottest ticket in NYC sports',
      'Grab a dollar slice on 8th Avenue before heading in',
    ],
    events: [
      'knicks-vs-celtics-2026',
      'billy-joel-msg-residency',
      'ufc-300-msg',
    ],
  },
  {
    slug: 'yankee-stadium',
    name: 'Yankee Stadium',
    citySlug: 'new-york-city',
    city: 'New York City',
    type: 'stadium',
    capacity: 46537,
    sport: 'Baseball',
    teams: ['New York Yankees'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'The House That Jeter Re-Built. Yankee Stadium in the Bronx is baseball\'s most storied address, home to 27 World Championships and the ghosts of Ruth, DiMaggio, and Mantle. The current stadium opened in 2009 but carries all the weight of its predecessor. A summer night watching the Yankees under the lights is peak Americana.',
    nearbyHostels: 1,
    walkingDistance: '5 min from 161st St-Yankee Stadium station',
    transitInfo:
      '161st Street-Yankee Stadium station (4, B, D lines) is steps from the entrance. Metro-North also stops at a temporary Yankee Stadium station on game days.',
    fanTips: [
      'Stan\'s Sports Bar across the street is the pre-game institution',
      'Bleacher Creatures in Section 203 are the heart and soul of Yankees fandom',
      'Monument Park opens early — get there when gates open to see it',
      'Friday and Saturday night games have the best atmosphere',
      'The Bronx deserves exploration — grab food on Arthur Avenue nearby',
    ],
    events: [
      'yankees-vs-red-sox-2026',
    ],
  },
  {
    slug: 'barclays-center',
    name: 'Barclays Center',
    citySlug: 'new-york-city',
    city: 'New York City',
    type: 'arena',
    capacity: 19000,
    sport: 'Basketball',
    teams: ['Brooklyn Nets', 'New York Liberty'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'Barclays Center in Downtown Brooklyn is the modern counterpart to MSG, home to the Brooklyn Nets and New York Liberty. The rusty-steel exterior is a Brooklyn landmark, and the interior is sleek and intimate. Major boxing cards, UFC events, and arena concerts keep the venue buzzing year-round.',
    nearbyHostels: 1,
    walkingDistance: '1 min from Atlantic Ave-Barclays Center station',
    transitInfo:
      'Atlantic Avenue-Barclays Center station is directly connected, served by the 2, 3, 4, 5, B, D, N, Q, R lines plus the LIRR. It\'s extremely well-connected.',
    fanTips: [
      'The area around Atlantic Avenue has great bars and restaurants',
      'Brooklyn Nets games are more affordable than Knicks — great value',
      'Concert sightlines are excellent from every seat',
      'Prospect Park is a short walk away for pre-event exploration',
    ],
    events: [
      'nets-vs-lakers-2026',
      'kendrick-lamar-barclays-2026',
    ],
  },

  // ===== LOS ANGELES =====
  {
    slug: 'sofi-stadium',
    name: 'SoFi Stadium',
    citySlug: 'los-angeles',
    city: 'Los Angeles',
    type: 'stadium',
    capacity: 70240,
    sport: 'American Football',
    teams: ['Los Angeles Rams', 'Los Angeles Chargers'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'The $5.5 billion SoFi Stadium in Inglewood is the most expensive sports venue ever built, and it shows. Home to both the Rams and Chargers, this architectural marvel features a translucent roof, the massive Infinity Screen, and hosted Super Bowl LVI. It also hosts mega concerts, WrestleMania, and will be a key venue for the 2028 Olympics.',
    nearbyHostels: 1,
    walkingDistance: '15 min from Inglewood station (K Line)',
    transitInfo:
      'Metro K Line stops at Downtown Inglewood station, about a 15-minute walk. Ride-share drop-offs are well organized. Parking is available but expensive. Shuttle services run from LAX area hotels.',
    fanTips: [
      'The Infinity Screen is mind-blowing — look up during breaks',
      'Tailgating in the surrounding lots starts hours before kickoff',
      'Rams games have better atmosphere than Chargers currently',
      'Concerts here are incredible — the sound system is top-tier',
      'Book accommodation in Inglewood or along the K Line',
    ],
    events: [
      'rams-vs-49ers-2026',
      'beyonce-sofi-2026',
    ],
  },
  {
    slug: 'crypto-com-arena',
    name: 'Crypto.com Arena',
    citySlug: 'los-angeles',
    city: 'Los Angeles',
    type: 'arena',
    capacity: 20000,
    sport: 'Basketball',
    teams: ['Los Angeles Lakers', 'Los Angeles Clippers', 'LA Kings', 'LA Sparks'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'Formerly known as Staples Center, Crypto.com Arena in Downtown LA is where basketball royalty lives. This is the house that Kobe built, home to 17 Lakers championships. Shared by the Clippers, Kings, and Sparks, plus hosting the Grammy Awards and top-tier concerts, it\'s the entertainment capital\'s entertainment epicenter.',
    nearbyHostels: 1,
    walkingDistance: '10 min from 7th St/Metro Center station',
    transitInfo:
      'Pico station (E/A lines) is closest. 7th St/Metro Center connects to most Metro lines. LA Live complex surrounds the arena with dining and entertainment.',
    fanTips: [
      'Lakers games are a scene — expect celebrity sightings courtside',
      'Tom\'s Watch Bar in LA Live is the go-to pre-game spot',
      'Sit in Section 300 for affordable seats with great views',
      'LA Kings hockey games are underrated and more affordable',
      'The post-game walk through LA Live is vibrant on game nights',
    ],
    events: [
      'lakers-vs-warriors-2026',
    ],
  },
  {
    slug: 'hollywood-bowl',
    name: 'Hollywood Bowl',
    citySlug: 'los-angeles',
    city: 'Los Angeles',
    type: 'concert-hall',
    capacity: 17500,
    teams: [],
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    description:
      'The Hollywood Bowl is the most iconic outdoor concert venue in America. Nestled in the Hollywood Hills with its distinctive band shell, it has hosted performances since 1922. Summer nights here with a bottle of wine, a picnic basket, and world-class music under the stars is the quintessential LA experience. The LA Philharmonic\'s summer season is a cultural highlight.',
    nearbyHostels: 1,
    walkingDistance: '10 min from Hollywood/Highland station',
    transitInfo:
      'Park & Ride shuttles run from various locations on concert nights. Hollywood/Highland Metro station (B Line) is about a 15-minute walk. Dedicated Bowl shuttle buses are the easiest option.',
    fanTips: [
      'Bring your own food and wine — it\'s not just allowed, it\'s tradition',
      'Garden Box seats are the best experience but benches are charming',
      'The Bowl shuttle from Hollywood/Highland is free and efficient',
      'Layer up — LA nights get surprisingly cool in the hills',
      'Check out the Beatles tribute concert if it\'s running',
    ],
    events: [
      'la-phil-hollywood-bowl-2026',
    ],
  },

  // ===== MEXICO CITY =====
  {
    slug: 'estadio-azteca',
    name: 'Estadio Azteca',
    citySlug: 'mexico-city',
    city: 'Mexico City',
    type: 'stadium',
    capacity: 87523,
    sport: 'Football',
    teams: ['Club America', 'Mexico National Team'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Estadio Azteca is sacred ground. The only stadium to host two FIFA World Cup finals (1970 and 1986), it witnessed Pele\'s triumph and Maradona\'s Hand of God and Goal of the Century. Home to Club America — Mexico\'s most successful club — and El Tri, the atmosphere of 87,000 fans at 2,240 meters altitude is staggering. This is a bucket-list venue for every football fan alive.',
    nearbyHostels: 1,
    walkingDistance: '20 min from Estadio Azteca light rail stop',
    transitInfo:
      'Estadio Azteca light rail station is dedicated to the venue. Connect via Metro Line 2 to Tasquena, then light rail south. On match days, special bus services run from central CDMX.',
    fanTips: [
      'The altitude genuinely affects you — hydrate and take it slow',
      'La Porra section behind the south goal is where the ultras are',
      'El Clasico Joven (America vs Cruz Azul) is the city\'s biggest match',
      'Street food vendors outside the stadium serve incredible tacos',
      'Visit the on-site museum showcasing World Cup history',
    ],
    events: [
      'america-vs-cruz-azul-clasico-joven',
      'mexico-vs-usa-wcq',
    ],
  },
  {
    slug: 'foro-sol',
    name: 'Foro Sol',
    citySlug: 'mexico-city',
    city: 'Mexico City',
    type: 'stadium',
    capacity: 65000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Foro Sol is Mexico City\'s premier concert and festival venue, hosting every major global tour that comes through Latin America. Located within the Autodromo Hermanos Rodriguez complex (which also hosts Formula 1), it holds 65,000 for concerts and has become the go-to venue for massive shows. The atmosphere of Mexican concert crowds is among the most enthusiastic on the planet.',
    nearbyHostels: 1,
    walkingDistance: '15 min from Ciudad Deportiva metro',
    transitInfo:
      'Ciudad Deportiva metro station (Line 9) is the closest. Velódromo station (Line 9) also works. Ride-share is popular for events. Traffic can be brutal, so Metro is recommended.',
    fanTips: [
      'Mexican concert crowds sing every word — learn the lyrics',
      'Food and drink inside is reasonable by international standards',
      'General admission floor can get intense — stay hydrated',
      'The F1 weekend in late October is a massive city-wide party',
      'Combine with a visit to the nearby Palacio de los Deportes',
    ],
    events: [
      'bad-bunny-mexico-city-2026',
      'vive-latino-2026',
    ],
  },
  {
    slug: 'palacio-de-los-deportes',
    name: 'Palacio de los Deportes',
    citySlug: 'mexico-city',
    city: 'Mexico City',
    type: 'arena',
    capacity: 22000,
    sport: 'Basketball',
    teams: [],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'Built for the 1968 Olympics, the Palacio de los Deportes is Mexico City\'s historic indoor arena. Its distinctive copper-clad geodesic dome houses basketball events, boxing cards, lucha libre spectacles, and major concert tours. The venue has a raw, authentic energy that modern arenas struggle to replicate.',
    nearbyHostels: 1,
    walkingDistance: '10 min from Velódromo metro',
    transitInfo:
      'Velódromo metro station (Line 9) is closest. Ciudad Deportiva station is also walkable. Located near Foro Sol in the sports complex area.',
    fanTips: [
      'Lucha libre events here are spectacular and family-friendly',
      'The concourse food includes incredible Mexican street food',
      'Basketball games are affordable and atmospheric',
      'Combine with a visit to Arena Mexico for more lucha libre',
    ],
    events: [
      'lucha-libre-palacio-2026',
    ],
  },

  // ===== BUENOS AIRES =====
  {
    slug: 'la-bombonera',
    name: 'La Bombonera',
    citySlug: 'buenos-aires',
    city: 'Buenos Aires',
    type: 'stadium',
    capacity: 54000,
    sport: 'Football',
    teams: ['Boca Juniors'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'La Bombonera (The Chocolate Box) in La Boca is the most atmospheric stadium in world football. When 54,000 Boca Juniors fans jump in unison, the concrete literally vibrates — locals call it "La Bombonera no tiembla, late" (it doesn\'t tremble, it beats). The steep stands create a wall of noise that opposing teams dread. Experiencing a match here is a life-changing event.',
    nearbyHostels: 2,
    walkingDistance: '25 min walk from La Boca neighborhood',
    transitInfo:
      'No nearby subway station. Bus lines 29, 33, 53, 64, and 152 serve the area. Taxis and Uber are recommended, especially at night. Organized match-day tours include transport.',
    fanTips: [
      'DO NOT wear red (River Plate colors) anywhere near La Bombonera',
      'Book through an official tour or local contact — tickets require membership',
      'La Doce (Section 12) behind the goal is the famous barra brava stand',
      'The stadium museum and Caminito street are must-visits',
      'Only visit La Boca during daylight hours outside of match days',
      'Arrive early to soak in the pre-match atmosphere on the streets',
    ],
    events: [
      'boca-vs-river-superclasico',
      'boca-juniors-copa-libertadores',
    ],
  },
  {
    slug: 'estadio-monumental',
    name: 'Estadio Mas Monumental',
    citySlug: 'buenos-aires',
    city: 'Buenos Aires',
    type: 'stadium',
    capacity: 84567,
    sport: 'Football',
    teams: ['River Plate', 'Argentina National Team'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'El Monumental in Nunez is the largest stadium in Argentina and the home of River Plate, the country\'s most decorated club. It also serves as the main venue for Argentina national team matches. After Messi\'s World Cup triumph, a match here carries even more emotional weight. The 84,000-seat venue creates a thunderous atmosphere on big match nights.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Nunez station (Line D)',
    transitInfo:
      'Nunez station on Subte Line D is the closest metro stop, about a 10-minute walk. Bus lines 29, 42, 107, and 130 also serve the area. The stadium is in the upscale Nunez/Belgrano neighborhood.',
    fanTips: [
      'The Sivori Stand (Platea Sivori) offers the best views',
      'River Plate\'s museum chronicles over a century of football history',
      'Post-match, head to Belgrano for great restaurants and nightlife',
      'Superclasico tickets are nearly impossible to get — plan far ahead',
      'The Nunez neighborhood is safe and pleasant for walking',
    ],
    events: [
      'boca-vs-river-superclasico',
      'argentina-vs-brazil-wcq',
    ],
  },
  {
    slug: 'movistar-arena-ba',
    name: 'Movistar Arena',
    citySlug: 'buenos-aires',
    city: 'Buenos Aires',
    type: 'arena',
    capacity: 15500,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Movistar Arena (formerly Luna Park) in the Puerto Madero area is Buenos Aires\' modern indoor arena for concerts and sporting events. The 15,500-capacity venue hosts international tours, boxing cards, and basketball. Located near the waterfront, it\'s surrounded by restaurants and bars that make for perfect pre-show dining.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Corrientes station (Line B)',
    transitInfo:
      'LN Alem station (Line B) and Corrientes station (Line H) are both walkable. Puerto Madero is nearby for waterfront dining. Multiple bus routes serve the area.',
    fanTips: [
      'Puerto Madero docks have excellent restaurants for pre-event dining',
      'The venue is modern and well-organized with great sightlines',
      'Boxing has a huge tradition here — try to catch a card',
      'Combine with a walk along the Puerto Madero waterfront',
    ],
    events: [
      'arctic-monkeys-buenos-aires-2026',
    ],
  },

  // ===== TOKYO =====
  {
    slug: 'tokyo-dome',
    name: 'Tokyo Dome',
    citySlug: 'tokyo',
    city: 'Tokyo',
    type: 'stadium',
    capacity: 55000,
    sport: 'Baseball',
    teams: ['Yomiuri Giants'],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    description:
      'Known affectionately as "The Big Egg," Tokyo Dome is the iconic home of the Yomiuri Giants and Japan\'s most famous sporting venue. Beyond baseball, it hosts blockbuster concerts from J-pop superstars and international acts alike, as well as pro wrestling and MMA events. The enclosed dome creates an electrifying atmosphere where 55,000 fans wave thundersticks in perfect unison.',
    nearbyHostels: 3,
    walkingDistance: '5 min from Suidobashi station',
    transitInfo:
      'Suidobashi station (JR Chuo-Sobu Line, Toei Mita Line) is a 5-minute walk. Korakuen station (Marunouchi and Namboku lines) is even closer. Tokyo Dome City complex surrounds the venue with shops and entertainment.',
    fanTips: [
      'Thundersticks and team towels are sold outside — buy them to join in the organized cheering',
      'Each section of fans has a dedicated cheer leader who conducts coordinated songs',
      'Tokyo Dome City attractions including a roller coaster make for a great pre-game visit',
      'Convenience stores near the station sell affordable bento boxes to bring inside',
    ],
    events: [
      'yomiuri-giants-vs-hanshin-tigers-2026',
      'one-ok-rock-tokyo-dome-2026',
    ],
  },
  {
    slug: 'national-stadium-tokyo',
    name: 'National Stadium',
    citySlug: 'tokyo',
    city: 'Tokyo',
    type: 'stadium',
    capacity: 68000,
    sport: 'Football',
    teams: ['Japan National Team'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'The stunning centerpiece of the 2020 Tokyo Olympics, designed by Kengo Kuma with a latticed timber exterior inspired by traditional Japanese architecture. The National Stadium hosts Japan national football team matches, major athletics events, and large-scale concerts. Its open-air design channels natural breezes through the stands, creating a uniquely comfortable spectator experience even in summer.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Sendagaya station',
    transitInfo:
      'Sendagaya station (JR Chuo-Sobu Line) and Kokuritsu-Kyogijo station (Toei Oedo Line) are both within a 5-minute walk. Shinanomachi station (JR Chuo-Sobu Line) is also close. The Meiji Jingu Gaien area is well connected by bus.',
    fanTips: [
      'Arrive early to admire the Kengo Kuma architecture and surrounding Meiji Jingu Gaien gardens',
      'Japanese football fans are exceptionally organized — follow the crowd for coordinated chants',
      'Meiji Jingu shrine is a short walk away and worth combining with your visit',
      'Convenience store onigiri and drinks are the budget-friendly way to fuel up before events',
    ],
    events: [
      'japan-vs-australia-wcq-2026',
      'tokyo-athletics-grand-prix-2026',
    ],
  },
  {
    slug: 'nippon-budokan',
    name: 'Nippon Budokan',
    citySlug: 'tokyo',
    city: 'Tokyo',
    type: 'arena',
    capacity: 14471,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Originally built for the 1964 Olympic judo competition, the Nippon Budokan has become one of the world\'s most legendary concert venues. Its octagonal design and distinctive onion-shaped roof sit within the Imperial Palace moat gardens, creating a serene exterior that belies the explosive energy inside. Playing the Budokan is a rite of passage for rock and pop artists worldwide, immortalized by Cheap Trick\'s iconic live album.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Kudanshita station',
    transitInfo:
      'Kudanshita station (Tozai, Hanzomon, and Shinjuku lines) is directly adjacent. The venue sits within Kitanomaru Park, a short walk from the Imperial Palace East Gardens. Multiple bus routes serve the Kudanshita area.',
    fanTips: [
      'The intimate octagonal layout means every seat feels close to the stage',
      'Explore Kitanomaru Park and the Imperial Palace gardens before the show',
      'Merch lines form early — arrive at least an hour before doors for exclusive items',
      'Yasukuni-dori avenue nearby has great izakayas for post-show food and drinks',
    ],
    events: [
      'babymetal-budokan-2026',
      'world-judo-championships-2026',
    ],
  },

  // ===== PARIS =====
  {
    slug: 'parc-des-princes',
    name: 'Parc des Princes',
    citySlug: 'paris',
    city: 'Paris',
    type: 'stadium',
    capacity: 47929,
    sport: 'Football',
    teams: ['Paris Saint-Germain'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'The Parc des Princes in the 16th arrondissement is the fortress of Paris Saint-Germain and one of European football\'s most intimidating grounds. The steep, enclosed bowl design traps sound and creates a cauldron of noise, especially in the Virage Auteuil where the ultras orchestrate non-stop chanting. Champions League nights here are absolutely electric, with the Parisian faithful pushing their team forward under the floodlights.',
    nearbyHostels: 2,
    walkingDistance: '8 min from Porte de Saint-Cloud metro',
    transitInfo:
      'Porte de Saint-Cloud (Metro Line 9) is an 8-minute walk. Exelmans station (Line 9) is also close. On match days, special buses run from central Paris. RER C to Issy-Val de Seine is an alternative route.',
    fanTips: [
      'Virage Auteuil is the ultras end — expect standing, tifos, and non-stop singing',
      'Brasseries along Avenue du Parc des Princes fill up with fans hours before kickoff',
      'The Bois de Boulogne park is adjacent for a pre-match stroll',
      'PSG boutique at the stadium sells exclusive matchday merchandise',
    ],
    events: [
      'psg-vs-marseille-le-classique-2026',
      'psg-champions-league-2026',
    ],
  },
  {
    slug: 'stade-de-france',
    name: 'Stade de France',
    citySlug: 'paris',
    city: 'Paris',
    type: 'stadium',
    capacity: 81338,
    sport: 'Football',
    teams: ['France National Team'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Built for the 1998 World Cup where Zidane led France to glory, the Stade de France in Saint-Denis is the national stadium and the largest in France. It hosts Les Bleus football and rugby internationals, the Top 14 rugby final, and the biggest concerts in the country. The sweeping elliptical design and floating roof create a dramatic spectacle, and 81,000 fans singing La Marseillaise before kickoff is spine-tingling.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Stade de France - Saint-Denis station',
    transitInfo:
      'RER B and RER D both stop at Stade de France - Saint-Denis station, a 10-minute walk away. Metro Line 13 to Saint-Denis Universite is an alternative. Special event shuttles run from Gare du Nord on big match days.',
    fanTips: [
      'La Marseillaise sung by 80,000 fans is one of sport\'s greatest pre-match rituals',
      'The fan zone outside the stadium opens several hours before major events',
      'Six Nations rugby matches here have an incredible party atmosphere',
      'Bars and restaurants along the Canal Saint-Denis are great for pre-match gatherings',
    ],
    events: [
      'france-vs-england-six-nations-2026',
      'france-vs-germany-nations-league-2026',
    ],
  },
  {
    slug: 'accor-arena-paris',
    name: 'Accor Arena',
    citySlug: 'paris',
    city: 'Paris',
    type: 'arena',
    capacity: 20300,
    teams: [],
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    description:
      'Located in the Bercy district along the Seine, the Accor Arena (formerly Bercy Arena) is Paris\'s premier indoor venue for concerts, basketball, tennis, and martial arts events. The 20,300-capacity arena has hosted everything from the Paris Masters tennis tournament to the biggest names in global music. Its central location and excellent transport links make it one of Europe\'s most accessible major arenas.',
    nearbyHostels: 3,
    walkingDistance: '3 min from Bercy metro station',
    transitInfo:
      'Bercy metro station (Line 6 and Line 14) is directly adjacent. Gare de Lyon mainline station is a 10-minute walk, connecting to regional and high-speed trains. Bus routes 24 and 87 serve the area.',
    fanTips: [
      'Bercy Village shopping and dining complex next door is perfect for pre-show meals',
      'The Paris Masters tennis tournament every October draws world-class players',
      'Floor-level standing sections for concerts offer an intense experience',
      'Walk along the Promenade Plantee (elevated park) near Gare de Lyon before the show',
    ],
    events: [
      'paris-masters-tennis-2026',
      'the-weeknd-paris-2026',
    ],
  },

  // ===== AMSTERDAM =====
  {
    slug: 'johan-cruyff-arena',
    name: 'Johan Cruyff Arena',
    citySlug: 'amsterdam',
    city: 'Amsterdam',
    type: 'stadium',
    capacity: 55500,
    sport: 'Football',
    teams: ['AFC Ajax'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Named after the greatest Dutch footballer of all time, the Johan Cruyff Arena is the home of AFC Ajax and the beating heart of Dutch football. The retractable roof stadium in Amsterdam Zuidoost holds 55,500 fans who create a wall of sound with the famous "Three Little Birds" anthem echoing around the ground. Champions League nights here carry the legacy of Total Football and Ajax\'s legendary European triumphs.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Strandvliet station',
    transitInfo:
      'Amsterdam Bijlmer ArenA station (Metro 50, 54 and NS trains) is directly adjacent. The metro connects to Amsterdam Centraal in about 15 minutes. Ample bicycle parking is available for the true Dutch experience.',
    fanTips: [
      'The F-Side (Vak 410) is where the Ajax ultras sing "Three Little Birds" non-stop',
      'Ajax fan shop at the stadium has extensive merchandise including retro kits',
      'Pre-match beers at the ArenA Boulevard bars are a match-day tradition',
      'Cycling to the stadium from central Amsterdam takes about 25 minutes and is very Dutch',
    ],
    events: [
      'ajax-vs-feyenoord-de-klassieker-2026',
      'ajax-champions-league-2026',
    ],
  },
  {
    slug: 'ziggo-dome',
    name: 'Ziggo Dome',
    citySlug: 'amsterdam',
    city: 'Amsterdam',
    type: 'arena',
    capacity: 17000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'The Ziggo Dome is Amsterdam\'s state-of-the-art indoor arena, located right next to the Johan Cruyff Arena in Amsterdam Zuidoost. Opened in 2012, it has quickly become one of Europe\'s best-regarded concert venues thanks to its exceptional acoustics, intimate bowl design, and cutting-edge production capabilities. Every major international tour makes a stop at the Ziggo Dome, and the Dutch crowds are famously enthusiastic.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Bijlmer ArenA station',
    transitInfo:
      'Amsterdam Bijlmer ArenA station (Metro 50, 54 and NS trains) is a 5-minute walk. Same excellent transport links as the Johan Cruyff Arena. Night buses run after late events back to central Amsterdam.',
    fanTips: [
      'The circular design means there are no bad seats — every angle has great sightlines',
      'ArenA Boulevard restaurants and bars are shared with the football stadium crowd',
      'Dutch fans are tall — book slightly elevated seats if you want unobstructed views',
      'Combine a show with an Ajax match if schedules align for a double-header day',
    ],
    events: [
      'adele-amsterdam-2026',
      'eurovision-viewing-party-2026',
    ],
  },
  {
    slug: 'afas-live-amsterdam',
    name: 'AFAS Live',
    citySlug: 'amsterdam',
    city: 'Amsterdam',
    type: 'concert-hall',
    capacity: 6000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    description:
      'AFAS Live is Amsterdam\'s beloved mid-size concert venue, also situated in the Amsterdam Zuidoost entertainment district alongside the Johan Cruyff Arena and Ziggo Dome. With a 6,000-person capacity, it offers an intimate yet energetic setting that\'s perfect for catching artists on the rise or established acts in a more personal environment. The venue\'s flexible layout and superb sound system make every show feel special.',
    nearbyHostels: 2,
    walkingDistance: '7 min from Bijlmer ArenA station',
    transitInfo:
      'Amsterdam Bijlmer ArenA station (Metro 50, 54 and NS trains) is a short walk. Part of the same entertainment district as Johan Cruyff Arena and Ziggo Dome. Night buses back to central Amsterdam run frequently.',
    fanTips: [
      'The standing-room floor creates an electric atmosphere for rock and indie shows',
      'Arrive early for general admission to secure a spot near the front barrier',
      'The venue bar prices are reasonable by Amsterdam standards',
      'Check the schedule for double bills — AFAS Live often programs exciting support acts',
    ],
    events: [
      'amsterdam-dance-event-2026',
      'fontaines-dc-amsterdam-2026',
    ],
  },

  // ===== MADRID =====
  {
    slug: 'santiago-bernabeu',
    name: 'Santiago Bernabeu',
    citySlug: 'madrid',
    city: 'Madrid',
    type: 'stadium',
    capacity: 81044,
    sport: 'Football',
    teams: ['Real Madrid'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'The Santiago Bernabeu is the cathedral of European football and the home of the most decorated club in history. Real Madrid\'s legendary ground has undergone a spectacular renovation, adding a retractable pitch and roof that transforms it into a futuristic multi-use venue. With 15 Champions League titles celebrated within these walls, the Bernabeu radiates a winning aura that every football fan must experience in person.',
    nearbyHostels: 3,
    walkingDistance: '1 min from Santiago Bernabeu metro',
    transitInfo:
      'Santiago Bernabeu metro station (Line 10) is directly at the stadium entrance. Nuevos Ministerios station (Lines 6, 8, 10 plus Cercanias) is a short walk. The Paseo de la Castellana boulevard has excellent bus connections.',
    fanTips: [
      'El Clasico against Barcelona is the most sought-after ticket in world football',
      'Fondo Sur (South End) is where the Ultras Sur historically created the atmosphere',
      'The stadium tour includes the trophy room with all 15 Champions League trophies',
      'Tapas bars along Calle Padre Damian fill with fans hours before kickoff',
    ],
    events: [
      'real-madrid-vs-barcelona-el-clasico-2026',
      'real-madrid-champions-league-2026',
    ],
  },
  {
    slug: 'metropolitano',
    name: 'Civitas Metropolitano',
    citySlug: 'madrid',
    city: 'Madrid',
    type: 'stadium',
    capacity: 70460,
    sport: 'Football',
    teams: ['Atletico Madrid'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'The Civitas Metropolitano is the fiery home of Atletico Madrid and one of the most intense atmospheres in Spanish football. The Frente Atletico ultras in the south end drive a relentless wall of noise that embodies Simeone\'s "never give up" philosophy. Opened in 2017 and expanded for the 2019 Champions League Final, the modern bowl design creates an intimidating cauldron that visiting teams dread.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Estadio Metropolitano metro',
    transitInfo:
      'Estadio Metropolitano metro station (Line 7) is directly adjacent. Barrio del Pilar station (Line 7) is also close. Match-day bus services run from central Madrid. Located in the San Blas-Canillejas district.',
    fanTips: [
      'Fondo Sur behind the goal is the Frente Atletico section — expect non-stop passion',
      'The Madrid derby against Real Madrid is one of the fiercest rivalries in Spain',
      'Stadium food includes excellent Spanish tortilla and bocadillos',
      'Pre-match drinks in the bars along Avenida de Arcentales set the mood perfectly',
    ],
    events: [
      'atletico-vs-real-madrid-derby-2026',
      'atletico-champions-league-2026',
    ],
  },
  {
    slug: 'wizink-center',
    name: 'WiZink Center',
    citySlug: 'madrid',
    city: 'Madrid',
    type: 'arena',
    capacity: 17453,
    sport: 'Basketball',
    teams: ['Real Madrid Baloncesto'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'The WiZink Center on the Paseo de la Castellana is Madrid\'s premier indoor arena, home to Real Madrid\'s basketball team and host to the biggest concerts and events in the Spanish capital. Basketball is massive in Spain, and EuroLeague nights here with 17,000 passionate fans rival the atmosphere of any NBA arena. The venue also hosts tennis, boxing, and international music tours year-round.',
    nearbyHostels: 2,
    walkingDistance: '8 min from Goya metro station',
    transitInfo:
      'Goya metro station (Lines 2 and 4) is the closest stop. O\'Donnell station (Line 6) is also walkable. Bus routes along Calle de Goya serve the area. The venue is in the upscale Salamanca district.',
    fanTips: [
      'EuroLeague basketball nights are incredibly intense — Spanish fans live for basketball',
      'Calle de Goya has excellent tapas bars for pre-event dining',
      'Seated bowl views are excellent throughout — no bad seats in the house',
      'The Salamanca neighborhood is Madrid\'s most elegant — enjoy a paseo before the event',
    ],
    events: [
      'real-madrid-basketball-euroleague-2026',
      'billie-eilish-madrid-2026',
    ],
  },

  // ===== MILAN =====
  {
    slug: 'san-siro',
    name: 'San Siro (Giuseppe Meazza)',
    citySlug: 'milan',
    city: 'Milan',
    type: 'stadium',
    capacity: 75923,
    sport: 'Football',
    teams: ['AC Milan', 'Inter Milan'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'San Siro is one of the most iconic stadiums in world football, uniquely shared by fierce city rivals AC Milan and Inter Milan. The towering spiral ramp towers and third tier added for the 1990 World Cup give it an unmistakable silhouette against the Milanese skyline. When 75,000 fans pack in for the Derby della Madonnina, the atmosphere is absolutely ferocious — a spectacle of tifos, flares, and raw passion that defines Italian football culture.',
    nearbyHostels: 2,
    walkingDistance: '5 min from San Siro Stadio metro',
    transitInfo:
      'San Siro Stadio metro station (Line M5, Lilac Line) is directly adjacent. Tram 16 also stops nearby. Match-day shuttle buses run from Piazzale Lotto. The stadium is in the western San Siro district.',
    fanTips: [
      'The Curva Sud is AC Milan\'s end and Curva Nord belongs to Inter — know your side',
      'Derby della Madonnina is the most explosive city derby in Europe',
      'The stadium museum chronicles the shared history of both clubs',
      'Bars along Piazzale Lotto are packed with fans before every match',
    ],
    events: [
      'ac-milan-vs-inter-derby-della-madonnina-2026',
      'ac-milan-champions-league-2026',
    ],
  },
  {
    slug: 'mediolanum-forum',
    name: 'Mediolanum Forum',
    citySlug: 'milan',
    city: 'Milan',
    type: 'arena',
    capacity: 12700,
    sport: 'Basketball',
    teams: ['EA7 Emporio Armani Milano'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'The Mediolanum Forum in Assago, just south of Milan, is Italy\'s premier indoor arena and the home of EA7 Emporio Armani Milano basketball. Built for the 1990 World Cup as a gymnastics venue, it has since become the go-to destination for major concerts, EuroLeague basketball, and entertainment events in northern Italy. The steep-sided bowl creates an intimate and loud atmosphere that punches well above its 12,700 capacity.',
    nearbyHostels: 1,
    walkingDistance: '5 min from Assago Milanofiori Forum metro',
    transitInfo:
      'Assago Milanofiori Forum metro station (Line M2, Green Line) is directly connected to the venue. The journey from central Milan takes about 25 minutes. Ample parking is also available.',
    fanTips: [
      'EuroLeague basketball nights bring passionate Italian fans who never stop chanting',
      'The metro ride from Duomo to the Forum is quick and easy',
      'Floor seats at concerts are standing room and offer an electric experience',
      'Grab dinner in central Milan before heading south on the metro to the show',
    ],
    events: [
      'ea7-milano-euroleague-2026',
      'imagine-dragons-milan-2026',
    ],
  },
  {
    slug: 'teatro-la-scala',
    name: 'Teatro alla Scala',
    citySlug: 'milan',
    city: 'Milan',
    type: 'concert-hall',
    capacity: 2030,
    teams: [],
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    description:
      'Teatro alla Scala is the most famous opera house on Earth and a temple of performing arts that has set the global standard since 1778. Verdi, Puccini, Toscanini, and Callas all made history within these neoclassical walls. The intimate 2,030-seat horseshoe auditorium with its six tiers of gilded boxes delivers acoustics so perfect that every whispered note reaches the back row. A night at La Scala is the pinnacle of cultural experience.',
    nearbyHostels: 3,
    walkingDistance: '5 min from Duomo metro station',
    transitInfo:
      'Duomo metro station (Lines M1 and M3) is a short walk through Galleria Vittorio Emanuele II. Montenapoleone station (Line M3) is also close. The theater sits on Piazza della Scala in the absolute heart of Milan.',
    fanTips: [
      'Dress elegantly — La Scala has an informal dress code and Milanese audiences take it seriously',
      'Same-day discount tickets for the gallery (loggione) go on sale at the box office',
      'The La Scala Museum next door displays centuries of opera costumes and memorabilia',
      'Book a pre-show aperitivo at one of the historic cafes on Galleria Vittorio Emanuele II',
    ],
    events: [
      'la-scala-opera-season-2026',
      'la-scala-ballet-gala-2026',
    ],
  },

  // ===== RIO DE JANEIRO =====
  {
    slug: 'maracana',
    name: 'Maracana',
    citySlug: 'rio-de-janeiro',
    city: 'Rio de Janeiro',
    type: 'stadium',
    capacity: 78838,
    sport: 'Football',
    teams: ['Flamengo', 'Fluminense'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'The Maracana is the most famous stadium in South America and a sacred cathedral of football. Built for the 1950 World Cup and renovated for 2014, it has witnessed some of the sport\'s most dramatic moments, from Brazil\'s heartbreaking 1950 final defeat to Neymar\'s Olympic gold in 2016. Shared by bitter rivals Flamengo and Fluminense, the Fla-Flu derby fills 78,000 seats with samba drums, dancing, and sheer madness that defines Brazilian football culture.',
    nearbyHostels: 3,
    walkingDistance: '5 min from Maracana station',
    transitInfo:
      'Maracana metro station (Line 2) and Maracana train station (SuperVia) are both directly adjacent. The venue is in the Tijuca zone, well connected to Copacabana and Ipanema by metro. Match-day bus services run from the Zona Sul.',
    fanTips: [
      'Flamengo vs Fluminense (Fla-Flu) is one of the most passionate derbies on the planet',
      'The samba drum sections behind each goal create a rhythm that never stops',
      'Wear your team colors proudly — Carioca fans are welcoming to visiting supporters',
      'Street vendors outside sell incredible coxinha and acai bowls before matches',
    ],
    events: [
      'flamengo-vs-fluminense-fla-flu-2026',
      'brazil-vs-argentina-wcq-2026',
    ],
  },
  {
    slug: 'engenhao',
    name: 'Estadio Nilton Santos (Engenhao)',
    citySlug: 'rio-de-janeiro',
    city: 'Rio de Janeiro',
    type: 'stadium',
    capacity: 46931,
    sport: 'Football',
    teams: ['Botafogo'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Known affectionately as Engenhao, the Estadio Nilton Santos served as the main athletics venue for the 2016 Rio Olympics and is the home of Botafogo, one of Rio\'s most historic clubs. The sweeping modern design by architect Carlos Porto creates excellent sightlines from every seat, and the passionate Botafogo torcida fills the ground with black-and-white flags and fervent singing on match days.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Engenhao station',
    transitInfo:
      'Engenhao train station (SuperVia) is a 10-minute walk. The venue is in the Engenho de Dentro neighborhood. Bus routes from central Rio and the Zona Sul serve the area. Ride-sharing is popular on match days.',
    fanTips: [
      'Botafogo fans are among the most loyal in Rio — their chants are melodic and constant',
      'The running track around the pitch means seats are set back, so lower tiers are best',
      'Food stalls outside the stadium serve traditional Brazilian match-day snacks',
      'Combine a match with exploring the Tijuca Forest national park nearby',
    ],
    events: [
      'botafogo-brasileirao-2026',
      'rio-athletics-meeting-2026',
    ],
  },
  {
    slug: 'jeunesse-arena',
    name: 'Jeunesse Arena',
    citySlug: 'rio-de-janeiro',
    city: 'Rio de Janeiro',
    type: 'arena',
    capacity: 18000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Built as the Olympic Park Arena for the 2016 Rio Games, the Jeunesse Arena in Barra da Tijuca is Rio de Janeiro\'s modern indoor venue for concerts, basketball, and entertainment events. The 18,000-capacity arena sits within the Olympic Park complex and hosts every major international tour that comes through Brazil. The energetic Carioca crowds make every concert feel like a carnival celebration.',
    nearbyHostels: 1,
    walkingDistance: '15 min from Jardim Oceanico metro',
    transitInfo:
      'Jardim Oceanico metro station (Line 4) is the closest stop, about a 15-minute walk or short bus ride. BRT Transcarioca buses also serve the Olympic Park area. Located in the Barra da Tijuca district, away from central Rio.',
    fanTips: [
      'Brazilian concert crowds are among the most enthusiastic in the world — expect singing along',
      'Barra da Tijuca beaches are nearby for a pre-show afternoon in the sun',
      'The Olympic Park area has food courts and entertainment options',
      'Book accommodation in Barra da Tijuca to avoid the long journey back to Copacabana at night',
    ],
    events: [
      'rock-in-rio-arena-2026',
      'ufc-rio-2026',
    ],
  },

  // ===== TORONTO =====
  {
    slug: 'scotiabank-arena',
    name: 'Scotiabank Arena',
    citySlug: 'toronto',
    city: 'Toronto',
    type: 'arena',
    capacity: 19800,
    sport: 'Basketball',
    teams: ['Toronto Raptors', 'Toronto Maple Leafs'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'Scotiabank Arena on Bay Street is the heart of Toronto\'s sports scene, home to the NBA\'s Raptors and the NHL\'s Maple Leafs. When the Raptors won the 2019 NBA Championship, the "We The North" movement turned this arena into the epicenter of Canadian basketball. Leafs games carry generations of hockey passion, and the downtown waterfront location makes it one of the most conveniently located major arenas in North America.',
    nearbyHostels: 3,
    walkingDistance: '1 min from Union Station',
    transitInfo:
      'Union Station (TTC subway, GO Transit, VIA Rail) is directly connected via the PATH underground walkway. The arena sits between the CN Tower and the Financial District. Streetcar routes along Queens Quay also serve the area.',
    fanTips: [
      'Jurassic Park (the outdoor viewing area on Bremner Blvd) is legendary during Raptors playoffs',
      'Maple Leafs tickets are among the hardest to get in the NHL — book well in advance',
      'Real Sports Bar & Grill next door is the premier pre-game spot',
      'The PATH underground connects to shops and restaurants for a warm walk in winter',
    ],
    events: [
      'raptors-vs-celtics-2026',
      'maple-leafs-vs-canadiens-2026',
    ],
  },
  {
    slug: 'rogers-centre',
    name: 'Rogers Centre',
    citySlug: 'toronto',
    city: 'Toronto',
    type: 'stadium',
    capacity: 49282,
    sport: 'Baseball',
    teams: ['Toronto Blue Jays'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'The Rogers Centre is home to the Toronto Blue Jays and one of the most recognizable stadiums in baseball, famous for its fully retractable roof that opens to reveal the CN Tower and Toronto skyline. When the roof is open on a warm summer evening, there are few better places to watch a ball game in all of MLB. The Blue Jays\' passionate Canadian fanbase creates a unique atmosphere that blends American pastime traditions with unmistakable Canadian enthusiasm.',
    nearbyHostels: 3,
    walkingDistance: '3 min from Union Station',
    transitInfo:
      'Union Station (TTC subway, GO Transit, VIA Rail) is a 3-minute walk through the SkyWalk covered walkway. The CN Tower and Ripley\'s Aquarium are directly adjacent. Streetcars along Front Street provide additional connections.',
    fanTips: [
      'Sit in the 500 level on the third-base side for the best CN Tower views when the roof is open',
      'Summer weekend afternoon games with the roof open are the ultimate Blue Jays experience',
      'Steam Whistle Brewery across the street is a fantastic pre-game stop',
      'The SkyWalk from Union Station keeps you dry on rainy days and warm in winter',
    ],
    events: [
      'blue-jays-vs-yankees-2026',
      'blue-jays-opening-day-2026',
    ],
  },
  {
    slug: 'bmo-field-toronto',
    name: 'BMO Field',
    citySlug: 'toronto',
    city: 'Toronto',
    type: 'stadium',
    capacity: 30991,
    sport: 'Football',
    teams: ['Toronto FC', 'Toronto Argonauts'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'BMO Field on the Exhibition Place grounds is the home of Toronto FC (MLS) and the Toronto Argonauts (CFL), sitting right on the Lake Ontario waterfront with stunning views of the city skyline. The south end supporter section is one of the most vocal in MLS, and the intimate 30,000-seat capacity ensures fans are right on top of the action. TFC\'s passionate supporter groups have built a genuine football culture in a traditionally hockey-mad city.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Exhibition station',
    transitInfo:
      'Exhibition GO station is a 10-minute walk. The 509 Harbourfront and 511 Bathurst streetcar routes stop at Exhibition Loop nearby. The venue is on the CNE grounds along the waterfront, west of downtown.',
    fanTips: [
      'The south end supporter section (Sections 111-114) is where the ultras sing and drum all match',
      'Liberty Village neighborhood nearby has excellent brewpubs for pre-match pints',
      'CFL Argonauts games are affordable and have a fun, family-friendly atmosphere',
      'Walk along the Martin Goodman Trail on the waterfront before or after the match',
    ],
    events: [
      'toronto-fc-vs-cf-montreal-2026',
      'toronto-argonauts-cfl-2026',
    ],
  },

  // ===== MUNICH =====
  {
    slug: 'allianz-arena',
    name: 'Allianz Arena',
    citySlug: 'munich',
    city: 'Munich',
    type: 'stadium',
    capacity: 75000,
    sport: 'Football',
    teams: ['Bayern Munich', 'Germany National Team'],
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80',
    description:
      'The fortress of FC Bayern, famous for its illuminated exterior that glows red, white, or blue depending on who is playing. One of Europe\'s most modern stadiums, the Allianz Arena has been the stage for countless Bundesliga triumphs and Champions League nights that shake the Frottmaning district to its core.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Frottmaning U-Bahn',
    transitInfo:
      'Frottmaning U-Bahn station (U6) is directly connected via a walkway. Match-day shuttle buses run from Marienplatz. The journey from central Munich takes about 20 minutes by U-Bahn.',
    fanTips: [
      'The Sudkurve (South Curve) is where the Bayern ultras create a wall of noise',
      'Arrive early to see the exterior light show — it changes color before kickoff',
      'FC Bayern Museum inside the stadium is world-class and open on non-match days',
    ],
    events: [],
  },
  {
    slug: 'olympiapark-munich',
    name: 'Olympiapark Munich',
    citySlug: 'munich',
    city: 'Munich',
    type: 'stadium',
    capacity: 69000,
    sport: 'Multi-sport',
    teams: [],
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    description:
      '1972 Olympics legacy venue, now hosts concerts and events beneath the iconic tent-like acrylic glass roof designed by Frei Otto. The Olympiastadion and surrounding park remain one of Munich\'s most beloved landmarks, offering panoramic views from the Olympic Tower and a sweeping landscape that blends sport, culture, and nature.',
    nearbyHostels: 2,
    walkingDistance: '8 min from Olympiazentrum U-Bahn',
    transitInfo:
      'Olympiazentrum U-Bahn station (U3) is an 8-minute walk. Tram 20 and 21 also stop nearby. The park is easily accessible by bicycle from central Munich.',
    fanTips: [
      'Climb the Olympic Tower for incredible views of the Alps on clear days',
      'Summer open-air concerts in the stadium are magical under the tent roof',
      'The Olympic Park swimming pool and ice rink are open to the public year-round',
    ],
    events: [],
  },
  {
    slug: 'zenith-munich',
    name: 'Zenith Munich',
    citySlug: 'munich',
    city: 'Munich',
    type: 'concert-hall',
    capacity: 7000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    description:
      'Former industrial hall turned iconic Munich concert venue, the Zenith occupies a converted railway maintenance depot in the Freimann district. Its raw industrial character with exposed steel beams and cavernous spaces creates an atmosphere that modern purpose-built venues simply cannot replicate, making it the favorite venue of Munich\'s alternative music scene.',
    nearbyHostels: 2,
    walkingDistance: '12 min from Freimann U-Bahn',
    transitInfo:
      'Freimann U-Bahn station (U6) is about a 12-minute walk. Bus line 178 stops closer to the venue. Taxis are readily available after shows. The venue is in the northern Freimann industrial district.',
    fanTips: [
      'The standing-room floor is where the energy is — arrive early for a good spot',
      'Dress in layers, the industrial hall can get hot during packed shows',
      'Grab a pre-show beer at one of the Augustiner beer halls in the city center before heading north',
    ],
    events: [],
  },

  // ===== ISTANBUL =====
  {
    slug: 'turk-telekom-stadium',
    name: 'Turk Telekom Stadium',
    citySlug: 'istanbul',
    city: 'Istanbul',
    type: 'stadium',
    capacity: 52000,
    sport: 'Football',
    teams: ['Galatasaray'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Hell on Earth for visiting teams, volcanic Turkish atmosphere defines every match at Galatasaray\'s fortress in the Sariyer district. The steep bowl design amplifies the thunderous noise of 52,000 passionate fans waving flags, lighting flares, and chanting in unison, creating one of the most intimidating environments in world football.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Seyrantepe metro',
    transitInfo:
      'Seyrantepe metro station (M7) is about a 15-minute walk. Match-day shuttle buses run from Taksim Square and Kabatas. Traffic on match days can be severe, so metro is strongly recommended.',
    fanTips: [
      'The atmosphere is genuinely overwhelming — embrace the noise and energy',
      'Do NOT wear blue or navy near the stadium — those are Fenerbahce colors',
      'Turkish tea vendors outside the stadium are part of the pre-match ritual',
    ],
    events: [],
  },
  {
    slug: 'sukru-saracoglu',
    name: 'Sukru Saracoglu Stadium',
    citySlug: 'istanbul',
    city: 'Istanbul',
    type: 'stadium',
    capacity: 50000,
    sport: 'Football',
    teams: ['Fenerbahce'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'The Kadikoy fortress on Istanbul\'s Asian side, Fenerbahce\'s home ground is one of the most feared destinations in European football. The roar of 50,000 Yellow Canaries reverberates across the Bosphorus, and the Intercontinental Derby against Galatasaray is one of the fiercest rivalries in all of sport.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Kadikoy ferry terminal',
    transitInfo:
      'Kadikoy metro station (M4) and Marmaray station are within walking distance. The Kadikoy ferry from Eminonu is the most scenic route. Metrobus stops at Sogutlucesme for connections from the European side.',
    fanTips: [
      'Take the ferry from Eminonu to Kadikoy for the most atmospheric matchday journey',
      'Kadikoy\'s Carsi market area has incredible street food for pre-match fuel',
      'The GFB (Genç Fenerbahçeliler) section behind the goal is deafeningly loud',
    ],
    events: [],
  },
  {
    slug: 'vodafone-park',
    name: 'Vodafone Park',
    citySlug: 'istanbul',
    city: 'Istanbul',
    type: 'stadium',
    capacity: 42000,
    sport: 'Football',
    teams: ['Besiktas'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Stunning Bosphorus-adjacent arena with incredible acoustics, Besiktas\'s Vodafone Park occupies one of the most dramatic locations in world football. Perched between the Bosphorus strait and the steep Besiktas hillside, the compact stadium amplifies noise to ear-splitting levels, earning it a reputation as one of the loudest grounds on the planet.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Besiktas ferry terminal',
    transitInfo:
      'Besiktas ferry terminal and bus hub are a 5-minute walk. Kabatas tram stop (T1) connects to Sultanahmet and the old city. Dolmabahce Palace is right next door.',
    fanTips: [
      'Combine match day with a visit to the stunning Dolmabahce Palace next door',
      'The Carsi ultras group in the closed end creates a deafening atmosphere',
      'Post-match fish sandwich from the Besiktas waterfront vendors is essential',
    ],
    events: [],
  },

  // ===== MANCHESTER =====
  {
    slug: 'old-trafford',
    name: 'Old Trafford',
    citySlug: 'manchester',
    city: 'Manchester',
    type: 'stadium',
    capacity: 74310,
    sport: 'Football',
    teams: ['Manchester United'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Theatre of Dreams — English football\'s most iconic ground. Old Trafford has been the home of Manchester United since 1910, and its 74,310 capacity makes it the largest club ground in the UK. From the Munich Tunnel to the Stretford End, every corner of this cathedral of football drips with history, drama, and the ghosts of Best, Charlton, and Law.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Old Trafford tram stop',
    transitInfo:
      'Old Trafford Metrolink tram stop is a 15-minute walk along Sir Matt Busby Way. Exchange Quay tram stop is also walkable. Special match-day buses run from Piccadilly and Victoria stations.',
    fanTips: [
      'The Stretford End is the vocal heart of Old Trafford — soak in the pre-match build up',
      'Walk down Sir Matt Busby Way to see the Holy Trinity statue and Munich Clock memorial',
      'The stadium megastore is the largest club shop in the world',
    ],
    events: [],
  },
  {
    slug: 'etihad-stadium',
    name: 'Etihad Stadium',
    citySlug: 'manchester',
    city: 'Manchester',
    type: 'stadium',
    capacity: 53400,
    sport: 'Football',
    teams: ['Manchester City'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'The home of the Premier League\'s dominant force, the Etihad Stadium in east Manchester was built for the 2002 Commonwealth Games before becoming Manchester City\'s home. The ongoing expansion will push capacity beyond 60,000, reflecting the club\'s meteoric rise under Pep Guardiola and Abu Dhabi ownership.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Etihad Campus tram stop',
    transitInfo:
      'Etihad Campus Metrolink tram stop is a 10-minute walk. Ashburys train station is also nearby. Match-day shuttle buses run from Piccadilly station. The stadium is in the Sportcity complex in east Manchester.',
    fanTips: [
      'The South Stand (Colin Bell Stand) is where the most vocal City fans gather',
      'Explore the Sportcity complex including the National Cycling Centre before the match',
      'The Ashton Canal towpath is a pleasant pre-match walk from the city center',
    ],
    events: [],
  },
  {
    slug: 'ao-arena-manchester',
    name: 'AO Arena',
    citySlug: 'manchester',
    city: 'Manchester',
    type: 'arena',
    capacity: 21000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Manchester\'s premier indoor venue for concerts, basketball and boxing, the AO Arena sits at the heart of the city next to Victoria station. One of Europe\'s busiest arenas, it hosts over 200 events per year and has welcomed everyone from Oasis to the UFC, maintaining Manchester\'s reputation as the UK\'s second city of music and sport.',
    nearbyHostels: 3,
    walkingDistance: '2 min from Manchester Victoria station',
    transitInfo:
      'Manchester Victoria station (rail and Metrolink tram) is directly adjacent. The venue is a 10-minute walk from Piccadilly station. Multiple bus routes serve the area via Deansgate and Market Street.',
    fanTips: [
      'The Northern Quarter pubs and bars are a short walk for pre-show drinks',
      'Standing floor sections at concerts get very packed — arrive early for barrier spots',
      'Combine a show with exploring Manchester\'s legendary music scene in the Northern Quarter',
    ],
    events: [],
  },

  // ===== LIVERPOOL =====
  {
    slug: 'anfield',
    name: 'Anfield',
    citySlug: 'liverpool',
    city: 'Liverpool',
    type: 'stadium',
    capacity: 61000,
    sport: 'Football',
    teams: ['Liverpool FC'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'You\'ll Never Walk Alone echoing under the floodlights — there is no more spine-tingling moment in football than the Kop singing its anthem before a big European night at Anfield. Liverpool FC\'s home since 1892, the recently expanded stadium now holds 61,000 fans whose collective voice has inspired some of the most dramatic comebacks in Champions League history.',
    nearbyHostels: 2,
    walkingDistance: '20 min walk from Liverpool Lime Street',
    transitInfo:
      'Buses 26 and 27 from Liverpool city center stop right outside the ground. Sandhills station (Merseyrail Northern Line) is a 20-minute walk. Match-day shuttle buses run from St George\'s Hall in the city center.',
    fanTips: [
      'Stand on the Kop if you can — it is the most famous terrace in football',
      'Arrive 30 minutes before kickoff to hear You\'ll Never Walk Alone at full volume',
      'The Arkles pub and The Albert on Walton Breck Road are classic pre-match stops',
    ],
    events: [],
  },
  {
    slug: 'goodison-park',
    name: 'Goodison Park',
    citySlug: 'liverpool',
    city: 'Liverpool',
    type: 'stadium',
    capacity: 39572,
    sport: 'Football',
    teams: ['Everton FC'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Grand Old Lady, one of football\'s most traditional grounds. Goodison Park has been Everton\'s home since 1892 and is one of the last classic English football grounds with stands tight to the pitch. The Gwladys Street End creates a formidable atmosphere, and the Merseyside Derby against Liverpool is one of the most passionate fixtures in the English calendar.',
    nearbyHostels: 2,
    walkingDistance: '20 min walk from Kirkdale station',
    transitInfo:
      'Kirkdale station (Merseyrail Northern Line) is a 20-minute walk. Buses 19, 20, and 21 from the city center stop on Walton Lane nearby. Match-day parking is limited in the surrounding residential streets.',
    fanTips: [
      'The Gwladys Street End is Everton\'s vocal heartbeat — sing along with Z-Cars',
      'The Winslow pub on Goodison Road is the legendary pre-match gathering spot',
      'Visit while you can — Everton are moving to the new Bramley-Moore Dock stadium soon',
    ],
    events: [],
  },
  {
    slug: 'acc-liverpool',
    name: 'ACC Liverpool',
    citySlug: 'liverpool',
    city: 'Liverpool',
    type: 'arena',
    capacity: 11000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Liverpool\'s waterfront arena for concerts and major events, the ACC Liverpool sits on the iconic Kings Dock beside the Mersey with stunning views across the river. Part of the ACC Liverpool campus that includes the Convention Centre, it has hosted everything from MTV Europe Music Awards to major concert tours, complementing the city\'s legendary music heritage.',
    nearbyHostels: 3,
    walkingDistance: '10 min from James Street station',
    transitInfo:
      'James Street station (Merseyrail) is a 10-minute walk along the waterfront. Liverpool Lime Street mainline station is 15 minutes on foot. Buses along the Strand serve the Kings Dock area.',
    fanTips: [
      'Walk along the Albert Dock waterfront before the show for stunning Mersey views',
      'The Baltic Triangle neighborhood nearby has excellent independent bars and restaurants',
      'Liverpool\'s music heritage makes every concert crowd here extra passionate',
    ],
    events: [],
  },

  // ===== LISBON =====
  {
    slug: 'estadio-da-luz',
    name: 'Estadio da Luz',
    citySlug: 'lisbon',
    city: 'Lisbon',
    type: 'stadium',
    capacity: 64642,
    sport: 'Football',
    teams: ['SL Benfica'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Stadium of Light, one of Europe\'s most atmospheric grounds. Benfica\'s 64,000-seat cathedral in the north of Lisbon is a fortress where the Eagles\' faithful create a deafening wall of red that has terrified visiting teams for decades. Built for Euro 2004, the stadium\'s dramatic swooping roof and steep stands create an amphitheater of pure footballing passion.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Colégio Militar/Luz metro',
    transitInfo:
      'Colégio Militar/Luz metro station (Blue Line) is directly adjacent. Alto dos Moinhos station (Blue Line) is also walkable. Match-day buses run from Rossio and Marquês de Pombal in the city center.',
    fanTips: [
      'The Topo Norte (North End) ultras create non-stop noise — it rivals any atmosphere in Europe',
      'Visit the Benfica Museum inside the stadium, one of the best club museums in the world',
      'Pre-match bifanas (pork sandwiches) from vendors outside are a must',
    ],
    events: [],
  },
  {
    slug: 'estadio-jose-alvalade',
    name: 'Estadio Jose Alvalade',
    citySlug: 'lisbon',
    city: 'Lisbon',
    type: 'stadium',
    capacity: 50095,
    sport: 'Football',
    teams: ['Sporting CP'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'The Green Cathedral of Portuguese football, Sporting CP\'s home since 2003. The Alvalade stadium in northern Lisbon is a modern masterpiece with its distinctive four separate stands that create incredible acoustics. The Torcida Verde section behind the goal drives the atmosphere during Lisbon derbies against Benfica, one of Europe\'s most heated rivalries.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Campo Grande metro',
    transitInfo:
      'Campo Grande metro station (Green and Yellow lines) is a 5-minute walk. The stadium is adjacent to the University of Lisbon campus. Several bus routes serve the Alvalade neighborhood.',
    fanTips: [
      'The Lisbon Derby between Sporting and Benfica is one of Portugal\'s most intense matches',
      'Bancada Topo Sul is where the Juventude Leonina ultras generate the atmosphere',
      'The Alvalade neighborhood has traditional Portuguese tascas perfect for pre-match dining',
    ],
    events: [],
  },
  {
    slug: 'altice-arena-lisbon',
    name: 'Altice Arena',
    citySlug: 'lisbon',
    city: 'Lisbon',
    type: 'arena',
    capacity: 20000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Southern Europe\'s largest indoor arena by the Tagus River, the Altice Arena was built for Expo 98 in Lisbon\'s modern Parque das Nacoes district. With 20,000 capacity, it hosts every major international tour, Eurovision-class events, and sporting spectacles. The waterfront location and surrounding dining and shopping make it a destination in its own right.',
    nearbyHostels: 3,
    walkingDistance: '5 min from Oriente station',
    transitInfo:
      'Oriente station (Metro Red Line, national rail, and bus) is a 5-minute walk through the Vasco da Gama shopping center. The station connects to trains from Porto and the Algarve.',
    fanTips: [
      'Parque das Nacoes waterfront restaurants are excellent for pre-show dining',
      'The Oceanarium next door is one of Europe\'s best — visit earlier in the day',
      'The cable car along the Tagus River offers stunning sunset views before evening events',
    ],
    events: [],
  },

  // ===== NAPLES =====
  {
    slug: 'stadio-diego-maradona',
    name: 'Stadio Diego Armando Maradona',
    citySlug: 'naples',
    city: 'Naples',
    type: 'stadium',
    capacity: 54726,
    sport: 'Football',
    teams: ['SSC Napoli'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Renamed for the god of Naples, Maradona\'s spiritual home. When Napoli won the Scudetto in 2023, 54,000 fans in this stadium and millions across the city celebrated as if a saint had returned. The raw, unfiltered passion of the Neapolitan faithful makes this one of the most emotional sporting experiences on Earth, a venue where football transcends sport and becomes religion.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Campi Flegrei station',
    transitInfo:
      'Campi Flegrei station (Cumana railway and Metro Line 2) is a 10-minute walk. Mostra metro station (Line 6) is also close. Match-day shuttle buses run from Piazza Garibaldi near the central station.',
    fanTips: [
      'Curva B is the legendary south end where Napoli ultras create an earthquake of noise',
      'Maradona murals and shrines are scattered across the city — explore the Quartieri Spagnoli',
      'Pre-match pizza from the Fuorigrotta neighborhood pizzerias is an essential ritual',
    ],
    events: [],
  },
  {
    slug: 'palavesuvio',
    name: 'PalaVesuvio',
    citySlug: 'naples',
    city: 'Naples',
    type: 'arena',
    capacity: 6000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'Multi-sport arena in the shadow of Vesuvius, the PalaVesuvio in the eastern Ponticelli district hosts basketball, volleyball, boxing, and indoor concerts. The intimate 6,000-seat venue delivers a raw Neapolitan atmosphere where passionate southern Italian fans bring incredible energy to every event.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Ponticelli bus stop',
    transitInfo:
      'Bus routes from Piazza Garibaldi central station serve the Ponticelli area. The venue is in eastern Naples, accessible by car via the Tangenziale ring road. Taxis from the city center take about 20 minutes.',
    fanTips: [
      'Basketball and volleyball events here have surprisingly intense atmospheres',
      'The venue is off the tourist trail — expect an authentic Neapolitan experience',
      'Grab a sfogliatella pastry from a nearby bakery before heading to the event',
    ],
    events: [],
  },
  {
    slug: 'arena-flegrea',
    name: 'Arena Flegrea',
    citySlug: 'naples',
    city: 'Naples',
    type: 'concert-hall',
    capacity: 6000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    description:
      'Open-air amphitheater for summer concerts in Fuorigrotta, the Arena Flegrea sits within the Mostra d\'Oltremare exhibition complex near the Stadio Maradona. Originally built in 1940 and recently restored, this stunning venue hosts summer concert series under the Naples stars with the warm Mediterranean breeze adding magic to every performance.',
    nearbyHostels: 2,
    walkingDistance: '8 min from Campi Flegrei station',
    transitInfo:
      'Campi Flegrei station (Cumana railway and Metro Line 2) is an 8-minute walk. Same transport connections as the nearby Stadio Maradona. The venue is within the Mostra d\'Oltremare exhibition grounds.',
    fanTips: [
      'Summer evening shows under the Naples sky are genuinely magical experiences',
      'Bring a light jacket — even Mediterranean summer evenings can cool down',
      'Combine a concert with visiting the Fuorigrotta neighborhood\'s excellent pizzerias',
    ],
    events: [],
  },

  // ===== GLASGOW =====
  {
    slug: 'celtic-park',
    name: 'Celtic Park',
    citySlug: 'glasgow',
    city: 'Glasgow',
    type: 'stadium',
    capacity: 60411,
    sport: 'Football',
    teams: ['Celtic FC'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Paradise — one of the loudest stadiums in world football. Celtic Park in the East End of Glasgow holds 60,411 fans whose collective voice has been measured at record-breaking decibel levels. Champions League anthem nights at Celtic Park are legendary, and the Green Brigade ultras in Section 111 create tifos and non-stop singing that make this a bucket-list venue for every football fan.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Bellgrove station',
    transitInfo:
      'Bellgrove station (ScotRail) is a 15-minute walk. Dalmarnock station is also nearby. Match-day buses run from George Square in the city center. The stadium is in the Parkhead area of Glasgow\'s East End.',
    fanTips: [
      'Champions League nights at Celtic Park are a once-in-a-lifetime atmosphere',
      'The Green Brigade in Section 111 create spectacular tifos and choreography',
      'Bairds Bar and The Hoops Bar on the Gallowgate are famous Celtic pubs',
    ],
    events: [],
  },
  {
    slug: 'ibrox-stadium',
    name: 'Ibrox Stadium',
    citySlug: 'glasgow',
    city: 'Glasgow',
    type: 'stadium',
    capacity: 50817,
    sport: 'Football',
    teams: ['Rangers FC'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'The iconic blue fortress with traditional brick facades, Ibrox Stadium has been Rangers FC\'s home since 1899. The listed-building main stand designed by Archibald Leitch is an architectural gem, and the passionate Rangers support fills all 50,817 seats with noise and fervor. The Old Firm derby against Celtic is the most intense club rivalry in world football.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Ibrox subway station',
    transitInfo:
      'Ibrox subway station (Glasgow Subway) is a 5-minute walk. Cessnock subway station is also close. Match-day buses run from the city center. The stadium is in the Govan area, south of the River Clyde.',
    fanTips: [
      'The Copland Road End is the vocal home of the Rangers faithful',
      'The Bill Struth Main Stand facade is a beautiful piece of football architecture',
      'Louden Tavern on Duke Street is the most famous Rangers pub in Glasgow',
    ],
    events: [],
  },
  {
    slug: 'ovo-hydro',
    name: 'OVO Hydro',
    citySlug: 'glasgow',
    city: 'Glasgow',
    type: 'arena',
    capacity: 14300,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Scotland\'s largest entertainment venue on the Clyde waterfront, the OVO Hydro has become one of the busiest arenas in the world since opening in 2013. Its distinctive silver dome shape sits alongside the SEC Centre and Armadillo on the banks of the River Clyde, hosting major music tours, comedy shows, and sporting events that draw audiences from across Scotland.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Exhibition Centre station',
    transitInfo:
      'Exhibition Centre station (ScotRail) is a 10-minute walk along the Clyde. Cessnock and Kinning Park subway stations are also accessible. The Clyde waterfront walkway connects to the city center.',
    fanTips: [
      'Glasgow audiences are famously enthusiastic — expect incredible crowd energy',
      'The Finnieston neighborhood nearby has excellent restaurants and craft beer bars',
      'Combine a show with a walk along the Clyde Walkway for stunning views',
    ],
    events: [],
  },

  // ===== SEOUL =====
  {
    slug: 'seoul-world-cup-stadium',
    name: 'Seoul World Cup Stadium',
    citySlug: 'seoul',
    city: 'Seoul',
    type: 'stadium',
    capacity: 66704,
    sport: 'Football',
    teams: ['FC Seoul'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      '2002 World Cup legacy venue with stunning architecture inspired by traditional Korean kite design. Home to FC Seoul, this 66,704-seat stadium in Mapo-gu hosted the World Cup semi-final where South Korea made their historic run. The surrounding World Cup Park and Haneul Park skyline garden make it one of Asia\'s most picturesque sporting venues.',
    nearbyHostels: 2,
    walkingDistance: '5 min from World Cup Stadium station',
    transitInfo:
      'World Cup Stadium station (Metro Line 6 and Airport Railroad) is directly connected. The stadium is in the Sangam-dong digital media district. Multiple bus routes serve the area from Hongdae and central Seoul.',
    fanTips: [
      'FC Seoul\'s Red Devils supporters create a coordinated chanting atmosphere',
      'Visit Haneul Park on the hill behind the stadium for stunning sunset views',
      'The nearby Sangam-dong area has excellent Korean BBQ restaurants for pre-match feasts',
    ],
    events: [],
  },
  {
    slug: 'jamsil-baseball-stadium',
    name: 'Jamsil Baseball Stadium',
    citySlug: 'seoul',
    city: 'Seoul',
    type: 'stadium',
    capacity: 25000,
    sport: 'Baseball',
    teams: ['LG Twins', 'Doosan Bears'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Heart of Korean baseball culture, packed and electric. Jamsil Baseball Stadium in the Songpa district is home to both the LG Twins and Doosan Bears, and Korean baseball games are an experience unlike any other — organized cheering sections with dedicated cheerleaders and drummers turn every game into a festival of food, fried chicken, and fanatical singing.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Sports Complex station',
    transitInfo:
      'Sports Complex station (Metro Lines 2 and 9) is a 10-minute walk. The stadium sits within the Jamsil Sports Complex alongside the Olympic Stadium. Buses from Gangnam and central Seoul serve the area.',
    fanTips: [
      'Buy fried chicken and beer from vendors outside — it is the Korean baseball tradition',
      'Each team has organized cheer squads with songs for every batter — join in',
      'Sit in the outfield bleachers for the most energetic fan experience',
    ],
    events: [],
  },
  {
    slug: 'gocheok-sky-dome',
    name: 'Gocheok Sky Dome',
    citySlug: 'seoul',
    city: 'Seoul',
    type: 'arena',
    capacity: 17000,
    sport: 'Baseball',
    teams: ['Kiwoom Heroes'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Korea\'s only domed baseball stadium, also hosts K-pop events and major concerts. The Gocheok Sky Dome in Guro-gu is home to the Kiwoom Heroes and has become a premier concert venue for K-pop superstars. The enclosed dome creates an intense atmosphere where the sound of 17,000 cheering fans reverberates off the ceiling.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Guil station',
    transitInfo:
      'Guil station (Metro Line 1) is about a 10-minute walk. Sindorim station (Lines 1 and 2) is also accessible. The stadium is in the Guro district of southwestern Seoul.',
    fanTips: [
      'K-pop concerts here are incredible — the dome amplifies the fan chants to deafening levels',
      'Korean baseball food culture includes fried chicken, dried squid, and soju',
      'The dome means games happen rain or shine — no weather worries',
    ],
    events: [],
  },

  // ===== MELBOURNE =====
  {
    slug: 'melbourne-cricket-ground',
    name: 'Melbourne Cricket Ground',
    citySlug: 'melbourne',
    city: 'Melbourne',
    type: 'stadium',
    capacity: 100024,
    sport: 'Cricket',
    teams: ['Melbourne Stars', 'Melbourne Renegades'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'The MCG — Australia\'s sporting cathedral, largest in the Southern Hemisphere. With a capacity of over 100,000, the Melbourne Cricket Ground is hallowed ground for both cricket and Australian Rules Football. Boxing Day Test matches, AFL Grand Finals, and historic moments from the 1956 and 2006 Olympics have made the MCG the beating heart of Australian sport for over 170 years.',
    nearbyHostels: 3,
    walkingDistance: '5 min from Richmond station',
    transitInfo:
      'Richmond station (Metro Trains) is a 5-minute walk across the Yarra parklands. Jolimont station is even closer. Trams 48 and 75 stop along Wellington Parade. The MCG is a 10-minute walk from Flinders Street station through the parks.',
    fanTips: [
      'Boxing Day Test (cricket) is the must-attend event — 90,000 fans in summer sunshine',
      'AFL Grand Final day in September is a citywide festival — soak it all in',
      'The MCG Museum and guided tours are excellent on non-event days',
    ],
    events: [],
  },
  {
    slug: 'marvel-stadium',
    name: 'Marvel Stadium',
    citySlug: 'melbourne',
    city: 'Melbourne',
    type: 'stadium',
    capacity: 53359,
    sport: 'AFL',
    teams: ['Western Bulldogs', 'North Melbourne', 'St Kilda'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Retractable roof stadium in Melbourne\'s Docklands, Marvel Stadium is the multi-purpose home of several AFL clubs and hosts major concerts, rugby, and soccer events. Its modern design with a closeable roof ensures events happen regardless of Melbourne\'s famously unpredictable weather, and the surrounding Docklands precinct offers waterfront dining and entertainment.',
    nearbyHostels: 2,
    walkingDistance: '8 min from Southern Cross station',
    transitInfo:
      'Southern Cross station (Metro Trains, V/Line regional) is an 8-minute walk through the Docklands. Trams 70 and 86 stop at the stadium. The venue sits on the western edge of Melbourne\'s CBD along the waterfront.',
    fanTips: [
      'AFL footy at Marvel is a great introduction to Aussie rules in an indoor setting',
      'The Docklands waterfront restaurants are excellent for pre-match dining',
      'When the roof is open, sunset views over the harbor are spectacular',
    ],
    events: [],
  },
  {
    slug: 'rod-laver-arena',
    name: 'Rod Laver Arena',
    citySlug: 'melbourne',
    city: 'Melbourne',
    type: 'arena',
    capacity: 14820,
    sport: 'Tennis',
    teams: [],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Home of the Australian Open, one of tennis\' four Grand Slams. Rod Laver Arena in Melbourne Park hosts the first major of the tennis season every January, where the world\'s best players battle in the Australian summer heat. The retractable roof allows play in all conditions, and the passionate Melbourne crowds create an atmosphere that players consistently rank among the best in tennis.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Richmond station',
    transitInfo:
      'Richmond station (Metro Trains) is about a 10-minute walk. Tram 70 stops at Melbourne Park. During the Australian Open, special shuttle trams run from Flinders Street station directly to the venue.',
    fanTips: [
      'Australian Open ground passes offer incredible value — you can watch on outer courts all day',
      'Night sessions under the lights at Rod Laver Arena are electric',
      'The surrounding Melbourne Park precinct has multiple courts and a festival atmosphere during the Open',
    ],
    events: [],
  },

  // ===== SAO PAULO =====
  {
    slug: 'neo-quimica-arena',
    name: 'Neo Quimica Arena',
    citySlug: 'sao-paulo',
    city: 'Sao Paulo',
    type: 'stadium',
    capacity: 49205,
    sport: 'Football',
    teams: ['Corinthians'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Built for the 2014 World Cup, Corinthians\' fortress in Itaquera on Sao Paulo\'s east side. The Fiel Torcida (Faithful Fans) of Corinthians are among the most passionate in Brazilian football, and their 49,000-seat home rocks with samba drums, coordinated chanting, and raw emotion that reflects the working-class heart of South America\'s largest city.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Corinthians-Itaquera station',
    transitInfo:
      'Corinthians-Itaquera station (Metro Line 3 - Red and CPTM Line 11) is a 10-minute walk. The station connects directly to the city center. Match-day shuttle buses run from the station to the stadium gates.',
    fanTips: [
      'The Fiel Torcida in the east stand behind the goal creates a non-stop wall of noise',
      'Corinthians vs Palmeiras (the Paulista Derby) is Sao Paulo\'s biggest match',
      'Street food vendors around Itaquera station serve excellent pasteis and coxinhas',
    ],
    events: [],
  },
  {
    slug: 'allianz-parque-sp',
    name: 'Allianz Parque',
    citySlug: 'sao-paulo',
    city: 'Sao Paulo',
    type: 'stadium',
    capacity: 43713,
    sport: 'Football',
    teams: ['Palmeiras'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'Modern multi-use arena in the heart of Sao Paulo, Allianz Parque is the stunning home of Palmeiras and one of the finest stadiums in South America. The retractable pitch allows the venue to host major concerts alongside football, and the Mancha Verde ultras create an atmosphere of green smoke, giant flags, and thunderous drumming that embodies Brazilian football culture.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Palmeiras-Barra Funda station',
    transitInfo:
      'Palmeiras-Barra Funda station (Metro Line 3 and CPTM) is a 15-minute walk. The stadium is in the Perdizes/Agua Branca neighborhood. Match-day buses run from major metro stations.',
    fanTips: [
      'Mancha Alviverde ultras behind the goal create incredible choreographed displays',
      'The stadium also hosts major international concert tours with excellent production',
      'Restaurants along Rua Turiassu serve traditional Sao Paulo bar food before matches',
    ],
    events: [],
  },
  {
    slug: 'morumbi-stadium',
    name: 'Morumbi Stadium',
    citySlug: 'sao-paulo',
    city: 'Sao Paulo',
    type: 'stadium',
    capacity: 66795,
    sport: 'Football',
    teams: ['Sao Paulo FC'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'The Tricolor citadel in the Morumbi neighborhood, Sao Paulo FC\'s home is one of the largest and most traditional stadiums in Brazil. The open-air design with its towering stands creates a dramatic amphitheater effect, and the passionate Torcida Independente fills the ground with red, white, and black on match days. Morumbi has hosted Copa Libertadores finals and remains a fortress of Brazilian football.',
    nearbyHostels: 2,
    walkingDistance: '20 min from Morumbi station',
    transitInfo:
      'Morumbi CPTM station is about a 20-minute walk. Bus routes from Pinheiros and the city center serve the area. The stadium is in the upscale Morumbi neighborhood on Sao Paulo\'s south side.',
    fanTips: [
      'The Torcida Independente in the north stand are Sao Paulo FC\'s most vocal supporters',
      'Morumbi neighborhood has upscale restaurants for a more refined pre-match meal',
      'The stadium\'s towering open stands create impressive acoustics when full',
    ],
    events: [],
  },

  // ===== CHICAGO =====
  {
    slug: 'wrigley-field',
    name: 'Wrigley Field',
    citySlug: 'chicago',
    city: 'Chicago',
    type: 'stadium',
    capacity: 41649,
    sport: 'Baseball',
    teams: ['Chicago Cubs'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'The Friendly Confines — ivy-covered walls since 1914. Wrigley Field is baseball\'s most beloved ballpark, a living museum where the hand-operated scoreboard, the rooftop bleachers across Waveland Avenue, and the ivy-covered outfield walls transport you to a different era. When the Cubs broke their 108-year championship drought in 2016, Wrigleyville became the center of the sporting universe.',
    nearbyHostels: 3,
    walkingDistance: '5 min from Addison Red Line station',
    transitInfo:
      'Addison station (CTA Red Line) is directly across the street. The 152 Addison bus also serves the area. Wrigleyville neighborhood surrounds the ballpark with bars, restaurants, and shops.',
    fanTips: [
      'Sit in the bleachers for the authentic Wrigley experience — sun, beer, and ivy views',
      'Murphy\'s Bleachers and Sluggers are the classic pre-game bars on Clark Street',
      'Seventh inning stretch with "Take Me Out to the Ball Game" is a sacred tradition',
    ],
    events: [],
  },
  {
    slug: 'united-center',
    name: 'United Center',
    citySlug: 'chicago',
    city: 'Chicago',
    type: 'arena',
    capacity: 20917,
    sport: 'Basketball',
    teams: ['Chicago Bulls', 'Chicago Blackhawks'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Where Jordan flew and the Madhouse on Madison lives. The United Center is the house that Michael Jordan built, home to both the Chicago Bulls and the Blackhawks. The iconic MJ statue outside and the championship banners inside remind you that this is hallowed ground for basketball. Blackhawks games bring their own brand of passionate Chicago hockey culture to the West Side venue.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Illinois Medical District Blue Line',
    transitInfo:
      'CTA buses 19 and 20 stop at the venue. Illinois Medical District station (Blue Line) is about a 15-minute walk. Match-day parking lots surround the arena. Ride-shares are popular for events.',
    fanTips: [
      'Take a photo with the Michael Jordan statue outside the east entrance',
      'Bulls games still play the iconic intro music — arrive early to experience it',
      'Blackhawks playoff atmosphere rivals anything in the NHL',
    ],
    events: [],
  },
  {
    slug: 'soldier-field',
    name: 'Soldier Field',
    citySlug: 'chicago',
    city: 'Chicago',
    type: 'stadium',
    capacity: 61500,
    sport: 'Football',
    teams: ['Chicago Bears'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Lakefront landmark hosting Bears games since 1971. Soldier Field sits on Chicago\'s Museum Campus along Lake Michigan, and its distinctive colonnaded exterior mixed with the modern renovation creates a unique architectural contrast. Freezing December games with the wind howling off the lake are the quintessential Bears experience, embodying the blue-collar grit that defines Chicago sports.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Roosevelt Red Line station',
    transitInfo:
      'Roosevelt station (CTA Red/Orange/Green Lines) is about a 15-minute walk through the Museum Campus. CTA bus 146 runs directly to the stadium. Metra Electric trains stop at Museum Campus/11th Street station.',
    fanTips: [
      'Tailgating in the south lots starts hours before kickoff — bring layers and a grill',
      'Lake Michigan winds make late-season games bitterly cold — dress for a Chicago winter',
      'Combine a game with the nearby Field Museum, Shedd Aquarium, or Adler Planetarium',
    ],
    events: [],
  },

  // ===== MIAMI =====
  {
    slug: 'hard-rock-stadium',
    name: 'Hard Rock Stadium',
    citySlug: 'miami',
    city: 'Miami',
    type: 'stadium',
    capacity: 65326,
    sport: 'Football',
    teams: ['Miami Dolphins'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Also hosts the Miami Open, F1 Grand Prix, and mega concerts. Hard Rock Stadium in Miami Gardens is one of the most versatile sporting venues in the world, transforming from NFL football to Formula 1 racing to Grand Slam tennis throughout the year. The canopy-covered renovation gives it a modern tropical feel befitting its South Florida location.',
    nearbyHostels: 2,
    walkingDistance: '20 min from Hard Rock Stadium bus terminal',
    transitInfo:
      'Dedicated express buses run from downtown Miami on event days. The stadium is in Miami Gardens, accessible via I-95 and the Palmetto Expressway. Ride-shares are the most popular option. No direct rail connection.',
    fanTips: [
      'The F1 Miami Grand Prix weekend in May is one of the hottest tickets in motorsport',
      'Dolphins tailgates in the parking lots feature Latin music and incredible Cuban food',
      'Miami Open tennis sessions offer excellent value with access to multiple courts',
    ],
    events: [],
  },
  {
    slug: 'kaseya-center',
    name: 'Kaseya Center',
    citySlug: 'miami',
    city: 'Miami',
    type: 'arena',
    capacity: 19600,
    sport: 'Basketball',
    teams: ['Miami Heat'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'White Hot atmosphere on Biscayne Bay waterfront. The Kaseya Center is home to the Miami Heat and sits in a stunning location on the waterfront of downtown Miami with views across Biscayne Bay. Heat Culture is real — the passionate fanbase, the all-white playoff dress code, and the vibrant Miami energy make every game feel like a party.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Freedom Tower Metromover',
    transitInfo:
      'Freedom Tower Metromover station is a 10-minute walk. The arena is along Biscayne Boulevard in downtown Miami. Multiple Metrobus routes serve the area. Brightline train station at MiamiCentral is also walkable.',
    fanTips: [
      'Wear all white for playoff games — it is Heat Culture tradition',
      'Biscayne Boulevard and Bayside Marketplace have great pre-game dining options',
      'The waterfront views from the arena concourse at sunset are stunning',
    ],
    events: [],
  },
  {
    slug: 'chase-stadium-miami',
    name: 'Chase Stadium',
    citySlug: 'miami',
    city: 'Miami',
    type: 'stadium',
    capacity: 21550,
    sport: 'Football',
    teams: ['Inter Miami CF'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'Messi\'s new home, the hottest ticket in American soccer. Chase Stadium in Fort Lauderdale has been transformed since Lionel Messi\'s arrival at Inter Miami, becoming a pilgrimage site for football fans from around the world. The intimate 21,550-seat venue creates a raucous atmosphere as fans from across the Americas pack in to watch the greatest player of all time.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Fort Lauderdale station',
    transitInfo:
      'The stadium is in Fort Lauderdale, accessible via I-95. Tri-Rail commuter rail stops at Fort Lauderdale station, a 15-minute walk or short ride-share away. Express buses run from downtown Miami on match days.',
    fanTips: [
      'Messi-related merchandise sells out fast — arrive early if you want to buy',
      'The Supporters Section behind the south goal has the most vocal Inter Miami fans',
      'Fort Lauderdale Beach is nearby for a pre-match afternoon in the sun',
    ],
    events: [],
  },

  // ===== CAPE TOWN =====
  {
    slug: 'cape-town-stadium',
    name: 'Cape Town Stadium',
    citySlug: 'cape-town',
    city: 'Cape Town',
    type: 'stadium',
    capacity: 55000,
    sport: 'Football',
    teams: ['Cape Town City FC'],
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
    description:
      'Built for the 2010 World Cup with a stunning Table Mountain backdrop, Cape Town Stadium in Green Point is one of the most dramatically situated sporting venues in the world. The sleek white design frames views of Table Mountain and the Atlantic Ocean, and it now hosts football matches, rugby sevens, and major concerts in what many consider the most beautiful stadium setting on Earth.',
    nearbyHostels: 3,
    walkingDistance: '15 min from Green Point bus stop',
    transitInfo:
      'MyCiTi bus routes serve the Green Point area directly. The stadium is a 15-minute walk from the V&A Waterfront. Taxis and ride-shares from the CBD take about 10 minutes. The Fan Walk from the city center is a popular match-day route.',
    fanTips: [
      'Sunset matches with Table Mountain glowing pink behind the stadium are unforgettable',
      'The V&A Waterfront nearby has excellent restaurants and bars for pre-match dining',
      'Cape Town Sevens rugby tournament in December is an incredible party atmosphere',
    ],
    events: [],
  },
  {
    slug: 'newlands-cricket',
    name: 'Newlands Cricket Ground',
    citySlug: 'cape-town',
    city: 'Cape Town',
    type: 'stadium',
    capacity: 25000,
    sport: 'Cricket',
    teams: ['Western Province', 'Cape Town Blitz'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Most picturesque cricket ground in the world below Table Mountain. Newlands has hosted Test cricket since 1889 and its setting beneath the dramatic slopes of Table Mountain and Devil\'s Peak makes it the envy of every cricket ground on the planet. The Oaks trees at one end and the vineyard-covered hills create a uniquely Cape Town cricketing experience.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Newlands station',
    transitInfo:
      'Newlands station (Metrorail Southern Line) is a 5-minute walk. The ground is in the leafy Newlands suburb. MyCiTi buses from the city center serve the area. The Constantia wine route is nearby.',
    fanTips: [
      'The Oaks section (grass embankment under the oak trees) is the iconic spot to watch from',
      'New Year Test matches in January are a Cape Town tradition — book well in advance',
      'The surrounding Newlands neighborhood has craft breweries and excellent restaurants',
    ],
    events: [],
  },
  {
    slug: 'dhl-stadium',
    name: 'DHL Stadium',
    citySlug: 'cape-town',
    city: 'Cape Town',
    type: 'stadium',
    capacity: 58000,
    sport: 'Rugby',
    teams: ['Stormers'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'The Stormers\' fortress, epic Super Rugby atmosphere. DHL Stadium (formerly Newlands Rugby) relocated to the Cape Town Stadium precinct and delivers an electric matchday experience where the passionate Western Cape rugby faithful come together. Super Rugby matches under the lights with Table Mountain looming above are a uniquely South African sporting spectacle.',
    nearbyHostels: 3,
    walkingDistance: '15 min from Green Point bus stop',
    transitInfo:
      'Same location as Cape Town Stadium in Green Point. MyCiTi bus routes serve the area. Walking from the V&A Waterfront takes about 15 minutes. The Fan Walk from the CBD is a popular route on match days.',
    fanTips: [
      'Super Rugby derbies against the Bulls and Sharks are intensely passionate affairs',
      'Braai (BBQ) tailgating in the parking areas is a South African match-day tradition',
      'The V&A Waterfront is the perfect place for post-match celebrations with craft beers',
    ],
    events: [],
  },

  // ===== BANGKOK =====
  {
    slug: 'rajamangala-stadium',
    name: 'Rajamangala Stadium',
    citySlug: 'bangkok',
    city: 'Bangkok',
    type: 'stadium',
    capacity: 49722,
    sport: 'Football',
    teams: ['Thailand National Team'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Thailand\'s national stadium, electric during international matches. Rajamangala Stadium in the Hua Mak area was built for the 1998 Asian Games and comes alive when the Thai national team plays, with passionate fans creating a wall of gold-shirted support. The stadium also hosts major concerts and international club friendlies, serving as Southeast Asia\'s premier sporting venue.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Hua Mak Airport Rail Link',
    transitInfo:
      'Hua Mak station (Airport Rail Link) is about a 15-minute walk. The stadium is in the Hua Mak sports complex area. Taxis and tuk-tuks are readily available. BTS Skytrain connections require a transfer at Phaya Thai.',
    fanTips: [
      'Thai football fans are incredibly welcoming to visiting supporters',
      'Street food vendors outside serve incredible pad thai, som tum, and mango sticky rice',
      'The tropical heat can be intense — hydrate constantly and bring a fan or small towel',
    ],
    events: [],
  },
  {
    slug: 'lumpinee-boxing-stadium',
    name: 'Lumpinee Boxing Stadium',
    citySlug: 'bangkok',
    city: 'Bangkok',
    type: 'arena',
    capacity: 5000,
    sport: 'Muay Thai',
    teams: [],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'The sacred temple of Muay Thai boxing. Lumpinee Stadium is the most prestigious Muay Thai venue in the world, where Thailand\'s national sport reaches its highest level. The atmosphere of traditional Thai music, the wai kru ram muay pre-fight ritual, and the gambling-fueled crowd energy create an experience that is simultaneously spiritual and electrifying — an absolute must for any combat sports fan visiting Bangkok.',
    nearbyHostels: 2,
    walkingDistance: '20 min from Ram Intra BTS',
    transitInfo:
      'The new Lumpinee Stadium is located on Ram Intra Road in northern Bangkok. BTS and MRT connections require a taxi or bus transfer. Taxis from central Bangkok take 30-45 minutes depending on traffic.',
    fanTips: [
      'Tuesday and Friday fight nights are the traditional big-card evenings',
      'Ringside seats offer an intense up-close experience of the fights',
      'Learn the basics of Muay Thai scoring before attending — knees and elbows score highest',
    ],
    events: [],
  },
  {
    slug: 'impact-arena-bangkok',
    name: 'Impact Arena',
    citySlug: 'bangkok',
    city: 'Bangkok',
    type: 'arena',
    capacity: 12000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'Southeast Asia\'s premier concert and entertainment venue, Impact Arena in Muang Thong Thani hosts every major international tour that passes through Bangkok. From K-pop superstars to global rock legends, the 12,000-capacity arena delivers world-class production in a modern facility that has cemented Bangkok\'s status as the entertainment capital of Southeast Asia.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Impact Challenger shuttle bus',
    transitInfo:
      'Free shuttle buses run from BTS Mo Chit station and MRT Chatuchak Park station to Impact Arena. The venue is in the Muang Thong Thani complex in Nonthaburi, north of central Bangkok. Taxis take about 30-40 minutes from downtown.',
    fanTips: [
      'Book the free shuttle bus from Mo Chit BTS station — it is the easiest way to get there',
      'Thai concert crowds are enthusiastic and well-organized with fan projects and light sticks',
      'The Impact complex has multiple dining options but street food nearby is better and cheaper',
    ],
    events: [],
  },

  // ===== MONTREAL =====
  {
    slug: 'bell-centre',
    name: 'Bell Centre',
    citySlug: 'montreal',
    city: 'Montreal',
    type: 'arena',
    capacity: 21302,
    sport: 'Hockey',
    teams: ['Montreal Canadiens'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'The cathedral of hockey, home to the most storied franchise in NHL history. The Bell Centre reverberates with over a century of Canadiens tradition, 24 Stanley Cup banners hanging from the rafters, and the passionate Habs faithful who turn every home game into a bilingual celebration of hockey culture. When the organ plays and 21,000 fans rise for "Ole Ole Ole," there is no better place to watch hockey on Earth.',
    nearbyHostels: 3,
    walkingDistance: '5 min from Lucien-L\'Allier metro',
    transitInfo:
      'Lucien-L\'Allier metro station (Orange Line) is directly connected. Bonaventure metro station is also walkable. The venue is in downtown Montreal near the financial district. Bus routes along Rene-Levesque Boulevard serve the area.',
    fanTips: [
      'The Ole Ole Ole chant when the Habs score is one of hockey\'s greatest traditions',
      'Crescent Street and Sainte-Catherine Street nearby are packed with bars on game nights',
      'Poutine from La Banquise after the game is the quintessential Montreal hockey experience',
    ],
    events: [],
  },
  {
    slug: 'saputo-stadium',
    name: 'Saputo Stadium',
    citySlug: 'montreal',
    city: 'Montreal',
    type: 'stadium',
    capacity: 19619,
    sport: 'Football',
    teams: ['CF Montreal'],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    description:
      'Intimate MLS stadium in Olympic Park with passionate supporters. Saputo Stadium sits in the shadow of the iconic Olympic Stadium tower and is home to CF Montreal, whose bilingual supporter groups create a uniquely Quebecois atmosphere. The compact 19,619-seat venue means fans are right on top of the action, and the 1642 Montreal ultras bring drums, flares, and French-language chanting.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Pie-IX metro',
    transitInfo:
      'Pie-IX metro station (Green Line) is a 5-minute walk. Viau metro station is also close. The stadium is within the Olympic Park complex alongside the Biodome and Botanical Garden. Bus routes along Sherbrooke Street serve the area.',
    fanTips: [
      'The 1642 Montreal ultras in the south end bring incredible energy with drums and tifos',
      'Combine a match with visiting the Montreal Biodome and Botanical Garden in Olympic Park',
      'Summer evening matches in Montreal are perfect — warm weather and long daylight hours',
    ],
    events: [],
  },
  {
    slug: 'circuit-gilles-villeneuve',
    name: 'Circuit Gilles Villeneuve',
    citySlug: 'montreal',
    city: 'Montreal',
    type: 'festival-grounds',
    capacity: 100000,
    sport: 'Motorsport',
    teams: [],
    image: 'https://images.unsplash.com/photo-1504817343863-5092a923803e?w=800&q=80',
    description:
      'Legendary F1 street circuit on Ile Notre-Dame, one of the best races on the calendar. The Canadian Grand Prix has been a fan favorite since 1978, with the circuit winding through the parkland of the island built for Expo 67. The Wall of Champions at the final chicane has claimed many legends, and the Montreal race weekend transforms the entire city into a massive Formula 1 festival.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Jean-Drapeau metro',
    transitInfo:
      'Jean-Drapeau metro station (Yellow Line) is on Ile Sainte-Helene, a 10-minute walk from the circuit. Special shuttle buses run during the Grand Prix weekend. The Biosphere and Parc Jean-Drapeau are adjacent.',
    fanTips: [
      'General admission at the hairpin (Turn 10) offers the best overtaking action',
      'Crescent Street in downtown Montreal becomes a massive F1 street party all weekend',
      'Bring sunscreen and water — the island has little shade and June heat can be intense',
    ],
    events: [],
  },

  // ===== MUMBAI =====
  {
    slug: 'wankhede-stadium',
    name: 'Wankhede Stadium',
    citySlug: 'mumbai',
    city: 'Mumbai',
    type: 'stadium',
    capacity: 33000,
    sport: 'Cricket',
    teams: ['Mumbai Indians'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'India\'s most iconic cricket ground, overlooking the Arabian Sea. Wankhede Stadium in South Mumbai witnessed India\'s 2011 Cricket World Cup triumph on home soil, Sachin Tendulkar\'s emotional farewell, and countless IPL thrillers. The intimate 33,000-seat venue packs an incredible punch, with Mumbai\'s passionate cricket-mad fans creating an atmosphere that overwhelms visiting teams and thrills spectators.',
    nearbyHostels: 3,
    walkingDistance: '10 min from Churchgate station',
    transitInfo:
      'Churchgate station (Western Railway) is a 10-minute walk. Marine Lines station is also close. The stadium is on D Road in the Churchgate area of South Mumbai, near Marine Drive and the Arabian Sea waterfront.',
    fanTips: [
      'IPL matches featuring Mumbai Indians are the hottest cricket tickets in India',
      'The North Stand is where the most vocal fans create a wall of noise and color',
      'Marine Drive seafront is a short walk away — perfect for a pre-match stroll at sunset',
    ],
    events: [],
  },
  {
    slug: 'dy-patil-stadium',
    name: 'DY Patil Stadium',
    citySlug: 'mumbai',
    city: 'Mumbai',
    type: 'stadium',
    capacity: 55000,
    sport: 'Cricket',
    teams: [],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Multi-sport venue in Navi Mumbai hosting IPL and international events. DY Patil Stadium\'s futuristic design and 55,000-seat capacity make it one of India\'s most impressive modern sporting venues. It has hosted IPL matches, international cricket, the 2022 Indian Super League Final, and major concerts, serving as Mumbai\'s large-capacity alternative to the more historic Wankhede.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Nerul station',
    transitInfo:
      'Nerul station (Harbour Line) is about a 15-minute walk or short auto-rickshaw ride. The stadium is in Nerul, Navi Mumbai, across the harbour from Mumbai. The Trans Harbour Link bridge provides faster road connections from South Mumbai.',
    fanTips: [
      'Auto-rickshaws from Nerul station are the easiest way to reach the stadium',
      'IPL evening matches under floodlights have an incredible party atmosphere',
      'The stadium is newer and less crowded than Wankhede — a more comfortable experience',
    ],
    events: [],
  },
  {
    slug: 'brabourne-stadium',
    name: 'Brabourne Stadium',
    citySlug: 'mumbai',
    city: 'Mumbai',
    type: 'stadium',
    capacity: 20000,
    sport: 'Cricket',
    teams: [],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'Historic cricket ground in the heart of South Mumbai, member-owned classic. Brabourne Stadium is the home of the Cricket Club of India and one of the most atmospheric small cricket grounds in the world. Its Art Deco pavilion and intimate setting next to the Arabian Sea create a throwback atmosphere that transports you to cricket\'s golden age, making it a treasured venue for purists and history lovers.',
    nearbyHostels: 2,
    walkingDistance: '8 min from Churchgate station',
    transitInfo:
      'Churchgate station (Western Railway) is an 8-minute walk. The stadium is adjacent to Wankhede Stadium on D Road in Churchgate. Marine Lines station is also nearby. Local buses along Marine Drive serve the area.',
    fanTips: [
      'The members\' pavilion is one of cricket\'s most exclusive and beautiful spectating areas',
      'The intimate setting means every seat feels close to the action',
      'Combine a visit with a walk along Marine Drive, Mumbai\'s iconic seafront promenade',
    ],
    events: [],
  },
];
