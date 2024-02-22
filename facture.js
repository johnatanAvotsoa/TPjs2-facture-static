const desI = document.getElementById('designation') ; 
const puI = document.getElementById('pU') ; 
const qteI = document.getElementById('qte') ; 
const btn = document.getElementById('btn');
const tab = [] ;
const tbody = document.getElementsByTagName('tbody')[0] ;
const htS = document.getElementById('ht-span');
const tts = document.getElementById('ttc-span');
const dateS = document.getElementById('date');
x = new Date()
dateS.innerHTML = `${new Date(x).getMonth()-new Date(x).getFullYear()}`
btn.addEventListener('click',e=>{
    e.preventDefault(); 
    if(qteI.value != "" && desI.value !="" && puI.value != ""){
        let achat = {} ; 
        achat.designation = desI.value ; 
        achat.pU = puI.value ; 
        achat.qte = qteI.value ; 
        tab.push(achat);
        tbody.innerHTML = "";
        htS.innerHTML ="";
        tts.innerHTML = "";
        let ht = 0 ; 
        desI.value = "";
        puI.value="";
        qteI.value="";
        for(let i = 0 ; i<tab.length ; i++){
            tbody.innerHTML += 
                `
                <tr>
                    <td>${i+1}</td>
                    <td>${tab[i].designation}</td>
                    <td>${tab[i].qte}</td>
                    <td>${tab[i].pU}</td>
                    <td>${(tab[i].pU*tab[i].qte).toFixed(2)}</td>
                </tr>
                `
            ht += tab[i].pU*tab[i].qte;
            htS.innerHTML = ht.toFixed(2);
            tts.innerHTML = (ht*1.2).toFixed(2);
        }
    }
    else{
        alert('NON NEFA')
    }
})

