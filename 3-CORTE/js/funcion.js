function completar(form){
    form.domicilio.value == ""

    if(form.calle.value != ""){
        form.domicilio.value += form.calle.value + " ";
    }
    if(form.nro.value != ""){
        form.domicilio.value +="N." + form.nro.value + " ";
    }
    if(form.piso.value != ""){
        form.domicilio.value +="piso " +  form.piso.value + " ";
    }
    if(form.dto.value != ""){
        form.domicilio.value +="Dpto. " +  form.dto.value + " - ";
    }

    if(form.cp.value != ""){
        form.domicilio.value +="(" +  form.cp.value + ") ";
    }
    if(form.ciudad.value != ""){
        form.domicilio.value += form.ciudad.value + ", ";
    }
    if(form.pais.value != ""){
        form.domicilio.value += form.pais.value + " ";
    }
}