function filterMarks(d){
    let j=d.filter(function(a){
        return !(a.note==undefined)
    })

    return j
}
function note(d){
    d=filterMarks(d)
    d.map(function(m){
        if (m.note==20){
            m.remarque="excellent"
            return
        }
        if (m.note<10){
            m.remarque="passable"
            return
        }
    })
    return d
}
d=[{note:9},{note:20},{note:undefined}]
console.log(note(d))