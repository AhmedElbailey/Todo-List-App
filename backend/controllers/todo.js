const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Todo = require('../model/todo');
const User = require('../model/user');

exports.readAllTodos = async (req, res, next) => {
  try {
    const todosArr = await Todo.aggregate([
      { $match: { _id: { $in: req.user.todosId } } },
      { $sort: { createdAt: 1 } },
    ]);
    // const todosArr = await Todo.aggregate([{ $sort: { createdAt: 1 } }]);

    return res.status(200).json({
      statusCode: 200,
      data: todosArr,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode: 500,
      message: 'Server Error Occured.',
    });
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    let user = req.user;
    const text = req.body.text;
    const priorityLevel = req.body.priorityLevel;
    // Create todo document
    let [todo] = await Todo.insertMany([
      {
        text: text,
        todoStatus: 'pending',
        priorityLevel: priorityLevel,
        userId: new ObjectId(req.userId),
      },
    ]);
    // Add todo id to user document
    user.todosId.push(todo._id);
    await user.save();

    return res.status(200).json({
      message: 'todo created successfully',
      statusCode: 200,
      data: {
        _id: todo._id.toString(),
        text: todo.text,
        todoStatus: 'pending',
        priorityLevel: priorityLevel,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      },
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: 'Server Error Occured.',
    });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    let user = req.user;
    let todoId = req.body.todoId;
    // Using transactions
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      //// Delete Todo document
      await Todo.findByIdAndDelete(todoId).session(session).exec();
      //// Delete Todo id from user document
      user.todosId.pull(new ObjectId(todoId));
      await user.save();
    });
    await session.endSession();

    return res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode: 500,
      message: 'Server Error Occured.',
    });
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    let todoId = req.body.todoId;
    let newText = req.body.newText;
    let newPriority = req.body.newPriority;
    const todo = await Todo.findByIdAndUpdate(todoId, {
      $set: { text: newText, priorityLevel: newPriority },
    });
    return res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: 'Server Error Occured.',
    });
  }
};

exports.completeTodo = async (req, res, next) => {
  try {
    const todoId = req.body.todoId;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      throw new Error('Todo wasnot found in DB.');
    }
    todo.todoStatus = 'completed';
    await todo.save();
    return res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: 'Server Error Occured.',
    });
  }
};
exports.pendTodo = async (req, res, next) => {
  try {
    const todoId = req.body.todoId;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      throw new Error('Todo wasnot found in DB.');
    }
    todo.todoStatus = 'pending';
    await todo.save();
    return res.status(200).json({
      statusCode: 200,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: 'Server Error Occured.',
    });
  }
};
