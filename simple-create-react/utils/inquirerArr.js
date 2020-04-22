const queryArr = [
    {
        name:"name",
        type: 'string',
        message:"项目名称(英文)"
    },
    {
        name:"description",
        type: 'string',
        message:"请输入描述"
    },
    {
        name:"author",
        type: 'string',
        message:"请输入作者"
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