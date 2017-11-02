启动自动测试工具(browsersync)以及环境
---------------
安装nodejs
---------------
  步骤
- [可去官网下载](https://nodejs.org/en/)
- 运行 node -v 检测是否成功安装


---------------
[安装Browsersync](http://www.browsersync.cn/)或者以下命令
---------------
  步骤
- npm install -g browser-sync
- browser-sync start --server --files "css/*.css, *.html" --port 3000
- 或者跳过第二部，直接双击start.cmd文件

-------------------
如需改动文件实时监测，还可以运行以下命令
-------------------
  步骤
- npm install -g node-sass
- node-sass -v 检测是否安装成功
- node-sass --watch sass/index.scss css/index.css