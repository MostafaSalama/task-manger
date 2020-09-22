import * as mongoose from 'mongoose';
import Task from "../types/Task";

const TaskSchema = new mongoose.Schema<Task>(
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
