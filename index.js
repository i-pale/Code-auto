var codeAuto=require("./lib/");
var config={
        "dialect": "mysql",
        port: '3306',
        "host": "36.110.131.133",
        "username":"root",
        "pwd": "Jn597912",
        "storage": "thinkcmf",
        tables: null,
        skipTables: null,
        camelCase: false,
        'Templates': './tpls'
    }
codeAuto.run(config,function(err){
    if(err){
       throw new Error(err);
    }
    console.log("完成")
})