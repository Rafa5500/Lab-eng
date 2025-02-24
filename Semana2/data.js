function formatDate() {
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('pt-BR', options);
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = `<h1>${formatDate()}</h1>`;
});
