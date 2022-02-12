//buyer details
document.getElementById('detail-submit-btn').addEventListener('click', function () {
    let buyerDetailsInput = document.getElementById('buyer-details-input')
    let buyerInfo = document.getElementById('buyer-info').innerText = buyerDetailsInput.value
})
//item details 
document.getElementById('add-details-btn').addEventListener('click', function () {
    let infoTable = document.getElementById('info-table')
    let itemNameInput = document.getElementById('item-name-input')
    let itemPriceInput = document.getElementById('item-price-input')
    let itemQuantityInput = document.getElementById('item-quantity-input')


    let tr = document.createElement('tr')
    let th = document.createElement('th')

    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')

    let totalPrice = parseFloat(itemPriceInput) * parseFloat(itemQuantityInput)

    th.innerText = itemNameInput.value
    td1.innerText = itemPriceInput.value
    td2.innerText = itemQuantityInput.value
    td3.innerText = totalPrice.innerText

    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    infoTable.appendChild(tr)



    /*  <tr>
     <th >1</th>
     <td>Mark</td>
     <td>Otto</td>
     <td>@mdo</td>
 </tr> */
})