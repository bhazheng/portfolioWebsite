export interface SkillItem {
  id: string;
  name: string;
  appliedIn: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}
