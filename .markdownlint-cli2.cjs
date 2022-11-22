module.exports = {
  ignores: ['**/.git', '**/.idea', '**/.vscode', '**/node_modules'],
  config: {
    default: true,
    MD010: {
      code_blocks: true,
      ignore_code_languages: ['go'],
    },
    MD013: {
      line_length: 200,
    },
    MD033: {
      allowed_elements: ['pre', 'code', 'sub', 'sup'],
    },
    MD040: false,
  },
}
