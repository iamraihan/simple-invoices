//buyer details
document.getElementById('detail-submit-btn').addEventListener('click',function(){
    let buyerDetailsInput = document.getElementById('buyer-details-input')
    let buyerInfo = document.getElementById('buyer-info').innerText = buyerDetailsInput.value
})
//item details 
document.getElementById('add-details-btn').addEventListener('click', function(){
    let itemNameInput = document.getElementById('item-name-input')
    let itemPriceInput = document.getElementById('item-price-input')
    let itemQuantityInput = document.getElementById('item-quantity-input')

    console.log(itemNameInput.value, itemNameInput, itemQuantityInput)

    let tr = document.createElement('tr')
    let th = document.createElement('th')

    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')

    document.getElementById('info-table').innerText
    itemNameInput.value = 

   /*  <tr>
    <th >1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr> */
})