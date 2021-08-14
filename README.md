<h1 align="center">HackaLearn Homepage 🖐</h1>
<p align="center">
<img alt="character" src="https://github.com/devrel-kr/HackaLearn/raw/main/assets/banner-768x216@2-ko.png" />
</p>

HackaLearn 클라우드 스킬 챌린지의 <a target="_blank" href="https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/">Gatsby 및 Azure Static Web Apps를 사용하여 정적 웹앱 만들기</a>를 학습하고 azure로 배포한 <a target="_blank" href="https://nice-beach-04ceafd00.azurestaticapps.net/">hackalearn 소개 페이지</a>입니다.

## 설치 및 배포 방법

### Gatsby 설치 및 사용

npm 명령어를 위한 [nodejs 설치](https://hello-bryan.tistory.com/95)

```bash
$ npm install gatsby-cli -g
```

새 Gatsby 앱 만들기

```bash
$ gatsby new myApp
```

Gatsby 실행

```bash
$ cd myApp
$ gatsby develop
```
<br><br>

### 기본 앱에서 소스코드 수정하기

* [src/pages/index.js](https://github.com/PARKINHYO/hackalearn.io/blob/master/src/pages/index.js)
* [src/images/gatsby-icon.png](https://github.com/PARKINHYO/hackalearn.io/blob/master/src/images/gatsby-icon.png)
* [gatsby-config.js](https://github.com/PARKINHYO/hackalearn.io/blob/master/gatsby-config.js)

<br><br>

### 빌드 및 Github에 코드 푸시

```bash
$ gatsby build
$ npx http-server -p 5000
```

Github 레포 생성하기. new 단추를 클릭

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/create-github-repo.png)

이름을 지정하고 create repository 클릭

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/github-naming.png)

로컬 파일 원격으로 푸시

```bash
$ git add .
$ git commit -m "adding About page to site"
$ git remote add origin https://github.com/<user>/gatsby-app.git
$ git push -u origin master
```

<br><br>

### Static Web Apps에 배포

처음이라면 애저를 무료로 사용 해볼 수 있다. [바로가기](https://azure.microsoft.com/ko-kr/free/)

애저 포탈에서 정적 웹앱 검색 후 찾아서 들어가기

![image](https://user-images.githubusercontent.com/47745785/129439280-afe79a1f-fbb3-4a44-8049-29c6ffa0d315.png)

배포 정보 설정

* 리소스 그룹 생성
* 웹앱의 이름 설정 
* 호스팅 계획 : 무료
* Azure Functions API, 스테이징 환경을 위한 영역 : East Asia
* GitHub 계정 연동 및 레포, 분기 설정

검토 + 만들기 클릭

![image](https://user-images.githubusercontent.com/47745785/129439322-f7a731ee-7b47-4f06-a9ad-8d6bb1344650.png)
![image](https://user-images.githubusercontent.com/47745785/129439395-7f9e73a3-6087-4a8b-a1d1-953b860f6d24.png)

만들기 단추 및 리소스로 이동 단추 클릭

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/create-button.png)
![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/go-to-resource-button.png)

Github 작업 검토하기, 사이트 확인하기

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/static-app-portal.png)

Github Actions에 의해 레포를 Azure Static Web Apps에 자동 배포한다. [레포의 actions 코드](https://github.com/PARKINHYO/hackalearn.io/blob/master/.github/workflows/azure-static-web-apps-nice-beach-04ceafd00.yml), [레포의 액션탭 확인](https://github.com/PARKINHYO/hackalearn.io/actions) 사이트의 로직을 수정하여 Commit 할 때마다 Github Actions이 Azure Static Web Apps 실시간으로 배포해준다. 

![image](https://docs.microsoft.com/ko-kr/learn/modules/create-deploy-static-webapp-gatsby-app-service/media/static-app-portal-finished.png)

