import mongoose, { ConnectionOptions } from 'mongoose';

const defaultOptions = {
	useCreateIndex: true,
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false,
};
export class MongooseConnection {
	constructor(
		url: string,
		cb: (err: Error | null) => void,
		options: ConnectionOptions = defaultOptions,
	) {
		mongoose
			.connect(url, options)
			.then(() => {
				cb(null);
			})
			.catch((err) => {
				cb(err);
			});
	}
}
