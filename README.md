# simple-craete-react-cli
生成简单较完整的react项目环境的脚手架

# 内容
1. 通过commander实现命令行的交互
2. 通过download-git-repo实现仓库代码的拉取
3. 通过inquirer实现配置的选择和相关项的填写，实现可选配置
4. 通过handlebars实现对package.json模板的替换
5. 通过chalk和ora对命令行的输出进行美化
6. 通过child_process模块开启子进程，实现依赖的npm install

# 使用
`npm install -g simple-create-react`  全局安装

`simple-create-react init projectName` 拉取模板进行初始化

# 效果

项目生成后就可以看见皮卡丘啦！
![pika](https://github.com/oniya24/simple-craete-react-cli/blob/master/result.png)
