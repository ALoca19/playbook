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

    //Obtener la suma de todos los exercises_completed
   const sumaExercicios = explorers.exercises_completed.reduce((acc, element) => acc + element, 0)
   console.log(sumaExercicios);


   //validacion si la propiedad exercisesFinished es true
   //const isTrue = explorers.frontend.some((eFini) =>  eFini.exercisesFinished === true)
   //console.log("Sera verdad: "+isTrue) //true

   //Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.