/**FOR é utilizado quando conhecemos previamente a quantidade de iterações que
 *  teremos e segue a seguinte sintaxe.loop É um código que vai ser repetindo
 *  até que uma determinada condição seja alcançada, ou até mesmo que não haja
 *  condição de parada, estes são conhecidos como loops infinitos. */

   
for(var i = 1; i < 11; i ++){
    document.write("<p>Tabuada do " + i + "</p>");
    for(var j = 1; j < 11; j++){
        document.write(i + " x " + j + " = " + (i * j) + "<br>");
    }
}