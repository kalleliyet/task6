function MoodDetect(d){
    let i=[]
    d.map(function(m){
        let j={}
        if (m.status.includes("<3")){
            j.name=m.name
            j.etat="heureux"
            i.push(j)
            return
        }
        if (m.status.includes(":(")){
            j.name=m.name
            j.etat="triste"
            i.push(j)
            return
        }
        j.name=m.name
        j.etat="neutre"
        i.push(j)
        return
    })
    return i
}

d=[{name:"aziz",status:"laalsjsksk <3"},{name:"mondher",status:"oh no :("},{name:"abdla7mid",status:"le match est nul"}]
console.log(MoodDetect(d))