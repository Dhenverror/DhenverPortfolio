document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Simple alert to show form data
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Here you would typically handle form submission (e.g., send to a server)
        form.reset(); // Clear the form
    });
});
