let hang = "", hang10 = "";
for (i = 1; i <= 10; i++) {
    for (k = 1; k <= 10; k++) {
        hang += "<td>" + i * k + "</td>";
    }
    hang10 += "<tr>" + hang + "</tr>";
    hang = "";
}
document.write('<table border="1" cellspacing="0px" cellpadding="5px"><tr>' + hang10 + '</tr></table>');
