declare module '*.scss';
declare module 'vars'; // есть алиас для импорта стилей ('vars'), чтобы ts не ругался нужно задегларировать такой модуль
declare module 'eslint-plugin-import' {
  import { Linter } from 'eslint';
  const plugin: Linter.Plugin;
  export default plugin;
}
