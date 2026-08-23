# Changelog

All notable changes to `@stackline/angular-highcharts` are documented here.

## Unreleased

- Moved exact-version dependency records to `package.fixture.json`, repaired
  their validators, and added an offline catalog contract to keep historical
  metadata out of active dependency alerts.

## 22.1.1 - 2026-08-19

- Validate the current package line with Angular 22.1.3, Angular CLI 22.1.5, ng-packagr 22.1.1, and Highcharts 13.0.1.
- Extend the tested Highcharts peer ceiling to 13.0.1 while preserving the existing Angular and wrapper APIs.
- Ignore `__proto__`, `prototype`, and `constructor` during recursive option merging to prevent prototype pollution from untrusted option objects.
- Replace the obsolete Karma/SystemJS test toolchain with deterministic Node tests, package checks, and a real-browser documentation contract.
- Document the Highcharts 13 module and rendering migration notes that can affect application-owned chart options.
- Add reproducible GitHub Actions builds and canonical release artifacts.

## 22.0.1 - 2026-06-20

- Update the Angular 22 validation patch line and preserve the Angular-versioned package family.
