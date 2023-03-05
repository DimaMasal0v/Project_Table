fetch("distance.json")
.then(function(response){
	return response.json();
})
.then(function(distance){
	let placeholder = document.querySelector("#distance");
	let out = "";
	for(let product of distance){
		out += `
			<tr>
				<td>${product.number} </td>
				<td>${product.Fio}</td>
				<td>${product.Date}</td>
				<td>${product.Discharge}</td>
				<td>${product.Place}</td>
				<td>${product.Time}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});

fetch("maxdistance.json")
.then(function(response){
	return response.json();
})
.then(function(maxdistance){
	let placeholder = document.querySelector("#maxdistance");
	let out = "";
	for(let product of maxdistance){
		out += `
			<tr>
				<td>${product.number} </td>
				<td>${product.Fio}</td>
				<td>${product.Date}</td>
				<td>${product.Discharge}</td>
				<td>${product.Place}</td>
				<td>${product.Time}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});