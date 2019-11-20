# Translations file manager

These are the scripts to manage the translations files.

1.- In the _createTranslations.js_ file you need to pass the translations object to the `createTranslationsFile` function:

```javascript
createTranslationsFile({
  thisIsATest: {
    id: 'this.is.a.test',
    defaultMessage: 'This is a test'
  }
});
```

Then run this code in a terminal:

```
node createTranslations.js
```

2.- To create the translations file.

In the _transformToJson_ file you need to pass the path of the translations.txt file and the name of the JSON file in the `transformTextToJson` function:

```javascript
transformTextToJson('./results/translations.txt', 'en-US.json');
```

Then run this code in a terminal:

```
node transformToJson.js
```

The files will be in the `/results` folder
