# import-meta-resolve-geist

A demonstration of using the Geist font package and the results of `import.meta.resolve`.

## Setup

1. Clone the repo
1. Run `npm ci`

## Known Issues

When running the demo script (`node index.js`), we get an `ERR_PACKAGE_PATH_NOT_EXPORTED` from NodeJS.

```sh
➜  import-meta-resolve-geist git:(master) ✗ node index.js 
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main defined in /Users/owenbuckley/Workspace/github/import-meta-resolve-geist/node_modules/geist/package.json imported from /Users/owenbuckley/Workspace/github/import-meta-resolve-geist/index.js
    at exportsNotFound (node:internal/modules/esm/resolve:304:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:651:9)
    at packageResolve (node:internal/modules/esm/resolve:837:14)
    at moduleResolve (node:internal/modules/esm/resolve:927:18)
    at defaultResolve (node:internal/modules/esm/resolve:1169:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:542:12)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:524:17)
    at Object.resolve (node:internal/modules/esm/initialize_import_meta:30:25)
    at file:///Users/owenbuckley/Workspace/github/import-meta-resolve-geist/index.js:2:32
    at ModuleJob.run (node:internal/modules/esm/module_job:234:25) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
```

---

Of note, if we just take the `module` field of Geist's _package.json_ and add to the exports map as `.`
```json
{
  // ...
  "exports": {
    ".": "./dist/font.js",
    "./font": {
      "types": "./dist/index.d.ts",
      "default": "./dist/font.js"
    },
    // ...
  }
}
```

everything works as expected
```sh
➜  import-meta-resolve-geist git:(master) ✗ node index.js
successfully resolved geist package to path => file:///Users/owenbuckley/Workspace/github/import-meta-resolve-geist/node_modules/geist/dist/font.js
```