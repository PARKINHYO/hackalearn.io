<h1 align="center">HackaLearn Homepage ๐</h1>
<p align="center">
<img alt="character" src="https://github.com/devrel-kr/HackaLearn/raw/main/assets/banner-768x216@2-ko.png" />
</p>

HackaLearn ํด๋ผ์ฐ๋ ์คํฌ ์ฑ๋ฆฐ์ง์ <a target="_blank" href="https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/">Gatsby ๋ฐ Azure Static Web Apps๋ฅผ ์ฌ์ฉํ์ฌ ์ ์  ์น์ฑ ๋ง๋ค๊ธฐ</a>๋ฅผ ํ์ตํ๊ณ  azure๋ก ๋ฐฐํฌํ <a target="_blank" href="https://nice-beach-04ceafd00.azurestaticapps.net/">hackalearn ์๊ฐ ํ์ด์ง</a>์๋๋ค.

<br><br>

## ์ค์น ๋ฐ ๋ฐฐํฌ ๋ฐฉ๋ฒ

### Gatsby ์ค์น ๋ฐ ์ฌ์ฉ

npm ๋ช๋ น์ด๋ฅผ ์ํ [nodejs ์ค์น](https://hello-bryan.tistory.com/95)

```bash
$ npm install gatsby-cli -g
```

์ Gatsby ์ฑ ๋ง๋ค๊ธฐ

```bash
$ gatsby new myApp
```

Gatsby ์คํ

```bash
$ cd myApp
$ gatsby develop
```
<br>

### ๊ธฐ๋ณธ ์ฑ์์ ์์ค์ฝ๋ ์์ ํ๊ธฐ

* [src/pages/index.js](https://github.com/PARKINHYO/hackalearn.io/blob/master/src/pages/index.js)
* [src/images/gatsby-icon.png](https://github.com/PARKINHYO/hackalearn.io/blob/master/src/images/gatsby-icon.png)
* [gatsby-config.js](https://github.com/PARKINHYO/hackalearn.io/blob/master/gatsby-config.js)

<br>

### ๋น๋ ๋ฐ Github์ ์ฝ๋ ํธ์

```bash
$ gatsby build
$ npx http-server -p 5000
```

Github ๋ ํฌ ์์ฑํ๊ธฐ. new ๋จ์ถ๋ฅผ ํด๋ฆญ

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/create-github-repo.png)

์ด๋ฆ์ ์ง์ ํ๊ณ  create repository ํด๋ฆญ

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/github-naming.png)

๋ก์ปฌ ํ์ผ ์๊ฒฉ์ผ๋ก ํธ์

```bash
$ git add .
$ git commit -m "adding About page to site"
$ git remote add origin https://github.com/<user>/gatsby-app.git
$ git push -u origin master
```

<br>

### Static Web Apps์ ๋ฐฐํฌ

์ฒ์์ด๋ผ๋ฉด ์ ์ ๋ฅผ ๋ฌด๋ฃ๋ก ์ฌ์ฉ ํด๋ณผ ์ ์๋ค. [๋ฐ๋ก๊ฐ๊ธฐ](https://azure.microsoft.com/ko-kr/free/)

์ ์  ํฌํ์์ ์ ์  ์น์ฑ ๊ฒ์ ํ ์ฐพ์์ ๋ค์ด๊ฐ๊ธฐ

![image](https://user-images.githubusercontent.com/47745785/129439280-afe79a1f-fbb3-4a44-8049-29c6ffa0d315.png)

๋ฐฐํฌ ์ ๋ณด ์ค์ 

* ๋ฆฌ์์ค ๊ทธ๋ฃน ์์ฑ
* ์น์ฑ์ ์ด๋ฆ ์ค์  
* ํธ์คํ ๊ณํ : ๋ฌด๋ฃ
* Azure Functions API, ์คํ์ด์ง ํ๊ฒฝ์ ์ํ ์์ญ : East Asia
* GitHub ๊ณ์  ์ฐ๋ ๋ฐ ๋ ํฌ, ๋ถ๊ธฐ ์ค์ 

๊ฒํ  + ๋ง๋ค๊ธฐ ํด๋ฆญ

![image](https://user-images.githubusercontent.com/47745785/129439322-f7a731ee-7b47-4f06-a9ad-8d6bb1344650.png)
![image](https://user-images.githubusercontent.com/47745785/129439395-7f9e73a3-6087-4a8b-a1d1-953b860f6d24.png)

๋ง๋ค๊ธฐ ๋จ์ถ ๋ฐ ๋ฆฌ์์ค๋ก ์ด๋ ๋จ์ถ ํด๋ฆญ

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/create-button.png)
![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/go-to-resource-button.png)

Github ์์ ๊ฒํ ํ๊ธฐ, ์ฌ์ดํธ ํ์ธํ๊ธฐ

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/static-app-portal.png)

Github Actions์ ์ํด ๋ ํฌ๋ฅผ Azure Static Web Apps์ ์๋ ๋ฐฐํฌํ๋ค. [๋ ํฌ์ actions ์ฝ๋](https://github.com/PARKINHYO/hackalearn.io/blob/master/.github/workflows/azure-static-web-apps-nice-beach-04ceafd00.yml), [๋ ํฌ์ ์ก์ํญ ํ์ธ](https://github.com/PARKINHYO/hackalearn.io/actions) 

์ฌ์ดํธ์ ๋ก์ง์ ์์ ํ์ฌ Commit ํ  ๋๋ง๋ค Github Actions์ด Azure Static Web Apps ์ค์๊ฐ์ผ๋ก ๋ฐฐํฌํด์ค๋ค. 

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/static-app-portal-finished.png)

________________________