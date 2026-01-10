import { createI18n } from 'vue-i18n';

import home_ptBR from '../content/pt-BR/home.json';
import home_en from '../content/en/home.json';

import header_ptBR from '../content/pt-BR/header.json';
import header_en from '../content/en/header.json';

import footer_ptBR from '../content/pt-BR/footer.json';
import footer_en from '../content/en/footer.json';

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