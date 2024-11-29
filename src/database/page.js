import mongoose from 'mongoose';



const connectToDB = async  () => {

   const connectionURL = process.env.URL;

  mongoose.connect(connectionURL)
  .then( () => console.log('Connection to database is successfull'))
  .catch(error => console.log(error));
}

export default connectToDB;
