const cards = document.querySelectorAll('.quick_recipes')

for (let card of cards) {
    card.addEventListener('click', function() {
        const recipeId = card.getAttribute('id')
        window.location.href = `/recipe-detail/${recipeId}`
    })
}

const ingredient = document.querySelectorAll('.recipe_showhide')
const showHide = document.querySelectorAll('.showhide_btn')

for (let i = 0; i < showHide.length; i++) {
    showHide[i].addEventListener('click', function() {
        if(showHide[i].innerHTML == 'Esconder') {
            ingredient[i].classList.add('active')
            showHide[i].innerHTML = 'Mostrar'
        } else {
            ingredient[i].classList.remove('active')
            showHide[i].innerHTML = 'Esconder'
        }
    })
}