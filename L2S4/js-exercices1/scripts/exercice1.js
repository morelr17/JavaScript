'use strict';

// une liste pour des tests
const numbers = [2, 3, 5, 4, 10, 6];

/********** EXERCICE 0 ***********************/
console.log(` *** EXERCICE 0 *** `);
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;
// tests
console.log(`example(10) : ${example(10)}`);
console.log(`example(21) : ${example(21)}`);



/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );
// tests
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);

const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }];
console.log('Q1');

numbers.forEach(  (elt, i, array) => console.log(`element(${i}/${array.length}) --> ${elt}`) );

console.log('Q2');

console.log(persons[2]);

console.log('Q3');

persons.forEach( person => console.log(`${person.name} : ${person.age}`) );

console.log('Q4');

const myForEach = (liste,func) => { for(let i in liste)
    { func(liste[i]);}};

 console.log('Q5');

myForEach(numbers, (Element) => { console.log(`${Element}`)});

myForEach(persons, (person) => {console.log(`${person.name} a : ${person.age} ans` )});

    /*********************************************/
    /********** EXERCICE 2 ***********************/
    console.log(` *** EXERCICE 2 *** `);
    console.log('Q1');

    numbers.map(num => console.log(num*10));

    console.log('Q2');

    const multiples = (n,l) => {
        console.log(l.map(elt => n*elt));
    };
    multiples(5, numbers);

    console.log('Q3'); 

    const multiples5 = (l) => {
        console.log(multiples(5,l))};
    multiples5(numbers);

    console.log('Q4'); 
    
const multiplesFactory = function(factory,l){
    return multiples(factory,l)};
    multiplesFactory(10,numbers);


    /*********************************************/
    /********** EXERCICE 3 ***********************/
    console.log(` *** EXERCICE 3 *** `);
    console.log('Q1'); 
    
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
      console.log(capitalize('timoleon')); 

      console.log('Q2'); 

      persons.map(person => console.log(capitalize(person.name)));


      console.log('Q3'); 

      const myMap = (liste,func) => { 
        let copie = []; 
        for(let i in liste){ 
            copie.push(func(liste[i]));
        }
        return copie;
    };
 

      console.log('Q4'); 

      console.log(myMap(persons, person => (capitalize(person.name))));

    /*********************************************/
    /********** EXERCICE 4 ***********************/
    console.log(` *** EXERCICE 4 *** `);

    console.log('Q2'); 

    console.log(numbers.filter(a => a < 5));

    console.log('Q3'); 

    const  createAcronym = phrase =>  {
    return phrase.split(' ') 
        .filter(word => word.length > 3) 
        .map(word => word[0].toUpperCase()) 
        .join(''); 
}
    console.log(createAcronym('formations en informatique de lille'));
    console.log(createAcronym('société nationale des chemins de fer français'));
    console.log(createAcronym('grand theft auto '));
    console.log(createAcronym('Java Script'));


    /*********************************************/
    /********** EXERCICE 5 ***********************/
    console.log(` *** EXERCICE 5 *** `);


    /*********************************************/
    /********** EXERCICE 6 ***********************/
    console.log(` *** EXERCICE 6 *** `);
    const FIL = "Formations en Informatique de Lille";
    //const SNCF = "société nationale des chemins de fer français"; //Essai

    console.log('Q1'); 
    
    
    const nbLettres = phrase  => {
        let nb = 0;
        let b = [];
        let a;
        //const reducer = (sum, val) => sum + val;
        //const initialValue = 0;
        nb = phrase.split(' ').join('').length;
        ///b = console.log(nb.length);
        b.push(nb);
        
        //const reducer = (sum, val) => sum + val;
        //const initialValue = 0;
        //return nb.reduce(reducer,initialValue);

       a = b.reduce ( ( previous , element )  =>  {
            return previous + element;
        } , 0 ) ;
    /*
        nb.reduce((total,nbe) => {
                return total  + nbe , 0  })
                //return nb;
        }*/
        return a;
    }
      console.log(nbLettres(FIL)); //Test
      //console.log(nbLettres(SNCF)); Essai 

      //console.log(FIL.length); Test
      console.log('Q4','Maxnumbers entre deux chiffres en params');

      const max = (x, y) => {
        if (x < y) {
          return y;
        }else{
            return x;
        }
       
      };
      console.log(max(1,8)); //Test 

      console.log('Q4','maxNumbers')

        const maxNumbers = items => {
            return items.reduce((acc, val) => {
                 val = items[0];
                for (let i = 1; i < items.length; i++) {
                  if (items[i] > val) {
                    val = items[i];
                  }
                }
            
                return val;
            });
        }
      
           
            
      
    console.log(maxNumbers(numbers)); //TEST

    console.log('Q5');
 
    const maxNumbers2 = (num1,num2,num3) => {
    let b = [num1,num2,num3];
    return Math.max(...b);  
}

    console.log(maxNumbers2(9,6,3)); //TEST
  
    console.log('Q6');

    const sum = (...args) => args.reduce((a, b) => a + b);
    console.log(sum(3,6,1));

    // Reponse a la sum du tableau numbers
    // Faut juste args par numbers pour que ca affiche la somme du tab numbers
    //const sum = (...args) => numbers.reduce((a, b) => a + b);

    //console.log(sum());//TEST





    /*********************************************/
    /********** EXERCICE 7 ***********************/
    console.log(` *** EXERCICE 7 *** `);

    const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin'];
    const lesReponses = [
        { nom: 'Sam', present: 'oui' },
        { nom: 'Tim Oleon', present: 'non' },
        { nom: 'Bilbo', present: 'oui' },
        { nom: 'Frodo', present: 'oui' },
        { nom: 'Timo Leon', present: 'non' },
    ];

    const participants = (Invites, Reponses) => {
        let a = Invites
            .filter(Invite => !(Reponses.some(reponse => reponse.nom === Invite)));
        lesReponses
            .filter(reponse => reponse.present === 'oui' )
            .map(b => a.push(b.nom));
        return a;
    }
    console.log(participants(lesInvites, lesReponses));

    /*********************************************/
    /********** EXERCICE 8 ***********************/
    console.log(` *** EXERCICE 8 *** `);
    /*********************************************/




/*********************************************/
