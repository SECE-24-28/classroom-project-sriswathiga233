let student=[{sna:"Praveen",age:19,sma:90,fee:true},
             {sna:"Ajith",age:18,sma:98,fee:false},
             {sna:"Surya",age:17,sma:50,fee:true}
        ] 
let newStu=student.some((stu)=>
{
    return stu.fee==false
})
console.log(newStu)