import { request } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";


const list = async function(req, res) {
    console.log(req.headers.authorization)
    const userdb = await getRepository(User)
        .createQueryBuilder("user")
        .select(["user.id", "user.name", "user.age", "user.email", "user.mob"])
        .getMany();

    res.send(userdb);
}

const register = async function(req, res) {
    const user = {
        name:req.body.name,
        age: req.body.age,
        mob: req.body.mob,
        email: req.body.email,
        password: req.body.password        
    }
    const userdb = await getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute();

    console.log(userdb);

    res.send("User ID is " + userdb.identifiers[0].id);

}

const getUser = async function(req, res) {
    const userId = req.params.id;
    const userdb = await getRepository(User)
        .createQueryBuilder("user")
        .select(["user.id", "user.name", "user.age", "user.email", "user.mob", "user.password"])
        .where("user.id = :id", { id: userId})
        .getOne();
    console.log(userdb);
    if(userdb === undefined){
        res.status(404).send("user not found");
    }
    res.send(userdb);
}   
export default {list, register, getUser};