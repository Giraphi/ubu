<h1>Links</h1>

- <a href="https://nextjs.org/learn/basics/deploying-nextjs-app/setup">next.js deployment and vercel setup</a>

<h1>Next.js</h1>

There's a next.js template <a href="https://github.com/vercel/next.js/tree/canary/examples/with-styled-components">with-styled-components</a>. The current <a href="https://nextjs.org/docs/advanced-features/compiler">Next.js compiler</a> supports styled-components directly, so we don't need to work with setups based on babel!

Before we start, set git username and email globally, because create-next-app will read from that:
```
git config --global user.email "hoeps.raphael@gmail.com"
git config --global user.name Giraphi
git config --list
```

The template isn't setup in typescript so we start with that first:

```
npm uninstall -g create-next-app
npx create-next-app ubu --ts
cd ubu
yarn add styled-components
yarn add @types/styled-component
```

Now copy from the <a href="https://github.com/vercel/next.js/tree/canary/examples/with-styled-components">template</a>
- `next.config.js`
- `_document.tsx`

<h1>Git</h1>
Create git repo on github, then push to it:

```
git remote add origin git@github.com:Giraphi/ubu.git
git push -u origin main
```

Rest global usename and email:

```
git config --global user.email "hoeps.raphael@funct.com"
git config --global user.name "raphaelhoeps" 
```

Set username locally:
```
git config user.email hoeps.raphael@gmail.com
git config user.name Giraphi
```

Do a test commit & push.

<h1>Vercel</h1>
Setupa Vercal account and connect it to github repo as described here: <a href="https://nextjs.org/learn/basics/deploying-nextjs-app/deploy">here</a>.

After that, the app should be online at e.g. `https://ubu-eta.vercel.app/`
