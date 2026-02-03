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
];
