# Rick & Morty

![GitHub Release Date](https://img.shields.io/github/release-date/varorb99/rickymorty)


## Install

```js
npm install
```

## Run

```js
npm start -- [command] [--arguments]
```


## Examples


+ List the characters by name. (Optional) Introduce a page number between 1 and 25 to go through the different pages. 
For example, list the characters from page 10.

```js
npm start -- list --page="10"
```

+ List the characters by a given name. (Optional) Introduce a page number to go through the different pages.
For example, list the characters named "rick" from page 2.

```js
npm start -- list --search="rick" --page="2"
```

+ List the characters by their status, dead or alive. (Optional) Introduce a page number to go through the different pages.
For example, list characters whose status is "alive" from page 2.

```js
npm start -- list --status="alive" --page="2"
```

+ List a characters complete information (name, status, species, gender, origin and location) by their id.
For example, look up information from character with id '100'

```js
npm start -- view --id="100"
```
