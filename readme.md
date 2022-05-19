# Deploy

1. Ändra connection string i server.ts till MongoDB Atlas (glöm inte att lägga till databasnamn efter slash)
2. Skapa app i Heroku
3. Installera Heroku CLI
4. Kör *heroku login*
5. Lägg till heroku som remote

```sh
heroku git:remote -a awesome-hr
```

6. Kör kommandon för att använda subdir-buildpack:

https://github.com/timanovsky/subdir-heroku-buildpack

- Ändra *projects/nodejs/frontend* till er katalog för backend

7. Se till att start-scriptet i package.json är:

```json
"start": "ts-node server.ts"
```

8. Se till att porten kan styras via env-variabeln PORT:

```js
const port = process.env.PORT || 4000
```