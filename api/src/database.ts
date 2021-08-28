import { createConnection, Connection} from 'typeorm';
import { DateColumn } from './entity/DateColumn';
import { User } from './entity/User';
import { Dose } from './entity/Dose';
import { Vaccine } from './entity/Vaccine';

// import User;
var connection: Connection|null = null;

export async function startDBConnection() {
	connection = await createConnection({
		type: 'postgres',
		host: process.env.DB_HOST,
		port: 5432,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		logging: false,
		entities: [User, Dose, Vaccine, DateColumn]
	});

    console.log("DB connected");
}

export async function closeDBConnection() {
	connection && (await connection.close());
}

export async function getExistingDBConnection() {
	return connection;
}
