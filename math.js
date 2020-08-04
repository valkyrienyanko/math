// Gets values closer and closer to x
function getValues(x, n) 
{
	const values = []
	const arr = x.toString().split('.')

	for (let i = 0; i < n; i++) 
	{
		const a = arr[0]
		const b = arr[1]
		
		let zeros = i
		
		for (let j = 0; j < b.length; j++)
		{
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
	
	return values;
}

const t = getValues(2.1, 10)

for (let i = 0; i < t.length; i++) 
{
	let result = (1.0 / (t[i] - 2.0)) - (2.0 / (t[i] * (t[i] - 2.0)))
	console.log(result)
}