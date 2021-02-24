document.getElementById("start").onclick = function() {
    prw.parentNode.removeChild(prw);
    document.getElementById("body").appendChild(div_square_floors);
};

document.getElementById("enter").onclick = function() {
    square = document.getElementById("square").value;
    number_floors = document.getElementById("numbers_floors").value;
    div_square_floors = document.getElementById("div_square_floors");
    div_square_floors.parentNode.removeChild(div_square_floors);
    document.getElementById("body").appendChild(div_type_foundation);
};

document.getElementById("tape").onclick = function() {
    div_type_foundation.parentNode.removeChild(div_type_foundation);
    document.getElementById("body").appendChild(div_material);
    type_foundation = 1;
};

document.getElementById("pile").onclick = function() {
    div_type_foundation.parentNode.removeChild(div_type_foundation);
    document.getElementById("body").appendChild(div_material);
    type_foundation = 2;
};

document.getElementById("plate").onclick = function() {
    div_type_foundation.parentNode.removeChild(div_type_foundation);
    document.getElementById("body").appendChild(div_material);
    type_foundation = 3;
};

document.getElementById("bar").onclick = function() {
    div_material.parentNode.removeChild(div_material);
    document.getElementById("body").appendChild(div_roof_type);
    material = 1;
};

document.getElementById("aerated_concrete_block").onclick = function() {
    div_material.parentNode.removeChild(div_material);
    document.getElementById("body").appendChild(div_roof_type);
    material = 2;
};

document.getElementById("ceramic_block").onclick = function() {
    div_material.parentNode.removeChild(div_material);
    document.getElementById("body").appendChild(div_roof_type);
    material = 3;
};

document.getElementById("brick").onclick = function() {
    div_material.parentNode.removeChild(div_material);
    document.getElementById("body").appendChild(div_roof_type);
    material = 4;
};

document.getElementById("racks").onclick = function() {
    div_material.parentNode.removeChild(div_material);
    document.getElementById("body").appendChild(div_roof_type);
    material = 5;
};

document.getElementById("sheet_material").onclick = async function() {
    div_roof_type.parentNode.removeChild(div_roof_type);
    document.getElementById("body").appendChild(result);
    roof_type = 1;
    get_summa();
};

document.getElementById("flexible_roof").onclick = function() {
    div_roof_type.parentNode.removeChild(div_roof_type);
    document.getElementById("body").appendChild(result);
    roof_type = 2;
    get_summa();
};

document.getElementById("ceramic_roof").onclick = function() {
    div_roof_type.parentNode.removeChild(div_roof_type);
    document.getElementById("body").appendChild(result);
    roof_type = 3;
    get_summa();
};

async function get_summa() {
    let summa = await eel.get_summa(square, number_floors, type_foundation, material, roof_type) ();
    document.getElementById("found_summa").innerHTML = "Фундамент: " + summa[0] + "р";
    document.getElementById("material_summa").innerHTML = "Тело дома: " + summa[1] + "р";
    document.getElementById("roof_summa").innerHTML = "Кровля: " + summa[2] + "р";
    document.getElementById("summa").innerHTML = "Итого: " + summa[3] + "р";
};

prw = document.getElementById("prw");
div_square_floors = document.getElementById("div_square_floors");
div_type_foundation = document.getElementById("div_type_foundation");
div_material = document.getElementById("div_material");
div_roof_type = document.getElementById("div_roof_type");
all = document.getElementById("all");
result = document.getElementById("result");

all.parentNode.removeChild(all);
document.getElementById("body").appendChild(prw);