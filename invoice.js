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
              class="form-control totalItem"
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