📏  ESLint Config - @rsamuel1993/eslint-config-node
============================================================

A shareable ESLint configuration for Node.js packages and services.  
Built to keep your code clean, consistent, and bug-free. 🧹

------------------------------------------------------------

📥  INSTALLATION
------------------------------------------------------------

```text
npm install @rsamuel1993/eslint-config-node
⚙️ USAGE
Add the following to your ESLint configuration file:
(📚 See: https://eslint.org/docs/latest/use/configure/configuration-files-deprecated)

📄 Example .eslintrc.config.js:

import config from '@rsamuel1993/eslint-config-node';

export default [
    ...config,
    {
        files: ['*/.js'],
        rules: {
            // Add or override rules here
        },
    },
];
💡 NOTES
• ✅ Compatible with Node projects
• 🗂 Centralizes lint rules so you don’t repeat configs everywhere
• 🧼 Keeps your repo cleaner and easier to maintain

============================================================
