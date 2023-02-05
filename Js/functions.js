const buttonToWindowProperties = {
  boton1: {
    url: "/openedOne.html",
    features: "location=no",
    creador: "boton1",
    name: "ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ"
  },
  boton2: {
    url: "/openedOne.html",
    features: "location=no",
    creador: "boton2",
    name: "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES"
  },
  boton3: {
    url: "/openedOne.html",
    features: "width=420,height=430,location=no,menubar=no,status=yes,resizable=yes",
    creador: "boton3",
    name: "ABRIR VENTANA CON CARACTERÍSTICAS"
  },
  boton4: {
    url: "/openedOne.html",
    features: "width=600,height=300,left=150,location=no,menubar=no,status=no,resizable=no,titlebar=no,toolbar=no",
    creador: "boton4",
    name: "ABRIR VENTANA CON MÁS CARACTERÍSTICAS"
  },
  boton5: {
    url: "/openedOne.html",
    features: "location=no,fullscreen=yes",
    creador: "boton5",
    name: "ABRIR VENTANA A PANTALLA COMPLETA"
  }
};

let windows = [];

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        if ( button.id === "boton1" ) button.disabled = true;
        if ( button.id === "boton6" ){
            button.addEventListener("click", () => {
                windows.forEach((window) => window.close());
                windows = [];
            });
        }
        openWindowForButton(button.id);
    });
});


function openWindowForButton(buttonId) {
    let buttonProperties = buttonToWindowProperties[buttonId];
    if (!buttonProperties) {
        console.error(`No properties found for button '${buttonId}'`);
        return;
    }

    let newWindow;

    windows.push(
        newWindow = window.open(
            buttonProperties.url,
            "",
            buttonProperties.features,
            ""
        )
    );

    if( buttonProperties.creador === "boton5" ){
          newWindow.resizeTo(screen.width, screen.height);
    }

    newWindow.addEventListener("load", function() {
        let whoCreatedMe = newWindow.document.getElementById("boton1");
        whoCreatedMe.addEventListener("click", function(){
            newWindow.alert("Me ha creado " + buttonProperties.creador);
        });

        let myName = newWindow.document.getElementById("boton2");
        myName.addEventListener("click", function(){
            newWindow.alert("Mi nombre es " + buttonProperties.name);
        });

        let closeWindow = newWindow.document.getElementById("boton3");
        closeWindow.addEventListener("click", function(){
            newWindow.close();
        });
    });
}
  


