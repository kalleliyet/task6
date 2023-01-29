function FormatToArray(str){
    let l=str.split("-")
    let t=[]
    let k=[]
    for(let i=0;i<l.length;i++){
        t[i]=(l[i].split("&"))
        let d={}
        d.firstname=t[i][0]
        d.lastname=t[i][1]
        k.push(d)  
    }
    
    return k
}
console.log(FormatToArray("aziz&kallel-moataz&khmiri-mohsen&landolsi"))
