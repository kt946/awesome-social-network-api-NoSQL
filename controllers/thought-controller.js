const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
	getAllThought(req, res) {
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

  // create new thought
  createThought({ body }, res) {
		Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
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

  // create new reaction to thought
  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // update thought by id
  updateThought({ params, body }, res) {
		Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
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
  removeThought({ params }, res) {
		Thought.findOneAndDelete({ _id: params.thoughtId })
			.then(dbThoughtData => {
				if (!dbThoughtData) {
					res.status(404).json({ message: 'No thought found with this id!' });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch(err => res.status(400).json(err));
	},

  // delete reaction by id
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
			{ _id: params.thoughtId },
			{ $pull: { reactions: { reactionId: params.reactionId } } },
			{ new: true }
		)
			.then(dbThoughtData => res.json(dbThoughtData))
			.catch(err => res.json(err));
  }
};

module.exports = thoughtController;