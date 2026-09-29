// All site copy and figures in one place. Figures come from the Rajputra
// Aerospace company spec sheet (Sept 2026). They are design targets, not
// certified data.

export const CONTACT_EMAIL = 'hello@rajputra.in'
export const FOUNDER_LINKEDIN = 'https://www.linkedin.com/in/anushka-singh-rajput-a32104439'

export const NAV = [
  { href: '#applications', label: 'Applications' },
  { href: '#vtol', label: 'Takeoff' },
  { href: '#specs', label: 'Specifications' },
  { href: '#drawings', label: 'Drawings' },
  { href: '#economics', label: 'Economics' },
  { href: '#team', label: 'Team' },
]

export type Picture = { src: string; alt: string; caption: string }

const img = (name: string) => `/images/${name}.webp`

export const HERO = {
  image: img('alps'),
  alt: 'The Rajputra Aerospace aircraft flying above clouds between snow-covered peaks at sunrise',
  lede: 'A two-seat plug-in hybrid-electric gyroplane. It lifts off vertically from an MPV-sized parking space, cruises at 300 km/h and covers 600 km on a single sortie.',
}

export const STATS = [
  { value: '300', unit: 'km/h', label: 'Cruise speed' },
  { value: '600', unit: 'km', label: 'Single-sortie range' },
  { value: '20,000', unit: 'ft', label: 'Service ceiling' },
  { value: '₹20', unit: '/km', label: 'Flight cost, approx.' },
]

export const VIEW_LEFT: Picture = {
  src: img('side-left'),
  alt: 'The Rajputra Aerospace aircraft in copper and carbon fibre, left side profile on a white background',
  caption: 'Rajputra Aerospace · left profile',
}

export const OVERVIEW = {
  title: 'Rotor for lift. Ducted fans for speed.',
  body: [
    'A free-spinning two-blade carbon-fibre autogyro rotor carries the aircraft in forward flight. Twin ducted fans at the tail push it to 300 km/h and swivel independently through 90° to steer thrust during vertical takeoff and landing.',
    'The monocoque teardrop pod has no vertical tail fin, and the hybrid powertrain runs on E20 or biofuel alongside a 40 kWh solid-state battery pack.',
  ],
  tags: ['2 seats, single row', 'Plug-in hybrid', 'eVTOL + USTOL', 'Thrust vectoring'],
}

// Each icon is a list of SVG path strings drawn on a 32 x 32 grid.
export const APPLICATIONS = [
  { title: 'Defence', body: 'Rapid liaison, reconnaissance and light transport in forward areas.', icon: ['M16 3 L27 7 V15 C27 22 22 27 16 29 C10 27 5 22 5 15 V7 Z', 'M11 16 L15 20 L22 12'] },
  { title: 'Logistics', body: 'Urgent parts, medicines and supplies to places roads reach slowly.', icon: ['M7 10 H25 A2 2 0 0 1 27 12 V24 A2 2 0 0 1 25 26 H7 A2 2 0 0 1 5 24 V12 A2 2 0 0 1 7 10 Z', 'M5 15 H27 M13 10 V15 M19 10 V15'] },
  { title: 'Border surveillance', body: 'Two-hour patrols along long land borders and difficult terrain.', icon: ['M5 16 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0', 'M12 16 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0', 'M16 2 V7 M16 25 V30 M2 16 H7 M25 16 H30'] },
  { title: 'Naval patrolling', body: 'Coastal watch and ship-to-shore runs over open water.', icon: ['M3 22 C7 19 9 25 13 22 C17 19 19 25 23 22 C26 20 28 22 29 22', 'M8 17 H24 L21 11 H11 Z', 'M16 11 V5'] },
  { title: 'Evacuation', body: 'Flying people out of cut-off locations, landing on a road or open field.', icon: ['M6 26 L16 6 L26 26 Z', 'M16 14 V19 M16 22 V23'] },
  { title: 'Disaster relief', body: 'Supplies and assessment teams after floods, quakes and landslides.', icon: ['M4 27 H28', 'M7 27 V16 L16 9 L25 16 V27', 'M13 27 V20 H19 V27'] },
  { title: 'Air ambulance', body: 'Rushing a paramedic, medicines or blood to accident sites and remote clinics.', icon: ['M8 5 H24 A3 3 0 0 1 27 8 V24 A3 3 0 0 1 24 27 H8 A3 3 0 0 1 5 24 V8 A3 3 0 0 1 8 5 Z', 'M16 10 V22 M10 16 H22'] },
  { title: 'Metro police', body: 'Rapid response and overwatch above dense city traffic.', icon: ['M16 4 L19 11 L27 12 L21 17 L23 25 L16 21 L9 25 L11 17 L5 12 L13 11 Z'] },
  { title: 'Personal aerial vehicle', body: 'Private flying from home, farm or estate without a runway.', icon: ['M11 10 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0', 'M6 28 C6 21 10 17 16 17 C22 17 26 21 26 28'] },
  { title: 'Air taxi fleet', body: 'Point-to-point urban and intercity hops at about ₹20 per km.', icon: ['M7 9 H25 A2 2 0 0 1 27 11 V21 A2 2 0 0 1 25 23 H7 A2 2 0 0 1 5 21 V11 A2 2 0 0 1 7 9 Z', 'M5 14 H27 M10 23 V26 M22 23 V26 M13 5 H19'] },
]

