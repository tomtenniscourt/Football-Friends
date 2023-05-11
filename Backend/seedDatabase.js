const mongoose = require("mongoose");
const seedData = require("./seed");
const User = require("./Models/user");
const mongoURI = "mongodb://localhost:27017/football-friends";

const seedNewData = async () => {
  try {
    await mongoose.connect(mongoURI);
    // , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    console.log("connected to database");
    await mongoose.connection.db.dropDatabase();
    console.log("data cleared");
    const newUsers = await User.create(seedData);
    console.log(`db seeded with ${newUsers.length} user`);
    await mongoose.connection.close();
    console.log(`connection closed, operation completed successfully`);
  } catch (err) {
    await mongoose.connection.close();
    console.log("connection to db closed due to error");
    console.log(err);
  }
};
seedNewData();
