# static-netlify-function-dns

This is a (very) basic demo of Netlify Functions.

## Tips and Tricks


### Installing netlify-lambda

```
npm init -y
npm i --save netlify-lambda
```

* then edit package.json

### Local testing of functions:

This will run a local testing version of the function:

```
npm run start:lambda
```

The function will be available at this URL:

http://localhost:9000/.netlify/functions/dns?hostname=of-mu.org


This also works in my local environment:

http://localhost:9000/dns?hostname=of-mu.org
