import { getRepository } from "typeorm";
import { Vaccine } from "../entity/Vaccine";


const list = async function(req, res) {
    const vaccinedb = await getRepository(Vaccine)
        .createQueryBuilder("vaccine")
        .select(["vaccine.id", "vaccine.name", "vaccine.vol", "vaccine.type"])
        .getMany();

    res.send(vaccinedb);
}

const register = async function(req, res) {
    const vaccine = {
        name:req.body.name,
        vol: req.body.vol,
        type: req.body.type     
    }
    const vaccinedb = await getRepository(Vaccine)
        .createQueryBuilder()
        .insert()
        .into(Vaccine)
        .values(vaccine)
        .execute();

    console.log(vaccinedb);

    res.send("vaccine ID is " + vaccinedb.identifiers[0].id);

}

const getvaccine = async function(req, res) {
    const vaccineId = req.params.id;
    const vaccinedb = await getRepository(Vaccine)
    .createQueryBuilder("vaccine")
    .select(["vaccine.id", "vaccine.name", "vaccine.vol", "vaccine.type"])
    .where("vaccine.id = :id", { id: vaccineId})
    .getMany();

res.send(vaccinedb);
}   
export default {list, register, getvaccine};