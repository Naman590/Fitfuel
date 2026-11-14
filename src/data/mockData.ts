import { ClubSpace, ClassItem, Transformation, InstagramPost, CoachingRole } from '../types';

import strengthMezzanineImg from '../assets/images/gym_strength_mezzanine_1794670758070.jpg';
import combatArenaImg from '../assets/images/gym_combat_arena_1794670758372.jpg';
import thermalRecoveryImg from '../assets/images/gym_thermal_recovery_1794670758868.jpg';
import igDeadliftImg from '../assets/images/ig_training_deadlift_1794670759644.jpg';
import igConditioningImg from '../assets/images/ig_community_conditioning_1794670760231.jpg';

export const RECEPTION_HERO_IMG =
  '/assets/aistudio/__Luxury_Reception_Area_With_Member_s_Lounge__Fitfuel_Fitness__Faridabad_s_Most_luxury_gym__wi_002dc8c7.jpg';

export const TRAINING_PORTRAIT_IMG = igDeadliftImg;

export const CLUB_SPACES: ClubSpace[] = [
  {
    id: 'reception',
    index: '01',
    title: 'Reception & Member Lounge',
    subtitle: 'Arrival & Espresso Bar',
    image: RECEPTION_HERO_IMG,
    imageAlt: 'FitFuel Faridabad reception desk, slatted wood ceiling, and velvet lounge chairs',
    description:
      'Fluted oak, brushed concrete, and quiet seating designed so the transition from workday to training floor feels deliberate rather than rushed.',
    specs: [
      { label: 'Check-In', value: 'Touchless Gate & Keycard' },
      { label: 'Lounge', value: 'Single-Origin Espresso & Shakes' },
      { label: 'Hours', value: '05:30 – 23:00 Daily' },
      { label: 'Valet', value: 'Complimentary Basement Bay' }
    ]
  },
  {
    id: 'strength',
    index: '02',
    title: 'Olympic Strength Mezzanine',
    subtitle: 'Raw Iron & Sprint Turf',
    image: strengthMezzanineImg,
    imageAlt: 'Olympic lifting platforms, matte black squat racks, and calibrated plates at FitFuel',
    description:
      'Calibrated Eleiko platforms, custom half-racks, dumbbells running to 70kg, and a 40-metre indoor sled track with shock-absorbing subflooring.',
    specs: [
      { label: 'Platforms', value: '8 Calibrated Eleiko Bays' },
      { label: 'Turf Lane', value: '40m Weighted Sled Track' },
      { label: 'Dumbbells', value: '2.5kg to 70kg Custom Pairs' },
      { label: 'Noise Control', value: '25mm Acoustic Rubber Deck' }
    ]
  },
  {
    id: 'combat',
    index: '03',
    title: 'Boxing & Striking Studio',
    subtitle: 'Heavy Bags & Ring Work',
    image: combatArenaImg,
    imageAlt: 'Hanging black leather punching bags and regulation boxing ring corner',
    description:
      'Worn leather heavy bags suspended from steel gantries alongside a full canvas ring. Built for proper padwork, footwork, and conditioning rounds.',
    specs: [
      { label: 'Capacity', value: '14 Athletes per Session' },
      { label: 'Equipment', value: 'Leather Bags & Pro Gloves' },
      { label: 'Ring', value: 'Regulation Canvas Corner' },
      { label: 'Flooring', value: 'High-Density Tatami Mats' }
    ]
  },
  {
    id: 'recovery',
    index: '04',
    title: 'Thermal & Cold Recovery',
    subtitle: 'Cedar Sauna & Basalt Plunge',
    image: thermalRecoveryImg,
    imageAlt: 'Dark stone cold plunge pool with warm cedar sauna wall and steam',
    description:
      'Chilled basalt plunge tubs held at 39°F beside dry cedar hot rooms—built to lower systemic soreness between heavy training blocks.',
    specs: [
      { label: 'Cold Plunge', value: '39°F Ozone-Filtered Stone Tubs' },
      { label: 'Dry Sauna', value: '195°F Nordic Cedar Room' },
      { label: 'Compression', value: 'Normatec 3 Recovery Boots' },
      { label: 'Changing', value: 'Private Rain Showers & Lockers' }
    ]
  }
];

