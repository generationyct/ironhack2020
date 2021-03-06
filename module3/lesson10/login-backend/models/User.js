const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  job: {
    type: String,
    enum: ["Programmer", "UX Designer", "Database Guru"]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
