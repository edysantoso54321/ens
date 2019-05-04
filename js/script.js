var jumattribut=2;var train=[];var jm=17; var jt=200; var tm=[];
function getlabel(cell){var hasil=[];for (var i=0; i<jm; i++){jumy=getpc(tm[i],1);jumn=getpc(tm[i],2);for(var j=0; j<jumattribut; j++){jumy*=(1/(getsd(tm[i],j,1)*Math.sqrt(2*Math.PI)))*Math.exp(-(Math.pow(cell[j]-getmain(tm[i],j,1),2)/(2*Math.pow(getsd(tm[i],j,1),2))));jumn*=(1/(getsd(tm[i],j,2)*Math.sqrt(2*Math.PI)))*Math.exp(-(Math.pow(cell[j]-getmain(tm[i],j,2),2)/(2*Math.pow(getsd(tm[i],j,2),2))));}jumy >= jumn ? hasil.push(1) : hasil.push(2);}return hasil.filter(function(a){return a==1}).length >= hasil.filter(function(a){return a==2}).length ? 1 : 2;} 
function sd(data){return Math.sqrt(mean(data.map(function(cell){return Math.pow((cell-mean(data)),2);})));}
function mean(data){return data.reduce(function(a,b){return a+b})/data.length}
function maketrain(){x=[];for(var i=0; i<jt; i++){x.push(train[Math.floor(Math.random()*((train.length-1)-0))+0]);}return x;}
function gentrain(){for (var i=0; i<jm; i++){tm.push(maketrain());}}
function getsd(data,i,label){return sd(data.filter(function(a){return a[a.length-1]==label}).map(function(a){return parseFloat(a[i])}));}
function getmain(data,i,label){return mean(data.filter(function(a){return a[a.length-1]==label}).map(function(a){return parseFloat(a[i])}));}
function getpc(data,label){return data.filter(function(a){return a[a.length-1]==label}).length/data.length;}
function preproses(cell){train.push(cell);}