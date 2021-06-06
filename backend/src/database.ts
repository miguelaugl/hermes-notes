import mongoose from 'mongoose';

const { DB_NAME, DB_PASSWORD } = process.env;

const encodedPassword = DB_PASSWORD ?? '';

mongoose.connect(`mongodb+srv://${DB_NAME}:${encodedPassword}@cluster0.mhpce.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
