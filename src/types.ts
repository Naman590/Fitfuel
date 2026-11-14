export type ClubSpace = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string;
  specs: { label: string; value: string }[];
};

export type ClassItem = {
  id: string;
  title: string;
  discipline: string;
  coach: string;
  time: string;
  duration: string;
  intensity: 'Technical' | 'Conditioning' | 'Combat' | 'Recovery';
  studio: string;
  spotsLeft: number;
};

export type Transformation = {
  id: string;
  name: string;
  role: string;
  quote: string;
  timeframe: string;
  outcome: string;
  focus: string;
};

export type InstagramPost = {
  id: string;
  image: string;
  imageAlt: string;
  type: 'Photo' | 'Reel' | 'Carousel';
  timestamp: string;
  locationTag: string;
  caption: string;
  likes: number;
  comments: number;
  linkedSpace?: string;
};

export type CoachingRole = {
  id: string;
  title: string;
  discipline: string;
  schedule: string;
  compensation: string;
  summary: string;
  credential: string;
};

export type BookingFormData = {
  locationId: string;
  experienceType: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  elixirPreference: string;
};
