document.getElementById("tinhTien").onclick = function () {
	list = checked();
	array = giaTien(
		document.getElementById("distance").value,
		document.getElementById("time").value,
		list,
	);
	var total = array.reduce(function (a, b) {
		return a + b;
	}, 0);
	document.getElementById("xuatTien").innerHTML = total;
	document.getElementById("divThanhTien").style.display = "block";
};

document.getElementById("hoaDon").onclick = function () {
	list = checked();
	array = giaTien(
		document.getElementById("distance").value,
		document.getElementById("time").value,
		list,
    );
    
    var total = array.reduce(function (a, b) {
		return a + b;
	}, 0);

    var body = document.getElementById("myTable");
    body.removeChild(document.getElementsByTagName("tbody")[0]);
    var x = document.createElement("TBODY");
    body.appendChild(x);

	if (array[0] > 0) {
		tableBody(list[4], array[0] / list[0] + "km", list[0], array[0]);
	}
	if (array[1] > 0) {
		tableBody(list[4], array[1] / list[1] + "km", list[1], array[1]);
	}
	if (array[2] > 0) {
		tableBody(list[4], array[2] / list[2] + "km", list[2], array[2]);
    }
    tableBody("Thời gian chờ", time = document.getElementById("time").value + "phút", list[3], array[3]);  
    document.getElementById("total").innerHTML = total;
};

function giaTien(distance, time, list) {
	var d1 = 0;
	var d2 = 0;
	var d3 = 0;
	t = time * list[3];
	if (distance > 0) {
		d1 = list[0];
	}
	if (distance > 1 && distance <= 20) {
		d2 = list[1] * (distance - 1);
	}
	if (distance > 20) {
		d2 = list[1] * 19;
		d3 = list[2] * (distance - 20);
	}
	return (array = [d1, d2, d3, t]);
}

function isNormalInteger(str) {
	var n = Math.floor(Number(str));
	return n !== Infinity && String(n) === str && n >= 0;
}

function tableBody(a, b, c, d) {
	var body = document.getElementsByTagName("tbody")[0];
	var row = body.insertRow();
	var cell1 = row.insertCell();
	var cell2 = row.insertCell();
	var cell3 = row.insertCell();
	var cell4 = row.insertCell();
	cell1.innerHTML = a;
	cell2.innerHTML = b;
	cell3.innerHTML = c;
	cell4.innerHTML = d;
}

function checked() {
	if (document.getElementById("uberX").checked) {
		//UberX radio button is checked
		var list = [8000, 12000, 10000, 2000, "uberX"];
	} else if (document.getElementById("uberSUV").checked) {
		//Uber SUV radio button is checked
		var list = [9000, 14000, 12000, 3000, "uberSUV"];
	} else if (document.getElementById("uberBlack").checked) {
		//Uber Black radio button is checked
		var list = [10000, 16000, 14000, 4000, "uberBlack"];
	} else {
		//radio button is not checked
		alert("Vui lòng chọn loại xe");
		return;
	}
	var distance = document.getElementById("distance").value;
	var time = document.getElementById("time").value;
	if (!isNormalInteger(distance)) {
		alert("Vui lòng nhập lại số KM");
		return;
	}
	if (!isNormalInteger(time)) {
		alert("Vui lòng nhập lại thời gian chờ");
		return;
	}
	return list;
}