export const CLUB_METRICS = [
  { value: '22,000', unit: 'sq ft', label: 'Flagship training & recovery floor in Sector 15' },
  { value: '16 max', unit: 'athletes', label: 'Hard cap on every coached group session' },
  { value: '60+', unit: 'weekly', label: 'Strength, conditioning, striking & mobility blocks' },
  { value: '39°F', unit: 'contrast', label: 'Filtered cold immersion paired with dry cedar sauna' }
];

export const SCHEDULE_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const SCHEDULE_ITEMS: Record<string, ClassItem[]> = {
  Mon: [
    { id: 'm1', title: 'Engine & Sled Conditioning', discipline: 'Strength & Turf', coach: 'Kabir Verma', time: '06:30', duration: '50 min', intensity: 'Conditioning', studio: 'Sprint Turf', spotsLeft: 3 },
    { id: 'm2', title: 'Heavy Bag & Footwork Rounds', discipline: 'Combat', coach: 'Zoya Khan', time: '08:00', duration: '45 min', intensity: 'Combat', studio: 'Boxing Room', spotsLeft: 5 },
    { id: 'm3', title: 'Barbell Technique: Squat & Pull', discipline: 'Strength & Turf', coach: 'Arjun Dev', time: '12:15', duration: '60 min', intensity: 'Technical', studio: 'Eleiko Mezzanine', spotsLeft: 2 },
    { id: 'm4', title: 'Evening Torque Conditioning', discipline: 'Strength & Turf', coach: 'Kabir Verma', time: '18:00', duration: '50 min', intensity: 'Conditioning', studio: 'Main Turf', spotsLeft: 1 },
    { id: 'm5', title: 'Dutch Kickboxing & Padwork', discipline: 'Combat', coach: 'Zoya Khan', time: '19:15', duration: '60 min', intensity: 'Combat', studio: 'Boxing Room', spotsLeft: 4 }
  ],
  Tue: [
    { id: 't1', title: 'Clean, Snatch & Overhead Mechanics', discipline: 'Strength & Turf', coach: 'Arjun Dev', time: '07:00', duration: '60 min', intensity: 'Technical', studio: 'Eleiko Mezzanine', spotsLeft: 2 },
    { id: 't2', title: 'Kettlebell & Carry Capacity', discipline: 'Strength & Turf', coach: 'Kabir Verma', time: '08:30', duration: '50 min', intensity: 'Conditioning', studio: 'Sprint Turf', spotsLeft: 6 },
    { id: 't3', title: 'Breathwork & Cold Immersion', discipline: 'Thermal', coach: 'Meera Nair', time: '13:00', duration: '45 min', intensity: 'Recovery', studio: 'Thermal Suite', spotsLeft: 4 },
    { id: 't4', title: 'Boxing Slip Lines & Counters', discipline: 'Combat', coach: 'Zoya Khan', time: '18:30', duration: '60 min', intensity: 'Combat', studio: 'Boxing Room', spotsLeft: 3 }
  ],
  Wed: [
    { id: 'w1', title: 'Threshold Intervals & Rowers', discipline: 'Strength & Turf', coach: 'Kabir Verma', time: '06:30', duration: '50 min', intensity: 'Conditioning', studio: 'Main Turf', spotsLeft: 2 },
    { id: 'w2', title: 'Clinch, Knee & Bag Conditioning', discipline: 'Combat', coach: 'Zoya Khan', time: '09:00', duration: '60 min', intensity: 'Combat', studio: 'Boxing Room', spotsLeft: 4 },
    { id: 'w3', title: 'Posterior Chain & Hinge Block', discipline: 'Strength & Turf', coach: 'Arjun Dev', time: '17:30', duration: '60 min', intensity: 'Technical', studio: 'Eleiko Mezzanine', spotsLeft: 3 }
  ],
  Thu: [
    { id: 'th1', title: 'Lateral Agility & Joint Control', discipline: 'Strength & Turf', coach: 'Meera Nair', time: '07:00', duration: '50 min', intensity: 'Technical', studio: 'Sprint Turf', spotsLeft: 5 },
    { id: 'th2', title: '12-Round Heavy Bag Output', discipline: 'Combat', coach: 'Zoya Khan', time: '08:15', duration: '45 min', intensity: 'Combat', studio: 'Boxing Room', spotsLeft: 2 },
    { id: 'th3', title: 'Sauna Contrast & Mobility Reset', discipline: 'Thermal', coach: 'Meera Nair', time: '18:00', duration: '45 min', intensity: 'Recovery', studio: 'Thermal Suite', spotsLeft: 3 }
  ],
  Fri: [
    { id: 'f1', title: 'Friday Sparring & Bag Rounds', discipline: 'Combat', coach: 'Zoya Khan', time: '17:30', duration: '60 min', intensity: 'Combat', studio: 'Boxing Room', spotsLeft: 1 },
    { id: 'f2', title: 'Partner Sled & Erg Relay', discipline: 'Strength & Turf', coach: 'Kabir Verma', time: '18:45', duration: '50 min', intensity: 'Conditioning', studio: 'Sprint Turf', spotsLeft: 2 }
  ],
  Sat: [
    { id: 'sa1', title: 'Saturday 90: Turf + Plunge Protocol', discipline: 'Strength & Turf', coach: 'Kabir Verma & Meera Nair', time: '09:00', duration: '90 min', intensity: 'Conditioning', studio: 'Turf + Thermal', spotsLeft: 3 },
    { id: 'sa2', title: 'Technical Boxing Masterclass', discipline: 'Combat', coach: 'Zoya Khan', time: '11:00', duration: '75 min', intensity: 'Combat', studio: 'Boxing Room', spotsLeft: 4 }
  ],
  Sun: [
    { id: 'su1', title: 'Spine, Hip & Shoulder Longevity', discipline: 'Thermal', coach: 'Meera Nair', time: '10:00', duration: '60 min', intensity: 'Recovery', studio: 'Movement Studio', spotsLeft: 6 },
    { id: 'su2', title: 'Guided Cold Plunge & Sauna Cycle', discipline: 'Thermal', coach: 'Meera Nair', time: '11:30', duration: '60 min', intensity: 'Recovery', studio: 'Thermal Suite', spotsLeft: 5 }
  ]
};

