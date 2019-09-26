import isemail from 'isemail';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User, List, Task } from '@src/models';

const resolvers = {
  User: {
    lists: ({ lists }) => {
      return lists.map(async (l) => await List.findById(l))
    }
  },
  List: {
    tasks: ({ tasks }) => {
      return tasks.map(async (t) => await Task.findById(t))
    }
  },
  Query: {
    currentUser: async (root, args, { user: self, error }) => {
      let success, message, user;
      if (error === 'TokenExpiredError') {
        success = false;
        message = `You've been logged out, please login again.`;
      } else if (!self) {
        success = false;
        message = 'Please Login.';
      } else {
        success = true;
        user = await User.findById(self.id)/* .populate('friends') */;
      }
      console.log(user)
      return { success, message, user };
    }
  },
  Mutation: {
    register: async (root, { email, username, password }) => {
      if (!isemail.validate(email)) throw new Error('Invalid email!');

      const hashedPass = await bcrypt.hash(password, 12);
      if (!hashedPass) throw new Error('Hashing failed!');

      await new User({ email, username, password: hashedPass })
        .save()
        .catch((err) => {
          throw new Error(err.toString());
        });

      return {
        success: true,
        message: 'Thank you for choosing Bord!',
      };
    },
    login: async (root, { username, password }, { SECRET }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('Invalid username!');

      const match = await bcrypt.compare(password, user.password);
      if (!match) throw new Error('Invalid password!');

      const token = jwt.sign(
        {
          user: {
            id: user._id,
            username: user.username,
          },
        },
        SECRET,
        { expiresIn: '1d' },
      );
      return {
        success: true,
        message: 'Welcome Back!',
        token,
      };
    },
    addList: async (root, { name }, { user: self }) => {
      const list = await new List({ name })
        .save()
        .catch((err) => {
          throw new Error(err.toString());
        });
      await User.updateOne({ _id: self.id }, { $addToSet: { lists: list } })

      return {
        success: true,
        message: `${list.name} has been successfully created!`
      };
    },
    addTask: async (root, { listId, name, description }, { user: self }) => {
      const task = await new Task({ name, description })
        .save()
        .catch(err => {
          throw new Error(err.toString())
        })
      await List.updateOne({ _id: listId }, { $addToSet: { tasks: task } })

      return {
        success: true,
        message: `You created ${name} as a task!`
      }
    },
    deleteUser: async (root, { email, userId }, { user: self }) => {
      await User.deleteOne({ email: email, _id: userId }, { $pull: userId })

      return {
        success: true
      }
    },
    deleteList: async (root, { listId }, { user: self }) => {
      await User.updateOne({ _id: self.id }, { $pull: { lists: listId } })
      await List.deleteOne({ _id: listId })

      return {
        success: true,
        message: 'You\'ve successfully deleted your list!'
      }
    },
    deleteTask: async (root, { listId, taskId }) => {
      await List.updateOne({ _id: listId }, { $pull: { tasks: taskId } })
      await Task.deleteOne({ _id: taskId })

      return {
        success: true,
        message: 'You\'ve successfully deleted a task!'
      }

    }
  }
};

export default resolvers;