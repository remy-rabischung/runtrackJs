function bisextile(année){
    return (((année & 3) == 0) && ((année % 100 != 0) || (année % 400 == 0)));
}
for(I=2000;I<=2024;I++) {
    if(bisextile(I)) console.log(I+" est une année bissextile<BR>");
}