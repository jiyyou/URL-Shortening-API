let form = document.querySelector('.main__form');
let outputList = document.querySelector('.main__output');

const shortenLink = () => {
	form.addEventListener('submit', e => {
		e.preventDefault();
		let linkInput = e.target.link.value;
		axios
			.get(`https://api.shrtco.de/v2/shorten?url=${linkInput}`)
			.then(res => {
				let shortenedLink = res.data.result.full_short_link;
				let listItem = document.createElement('LI');
				let originalLink = document.createElement('P');
				originalLink.innerText = `${linkInput}`;
				originalLink.classList.add('card__initialurl')
				let outputLink = document.createElement('P');
				outputLink.innerText = `${shortenedLink}`;
				outputLink.classList.add('card__outputurl')
				let button = document.createElement('BUTTON');
				button.innerText = 'Copy';
				button.classList.add('card__button');
				listItem.appendChild(originalLink);
				listItem.appendChild(outputLink);
				listItem.appendChild(button);
				outputList.appendChild(listItem);
			})
	})
}

shortenLink();