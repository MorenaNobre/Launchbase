const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener('click', function() {
        const cursoId = card.getAttribute('id')
        window.open(`https://rocketseat.com.br/${cursoId}`, '_blank')
        // window.location.href = `https://rocketseat.com.br/${cursoId}`
    })
}