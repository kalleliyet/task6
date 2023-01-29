let l=[
    {nom:"aziz",age:17},
    {nom:"moez",age:66}]

function mineurmajeur(l){
    let l1=[]
    l.map(function(d){
        let d1={}
        if (d.age<18){
            d1={nom:d.nom,age:d.age,status:"mineur"}
        }
        else{
            d1={nom:d.nom,age:d.age,status:"majeur"}
        }
        l1.push(d1)
    })
    l=l1
    return l
}

console.log(mineurmajeur(l))
