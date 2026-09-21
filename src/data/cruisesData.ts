export interface PricingSeason {
  seasonName: string;
  applicableDates?: string[];
  tripleSharing: number | null;
  doubleSharing: number;
  singleCabin: number;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  activities: string[];
}

export interface CruiseItinerary {
  id: string;
  durationName: string;
  departureDay: string;
  pricing: PricingSeason[];
  days: ItineraryDay[];
}

export type CruiseCategory = "luxury" | "ultra-deluxe" | "deluxe" | "standard" | "lake-nasser-cruises" | "cruise-by-felucca" | "dahabiya-nile-cruise-boat";
export type CruiseSubType = "nile-cruise" | "felucca" | "lake-nasser" | "dahabia" | "dahabiya-cruise";

export interface CruiseData {
  id: string;
  name: string;
  type: string;
  category: CruiseCategory;
  subType: CruiseSubType;
  featured: boolean;
  shortDescription?: string;
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
  childrenPolicy: string[];
  languageGuideSupplement?: number;
  itineraries: CruiseItinerary[];
  note?: string;
}

import aiCruises from './newCruisesAI.json';

export const cruises: CruiseData[] = aiCruises as unknown as CruiseData[];
