// @traceResolution: true
// @noImplicitReferences: true
// @currentDirectory: /
// @noLib: true
// This tests that an import can be matched by a `package.json` giving us an implicitly `any` module

// @filename: /tsconfig.json
{}

// @filename: /node_modules/foo/package.json
{ }

// @filename: /a.ts
import * as foo from "foo";




//TODO: this isn't exactly 'typings', it's a module resolution issue...
//TODO: test for error with '--noImplicitAny'


