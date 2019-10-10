# Rick & Morty

![GitHub Release Date](https://img.shields.io/github/release-date/varorb99/rickymorty)
![GitHub last commit](https://img.shields.io/github/last-commit/varorb99/rickymorty)


## Install

```js
npm install
```

## Run


+ List the characters by name. (Optional) Introduce a page number between 1 and 25 to go through the different pages. 

```js
npm start -- list --page="10"
```

+ List the characters by a given name. (Optional) Introduce a page number to go through the different pages.

```js
npm start -- list --search="rick" --page="2"
```

+ List the characters by their status, dead or alive. (Optional) Introduce a page number to go through the different pages.

```js
npm start -- list --status="alive" --page="2"
```

+ List a characters complete information (name, status, species, gender, origin and location) by their id.

```js
npm start -- view --id="100"
```
