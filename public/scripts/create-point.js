// event.target = target do usuário, onde ele clicou por exemplo.

function populateUFs() {
    const ufSelect = document.querySelector('[name=uf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(states => {
            for (let state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}
populateUFs()


function getCities(event) {
    const citySelect = document.querySelector('[name=city]')
    const stateInput = document.querySelector('[name=state]')
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true
    fetch(url)
        .then(res => res.json())
        .then(citites => {
            for (let city of citites) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        })
}

document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities)


// Itens de coleta
const itensToCollect = document.querySelectorAll('.items-grid li')

for (let item of itensToCollect) {
    item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector('[name=items]')

let selectedItems = []


function handleSelectedItem(event) {
    const itemLi = event.target

    // Adicionar ou remover uma classe com JS.
    itemLi.classList.toggle('selected')

    const itemId = itemLi.dataset.id


    // Verificar se existem itens selecionados, se sim, pegar os itens selecionados.
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })

    // Se já estiver selecionado, tirar da seleção.
    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems

        // Se não estiver selecionado, adicionar a seleção.
    } else {
        selectedItems.push(itemId)
    }

    // Atualizar o campo escondido com os itens selecionados.
    collectedItems.value = selectedItems
}