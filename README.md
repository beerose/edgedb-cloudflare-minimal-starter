# edgedb-cloudflare-minimal-starter

## Local development

Set env variables in the `wrangler.toml` file.
```
EDGEDB_INSTANCE=
EDGEDB_SECRET_KEY=
```

`EDGEDB_INSTANCE` is your EdgeDB Cloud instance name, while the `EDGEDB_SECRET_KEY` is the secret key you can generate from the EdgeDB Cloud dashboard.

Install dependencies:
```sh
pnpm i # npm i # yarn
```

Start Worker locally:
```sh
npx wrnagler dev
```

## Deployment

```sh
npx wrnagler deploy
```
