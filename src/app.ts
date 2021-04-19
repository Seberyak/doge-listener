import { Listener } from "./services/listener";

async function main() {
	const listener = new Listener();
	await listener.run();
}

main().then();
