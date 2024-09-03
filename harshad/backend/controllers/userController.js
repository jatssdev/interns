// npm i bcrypt
import { compare, hash } from "bcrypt";
import { $userModel } from "../models/userModel.js";
import jwt from 'jsonwebtoken'
// const cookies = require('cookie-parser');

//! Register
export const register = async (req, res) => {
  try {
    const { fullName, username, email, pass } = req.body;

    if (!fullName) throw new Error("Full name is required.");
    if (!username) throw new Error("Username is required.");
    if (!email) throw new Error("Email is required.");
    if (!pass) throw new Error("Password is required.");

    //TODO :- Jo user already register hoy to res send karido ( user already exist )
    const existingUser = await $userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) throw new Error("User already register...");

    await $userModel({
      fullName,
      username,
      email,
      pass: await hash(pass, 10),
    }).save();

    res.status(200).send({
      process: true,
      resMsg: "Register successfully...",
    });
  } catch (err) {
    res.status(200).send({
      process: false,
      resMsg: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, pass } = req.body;

    if (!email || !pass)
      throw new Error("All fields are required.");

    const findUser = await $userModel.findOne({ email });

    if (!findUser) throw new Error("User not find.");

    const checkPass = await compare(pass, findUser.pass);

    if (!checkPass) throw new Error("Password is wrong");

    let token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET, { expiresIn: '1m' });


    res.status(200).cookie('token', token).send({
      process: true,
      resMsg: "Login successfully...",
    });
  } catch (err) {
    console.log(err)
    res.status(200).send({
      process: false,
      resMsg: err.message,
    });
  }
};


export let verifyToken = async (req, res) => {
  try {
    let token = req.params.token;
    if (!token) throw 'token is required';

    let userid = jwt.verify(token, process.env.JWT_SECRET)
    let user = await $userModel.findById(userid.id)
    res.send({
      process: true,
      user: user
    })
  } catch (err) {
    console.log(err)
    res.status(200).send({
      process: false,
      resMsg: err.message,
    })
  }
}