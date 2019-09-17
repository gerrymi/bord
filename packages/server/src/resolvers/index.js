import isemail from 'isemail';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '@src/models';

const resolvers = {
  // User: {
  //   things: ({ things }) => {
  //     return things.map(async (g) => await Thing.findById(g));
  //   },
  // },
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
  },
};

export default resolvers;