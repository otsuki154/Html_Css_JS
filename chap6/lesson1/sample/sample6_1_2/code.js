var student = {
	gender: "female",
	age: 20,
	major: "arts",
	lessons: function(theme) {
	   console.log(this.major + "専攻の" + theme + "の授業");
    }
};