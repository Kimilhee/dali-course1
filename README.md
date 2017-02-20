# dali-course1

Daliworks 신규 맴버 코스용 커리큘럼 프로젝트.

Thing+ REST API를 이용해서 온도관련 규칙을 쉽게 추가하는 UI를 만들어 봄으로써,
Thing+ Portal이 향후 발전해가야 할 방향을 모색해보기 위한 프로젝트입니다.

* Angular 1.x & ES6 기반.
* https://github.com/preboot/angularjs-webpack 바탕으로 작업함.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/Kimilhee/dali-course1.git

# change directory to your app
$ cd dali-course1

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

# UI 설계
* 규칙 선택
- 규칙 선택시 모든 항목을 다 표시하지 않고 현재 gateway에 물려있는 센서 항목에 한정해서 표시한다.
- 온도 선택 UI: 온도 타겟센서가 연결된 게이트웨이 및 테그가 결합된 형태의 센서를 표시: 항목 선택시 범위 지정 Slider 하단에 표시
범위 지정 Slider는 이하, 이상, 범위 내, 범위 외를 고를 수 있는 라디오버튼 표시.

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
