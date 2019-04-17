# Mocha Testing

Mocha runs in the root directory and find a folder called Test and run test files in there

```js
//package.json

"scripts": {
    "mocha": "mocha"
```

If test files are in a desired folder add the directory after the cmd
Mocha will look for any files that contains the name test (I.G. app.test.js, test.js) 
Or even in a directory called test/test.js

```bash
$ npm run mocha
# or
$ npm run mocha ./<Folder>/
```