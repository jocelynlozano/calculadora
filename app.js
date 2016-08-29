{var opcion = parseInt(prompt("elija una de las siguientes opciones \n" +
	"1. Calculadora Aritmetica \n" +
	"2. Caluladora Relacional"));
	switch(opcion){
		case 1:
			var opcionElegida1 = parseInt(prompt("ingrese la operacion deseada \n" +
				"1. Suma \n" + 
				"2. Resta \n" +
				"3. Multiplicacion \n" +
				"4. Division \n" +
				"5. Resto"));
				switch (opcionElegida1){
					case 1:
						var num1 = parseInt(prompt("ingrese el numero 1"));
						var num2 = parseInt(prompt("ingrese el numero 2"));
						var suma = num1 + num2;
						window.alert("la suma es:" + suma);
						break;	
					case 2:
						var num1 = parseInt(prompt ("ingrese el numero 1"));
						var num2 = parseInt(prompt ("ingrese el numero 2"));
						var resta = num1 + num2;
						window.alert("la resta es:" + resta);
						break;
					case 3:
						var num1 = parseInt(prompt ("ingrese el numero 1"));
						var num2 = parseInt(prompt ("ingrese el numero 2"));
						var multiplicacion = num1 * num2;
						window.alert("el producto es:" + multiplicacion);
						break;
					case 4:
						var num1 = parseInt(prompt ("ingrese el numero 1"));
						var num2 = parseInt(prompt ("ingrese el numero 2"));
						var cociente = num1 / num2;
						window.alert("el cociente es:" + cociente);
						break;
					case 5:
						var num1 = parseInt(prompt ("ingrese el numero 1"));
						var num2 = parseInt(prompt ("ingrese el numero 2"));
						var residuo = num1 / num2;
						window.alert("el residuo es:" + residuo);
						break;
					default:
						window.alert("no es una opcion valida");
						break;
				}
			break;
		case 2:
			var opcionElegida2 = parseInt(prompt("ingrese la operacion deseada \n" +
				"1. Menor que \n" +
				"2. Mayor que \n" +
				"3. Menor o igual que \n" +
				"4. Mayor o igual que \n"));
				switch(opcionElegida2){
					case 1:
						var num1 = parseInt(prompt("ingrese el numero 1"));
						var num2 = parseInt(prompt("ingrese el numero 2"));
						var menor = num1 < num2;
						window.alert("El numero " + num1+ " es menor que " + num2+ " : " + menor);
						break;
					case 2:
						var num1 = parseInt(prompt("ingrese el numero 1"));
						var num2 = parseInt(prompt("ingrese el numero 2"));
						var mayor = num1 > num2;
						window.alert("El numero " + num1+ " es mayor que " +  num2+ " : " +mayor);
						break;
					case 3:
						var num1 = parseInt(prompt("ingrese el numero 1"));
						var num2 = parseInt(prompt("ingrese el numero 2"));
						var menorIgual = num1 <= num2;
						window.alert("El numero " + num1+ " es menor o igual que " + num2+ " : " + menorIgual);
						break;
					case 4:
						var num1 = parseInt(prompt("ingrese el numero 1"));
						var num2 = parseInt(prompt("ingrese el numero 2"));
						var mayorIgual = num1 >= num2;
						window.alert("El numero " + num1+ " es mayor o igual que " +  num2+ " : " +mayorIgual);
						break;
					default:
						window.alert("no es una opción valida");
						break;
				}
			break;
		
	}
}