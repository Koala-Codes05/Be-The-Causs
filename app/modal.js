const openBTN = document.getElementById('openheimer')
const closeBTN = document.getElementById('hisenberg')
const modal = document.getElementById('modal')

openBTN.addEventListener('click', () => {
    modal.showModal()
})

closeBTN.addEventListener('click', () => {
    modal.close()
})