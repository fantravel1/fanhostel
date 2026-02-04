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

  // ===== MARSEILLE =====
  {
    slug: 'stade-velodrome',
    name: 'Stade V\u00e9lodrome',
    citySlug: 'marseille',
    city: 'Marseille',
    type: 'stadium',
    capacity: 67394,
    sport: 'Football',
    teams: ['Olympique de Marseille'],
    image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=800&q=80',
    description:
      'The Stade V\u00e9lodrome is the beating heart of Marseille football and one of the most intense atmospheres in European football. Home to Olympique de Marseille, the 67,394-capacity ground erupts with the passion of the Virage Sud ultras on match days. Renovated for Euro 2016, its sweeping roof and Mediterranean setting make it an unforgettable destination.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Rond-Point du Prado metro',
    transitInfo:
      'Rond-Point du Prado (M2) and Sainte-Marguerite Dromel (M2) metro stations are both within walking distance. Tram T3 also serves the area. Match-day shuttle buses run from Vieux-Port.',
    fanTips: [
      'The Virage Sud is where the ultras sit \u2014 expect non-stop singing and tifo displays',
      'Grab a pastis at one of the bars along Boulevard Michelet before the match',
      'Arrive early to soak in the pre-match atmosphere around the stadium esplanade',
    ],
    events: [],
  },
  {
    slug: 'orange-velodrome-dome',
    name: 'Orange V\u00e9lodrome Dome',
    citySlug: 'marseille',
    city: 'Marseille',
    type: 'arena',
    capacity: 8000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    description:
      'The Orange V\u00e9lodrome Dome is Marseille\'s versatile indoor arena hosting concerts, basketball games, and entertainment events. With a capacity of 8,000, the venue offers an intimate yet electric atmosphere for performances and sporting events. Located adjacent to the iconic Stade V\u00e9lodrome, it benefits from excellent transport links.',
    nearbyHostels: 2,
    walkingDistance: '12 min from Rond-Point du Prado metro',
    transitInfo:
      'Rond-Point du Prado (M2) metro station is a short walk away. Bus lines 21 and 44 serve the area directly. Tram T3 stops nearby at Sainte-Marguerite Dromel.',
    fanTips: [
      'The arena hosts Pro A basketball games \u2014 the atmosphere rivals football on big nights',
      'Check for concert listings as international acts regularly stop in Marseille',
      'Combine a visit with exploring the nearby Parc Chanot exhibition grounds',
    ],
    events: [],
  },
  {
    slug: 'dock-des-suds',
    name: 'Dock des Suds',
    citySlug: 'marseille',
    city: 'Marseille',
    type: 'concert-hall',
    capacity: 5000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    description:
      'Dock des Suds is Marseille\'s legendary music and festival venue located in the port district. With a 5,000 capacity across indoor and outdoor stages, it hosts the famous Fiesta des Suds and countless live music events year-round. The industrial-chic dockside setting gives it a raw, authentic Marseille atmosphere.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Joliette metro',
    transitInfo:
      'Joliette metro station (M2) is the closest stop, about a 15-minute walk. Bus 35 runs along the port area. The venue is walkable from the Vieux-Port in about 25 minutes along the waterfront.',
    fanTips: [
      'Fiesta des Suds in October is a must \u2014 world music, rock, and electronic acts over multiple days',
      'The outdoor terrace overlooking the port is the best spot between sets',
      'Book accommodation near Vieux-Port for easy access and nightlife after events',
    ],
    events: [],
  },

  // ===== DORTMUND =====
  {
    slug: 'signal-iduna-park',
    name: 'Signal Iduna Park',
    citySlug: 'dortmund',
    city: 'Dortmund',
    type: 'stadium',
    capacity: 81365,
    sport: 'Football',
    teams: ['Borussia Dortmund'],
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&q=80',
    description:
      'Signal Iduna Park is the largest stadium in Germany and home to Borussia Dortmund, boasting an incredible 81,365 capacity. The S\u00fcdtrib\u00fcne (Yellow Wall) is the largest standing terrace in European football, holding 25,000 fans who create an atmosphere unmatched anywhere on the continent. This is a bucket-list destination for every football fan on earth.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Westfalenhallen S-Bahn',
    transitInfo:
      'Signal Iduna Park S-Bahn station is directly adjacent. U45 and U46 subway lines stop at Stadion. From Dortmund Hauptbahnhof, take U45 directly to the ground in 8 minutes.',
    fanTips: [
      'The S\u00fcdtrib\u00fcne (Yellow Wall) standing section is the greatest fan experience in world football \u2014 book early',
      'Strobels Biergarten next to the stadium is the best pre-match gathering spot',
      'Wear black and yellow \u2014 the sea of color on match day is part of the spectacle',
    ],
    events: [],
  },
  {
    slug: 'westfalenhallen',
    name: 'Westfalenhallen',
    citySlug: 'dortmund',
    city: 'Dortmund',
    type: 'arena',
    capacity: 15400,
    teams: [],
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
    description:
      'The Westfalenhallen complex is Dortmund\'s premier indoor arena and exhibition center, hosting concerts, sporting events, and trade shows since 1952. With a 15,400 capacity for events, it has welcomed acts from every genre and international sporting competitions. Its location next to Signal Iduna Park makes it part of Dortmund\'s sporting quarter.',
    nearbyHostels: 2,
    walkingDistance: '8 min from Westfalenhallen S-Bahn',
    transitInfo:
      'Westfalenhallen S-Bahn station provides direct rail access. U45 subway line stops at Westfalenhallen. Multiple bus lines serve the venue from Dortmund Hauptbahnhof.',
    fanTips: [
      'The venue hosts major handball and basketball events \u2014 check the schedule for Bundesliga action',
      'International concert tours frequently include Dortmund \u2014 book early for big names',
      'Combine with a visit to Signal Iduna Park next door for the full Dortmund sports experience',
    ],
    events: [],
  },
  {
    slug: 'phoenix-des-lumieres-dortmund',
    name: 'Phoenix des Lumi\u00e8res',
    citySlug: 'dortmund',
    city: 'Dortmund',
    type: 'concert-hall',
    capacity: 3000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80',
    description:
      'Phoenix des Lumi\u00e8res is a stunning cultural venue in Dortmund\'s revitalized Phoenix-West industrial district, housed in a former blast furnace gas tank. With a 3,000 capacity, it hosts immersive digital art exhibitions, concerts, and cultural events. The venue represents Dortmund\'s transformation from industrial powerhouse to cultural destination.',
    nearbyHostels: 2,
    walkingDistance: '12 min from Horde Bahnhof S-Bahn',
    transitInfo:
      'Horde Bahnhof S-Bahn station is the nearest rail connection. Bus 440 runs directly to the Phoenix-West area. From Dortmund Hauptbahnhof, the journey takes about 15 minutes by S-Bahn.',
    fanTips: [
      'The immersive light shows are a unique experience \u2014 allow at least 90 minutes for a full visit',
      'The surrounding Phoenix-West area has excellent restaurants and cafes in converted industrial spaces',
      'Evening events have a special atmosphere when the light installations contrast with the dark industrial architecture',
    ],
    events: [],
  },

  // ===== PORTO =====
  {
    slug: 'estadio-do-dragao',
    name: 'Est\u00e1dio do Drag\u00e3o',
    citySlug: 'porto',
    city: 'Porto',
    type: 'stadium',
    capacity: 50033,
    sport: 'Football',
    teams: ['FC Porto'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'Est\u00e1dio do Drag\u00e3o is the fearsome home of FC Porto and one of the finest stadiums in Portuguese football. Built for Euro 2004, the 50,033-capacity ground is a fortress where Porto\'s passionate Sup\u00e9r Drag\u00f5es ultras create a wall of noise. Champions League nights under the Dragon\'s floodlights are legendary experiences.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Est\u00e1dio do Drag\u00e3o metro',
    transitInfo:
      'Est\u00e1dio do Drag\u00e3o metro station (Line A/E) is directly connected to the stadium. From Porto-Campanha train station, it is one metro stop. Bus lines 300 and 305 also serve the area.',
    fanTips: [
      'The Sup\u00e9r Drag\u00f5es section behind the goal is where the atmosphere is most intense',
      'Grab a francesinha \u2014 Porto\'s legendary sandwich \u2014 before the match at nearby restaurants',
      'The FC Porto Museum inside the stadium is excellent and open on non-match days',
    ],
    events: [],
  },
  {
    slug: 'super-bock-arena',
    name: 'Super Bock Arena',
    citySlug: 'porto',
    city: 'Porto',
    type: 'arena',
    capacity: 9000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    description:
      'Super Bock Arena (Pavilh\u00e3o Rosa Mota) is Porto\'s premier indoor venue, beautifully situated in the Crystal Palace Gardens with panoramic views over the Douro River. With a 9,000 capacity, the Art Deco-influenced arena hosts major concerts, sporting events, and cultural shows. Its garden setting makes it one of the most scenic venues in Europe.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Casa da M\u00fasica metro',
    transitInfo:
      'Casa da M\u00fasica metro station (Line A/B/C/E/F) is a 15-minute walk through the gardens. Tram line 18 passes nearby. Bus lines 200 and 207 stop close to the Crystal Palace Gardens entrance.',
    fanTips: [
      'Arrive early to stroll through the Crystal Palace Gardens \u2014 the Douro River views are stunning at sunset',
      'The venue hosts NOS Primavera Sound after-shows and satellite events',
      'Super Bock beer is brewed locally \u2014 enjoy a fresh one at the venue bars',
    ],
    events: [],
  },
  {
    slug: 'estadio-do-bessa',
    name: 'Est\u00e1dio do Bessa Sec. XXI',
    citySlug: 'porto',
    city: 'Porto',
    type: 'stadium',
    capacity: 28263,
    sport: 'Football',
    teams: ['Boavista FC'],
    image: 'https://images.unsplash.com/photo-1556056333-18e1aca4e0d6?w=800&q=80',
    description:
      'Est\u00e1dio do Bessa is the home of Boavista FC, Porto\'s second club and the only team outside the big three to win the Portuguese league. The 28,263-capacity ground rebuilt for Euro 2004 sits in the heart of the Boavista neighborhood. It offers an authentic Portuguese football experience away from the tourist trail.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Casa da M\u00fasica metro',
    transitInfo:
      'Casa da M\u00fasica metro station (Line A/B/C/E/F) is the closest stop. Bus lines 200, 203, and 502 pass the stadium. The Boavista roundabout is a major transit hub.',
    fanTips: [
      'Boavista\'s checkered black-and-white shirts are iconic \u2014 pick one up at the club shop',
      'The Bessa neighborhood has traditional Portuguese tascas perfect for pre-match dining',
      'Match tickets are affordable and easy to get \u2014 a great way to experience real Portuguese football culture',
    ],
    events: [],
  },

  // ===== STOCKHOLM =====
  {
    slug: 'friends-arena',
    name: 'Friends Arena',
    citySlug: 'stockholm',
    city: 'Stockholm',
    type: 'stadium',
    capacity: 50000,
    sport: 'Football',
    teams: ['AIK', 'Sweden National Team'],
    image: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f76?w=800&q=80',
    description:
      'Friends Arena is Sweden\'s national stadium and the largest venue in Scandinavia, with a 50,000 capacity and a retractable roof. Home to AIK and the Swedish national team, it hosts major football matches, concerts, and international events. The modern arena in Solna is a beacon of Scandinavian sports architecture.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Solna station',
    transitInfo:
      'Solna station (Pendelt\u00e5g commuter rail) is directly adjacent. Solna Centrum T-bana (Blue line) is a 10-minute walk. Express buses run from Stockholm Central on event days.',
    fanTips: [
      'AIK\'s Svarta Armen (Black Army) ultras create an incredible atmosphere in the north stand',
      'The retractable roof means events happen rain or shine \u2014 but check if it will be open for the best experience',
      'Mall of Scandinavia is next door for pre-event dining and entertainment',
    ],
    events: [],
  },
  {
    slug: 'tele2-arena-stockholm',
    name: 'Tele2 Arena',
    citySlug: 'stockholm',
    city: 'Stockholm',
    type: 'stadium',
    capacity: 33000,
    sport: 'Football',
    teams: ['Djurg\u00e5rden IF', 'Hammarby IF'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Tele2 Arena is a state-of-the-art 33,000-capacity stadium in the Johanneshov district, shared by fierce rivals Djurg\u00e5rden IF and Hammarby IF. The enclosed design amplifies the atmosphere to incredible levels, especially during the Stockholm derby. It also hosts major concerts and international events throughout the year.',
    nearbyHostels: 2,
    walkingDistance: '3 min from Globen T-bana',
    transitInfo:
      'Globen T-bana station (Green line) is a 3-minute walk. Gullmarsplan T-bana is also nearby with multiple bus connections. Tvärbanan light rail stops at Globen.',
    fanTips: [
      'The Stockholm derby between Djurg\u00e5rden and Hammarby is one of Scandinavia\'s fiercest \u2014 get tickets if you can',
      'Hammarby\'s tifo displays are among the best in European football',
      'S\u00f6dermalm\'s bars and restaurants are a short T-bana ride away for post-match celebrations',
    ],
    events: [],
  },
  {
    slug: 'globen-arena',
    name: 'Avicii Arena (Globen)',
    citySlug: 'stockholm',
    city: 'Stockholm',
    type: 'arena',
    capacity: 16000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    description:
      'The Avicii Arena, formerly known as Globen, is Stockholm\'s iconic spherical arena and one of the most recognizable buildings in Scandinavia. With a 16,000 capacity, the world\'s largest hemispherical building hosts hockey, concerts, and major events. The SkyView glass gondola ride to the top offers panoramic views of Stockholm.',
    nearbyHostels: 2,
    walkingDistance: '3 min from Globen T-bana',
    transitInfo:
      'Globen T-bana station (Green line) is directly connected. Gullmarsplan T-bana provides additional connections. Tvärbanan light rail and multiple bus lines serve the area.',
    fanTips: [
      'Take the SkyView glass gondola to the top of the sphere for breathtaking Stockholm views',
      'Swedish Hockey League games here are electric \u2014 the atmosphere rivals football',
      'The arena is next to Tele2 Arena, so check for doubleheader event opportunities',
    ],
    events: [],
  },

  // ===== OSAKA =====
  {
    slug: 'yanmar-stadium-nagai',
    name: 'Yanmar Stadium Nagai',
    citySlug: 'osaka',
    city: 'Osaka',
    type: 'stadium',
    capacity: 47816,
    sport: 'Football',
    teams: ['Cerezo Osaka'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'Yanmar Stadium Nagai is the home of Cerezo Osaka and one of Japan\'s premier athletic venues, built for the 2002 FIFA World Cup. The 47,816-capacity stadium in Nagai Park hosted World Cup matches and continues to be a centerpiece of Osaka\'s sporting landscape. The surrounding park setting makes it a uniquely pleasant matchday experience.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Nagai Station',
    transitInfo:
      'Nagai Station (Midosuji Line/JR Hanwa Line) is a 5-minute walk. The stadium is set within the expansive Nagai Park complex. Bus routes from Tennoji also serve the area.',
    fanTips: [
      'Cerezo Osaka fans are among the most welcoming in J-League \u2014 join the chanting sections behind the goals',
      'Nagai Park is beautiful for a pre-match walk, especially during cherry blossom season',
      'Try takoyaki from the street vendors around the stadium \u2014 this is Osaka\'s signature dish',
    ],
    events: [],
  },
  {
    slug: 'kyocera-dome-osaka',
    name: 'Kyocera Dome Osaka',
    citySlug: 'osaka',
    city: 'Osaka',
    type: 'stadium',
    capacity: 36477,
    sport: 'Baseball',
    teams: ['Orix Buffaloes'],
    image: 'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=800&q=80',
    description:
      'Kyocera Dome Osaka is the home of the Orix Buffaloes and one of Japan\'s iconic domed baseball stadiums. With a 36,477 capacity, the retractable-roof venue hosts NPB baseball, major concerts, and events year-round. Japanese baseball culture \u2014 with organized cheering sections, trumpet bands, and beer vendors \u2014 makes every game a spectacle.',
    nearbyHostels: 2,
    walkingDistance: '5 min from Dome-mae Chiyozaki Station',
    transitInfo:
      'Dome-mae Chiyozaki Station (Nagahori Tsurumi-ryokuchi Line) is directly connected. Taisho Station (JR/Nagahori Line) is also nearby. Multiple bus routes serve the dome area.',
    fanTips: [
      'Sit in the outfield cheering section to experience the full Japanese baseball fan culture with organized chants',
      'Buy a bento box and beer from the stadium vendors \u2014 Japanese ballpark food is an art form',
      'Concerts here are massive \u2014 major J-pop and international acts play the dome regularly',
    ],
    events: [],
  },
  {
    slug: 'panasonic-stadium-suita',
    name: 'Panasonic Stadium Suita',
    citySlug: 'osaka',
    city: 'Osaka',
    type: 'stadium',
    capacity: 39694,
    sport: 'Football',
    teams: ['Gamba Osaka'],
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80',
    description:
      'Panasonic Stadium Suita is the purpose-built home of Gamba Osaka, one of Japan\'s most successful J-League clubs. The 39,694-capacity football-specific stadium opened in 2016 and features steep stands that bring fans incredibly close to the pitch. Its modern design and compact layout create an atmosphere that rivals much larger venues.',
    nearbyHostels: 2,
    walkingDistance: '20 min from Mannose Station or shuttle bus',
    transitInfo:
      'Free shuttle buses run from Senri-Chuo Station (Midosuji/Kitakyu Line) on match days. Mannose Station (Osaka Monorail) is the closest regular stop. From central Osaka, take the Midosuji Line to Senri-Chuo.',
    fanTips: [
      'The steep stands create an intimate, intimidating atmosphere \u2014 sit behind the goal for maximum noise',
      'Gamba\'s rivalry with Cerezo Osaka (the Osaka Derby) is fierce \u2014 try to attend one',
      'Expo \'70 Commemorative Park nearby is worth exploring before the match, featuring the iconic Tower of the Sun',
    ],
    events: [],
  },

  // ===== BOGOTA =====
  {
    slug: 'estadio-el-campin',
    name: 'Estadio El Camp\u00edn',
    citySlug: 'bogota',
    city: 'Bogot\u00e1',
    type: 'stadium',
    capacity: 36343,
    sport: 'Football',
    teams: ['Millonarios FC', 'Independiente Santa Fe'],
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    description:
      'Estadio El Camp\u00edn (officially Estadio Nemesio Camacho) is the historic heart of Bogot\u00e1 football, shared by fierce rivals Millonarios and Santa Fe. The 36,343-capacity stadium sits at 2,640 meters above sea level, making it one of the highest-altitude major stadiums in the world. The Bogot\u00e1 derby here is one of South America\'s most passionate fixtures.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Estadio TransMilenio station',
    transitInfo:
      'Estadio TransMilenio station is a 10-minute walk. The NQS TransMilenio line runs directly past the stadium area. Taxis and ride-sharing from the Zona T or Candelaria districts take 15-20 minutes.',
    fanTips: [
      'The Bogot\u00e1 derby between Millonarios and Santa Fe is electric \u2014 the atmosphere at altitude is breathtaking',
      'Dress warmly \u2014 Bogot\u00e1\'s altitude means evening matches can be surprisingly cold',
      'The lateral (side) stands offer the best views, while the popular sections behind the goals have the best atmosphere',
    ],
    events: [],
  },
  {
    slug: 'movistar-arena-bogota',
    name: 'Movistar Arena Bogot\u00e1',
    citySlug: 'bogota',
    city: 'Bogot\u00e1',
    type: 'arena',
    capacity: 14000,
    teams: [],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    description:
      'Movistar Arena is Bogot\u00e1\'s principal indoor arena, hosting concerts, basketball, and major entertainment events with a 14,000 capacity. Located in the Salitre district near the city\'s sports complex, it is Colombia\'s most important indoor venue. International music tours, Colombian basketball, and cultural events fill the calendar year-round.',
    nearbyHostels: 2,
    walkingDistance: '12 min from Salitre El Greco TransMilenio',
    transitInfo:
      'Salitre El Greco TransMilenio station is the closest rapid transit stop. The venue is part of the Salitre sports complex near Sim\u00f3n Bol\u00edvar Park. Taxis from the Zona Rosa nightlife district take about 15 minutes.',
    fanTips: [
      'Colombian concert crowds are incredibly energetic \u2014 expect dancing and singing throughout every show',
      'The arena hosts major reggaeton, salsa, and international pop tours regularly',
      'Combine a visit with a walk through the adjacent Sim\u00f3n Bol\u00edvar Metropolitan Park',
    ],
    events: [],
  },
  {
    slug: 'estadio-nemesio-camacho',
    name: 'Estadio Nemesio Camacho (El Camp\u00edn Alterno)',
    citySlug: 'bogota',
    city: 'Bogot\u00e1',
    type: 'stadium',
    capacity: 38000,
    sport: 'Football',
    teams: ['Millonarios FC', 'Independiente Santa Fe'],
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80',
    description:
      'The expanded Estadio Nemesio Camacho configuration accommodates up to 38,000 fans for major events, serving as Bogot\u00e1\'s primary venue for international football matches and Copa Libertadores nights. At 2,640 meters altitude, visiting teams struggle with the thin air while the passionate Bogot\u00e1 crowd roars them on. This is South American football at its rawest.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Estadio TransMilenio station',
    transitInfo:
      'Estadio TransMilenio station provides direct rapid transit access. The NQS corridor runs north-south past the stadium. SITP feeder buses connect from surrounding neighborhoods.',
    fanTips: [
      'Altitude affects visiting players significantly \u2014 home teams have a massive advantage in Bogot\u00e1',
      'Try an empanada and hot chocolate from the street vendors outside \u2014 the perfect high-altitude match snack',
      'Copa Libertadores nights are the pinnacle \u2014 the combination of altitude and crowd noise is legendary',
    ],
    events: [],
  },

  // ===== JOHANNESBURG =====
  {
    slug: 'fnb-stadium',
    name: 'FNB Stadium (Soccer City)',
    citySlug: 'johannesburg',
    city: 'Johannesburg',
    type: 'stadium',
    capacity: 94736,
    sport: 'Football',
    teams: ['Kaizer Chiefs'],
    image: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80',
    description:
      'FNB Stadium, also known as Soccer City, is the largest stadium in Africa with a staggering 94,736 capacity. The calabash-shaped venue hosted the 2010 FIFA World Cup Final and is home to Kaizer Chiefs, South Africa\'s most popular club. The Soweto Derby between Chiefs and Orlando Pirates here is one of the most electric sporting events on the planet.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Nasrec Gautrain station',
    transitInfo:
      'Nasrec is accessible via the Gautrain bus service from Ormonde station. Rea Vaya BRT runs special services on event days. Most fans use organized transport or drive \u2014 parking is extensive.',
    fanTips: [
      'The Soweto Derby between Kaizer Chiefs and Orlando Pirates is a must-see \u2014 95,000 fans in full voice is life-changing',
      'Vuvuzelas are part of the culture \u2014 embrace the noise and buy one from the vendors outside',
      'Arrive very early for big matches as traffic around Nasrec can be intense on derby days',
    ],
    events: [],
  },
  {
    slug: 'ellis-park',
    name: 'Ellis Park Stadium',
    citySlug: 'johannesburg',
    city: 'Johannesburg',
    type: 'stadium',
    capacity: 62567,
    sport: 'Rugby',
    teams: ['Lions'],
    image: 'https://images.unsplash.com/photo-1544689723-6041278c0823?w=800&q=80',
    description:
      'Ellis Park is one of the most storied stadiums in world rugby, home to the Golden Lions and venue for the unforgettable 1995 Rugby World Cup Final where Nelson Mandela united a nation. The 62,567-capacity ground in Doornfontein hosts Springbok test matches and United Rugby Championship fixtures. Rugby at altitude in Johannesburg is a unique sporting experience.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Doornfontein station',
    transitInfo:
      'Doornfontein station (Metrorail) is the closest rail stop. Rea Vaya BRT serves the area on event days. The stadium is a short drive from Sandton and Rosebank via the M1 highway.',
    fanTips: [
      'Springbok test matches at Ellis Park are incredible \u2014 South African rugby fans are among the most knowledgeable in the world',
      'The braai (barbecue) tailgate culture in the parking areas is a fantastic pre-match experience',
      'Visit the on-site rugby museum to see memorabilia from the iconic 1995 World Cup Final',
    ],
    events: [],
  },
  {
    slug: 'wanderers-stadium',
    name: 'The Wanderers Stadium (The Bullring)',
    citySlug: 'johannesburg',
    city: 'Johannesburg',
    type: 'stadium',
    capacity: 34000,
    sport: 'Cricket',
    teams: ['Lions'],
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    description:
      'The Wanderers Stadium, known as The Bullring for its hostile atmosphere toward visiting teams, is one of cricket\'s most iconic grounds. With a 34,000 capacity, the Johannesburg venue has hosted some of the greatest matches in cricket history, including the famous 438 game. The altitude produces fast, bouncy pitches that make for thrilling cricket.',
    nearbyHostels: 2,
    walkingDistance: '15 min from Rosebank Gautrain station',
    transitInfo:
      'Rosebank Gautrain station is the nearest rapid transit stop, about a 15-minute walk or short taxi ride. The stadium is in Illovo, accessible from the M1 highway. Gautrain buses connect from Sandton.',
    fanTips: [
      'The grass banks are the best spots \u2014 bring a blanket, cooler box, and sunscreen for a classic South African cricket day',
      'The Bullring atmosphere during a Proteas vs India or Australia test is electric',
      'Castle Corner and the party stands are where the most vocal fans gather \u2014 expect chanting and fancy dress',
    ],
    events: [],
  },

  // ===== SYDNEY =====
  {
    slug: 'accor-stadium-sydney',
    name: 'Accor Stadium',
    citySlug: 'sydney',
    city: 'Sydney',
    type: 'stadium',
    capacity: 83500,
    sport: 'Rugby',
    teams: [],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'Accor Stadium (formerly ANZ Stadium) in Sydney Olympic Park is Australia\'s largest stadium with an 83,500 capacity. Built for the 2000 Sydney Olympics, it hosts NRL Grand Finals, State of Origin, Bledisloe Cup rugby, Socceroos matches, and the biggest concert tours. The stadium is a multi-sport cathedral in the heart of Olympic Park.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Olympic Park station',
    transitInfo:
      'Olympic Park station (T7 line) runs express services on event days from Central Station. Sydney Metro West will improve access further. Ferry services to Olympic Park Wharf are available.',
    fanTips: [
      'State of Origin nights are the pinnacle of Australian sport \u2014 the atmosphere of 80,000+ is unforgettable',
      'NRL Grand Final day in October is a must for any rugby league fan visiting Sydney',
      'The Olympic Park precinct has plenty of food options but they get busy \u2014 eat before arriving or bring supplies',
    ],
    events: [],
  },
  {
    slug: 'sydney-cricket-ground',
    name: 'Sydney Cricket Ground',
    citySlug: 'sydney',
    city: 'Sydney',
    type: 'stadium',
    capacity: 48000,
    sport: 'Cricket',
    teams: ['Sydney Swans'],
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    description:
      'The Sydney Cricket Ground is one of the world\'s most beloved sporting venues, steeped in over 170 years of history. With a 48,000 capacity, the SCG hosts international cricket, AFL (Sydney Swans), and rugby. The Members\' Pavilion, the Hill, and the atmosphere of a New Year\'s Test match make it a pilgrimage site for cricket lovers worldwide.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Moore Park light rail',
    transitInfo:
      'Moore Park light rail stop (L2/L3) is a 10-minute walk. Bus routes 339, 373, and 374 serve the area from Central Station. Walking from Central Station takes about 20 minutes through Surry Hills.',
    fanTips: [
      'The New Year\'s cricket Test starting January 3 is a Sydney tradition \u2014 sit on the Hill for the full experience',
      'Sydney Swans AFL games at the SCG have a unique atmosphere that blends cricket ground charm with Aussie Rules passion',
      'The Cricketers Arms pub on Fitzroy Street is the classic pre-match and post-match gathering spot',
    ],
    events: [],
  },
  {
    slug: 'allianz-stadium-sydney',
    name: 'Allianz Stadium',
    citySlug: 'sydney',
    city: 'Sydney',
    type: 'stadium',
    capacity: 42512,
    sport: 'Football',
    teams: ['Sydney FC', 'NSW Waratahs'],
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    description:
      'Allianz Stadium is the rebuilt jewel of Moore Park, home to Sydney FC and the NSW Waratahs. The brand-new 42,512-capacity venue opened in 2022 with state-of-the-art facilities and a stunning design that brings fans closer to the action than its predecessor. A-League derbies and Super Rugby matches here showcase Australian sport at its finest.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Moore Park light rail',
    transitInfo:
      'Moore Park light rail stop (L2/L3) provides direct access. Bus routes from Central Station serve the Moore Park area. The venue is adjacent to the SCG in the Moore Park sporting precinct.',
    fanTips: [
      'The Sydney Derby between Sydney FC and Western Sydney Wanderers is A-League\'s biggest match \u2014 the Cove end is electric',
      'The new stadium design means every seat has excellent sightlines \u2014 but lower tiers are closest to the pitch',
      'Combine a Sydney FC match with a visit to the nearby SCG and explore the Moore Park sporting precinct',
    ],
    events: [],
  },

  // ===== NASHVILLE =====
  {
    slug: 'nissan-stadium',
    name: 'Nissan Stadium',
    citySlug: 'nashville',
    city: 'Nashville',
    type: 'stadium',
    capacity: 69143,
    sport: 'Football',
    teams: ['Tennessee Titans'],
    image: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f76?w=800&q=80',
    description:
      'Nissan Stadium is the home of the Tennessee Titans on the east bank of the Cumberland River, with a 69,143 capacity and stunning views of the Nashville skyline. NFL Sundays here are a perfect blend of Southern hospitality and football passion. The stadium also hosts major concerts, college football, and international soccer matches.',
    nearbyHostels: 2,
    walkingDistance: '15 min walk from Broadway via pedestrian bridge',
    transitInfo:
      'The John Seigenthaler Pedestrian Bridge connects downtown Broadway to the stadium in a 15-minute walk. WeGo transit buses serve the area. Ride-sharing drop-offs are at Lot R.',
    fanTips: [
      'Walk across the Pedestrian Bridge from Broadway for incredible skyline views on your way to the game',
      'Tailgating in the parking lots starts 4 hours before kickoff \u2014 Southern BBQ and cold beer are the staples',
      'Hit Broadway\'s honky-tonks after the game \u2014 live country music until the early hours is a Nashville tradition',
    ],
    events: [],
  },
  {
    slug: 'bridgestone-arena',
    name: 'Bridgestone Arena',
    citySlug: 'nashville',
    city: 'Nashville',
    type: 'arena',
    capacity: 17159,
    sport: 'Hockey',
    teams: ['Nashville Predators'],
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
    description:
      'Bridgestone Arena is the home of the Nashville Predators and one of the loudest arenas in the NHL. With a 17,159 capacity right on Broadway, the arena sits in the absolute heart of Nashville\'s entertainment district. Predators games feature unique traditions including catfish throwing and a raucous crowd that has made Nashville one of hockey\'s great success stories.',
    nearbyHostels: 2,
    walkingDistance: '2 min from Broadway honky-tonks',
    transitInfo:
      'Located at 5th and Broadway, the arena is walkable from anywhere downtown. WeGo Star commuter rail stops at Riverfront Station nearby. Multiple bus routes converge at the downtown transit center.',
    fanTips: [
      'The catfish-throwing tradition after the first Predators goal is legendary \u2014 watch for it',
      'Pre-game and post-game on Broadway is essential \u2014 Tootsie\'s, Robert\'s Western World, and The Stage are steps away',
      'Smashville (the fan section) behind the visiting team\'s goal is the loudest spot in the building',
    ],
    events: [],
  },
  {
    slug: 'geodis-park-nashville',
    name: 'GEODIS Park',
    citySlug: 'nashville',
    city: 'Nashville',
    type: 'stadium',
    capacity: 30000,
    sport: 'Football',
    teams: ['Nashville SC'],
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'GEODIS Park is the largest soccer-specific stadium in the Americas with a 30,000 capacity, and the home of Nashville SC. Opened in 2022 in the Wedgewood-Houston neighborhood, the stunning venue was purpose-built for football and features a safe-standing supporters\' section that creates an MLS-best atmosphere. It represents Nashville\'s arrival as a major soccer city.',
    nearbyHostels: 2,
    walkingDistance: '10 min from Wedgewood-Houston district',
    transitInfo:
      'WeGo bus routes serve the Wedgewood-Houston area. The stadium is a 15-minute walk or short ride from downtown Broadway. Ride-sharing and dedicated parking lots are available on match days.',
    fanTips: [
      'The Backline supporters group in the safe-standing section creates an atmosphere that rivals any in MLS',
      'Wedgewood-Houston is Nashville\'s trendiest neighborhood \u2014 explore the breweries and restaurants before kickoff',
      'GEODIS Park was built for soccer, so every seat has perfect sightlines \u2014 but the supporters\' end is where the magic happens',
    ],
    events: [],
  },

  // ===== PHILADELPHIA =====
  {
    slug: 'lincoln-financial-field',
    name: 'Lincoln Financial Field',
    citySlug: 'philadelphia',
    city: 'Philadelphia',
    type: 'stadium',
    capacity: 67594,
    sport: 'Football',
    teams: ['Philadelphia Eagles'],
    image: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f76?w=800&q=80',
    description:
      'Lincoln Financial Field is the home of the Philadelphia Eagles and one of the most intimidating stadiums in the NFL. The 67,594-capacity venue in the South Philadelphia Sports Complex is renowned for its passionate, vocal, and notoriously tough fanbase. Eagles fans are legends of American sports fandom, and game days at the Linc are an unforgettable experience.',
    nearbyHostels: 2,
    walkingDistance: '5 min from NRG station (BSL)',
    transitInfo:
      'NRG station on the Broad Street Line (BSL) is directly adjacent to the sports complex. SEPTA bus routes and the AT&T station also serve the area. From Center City, the BSL takes about 15 minutes.',
    fanTips: [
      'Eagles fans are among the most passionate in all of sports \u2014 join the E-A-G-L-E-S chant and you will be welcomed',
      'Tailgating in the parking lots is an Eagles institution \u2014 arrive 3-4 hours early for the full experience',
      'Xfinity Live! entertainment complex next door is the go-to pre-game and post-game destination',
    ],
    events: [],
  },
  {
    slug: 'wells-fargo-center',
    name: 'Wells Fargo Center',
    citySlug: 'philadelphia',
    city: 'Philadelphia',
    type: 'arena',
    capacity: 20478,
    sport: 'Basketball',
    teams: ['Philadelphia 76ers', 'Philadelphia Flyers'],
    image: 'https://images.unsplash.com/photo-1504450758481-7338bbe75005?w=800&q=80',
    description:
      'The Wells Fargo Center is home to both the Philadelphia 76ers (NBA) and the Philadelphia Flyers (NHL), with a 20,478 capacity. Located in the South Philadelphia Sports Complex alongside the Linc and Citizens Bank Park, the arena hosts basketball, hockey, concerts, and major events. Sixers and Flyers fans bring the same legendary Philly intensity indoors.',
    nearbyHostels: 2,
    walkingDistance: '5 min from NRG station (BSL)',
    transitInfo:
      'NRG station on the Broad Street Line (BSL) is steps away. The entire South Philadelphia Sports Complex is served by SEPTA. Express buses run on event nights from Center City.',
    fanTips: [
      'Trust the Process \u2014 76ers games are electric and Philly basketball fans are knowledgeable and passionate',
      'Flyers hockey games bring out old-school Philly toughness \u2014 the Broad Street Bullies spirit lives on',
      'The South Philly sports complex lets you catch Eagles, Sixers, Flyers, and Phillies all within walking distance',
    ],
    events: [],
  },
  {
    slug: 'citizens-bank-park',
    name: 'Citizens Bank Park',
    citySlug: 'philadelphia',
    city: 'Philadelphia',
    type: 'stadium',
    capacity: 42792,
    sport: 'Baseball',
    teams: ['Philadelphia Phillies'],
    image: 'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=800&q=80',
    description:
      'Citizens Bank Park is the home of the Philadelphia Phillies and one of baseball\'s best ballparks. The 42,792-capacity stadium in the South Philadelphia Sports Complex features Ashburn Alley, the iconic Liberty Bell home run celebration, and some of the most passionate baseball fans in America. Philly cheesesteaks at the ballpark are a rite of passage.',
    nearbyHostels: 2,
    walkingDistance: '5 min from NRG station (BSL)',
    transitInfo:
      'NRG station on the Broad Street Line (BSL) provides direct subway access. SEPTA bus routes serve the South Philadelphia Sports Complex. The Phlash downtown loop bus also connects on game days.',
    fanTips: [
      'Ashburn Alley beyond center field has the best food in the park \u2014 get a cheesesteak from Tony Luke\'s or Campo\'s',
      'The Phillies Phanatic is the greatest mascot in sports \u2014 watch for his antics on top of the dugout',
      'Rooftop bleachers in right field offer great views and a party atmosphere for day games',
    ],
    events: [],
  },
];
