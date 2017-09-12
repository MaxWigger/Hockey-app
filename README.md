# Hockey-app
Inital setuptests with visual studio code

# Commands used to create the app

```sh
npm install -g @angular/cli
npm install -g pug pug-cli
ng new Hockey-app --style less --routing
npm install bootstrap jquery --save
```

Convert `*.html` files to `*.pug` and execute in bash one:
```sh
pug -w src --pretty
```

In bash two:
```sh
ng serve
```

```sh
ng g module team-lineup --routing
ng g component team-lineup team-lineup/team-lineup
```