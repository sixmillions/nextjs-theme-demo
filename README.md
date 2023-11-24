# NextJS Theme

1. node v20.9.0
2. [Next 14](https://nextjs.org/docs)
3. [Daisyui 4.4.6](https://daisyui.com/)
4. [next-theme](https://github.com/pacocoursey/next-themes)

## Dev

```cmd
npx create-next-app next-theme-demo
```

```cmd
npm i -D daisyui
```

`tailwind.config.js` 增加

```tsx
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

```cmd
npm install next-theme
```

## 使用别的主题当作light/dark

1. garden -> light
2. night -> dark