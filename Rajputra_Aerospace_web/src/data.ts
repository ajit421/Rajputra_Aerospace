// All site copy and figures in one place. Figures come from the Rajputra
// Aerospace company spec sheet (Sept 2026) and the technical design report.
// They are design targets, not certified data.

// Change this to the address that should receive reservation requests.
export const CONTACT_EMAIL = 'hello@airone.in'

// Order follows the page: each link is one chapter.
export const NAV = [
  { href: '#aircraft', label: 'Aircraft' },
  { href: '#takeoff', label: 'Takeoff' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#applications', label: 'Applications' },
  { href: '#specs', label: 'Specs' },
  { href: '#team', label: 'Team' },
]

export const STATS = [
  { value: '300', unit: 'km/h', label: 'Cruise speed' },
  { value: '600', unit: 'km', label: 'Range per sortie' },
  { value: '2+', unit: 'hrs', label: 'Endurance' },
  { value: '20,000', unit: 'ft', label: 'Service ceiling' },
]

export const FEATURES = [
  {
    title: 'Two-blade carbon rotor',
    body: 'Powered for vertical takeoff and landing, then unpowered and autorotating in cruise. A Rotating Mass Balancer on the mast damps two-blade vibration.',
  },
  {
    title: 'Twin vectoring ducted fans',
    body: 'All forward thrust in cruise. Each fan swivels independently through 90° to counter rotor torque during vertical takeoff and landing.',
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
  { id: 'left', label: 'Left', src: '/images/view-left.webp', alt: 'Left side view of the Rajputra Aerospace aircraft on its tricycle landing gear' },
  { id: 'front', label: 'Front', src: '/images/view-front.webp', alt: 'Front view showing the bubble canopy, nose wheel and both rear thrusters' },
  { id: 'rear', label: 'Rear', src: '/images/view-rear.webp', alt: 'Rear view showing the boat-tail and twin ducted thruster nacelles' },
  { id: 'right', label: 'Right', src: '/images/view-right.webp', alt: 'Right side view of the Rajputra Aerospace aircraft' },
  { id: 'top', label: 'Top', src: '/images/view-top.webp', alt: 'Top plan view showing the swept aft pylons and two-blade rotor' },
]

export const MODES = [
  { tag: 'Mode A · eVTOL', title: 'Electric vertical takeoff', body: 'Takes off and lands vertically on electric power from a space the size of an MPV car parking bay.' },
  { tag: 'Mode B · USTOL', title: 'Ultra-short takeoff', body: 'Ultra-short takeoff and landing from an unmaintained road or an open field.' },
  { tag: 'Mode C · Vectored thrust', title: 'Twin tail ducted fans', body: 'Provide high-speed cruise thrust, and each rotates independently through 90° to counter main-rotor torque when the rotor is powered during vertical takeoff and landing.' },
]

export const FOOTPRINT = ['4.8 m long', '1.86 m wide', '2 seats']

export const OVERVIEW_TAGS = ['2 seats, single row', 'Plug-in hybrid', 'eVTOL + USTOL', 'Thrust vectoring']

export const POWER = [
  { title: 'Plug-in hybrid-electric', body: 'Charge from the grid, and an onboard generator holds the charge through long regional cruise.' },
  { title: '40 kWh solid-state battery', body: 'A solid-state lithium-ion pack with fast charging delivers the power for vertical takeoff.' },
  { title: '60 L flex-fuel tank', body: 'Runs on E20 petrol or biofuel for the hybrid generator.' },
  { title: 'Motor 500 Series BLDC', body: 'High-torque brushless motors in composite ducts drive both rear fans.' },
]

export const APPLICATIONS = [
  { title: 'Defence', body: 'Rapid liaison, reconnaissance and light transport in forward areas.' },
  { title: 'Logistics', body: 'Urgent cargo up to 250 kg to places roads reach slowly.' },
  { title: 'Border surveillance', body: 'Two-hour patrols along long land borders and difficult terrain.' },
  { title: 'Naval patrolling', body: 'Coastal watch and ship-to-shore runs over open water.' },
  { title: 'Evacuation', body: 'Lifting people out of cut-off locations from any open patch.' },
  { title: 'Disaster relief', body: 'Supplies and assessment teams after floods, quakes and landslides.' },
  { title: 'Air ambulance', body: 'Patient transfer from accident sites straight to hospital.' },
  { title: 'Metro police', body: 'Rapid response and overwatch above dense city traffic.' },
  { title: 'Personal aerial vehicle', body: 'Private flying from home, farm or estate without a runway.' },
  { title: 'Air taxi fleet', body: 'Point-to-point urban and intercity hops at about ₹20 per km.' },
]

export const DRAWINGS = [
  { src: '/images/blueprint-dark.webp', title: 'Four-view blueprint', alt: 'Dark navy four-view orthographic blueprint with dimension lines' },
  { src: '/images/exploded-color.webp', title: 'Exploded assembly', alt: 'Full-colour exploded assembly showing canopy, seats, battery, gear, rotor and thrusters' },
  { src: '/images/exploded-dark.webp', title: 'Exploded blueprint', alt: 'Dark exploded assembly blueprint with numbered callouts and parts list' },
  { src: '/images/sheet-spec.webp', title: 'Specification sheet', alt: 'White four-view engineering specification sheet at 1:10 scale' },
  { src: '/images/sheet-parchment.webp', title: 'Parchment sheet', alt: 'Vintage parchment four-view technical sheet' },
  { src: '/images/view-top.webp', title: 'Top plan view', alt: 'Top plan view with callouts for the rotor, cockpit and rear ducted thrusters' },
]

// A group has either label/value rows or a plain list of items.
export const SPECS: { group: string; code: string; rows?: [string, string][]; items?: string[] }[] = [
  { group: 'Flight performance', code: 'PERF', rows: [
    ['Cruise speed', '300 km/h'],
    ['Endurance', '2+ hrs'],
    ['Single-sortie range', '600 km'],
    ['Maximum service ceiling', '20,000 ft'],
    ['Maximum takeoff weight (incl. payload)', '500 kg'],
    ['Empty weight', '250 kg'],
    ['Payload', '250 kg'],
  ] },
  { group: 'Power and transmission', code: 'PWR', items: [
    'Plug-in hybrid-electric aerial vehicle',
    '60 litre onboard fuel tank, compatible with E20 and biofuel',
    '40 kWh solid-state lithium-ion battery pack with fast charging',
  ] },
  { group: 'Size and dimensions', code: 'DIM', rows: [
    ['Length', '4,795 mm · 15.7 ft'],
    ['Width', '1,855 mm'],
    ['Height', '3,000 mm'],
    ['Wheelbase', '2,700 mm'],
    ['Seating capacity', '2 seats, single row'],
  ] },
  { group: 'Airframe', code: 'AFM', rows: [
    ['Main rotor', '2-blade carbon fibre, autogyro'],
    ['Propulsion', 'Twin rear ducted fans'],
    ['Fuselage', 'Monocoque teardrop, tailless'],
    ['Landing gear', 'Tricycle, steerable nose wheel'],
  ] },
]

export const COSTS = [
  { label: 'Price', value: '₹55 L', note: 'Starting price' },
  { label: 'Per flight hour', value: '₹6,000', note: 'Approximate operating cost' },
  { label: 'Per kilometre', value: '₹20', note: 'Approximate flight cost' },
]

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

export const TEAM = [
  { name: 'Anushka Singh Rajput', role: 'Founder & CEO', link: 'https://www.linkedin.com/in/anushka-singh-rajput-a32104439', site: 'LinkedIn' },
  { name: 'Khushboo Singh', role: 'Co-Founder & Director' },
  { name: 'BP Pattnaik', role: 'Operations, Mentor & Advisor to CEO', link: 'https://www.linkedin.com/in/bppattnaik/', site: 'LinkedIn' },
  { name: 'Harshika Paliwal', role: 'Fundraising, presentation, financial and legal compliance', link: 'https://www.linkedin.com/in/harshikaa-paliwal-82a748113/', site: 'LinkedIn' },
]

export const INCUBATOR = 'IC IIT Patna'
