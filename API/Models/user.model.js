const Schema = require("mongoose");
const UserSchema = new Schema({
    firstName: { type: String, default: '', required: true },
    lastName: { type: String, default: '', required: true },
    password: { type: String, default: '', required: true },
    profilePhoto: { type: Schema.Types.ObjectId, ref: 'File', required: false },
    email: { type: String, default: '', required: false },
    mobile: { type: String, default: '', required: false },
    insertedBy: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    // insertDate: { type: Date, default: new Date().toISOString(), required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    // updateDate: { type: Date, default: new Date().toISOString(), required: true },
    isDeleted: { type: Boolean, default: false, required: true },
    deletedBy: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    deleteDate: { type: Date, default: null, required: false },
    role: { type: String, default: "User" ,require: true},
}, { 
    timestamps: true 
});
const UserModel = Schema.model("user",UserSchema);
module.exports = {
    UserModel
}