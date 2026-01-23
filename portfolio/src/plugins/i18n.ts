import { createI18n } from 'vue-i18n';

import home_ptBR from '../../content/pages/pt-BR/home.json';
import home_en from '../../content/pages/en/home.json';

import header_ptBR from '../../content/pages/pt-BR/header.json';
import header_en from '../../content/pages/en/header.json';

import footer_ptBR from '../../content/pages/pt-BR/footer.json';
import footer_en from '../../content/pages/en/footer.json';

import publications_ptBR from '../../content/pages/pt-BR/publications.json';
import publications_en from '../../content/pages/en/publications.json';

import experience_ptBR from '../../content/pages/pt-BR/experience.json';
import experience_en from '../../content/pages/en/experience.json';

const projectsTextFiles = import.meta.glob(
  '/content/projects/*/*.json',
  { eager: true }
);
const papersTextFiles = import.meta.glob(
  '/content/papers/*/*.json',
  { eager: true }
);

function loadContents(textFiles: Record<string, unknown>, docType: 'projects'|'papers', locale: 'pt_br'|'en') {
  const projects: Record<string, any> = {}

  for (const path in textFiles) {
    const parts = path.split('/')
    const projectName = parts[parts.length - 2]!
    const fileName = parts[parts.length - 1]!.replace('.json', '')

    projects[projectName] ??= {}

    projects[projectName][fileName] =
      (textFiles[path] as any).default
  }

  return Object.entries(projects).map(([name, data]) => ({
    slug: name,
    ...data.general,
    ...data[locale],
    cover: `/content/${docType}/${name}/cover.png`
  }))
}

const I18n = createI18n({
  // For use with Vue Composition API
  legacy: false,
  locale: 'PT-BR',
  messages: {
    'PT-BR': {
        'home': home_ptBR,
        'header': header_ptBR,
        'footer': footer_ptBR,
        'publications': publications_ptBR,
        'experience': experience_ptBR,
        'projects': loadContents(projectsTextFiles, 'projects', 'pt_br'),
        'papers': loadContents(papersTextFiles, 'papers', 'pt_br')
    },
    'EN': {
        'home': home_en,
        'header': header_en,
        'footer': footer_en,
        'publications': publications_en,
        'experience': experience_en,
        'projects': loadContents(projectsTextFiles, 'projects', 'en'),
        'papers': loadContents(papersTextFiles, 'papers', 'en')
    }
  }
});

export const i18n = I18n.global;

export default I18n;