


// $(".btnCopiar").on("click", function(){
//     $("background-image").hide("./imagenes/Muñeco.png"); 
//     // $(".texteArea2").attr("src","./imagenes/Muñeco.png")
// })


// Lógica para Encriptar
let textArea = document.querySelector(".area-texto")
let textArea2 = document.querySelector(".texteArea2")


// funcion para encriptar al hacer click
$(".encriptado").on("click", function (){
    const texto = encriptar(textArea.value)
    //depura le textArea
    if(texto === ""){
        alert("Ingrese texto")
    }
    textArea.value = ""
    
    // muestra el codigo encriptado
    $(".texteArea2").text(texto);   
     
})


// funcion para copiar lo encriptado 
$(".btnCopiar").on("click", function(){
    
    // texto2 = textArea2.value
    if(textArea2.value === ""){
        alert("Texto vacío")
    }
    else{
        textArea.value = textArea2.value
        $(this).text("Texto Copiado y Pegado")
        $(this).css("background", "hsl(214, 26%, 88%)")
        $(this).css("color", "hsl(211, 84%, 24%)")
        
        setTimeout(function(){
            $(".btnCopiar").text("Copia")
            $(".btnCopiar").css("background","hsl(211, 84%, 24%)")
            $(".btnCopiar").css("color", "white")
        }, 700);
    }
})  
//     $(".btnCopiar").hover(function() {
//         let palabra = "hola"
//         $(this).text();
//     }, function() {
//         $(this).animate(1000), 
            
//         }); 
//     });
//     // texto = copia()
//     // let texto1 = copia()
    
//     // textArea2.value = ""
// })



// 100% Algoritmo:

function encriptar(mensaje){
    codigo = [["e","enter"], ["i","imes"], ["a", "ai"],["o","over"],["u","ufat"]]
    let arreglo = mensaje.split("")
    
    for(let i=0;i<mensaje.length;i++){
        
        for(let j=0;j<codigo.length;j++){
            if(codigo[j][0] === arreglo[i]){
                arreglo[i] = codigo[j][1]               
            }
            else{
                
            }           
        }
    }
    let encriptado = ""
    for(let i=0;i<arreglo.length;i++){
        encriptado += arreglo[i]
    }
    
    return encriptado
    
}

$(".desencriptado").on("click", function (){
    const texto2 = desencriptar(textArea.value)
    

    // desencriptar(textArea.value);
    //depura le textArea
    if(texto2 === ""){
        alert("texto vacío")
    }

    textArea.value = ""
    // textArea2.value = texto2
    // muestra el codigo encriptado
    $(".texteArea2").text(texto2);
     
})


//proceso para desencriptar 

function desencriptar(mensaje2){
    // mensaje2 = mensaje2.toLowerCase();

    let codigo2 = [["e","enter"], ["i","imes"], ["a", "ai"],["o","over"],["u","ufat"]]

    for(let i=0; i<codigo2.length;i++){
        if(mensaje2.includes(codigo2[i][1])){
            mensaje2 = mensaje2.replaceAll(codigo2[i][1],codigo2[i][0])
        }

    }    
    return mensaje2
    
}

//botón desemcriptar


// un poco de jquery

$(".area-texto").hover( function (){
    $(this).animate({opacity: 1});
    
}, function(){
    $(this).animate({opacity: 0.5});

})




$(".texteArea2").hover( function (){

    textArea2.style.backgroundImage = "none"
    $(this).animate({opacity: 1});
    

    }, function(){

        // $(".texteArea2").addClass("prueba");
        // $(".texteArea2").attr("texteArea2")
        $(this).animate({opacity: 0.5});
        
})

// comandos en prueba 
    // function desencriptar2(mensaje2){

    //     console.log(mensaje2);
    
    //     let codigo2 = [["e","enter"], ["i","imes"], ["a", "ai"],["o","over"],["u","ufat"]]
    
    //     for(let i=0; i<mensaje2.length;i++){
    
    //         for(let j=0;j<codigo2.length;j++ ){
    //             if(codigo2[j][1] === mensaje2[i]){
    //                 mensaje2[i] = codigo2[j][0]   
    //             }
    //         }
    //     }
    
    //     let desencriptado = ""
    //     for(let i=0;i<mensaje2.length;i++){
    //         desencriptado += mensaje2[i]
    //     }
    //     return desencriptado
        
    // }