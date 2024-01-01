let itemCounter = 0

function addInvoiceItem() {
    itemCounter++

    const newItemRow = `
    <tr id="itemRow${itemCounter}">
        <td>
            <input 
            type="text"
            class="form-control"
            placeholder="Enter Description"
            required
            >
        </td>  
        <td>
            <input
              type="number"
              class="form-control quantity"
              placeholder="Enter Quantity"
              required
            >
        </td>
        <td>
            <input
              type="number"
              class="form-control unitPrice"
              placeholder="Enter Unit Price"
              required
            >
        </td>
        <td>
            <input
              type="text"
              class="form-control totalItemPrice"
              disabled
              readonly
            >
        </td>
        <td>
            <button
               type="button"
               class="btn btn-danger"
               onclick="removeInvoiceItem(${itemCounter})"
            >
               Remove
            </button>
        </td>
    `
    $("#invoiceItems").append(newItemRow)

    updateTotalAmount()
}

function removeInvoiceItem(itemId){
    $(`#itemRow${itemId}`).remove()
    updateTotalAmount()
}

function updateTotalAmount(){
  let totalAmount = 0

  $("tr[id^=itemRow]").each(function(){
    const quantity = parseFloat($(this).find(".quantity").val()) || 0
    const unitPrice = parseFloat($(this).find(".unitPrice").val()) || 0
    const totalItemPrice = quantity * unitPrice

    $(this).find("totalItemPrice").val(totalItemPrice.toFixed(2))
   totalAmount += totalItemPrice
})

$("#totalAmount").val(totalAmount.toFixed(2))
}