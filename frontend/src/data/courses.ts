export type CourseCategory = "languages" | "special" | "new";
export type CourseFilter = "all" | CourseCategory;

export interface Course {
  category: CourseCategory;
  name: string;
  description: string;
}

export const courses: readonly Course[] = [
  {
    category: "languages",
    name: "German",
    description: "Introductory and intermediate conversational German.",
  },
  {
    category: "languages",
    name: "French",
    description: "Standard French courses covering vocabulary, grammar, and pronunciation.",
  },
  {
    category: "languages",
    name: "Marathi",
    description: "Read, write, and converse fluently in the regional language.",
  },
  {
    category: "languages",
    name: "Gujarati",
    description: "Practical lessons in reading, writing, and speaking Gujarati.",
  },
  {
    category: "special",
    name: "Personality Development",
    description: "Confidence building, public speaking, and soft-skills training.",
  },
  {
    category: "special",
    name: "Computer Courses",
    description: "Essential digital literacy, office suites, and internet basics.",
  },
  {
    category: "special",
    name: "Yoga Classes",
    description: "Holistic mental and physical wellness through standard yogic postures.",
  },
  {
    category: "special",
    name: "Astrology",
    description: "Introduction to traditional astrological principles and charts.",
  },
  {
    category: "special",
    name: "Alternative Therapy",
    description: "Introduction to introductory concepts in holistic health practices.",
  },
  {
    category: "new",
    name: "Artificial Intelligence (AI) Applications",
    description: "Introduction to AI tools, prompt engineering, and digital workflows for careers.",
  },
  {
    category: "new",
    name: "Conversational Marathi",
    description: "Quick-start oral fluency course for daily transactional Marathi.",
  },
];

const featuredCourseNames = new Set(["German", "French", "Marathi"]);

export const featuredCourses = courses.filter(({ name }) =>
  featuredCourseNames.has(name),
);
