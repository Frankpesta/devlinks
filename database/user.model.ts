import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
	_id: string;
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
	image?: string;
	urls: Schema.Types.ObjectId[];
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema({
	_id: { type: String, required: true },
	email: {
		type: String,
		unique: true,
		required: [true, "Email is required"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Email is invalid",
		],
	},
	password: { type: String, required: true },
	firstName: { type: String, required: false },
	lastName: { type: String, required: false },
	image: { type: String, required: false },
	urls: [{ type: Schema.Types.ObjectId, ref: "Url" }],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const User = models?.User || model("User", UserSchema);

export default User;
