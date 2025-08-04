const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const internSchema = new mongoose.Schema({
    name: {type: String, required: true},
    referralCode: {type: String, required: true, unique: true},
    donations: {type: Number, default: 0},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true});

internSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

internSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('Intern', internSchema);