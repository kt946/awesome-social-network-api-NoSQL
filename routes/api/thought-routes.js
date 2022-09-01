const router = require('express').Router();
const {
	getAllThought,
	getThoughtById,
	createThought,
  updateThought,
  removeThought,
	createReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought)

// /api/thoughts/:thoughtId/
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;