var dt = 0.5; 										//time step
var t = [0];   										//initial time
var tf = 12;										//final time
var x = [10];										//set the initial condition

	for (var i = 1; i <= tf / dt; i ++) {						//this for loop iterates the eulers method for the differential equation

		var k1 = - 1/4 * x[i - 1] + 1;						//this is where the differential equation is defined
		var xh1 = x[i - 1] + k1 * dt / 2;
		var k2 = - 1/4 * xh1 + 1;
		var xh2 = x[i - 1] + k2 * dt / 2;
		var k3 = - 1/4 * xh2 + 1;
		var xh3 = x[i - 1] + k3 * dt;
		var k4 = - 1/4 * xh3 + 1;
		x[i] = x[i - 1] + dt / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
		t[i] = t[i - 1] + dt;

	}

var table = ' ';									//defines table

	table += '<tr>';
	table += '<th>' + 'Time' + '</th>';
	table += '<th>' + 'X' + '</th>';
	table += '</tr>';

	for (var r = 0; r <= tf / dt; r++) {						//iterates the # of rows

		table += '<tr>';
		table += '<td>' + t[r] + '</td>';					//creates column filled with time values
		table += '<td>' + x[r] + '</td>';					//creates column filled with x vales
		table += '</tr>';

}

document.write('<table border = 3>' + table + '</table>');				//writes table to document
