# monorepo
方案：

 1、lerna

  - 通常用于库的管理。同时兼具依赖管理(使用npm或者yarn)和发布功能。缺点是通过lerna安装依赖会在每一个packages里面生成node_modules
  - 可以通过`lerna bootstrap --hoist`将共同的依赖提升至root

 2、yarn workspace

  - 专注依赖管理，可以将依赖提升至workpace，实现依赖共享。避免重复安装相同module。
  - 在monorepo管理的项目中，各个库之间存在依赖，yarn workspace可以帮我们自动化的完成link操作，按照拓扑排序将各个依赖进行link。

 3、lerna + yarn workspace
  - 综合两者的优点，lerna负责版本管理和发布，yarn workspace负责依赖管理
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
-   `yarn husky add .husky/<your-hook> '<your-command>'` - add hook


## Build
-   `lerna run --stream --sort build` - 参数--sort​可以控制以拓扑排序规则执行命令(需要packages提供build命令)

## Publish
> Lerna 永远不会发布标记为private的包（package.json中的”private“: true）
> 所以业务包只需要在package.json中标明即可

-   `lerna publish` - 发布自上一个版本以来发生了变化的包
-   `lerna publish from-git` - 发布当前提交中标记的包
-   `lerna publish from-package` - 发布注册表中没有最新版本的包
-   `lerna publish --canary` - 发布一个金丝雀版本（1.0.0 => 1.0.1-alpha.0+${SHA}）
-   `lerna publish --canary --preid beta` - 发布一个金丝雀版本（1.0.0 => 1.0.1-beta.0+${SHA}）

更详细内容请参考[lerna](https://github.com/lerna/lerna/tree/main/commands/publish)