export const MEMBER_STORIES: Transformation[] = [
  {
    id: 'rohan',
    name: 'Rohan Malhotra',
    role: 'Managing Director, Malhotra Precision Works',
    quote:
      'I joined to fix persistent lower-back stiffness after years of desk work and long flights. Ten months of structured barbell progressions and coached conditioning took my deadlift to 165kg pain-free—and honestly cleared my head every morning before the factory floor.',
    timeframe: '10 months',
    outcome: '165kg deadlift · -9.2 kg body fat',
    focus: 'Strength Mezzanine & Thermal Recovery'
  },
  {
    id: 'ananya',
    name: 'Ananya Kapoor',
    role: 'Principal Architect, Studio Kapoor NCR',
    quote:
      'Most gyms either feel clinical or overly loud. At FitFuel you walk through the lounge into a calm, serious room where coaches actually watch your mechanics. Dropping my 10K time by six minutes came down to fixing my hip stability first.',
    timeframe: '8 months',
    outcome: '44 min 10K · +4.1 kg lean mass',
    focus: 'Turf Conditioning & Mobility'
  },
  {
    id: 'vikramaditya',
    name: 'Dr. Vikramaditya Nair',
    role: 'Senior Orthopedic Surgeon',
    quote:
      'Between six-hour surgeries, recovery matters as much as load. Having proper Eleiko racks at 6 AM followed by ten minutes in the 39°F plunge keeps my shoulders and energy steady through a 70-hour hospital week.',
    timeframe: '14 months',
    outcome: '48 BPM resting HR · Zero shoulder flare-ups',
    focus: 'Olympic Lifting & Cold Contrast'
  }
];

