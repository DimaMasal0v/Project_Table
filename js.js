
// document.getElementById("place").ondragover = function(){
// 	if(<td>${product.Place}</td> == 1){
// 	getElementById("place").style = ("background-color:gold");
// 	}
// }

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
				<td>${product.Coach}</td>
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
				<td>${product.Coach}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});


// Sort
document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});