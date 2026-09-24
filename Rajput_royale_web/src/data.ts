// All site copy and figures in one place. Figures come from the Rajput
// technical design report and are design targets, not certified data.

// Change this to the address that should receive reservation requests.
export const CONTACT_EMAIL = 'hello@airone.in'

export const NAV = [
  { href: '#design', label: 'Design' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#specs', label: 'Specs' },
  { href: '#missions', label: 'Missions' },
]

export const STATS = [
  { value: '300', unit: 'km/h', label: 'Cruise speed' },
  { value: '600', unit: 'km', label: 'Range per sortie' },
  { value: '20,000', unit: 'ft', label: 'Service ceiling' },
  { value: '500', unit: 'kg', label: 'Max takeoff weight' },
]

export const FEATURES = [
  {
    title: 'Two-blade carbon rotor',
    body: 'Unpowered in cruise and always autorotating, with a Rotating Mass Balancer on the mast to damp two-blade vibration.',
  },
  {
    title: 'Twin ducted thrusters',
    body: 'The only source of forward thrust. Shrouded impellers cut tip losses and noise, and protect people and the fans from debris.',
  },
  {
    title: 'Tailless boat-tail',
    body: 'No vertical fin. Vectored thrust keeps the aircraft straight, removing fin drag and crosswind side-force.',
  },
  {
    title: 'Tricycle landing gear',
    body: 'Steerable nose wheel and a wide-stance main gear, raked to set the rotor at the right angle for fast spin-up.',
  },
]

export const VIEWS = [
  { id: 'left', label: 'Left', src: '/images/view-left.webp', alt: 'Left side view of the Rajput Royale on its tricycle landing gear' },
  { id: 'front', label: 'Front', src: '/images/view-front.webp', alt: 'Front view showing the bubble canopy, nose wheel and both rear thrusters' },
  { id: 'rear', label: 'Rear', src: '/images/view-rear.webp', alt: 'Rear view showing the boat-tail and twin ducted thruster nacelles' },
  { id: 'right', label: 'Right', src: '/images/view-right.webp', alt: 'Right side view of the Rajput Royale' },
  { id: 'top', label: 'Top', src: '/images/view-top.webp', alt: 'Top plan view showing the swept aft pylons and two-blade rotor' },
]

export const AERO = [
  { value: '0.178', label: 'Drag coefficient of the monocoque teardrop pod, from CFD.' },
  { value: 'BLI', label: 'Boundary-layer ingestion: the thrusters breathe the slow wake air and cut pressure drag.' },
  { value: 'No fin', label: 'The tailless boat-tail removes vertical-fin drag entirely.' },
]

export const POWER = [
  { title: 'Motor 500 Series BLDC', body: 'Two high-torque brushless motors drive all forward thrust.' },
  { title: 'Battery for bursts', body: 'A lithium-ion pack delivers instant power for takeoff.' },
  { title: 'Hybrid for range', body: 'An onboard generator holds the charge through long regional cruise.' },
  { title: 'Redundant by design', body: 'If one motor fails, fly-by-wire trims the asymmetric thrust for a stable return.' },
]

export const DRAWINGS = [
  { src: '/images/blueprint-dark.webp', title: 'Four-view blueprint', alt: 'Dark navy four-view orthographic blueprint with dimension lines' },
  { src: '/images/exploded-color.webp', title: 'Exploded assembly', alt: 'Full-colour exploded assembly showing canopy, seats, battery, gear, rotor and thrusters' },
  { src: '/images/exploded-dark.webp', title: 'Exploded blueprint', alt: 'Dark exploded assembly blueprint with numbered callouts and parts list' },
  { src: '/images/sheet-spec.webp', title: 'Specification sheet', alt: 'White four-view engineering specification sheet at 1:10 scale' },
  { src: '/images/sheet-parchment.webp', title: 'Parchment sheet', alt: 'Vintage parchment four-view technical sheet' },
  { src: '/images/view-top.webp', title: 'Top plan view', alt: 'Top plan view with callouts for the rotor, cockpit and rear ducted thrusters' },
]

export const SPECS = [
  { group: 'Dimensions', rows: [
    ['Rotor span', '8,500 mm'],
    ['Fuselage length', '5,850 mm'],
    ['Height', '3,150 mm'],
    ['Wheel track', '3,150 mm'],
    ['Wheelbase', '2,600–2,700 mm'],
  ] },
  { group: 'Weights', rows: [
    ['Max takeoff weight', '500 kg'],
    ['Empty weight', '230–270 kg'],
    ['Payload and fuel', 'up to 270 kg'],
  ] },
  { group: 'Performance', rows: [
    ['Cruise speed', '300 km/h'],
    ['Range', '600 km'],
    ['Service ceiling', '20,000 ft'],
    ['Launch and recovery', 'VTOL'],
  ] },
  { group: 'Configuration', rows: [
    ['Type', 'Hybrid-electric autogyro'],
    ['Main rotor', '2-blade carbon, mass balancer'],
    ['Propulsion', 'Twin rear ducted thrusters'],
    ['Landing gear', 'Tricycle, steerable nose'],
  ] },
] as const

export const MISSIONS = [
  { src: '/images/scene-dubai.webp', title: 'Urban vertiport hops', place: 'City skyline at twilight' },
  { src: '/images/scene-monaco.webp', title: 'Private and luxury travel', place: 'Harbour and superyachts' },
  { src: '/images/scene-coastal.webp', title: 'Coastal ferry', place: 'Cliffside coastline' },
  { src: '/images/scene-maldives.webp', title: 'Island hopping', place: 'Tropical lagoons' },
  { src: '/images/scene-norway.webp', title: 'Remote and scenic tours', place: 'Fjords and waterfalls' },
  { src: '/images/scene-desert.webp', title: 'Canyon and desert', place: 'Red-rock canyon' },
  { src: '/images/scene-rainforest.webp', title: 'Wilderness access', place: 'Rainforest river' },
  { src: '/images/hero-alps.webp', title: 'High-altitude mountain', place: 'Alpine peaks at sunrise' },
]
