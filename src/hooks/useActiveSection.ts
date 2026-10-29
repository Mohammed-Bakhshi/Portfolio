import { useEffect, useState } from "react";

const HOME_THRESHOLD = 80;
const BOTTOM_THRESHOLD = 80;
const TOP_TRIGGER_RATIO = 0.1;
const LOWER_SECTIONS_TRIGGER_RATIO = 0.5;

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateActive = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY < HOME_THRESHOLD) {
        setActive("home");
        return;
      }

      const atPageBottom =
        scrollY + viewportHeight >=
        document.documentElement.scrollHeight - BOTTOM_THRESHOLD;

      const lastSection = sectionIds.at(-1);
      if (atPageBottom && lastSection) {
        setActive(lastSection);
        return;
      }

      const skillsSection = document.getElementById("skills");
      const skillsTop = skillsSection?.offsetTop ?? Number.POSITIVE_INFINITY;

      const inSkillsOrProjects = scrollY >= skillsTop;

      const triggerRatio = inSkillsOrProjects
        ? LOWER_SECTIONS_TRIGGER_RATIO
        : TOP_TRIGGER_RATIO;

      const trigger = scrollY + viewportHeight * triggerRatio;
      let current = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= trigger) {
          current = id;
        }
      }

      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds]);

  return active;
}
