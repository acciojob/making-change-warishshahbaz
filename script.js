const makeChange = (c) => {
  let = {
	  quater:25,
	  dime:10,
	  nickel:5,
	  penny:1,
  }
	let q = Math.floor(c/quater);
	let remainingQuater = quaterAmount % quater;
	let d = Math.floor(remainingQuater/dime);
	let remainingDime = remainingQuater % dime;
	let n = Math.floor(remainingDime /nickel);
	let remainingNickel = remainingDime % nickel;
	let p = Math.floor(remainingNickel/penny);

	 const result = {
        q: q,
        d: d,
        n: n,
        p: p
    };

    return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
