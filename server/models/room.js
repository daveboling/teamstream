var mongoose   = require('mongoose'),
    RoomSchema = null,
    Room       = null;

RoomSchema = new mongoose.Schema({
  projectId:      {type: Number, required: true, unique: true}
});


Room = mongoose.model('Room', RoomSchema);
module.exports = Room;
