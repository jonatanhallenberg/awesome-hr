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

9. Glöm inte att commita!

10. Pusha till heroku

```sh
git push heroku master
```
# Env-variabel i backend

1. Installera och konfigurera dotenv
2. Skapa .env-fil och lägg till (byt ut abc mot din connection string mot MongoDB Atlas):

MONGO_DB_CONNECTION_STRING=abc
3. Ändra i server.ts så att env-variabel används:

```ts
if (process.env.MONGO_DB_CONNECTION_STRING) {
    connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => console.log('listening to port: ' + port));
    })
} else {
    console.log('Configuration MONGO_DB_CONNECTION_STRING not set')
}
```

4. Skapa en config-var i Heroku som innehåller connection string

```sh
heroku config:set MONGO_DB_CONNECTION_STRING="mongodb+srv://ithsdb:Z45hs9BcuzzIm7kb@cluster0.7fzvg.mongodb.net/awesome-hr?retryWrites=true&w=majority"
```