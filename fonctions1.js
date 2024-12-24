function testchif(zone){
    var i=0;
    while(i<zone.length && zone.charAt(i)>='0' && zone.charAt(i)<='9'){
        i++;
    }
    if(i<zone.length){return false;}
    else{return true;}
}
function Produit(){
    var a=F.abo[0].checked;
    var b=F.abo[1].checked;
    var c=F.abo[2].checked;

    F2.prod.value=c;
}

function calcul(){
    var cin=F.TID[0].checked;
    var pass=F.TID[1].checked;
    var nid=F.NID.value;
    var T4=F.abo[0].checked;
    var T8=F.abo[1].checked;
    var T24=F.abo[2].checked;
    var numOption=F.duree.selectedIndex;
    var net=F.net.value;
    if(cin==false && pass==false){
        alert("cocher cin ou passport");
    }else if(nid==''){
        alert("remplir votre numéro ID");
    }else if(T4==false && T8==false && T24==false){
        alert("cocher l'une des offres adsl");
    }else if(numOption==0){
        alert("séléctionner une durée");
    }else if( cin==true && (testchif(nid)==false || nid.length!=8)){
        alert("votre ID doit etre composé de 8 chiffres");
    }else if(pass==true &&(!(nid.charAt(0)>='A'&& nid.charAt(0)<='Z') || nid.length!=8 ||testchif(nid.substr(1))==false)){
        alert("votre ID doit commencer par un caractère et composé aprés de 7 chiffres");
    }else{
        var nbmois=F.duree[numOption].value;
        if(T4==true){
            netApayer=15*Number(nbmois);
        }else if(T8==true){
            netApayer=25*Number(nbmois);
        }else{
            netApayer=40*Number(nbmois);
        }
        if(F.tv.checked==true){
            netApayer+=20*Number(nbmois);
        }
        if(F.tel.checked==true){
            netApayer+=10*Number(nbmois);
        }
        F.net.value=netApayer;
    }
}

