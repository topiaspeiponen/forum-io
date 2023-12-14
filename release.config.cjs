/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        "preset": "conventionalcommits",
        presetConfig: {
          "types": [
            {"type": "feat", "section": "Features"},
            {"type": "fix", "section": "Bug Fixes"},
            {"type": "chore", "hidden": true},
            {"type": "docs", "section": "Docs"},
            {"type": "style", "section": "Changes"},
            {"type": "refactor", "section": "Changes"},
            {"type": "perf", "section": "Changes"},
            {"type": "ci", "section": "Infrastructure"},
            {"type": "build", "section": "Infrastructure"},
            {"type": "test", "hidden": true}
          ]
        }
      }
    ],
    '@semantic-release/release-notes-generator',
    ["@semantic-release/git", {
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    '@semantic-release/github'
  ]
};

module.exports = config;