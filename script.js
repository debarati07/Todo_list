/** @format */

const add = document.querySelector('.add_todo');
const unorderlist = document.querySelector('ul');
const search = document.querySelector('.search_box');

unorderlist.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
		if (unorderlist.children.length == 0) {
			unorderlist.innerHTML = `<h3 class="end">There is no Todo left to do</h3>`;
		}
	}
});
const listitem = (item) => {
	const list = `<li>
						<span>${item}</span>
						<i class="fa-solid fa-trash delete"></i>
					</li>`;
	return list;
};
add.addEventListener('submit', (e) => {
	e.preventDefault();
	const i = add.todo.value;
	console.log(i);
	const l = listitem(i);
	unorderlist.innerHTML += l;
	if (
		unorderlist.children.length == 2 &&
		unorderlist.children[0].classList.contains('end')
	) {
		unorderlist.children[0].remove();
	}
	add.todo.value = '';
});
const searching = (val) => {
	Array.from(unorderlist.children)
		.filter((listitem) => {
			return !listitem.textContent.toLowerCase().includes(val);
		})
		.forEach((value) => {
			value.classList.add('filtered');
		});


        Array.from(unorderlist.children)
		.filter((listitem) => {
			return listitem.textContent.toLowerCase().includes(val);
		})
		.forEach((value) => {
			value.classList.remove('filtered');
		});
};

search.addEventListener('keyup', (e) => {
	searching(e.target.value.trim().toLowerCase());
});
