# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.4.0](https://code.alipay.com/remix/remix/compare/v2.3.0...v2.4.0) (2020-06-05)

### Bug Fixes

- 修正生成的模板中会带有页面没用到的小程序自定义组件的问题 ([#1043](https://code.alipay.com/remix/remix/issues/1043)) ([c300c33](https://code.alipay.com/remix/remix/commit/c300c3307ea41c0cff662922fec12391eac2cb79))
- **wechat:** 修复 Map 组件 polygons 属性不生效的问题 ([#1038](https://code.alipay.com/remix/remix/issues/1038)) ([48487b2](https://code.alipay.com/remix/remix/commit/48487b21f94be6d73c02a91847d9a4e46d476bb8)), closes [#1035](https://code.alipay.com/remix/remix/issues/1035)

### Features

- **cli:** 新增 -a 参数用于分析构建后的包依赖 ([#1014](https://code.alipay.com/remix/remix/issues/1014)) ([97759d1](https://code.alipay.com/remix/remix/commit/97759d1b107e7e7be392b5a703fe329f97cf4081)), closes [#958](https://code.alipay.com/remix/remix/issues/958)

# [2.3.0](https://code.alipay.com/remix/remix/compare/v2.2.0...v2.3.0) (2020-06-04)

### Bug Fixes

- 修复 ES Module 的运行时插件无法注册的问题 ([8e73f1d](https://code.alipay.com/remix/remix/commit/8e73f1d5fcc2dc2f1ee2bc9ad9caa5a992c99c5a))

### Features

- 插件支持编译时的 onAppConfig 和 onPageConfig hook ([#1015](https://code.alipay.com/remix/remix/issues/1015)) ([9ee59be](https://code.alipay.com/remix/remix/commit/9ee59beb37422049e87bdbaf8e3431c3a6a7f762))
- 支持 onLoad 和 unload 生命周期 ([4bfc325](https://code.alipay.com/remix/remix/commit/4bfc325ec627cc75bcbe8e6524368d8a93ac8674))
- 支持 public 目录 ([#1016](https://code.alipay.com/remix/remix/issues/1016)) ([0ed6caf](https://code.alipay.com/remix/remix/commit/0ed6caf64a58b15d2e3330d8a8de7cf3eddb63d5))

### Performance Improvements

- **remix:** 避免更新没有变化的属性 ([#989](https://code.alipay.com/remix/remix/issues/989)) ([4709bda](https://code.alipay.com/remix/remix/commit/4709bda754bd4d042d6259aff9ab074ed34f8ad8))

# [2.2.0](https://code.alipay.com/remix/remix/compare/v2.1.1...v2.2.0) (2020-05-29)

### Bug Fixes

- **cli:** 修复 watch 模式自定义 cwd 导致编译两次的问题 ([#1008](https://code.alipay.com/remix/remix/issues/1008)) ([c14e111](https://code.alipay.com/remix/remix/commit/c14e111b1b18299f36a9e95fa43386944e05b7dd))

### Features

- 小程序端支持 suspense ([#995](https://code.alipay.com/remix/remix/issues/995)) ([aa23f14](https://code.alipay.com/remix/remix/commit/aa23f14fa2836b76d43b50c73f0655011a41a403))
- 支持运行时插件 ([#988](https://code.alipay.com/remix/remix/issues/988)) ([3a59fff](https://code.alipay.com/remix/remix/commit/3a59fff8efc6de0a163715762cfb2f3e179fe443)), closes [#983](https://code.alipay.com/remix/remix/issues/983)

## [2.1.1](https://code.alipay.com/remix/remix/compare/v2.1.0...v2.1.1) (2020-05-21)

### Bug Fixes

- **ali:** 修正 Button[onGetAuthorize] 不生效的问题 ([2c3d27e](https://code.alipay.com/remix/remix/commit/2c3d27e5a744fb6f80362b6a891c58c1dcfde7e6))
- 修复表单类组件 name 属性不生效的问题 ([#981](https://code.alipay.com/remix/remix/issues/981)) ([07d0a22](https://code.alipay.com/remix/remix/commit/07d0a22ef3b27a5297ddef87e7372f75fb922bf0))

# [2.1.0](https://code.alipay.com/remix/remix/compare/v2.0.7...v2.1.0) (2020-05-21)

### Bug Fixes

- 修正错误的 webpack mode ([f46dd92](https://code.alipay.com/remix/remix/commit/f46dd926f08eb2f3f43326f35768efa8cf1be794))
- 添加 port 至 options 并增加默认值：3000 ([ec7b67e](https://code.alipay.com/remix/remix/commit/ec7b67ee4f0dd31434795d9d7526b6435298c576))
- 移除 options 中的 default，在运行时动态判断以避免 CI 错误 ([6bec914](https://code.alipay.com/remix/remix/commit/6bec914249dbcaba71c7fde5f0c984163a412fd9))

### Features

- configWebpack 新增 addCSSRule 帮助方法 ([aaf6a88](https://code.alipay.com/remix/remix/commit/aaf6a885bc0dcd20f1cd3c5a182fb14a5d497aa1))
- 支持通过 --port 指定端口号 ([fb2a78f](https://code.alipay.com/remix/remix/commit/fb2a78fc43c758876e7e69fb5c4d441c195a007b))

## [2.0.7](https://code.alipay.com/remix/remix/compare/v2.0.6...v2.0.7) (2020-05-14)

### Bug Fixes

- 修正配置文件的 watch ([#951](https://code.alipay.com/remix/remix/issues/951)) ([2540706](https://code.alipay.com/remix/remix/commit/254070694453fd31c9c42f7c43269a68f7589039))

## [2.0.6](https://code.alipay.com/remix/remix/compare/v2.0.5...v2.0.6) (2020-05-13)

### Bug Fixes

- **web:** 修复同构 px 转 rem 失效 ([#924](https://code.alipay.com/remix/remix/issues/924)) ([b5da034](https://code.alipay.com/remix/remix/commit/b5da0343ee739bb257673b752c340623212aaa63))
- **web:** 修复构建错误 ([b99177f](https://code.alipay.com/remix/remix/commit/b99177fb4d77854efbc1def780fdbb52f42eb04d)), closes [#934](https://code.alipay.com/remix/remix/issues/934)

## [2.0.5](https://code.alipay.com/remix/remix/compare/v2.0.4...v2.0.5) (2020-05-12)

### Bug Fixes

- **one:** 修复 remix/one 头条 View 组件 onTap 不生效的问题 ([#936](https://code.alipay.com/remix/remix/issues/936)) ([1af831d](https://code.alipay.com/remix/remix/commit/1af831d5ff141541966e4358a569984bedac250b))
- 修复 windows watch 模式生命周期不生效的问题 ([#930](https://code.alipay.com/remix/remix/issues/930)) ([29ca6e6](https://code.alipay.com/remix/remix/commit/29ca6e6c6efab24d62a4ed06c23f0baaaf652250))

## [2.0.4](https://code.alipay.com/remix/remix/compare/v2.0.3...v2.0.4) (2020-05-10)

### Bug Fixes

- 修复 watch 时新增生命周期回调不生效的问题 ([8cdc87c](https://code.alipay.com/remix/remix/commit/8cdc87c1d71f45851d8e1bc4b2cb93a21d007d1a)), closes [#913](https://code.alipay.com/remix/remix/issues/913)
- **web:** 修正配置 rootDir 不生效的问题 ([a53512e](https://code.alipay.com/remix/remix/commit/a53512e2d7c5ce554630c3dc72b9dfaa74451bdc))
- 修正 watch 时修改配置不生效的问题 ([c0c3862](https://code.alipay.com/remix/remix/commit/c0c3862db8f0f4ca69a9ba84b6fb3aa7cd8f05f2))
- **wechat:** 增加 getRealtimeLogManager api ([67db014](https://code.alipay.com/remix/remix/commit/67db014fd48a9b62425b28188b66f67b5f75dac3)), closes [#884](https://code.alipay.com/remix/remix/issues/884)

### Reverts

- Revert "修复一大波 watch 问题 (#909)" (#915) ([74e6bca](https://code.alipay.com/remix/remix/commit/74e6bca78ad26a9ddce2f40b3bda387b71bdff60)), closes [#909](https://code.alipay.com/remix/remix/issues/909) [#915](https://code.alipay.com/remix/remix/issues/915)

## [2.0.3](https://code.alipay.com/remix/remix/compare/v2.0.2...v2.0.3) (2020-05-08)

### Bug Fixes

- **cli:** 修复生产环境生命周期和自定义组件可能无效的问题 ([489cf75](https://code.alipay.com/remix/remix/commit/489cf75a32e727be401939fae9fad97ee2af3a37)), closes [#905](https://code.alipay.com/remix/remix/issues/905) [#904](https://code.alipay.com/remix/remix/issues/904)

## [2.0.2](https://code.alipay.com/remix/remix/compare/v2.0.1...v2.0.2) (2020-05-07)

### Bug Fixes

- **cli:** 修复存在循环依赖时，cli build 不会结束的问题 ([ea5308b](https://code.alipay.com/remix/remix/commit/ea5308bacac1b3e6707a101834701223ec711d17))
- **one:** 导出 remix/one 组件 props type 定义 ([482ec49](https://code.alipay.com/remix/remix/commit/482ec49ae2bfa54f63814175350a92661dd42c88))

## [2.0.1](https://code.alipay.com/remix/remix/compare/v2.0.0...v2.0.1) (2020-05-06)

### Bug Fixes

- 修复 configWebpack 缺少的 webpack 实例参数 ([52cb52a](https://code.alipay.com/remix/remix/commit/52cb52a92b8577c55e807191d9a5dc510eb4927e))
- 修复无法解析字体文件的问题 ([9a325d6](https://code.alipay.com/remix/remix/commit/9a325d62ecbbdf6354e5d5dfc0120953e0846f89))
- 修复部分 App 生命周期不生效的问题 ([#898](https://code.alipay.com/remix/remix/issues/898)) ([e6c6bf1](https://code.alipay.com/remix/remix/commit/e6c6bf1d5feed53562fb1edb547c073c4d8a8362)), closes [#895](https://code.alipay.com/remix/remix/issues/895)
- 修正 common chunk 切分错误导致包过大的问题 ([#900](https://code.alipay.com/remix/remix/issues/900)) ([cf444aa](https://code.alipay.com/remix/remix/commit/cf444aa16a731c823615ef5dc59ed4f773ad16b4))

# [2.0.0](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.18...v2.0.0) (2020-05-05)

### Bug Fixes

- **ali:** 修复 Input 组件的 enableNative 属性不生效的问题 ([f428027](https://code.alipay.com/remix/remix/commit/f42802796fd1be93cbdfde47dd8c6060cac19f04))

# [2.0.0-alpha.18](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2020-05-05)

### Features

- 完善插件机制 ([#850](https://code.alipay.com/remix/remix/issues/850)) ([0897cbf](https://code.alipay.com/remix/remix/commit/0897cbf0d427362981d3d9523ff38259ff4abebb))

# [2.0.0-alpha.17](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2020-04-30)

### Bug Fixes

- **wechat:** 修复 OfficialAccount 属性问题 ([4b80e6d](https://code.alipay.com/remix/remix/commit/4b80e6d393f150fe1c5e2f41b1dc8cccabe66410))
- 修复 beforeTabItemTap hook 不生效的问题 ([3dd4ba7](https://code.alipay.com/remix/remix/commit/3dd4ba7668f7f916dbbf5a77b71dda4655a1a079))

# [2.0.0-alpha.16](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2020-04-29)

### Bug Fixes

- 修复 usePageEvent 不生效的问题 ([a470d15](https://code.alipay.com/remix/remix/commit/a470d1523c917d35d8ff5b109dae4699916b723c))
- 修复遗失的 useNativeEffect 导出 ([ab19468](https://code.alipay.com/remix/remix/commit/ab19468824b225cc8de4624ca2a8ef0517b6f63e))

# [2.0.0-alpha.15](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2020-04-29)

### Bug Fixes

- 修复生产环境 build 结束命令不退出的问题 ([7102a90](https://code.alipay.com/remix/remix/commit/7102a90d8b5120f3c8c5ae81797e5bc19f7aa137))
- 修复生产环境打包会丢失自定义组件的问题 ([92df12d](https://code.alipay.com/remix/remix/commit/92df12ddfc905428d3d59a04a0311d841ea660f0))
- **cli:** 修复 @alipay/remix-cli 缺少 @alipay/remix-macro 依赖的问题 ([#867](https://code.alipay.com/remix/remix/issues/867)) ([1d5e322](https://code.alipay.com/remix/remix/commit/1d5e32218bf43dac1bab28802455a4852a8cfaa5))
- **wechat:** 修复 onResize 和 onTabItemTap 不生效的问题 ([#857](https://code.alipay.com/remix/remix/issues/857)) ([0a1a94a](https://code.alipay.com/remix/remix/commit/0a1a94a667071fc777d4985416a4fbbb725a5a91))
- 两份 extensions 配置 ([c6ac704](https://code.alipay.com/remix/remix/commit/c6ac704148b4328276cb2a30a6022567d46cc1b0))

### Features

- 自定义组件也支持 stopPropagation ([#870](https://code.alipay.com/remix/remix/issues/870)) ([3fb7d46](https://code.alipay.com/remix/remix/commit/3fb7d46d907128372b6dabe7548afac074c7c579))

# [2.0.0-alpha.14](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2020-04-27)

### Bug Fixes

- 修复自定义组件中 usingComponent 没有被处理的问题 ([a068a33](https://code.alipay.com/remix/remix/commit/a068a335595d7f969902d6a2f97cfd86f537c480)), closes [#845](https://code.alipay.com/remix/remix/issues/845)
- 修复自定义组件引用 npm 模块失效的问题 ([00762db](https://code.alipay.com/remix/remix/commit/00762db978bb4583088953eb6ccf1547adfd68b5)), closes [#762](https://code.alipay.com/remix/remix/issues/762)

# [2.0.0-alpha.13](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2020-04-26)

**Note:** Version bump only for package @alipay/remix-cli

# [2.0.0-alpha.12](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2020-04-26)

**Note:** Version bump only for package @alipay/remix-cli

# [2.0.0-alpha.11](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2020-04-26)

**Note:** Version bump only for package @alipay/remix-cli

# [2.0.0-alpha.10](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2020-04-26)

### Bug Fixes

- 修复 postcss.config.js 的加载 ([aae5461](https://code.alipay.com/remix/remix/commit/aae5461296c9640719835743818a7aa33dc73020))

# [2.0.0-alpha.9](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2020-04-26)

**Note:** Version bump only for package @alipay/remix-cli

# [2.0.0-alpha.8](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2020-04-26)

**Note:** Version bump only for package @alipay/remix-cli

# [2.0.0-alpha.7](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2020-04-23)

### Bug Fixes

- 修复 remix 命令可能执行出错的问题 ([83ba129](https://code.alipay.com/remix/remix/commit/83ba129c68c7457db078e22fd3921d5b4c775b25))
- 修复 web 下 App 不是第一个 entry 的问题 ([31cccdc](https://code.alipay.com/remix/remix/commit/31cccdc4c9c5dbc93c506feefbc039b66c1dfbff))

### Features

- 返回编译事件，方便跟其他工具集成 ([901bc6e](https://code.alipay.com/remix/remix/commit/901bc6ef046194c80b102a1165b0349362c7b59b))

# [2.0.0-alpha.6](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2020-04-21)

### Bug Fixes

- **cli:** 修复 app.config.ts 和 [page].config.ts 没有触发重新编译的问题 ([232ff43](https://code.alipay.com/remix/remix/commit/232ff43eb8c5ead784e186297134f16682f66f6e)), closes [#831](https://code.alipay.com/remix/remix/issues/831)
- **web:** web 端 button 字体大小与小程序统一 ([3b88837](https://code.alipay.com/remix/remix/commit/3b888370dda752e886baead8e123a936b0a4b59f))
- 修复使用 scss 出错的问题 ([6f205f0](https://code.alipay.com/remix/remix/commit/6f205f082a64995c96f8b412c9537ac063ffa3a9)), closes [#827](https://code.alipay.com/remix/remix/issues/827)

### Performance Improvements

- 简化 web watch 模式输出的信息 ([#835](https://code.alipay.com/remix/remix/issues/835)) ([c9c24d7](https://code.alipay.com/remix/remix/commit/c9c24d725bc37ee9fcbde77ea9d9acdc8611a288))

# [2.0.0-alpha.5](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2020-04-20)

### Bug Fixes

- 修复 web 平台下没有配置 tabbar 出错的问题 ([de442c0](https://code.alipay.com/remix/remix/commit/de442c08fe6ac3d266cc7ca087f6b0c9ce5a99f7))
- 修复 windows 下无法启动 web 应用的问题 ([#816](https://code.alipay.com/remix/remix/issues/816)) ([f6a9a05](https://code.alipay.com/remix/remix/commit/f6a9a05e08433601f57259c0b775b702e59a7a37)), closes [#806](https://code.alipay.com/remix/remix/issues/806)
- 修复引入 JSON 文件报错的问题 ([ec4c29f](https://code.alipay.com/remix/remix/commit/ec4c29fc39568047ddbd0d98aba3d6c4e0a2272c))

### Features

- **web:** web 添加浏览器兼容支持 ([1baf5f2](https://code.alipay.com/remix/remix/commit/1baf5f28af07978445b5bc47ced8e830e49eb67f)), closes [#808](https://code.alipay.com/remix/remix/issues/808)
- 自动识别 CSS Modules ([#807](https://code.alipay.com/remix/remix/issues/807)) ([b81303c](https://code.alipay.com/remix/remix/commit/b81303c6ad8b6890ccf0c09ba9aaff6da2e14123)), closes [#800](https://code.alipay.com/remix/remix/issues/800)
- web 平台 watch 模式支持 hot reload ([#811](https://code.alipay.com/remix/remix/issues/811)) ([34507d3](https://code.alipay.com/remix/remix/commit/34507d3768a1e3ef2110ced9e604c93c8446d853))

# [2.0.0-alpha.4](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.2...v2.0.0-alpha.4) (2020-04-18)

# [1.21.0](https://code.alipay.com/remix/remix/compare/v1.20.0...v1.21.0) (2020-04-14)

### Bug Fixes

- **alipay:** 修复钉钉小程序下没有 Function.prototype.apply 导致的白屏 ([#795](https://code.alipay.com/remix/remix/issues/795)) ([17bde7d](https://code.alipay.com/remix/remix/commit/17bde7d880d21dd27532909353cdd70c041efe48))

### Features

- **wechat:** 增加 API chooseMedia ([9a9037d](https://code.alipay.com/remix/remix/commit/9a9037d29ad2b6228ba48df9aa46ef9c09777b1b))

# [1.20.0](https://code.alipay.com/remix/remix/compare/v1.19.8...v1.20.0) (2020-04-13)

### Bug Fixes

- 修复同一页面不能重复渲染的问题 ([#791](https://code.alipay.com/remix/remix/issues/791)) ([14dbc28](https://code.alipay.com/remix/remix/commit/14dbc2801e2a605d28c25a340ad0951cd403767c))

### Features

- 返回编译事件，方便跟其他工具集成 ([#784](https://code.alipay.com/remix/remix/issues/784)) ([f8bed58](https://code.alipay.com/remix/remix/commit/f8bed580a01493c89dd5ab4051f7184cf5fa6e70))

## [1.19.8](https://code.alipay.com/remix/remix/compare/v1.19.7...v1.19.8) (2020-04-09)

### Bug Fixes

- **alipay:** 修复不同的 key 渲染了相同元素的问题 ([#783](https://code.alipay.com/remix/remix/issues/783)) ([3cae6c2](https://code.alipay.com/remix/remix/commit/3cae6c266038aacbe778a411be04938c57de2eb1))

# [1.21.0](https://code.alipay.com/remix/remix/compare/v1.20.0...v1.21.0) (2020-04-14)

### Bug Fixes

- **alipay:** 修复钉钉小程序下没有 Function.prototype.apply 导致的白屏 ([#795](https://code.alipay.com/remix/remix/issues/795)) ([17bde7d](https://code.alipay.com/remix/remix/commit/17bde7d880d21dd27532909353cdd70c041efe48))

### Features

- **wechat:** 增加 API chooseMedia ([9a9037d](https://code.alipay.com/remix/remix/commit/9a9037d29ad2b6228ba48df9aa46ef9c09777b1b))

# [1.20.0](https://code.alipay.com/remix/remix/compare/v1.19.8...v1.20.0) (2020-04-13)

### Bug Fixes

- 修复同一页面不能重复渲染的问题 ([#791](https://code.alipay.com/remix/remix/issues/791)) ([14dbc28](https://code.alipay.com/remix/remix/commit/14dbc2801e2a605d28c25a340ad0951cd403767c))

### Features

- 返回编译事件，方便跟其他工具集成 ([#784](https://code.alipay.com/remix/remix/issues/784)) ([f8bed58](https://code.alipay.com/remix/remix/commit/f8bed580a01493c89dd5ab4051f7184cf5fa6e70))

## [1.19.8](https://code.alipay.com/remix/remix/compare/v1.19.7...v1.19.8) (2020-04-09)

### Bug Fixes

- # **alipay:** 修复不同的 key 渲染了相同元素的问题 ([#783](https://code.alipay.com/remix/remix/issues/783)) ([3cae6c2](https://code.alipay.com/remix/remix/commit/3cae6c266038aacbe778a411be04938c57de2eb1))

# [2.0.0-alpha.2](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2020-04-16)

### Bug Fixes

- **cli:** 修复 adapter 引入错误的问题 ([906c93d](https://code.alipay.com/remix/remix/commit/906c93da8ac02541d9a56973b1f375a4926b78e3))

# [2.0.0-alpha.1](https://code.alipay.com/remix/remix/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2020-04-16)

**Note:** Version bump only for package @alipay/remix-cli

# [2.0.0-alpha.0](https://code.alipay.com/remix/remix/compare/v1.19.7...v2.0.0-alpha.0) (2020-04-16)

### Bug Fixes

- 修正 css-loader 找不到的问题 ([f541399](https://code.alipay.com/remix/remix/commit/f5413996985ae419554fd3e9fb7eed459c0d7177))

### Features

- add basic web support ([#757](https://code.alipay.com/remix/remix/issues/757)) ([b3b48b1](https://code.alipay.com/remix/remix/commit/b3b48b111cd5889f17d3ec15f1c39437a9dc7fc4))
- add CoverageIgnorePlugin ([f49997f](https://code.alipay.com/remix/remix/commit/f49997f4abe6cb1cbb6894dad391e5870b521f01))

### Reverts

- Revert "fix winpath" ([00951cb](https://code.alipay.com/remix/remix/commit/00951cb9dfcdd584afb05536e91e4d2352e0f49f))
- Revert "make lint happy" ([f9f6194](https://code.alipay.com/remix/remix/commit/f9f6194ba09bfc4c962391e4e8bd74522187c1d3))
  > > > > > > > next

## [1.19.7](https://code.alipay.com/remix/remix/compare/v1.19.6...v1.19.7) (2020-04-08)

### Bug Fixes

- 修复微信 ScrollView scrollLeft 不生效的问题 ([8e02c94](https://code.alipay.com/remix/remix/commit/8e02c94d260b9f0ab115761bbef33938abbb215c))

## [1.19.6](https://code.alipay.com/remix/remix/compare/v1.19.5...v1.19.6) (2020-04-07)

**Note:** Version bump only for package remix-cli

## [1.19.5](https://code.alipay.com/remix/remix/compare/v1.19.4...v1.19.5) (2020-04-03)

**Note:** Version bump only for package remix-cli

## [1.19.4](https://code.alipay.com/remix/remix/compare/v1.19.3...v1.19.4) (2020-04-03)

### Bug Fixes

- **alipay:** 修复支付宝 IDE 的编译监听 ([b439ee0](https://code.alipay.com/remix/remix/commit/b439ee0d6ee0553019f393e871276265b89cc5fb))

## [1.19.3](https://code.alipay.com/remix/remix/compare/v1.19.2...v1.19.3) (2020-04-02)

### Bug Fixes

- 修复小程序自定义组件引用多个模板时编译错误的问题 ([#761](https://code.alipay.com/remix/remix/issues/761)) ([7757678](https://code.alipay.com/remix/remix/commit/7757678a33e827895f3df6d2766bdef9856fb7df))

## [1.19.2](https://code.alipay.com/remix/remix/compare/v1.19.1...v1.19.2) (2020-04-01)

### Bug Fixes

- 修复小程序自定义组件的模板引用 ([#759](https://code.alipay.com/remix/remix/issues/759)) ([2e82fc1](https://code.alipay.com/remix/remix/commit/2e82fc10ded34c3f70d07b8ce647135d4a6ac359))

## [1.19.1](https://code.alipay.com/remix/remix/compare/v1.19.0...v1.19.1) (2020-03-31)

### Bug Fixes

- **alipay:** 修复不设置 onShareAppMessage 分享无效的问题 ([#754](https://code.alipay.com/remix/remix/issues/754)) ([5c7febc](https://code.alipay.com/remix/remix/commit/5c7febcabae19d98019eaa64d46db1b3ff6103f8))

# [1.19.0](https://code.alipay.com/remix/remix/compare/v1.18.5...v1.19.0) (2020-03-30)

### Features

- 新增跨平台组件 remix/one ([ff904ac](https://code.alipay.com/remix/remix/commit/ff904ac7defc34bd7bd4f71d616d5b21b6eb1aa6)), closes [#373](https://code.alipay.com/remix/remix/issues/373)

## [1.18.5](https://code.alipay.com/remix/remix/compare/v1.18.4...v1.18.5) (2020-03-27)

### Bug Fixes

- 组件 Image 添加 touch 事件别名 ([9474e14](https://code.alipay.com/remix/remix/commit/9474e14bd914edbfa911815005be4d45727b471d)), closes [#743](https://code.alipay.com/remix/remix/issues/743)

## [1.18.4](https://code.alipay.com/remix/remix/compare/v1.18.3...v1.18.4) (2020-03-25)

### Bug Fixes

- **wechat:** 微信 ScrollView 添加自定义刷新相关属性 ([#742](https://code.alipay.com/remix/remix/issues/742)) ([9ef2afd](https://code.alipay.com/remix/remix/commit/9ef2afddbadb7e21f4c342e2633049eb016ee0a5))

## [1.18.3](https://code.alipay.com/remix/remix/compare/v1.18.2...v1.18.3) (2020-03-25)

### Bug Fixes

- **alipay:** 修复支付宝 IDE 里预览会卡住的问题 ([bc8a50b](https://code.alipay.com/remix/remix/commit/bc8a50b2557b711672a1c551caddf5381ec7bb22))

## [1.18.2](https://code.alipay.com/remix/remix/compare/v1.18.1...v1.18.2) (2020-03-25)

**Note:** Version bump only for package remix-cli

## [1.18.1](https://code.alipay.com/remix/remix/compare/v1.18.0...v1.18.1) (2020-03-24)

### Bug Fixes

- **alipay:** 修复支付宝自定义组件中 node_modules 模块 resolve 不完整的问题 ([7ef374d](https://code.alipay.com/remix/remix/commit/7ef374d))
- 修复 useAppShareAppMessage 不生效的问题 ([#739](https://code.alipay.com/remix/remix/issues/739)) ([6e3c562](https://code.alipay.com/remix/remix/commit/6e3c562))

# [1.18.0](https://code.alipay.com/remix/remix/compare/v1.17.2...v1.18.0) (2020-03-23)

**Note:** Version bump only for package remix-cli

## [1.17.2](https://code.alipay.com/remix/remix/compare/v1.17.1...v1.17.2) (2020-03-19)

### Bug Fixes

- 修复自定义组件中引用 node_modules 模块的问题 ([#726](https://code.alipay.com/remix/remix/issues/726)) ([22f6064](https://code.alipay.com/remix/remix/commit/22f6064))

## [1.17.1](https://code.alipay.com/remix/remix/compare/v1.17.0...v1.17.1) (2020-03-19)

**Note:** Version bump only for package remix-cli

# [1.17.0](https://code.alipay.com/remix/remix/compare/v1.16.1...v1.17.0) (2020-03-19)

### Features

- 新增 usePageEvent，useAppEvent 统一生命周期 hook ([#722](https://code.alipay.com/remix/remix/issues/722)) ([0e8d7cd](https://code.alipay.com/remix/remix/commit/0e8d7cd)), closes [#179](https://code.alipay.com/remix/remix/issues/179)
- **remix:** 字节跳动小程序新增 api canIUse、navigateToVideoView ([#721](https://code.alipay.com/remix/remix/issues/721)) ([9d0650f](https://code.alipay.com/remix/remix/commit/9d0650f))

## [1.16.1](https://code.alipay.com/remix/remix/compare/v1.16.0...v1.16.1) (2020-03-18)

### Bug Fixes

- 修复样式文件引入顺序错误的问题 ([b43e6bd](https://code.alipay.com/remix/remix/commit/b43e6bd))
- 修复自定义组件引用在 lerna 项目结构下错误的问题 ([37b6ba4](https://code.alipay.com/remix/remix/commit/37b6ba4))
- 修复自定义组件中 js 文件 resolve 问题 ([ef2dc43](https://code.alipay.com/remix/remix/commit/ef2dc43))

# [1.16.0](https://code.alipay.com/remix/remix/compare/v1.15.3...v1.16.0) (2020-03-17)

### Features

- 引入 turboPages ([#595](https://code.alipay.com/remix/remix/issues/595)) ([88d464e](https://code.alipay.com/remix/remix/commit/88d464e))

## [1.15.3](https://code.alipay.com/remix/remix/compare/v1.15.2...v1.15.3) (2020-03-17)

### Bug Fixes

- 修复使用 typescript 时 common chunk 可能存在错误引用的问题 ([d2874aa](https://code.alipay.com/remix/remix/commit/d2874aa)), closes [#708](https://code.alipay.com/remix/remix/issues/708)

## [1.15.2](https://code.alipay.com/remix/remix/compare/v1.15.1...v1.15.2) (2020-03-15)

**Note:** Version bump only for package remix-cli

## [1.15.1](https://code.alipay.com/remix/remix/compare/v1.15.0...v1.15.1) (2020-03-13)

### Bug Fixes

- 修复 tabBar icon 使用网络图片编译报错的问题 ([baaf172](https://code.alipay.com/remix/remix/commit/baaf172)), closes [#697](https://code.alipay.com/remix/remix/issues/697)
- 修复使用 typescript 创建 app.tsx 文件可能导致报错的问题 ([#703](https://code.alipay.com/remix/remix/issues/703)) ([16f7f6c](https://code.alipay.com/remix/remix/commit/16f7f6c)), closes [#702](https://code.alipay.com/remix/remix/issues/702)
- 字节跳动 View 组件增加 onClick ([#696](https://code.alipay.com/remix/remix/issues/696)) ([e216454](https://code.alipay.com/remix/remix/commit/e216454))

# [1.15.0](https://code.alipay.com/remix/remix/compare/v1.14.2...v1.15.0) (2020-03-11)

### Features

- **cli:** 支持 css modules 更多配置 ([f9838dc](https://code.alipay.com/remix/remix/commit/f9838dc))

## [1.14.2](https://code.alipay.com/remix/remix/compare/v1.14.1...v1.14.2) (2020-03-05)

### Performance Improvements

- **cli:** 优化生产模式编译速度 ([ffaca9a](https://code.alipay.com/remix/remix/commit/ffaca9a))

## [1.14.1](https://code.alipay.com/remix/remix/compare/v1.14.0...v1.14.1) (2020-02-28)

**Note:** Version bump only for package remix-cli

# [1.14.0](https://code.alipay.com/remix/remix/compare/v1.13.3...v1.14.0) (2020-02-28)

**Note:** Version bump only for package remix-cli

## [1.13.2](https://code.alipay.com/remix/remix/compare/v1.13.1...v1.13.2) (2020-02-26)

### Bug Fixes

- 修复点击自定义组件无法触发父组件 stopPropagation 的问题 ([#652](https://code.alipay.com/remix/remix/issues/652)) ([1bff049](https://code.alipay.com/remix/remix/commit/1bff049)), closes [#536](https://code.alipay.com/remix/remix/issues/536) [#283](https://code.alipay.com/remix/remix/issues/283)

### Performance Improvements

- **remix:** 优化运行时性能 ([#659](https://code.alipay.com/remix/remix/issues/659)) ([0cf3649](https://code.alipay.com/remix/remix/commit/0cf3649))

## [1.13.1](https://code.alipay.com/remix/remix/compare/v1.13.0...v1.13.1) (2020-02-21)

### Bug Fixes

- 原生组件支持命名空间属性 ([#651](https://code.alipay.com/remix/remix/issues/651)) ([224e238](https://code.alipay.com/remix/remix/commit/224e238))

# [1.13.0](https://code.alipay.com/remix/remix/compare/v1.12.5...v1.13.0) (2020-02-19)

### Features

- 支持使用命名空间属性 ([#650](https://code.alipay.com/remix/remix/issues/650)) ([4e9686c](https://code.alipay.com/remix/remix/commit/4e9686c)), closes [#642](https://code.alipay.com/remix/remix/issues/642)

## [1.12.5](https://code.alipay.com/remix/remix/compare/v1.12.4...v1.12.5) (2020-01-31)

### Bug Fixes

- **wechat:** 修复遗漏的 Camera 组件导出 ([d5b81ad](https://code.alipay.com/remix/remix/commit/d5b81ad))

## [1.12.4](https://code.alipay.com/remix/remix/compare/v1.12.3...v1.12.4) (2020-01-30)

**Note:** Version bump only for package remix-cli

## [1.12.3](https://code.alipay.com/remix/remix/compare/v1.12.2...v1.12.3) (2020-01-21)

### Bug Fixes

- 修复环境变量注入导致的语法错误 ([e572c5a](https://code.alipay.com/remix/remix/commit/e572c5a))

## [1.12.2](https://code.alipay.com/remix/remix/compare/v1.12.1...v1.12.2) (2020-01-19)

### Bug Fixes

- 修复配置 pxToRpx 不生效的问题 ([2c93e21](https://code.alipay.com/remix/remix/commit/2c93e21))

## [1.12.1](https://code.alipay.com/remix/remix/compare/v1.12.0...v1.12.1) (2020-01-19)

### Bug Fixes

- 修正环境变量注入导致的语法解析错误 ([1fc8350](https://code.alipay.com/remix/remix/commit/1fc8350))

# [1.12.0](https://code.alipay.com/remix/remix/compare/v1.11.5...v1.12.0) (2020-01-19)

### Bug Fixes

- 修正非 js 后缀名的 cjs 模块构建错误的问题 ([f402c12](https://code.alipay.com/remix/remix/commit/f402c12))

### Features

- 支持通过 .env 文件设置环境变量 ([3b3497f](https://code.alipay.com/remix/remix/commit/3b3497f))

## [1.11.5](https://code.alipay.com/remix/remix/compare/v1.11.4...v1.11.5) (2020-01-18)

### Bug Fixes

- 修正无法引用 events 包的问题 ([#596](https://code.alipay.com/remix/remix/issues/596)) ([b7ec83f](https://code.alipay.com/remix/remix/commit/b7ec83f))

## [1.11.4](https://code.alipay.com/remix/remix/compare/v1.11.3...v1.11.4) (2020-01-17)

### Bug Fixes

- **wechat:** 修复 ScrollView 水平受控问题 ([063d627](https://code.alipay.com/remix/remix/commit/063d627))

## [1.11.3](https://code.alipay.com/remix/remix/compare/v1.11.2...v1.11.3) (2020-01-16)

### Bug Fixes

- **alipay:** 修复 Text 点击事件不触发的问题 ([4db5d25](https://code.alipay.com/remix/remix/commit/4db5d25))

## [1.11.2](https://code.alipay.com/remix/remix/compare/v1.11.1...v1.11.2) (2020-01-15)

### Bug Fixes

- 修复跨平台开发时引入了不相关平台代码的问题 ([4b0cba4](https://code.alipay.com/remix/remix/commit/4b0cba4))

## [1.11.1](https://code.alipay.com/remix/remix/compare/v1.11.0...v1.11.1) (2020-01-14)

### Performance Improvements

- **alipay:** 优化支付宝渲染层性能 ([5d3e936](https://code.alipay.com/remix/remix/commit/5d3e936))

# [1.11.0](https://code.alipay.com/remix/remix/compare/v1.10.9...v1.11.0) (2020-01-09)

### Bug Fixes

- **wechat:** 修复 ScrollView 非受控使用依然有受控表现的问题 ([e2001bb](https://code.alipay.com/remix/remix/commit/e2001bb))
- **wechat:** 修复 Swiper 非受控时依然有受控表现的问题 ([c4e3c88](https://code.alipay.com/remix/remix/commit/c4e3c88))

### Performance Improvements

- 避免当组件上有 style 属性时可能产生的非必要渲染 ([7ec0be2](https://code.alipay.com/remix/remix/commit/7ec0be2)), closes [#531](https://code.alipay.com/remix/remix/issues/531)

## [1.10.9](https://code.alipay.com/remix/remix/compare/v1.10.8...v1.10.9) (2020-01-01)

### Bug Fixes

- 去除无用的文件生成警告 ([31236be](https://code.alipay.com/remix/remix/commit/31236be))

### Performance Improvements

- **wechat:** 缩小微信打包 size ([e0e9798](https://code.alipay.com/remix/remix/commit/e0e9798))

## [1.10.8](https://code.alipay.com/remix/remix/compare/v1.10.7...v1.10.8) (2019-12-29)

### Bug Fixes

- **wechat:** 修复微信平台 Swiper 受控 current 后表现异常的情况 ([80f1c12](https://code.alipay.com/remix/remix/commit/80f1c12)), closes [#535](https://code.alipay.com/remix/remix/issues/535)
- 修复 subpackages 下引入 plugin 编译报错 ([7eee12c](https://code.alipay.com/remix/remix/commit/7eee12c))
- 修复支付宝自定义组件使用 component2 模式报错的问题 ([109f904](https://code.alipay.com/remix/remix/commit/109f904))

## [1.10.7](https://code.alipay.com/remix/remix/compare/v1.10.6...v1.10.7) (2019-12-22)

### Bug Fixes

- **wechat:** 修复微信平台 ScrollView 设置 scrollTop 表现异常的问题 ([55c440e](https://code.alipay.com/remix/remix/commit/55c440e)), closes [#459](https://code.alipay.com/remix/remix/issues/459)

## [1.10.6](https://code.alipay.com/remix/remix/compare/v1.10.5...v1.10.6) (2019-12-19)

**Note:** Version bump only for package remix-cli

## [1.10.5](https://code.alipay.com/remix/remix/compare/v1.10.4...v1.10.5) (2019-12-19)

### Bug Fixes

- 修复原生组件编译文件丢失的问题 ([268ec7e](https://code.alipay.com/remix/remix/commit/268ec7e))

## [1.10.4](https://code.alipay.com/remix/remix/compare/v1.10.3...v1.10.4) (2019-12-18)

### Bug Fixes

- 修复当原生组件带有导出内容时编译报错的问题 ([c0f88c2](https://code.alipay.com/remix/remix/commit/c0f88c2))

## [1.10.3](https://code.alipay.com/remix/remix/compare/v1.10.2...v1.10.3) (2019-12-17)

### Bug Fixes

- 修复 watch 编译时原生自定义组件出错的问题 ([d171c1d](https://code.alipay.com/remix/remix/commit/d171c1d))

## [1.10.2](https://code.alipay.com/remix/remix/compare/v1.10.1...v1.10.2) (2019-12-15)

**Note:** Version bump only for package remix-cli

## [1.10.1](https://code.alipay.com/remix/remix/compare/v1.10.0...v1.10.1) (2019-12-15)

**Note:** Version bump only for package remix-cli

# [1.10.0](https://code.alipay.com/remix/remix/compare/v1.9.0...v1.10.0) (2019-12-13)

### Bug Fixes

- 修复 options.rootDir 读取错误的问题 ([b43a2cf](https://code.alipay.com/remix/remix/commit/b43a2cf))
- 修复有嵌套的 node_modules 时，自定义组件构建错误的问题 ([04b00ae](https://code.alipay.com/remix/remix/commit/04b00ae))
- 修复未使用 JSX 方式调用自定义组件报错的问题 ([#477](https://code.alipay.com/remix/remix/issues/477)) ([1d31284](https://code.alipay.com/remix/remix/commit/1d31284)), closes [#326](https://code.alipay.com/remix/remix/issues/326)
- 当配置的页面不存在时有提醒信息 ([#483](https://code.alipay.com/remix/remix/issues/483)) ([012a01d](https://code.alipay.com/remix/remix/commit/012a01d)), closes [#482](https://code.alipay.com/remix/remix/issues/482)

### Features

- 支持对 css 中的图片做 base64 处理 ([#460](https://code.alipay.com/remix/remix/issues/460)) ([127fb88](https://code.alipay.com/remix/remix/commit/127fb88)), closes [#448](https://code.alipay.com/remix/remix/issues/448)

# [1.9.0](https://code.alipay.com/remix/remix/compare/v1.8.0...v1.9.0) (2019-12-09)

### Bug Fixes

- 修复 async 语法解析错误的问题 ([#461](https://code.alipay.com/remix/remix/issues/461)) ([c45ba2b](https://code.alipay.com/remix/remix/commit/c45ba2b))
- 修复使用依赖 regeneratorRuntime lib 报错的问题 ([#457](https://code.alipay.com/remix/remix/issues/457)) ([2a652c2](https://code.alipay.com/remix/remix/commit/2a652c2)), closes [#451](https://code.alipay.com/remix/remix/issues/451)

### Features

- 支持 typescript 3.7 ([#458](https://code.alipay.com/remix/remix/issues/458)) ([2723504](https://code.alipay.com/remix/remix/commit/2723504)), closes [#442](https://code.alipay.com/remix/remix/issues/442)

# [1.8.0](https://code.alipay.com/remix/remix/compare/v1.7.2...v1.8.0) (2019-12-05)

### Bug Fixes

- 修复 ts 的配置文件 watch 时无法更新的问题 ([6d1a040](https://code.alipay.com/remix/remix/commit/6d1a040))
- 修复 ts 的配置文件没有被 watch 的问题 ([a5b009c](https://code.alipay.com/remix/remix/commit/a5b009c))
- 修复 ts 配置文件不支持使用 export default 导出的问题 ([#447](https://code.alipay.com/remix/remix/issues/447)) ([2157962](https://code.alipay.com/remix/remix/commit/2157962))
- 修复使用 babel.config.js 配置 preset-remix 时项目出错的问题 ([9f41119](https://code.alipay.com/remix/remix/commit/9f41119))

### Features

- @alipay/babel-preset-remix 增加 decorators 和 class-properties 配置项 ([fe4d243](https://code.alipay.com/remix/remix/commit/fe4d243))
- remix.config.js 支持 compressTemplate 配置 ([fbaa2b4](https://code.alipay.com/remix/remix/commit/fbaa2b4)), closes [#416](https://code.alipay.com/remix/remix/issues/416)

## [1.7.2](https://code.alipay.com/remix/remix/compare/v1.7.1...v1.7.2) (2019-12-03)

### Bug Fixes

- 修复带 esmodule 标志的模块无法被正确引入的问题 ([ce9cec2](https://code.alipay.com/remix/remix/commit/ce9cec2))

## [1.7.1](https://code.alipay.com/remix/remix/compare/v1.7.0...v1.7.1) (2019-12-03)

**Note:** Version bump only for package remix-cli

# [1.7.0](https://code.alipay.com/remix/remix/compare/v1.6.0...v1.7.0) (2019-12-02)

### Bug Fixes

- **cli:** 修复多个 CSS 文件引用同一图片时报错的问题 ([#408](https://code.alipay.com/remix/remix/issues/408)) ([b4dbbef](https://code.alipay.com/remix/remix/commit/b4dbbef)), closes [#407](https://code.alipay.com/remix/remix/issues/407)

### Features

- 支持直接使用 react-redux/mobx-react ([#425](https://code.alipay.com/remix/remix/issues/425)) ([8b3245a](https://code.alipay.com/remix/remix/commit/8b3245a)), closes [#405](https://code.alipay.com/remix/remix/issues/405)
- **@alipay/babel-preset-remix:** 支持配置 TypeScript preset 参数 ([#420](https://code.alipay.com/remix/remix/issues/420)) ([23939e1](https://code.alipay.com/remix/remix/commit/23939e1)), closes [#417](https://code.alipay.com/remix/remix/issues/417)
- 支持使用 TypeScript 写应用和页面配置文件 ([#400](https://code.alipay.com/remix/remix/issues/400)) ([56a96e5](https://code.alipay.com/remix/remix/commit/56a96e5)), closes [#280](https://code.alipay.com/remix/remix/issues/280)

# [1.6.0](https://code.alipay.com/remix/remix/compare/v1.6.0-beta.3...v1.6.0) (2019-11-29)

### Bug Fixes

- 修复不能正确引用带有 esModule 标识的 cjs 模块的问题 ([cf4a348](https://code.alipay.com/remix/remix/commit/cf4a348))

# [1.6.0-beta.3](https://code.alipay.com/remix/remix/compare/v1.6.0-beta.2...v1.6.0-beta.3) (2019-11-28)

**Note:** Version bump only for package remix-cli

# [1.6.0-beta.2](https://code.alipay.com/remix/remix/compare/v1.6.0-beta.1...v1.6.0-beta.2) (2019-11-27)

### Bug Fixes

- 修复由于编译优化导致引入同一个原生组件的渲染错误 ([9952853](https://code.alipay.com/remix/remix/commit/9952853))

# [1.6.0-beta.1](https://code.alipay.com/remix/remix/compare/v1.6.0-beta.0...v1.6.0-beta.1) (2019-11-25)

**Note:** Version bump only for package remix-cli

# [1.6.0-beta.0](https://code.alipay.com/remix/remix/compare/v1.5.2...v1.6.0-beta.0) (2019-11-22)

### Bug Fixes

- 修复 npm 包中 createHostComponent 不生效的问题 ([#393](https://code.alipay.com/remix/remix/issues/393)) ([b6292a1](https://code.alipay.com/remix/remix/commit/b6292a1))
- 修复 ts 引入的子组件中包含原生组件的渲染错误 ([dca8741](https://code.alipay.com/remix/remix/commit/dca8741))
- 让开发者可以从 remix 导入组件的类型 ([#394](https://code.alipay.com/remix/remix/issues/394)) ([2e12c04](https://code.alipay.com/remix/remix/commit/2e12c04)), closes [#369](https://code.alipay.com/remix/remix/issues/369)

### Features

- **alipay:** 支持获取小程序组件 ref ([a7fba88](https://code.alipay.com/remix/remix/commit/a7fba88)), closes [#384](https://code.alipay.com/remix/remix/issues/384)
- createHostComponent 支持定义 prop 别名 ([#392](https://code.alipay.com/remix/remix/issues/392)) ([cccf477](https://code.alipay.com/remix/remix/commit/cccf477))
- 支持开发者注册 host 组件 ([4ba9c45](https://code.alipay.com/remix/remix/commit/4ba9c45)), closes [#293](https://code.alipay.com/remix/remix/issues/293)
- **alipay:** 新增 Video 组件及相关 API ([#401](https://code.alipay.com/remix/remix/issues/401)) ([35e039d](https://code.alipay.com/remix/remix/commit/35e039d))

### Performance Improvements

- 优化编译速度 ([#388](https://code.alipay.com/remix/remix/issues/388)) ([131519d](https://code.alipay.com/remix/remix/commit/131519d))

## [1.5.2](https://code.alipay.com/remix/remix/compare/v1.5.1...v1.5.2) (2019-11-20)

### Bug Fixes

- 修改引用多个相同小程序组件时构建错误的问题 ([#386](https://code.alipay.com/remix/remix/issues/386)) ([da01293](https://code.alipay.com/remix/remix/commit/da01293))

## [1.5.1](https://code.alipay.com/remix/remix/compare/v1.5.0...v1.5.1) (2019-11-20)

### Bug Fixes

- 修复使用 TypeScript 时无法引用小程序组件的问题 ([#383](https://code.alipay.com/remix/remix/issues/383)) ([db7a2d8](https://code.alipay.com/remix/remix/commit/db7a2d8))

# [1.5.0](https://code.alipay.com/remix/remix/compare/v1.4.7...v1.5.0) (2019-11-19)

### Bug Fixes

- **wechat:** 修复 spread 方式传递 Button 组件参数时 size 无效的问题 ([883d962](https://code.alipay.com/remix/remix/commit/883d962)), closes [#375](https://code.alipay.com/remix/remix/issues/375)
- 修复自定义组件重复引用的问题 ([#342](https://code.alipay.com/remix/remix/issues/342)) ([#360](https://code.alipay.com/remix/remix/issues/360)) ([1d0ec2d](https://code.alipay.com/remix/remix/commit/1d0ec2d))

### Features

- rollupOptions 支持函数方式修改配置 ([#359](https://code.alipay.com/remix/remix/issues/359)) ([53fbf8b](https://code.alipay.com/remix/remix/commit/53fbf8b))
- 支持在 onClick 回调中使用 stopPropagation 阻止冒泡 ([#292](https://code.alipay.com/remix/remix/issues/292)) ([09e006f](https://code.alipay.com/remix/remix/commit/09e006f)), closes [#283](https://code.alipay.com/remix/remix/issues/283)
- 新增配置 pxToRpx 用于设置是否转换 px 到 rpx ([dd73e13](https://code.alipay.com/remix/remix/commit/dd73e13)), closes [#380](https://code.alipay.com/remix/remix/issues/380) [#380](https://code.alipay.com/remix/remix/issues/380) [#381](https://code.alipay.com/remix/remix/issues/381) [#381](https://code.alipay.com/remix/remix/issues/381) [#381](https://code.alipay.com/remix/remix/issues/381)

## [1.4.7](https://code.alipay.com/remix/remix/compare/v1.4.6...v1.4.7) (2019-11-19)

**Note:** Version bump only for package remix-cli

## [1.4.6](https://code.alipay.com/remix/remix/compare/v1.4.5...v1.4.6) (2019-11-18)

**Note:** Version bump only for package remix-cli

## [1.4.5](https://code.alipay.com/remix/remix/compare/v1.4.4...v1.4.5) (2019-11-15)

### Bug Fixes

- build 时无法正确清理自定义 output 目录的问题 ([6545a47](https://code.alipay.com/remix/remix/commit/6545a47))
- 带有 src 目录的 npm 包小程序组件构建错误的问题 ([#356](https://code.alipay.com/remix/remix/issues/356)) ([4f3f53e](https://code.alipay.com/remix/remix/commit/4f3f53e)), closes [#346](https://code.alipay.com/remix/remix/issues/346)

## [1.4.4](https://code.alipay.com/remix/remix/compare/v1.4.3...v1.4.4) (2019-11-14)

### Bug Fixes

- 找不到 regenerator-runtime 的问题 ([#351](https://code.alipay.com/remix/remix/issues/351)) ([03dbf3d](https://code.alipay.com/remix/remix/commit/03dbf3d))

## [1.4.3](https://code.alipay.com/remix/remix/compare/v1.4.2...v1.4.3) (2019-11-14)

### Bug Fixes

- 修复小程序组件引入错误 ([7c07e2d](https://code.alipay.com/remix/remix/commit/7c07e2d))

## [1.4.2](https://code.alipay.com/remix/remix/compare/v1.4.1...v1.4.2) (2019-11-13)

### Bug Fixes

- **wechat:** 修正 wx:key 的警告 ([4806635](https://code.alipay.com/remix/remix/commit/4806635)), closes [#332](https://code.alipay.com/remix/remix/issues/332)
- 修复 node 10.10 打包出现 mkdir 的错误 ([7f4c3e2](https://code.alipay.com/remix/remix/commit/7f4c3e2)), closes [#331](https://code.alipay.com/remix/remix/issues/331)
- 修复钉钉小程序使用原生组件渲染错乱的问题 ([e38f578](https://code.alipay.com/remix/remix/commit/e38f578)), closes [#316](https://code.alipay.com/remix/remix/issues/316)
- 自定义组件会重复引用的问题 ([9c05961](https://code.alipay.com/remix/remix/commit/9c05961)), closes [#342](https://code.alipay.com/remix/remix/issues/342)
- 自定义组件路径带有 @ 时构建错误的问题 ([63c0ddb](https://code.alipay.com/remix/remix/commit/63c0ddb))

## [1.4.1](https://code.alipay.com/remix/remix/compare/v1.4.0...v1.4.1) (2019-11-11)

### Bug Fixes

- 修复支付宝 view 缺少 slot 属性导致原生组件 slot 不生效的问题 ([b89c721](https://code.alipay.com/remix/remix/commit/b89c721))

# [1.4.0](https://code.alipay.com/remix/remix/compare/v1.3.1...v1.4.0) (2019-11-11)

### Bug Fixes

- 修复 dataset 属性失效的问题 ([68af03b](https://code.alipay.com/remix/remix/commit/68af03b))
- 修复多次切换页面导致加载速度变慢的问题 ([1f93d18](https://code.alipay.com/remix/remix/commit/1f93d18)), closes [#304](https://code.alipay.com/remix/remix/issues/304)

### Features

- add remix version check in project ([#325](https://code.alipay.com/remix/remix/issues/325)) ([6ab19ce](https://code.alipay.com/remix/remix/commit/6ab19ce))

## [1.3.1](https://code.alipay.com/remix/remix/compare/v1.3.0...v1.3.1) (2019-11-04)

### Bug Fixes

- 修正 virtual modules 导致的构建错误 ([08ac82b](https://code.alipay.com/remix/remix/commit/08ac82b))

# [1.3.0](https://code.alipay.com/remix/remix/compare/v1.2.2...v1.3.0) (2019-11-04)

### Bug Fixes

- 修复 css 中 base64 的路径会被修改的问题 ([b6ca1f0](https://code.alipay.com/remix/remix/commit/b6ca1f0))
- 修复 watch 时 rebuild 没有清理掉多余的属性 ([8e52818](https://code.alipay.com/remix/remix/commit/8e52818))
- 修复 windows 下图片引入路径错误的问题 ([#312](https://code.alipay.com/remix/remix/issues/312)) ([0b75693](https://code.alipay.com/remix/remix/commit/0b75693)), closes [#311](https://code.alipay.com/remix/remix/issues/311)
- 修复每个测试收集到的 props 会串起来的问题 ([31b6201](https://code.alipay.com/remix/remix/commit/31b6201))

### Features

- 增加从插件引用组件的功能 ([639391b](https://code.alipay.com/remix/remix/commit/639391b))

### Performance Improvements

- **cli:** 关闭 tree shaking 提升开发环境编译速度 ([698dbe2](https://code.alipay.com/remix/remix/commit/698dbe2)), closes [#298](https://code.alipay.com/remix/remix/issues/298)

## [1.2.2](https://code.alipay.com/remix/remix/compare/v1.2.1...v1.2.2) (2019-10-22)

### Bug Fixes

- native 文件 copy 时没有遵从 options.ouput 的配置 ([99fd382](https://code.alipay.com/remix/remix/commit/99fd382))
- **alipay:** 修复 catchClick ([5897266](https://code.alipay.com/remix/remix/commit/5897266))

## [1.2.1](https://code.alipay.com/remix/remix/compare/v1.2.0...v1.2.1) (2019-10-16)

### Bug Fixes

- 修复 style 性质的属性没有转换成内联样式的问题 ([e2bc745](https://code.alipay.com/remix/remix/commit/e2bc745)), closes [#281](https://code.alipay.com/remix/remix/issues/281)

# [1.2.0](https://code.alipay.com/remix/remix/compare/v1.2.0-beta.0...v1.2.0) (2019-10-14)

### Bug Fixes

- 修正 jsx 解析错误 ([4b71e7c](https://code.alipay.com/remix/remix/commit/4b71e7c))
- 修正 module import 错误 ([e27547e](https://code.alipay.com/remix/remix/commit/e27547e))

# [1.2.0-beta.0](https://code.alipay.com/remix/remix/compare/v1.2.0-alpha.3...v1.2.0-beta.0) (2019-10-14)

### Features

- 支持引用小程序自定义组件 ([#270](https://code.alipay.com/remix/remix/issues/270)) ([61d2aac](https://code.alipay.com/remix/remix/commit/61d2aac))

# [1.2.0-alpha.3](https://code.alipay.com/remix/remix/compare/v1.2.0-alpha.2...v1.2.0-alpha.3) (2019-10-11)

**Note:** Version bump only for package remix-cli

# [1.2.0-alpha.2](https://code.alipay.com/remix/remix/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package remix-cli

# [1.2.0-alpha.1](https://code.alipay.com/remix/remix/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- 修复 rebuild 时不存在的属性依然残留的问题 ([3bc0f71](https://code.alipay.com/remix/remix/commit/3bc0f71)), closes [#266](https://code.alipay.com/remix/remix/issues/266)
- 修复 rebuild 读取到错误的 remix config 文件的问题 ([#265](https://code.alipay.com/remix/remix/issues/265)) ([6b97092](https://code.alipay.com/remix/remix/commit/6b97092)), closes [#263](https://code.alipay.com/remix/remix/issues/263)
- 修复 windows 下跨平台开发会引入错误平台代码的问题 ([5f49e57](https://code.alipay.com/remix/remix/commit/5f49e57)), closes [#206](https://code.alipay.com/remix/remix/issues/206)
- 修复跨平台开发 esm build 结果报错的问题 ([cc5cd34](https://code.alipay.com/remix/remix/commit/cc5cd34))
- 修正 windows 上 css 图片路径 ([12a3669](https://code.alipay.com/remix/remix/commit/12a3669)), closes [#235](https://code.alipay.com/remix/remix/issues/235)

### Features

- 支持自定义 babel 配置 ([8afee36](https://code.alipay.com/remix/remix/commit/8afee36))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://code.alipay.com/remix/remix/issues/262)) ([59a47f2](https://code.alipay.com/remix/remix/commit/59a47f2))

## [1.1.3](https://code.alipay.com/remix/remix/compare/v1.1.2...v1.1.3) (2019-09-30)

### Bug Fixes

- 修复 rebuild 读取到错误的 remix config 文件的问题 ([#265](https://code.alipay.com/remix/remix/issues/265)) ([5c28c5c](https://code.alipay.com/remix/remix/commit/5c28c5c)), closes [#263](https://code.alipay.com/remix/remix/issues/263)

# [1.2.0-alpha.0](https://code.alipay.com/remix/remix/compare/v1.1.2...v1.2.0-alpha.0) (2019-09-30)

### Bug Fixes

- getAlias ([924736d](https://code.alipay.com/remix/remix/commit/924736d))
- 修复 ci 报错 ([3f46009](https://code.alipay.com/remix/remix/commit/3f46009))
- 修复找不到 dot-props 依赖 ([4ce1af0](https://code.alipay.com/remix/remix/commit/4ce1af0))

### Features

- 修改头条小程序的模板适配原生组件 ([3436245](https://code.alipay.com/remix/remix/commit/3436245))
- 修改支付宝和微信适配原生组件 ([0b4ce79](https://code.alipay.com/remix/remix/commit/0b4ce79))
- 完成引入原生小程序的功能 ([99a2cdb](https://code.alipay.com/remix/remix/commit/99a2cdb))
- 支持 config.js 写 esm ([361cb4e](https://code.alipay.com/remix/remix/commit/361cb4e))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://code.alipay.com/remix/remix/issues/262)) ([59a47f2](https://code.alipay.com/remix/remix/commit/59a47f2))

## [1.1.2](https://code.alipay.com/remix/remix/compare/v1.1.1...v1.1.2) (2019-09-27)

### Performance Improvements

- optimize using promise/key ([#258](https://code.alipay.com/remix/remix/issues/258)) ([25c60ad](https://code.alipay.com/remix/remix/commit/25c60ad))

## [1.1.1](https://code.alipay.com/remix/remix/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修正环境变量替换导致的语法错误 ([5a5c020](https://code.alipay.com/remix/remix/commit/5a5c020))

## [1.1.1](https://code.alipay.com/remix/remix/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修正环境变量替换导致的语法错误 ([5a5c020](https://code.alipay.com/remix/remix/commit/5a5c020))

# [1.1.0](https://code.alipay.com/remix/remix/compare/v1.0.18...v1.1.0) (2019-09-22)

### Bug Fixes

- 修复 scope 包的引用错误 ([#211](https://code.alipay.com/remix/remix/issues/211)) ([f2e8cb7](https://code.alipay.com/remix/remix/commit/f2e8cb7))

### Features

- 新增 postcss 配置项 ([#233](https://code.alipay.com/remix/remix/issues/233)) ([646a03d](https://code.alipay.com/remix/remix/commit/646a03d))

# [1.1.0-alpha.5](https://code.alipay.com/remix/remix/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

# [1.1.0-alpha.4](https://code.alipay.com/remix/remix/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

# [1.1.0-alpha.3](https://code.alipay.com/remix/remix/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://code.alipay.com/remix/remix/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://code.alipay.com/remix/remix/commit/f586ea7))

# [1.1.0-alpha.2](https://code.alipay.com/remix/remix/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://code.alipay.com/remix/remix/commit/71bcb3b))

### Performance Improvements

- 精简头条的 template ([25872a1](https://code.alipay.com/remix/remix/commit/25872a1))

# [1.1.0-alpha.1](https://code.alipay.com/remix/remix/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://code.alipay.com/remix/remix/issues/182)) ([d46af4e](https://code.alipay.com/remix/remix/commit/d46af4e))

# [1.1.0-alpha.0](https://code.alipay.com/remix/remix/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://code.alipay.com/remix/remix/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://code.alipay.com/remix/remix/commit/d7adadc))

## [1.0.18](https://code.alipay.com/remix/remix/compare/v1.0.17...v1.0.18) (2019-09-18)

### Bug Fixes

- 修复模版生成错误 ([89e7024](https://code.alipay.com/remix/remix/commit/89e7024)), closes [#238](https://code.alipay.com/remix/remix/issues/238)

## [1.0.17](https://code.alipay.com/remix/remix/compare/v1.0.16...v1.0.17) (2019-09-18)

### Bug Fixes

- remove regenerator-runtime ([cd33ad9](https://code.alipay.com/remix/remix/commit/cd33ad9))
- 修复 scope 包的引用错误 ([#211](https://code.alipay.com/remix/remix/issues/211)) ([fd7d542](https://code.alipay.com/remix/remix/commit/fd7d542))
- 修复 css 中使用网络图片报错的问题 ([#237](https://code.alipay.com/remix/remix/issues/237)) ([d02c1db](https://code.alipay.com/remix/remix/commit/d02c1db))
- 修复无法使用 catch 事件和 dataset 的问题 ([44485b4](https://code.alipay.com/remix/remix/commit/44485b4)), closes [#219](https://code.alipay.com/remix/remix/issues/219) [#231](https://code.alipay.com/remix/remix/issues/231)

### Features

- 使用新的 this.emitFile api 生成文件 ([941f522](https://code.alipay.com/remix/remix/commit/941f522))

# [1.1.0-alpha.5](https://code.alipay.com/remix/remix/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

**Note:** Version bump only for package remix-cli

# [1.1.0-alpha.4](https://code.alipay.com/remix/remix/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

**Note:** Version bump only for package remix-cli

# [1.1.0-alpha.3](https://code.alipay.com/remix/remix/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://code.alipay.com/remix/remix/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://code.alipay.com/remix/remix/commit/f586ea7))

# [1.1.0-alpha.2](https://code.alipay.com/remix/remix/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://code.alipay.com/remix/remix/commit/71bcb3b))
- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://code.alipay.com/remix/remix/commit/f98b0ca))

### Performance Improvements

- 精简头条的 template ([25872a1](https://code.alipay.com/remix/remix/commit/25872a1))

# [1.1.0-alpha.1](https://code.alipay.com/remix/remix/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://code.alipay.com/remix/remix/issues/182)) ([d46af4e](https://code.alipay.com/remix/remix/commit/d46af4e))

# [1.1.0-alpha.0](https://code.alipay.com/remix/remix/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://code.alipay.com/remix/remix/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://code.alipay.com/remix/remix/commit/d7adadc))

# [1.1.0-alpha.1](https://code.alipay.com/remix/remix/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://code.alipay.com/remix/remix/issues/182)) ([d46af4e](https://code.alipay.com/remix/remix/commit/d46af4e))
- 修复 jsx 后缀报错的问题 ([88d0668](https://code.alipay.com/remix/remix/commit/88d0668))

# [1.1.0-alpha.0](https://code.alipay.com/remix/remix/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://code.alipay.com/remix/remix/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://code.alipay.com/remix/remix/commit/d7adadc))

## [1.0.16](https://code.alipay.com/remix/remix/compare/v1.0.15...v1.0.16) (2019-09-16)

### Bug Fixes

- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://code.alipay.com/remix/remix/commit/f98b0ca))
- 修复编译后图片路径不对的问题 ([#225](https://code.alipay.com/remix/remix/issues/225)) ([b05acc6](https://code.alipay.com/remix/remix/commit/b05acc6)), closes [#224](https://code.alipay.com/remix/remix/issues/224)
- 修复较为动态地使用 Remix 组件时可能不会渲染的问题 ([bfc3201](https://code.alipay.com/remix/remix/commit/bfc3201))

## [1.0.15](https://code.alipay.com/remix/remix/compare/v1.0.14...v1.0.15) (2019-09-04)

### Bug Fixes

- 修复 npm 中带有非 js 后缀文件时支付宝小程序无法上传的问题 ([e53e0b9](https://code.alipay.com/remix/remix/commit/e53e0b9))
- 支付宝 css 背景图片支持相对路径写法 ([#198](https://code.alipay.com/remix/remix/issues/198)) ([8f01e64](https://code.alipay.com/remix/remix/commit/8f01e64))

## [1.0.14](https://code.alipay.com/remix/remix/compare/v1.0.13...v1.0.14) (2019-09-03)

### Bug Fixes

- 修复支付宝组件无法接受动态传递 props 的问题 ([9d26dd2](https://code.alipay.com/remix/remix/commit/9d26dd2))

## [1.0.13](https://code.alipay.com/remix/remix/compare/v1.0.12...v1.0.13) (2019-09-02)

**Note:** Version bump only for package remix-cli

## [1.0.12](https://code.alipay.com/remix/remix/compare/v1.0.11...v1.0.12) (2019-09-02)

### Bug Fixes

- 修复 jsx 后缀报错的问题 ([88d0668](https://code.alipay.com/remix/remix/commit/88d0668))
- 修正带有 @ 的文件夹无法在支付宝里上传的问题 ([b998304](https://code.alipay.com/remix/remix/commit/b998304))

## [1.0.11](https://code.alipay.com/remix/remix/compare/v1.0.10...v1.0.11) (2019-08-31)

### Bug Fixes

- rollup watch [#148](https://code.alipay.com/remix/remix/issues/148) ([f2f15ba](https://code.alipay.com/remix/remix/commit/f2f15ba))
- 修复 app.config.js 没有被 watch 的问题 ([b88cfc8](https://code.alipay.com/remix/remix/commit/b88cfc8))
- 修复 watch 状态下删除 dist 目录导致小程序本身构建进程奔溃的问题 ([921846d](https://code.alipay.com/remix/remix/commit/921846d))
- 修复支付宝 css 无法引用本地图片的问题 ([#191](https://code.alipay.com/remix/remix/issues/191)) ([9b6b501](https://code.alipay.com/remix/remix/commit/9b6b501)), closes [#186](https://code.alipay.com/remix/remix/issues/186)
- 完善微信组件类型定义 ([#161](https://code.alipay.com/remix/remix/issues/161)) ([356fcbf](https://code.alipay.com/remix/remix/commit/356fcbf))

## [1.0.10](https://code.alipay.com/remix/remix/compare/v1.0.9...v1.0.10) (2019-08-30)

### Bug Fixes

- 修复 Windows 下的路径转换错误 ([1045a5b](https://code.alipay.com/remix/remix/commit/1045a5b)), closes [#183](https://code.alipay.com/remix/remix/issues/183)

## [1.0.9](https://code.alipay.com/remix/remix/compare/v1.0.8...v1.0.9) (2019-08-29)

### Bug Fixes

- 修复 async/await 报错 ([e1912a2](https://code.alipay.com/remix/remix/commit/e1912a2))

## [1.0.8](https://code.alipay.com/remix/remix/compare/v1.0.7...v1.0.8) (2019-08-28)

### Bug Fixes

- 修复 tabBar 配置 iconPath 无效的问题 ([b1efe2f](https://code.alipay.com/remix/remix/commit/b1efe2f)), closes [#150](https://code.alipay.com/remix/remix/issues/150)
- 修复页面组件不能命名为 Page 的问题 ([9237dac](https://code.alipay.com/remix/remix/commit/9237dac)), closes [#158](https://code.alipay.com/remix/remix/issues/158)

## [1.0.7](https://code.alipay.com/remix/remix/compare/v1.0.6...v1.0.7) (2019-08-28)

### Bug Fixes

- 修正 async/await 报错问题 ([423f30d](https://code.alipay.com/remix/remix/commit/423f30d))

## [1.0.6](https://code.alipay.com/remix/remix/compare/v1.0.5...v1.0.6) (2019-08-28)

**Note:** Version bump only for package remix-cli

## [1.0.5](https://code.alipay.com/remix/remix/compare/v1.0.4...v1.0.5) (2019-08-27)

### Performance Improvements

- 提升模板渲染性能 ([9af03f9](https://code.alipay.com/remix/remix/commit/9af03f9))

## [1.0.4](https://code.alipay.com/remix/remix/compare/v1.0.3...v1.0.4) (2019-08-24)

### Bug Fixes

- 增加 remix-cli 缺失的 acorn-walk 依赖 ([0eec56b](https://code.alipay.com/remix/remix/commit/0eec56b))

## [1.0.3](https://code.alipay.com/remix/remix/compare/v1.0.2...v1.0.3) (2019-08-24)

### Bug Fixes

- 修复支付宝的 PickerView 组件 ([731b28e](https://code.alipay.com/remix/remix/commit/731b28e))
- 支付宝 picker 无法渲染的问题 ([41ddddc](https://code.alipay.com/remix/remix/commit/41ddddc))

## [1.0.2](https://code.alipay.com/remix/remix/compare/v1.0.1...v1.0.2) (2019-08-23)

### Bug Fixes

- stylus typo ([60c4ec9](https://code.alipay.com/remix/remix/commit/60c4ec9))
- 修复 PX 也会被转换成 rpx 的问题 ([e34c366](https://code.alipay.com/remix/remix/commit/e34c366))