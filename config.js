const databaseuri=process.env.DATABASE_URL || {
    database:'dbone',
    username:'userone',
    password:'passone',
    host:'localhost',
    dialect:'mysql'
}
const port=process.env.PORT || 2222;
exports=module.exports={
    port,databaseuri
}