// Gallery order: the first scene is the large tile.
export const SCENES: (Picture & { label: string })[] = [
  { src: img('dubai'), label: 'Urban air mobility', caption: 'Urban air mobility · city skyline at dusk', alt: 'The Rajputra Aerospace aircraft flying over a dense city skyline at dusk' },
  { src: img('monaco'), label: 'Coastal', caption: 'Coastal · harbour flyover', alt: 'The Rajputra Aerospace aircraft over a harbour lined with yachts at sunset' },
  { src: img('maldives'), label: 'Island hopping', caption: 'Island hopping · atolls and reefs', alt: 'The Rajputra Aerospace aircraft above turquoise atolls and coral reefs' },
  { src: img('canyon'), label: 'Rough terrain', caption: 'Rough terrain · low-level canyon flight', alt: 'The Rajputra Aerospace aircraft flying low through a red sandstone canyon' },
  { src: img('tokyo'), label: 'Night operations', caption: 'Night operations · neon city in rain', alt: 'Rear view of the Rajputra Aerospace aircraft with glowing ducted fans flying between neon-lit buildings in the rain' },
  { src: img('hangar'), label: 'Hangar', caption: 'Hangar · front view', alt: 'Front view of the Rajputra Aerospace aircraft hovering in a lit hangar with its reflection on the floor' },
  { src: img('fjord'), label: 'Mountain valleys', caption: 'Mountain valleys · fjord between waterfalls', alt: 'The Rajputra Aerospace aircraft flying through a misty fjord between cliffs and waterfalls' },
  { src: img('river'), label: 'Remote access', caption: 'Remote access · river at sunset', alt: 'The Rajputra Aerospace aircraft flying low over a forest river at sunset' },
  { src: img('monaco-rooftop'), label: 'Rooftop landing', caption: 'Rooftop landing · harbour city helipad', alt: 'The Rajputra Aerospace aircraft parked on its wheels on a rooftop helipad above a harbour at sunset' },
]

export const MODES = [
  { tag: 'eVTOL', title: 'Electric vertical takeoff', body: 'Takes off and lands vertically on electric power from a space the size of an MPV car parking bay.' },
  { tag: 'USTOL', title: 'Ultra-short takeoff', body: 'Ultra-short takeoff and landing from an unmaintained road or an open field.' },
  { tag: 'Vectored thrust', title: 'Twin tail ducted fans', body: 'Provide high-speed cruise thrust, and each rotates independently through 90° to counter main-rotor torque when the rotor is powered during vertical takeoff and landing.' },
]

export const MODE_VIEWS = [
  { src: img('front'), label: 'Front', alt: 'Front view of the Rajputra Aerospace aircraft showing the canopy, tricycle landing gear and ducted fans on each side' },
  { src: img('rear'), label: 'Rear · twin ducted fans', alt: 'Rear view of the Rajputra Aerospace aircraft showing the twin ducted fans on swept pylons' },
]

type Row = { label: string; value: string; unit?: string }

