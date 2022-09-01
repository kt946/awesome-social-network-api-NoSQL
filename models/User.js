const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			// creates a validator to check if value matches regex for emails
			match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
		},
		thoughts: [
			{
				type: Schema.Types.ObjectId,
        ref: 'Thought'
			}
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
        ref: 'User'
			}
		]
	},
	{
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
	return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;