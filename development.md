<br/>npm init -y
<br/>npm install tailwindcss postcss autoprefixer
<br/>npx tailwindcss init -p
<br/>add build step to package.json:  <code>"build:css": "postcss styles.css -o output.css"</code>
<br/>npm i -D postcss postcss-cli
<br/>npm run build:css
