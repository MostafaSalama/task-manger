import * as mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		progress: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);
export default TaskSchema ;
