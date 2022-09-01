const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
	getAllThoughts(req, res) {
		Thought.find({})
			.then(dbThoughtData => {res.json(dbThoughtData)})
			.catch(err => res.status(400).json(err));
	},

  // get single thought by id
  getThoughtById({ params }, res) {
		Thought.findOne({ _id: params.id })
			.then(dbThoughtData => {
				if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
				res.json(dbThoughtData);
			})
			.catch(err => res.status(400).json(err));
	},

  // create new thought to user
  createThought({ params, body }, res) {
		Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
					{ $push: { thoughts: _id } },
					{ new: true, runValidators: true }
        );
      })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
			.catch(err => res.status(400).json(err));
	},

  // update thought by id
  updateThought({ params, body }, res) {
		Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
			.then(dbThoughtData => {
				if (!dbThoughtData) {
					res.status(404).json({ message: 'No thought found with this id!' });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch(err => res.status(400).json(err));
	},

  // delete thought by id
  deleteThought({ params }, res) {
		Thought.findOneAndDelete({ _id: params.id })
			.then(dbThoughtData => {
				if (!dbThoughtData) {
					res.status(404).json({ message: 'No thought found with this id!' });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch(err => res.status(400).json(err));
	}
};

module.exports = thoughtController;