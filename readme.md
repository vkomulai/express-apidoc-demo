express-apidoc-demo
===================
- Simple Node.js express app using apidoc for generating API documentation.
- For testing http://apidocjs.com/ API documentation tool.

## Getting started

```sh
npm install apidoc -g
apidoc -f "routes/.*\\.js$" -i ./  -o apidoc/
npm install && npm start
open http://localhost:3000/apidoc
```

## Configuring REST API with apidoc
- Add apidoc-section to [package.json](package.json)
```js
"apidoc": {
  "title": "Users API",
  "url" : "https://localhost:3000/api/v1"
}
```
- Add apidoc annotations to routes [routes/users.js](routes/users.js)
- Generate documentation using `rm -rf apidoc && apidoc -f "routes/.*\\.js$" -i ./  -o apidoc/`
  - There is also a Gulp task available https://www.npmjs.com/package/gulp-apidoc
- Enable statically generated docs from  `app.js` using `app.use('/apidoc', express.static('apidoc'));`
