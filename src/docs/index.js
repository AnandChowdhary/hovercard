import App from './App';

new App();

console.log("Starting console logs for events!");

[
	"hovercardCreated",
	"hovercardPositioned",
	"hovercardUpdated",
	"hovercardMouseover",
	"hovercardMouseOut"
].forEach(listener => {
	window.addEventListener(listener, args => {
		console.log("Emitted", listener, args.detail);
	});
});