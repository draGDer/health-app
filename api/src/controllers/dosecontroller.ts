import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Vaccine } from "../entity/Vaccine";
import { Dose } from "../entity/Dose";

const register = async function (req, res, next) {

    const userVaccine = {
        user: req.body.user_id,
        vaccine: req.body.vaccine_id,
        location: req.body.location,
        date: req.body.date,
        doseNumber: 0
    };

    const userPass = req.headers.authorization;

    const db = getRepository(Dose)


    const userVal = await getRepository(User)
        .createQueryBuilder("user")
        .select(["user.id", "user.password"])
        .where("user.id = :id", { id: userVaccine.user })
        .andWhere("user.password = :pass", { pass: userPass })
        .getOne();

    console.log("123123   :    ", userVal);

    if (userVal === undefined) {
        res.send("User ID or Password is wrong!");
        return;
    }

    const vaccine = await getRepository(Vaccine)
        .createQueryBuilder("vaccine")
        .select(["vaccine.id"])
        .where("vaccine.id = :id", { id: userVaccine.vaccine })
        .getOne();

    if (vaccine === undefined) {
        res.send("Vaccine of ID:" + userVaccine.vaccine + " is not present!");
        return;
    }


    const users = await db.createQueryBuilder("dose")
        // .leftJoinAndSelect("dose.user", "user")
        .select(["dose.id", "dose.user", "dose.vaccine", "dose.dose_number"])
        .where("dose.user_id = :user_id", { user_id: userVaccine.user })
        .getMany();


    console.log(users);

    const count = users.length;
    if (count == 0) {
        //insert wiht dosenumber = 1
        userVaccine.doseNumber = 1;
        const insert = await db.createQueryBuilder()
            .insert()
            .into(Dose)
            .values(userVaccine)
            .execute();
        res.send("Dose ID is " + insert.identifiers[0].id + ". Dose number = " + userVaccine.doseNumber);
    } else if (count == 1 && users[0].vaccine == userVaccine.vaccine) {
        //insert wiht dosenumber = 2
        userVaccine.doseNumber = 2;
        const insert = await db.createQueryBuilder()
            .insert()
            .into(Dose)
            .values(userVaccine)
            .execute();
        res.send("Dose ID is " + insert.identifiers[0].id + ". Dose number = " + userVaccine.doseNumber);
    } else if (count == 1) {
        //different vaccine
        res.send("Vaccine type different from the first Dose");
    } else {
        //dose limit exceeded
        res.send("Dose limit exceeded!")
    }

}

const list = async function (req, res) {
    const db = await getRepository(Dose)
        .createQueryBuilder("dose")
        .select(["dose.id", "dose.user", "dose.vaccine", "dose.location", "dose.date", "dose.doseNumber"])
        .getMany();

    res.send(db);
}

const check = async function (req, res) {
    const userVaccine = {
        user: req.body.user_id,
        vaccine: req.body.vaccine_id,
        location: req.body.location,
        date: req.body.date,
        doseNumber: req.body.dose_number
    }

    const db = getRepository(Dose)

    const users = await db.createQueryBuilder("dose")
        // .leftJoinAndSelect("dose.user", "user")
        .select(["dose.id", "dose.user", "dose.vaccine", "dose.doseNumber"])
        .where("dose.user_id = :user_id", { user_id: userVaccine.user })
        .getMany();

    console.log(users);
    const count = users.length;
    if (count == 0) {
        //insert wiht dosenumber = 1
        var a = 1;
    } else if (count == 1 && users[0].vaccine == userVaccine.vaccine) {
        //insert wiht dosenumber = 2
    } else if (count == 1 && users[0].vaccine == userVaccine.vaccine) {
        //insert wiht dosenumber = 2
    } else if (count == 1) {
        //different vaccine
    } else {
        //dose limit exceeded
    }
    res.send([users, count]);
}

export default { list, register, check };