export const COACHING_ROLES: CoachingRole[] = [
  {
    id: 'strength-coach',
    title: 'Senior Strength & Biomechanics Coach',
    discipline: '1:1 Coaching · Strength Floor',
    schedule: 'Full-Time · Faridabad Flagship',
    compensation: '₹2.2L – ₹4.5L / month',
    summary:
      'Write and coach long-horizon strength cycles using velocity tracking, movement screens, and calibrated Olympic platforms.',
    credential: '4+ years coaching experience · CSCS, ASCA, or Weightlifting cert'
  },
  {
    id: 'conditioning-lead',
    title: 'Conditioning & Turf Lead',
    discipline: 'Small Group · 16 Athletes Max',
    schedule: 'Morning & Prime Evening Blocks',
    compensation: '₹1.8L – ₹3.2L / month',
    summary:
      'Run sharp, disciplined 50-minute sled, rower, and kettlebell sessions with clear technical cueing—never loud gimmicks.',
    credential: 'Proven group pacing experience and cardiovascular programming background'
  },
  {
    id: 'combat-coach',
    title: 'Boxing & Muay Thai Specialist',
    discipline: 'Striking Studio · Private & Group',
    schedule: 'Full-Time or Specialist Retainer',
    compensation: '₹2.0L – ₹3.8L / month',
    summary:
      'Coach clean footwork, padwork flow, and heavy-bag rounds for both beginners and competitive fighters.',
    credential: 'Amateur or pro ring experience with strong padwork safety standards'
  },
  {
    id: 'recovery-mobility',
    title: 'Reformer & Contrast Recovery Coach',
    discipline: 'Movement Studio & Thermal Suite',
    schedule: 'Daytime & Weekend Specialist',
    compensation: '₹1.6L – ₹3.0L / month',
    summary:
      'Blend dynamic reformer stability, joint decompression, and guided sauna-to-plunge contrast protocols.',
    credential: 'Physiotherapy degree or comprehensive Reformer certification'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: igDeadliftImg,
    imageAlt: 'Athlete chalking hands over an Olympic barbell on a wooden lifting platform at FitFuel',
    type: 'Reel',
    timestamp: '2 days ago',
    locationTag: 'Strength Mezzanine · Sector 15',
    caption:
      '06:15 AM on platform 03. Before phones start buzzing, before traffic hits Mathura Road—just chalk, calibrated steel, and three clean working sets.',
    likes: 486,
    comments: 27,
    linkedSpace: 'Olympic Strength Mezzanine'
  },
  {
    id: 'ig-2',
    image: igConditioningImg,
    imageAlt: 'Two athletes pushing a weighted sled across dark indoor sprint turf with kettlebells',
    type: 'Photo',
    timestamp: '4 days ago',
    locationTag: 'Main Sprint Turf',
    caption:
      'Saturday 09:00 partner sled pushes. Sixteen people in the room, forty metres of turf, zero shortcuts.',
    likes: 342,
    comments: 14,
    linkedSpace: 'Engine & Sled Conditioning'
  },
  {
    id: 'ig-3',
    image: RECEPTION_HERO_IMG,
    imageAlt: 'FitFuel Faridabad reception desk and lounge bathed in afternoon sunlight through blinds',
    type: 'Carousel',
    timestamp: '1 week ago',
    locationTag: 'FitFuel Lounge · Faridabad',
    caption:
      'Late afternoon light hitting the Sector 15 reception desk. Espresso bar stays open till 21:30 for members winding down post-session.',
    likes: 619,
    comments: 38,
    linkedSpace: 'Reception & Member Lounge'
  },
  {
    id: 'ig-4',
    image: combatArenaImg,
    imageAlt: 'Black leather heavy bags and regulation boxing ring corner inside FitFuel',
    type: 'Photo',
    timestamp: '1 week ago',
    locationTag: 'Boxing & Striking Room',
    caption:
      'Fresh tape on the leather bags before the 19:15 padwork block. Twelve three-minute rounds—keep your chin tucked.',
    likes: 295,
    comments: 19,
    linkedSpace: 'Boxing & Striking Studio'
  },
  {
    id: 'ig-5',
    image: thermalRecoveryImg,
    imageAlt: 'Steaming basalt stone cold plunge next to Nordic cedar sauna at FitFuel',
    type: 'Photo',
    timestamp: '2 weeks ago',
    locationTag: 'Thermal Contrast Suite',
    caption:
      'Twelve minutes at 195°F followed by three quiet minutes at 39°F. How Friday legs get ready for Monday squats.',
    likes: 512,
    comments: 31,
    linkedSpace: 'Thermal & Cold Recovery'
  }
];

export const CLUB_VISIT_DETAILS = {
  name: 'FitFuel Fitness — Faridabad Flagship',
  address: 'Grand Pavilion Boulevard, Sector 15, Faridabad, NCR 121007',
  hours: 'Mon – Sun · 05:30 – 23:00',
  phone: '+91 129 408 2190',
  email: 'concierge@fitfuel.club',
  instagramHandle: '@fitfuel.faridabad',
  instagramUrl: 'https://instagram.com'
};
