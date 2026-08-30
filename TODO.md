# TODO

## Release 22.1.2

- [x] Validate Highcharts 13.0.2 through unit, package, and live-browser gates.
- [x] Verify the direct production peer closure and npm audit result.

## Release 22.1.1

- [x] Audit the current Angular and Highcharts releases.
- [x] Preserve the public Angular wrapper API and peer ownership model.
- [x] Harden recursive option merging against prototype pollution.
- [x] Pass unit, package, Angular build, browser, and audit checks.
- [x] Validate and publish one canonical artifact to Verdaccio.
- [x] Push the source and pass GitHub Actions.
- [x] Publish the canonical artifact to public npm.
- [x] Create the GitHub tag and release assets.
- [x] Deploy and verify the package documentation in production.

## Future Maintenance

- Keep Angular-major release tags intact when advancing the current line.
- Re-test Highcharts major upgrades in the browser before extending the peer ceiling.
- Keep application-owned Highcharts licensing and module setup explicit in the documentation.
