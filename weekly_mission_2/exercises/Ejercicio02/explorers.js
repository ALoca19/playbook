const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   //Imprimir cada nombre de explorer
   explorers.forEach( (element) => console.log("Nombre del Explorador: "+element.name) )
   
   //Imprimir el stack de cada explorer
   explorers.forEach( (element) => console.log("Stack del Explorador: "+element.stack) )

   //Crear una nueva lista de stack
   const stacksExplorers = explorers.map((sta) => sta.stack);
   console.log("lista de stacks: "+stacksExplorers);

   //Obtener la lista de explorar que tenga stack js
   const stackJS = explorers.filter((SJS) => SJS.stack.includes("js") );
   //const stackJS = explorers.filter((SJS) => SJS.stack=="js" );
   console.log("info de explorer que tienen JS: "+stackJS);

   //Buscar explorar de CDMX
   const CDMX = explorers.find((cdx) => cdx.city == "CDMX")
   console.log("El primer explorer encontrado que vive en CDMX: "+ CDMX)

   //Obtener la suma de todos los exercises_completed
   //const sumaExercicios = explorers.reduce((acc.exercises_completed, element.exercises_completed) => acc.exercises_completed + element.exercises_completed, 0)
   //console.log(sumaExercicios);


   //validacion si la propiedad exercisesFinished es true
   //const isTrue = explorers.frontend.some((eFini) =>  eFini.exercisesFinished === true)
   //console.log("Sera verdad: "+isTrue) //true

   //Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.