function resta(n1,n2){
  return (n1-n2);
}

function multi(n1,n2){
  return (n1*n2);
}

exports.resta=resta; /*exportar para poder llamar en index.js*/
exports.multi=multi;