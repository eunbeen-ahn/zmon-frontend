# zmon frontend workspace

## Overview
yarn workspaces 를 사용하여 모듈간 참조
```
├── packages
│    ├── zmon-app
│    │   └── package.json
│    ├── zmon-ui
│    │   └── package.json
│    └── zmon-ui-react
│        └── package.json
├── node_modules
├── yarn.lock
└── package.json
```

## 설치
```
$ cd zmon-frontend
$ yarn install
```

## 실행
- for Development
    ```
    $ cd zmon-frontend/zmon-app
    $ yarn start
    ```
