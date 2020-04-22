const queryArr = [
    {
        name:"name",
        type: 'string',
        message:"项目名称",
        default:"project",
        validate: str => {
            if(/^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/.test(str)){
                return true;
            }else{
                console.log("\n 包名不合规，请重新输入");
                return false;
            }
         }
    },
    {
        name:"description",
        type: 'string',
        message:"请输入描述",
        default:"description",
    },
    {
        name:"author",
        type: 'string',
        message:"请输入作者",
        default:"author"
    },
    {
        name:"isAxios",
        type:'confirm',
        message:"是否安装axios"
    },
    {   
        name:"isReactRouterDom",
        type:"confirm",
        message:"是否安装react-router-dom"
    },
    {
        name:"isRedux",
        type:"confirm",
        message:"是否安装redux"
    },
    {
        name:"isReactRedux",
        type:"confirm",
        message:"是否安装react-redux"
    }
]
module.exports = {
    queryArr
}