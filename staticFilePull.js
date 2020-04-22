#!/usr/bin/env node

const { program } = require('commander')
const path = require('path');
const Handlebars = require('handlebars');
const download = require('download-git-repo');
const inquirer = require('inquirer');
const fs = require('fs');
const ora = require('ora');
const chalk = require("chalk");

program
    .version('0.1.0')
    .command('init <name>')
    .description('初始化模板')
    .action( (name) => {
        inquirer.prompt([
            {
                name:"description",
                message:"请输入描述"
            },{
                name:"author",
                message:"请输入作者"
            }
        ]).then((paramater)=>{
            const targetPath = path.resolve(__dirname,name);
            paramater = {name,...paramater};
            const spinner = ora("模板下载中^.^ 请稍后");
            spinner.start();
            // program.addCommand('是否需要install:').action((value)=>{
            //     program.addCommand("npm install");
            // })
            const x = download("direct:https://github.com/oniya24/simple-create-react_template.git",targetPath,{ clone:true }, (err)=>{
                if(!err){
                    spinner.succeed();
                    const packagePath = path.join(targetPath,'package.json');
                    if(fs.existsSync(packagePath)){
                        const content = fs.readFileSync(packagePath).toString();
                        const template = Handlebars.compile(content);
                        const result = template(paramater);
                        fs.writeFileSync(packagePath,result);
                    }else{
                        spinner.fail();
                        console.log(chalk.red("failed! 没有package.json"));
                        return
                    }
                    console.log(chalk.green("success！ 项目初始化成功")+'\n');
                    console.log(
                        chalk.greenBright("开启项目") + '\n' +
                        chalk.greenBright("cd " + name) + '\n' + 
                        chalk.greenBright("npm run dev"));
                }else{
                    console.log(chalk.red("failed! 拉取失败",err));
                    return;
                }
            })
            
        }).catch((error)=>{
            console.log(chalk.red(error));
        })
    })

program.parse(process.argv)
