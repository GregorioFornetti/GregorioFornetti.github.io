import { createI18n } from 'vue-i18n';

import home_ptBR from '../content/pages/pt-BR/home.json';
import home_en from '../content/pages/en/home.json';

import header_ptBR from '../content/pages/pt-BR/header.json';
import header_en from '../content/pages/en/header.json';

import footer_ptBR from '../content/pages/pt-BR/footer.json';
import footer_en from '../content/pages/en/footer.json';

function loadContents(locale: 'pt_br' | 'en') {
  const textFiles = import.meta.glob(
    '/src/content/projects/*/*.json',
    { eager: true }
  )

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
    cover: `/content/projects/${name}/cover.png`
  }))
}

console.log(loadContents('en'));
console.log(loadContents('pt_br'));

const I18n = createI18n({
  // For use with Vue Composition API
  legacy: false,
  locale: 'PT-BR',
  messages: {
    'PT-BR': {
        'home': home_ptBR,
        'header': header_ptBR,
        'footer': footer_ptBR
    },
    'EN': {
        'home': home_en,
        'header': header_en,
        'footer': footer_en
    }
  }
});

export const i18n = I18n.global;

export default I18n;