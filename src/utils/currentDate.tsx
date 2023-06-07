export function currentDate() {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();
	// let hours = String(today.getHours());
	// let minutes = String(today.getMinutes());
	return mm + '/' + dd + '/' + yyyy;
}