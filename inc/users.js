var conn = require("./db");

const { connect } = require("./db");


module.exports = {

    render(req, res, error){

        res.render("admin/login", {
            body: req.body,
            error
        }); 

    },

    login(email, pessword){

        return new Promise((resolve, reject)=>{

            connect.query(`
                SELECT * FROM tb_users WHERE email = ?
            `, [
                email
            ], (err, results)=>{
                
                if (err) {
                    reject(err);
                } else {

                    if (!results.length > 0) {
                        reject("Usuário ou senha incorreto");                        
                    } else {

                        let row = results[0];

                        if (row.password !== password) {
                            reject("Usuário ou senha incorreto.");
                        } else {
                            resolve(row);
                        }
                    }

                }
        
            });

        })

    }

};