export default function soundDurationSeparator(second) {
	const minute = Math.floor(second / 60);
	const secondRemainder = second % 60;

	return `${minute > 9 ? minute : "0" + minute}:${
		secondRemainder > 9 ? secondRemainder : "0" + secondRemainder
	}`;
}
