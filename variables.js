/**
 * Variable are containers for storing data. We can use var, let and const keywords to declare variable in JavaScript.
 */

// {
//     var x = 10;
//     console.log(x);

//     var x = 20;
//     console.log(x);
//     // Re-declaration is allowed

//     x = 30;
//     console.log(x);
//     // Re-assignation is allowed
// }

// {
//     let y = 40;
//     // console.log(y);

//     // let y = 50;
//     // Re-declaration is not allowed using let keyword

//     y = 50;
//     console.log(y);
//     // Re-assign is allowed using let keyword
// }

{
    const z = 70;
    console.log(z);

    // const z = 80;
    // Re-declaration is not allowed

    // z = 90;
    // console.log(z);
    // Re-assignation is not allowed
}

/*
Question: What are the key differences among var, let and const keywords?
Answer: var, let and const keywords are used to declare variable in javascript language. But there are some key differences among var, let and const keywords. If we use var keyword then both re-declarion and re-assignation are allowed. If we use let keyword then re-declaration is allowed but re-assignation are not allowed. If we use const keyword then both re-declaration and re-assignation are not allowed.
*/