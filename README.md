test
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

## Installation
```
$ cd zmon-frontend
$ yarn install
```

## Execution
- for Development
    ```
    $ cd zmon-frontend/zmon-app
    $ yarn start
    ```
