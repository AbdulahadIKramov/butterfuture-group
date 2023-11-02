import { createI18n } from 'vue-i18n'
import messages from '../i18n'


// const messages = {
//   en: {
//     message: {
//       hello: 'hello world'
//     }
//   },
//   ja: {
//     message: {
//       hello: 'こんにちは、世界'
//     }
//   }
// }

console.log(messages);

const i18n = createI18n({
  locale: 'rus',
  messages
  

})

export {i18n}