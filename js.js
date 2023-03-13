// Index
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

// Distance
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

// Distance date
fetch("distance_date.json")
.then(function(respons){
	return respons.json();
})
.then(function(distance_date){
	let placeholder = document.querySelector("#distance_date");
	let out = "";
	for(let product of distance_date){
		out += `
			<tr>
				<td>${product.number} </td>
				<td>${product.Fio}</td>
				<td>${product.Discharge}</td>
				<td>${product.Place}</td>
				<td>${product.Time}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});

// Index date
fetch("index_date.json")
.then(function(respons){
	return respons.json();
})
.then(function(index_date){
	let placeholder = document.querySelector("#index_date");
	let out = "";
	for(let product of index_date){
		out += `
			<tr>
				<td>${product.number} </td>
				<td>${product.Fio}</td>
				<td>${product.Discharge}</td>
				<td>${product.Place}</td>
				<td>${product.Time}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});