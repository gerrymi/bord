import mongoose from 'mongoose';

const mongo = {
  uri: process.env.MONGO_URI,
  config: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
};

mongoose.connect(mongo.uri, mongo.config);
mongoose.connection.once('open', () => {
  console.log('🌚 Connected to database');
});