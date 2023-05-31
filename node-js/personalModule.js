function greetUser(username) {
	const currentTime = new Date();
	const currentHour = currentTime.getHours();

	let greeting;

	if (currentHour < 12) {
		greeting = `Good Morning, ${username}!`;
	} else if (currentHour < 18) {
		greeting = `Good Afternoon, ${username}!`;
	} else {
		greeting = `Good Evening, ${username}!`;
	}

	return greeting;
}

module.exports = {
	greetUser: greetUser
};
