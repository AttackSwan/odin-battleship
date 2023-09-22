// Helper functions I use often
const createDiv = (className) => {
	const div = document.createElement("div");
	div.classList.add(className);
	return div;
};

const addImage = (path, container) => {
	const img = new Image();
	img.src = path;

	container.appendChild(img);
};

const addButton = (className, buttonText, container) => {
	const button = document.createElement("button");
	button.classList.add(className);
	button.textContent = buttonText;
	container.appendChild(button);
};

export { createDiv, addImage, addButton };
