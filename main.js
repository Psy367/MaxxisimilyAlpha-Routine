class MaxxisimilyAlphaRoutine extends Number {
	static Meta = {
		"Current Date": (new Date()).toString(),
		Author: {
			Title: "Guru",
			Firstname: "Stephen",
			Lastname: "Miszczyk",
			"Kill-Sign": "psy\u202E763\u202C",
			Greeting: "Doux, doux Ahau!!! **AH CHU**"
		},
		Organisation: "Quasi=Satya®",
		Project: {
			Name: "MaxxisimilyAlpha-Routine",
			Summary: "This is the recursive and symbolic binary base" +
			" radix system calculated by even decimal fraction creat" +
			"ing a hierarchy of relatively symmetrical numbers inclu" +
			"ding the Alpha, an infinitesimal and the Omega, its lar" +
			"ge reflection both being positive and due to the nature" +
			" of being even fractions the result of every enumerated" +
			" Alpha multiplied by its symmetrical Omega is always 1." +
			" The concept begun with the idea that Infinity could be" +
			" represented as 1 followed by endless 0s but no decimal" +
			" places because it is a whole Infinity, controversial h" +
			"ence the rename to a Maxxisimily Infinity and 1 Maxxism" +
			"ily also known as Maxxisimily Alpha which has the same " +
			"idea but symmetrically opposite the decimal point. Tech" +
			"nically both values are undefined but their concepts ca" +
			"ncel each other out resulting in I/A === 1.0/0.1 which " +
			"is the base number to the recursion. This is a study of" +
			" patterns and balance in numbers.",
			"Creation Date": (new Date(2025, 6, 25)).toString()
		},
		get Introduction() {
			return `Hi, I'm ${
				this.Author.Title
			}. ${
				this.Author.Firstname
			} ${
				this.Author.Lastname
			} aka ${
				this.Author["Kill-Sign"]
			} and this is my colloquial blessing to you... "${
				this.Author.Greeting
			}"...
The current date is ${
	this["Current Date"]
} and this is the ${
	this.Project.Name
} application by ${
	this.Organisation
} created ${
	this.Project["Creation Date"]
}
[Observation: [${
	this.Project.Summary
}]];`
		}
	}
	static InfinityVerse = []
	static Initiate() {
		const WaveLengths = []
		if(MaxxisimilyAlphaRoutine.InfinityVerse.push(new MaxxisimilyAlphaRoutine(MaxxisimilyAlphaRoutine.InfinityVerse.length + 1)) <= 9) {
			return MaxxisimilyAlphaRoutine.Initiate()
		} else {
			let Count = 0
			for(const Verse of MaxxisimilyAlphaRoutine.InfinityVerse) {
				WaveLengths.push(`[VERSE[${
					Count++
				}]`)
				for(const Distance in [
					...Array(Verse.Count)
				]) {
					WaveLengths.push(`\t[REALM[${Distance}]
\t\tALPHA[${Verse.Alpha[Distance]}]
\t\tOMEGA[${Verse.Omega[Distance]}]]`)
				}
			}
			return WaveLengths.join("\n")
		}
	}
	static Compute() {
		console.log(MaxxisimilyAlphaRoutine.Meta.Introduction)
		console.log(MaxxisimilyAlphaRoutine.Initiate() + "];")
		return "\x1b[33mMaxxisimilyAlpha-Routine Complete\x1b[0m"
	}
	constructor(Radix) {
		super(Radix)
		this.Alpha = [
			0.1 / +this
		]
		this.Omega = [
			+this / 0.1
		]
		this.Count = 0
		while(this.Jump()) {}
	}
	Jump() {
		const [
			Alpha,
			Omega
		] = [
			this.Alpha[this.Count] / this.Omega[this.Count],
			this.Omega[this.Count] / this.Alpha[this.Count]
		]
		if(Alpha > 0 && Omega < Infinity) {
			this.Alpha.push(Alpha)
			this.Omega.push(Omega)
		} else {
			return false
		}
		this.Count++
		return true
	}
}
MaxxisimilyAlphaRoutine.Compute()