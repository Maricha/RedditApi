import mongoose from 'mongoose';

const {Schema} = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be 5 characters or more'],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'password must be 8 characters or more'],
    },
    isDeleted: {type: Boolean, default: false},
});

const User = mongoose.model('User', userSchema);
export default User;