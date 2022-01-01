import mongoose from 'mongoose'


// Now create a Schema

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateAdded: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    section: {
        type: String,

    },
    class: {
        type: String,

    }
})



// Now create a model

const User = mongoose.model("users", UserSchema);

export default User