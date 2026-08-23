# Security Policy

## Supported Version

Security fixes are applied to the current `@stackline/angular-highcharts` release line. Older Angular-major lines remain available for compatibility but do not receive every dependency update automatically.

## Reporting

Please report suspected vulnerabilities privately through the repository's GitHub Security Advisory interface. Do not open a public issue with exploit details before a fix is available.

Include the affected package version, Angular and Highcharts versions, a minimal reproduction, and the expected impact when possible.

## Untrusted Options

Version 22.1.1 and later ignore `__proto__`, `prototype`, and `constructor` while merging chart options. Applications should still validate untrusted data before converting it into executable Highcharts callbacks or HTML content.

## Historical documentation artifacts

The bundles and source maps under `docs/angular-*` and superseded projects under
`docs-src/angular-*` are generated compatibility artifacts. They are not package
source and are not included in the npm package. CodeQL scans maintained source,
scripts, tests, examples, and the current Angular 22 documentation source; this
keeps findings actionable without reanalyzing immutable EOL framework bundles.
Checked-in example source remains scanned, while generated example bundles are
excluded to avoid reporting third-party runtime copies as maintained source.
