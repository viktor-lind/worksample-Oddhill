//Array of invoices
var invoices = [
    {
        "type": "Checkings",
        "name": "LIND",
        "id": "9182738****",
        "status": "Active",
        "currency": "USD",
        value: 1000.06,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "owl.png"
    },
    {
        "type": "Savings",
        "name": "NILSSON",
        "id": "4920738****",
        "status": "Active",
        "currency": "USD",
        value: 90000.67,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "bank.png"
    },
    {
        "type": "Checkings",
        "name": "KARLSSON",
        "id": "1009738****",
        "status": "Deactivated",
        "currency": "USD",
        value: 4550007.22,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "money.png"
    },
    {
        "type": "Savings",
        "name": "OHLSSON",
        "id": "2738293****",
        "status": "Active",
        "currency": "USD",
        value: 4000007.25,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "owl.png"
    },
    {
        "type": "Savings",
        "name": "JANSSON",
        "id": "9307381****",
        "status": "Active",
        "currency": "USD",
        value: 2000792.99,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "bank.png"
    },
    {
        "type": "Checkings",
        "name": "KALLESSON",
        "id": "7652838****",
        "status": "Deactivated",
        "currency": "USD",
        value: 8000079.23,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "money.png"
    },
    {
        "type": "Savings",
        "name": "HANSSON",
        "id": "7633338****",
        "status": "Active",
        "currency": "USD",
        value: 400792.34,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "owl.png"
    },
    {
        "type": "Savings",
        "name": "EK",
        "id": "9992838****",
        "status": "Deactivated",
        "currency": "USD",
        value: 8690776.41,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam sem at egestas venenatis.",
        "image": "bank.png"
    }

]

var table = document.getElementById("table");

//Function to create new rows and fill them with each invoice information. 

function displayInvoices() {
    var j = 2;

    for (var i = 0; i < invoices.length; i++) {

        var row = table.insertRow(j);
        row.setAttribute("onclick", "displayCard(this)");

        var type = row.insertCell(0);
        type.innerHTML = invoices[i].type;

        var name = row.insertCell(1);
        name.innerHTML = invoices[i].id + " - " + invoices[i].name;

        var status = row.insertCell(2);
        status.innerHTML = invoices[i].status;

        var currency = row.insertCell(3);
        currency.innerHTML = invoices[i].currency;


        var value = row.insertCell(4);
        value.innerHTML = "$" + invoices[i].value.toLocaleString();

        j++;


    }
}

displayInvoices();

//Sort invoices by type
var arrowTypeCount = 0;

function sortByType() {
    var upArrow = document.getElementById("typeUpArrow");
    var downArrow = document.getElementById("typeDownArrow");
    arrowTypeCount++;

    if (arrowTypeCount == 1) {
        upArrow.style.display = "none";
        downArrow.style.display = "inline";
        invoices.sort(function (a, b) {
            return a.type.localeCompare(b.type);
        });
    }

    if (arrowTypeCount > 1) {
        upArrow.style.display = "inline";
        downArrow.style.display = "none";
        invoices.sort(function (a, b) {
            return b.type.localeCompare(a.type);
        });
        arrowTypeCount = 0;
    }

    for (var i = invoices.length; i >= 1; i--) {
        table.deleteRow(i + 1);
    }
    displayInvoices()

}

//Sort invoices by name

var arrowNameCount = 0;

function sortByName() {

    var upArrow = document.getElementById("accountUpArrow");
    var downArrow = document.getElementById("accountDownArrow");
    arrowNameCount++;

    if (arrowNameCount == 1) {
        upArrow.style.display = "none";
        downArrow.style.display = "inline";
        invoices.sort(function (a, b) {
            var nameA = a.name.toLocaleLowerCase();
            var nameB = b.name.toLocaleLowerCase();
            return a.name.localeCompare(b.name);
        });

    }
    if (arrowNameCount > 1) {
        upArrow.style.display = "inline";
        downArrow.style.display = "none";
        invoices.sort(function (a, b) {
            var nameA = a.name.toLocaleLowerCase();
            var nameB = b.name.toLocaleLowerCase();
            return b.name.localeCompare(a.name);
        });
        arrowNameCount = 0;

    }



    for (var i = invoices.length; i >= 1; i--) {
        console.log("hej");
        table.deleteRow(i + 1);
    }
    displayInvoices()
}

//Sort invoices by balance

var arrowNumberCount = 0;

