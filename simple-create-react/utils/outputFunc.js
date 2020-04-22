const chalk = require("chalk");
const projectSuccess = function(projectName){
    console.log(
        chalk.greenBright("开启项目") + '\n' +
        chalk.greenBright("cd " + projectName) + '\n' + 
        chalk.greenBright("npm run dev"));
}
const noPackageJSON = function(){
    console.log(chalk.red("failed! 没有package.json"));
    console.log(chalk.red("请重新尝试！"));
}

const pullFailed = function(){
    console.log(chalk.red("failed! 拉取失败",err));
    console.log(chalk.red("请重新尝试！"));
}

const queryError = function(error){
    console.log(chalk.red(error));
    console.log(chalk.red("请重新尝试！"));
}
module.exports = {
    projectSuccess,
    noPackageJSON,
    pullFailed,
    queryError
}