export const SPECS: { title: string; rows?: Row[]; notes?: { strong: string; rest: string }[] }[][] = [
  [
    {
      title: 'Flight performance',
      rows: [
        { label: 'Cruise speed', value: '300', unit: 'km/h' },
        { label: 'Endurance', value: '2+', unit: 'hrs' },
        { label: 'Single-sortie range', value: '600', unit: 'km' },
        { label: 'Maximum service ceiling', value: '20,000', unit: 'ft' },
        { label: 'Maximum takeoff weight (incl. payload)', value: '500', unit: 'kg' },
        { label: 'Empty weight', value: '250', unit: 'kg' },
        { label: 'Payload', value: '250', unit: 'kg' },
      ],
    },
    {
      title: 'Power and transmission',
      notes: [
        { strong: 'Plug-in hybrid-electric', rest: ' aerial vehicle' },
        { strong: '60 litre onboard fuel tank', rest: ', compatible with E20 and biofuel' },
        { strong: '40 kWh solid-state lithium-ion battery pack', rest: ' with fast charging' },
      ],
    },
  ],
  [
    {
      title: 'Size and dimensions',
      rows: [
        { label: 'Length', value: '4,795 mm · 15.7 ft' },
        { label: 'Width', value: '1,855', unit: 'mm' },
        { label: 'Height', value: '3,000', unit: 'mm' },
        { label: 'Wheelbase', value: '2,700', unit: 'mm' },
        { label: 'Seating capacity', value: '2', unit: 'seats, single row' },
      ],
    },
    {
      title: 'Airframe',
      rows: [
        { label: 'Main rotor', value: '2-blade carbon fibre, autogyro' },
        { label: 'Propulsion', value: 'Twin rear ducted fans' },
        { label: 'Fuselage', value: 'Monocoque teardrop, tailless' },
        { label: 'Landing gear', value: 'Tricycle, steerable nose wheel' },
      ],
    },
  ],
]

// One studio view under each spec column.
export const SPEC_VIEWS: Picture[] = [
  { src: img('top'), caption: 'Rajputra Aerospace · top view', alt: 'Top-down view of the Rajputra Aerospace aircraft showing the 2-blade rotor, cockpit and rear ducted thrusters on swept pylons' },
  { src: img('side-right'), caption: 'Rajputra Aerospace · right profile', alt: 'The Rajputra Aerospace aircraft, right side profile on a white background' },
]

export const DRAWINGS: (Picture & { name: string; code: string })[] = [
  { src: img('cfd'), name: 'CFD airflow', code: 'RAJP · AERO', caption: 'Aerodynamic CFD airflow simulation', alt: 'CFD airflow simulation showing streamlines around the teardrop fuselage and rear ducted thrusters' },
  { src: img('exploded'), name: 'Exploded assembly', code: 'RAJP10103', caption: 'Exploded assembly diagram · RAJP10103', alt: 'Exploded assembly diagram showing canopy, seats, battery pack and ducted thruster components' },
  { src: img('blueprint'), name: 'Blueprint', code: 'RAJP10123', caption: 'Blueprint · multi-view · RAJP10123', alt: 'Blueprint with top, front, rear, side and isometric views' },
  { src: img('spec-sheet'), name: 'Spec sheet', code: '1:10', caption: 'Technical specification sheet · scale 1:10', alt: 'Technical specification sheet with front, top and side profile views' },
  { src: img('four-view'), name: 'Four-view', code: '1:10', caption: 'Four-view line drawing · scale 1:10', alt: 'Four-view line drawing labelling rotor mast, teardrop fuselage, pylons and wheels' },
]

export const ECONOMICS = {
  background: img('monaco'),
  items: [
    { label: 'Price', value: '₹55 L', sub: 'Starting price', accent: true },
    { label: 'Per flight hour', value: '₹6,000', sub: 'Approximate operating cost' },
    { label: 'Per kilometre', value: '₹20', sub: 'Approximate flight cost' },
  ],
  note: 'All figures are approximate. Price starts from ₹55 lakh.',
}

export const TEAM = [
  { initials: 'AR', name: 'Anushka Singh Rajput', role: 'Founder & CEO', link: { label: 'LinkedIn', href: FOUNDER_LINKEDIN } },
  { initials: 'KS', name: 'Khushboo Singh', role: 'Co-Founder & Director' },
  { initials: 'BP', name: 'BP Pattnaik', role: 'Operations, Mentor & Advisor to CEO', link: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bppattnaik/' } },
  { initials: 'AG', name: 'Cdre (Dr) Arun Pratap Golaya (Retd)', role: 'Defence and Business Connect', link: { label: 'X', href: 'https://x.com/Arun_Golaya?lang=en' } },
  { initials: 'HP', name: 'Harshika Paliwal', role: 'Fundraising, Presentation, Financial and Legal Compliance', link: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshikaa-paliwal-82a748113/' } },
  { initials: 'IC', name: 'IC IIT Patna', role: 'Incubator · Incubation Centre, IIT Patna' },
]

export const CONTACT = {
  title: 'Fly the Rajputra Aerospace',
  body: 'For fleet, defence, government or private orders, investment and partnerships, email us or reach out to the founder.',
  image: { src: img('hangar'), caption: 'Hangar · front view', alt: 'The Rajputra Aerospace aircraft in a hangar, front view' } as Picture,
}

// Every picture that opens in the full-size viewer, in page order.
export const LIGHTBOX: Picture[] = [VIEW_LEFT, ...SCENES, ...SPEC_VIEWS, ...DRAWINGS]
