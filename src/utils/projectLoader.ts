import { marked } from 'marked';

export interface Project {
  slug: string;
  title: string;
  link: string;
  description: string;
  technologies: string[];
  images: string[];
  content: string;
}

export async function loadProject(slug: string): Promise<Project | null> {
  try {
    const module = await import(`@/content/projects/${slug}.md`);
    const frontmatter = module.frontmatter;
    const markdownContent = module.default;

    const content = await marked.parse(markdownContent);

    return {
      slug,
      title: frontmatter.title,
      link: frontmatter.link,
      description: frontmatter.description,
      technologies: frontmatter.technologies || [],
      images: frontmatter.images || [],
      content
    };
  } catch {
    return null;
  }
}
