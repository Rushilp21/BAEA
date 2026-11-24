import type { Course, CourseCategory, CourseFilter } from "../data/courses";

const badgeLabels: Record<CourseCategory, string> = {
  languages: "Languages",
  special: "Special",
  new: "New",
};

const filters = [
  ["all", "All Courses"],
  ["languages", "Languages"],
  ["special", "Special Skills"],
  ["new", "New Programs"],
] as const;

interface CourseFiltersProps {
  category: CourseFilter;
  onChange: (category: CourseFilter) => void;
}

export function CourseFilters({ category, onChange }: CourseFiltersProps) {
  return filters.map(([value, label]) => (
    <button
      key={value}
      type="button"
      className={value === category ? "filter-btn active" : "filter-btn"}
      aria-pressed={value === category}
      onClick={() => onChange(value)}
    >
      {label}
    </button>
  ));
}

export function CourseList({
  courses,
  category,
}: {
  courses: readonly Course[];
  category: CourseFilter;
}) {
  return courses.map((course) => (
    <div
      key={course.name}
      className="course-card"
      data-category={course.category}
      style={{ display: category === "all" || category === course.category ? undefined : "none" }}
    >
      <span className={"badge badge-" + course.category}>{badgeLabels[course.category]}</span>
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <a
        className="card-link"
        aria-label={`Enquire about ${course.name} course`}
        href={"#/contact?course=" + encodeURIComponent(course.name)}
      >
        Enquire Course →
      </a>
    </div>
  ));
}
