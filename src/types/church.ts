export interface FoundationScripture {
  reference: string;
  text: string;
  theme?: string;
}

export interface StatementOfFaithItem {
  title: string;
  description: string;
  scriptures: { ref: string; text: string }[];
}

export interface FastingScripture {
  reference: string;
  text: string;
}

export interface LeadershipMember {
  role: string;
  title: string;
  name: string;
  scriptureAnchor: string;
  description: string;
  responsibilities: string[];
}

export interface ChurchObjective {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  day: string;
  time: string;
  type: 'Regular Meeting' | 'Bible Study' | 'Fasting & Prayer' | 'Night Vigil' | 'Special Retreat';
  description: string;
  location: string;
  scripture: string;
  isSpecial?: boolean;
}

export interface PrayerRequest {
  id: string;
  name: string;
  category: 'Healing' | 'Family & Marriage' | 'Spiritual Growth' | 'Deliverance & Protection' | 'Fruit of the Womb' | 'Financial & Career' | 'Thanksgiving';
  request: string;
  isConfidential: boolean; // if true, marked for pastoral intercessors only
  prayingCount: number;
  createdAt: string;
  scriptureRef?: string;
  answered?: boolean;
}

export interface ScripturePrayerCategory {
  id: string;
  title: string;
  scriptureRef: string;
  verseKJV: string;
  prayerPoint: string;
  confession: string;
}

export interface ArticleSlide {
  slideNumber: number;
  articleNumber?: string;
  title: string;
  subtitle?: string;
  contentLines: string[];
  keyScriptures?: string[];
  category: 'Foundations' | 'Identity' | 'Doctrine' | 'Membership' | 'Leadership' | 'Meetings' | 'Finances' | 'Governance';
}
