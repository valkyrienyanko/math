// LIMITS

// Gets values closer and closer to x
function getValues(x, n) {
	// ----------------------------
	// faster way (have not tried this out yet)
	// .1 * 10 ** -i
	// 2.1 % 1 === .1
	// ----------------------------
	const values = []
	const arr = x.toString().split('.')

	for (let i = 0; i < n; i++) {
		const a = arr[0]
		const b = arr[1]

		let zeros = i

		for (let j = 0; j < b.length; j++) {
			if (b.charAt(j) === '0')
				zeros++
		}

		const left = parseInt(a)

		// calculate the new decimal value
		const right = []
		right.push('.')
		for (let j = 0; j < zeros; j++)
			right.push('0')
		right.push('1')

		const value = left + parseFloat(right.join(''))
		values.push(value)
	}

	return values
}

/*
function createList(input: number, iterations: number): number[] {
    const decimal = input % 1;

    const base = Math.round(input);

    const output = new Array(iterations);

    for (let i = 0; i < iterations; ++i) {
        output[i] = base + decimal * 10 ** -i;
    }

    return output;
}

console.log(createList(2.1, 6));
*/

// Formats values into a nice table
function table(columns) {
	let a = columns[0].values
	let b = columns[1].values

	let maxLengthA = 0
	for (let i = 0; i < a.length; i++) {
		const str = a[i].toString()
		if (str.length > maxLengthA)
			maxLengthA = str.length
	}

	let maxLengthB = 0
	for (let i = 0; i < b.length; i++) {
		const str = b[i].toString()
		if (str.length > maxLengthB)
			maxLengthB = str.length
	}

	console.log(`${columns[0].title} ${' '.repeat(maxLengthA - columns[0].title.length)}| ${columns[1].title}`)
	console.log(`${'-'.repeat(maxLengthA)} | ${'-'.repeat(maxLengthB)}`)

	for (let i = 0; i < a.length; i++) {
		let str = a[i].toString()
		const length = str.length

		if (length <= maxLengthA)
			str += ' '.repeat(maxLengthA - length + 1)
		str += '| '
		console.log(str + b[i])
	}
}

// Values getting closer and closer to 2.1
const inputs = getValues(2.1, 20)

// Random limit question
let results = []
for (let i = 0; i < inputs.length; i++) {
	let result = (1.0 / (inputs[i] - 2.0)) - (2.0 / (inputs[i] * (inputs[i] - 2.0)))
	results.push(result)
}

// Display the results in a nice table
table([
	{ title: 'Input', values: inputs }, 
	{ title: 'Output', values: results }
])