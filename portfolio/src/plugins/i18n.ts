import { createI18n } from 'vue-i18n';
import home_ptBR from '../content/pt-BR/home.json';
import home_en from '../content/en/home.json';

const I18n = createI18n({
  // For use with Vue Composition API
  legacy: false,
  locale: 'PT-BR',
  messages: {
    'PT-BR': {
        'home': home_ptBR
    },
    'EN': {
        'home': home_en
    }
  }
});

export const i18n = I18n.global;

export default I18n;