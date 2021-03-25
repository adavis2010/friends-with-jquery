let friends = [];


$().ready(() => { //define anonymous function

  $("#add").click(() => {   //selector pointing to HTML statement Add
    let fname = $("#iname").val(); //selector pointing to input, read value and store name
    let femail = $("#iemail").val();//selector pointing to input, read value and store email
    let fphone = $("#iphone").val();//selector pointing to input, read value and store phone
    let friend = {
        name: fname, email: femail, phone:fphone
    };
    friends.push(friend);
    display();

  }); 
    
}); 
 
const display = () => {
    let tbody = $("tbody"); // selecting by tag name (tbody) 
    tbody.empty(); 
    for(let friend of friends){   //iterate through collection
        let tr = $("<tr></tr>");
        let tdName = $(`<td>${friend.name}</td>`);
        tr.append(tdName);

        let tdEmail = $(`<td>${friend.email}</td>`);
        tr.append(tdEmail);

        let tdPhone = $(`<td>${friend.phone}</td>`);
        tr.append(tdPhone);

        tbody.append(tr);

    }
}