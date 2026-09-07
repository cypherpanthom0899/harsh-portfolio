// Single structured content source (design.md §12).
// Edit THIS file to add real content — layout/components never need to change
// when copy, projects, or learning items change.
//
// Truth rule (design.md §1): never invent facts. Every `null` below is a
// real unknown, not a stand-in for something to be written creatively.
// Fill it in only once Harsh has supplied and approved the real value.

export interface LearningItem {
  topic: string;
  progressNote: string;
  datedNote?: string;
}

export interface Project {
  title: string;
  description: string;
  date?: string;
  role?: string;
  tools?: string[];
  media?: string;
  disclosureLevel?: "public" | "summary-only";
}

export interface ImageCredit {
  asset: string;
  credit: string;
  license: string;
}

export const site = {
  person: {
    name: "Harsh Singh Rajput",
    status: "Full-time Class 11 student",
    year: 2026,
    // TODO(harsh): approved portrait file path, e.g. "/images/portrait.jpg"
    photo: null as string | null,
    // TODO(harsh): 60–120 word first-person statement (design.md §6.3)
    statement: null as string | null,
    // TODO(harsh, optional): city/country, only if he wants it public
    location: null as string | null,
  },

  // TODO(harsh): real learning topics/build-log notes (design.md §6.4).
  // Leave empty to show the intentional "THE LAB IS ACTIVE." empty state.
  learningItems: [] as LearningItem[],

  // TODO(harsh): real projects he wants public (design.md §6, §15).
  // Leave empty to show the "WORK IN PROGRESS." empty state.
  projects: [] as Project[],

  future: {
    class12Expected: "Around March 2027",
    statement: "Bigger things are coming.",
  },

  // TODO: usage-rights confirmation for each motivational/portrait image
  // before any of them ship to production (design.md §5, §14).
  imageCredits: [] as ImageCredit[],

  // Footer ownership line. This is a plain fact (Harsh owns his own site),
  // not an invented claim — update the year if this ships past 2026.
  copyrightLine: "© 2026 Harsh Singh Rajput.",
};
