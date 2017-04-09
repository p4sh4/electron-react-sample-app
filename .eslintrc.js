module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      // AirBnB style guide overrides
      // always force parens on arrow functions arguments
      "arrow-parens": ["error", "always"],
      // Only warn on static element interactions
      // Eventually should fix this, but it's a PITA
      // Maybe better wait until they accept role="button"
      // See https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/91
      "jsx-a11y/no-static-element-interactions": "warn",
      // Make sure we don't mix shorthand properties and full-form properties, 
      // stay consistent within a scope
      "object-shorthand": ["error", "consistent"],
    }
};