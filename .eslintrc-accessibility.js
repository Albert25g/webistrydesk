module.exports = {
  extends: [
    // your other extends
  ],
  rules: {
    // Disable overly strict ARIA rule from Microsoft Edge Tools
    'axe/aria-valid-attr-value': 'off',
    // Or configure it to be less strict
    'axe/aria-valid-attr-value': ['warn', { 
      allowedExpressions: ['ternary', 'variable'] 
    }]
  }
};
