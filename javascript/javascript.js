class Distributor {
	constructor (company, city, prov, contact, owner) {
		this.company=company; 
		this.city=city;
		this.prov=prov;
		this.contact = contact;
        this.owner = owner;
	}
}



$(document).ready(function () {
    localStorage.clear();

    $.ajax({
		type: "GET", 
		url: "data/distributors.json",
		dataType: "json", 
		success: loadArray
	});	

});

function loadArray(data){
    $.each(data.distributors, function(i, fileData){
        var file = [];

        file.push(fileData.company, fileData.city, fileData.prov, fileData.contact);
        localStorage.setItem(fileData.company, file);

    });
    localStorage.setItem(data.product, data.product);
    localStorage.setItem(data.item_num, data.item_num);
    localStorage.setItem(data.model, data.model);


    
    $("#product").append(" " + localStorage.getItem(data.product));
    $("#item_num").append(" " + localStorage.getItem(data.item_num));
    $("#model").append(" " + localStorage.getItem(data.model));

    $("#company1").append(" " + localStorage.key(1));
    $("#company2").append(" " + localStorage.key(2));
    $("#company3").append(" " + localStorage.key(3));


}