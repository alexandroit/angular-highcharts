# Dependency maintenance — 22.1.4

The runtime `tslib` import is retained and resolves to `npm:@stackline/tslib@1.0.0`, preserving the upstream 2.8.1 helper API. `ng-packagr` uses the same reviewed alias through a targeted npm override; Angular and Highcharts peer ranges are unchanged. The development `http-server` command resolves to `npm:@stackline/http-server@1.0.0`; it is not shipped as a runtime dependency.

Historical Angular release fixtures retain their original versions. The active Angular 22 generator and browser application validate the maintained package. Before release the browser suite installs the compiled candidate tarball; after release the public application pins the exact npm version and integrity.

Upstream comparison fixtures remain independent. No application API or rendering behavior was intentionally changed.

The active documentation lock also updates transitive `ip-address` from 10.5.0 to the patched 10.7.2 release for [GHSA-rpw4-54j3-4h4q](https://github.com/advisories/GHSA-rpw4-54j3-4h4q) and [GHSA-2vr4-cq9g-pvrc](https://github.com/advisories/GHSA-2vr4-cq9g-pvrc). This tooling-only dependency is absent from the published runtime closure.

The active browser documentation app also uses the maintained tslib alias. Its npm override keeps Angular build peers and shared framework dependency nodes on that same compatible helper implementation; the full installed tree, compiler build, and browser contract are checked. This does not change the library peer ranges or historical fixture manifests.
