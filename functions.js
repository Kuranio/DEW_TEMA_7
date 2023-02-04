const buttonToWindowProperties = {
  boton1: {
    url: "/openedOne.html",
    features: "location=no",
    creador: "boton1"
  },
  boton2: {
    url: "/openedOne.html",
    features: "location=no",
    creador: "boton2"
  },
  boton3: {
    url: "/openedOne.html",
    features: "width=420,height=430,location=no,menubar=no,status=yes,resizable=yes",
    creador: "boton3"
  },
  boton4: {
    url: "/openedOne.html",
    features: "width=600,height=300,left=150,location=no,menubar=no,status=no,resizable=no,titlebar=no,toolbar=no",
    creador: "boton4"
  },
  boton5: {
    url: "/openedOne.html",
    features: "location=no,fullscreen=yes",
    creador: "boton5"
  }
};

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        openWindowForButton(button.id);
    });
});

function openWindowForButton(buttonId) {
    let buttonProperties = buttonToWindowProperties[buttonId];
    if (!buttonProperties) {
        console.error(`No properties found for button '${buttonId}'`);
        return;
    }

    let newWindow = window.open(
        buttonProperties.url,
        "",
        buttonProperties.features
    );

    newWindow.addEventListener("load", function() {
        let whoCreatedMe = document.getElementById("boton1");
        whoCreatedMe.addEventListener("click", function(){
            alert(buttonProperties.creador);
        })
        /*
        let showCreatorButton = newWindow.document.createElement("button");
        showCreatorButton.innerHTML = "Mostrar Creador";
        showCreatorButton.addEventListener("click", function() {
          alert(`El botón que originó esta ventana es '${buttonCreator}'`);
        });
        newWindow.document.body.appendChild(showCreatorButton);
        */
    });
}
  

