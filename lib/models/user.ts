import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        name: { type: String, trim: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        courses: [
            {
                courseId: {type: String},
                progress: {type: Number, default: 0},
                completed: {type: Boolean, default: false},
            }
        ]
            },
    {timestamps: true}
)

export default mongoose.models.User || mongoose.model("User", UserSchema);
//This is what we use for the Validation of the user data