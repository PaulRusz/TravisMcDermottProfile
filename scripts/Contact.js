// Function to create the contact form
export function createContactForm() {
    const form = document.createElement('form');
    
    // Name Label
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    form.appendChild(nameInput);

    // Email Label
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    form.appendChild(emailInput);

    // Message Label
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    form.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    form.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    document.body.appendChild(form);

    form.addEventListener('submit', handleSubmit); // Add the submit event listener
}

export const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    e.target.reset();
}

createContactForm();