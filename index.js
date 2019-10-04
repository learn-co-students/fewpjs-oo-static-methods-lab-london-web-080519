class Formatter {
	//add static methods here
	static capitalize(string) {
		return string.slice(0, 1).toUpperCase() + string.slice(1);
	}

	static sanitize(string) {
		return string.replace(/[^\w\s'-]/g, "");
	}

	static titleize(string) {
		return string
			.split(" ")
			.map((item, index) => {
				if (index == 0) {
					return Formatter.capitalize(item);
				} else {
					if (
						[
							"the",
							"a",
							"an",
							"but",
							"of",
							"and",
							"for",
							"at",
							"by",
							"from",
						].includes(item)
					) {
						return item;
					} else {
						return Formatter.capitalize(item);
					}
				}
			})
			.join(" ");
	}
}
