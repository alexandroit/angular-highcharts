# TODO

## Release 22.1.1

- [x] Audit the current Angular and Highcharts releases.
- [x] Preserve the public Angular wrapper API and peer ownership model.
- [x] Harden recursive option merging against prototype pollution.
- [x] Pass unit, package, Angular build, browser, and audit checks.
- [x] Validate and publish one canonical artifact to Verdaccio.
- [ ] Push the source and pass GitHub Actions.
- [ ] Publish the canonical artifact to public npm.
- [ ] Create the GitHub tag and release assets.
- [ ] Deploy and verify the package documentation in production.

## Future Maintenance

- Keep Angular-major release tags intact when advancing the current line.
- Re-test Highcharts major upgrades in the browser before extending the peer ceiling.
- Keep application-owned Highcharts licensing and module setup explicit in the documentation.
