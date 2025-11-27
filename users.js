import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router=express.Router();

let users=[
      // {
      // firstName:"Rahul",
      // lastName:"Kumar",
      // age:24
      // },
      // {
      // firstName:"Anjali",
      // lastName:"Sharma",
      // age:22
      // }
]


//all routes in here are starting with /users
router.get('/',(req,res)=>{
      console.log(users);
      res.send(users);
});

//to create a new user
router.post('/',(req,res)=>{
      console.log('POST REQUEST RECEIVED');
      const user=req.body;
      const userWithId={...user,id:uuidv4()}; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

      users.push(userWithId);
      res.send(`User with the name ${user.firstName} added to the database!`);
          
});

//users/2  ---> req.params = {id:2}
//to get data of a user partially
router.get('/:id',(req,res)=>{
     // const id=req.params.id; 
      const {id}= req.params; //destructuring

      const foundUser=users.find((users) => users.id===id);
      res.send(foundUser);
});

//delete user from database
router.delete('/:id',(req,res)=>{
       const {id}= req.params; //destructuring

       //id to delete 123
       //john 123
       //jane 456

      users=users.filter((user) => user.id==id);
      res.send(`User with the id ${id} deleted from the database.`);
});

//its used to update user info partially
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id == id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
});



export default router;