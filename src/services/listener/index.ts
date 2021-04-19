import * as WebSocket from "ws";
import { IRDogeState } from "../../schemas/listener/validators";
import { Handler } from "./helpers/handler";
require("dotenv").config();

export class Listener {
	private readMsg<T>(msg: any): T {
		let body: T;
		try {
			body = JSON.parse(msg);
		} catch {
			// console.log(err);
		}
		return body;
	}
	public async run() {
		const key = process.env.API_KEY;

		// const url = "wss://streamer.cryptocompare.com/v2?format=streamer
		const url = `wss://streamer.cryptocompare.com/v2?api_key=${key}`;
		const socket = new WebSocket(url);

		socket.on("open", () => {
			const subRequest = {
				action: "SubAdd",
				subs: ["5~CCCAGG~DOGE~USD"],
			};
			socket.send(JSON.stringify(subRequest));
		});

		socket.on("message", (msg) => {
			const data = this.readMsg(msg);
			const handler = Handler.getInstance();
			handler.handle(data);
		});
	}
}
