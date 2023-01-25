import {Schema,models,model,mongoose} from 'mongoose';

const mapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  createdAt: { type: Date, default: Date.now },
});


const Map = mongoose.models.maps || mongoose.model('maps', mapSchema);

export default Map;
