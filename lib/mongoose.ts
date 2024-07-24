import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGO_URL) return console.log("Missing Mongodb Url");

	if (isConnected) {
		return console.log("Mongodb is already connected");
	}

	try {
		await mongoose.connect(process.env.MONGO_URL, { dbName: "devlinks" });

		isConnected = true;
		console.log("Mongodb is connected");
	} catch (error) {
		console.log(error);
	}
};
