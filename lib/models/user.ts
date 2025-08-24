import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        name: { type: String, trim: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        bookmarks: [{type: Schema.Types.ObjectId, ref: "Course"}]
    },
    {timestamps: true}
)

export default models.User || model("User", UserSchema);
//This is what we use for the Validation of the user data