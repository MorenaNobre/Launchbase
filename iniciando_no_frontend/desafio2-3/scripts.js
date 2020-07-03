const modalOverlay = document.querySelector('.modal-overlay')
const modal = modalOverlay.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener('click', function() {
        const cursoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src= `https://rocketseat.com.br/${cursoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src= ''
    modal.classList.remove('maximize')
})

document.querySelector('.max-modal').addEventListener('click', function() {
    if(modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})