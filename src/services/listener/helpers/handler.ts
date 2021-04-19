import { IRDogeState } from "../../../schemas/listener/validators";

export class Handler {
	private static instance: Handler;

	private constructor() {}

	public static getInstance() {
		if (!Handler.instance) {
			Handler.instance = new Handler();
		}
		return this.instance;
	}

	public handle(args: any) {
		if (args?.TYPE === "5") {
			const data: IRDogeState = args;
			console.log("Price: ", data.PRICE);
		}
	}
}
