export interface Leader {
  name: string;
  title: string;
}

export interface Resolution {
  id: string;
  title: string;
  summary: string;
  appliedPolicies: string[];
  realImpact: string;
  startYear: number;
}

export interface Video {
  title: string;
  youtubeId: string;
}

export interface DetailedContent {
  introHtml: string; // The main HTML text block
  contextGeneral: string;
  contextDomestic: string;
  contextInternational: string;
}

export interface PartyCongress {
  id: number;
  romanNumeral: string;
  name: string;
  year: number;
  location: string;
  // Coordinates for the map (x, y percentages)
  mapCoordinates?: { x: number; y: number };
  // Is this an overseas location?
  isOverseas?: boolean;
  startDate: string; // ISO format
  endDate: string;   // ISO format
  leaderElected: Leader;
  delegates: number;
  mainTheme: string;
  historicalContext: string;
  keyResolutions: Resolution[];
  achievements: string[];
  // Multimedia for the Gallery tab
  images?: string[];
  videos?: Video[];
  // Full detail view data
  details?: DetailedContent;
}

export interface Profile {
  id: number;
  name: string;
  birthDate: string;
  hometown: string;
  position: string; // e.g., "Ủy viên Bộ Chính trị"
  avatarUrl: string;
}