import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema(
  {
    activityName: { type: String, required: true },
    activityDescription: { type: String, required: true },
    activityDate: { type: Date, required: true },
  });

const Activity = mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);


export default Activity;