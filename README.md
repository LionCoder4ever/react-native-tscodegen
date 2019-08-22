# react-native-tscodegen

Type Script Code Generation for React Native Turbo Module

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Building this repo

CI has not been setup, so for now please run init.bat .

## Packages

### tslint-shared

This is the shared tslint configuration for all other packages.

### RN-TSCodegen

This is the TypeScript code generation for TurboModule in react native.

In `facebook/react-native`, you are able to find following files in `packages/react-native-codegen/src`:

- `cli/parser/parser-cli.js`: It calls `parseFiles` from
- `cli/parser/parser.js`: It calls `parseFile` from
- `parsers/flow/index.js`: It parse a Flow source file to `SchemaType`, which is defined in `CodegenSchema.js`

RN-TSCodegen also provides `typeScriptToCodeSchema` for the same purpose, but instead of consuming Flow source file, it consumes TypeScript source file.

### RN-TSCodegen-Test

This package contains all test cases for RN-TSCodegen.

### ts-parsec

This is a parser combinator written in TypeScript. It allows you to create parsers very quickly. Please take a look at:

- `packages/ts-parsec/test/TestRecursiveParser.ts`
- `packages/minimum-flow-parser/src/Parser.ts`

for deeper understanding of this library.

### minimum-flow-parser

This is a Flow parser, just enough to convert necessary files to TypeScript for this repo.

### update-test-files

I started this repo in the days when Facebook is actively updating their react native code generation for Flow. There is no document or specification at this moment.

I need to develop a TypeScript version working exactly as their Flow code generation, and to track and catch up their progress when they are changing their code generation parallelly.

So I started update-test files. Whenever I need to know what is changed in their code, I run this package, and then I can:

- Get the latest `CodegenSchema.js` converted to TypeScript automatically. RN-TSCodegen is written in TypeScript, so the definition of the intermediate format should be recognizable by TypeScript.
- Get latest test cases. Facebook has prepared a set of Flow source files, along with snapshots showing how a `SchemaType` object should be created for each file. All test cases are automatically converted to TypeScript to be my test cases. At the early stage of the development, if RN-TSCodegen produces exactly the same output as theirs, I consider my code generation is correct.
- Get the diff of generated files. In this way I can know how many features are added or removed. This is a very important guidance for the development of this project.

Since minimum-flow-parser is built just for converting test cases, so it is possible that it fails to parse a Flow program because Facebook uses more Flow features in their test cases then the last time. It will be updated then.
