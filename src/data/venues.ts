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
];
