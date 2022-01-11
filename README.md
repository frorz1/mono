# mono
monorepo practice

## Install
-   `yarn install or yarn` - 当lerna使用了yarn workspace之后，不允许再使用lerna bootstrap --hoist安装依赖

## Start
-   `yarn app`

## Packages
  * 默认配置
  `"packages": [
    "packages/*"
  ]`
  * 如果packages下的目录为多层，则需要指明
  `"packages": [
    "packages/*/*"
  ]`

## Command

当使用`lerna + yarn workspace`时, 每一个pkg不允许拥有单独的yarn.lock, 所以安装依赖时不能在指定pkg下面使用 yarn add some-package, 所有安装命令请使用`yarn workspace`

-   `yarn workspace <package-name> <command>`

-   `yarn workspace @mono/pgk1 add @mono/pgk2`  -  将pkg2 添加到 pkg1的依赖中, 第一次安装依赖需要指明版本号
-   `yarn workspace @mono/pgk1 add axios`  -  将axios 添加到 pkg1的依赖中`
-   `yarn add some-package -W` - 添加全局依赖（必须使用-W）

-   `yarn workspace @mono/pgk1 remove @mono/pgk2` - 移除某个pkg的依赖
-   `yarn remove lodash -W` - 移除全局依赖
-   `yarn workspaces run clean` - 执行所有package的clean操作


## Build
-   `lerna run --stream --sort build` - 参数--sort​可以控制以拓扑排序规则执行命令(需要packages提供build命令)

## Publish


