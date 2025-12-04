let mob={brand:"Samsung",color:"black"}
console.log(mob)
mob.price=35000
console.log(mob)

mob.price=45000
console.log(mob)

console.log(mob.color)
console.log(mob["brand"])

delete mob.brand
console.log(mob)

delete mob["color"]
console.log(mob)



let students = {sna:"Praveen", age:19,demo:function()
  {
    console.log("hi iam "+this.sna)  //Praveen
  } 
}
student.demo()

let student2={sna:"prabhu", age:19,samp:()=>
   {
        console.log("hai iam" + this.sna) //undefined
    }
}
 student2.samp()

let student=[{sna:"Praveen",age:19,sma:90,fee:true},
             {sna:"Ajith" , age:18,sma:98 , fee:false},
             {sna:"Surya",age:17,sma:30,fee:true}
             ]
//console.log(Student)
student.forEach((stu)=>
{
    console.log(stu)
}
