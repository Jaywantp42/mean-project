const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = {
    host:"localhost",
    user:"root",
    password:"jayu",
    database:"quora",
};

let addUser = async(input) => {
    const connection = mysql.createConnection(db_config);
    await connection.connectAsync();

    let sql = "insert into users(firstname,lastname,email,mobile,passwd) values(?,?,?,?,?)";
    await connection.queryAsync(sql,[input.firstname,
                                    input.lastname,
                                    input.email,
                                    input.mobile,
                                    input.passwd]);

    await connection.endAsync();
};

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(db_config);
    await connection.connectAsync();

    let sql = "select * from users where email=? and passwd=?";
    const results = await connection.queryAsync(sql,[input.email, input.passwd,]);

    await connection.endAsync();

    if(results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let forgetPass = async(input) => {
    const connection = mysql.createConnection(db_config);
    await connection.connectAsync();

    let sql = "update users set passwd = ? where email = ?";
    const updatepwd = await connection.queryAsync(sql,[input.passwd, input.email]);

    await connection.endAsync();
}

let addQue = async (input) => {
    const connection = mysql.createConnection(db_config);

    await connection.connectAsync();
      
    let sql ="insert into ques ( quee, cat) values ( ?, ?)";
    let result= await connection.queryAsync(sql, [ input.quee, input.cat]);
    await connection.endAsync();
    return result;

};

let disQue = async () => {
    const connection = mysql.createConnection(db_config);

    await connection.connectAsync();
      
    let sql ="select  quee from ques";
    let result= await connection.queryAsync(sql);
    console.log(result);
    await connection.endAsync();
    return result;

};

module.exports={addUser, authenticateUser,forgetPass,addQue,disQue};