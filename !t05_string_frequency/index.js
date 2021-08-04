class StrFrequency {
  constructor(str) {
    this.str = str;
  }

  letterFrequencies(){
	let str = this.str.replace(/[^a-zа-яё]/gi, '').toUpperCase();
    str = new Set(str.split(''));
	for (let value of str) {
		let count = (this.str.toUpperCase().split(value).length - 1);
		console.log(`Letter ${value} is repeated ${count} times`);
	}
  }

  wordFrequencies(){
	let words = this.str.toUpperCase().split(" ");
	words.forEach(function(item, i, arr) {
		
	});
  }

  reverseString(){
	return true;
  }
}

function test(str) {
  const sf = new StrFrequency(str);
  console.log(`Letters in ${str}`);
  for (const [k, v] of Object.entries(sf.letterFrequencies())) {
      console.log(`Letter ${k} is repeated ${v} times`);
  }

  console.log(`Words in ${str}`);
  for (const [k, v] of Object.entries(sf.wordFrequencies())) {
      console.log(`Word ${k} is repeated ${v} times`);
  }

  console.log(`Reverse of the string: ${str}`);
  console.log(`${sf.reverseString()}`);
}

test("Face it, Harley-- you and your Puddin' are kaput!");
console.log('*************');
test('  Test test 123 45 !0 f   HeLlO wOrLd  ');
console.log('*************');
test('');
