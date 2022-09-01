const { User } = require('../models');

const userController = {
	// get all users
	getAllUser(req, res) {
		User.find({})
			.then(dbUserData => {res.json(dbUserData)})
			.catch(err => res.status(400).json(err));
	},

	// get single user by id with populated thought and friend data
	getUserById({ params }, res) {
		User.findOne({ _id: params.userId })
			.populate({
				path: ['thoughts', 'friends'],
				select: '-__v'
			})
			.select('-__v')
			.then(dbUserData => {
				if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	},

	// create new user
	createUser({ body }, res) {
		User.create(body)
			.then(dbUserData => res.json(dbUserData))
			.catch(err => res.status(400).json(err));
	},

	// update user by id
	updateUser({ params, body }, res) {
		User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	},

	// delete user by id
	deleteUser({ params }, res) {
		User.findOneAndDelete({ _id: params.userId })
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	},

	// add new friend to user's friend list
	addFriend({ params }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId },
			{ $push: { friends: { _id: params.friendId } } },
			{ new: true }
		)
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	},

	// rmeove friend from user's friend list
	removeFriend({ params }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId },
			{ $pull: { friends: { _id: params.friendId } } },
			{ new: true }
		)
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	}
};

module.exports = userController;