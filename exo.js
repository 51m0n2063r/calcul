function operation(chiffre1, chiffre2, signe) {
   switch (signe) {
      case 0 : return parseInt(chiffre1) + parseInt(chiffre2); break;
      case 1 : return chiffre1 - chiffre2; break;
      case 2 : return chiffre1 * chiffre2; break;
      case 3 : if (chiffre2 != 0) return chiffre1 / chiffre2;
               else return "division par 0";
   }
}