export interface Sport {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  heroImage: string;
  color: string;
  accentColor: string;
  venueTypes: string[];
  topCitySlugs: string[];
  stats: { label: string; value: string }[];
  fanGuide: string;
  faqs: { question: string; answer: string }[];
}

export const sports: Sport[] = [
  {
    slug: 'football',
    name: 'Football',
    icon: '⚽',
    tagline: 'The Beautiful Game. The Greatest Atmospheres.',
    description:
      'Football is the world\'s game, and FanHostel is your gateway to its greatest stages. From the deafening roar of La Bombonera to the spine-tingling chorus of You\'ll Never Walk Alone at Anfield, from the volcanic intensity of Istanbul\'s derbies to the samba rhythms of the Maracana — we connect fans with the cheapest, most fan-friendly hostels near football\'s most iconic stadiums. Whether you\'re chasing Champions League away days, bucket-list derbies, or World Cup qualifying atmospheres, we\'ve got a bed waiting for you near the pitch.',
    heroImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
    color: 'bg-green-500/20 text-green-400 border-green-500/30',
    accentColor: '#22c55e',
    venueTypes: ['stadium'],
    topCitySlugs: ['buenos-aires', 'istanbul', 'glasgow', 'london', 'barcelona', 'naples', 'manchester', 'liverpool'],
    stats: [
      { label: 'Football Cities', value: '28' },
      { label: 'Stadiums', value: '60+' },
      { label: 'Fan Hostels', value: '50+' },
      { label: 'Derbies Tracked', value: '25+' },
    ],
    fanGuide:
      'Matchday hostels book fast — especially for derbies and European nights. Book at least 2 weeks ahead for major fixtures. Always check if away fans are allowed before traveling. Pre-match pub culture varies by city: London is all about the pub, Buenos Aires is about the asado, and Istanbul is about the cay houses. Scarves and jerseys are your passport — wear them with pride.',
    faqs: [
      {
        question: 'What are the best cities for football fans on a budget?',
        answer:
          'Buenos Aires, Mexico City, Istanbul, Naples, Lisbon, and Bangkok offer incredible football atmospheres with hostels under $20/night. Buenos Aires and Mexico City are especially good value, with world-class stadiums and dorm beds from $12-16/night.',
      },
      {
        question: 'Which football derbies should every fan experience?',
        answer:
          'The Superclasico (Boca vs River, Buenos Aires), the Old Firm (Celtic vs Rangers, Glasgow), El Clasico (Barcelona vs Real Madrid), the Istanbul Intercontinental Derby (Galatasaray vs Fenerbahce), the Derby della Madonnina (AC Milan vs Inter), and the North London Derby (Arsenal vs Tottenham) are all bucket-list fixtures.',
      },
      {
        question: 'How do I get tickets for big European football matches?',
        answer:
          'For most European leagues, tickets are sold through the club\'s official website. Champions League and derby tickets sell out fast — join the club\'s membership scheme for priority access. Some hostels near stadiums have connections and can help with ticket sourcing. Secondary market sites exist but be wary of scams.',
      },
      {
        question: 'Is it safe to travel as an away fan in football?',
        answer:
          'Safety varies by city and fixture. FanHostel provides specific safety ratings and crowd dynamics for every event. Some derbies ban away fans entirely. In most European cities, organized away travel through your club is the safest option. In South America, always go with local guidance and avoid wearing colors outside the stadium.',
      },
    ],
  },
  {
    slug: 'basketball',
    name: 'Basketball',
    icon: '🏀',
    tagline: 'Courtside Culture. Global Game.',
    description:
      'From the electric intensity of Madison Square Garden to the passionate arena cultures of Europe and Asia, basketball offers some of the most intimate and explosive fan experiences in sport. FanHostel connects you with budget stays near the NBA\'s iconic arenas, EuroLeague strongholds, and emerging basketball scenes worldwide. The proximity of arena seating, the pace of the game, and the energy of 20,000 fans packed into a tight space create atmospheres that are absolutely unforgettable.',
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1920&q=80',
    color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    accentColor: '#f97316',
    venueTypes: ['arena'],
    topCitySlugs: ['new-york-city', 'los-angeles', 'chicago', 'miami', 'toronto', 'barcelona', 'madrid', 'berlin'],
    stats: [
      { label: 'Basketball Cities', value: '12' },
      { label: 'Arenas', value: '15+' },
      { label: 'Fan Hostels', value: '20+' },
      { label: 'NBA + Euro', value: '25+ Teams' },
    ],
    fanGuide:
      'NBA arenas are located in city centers, making them easy to reach from downtown hostels. Games are frequent — NBA teams play 41 home games per season, so there\'s almost always a game on. EuroLeague basketball in Spain, Turkey, and Germany offers incredible atmospheres at a fraction of NBA prices. Arrive early to watch warmups.',
    faqs: [
      {
        question: 'What are the best NBA arenas to visit?',
        answer:
          'Madison Square Garden (Knicks) is the undisputed Mecca of Basketball. Kaseya Center (Heat) has the White Hot playoff atmosphere. The United Center (Bulls) carries the Jordan legacy. Crypto.com Arena (Lakers) blends celebrity culture with basketball. Barclays Center (Nets) in Brooklyn is the modern hotspot.',
      },
      {
        question: 'How much do NBA tickets cost?',
        answer:
          'NBA ticket prices vary wildly. Upper-level seats can be found for $30-80 for regular season games. Marquee matchups (Lakers-Celtics, rivalry games) run $100-500+. Playoff tickets start around $100 and can exceed $1,000 for finals. Secondary market sites like SeatGeek and StubHub are the go-to for fans.',
      },
      {
        question: 'Is European basketball worth watching?',
        answer:
          'Absolutely. EuroLeague features incredible atmospheres, especially in Spain (Barcelona, Real Madrid), Turkey (Fenerbahce, Anadolu Efes), and Greece (Panathinaikos, Olympiacos). Tickets are much cheaper than the NBA, and the fan culture — with organized cheering sections, drums, and flares — is closer to football.',
      },
    ],
  },
  {
    slug: 'baseball',
    name: 'Baseball',
    icon: '⚾',
    tagline: 'Ballparks, Hot Dogs, and Summer Nights.',
    description:
      'Baseball is the most romantic sport in the world — long summer evenings in cathedrals of green, the crack of the bat, the roar of the crowd, and traditions that stretch back over a century. FanHostel connects you with the best budget stays near America\'s most iconic ballparks, Japan\'s electric NPB stadiums, and Korea\'s party-like KBO atmospheres. From the ivy walls of Wrigley Field to the organized chanting at Tokyo Dome, baseball culture varies beautifully around the world but always delivers.',
    heroImage: 'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=1920&q=80',
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    accentColor: '#3b82f6',
    venueTypes: ['stadium'],
    topCitySlugs: ['new-york-city', 'chicago', 'los-angeles', 'tokyo', 'seoul'],
    stats: [
      { label: 'Baseball Cities', value: '5' },
      { label: 'Ballparks', value: '8+' },
      { label: 'Fan Hostels', value: '12+' },
      { label: 'MLB + NPB + KBO', value: '3 Leagues' },
    ],
    fanGuide:
      'Baseball season runs April through October. MLB games happen almost daily, so there\'s always a game on. Japanese NPB baseball is a completely different experience — organized chanting, bento boxes, and impeccable manners. Korean KBO games are pure party — fried chicken, soju, and thunderstick-waving fans. Arrive early for batting practice and soak in the atmosphere.',
    faqs: [
      {
        question: 'What are the must-visit baseball stadiums?',
        answer:
          'Wrigley Field (Cubs, Chicago) for its ivy walls and 110-year history. Yankee Stadium (Yankees, NYC) for its legacy. Dodger Stadium (Dodgers, LA) for sunset views. Tokyo Dome (Giants) for Japanese baseball culture. Jamsil Stadium (Seoul) for the KBO party atmosphere.',
      },
      {
        question: 'How is Japanese baseball different from MLB?',
        answer:
          'NPB (Nippon Professional Baseball) features organized cheering sections with unique chant songs for every batter, performed in perfect unison with trumpets and drums. Fans bring bento boxes and beer. The atmosphere is electric but orderly. It\'s one of the most unique sporting experiences on Earth.',
      },
      {
        question: 'Are baseball tickets affordable?',
        answer:
          'MLB regular season tickets range from $15-60 for decent seats. Weekday games are cheapest. KBO tickets in Korea are incredibly affordable ($8-20). NPB in Japan is moderate ($20-50). All three leagues offer walk-up ticket availability for most games, making baseball one of the most accessible live sports.',
      },
    ],
  },
  {
    slug: 'cricket',
    name: 'Cricket',
    icon: '🏏',
    tagline: 'A Billion Fans. One Obsession.',
    description:
      'Cricket is the second most-watched sport on Earth, and its live experience ranges from the genteel traditions of English test matches to the absolute pandemonium of IPL nights in Mumbai. FanHostel connects fans with budget stays near cricket\'s greatest grounds — from the iconic Wankhede Stadium overlooking the Arabian Sea to the picturesque Newlands beneath Table Mountain. Whether you\'re settling in for five days of test cricket or experiencing the Bollywood-meets-sport spectacle of the IPL, cricket is an experience that stays with you forever.',
    heroImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&q=80',
    color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    accentColor: '#10b981',
    venueTypes: ['stadium'],
    topCitySlugs: ['mumbai', 'cape-town', 'london', 'melbourne'],
    stats: [
      { label: 'Cricket Cities', value: '4' },
      { label: 'Cricket Grounds', value: '6+' },
      { label: 'Fan Hostels', value: '8+' },
      { label: 'IPL + Tests', value: '50+ Matches' },
    ],
    fanGuide:
      'Test cricket requires patience and rewards it generously — bring sunscreen and settle in. IPL matches in India are wild, loud, and absolutely electric. The Boxing Day Test at the MCG in Melbourne is a bucket-list event. Cape Town\'s Newlands is the most beautiful cricket ground on Earth. Book early for India vs Australia or India vs England test matches — they sell out fast.',
    faqs: [
      {
        question: 'What is the best cricket match to attend?',
        answer:
          'The Boxing Day Test at the MCG in Melbourne is cricket\'s greatest tradition. India vs Pakistan at any venue is the most intense rivalry in cricket. An IPL final in India is the most spectacular. A test match at Newlands, Cape Town is the most scenic. India vs Australia at Wankhede is the most passionate.',
      },
      {
        question: 'How much do cricket tickets cost?',
        answer:
          'Cricket is remarkably affordable. IPL tickets in India start from $5-15 for general admission. Test match tickets range from $15-50 per day. The Australian Open (cricket) and Ashes tickets are more expensive, around $30-100. Cricket offers exceptional value compared to most major sports.',
      },
      {
        question: 'Is the IPL worth traveling for?',
        answer:
          'Absolutely. The IPL is the richest and most entertaining cricket league in the world. Matches combine Bollywood entertainment, fireworks, international stars, and the passion of Indian cricket fans. Mumbai Indians matches at Wankhede are particularly spectacular. The atmosphere is unlike anything else in cricket.',
      },
    ],
  },
  {
    slug: 'hockey',
    name: 'Ice Hockey',
    icon: '🏒',
    tagline: 'The Fastest Game on Ice.',
    description:
      'Ice hockey delivers the most visceral live sports experience on the planet — the speed, the hits, the roar of the crowd when the puck hits the net. FanHostel connects fans with budget stays near the NHL\'s legendary arenas and international hockey strongholds. From the historic Bell Centre in Montreal where the Canadiens carry 24 Stanley Cup banners, to Scotiabank Arena where Leafs Nation\'s devotion borders on religious, to Madison Square Garden where the Rangers play in the world\'s most famous arena, hockey is pure adrenaline.',
    heroImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&q=80',
    color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    accentColor: '#a855f7',
    venueTypes: ['arena'],
    topCitySlugs: ['montreal', 'toronto', 'new-york-city', 'chicago'],
    stats: [
      { label: 'Hockey Cities', value: '4' },
      { label: 'Arenas', value: '5+' },
      { label: 'Fan Hostels', value: '8+' },
      { label: 'Original Six', value: '4 Teams' },
    ],
    fanGuide:
      'NHL season runs October through April, with playoffs through June. Original Six matchups (Canadiens, Maple Leafs, Rangers, Blackhawks, Bruins, Red Wings) carry extra intensity. Playoff hockey is the gold standard — the atmosphere ratchets up ten levels. Dress warm for outdoor games. Expect standing ovations for big hits and fights.',
    faqs: [
      {
        question: 'What are the best NHL arenas to visit?',
        answer:
          'Bell Centre (Canadiens) for the most passionate hockey atmosphere on Earth. Madison Square Garden (Rangers) for the iconic setting. Scotiabank Arena (Maple Leafs) for Leafs Nation\'s devotion. United Center (Blackhawks) for the Madhouse on Madison. All Original Six arenas carry special weight.',
      },
      {
        question: 'How much do NHL tickets cost?',
        answer:
          'NHL tickets vary by team and opponent. Regular season tickets range from $30-100 for upper level. Original Six matchups and rivalry games cost more. Maple Leafs and Rangers are the most expensive teams. Playoff tickets start around $100 and escalate dramatically. Weekday games against non-rival teams offer the best value.',
      },
      {
        question: 'Is hockey popular outside North America?',
        answer:
          'Hockey is huge in Scandinavia, Russia, Czech Republic, and Finland. European hockey leagues offer great atmospheres at affordable prices. International tournaments (World Championships, Olympics) create incredible national-team atmospheres. The IIHF World Junior Championship is particularly passionate.',
      },
    ],
  },
  {
    slug: 'rugby',
    name: 'Rugby',
    icon: '🏉',
    tagline: 'Brute Force Meets Beautiful Tradition.',
    description:
      'Rugby delivers raw physicality wrapped in traditions of respect and camaraderie that make it unique in world sport. FanHostel connects fans with stays near rugby\'s greatest grounds — from the Stade de France where Les Bleus host Six Nations thrillers, to DHL Stadium where the world champion Springboks power through Super Rugby, to Twickenham where England\'s red roses meet their rivals. The Six Nations, Rugby Championship, and Rugby World Cup create some of the most festive, passionate, and welcoming atmospheres in any sport.',
    heroImage: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1920&q=80',
    color: 'bg-yellow-600/20 text-yellow-500 border-yellow-600/30',
    accentColor: '#ca8a04',
    venueTypes: ['stadium'],
    topCitySlugs: ['cape-town', 'paris', 'london', 'tokyo', 'melbourne'],
    stats: [
      { label: 'Rugby Cities', value: '5' },
      { label: 'Rugby Grounds', value: '6+' },
      { label: 'Fan Hostels', value: '10+' },
      { label: 'Nations Tracked', value: '10+' },
    ],
    fanGuide:
      'Six Nations (February-March) is the highlight of the Northern Hemisphere calendar. The Rugby Championship runs July-September in the Southern Hemisphere. Super Rugby delivers week-in, week-out action. Rugby fans are famously welcoming — expect to share a pint with opposing supporters. Third-half traditions (post-match drinking) are sacred.',
    faqs: [
      {
        question: 'What are the must-attend rugby events?',
        answer:
          'The Six Nations Championship (February-March) across Europe is rugby\'s best annual tournament. South Africa vs New Zealand in any venue is the ultimate Test match. The Rugby World Cup every four years is the biggest event. The Cape Town Sevens is the best rugby party in the world.',
      },
      {
        question: 'Is rugby fan culture welcoming to newcomers?',
        answer:
          'Rugby has one of the most welcoming fan cultures in all of sport. Opposing fans sit together, share drinks, and socialize before and after matches. The "third half" tradition of post-match socializing is unique to rugby. Violence between fans is extremely rare. Wearing your team\'s colors is always safe.',
      },
    ],
  },
  {
    slug: 'concerts',
    name: 'Concerts & Live Music',
    icon: '🎵',
    tagline: 'Every Stage. Every City. Every Night.',
    description:
      'The world\'s greatest live music experiences happen in stadiums, arenas, and venues near FanHostel\'s network of fan-friendly stays. From Wembley Stadium\'s 90,000-capacity shows to intimate Berlin warehouse parties, from Tokyo\'s legendary Budokan to Amsterdam\'s world-class Ziggo Dome — we connect music fans with budget accommodation that puts them at the center of the action. World tours, residencies, and one-night-only shows all deserve a great place to crash nearby.',
    heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80',
    color: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    accentColor: '#ec4899',
    venueTypes: ['arena', 'concert-hall', 'stadium'],
    topCitySlugs: ['london', 'berlin', 'new-york-city', 'tokyo', 'paris', 'amsterdam', 'los-angeles', 'manchester'],
    stats: [
      { label: 'Music Cities', value: '20+' },
      { label: 'Concert Venues', value: '30+' },
      { label: 'Fan Hostels', value: '40+' },
      { label: 'Shows Weekly', value: '100+' },
    ],
    fanGuide:
      'Stadium tours sell out months ahead — buy tickets on announcement day. Arena shows offer more intimate experiences and often have better sound. Festival camping is great but nearby hostels offer showers, lockers, and a real bed. Berlin\'s club scene runs until Monday morning. London has the most diverse live music scene on Earth.',
    faqs: [
      {
        question: 'What are the best concert cities for backpackers?',
        answer:
          'Berlin offers world-class electronic music and rock with hostels from $22/night. London has the most diverse music scene on Earth. Amsterdam\'s compact size means every venue is bikeable. Buenos Aires and Mexico City combine incredible live music with ultra-cheap accommodation. Tokyo\'s live house scene is unique and affordable.',
      },
      {
        question: 'How do I find concerts happening during my trip?',
        answer:
          'Songkick, Bandsintown, and local venue websites are the best resources. Most major arenas and stadiums publish their event calendars months in advance. FanHostel tracks major tours and events across all our cities so you can plan your trip around the shows you want to see.',
      },
    ],
  },
  {
    slug: 'motorsport',
    name: 'Motorsport',
    icon: '🏎️',
    tagline: 'Speed, Glamour, and the Roar of Engines.',
    description:
      'Formula 1, MotoGP, and motorsport events transform cities into four-day festivals of speed, noise, and celebration. FanHostel connects fans with budget stays near the world\'s greatest circuits — from the glamour of the Monaco street circuit to the Canadian Grand Prix\'s legendary party atmosphere on Ile Notre-Dame, the Miami Grand Prix around Hard Rock Stadium, and the Melbourne street circuit that kicks off the F1 season. Motorsport travel is among the most exciting and social fan experiences in the world.',
    heroImage: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=1920&q=80',
    color: 'bg-red-500/20 text-red-400 border-red-500/30',
    accentColor: '#ef4444',
    venueTypes: ['festival-grounds', 'stadium'],
    topCitySlugs: ['montreal', 'miami', 'melbourne', 'barcelona'],
    stats: [
      { label: 'F1 Cities', value: '4' },
      { label: 'Circuits', value: '4+' },
      { label: 'Fan Hostels', value: '8+' },
      { label: 'Race Weekends', value: '4+' },
    ],
    fanGuide:
      'F1 weekends are three-day events (Friday practice, Saturday qualifying, Sunday race). Book accommodation well in advance — race weekends fill up fast and prices surge. General admission is the budget-friendly option and offers a great multi-vantage-point experience. Earplugs are essential. Montreal and Melbourne are the best races for partying.',
    faqs: [
      {
        question: 'What is the best F1 race to attend?',
        answer:
          'The Canadian Grand Prix in Montreal is widely regarded as the best fan experience — the city transforms into a four-day party. Melbourne kicks off the season with incredible energy. The Miami Grand Prix is the newest glamour race. Barcelona offers great viewing and affordable accommodation nearby.',
      },
      {
        question: 'How much do F1 tickets cost?',
        answer:
          'F1 general admission tickets range from $100-200 for the weekend. Grandstand seats run $200-800+ depending on the circuit and location. Some circuits offer single-day tickets for qualifying or race day only. Book as early as possible — popular races sell out months ahead.',
      },
    ],
  },
  {
    slug: 'combat-sports',
    name: 'Combat Sports',
    icon: '🥊',
    tagline: 'Ancient Arts. Modern Arenas. Pure Adrenaline.',
    description:
      'From the sacred tradition of Muay Thai at Lumpinee Stadium to championship boxing at Madison Square Garden and UFC events in arenas worldwide, combat sports deliver the most primal and adrenaline-fueled live sporting experience. FanHostel connects fans with budget accommodation near the world\'s greatest fight venues. The intimate settings, the walkout music, the split-second knockouts — nothing compares to witnessing combat sports live.',
    heroImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80',
    color: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    accentColor: '#f59e0b',
    venueTypes: ['arena'],
    topCitySlugs: ['bangkok', 'new-york-city', 'los-angeles', 'london', 'melbourne'],
    stats: [
      { label: 'Fight Cities', value: '6' },
      { label: 'Fight Venues', value: '8+' },
      { label: 'Fan Hostels', value: '10+' },
      { label: 'Weekly Bouts', value: '20+' },
    ],
    fanGuide:
      'Muay Thai at Lumpinee Stadium in Bangkok is a must — fights happen several times a week and tickets are affordable ($30-100). UFC events sell out fast but the atmosphere is incredible. Boxing at MSG or the O2 London is bucket-list material. The wai kru ceremony before Muay Thai bouts is one of sport\'s most beautiful traditions.',
    faqs: [
      {
        question: 'Where is the best place to watch Muay Thai?',
        answer:
          'Lumpinee Boxing Stadium in Bangkok is the holy ground of Muay Thai. Fights happen multiple times per week. Rajadamnern Stadium is the other legendary Bangkok venue. Tickets range from $30-100 and the atmosphere is electric. Thai fans are incredibly knowledgeable and the betting adds extra intensity.',
      },
      {
        question: 'How do I get UFC tickets?',
        answer:
          'UFC events are announced months in advance on UFC.com. Pre-sale codes are available through UFC Fight Club membership. Tickets range from $60-500+ depending on the card and venue. Fight Night events are more affordable than numbered PPV cards. The O2 in London and Madison Square Garden host the biggest cards.',
      },
    ],
  },
  {
    slug: 'tennis',
    name: 'Tennis',
    icon: '🎾',
    tagline: 'Grand Slams. Grand Atmospheres.',
    description:
      'Tennis\'s four Grand Slams — the Australian Open, Roland Garros, Wimbledon, and the US Open — are among the greatest sporting events on the planet, each with a unique character and atmosphere. FanHostel connects fans with budget accommodation near these iconic venues and the world\'s best tennis stadiums. From the January heat of Melbourne Park to the red clay of Paris, the grass courts of London to the electric nights of Flushing Meadows, Grand Slam tennis is a two-week festival of world-class sport.',
    heroImage: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80',
    color: 'bg-lime-500/20 text-lime-400 border-lime-500/30',
    accentColor: '#84cc16',
    venueTypes: ['arena', 'stadium'],
    topCitySlugs: ['melbourne', 'paris', 'london', 'new-york-city', 'madrid'],
    stats: [
      { label: 'Tennis Cities', value: '5' },
      { label: 'Tennis Venues', value: '5+' },
      { label: 'Fan Hostels', value: '10+' },
      { label: 'Grand Slams', value: '4' },
    ],
    fanGuide:
      'Grand Slam ground passes offer incredible value — you can watch multiple matches on outside courts for a fraction of the show-court price. The first week of any Grand Slam has the best atmosphere-to-price ratio. Night sessions at the Australian and US Opens are electric. Roland Garros in the Parisian spring is heaven.',
    faqs: [
      {
        question: 'Which Grand Slam should I attend first?',
        answer:
          'The Australian Open in Melbourne offers the most relaxed, fan-friendly atmosphere with great weather and a city that celebrates the tournament. The US Open in New York has the most electric night sessions. Roland Garros in Paris combines clay-court tennis with the City of Light. Wimbledon\'s traditions are unmatched but tickets are hardest to get.',
      },
      {
        question: 'How do I get Grand Slam tickets on a budget?',
        answer:
          'Ground passes for the first week are the best value ($30-80). The Australian Open and US Open sell tickets directly online. Roland Garros uses a ballot system. Wimbledon\'s famous queue still operates for day-of tickets. Outer courts often feature future stars and offer intimate viewing.',
      },
    ],
  },
];
