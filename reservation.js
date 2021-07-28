const reservationArr = new Array();

function bbReservationCosts(noAdults, noKids){
    //child $15
    //adult $25
    //member $25 for 2 or more adults and children and 5 or more adults
    var total = (noAdults * 25) + (noKids * 15);

    return total;
}

// Your program must contain a function called displayRidges which will run 
// and display exactly 38 of the hat character (*) just below the welcome message
function displayRidges (){
    var hatchar = "";
    for(var x=0; x<38 ; x++){
        hatchar +="*"; 
    }
    return hatchar
}

function submit(){
    const resName = document.getElementById("resName").value; 
    const resMember = document.getElementById("clubMemberYes").checked;
    const resAdults = document.getElementById("resAdult").value; 
    const resChildren = document.getElementById("resChildren").value;

    if(isNaN(resAdults)){
        alert("Incorrect number of adults"); 
    }

    if(isNaN(resChildren)){
        alert("Incorrect number of Children");  
    }

    var total = bbReservationCosts(resAdults, resChildren);
    var discount = 0;
    if((resAdults>=2 && resChildren>=2 && resMember) || (resAdults>=5 && resMember)){
        discount = total - 25; 
    }

    const res = {
        name : resName , 
        ismember : resMember, 
        noAdult : resAdults, 
        noChild : resChildren, 
        discountPrice : discount, 
        totalPrice : total
    };

    addToList(res); 

    displayReservationList();
}

function addToList(reservation){
    reservationArr.push(reservation);
}

function displayReservationList(){
    const resvCont = document.getElementById("reservationList");  
    resvCont.innerText="";
    
    var title_elem = document.createElement("h3"); 
    title_elem.innerHTML = "Welcome to the Bed and Breakfast Reservation System"; 
    title_elem.className="artitleTitle";

    var divHeaderContatiner = document.createElement("div"); 
    divHeaderContatiner.appendChild(title_elem);

    var ridges =document.createElement("p");
    ridges.innerHTML = displayRidges(); 
    ridges.innerText = displayRidges();
    divHeaderContatiner.appendChild(ridges);


    resvCont.appendChild(divHeaderContatiner);

    for (let i = 0; i < reservationArr.length; i++) {
        var arritem =  displayItem(reservationArr[i]);
        resvCont.appendChild(arritem);
    }

    var footer = document.createElement("h3"); 
    footer.innerHTML = "Thank you for using the break and breakfast system"; 
    footer.className="artitleTitle";
    resvCont.appendChild(footer);
    
}

function displayItem(item) {
    var arrItem = document.createElement("div"); 
    var sent1 =document.createElement("p");
    sent1.innerHTML = "Thank you " + item.name + " for your reservation"; 
    sent1.innerText = "Thank you " + item.name + " for your reservation"; 
    arrItem.appendChild(sent1);

    var sent2 =document.createElement("p");
    sent2.innerHTML = "Number of Adults:" + item.noAdult; 
    sent2.innerText = "Number of Adults:" + item.noAdult;
    arrItem.appendChild(sent2);

    var sent3 =document.createElement("p");
    sent3.innerHTML = "Number of Children:" + item.noChild; 
    sent3.innerText = "Number of Children:" + item.noChild;
    arrItem.appendChild(sent3);

    var sent4 =document.createElement("p");
    sent4.innerHTML = "Total Discount applied: $" + item.discountPrice; 
    sent4.innerText = "Total Discount applied: $" + item.discountPrice;
    arrItem.appendChild(sent4);

    var sent5 =document.createElement("p");
    sent5.innerHTML = "Total Stay: $" + item.totalPrice; 
    sent5.innerText = "Total Stay: $" + item.totalPrice;
    arrItem.appendChild(sent5);

    var sent6 = document.createElement("hr"); 
    arrItem.appendChild(sent6);

    return arrItem;
}
