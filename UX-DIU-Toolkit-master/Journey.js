/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.Loading";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Abraham Santos",
                Photo: "AbrahamSantos.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Vió un post de Cruz Cafuné sobre un gira por España y Granada es una de sus paradas más próximas. Además piensa que es una buena oportunidad para añadir la experioencia en su vlog",
                touch1: "Móvil",
                feel1: "5",
                con1: "Entusiasmado en organizar su viaje y su vlog para mostrar el lugar.",
                ima1: "01encuentrapost.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Propone a sus amigos ir juntos. Busca en internet alojamientos para todos y lugares de ocio e interés en Granada",
                touch2: "Móvil",
                feel2: "3",
                con2: "Al ser un grupo grande encuentra dificultad a la hora de encontrar alojamiento",
                ima2: "02busca.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra algunos hostels que ofrecen habitaciones para grupos y se percata que muchos ofrecen además café, bar, espectáculo...",
                touch3: "Móvil",
                feel3: "2",
                con3: "Se preocupa de no sólo buscar alojamiento sino también tener en cuenta los otros servicios que puedan ofrecer y su ubicación.",
                ima3: "03agobio.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Queda con sus amigos para discutir y compartir las páginas varias opciones que han encontrado a la mayoría les han llamado la atención algnos hosteles que tengan bar",
                touch4: "ordenador",
                feel4: "3",
                con4: "Con sus amigos se siente menos agobiado a la hora de encontrar el lugar perfecto para ellos",
                ima4: "04discutir.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "De todos ellos se decantan por uno llamado Carlotta Braun por su cercanía al centro y la variedad de eventos que organizan y se muestran en sus redes sociales.",
                touch5: "ordenador portatil y móvil",
                feel5: "4",
                con5: "Todos mas o menos están de acuerdo con la propuesta",
                ima5: "05amigosbuscan.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguen reservar y se ponen otras actividades que les gustarían hacer en su viaje",
                touch6: "ordenador",
                feel6: "5",
                con6: "Teniendo ya alojamiento asegurado y más relajado comentan más actividades que hacer los demás días",
                ima6: "06decision.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Charlotte Moreau",
                Photo: "CharlotteMoreau.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