function sortByNumber() {

    var upArrow = document.getElementById("numberUpArrow");
    var downArrow = document.getElementById("numberDownArrow");
    arrowNumberCount++;
    if (arrowNumberCount == 1) {
        upArrow.style.display = "none";
        downArrow.style.display = "inline";
        invoices.sort(function (a, b) {
            console.log(a.balance);
            return a.value - b.value;

        });

    }
    if (arrowNumberCount > 1) {
        upArrow.style.display = "inline";
        downArrow.style.display = "none";
        invoices.sort(function (a, b) {

            return b.value - a.value;
        });
        arrowNumberCount = 0;
    }


    for (var i = invoices.length; i >= 1; i--) {
        table.deleteRow(i + 1);
    }


    displayInvoices();
}

//Sort by status

var arrowStatusCount = 0;

function sortByStatus() {

    var upArrow = document.getElementById("statusUpArrow");
    var downArrow = document.getElementById("statusDownArrow");
    arrowStatusCount++;

    if (arrowStatusCount == 1) {
        upArrow.style.display = "none";
        downArrow.style.display = "inline";
        invoices.sort(function (a, b) {
            return a.status.localeCompare(b.status);
        });
    }

    if (arrowStatusCount > 1) {
        upArrow.style.display = "inline";
        downArrow.style.display = "none";
        invoices.sort(function (a, b) {
            return b.status.localeCompare(a.status);
        });
        arrowStatusCount = 0;
    }

    for (var i = invoices.length; i >= 1; i--) {
        table.deleteRow(i + 1);
    }
    displayInvoices()

}

//sort by currency

var arrowCurrencyCount = 0;

function sortByCurrency() {

    var upArrow = document.getElementById("currencyUpArrow");
    var downArrow = document.getElementById("currencyDownArrow");
    arrowCurrencyCount++;

    if (arrowCurrencyCount == 1) {
        upArrow.style.display = "none";
        downArrow.style.display = "inline";
        invoices.sort(function (a, b) {
            return a.currency.localeCompare(b.currency);
        });
    }

    if (arrowCurrencyCount > 1) {
        upArrow.style.display = "inline";
        downArrow.style.display = "none";
        invoices.sort(function (a, b) {
            return b.currency.localeCompare(a.currency);
        });
        arrowCurrencyCount = 0;
    }

    for (var i = invoices.length; i >= 1; i--) {
        table.deleteRow(i + 1);
    }
    displayInvoices()

}

//Function to fill card with current invoice information

function displayCard(x) {

    var displayCardInfo = document.getElementById("invoices");
    displayCardInfo.style.display = "inline";

    var active = document.getElementsByTagName("tr");
    for (var i = 0; i <= invoices.length + 1; i++) {
        active[i].style.backgroundColor = "white";
        active[i].style.borderLeft = "none";

    }

    active[x.rowIndex].style.backgroundColor = "rgb(245,245,245)";
    active[x.rowIndex].style.borderLeft = "solid #2c79f7";

    console.log(x.rowIndex - 2);

    var image = document.getElementById("img-one");
    image.innerHTML = '<img src="' + invoices[x.rowIndex - 2].image + '" id="img-width">';

    var account = document.getElementById("accountName");
    account.innerHTML = invoices[x.rowIndex - 2].id + " - " + invoices[x.rowIndex - 2].name;

    var type = document.getElementById("typeName");
    type.innerHTML = invoices[x.rowIndex - 2].type;

    var status = document.getElementById("statusName");
    status.innerHTML = invoices[x.rowIndex - 2].status;

    var accountName = document.getElementById("accountNameS");
    accountName.innerHTML = invoices[x.rowIndex - 2].id + " - " + invoices[x.rowIndex - 2].name;

    var balance = document.getElementById("balanceName");
    balance.innerHTML = "$" + invoices[x.rowIndex - 2].value.toLocaleString();

    var currency = document.getElementById("currencyName");
    currency.innerHTML = invoices[x.rowIndex - 2].currency;

    var notes = document.getElementById("notes");
    notes.innerHTML = invoices[x.rowIndex - 2].notes;

    document.getElementById("close").style.display = "inline";


}

//Function to close the card and clear the table of marked rows

function closeCard() {
    document.getElementById("invoices").style.display = "none";
    document.getElementById("close").style.display = "none";
    var active = document.getElementsByTagName("tr");
    for (var i = 0; i <= invoices.length; i++) {
        active[i].style.backgroundColor = "white";
        active[i].style.borderLeft = "none";

    }
}
