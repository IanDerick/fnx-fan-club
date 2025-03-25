function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp ("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    
    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    if(document.frmfaleconosco.txtdtnasc.value==""){
        alert("Preencha o campo Data de nascimento.");
        document.frmfaleconosco.txtdtnasc.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp ("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if(!expRegFone.test(fone)){
        alert("Preencha o campo Telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    if(document.frmfaleconosco.txtemail.value==""){
        alert("Preencha o campo Email.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    if(document.frmfaleconosco.selmotivo.value==""){
        alert("Preencha o campo Motivo.");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }

    if(document.frmfaleconosco.txtcomentario.value==""){
        alert("Preencha o campo Comentário.");
        document.frmfaleconosco.txtcomentario.focus();
        return false;
    }

    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Email inválido!");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    return true;
}

function habilitarBotao() {
    const checkbox = document.getElementById('aceito');
    const botao = document.getElementById('submit');
    botao.disabled = !checkbox.checked;
}