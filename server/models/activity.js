var mongoose      = require('mongoose'),
    ActivitySchema = null,
    Activity       = null;

ActivitySchema = new mongoose.Schema({
  projectId:  {type: Number, required: true, unique: false},
  activity:    {type: String, required: true},
  date: {type: Date, default: Date.now}
});

Activity = mongoose.model('Activity', ActivitySchema);
module.exports = Activity;
