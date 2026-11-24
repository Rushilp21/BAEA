import { CourseFilters, CourseList } from "../components/CourseList";
import { courses, type CourseFilter } from "../data/courses";

export function CoursesPage({ category, onCategoryChange }: CoursesPageProps) {
  return (
    <div className="container reveal">
      <h1 className="page-title" style={{ textAlign: "center" }}>Our Courses</h1>
      <p className="subtitle" style={{ textAlign: "center", maxWidth: "600px", margin: "0.5rem auto 0px" }}>Subsidized language learning, digital skill improvements, and vocational training facilitated by volunteer mentors.</p>
      <div className="filter-controls">
        <CourseFilters category={category} onChange={onCategoryChange} />
      </div>
      <div className="courses-grid">
        <CourseList courses={courses} category={category} />
      </div>
    </div>
  );
}

interface CoursesPageProps {
  category: CourseFilter;
  onCategoryChange: (category: CourseFilter) => void;
}
