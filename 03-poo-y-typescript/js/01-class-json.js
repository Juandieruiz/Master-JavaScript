let bike ={
    color: "red",
    model: "BMX",
    price: "100",
    velocityMax: "50",
    changeColor: function(nuevo_color){
        this.color = nuevo_color;
        console.log(bike);

    }
}
bike.changeColor("blue");