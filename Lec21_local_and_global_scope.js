                    // lec21 local and global scope


        // curly bracess { } ko hi scope kahty han...dehan rakah jay ke yeh curly bracess object main bi ati hai...but woh variable ke sath declare hota hai...hamain yeh curly braces zayada ter if else ke sath and function ke sath bi dekhy gi...mtlb ke yeh functin ka scope hai....yeh if else ka scope hai... scope ka mtlb ke humny jo variable declare kia hai uska axces kahan tk hai...mtlb ke hum usy kahan tk axces kr skty han....scope are three types...local scope and global scope....and block scope.


        

// Local scope ----------> local scope mtlb ke agr hum kisi variable ko function ke ander declare krty han tw hum usy function ke ander hi axces kr skty han....function ke bahir axcess ni krskty...q ke unka scope function ke ander hi limited hai.





// Global scope-----------> global scope agr hum kisi variable ko function ke bahir declare krty han...tw hum usy functin ke ander bi axces kr skty han or function ke bahir bi...gloabal variable kaheen bi axcess kiyeh ja skty han.















                        // this is a local scope.

function my_function() {            // declare a function that mean scope.
    const my_name = "ahmad"         // declare a variable...
    console.log(my_name);
    
}

console.log(my_function(my_name));
console.log(my_function.my_name());

    // me ne isy function ke bahir print kerwany ki koshish ki....but yeh print ni houa....yeh function sirf execute hoga print ni hoga....q ke me is function ko call ni ki...agr me is function ko call krta my_function() tw yeh print ho jata.....dehan rahy ke scope krty waqt function main parameter ni likhny.


















                            // this is a local scope....scope krty waqt function main paramter ni likhny...jb tk me function ko call ni kronga....function execute tw hoga but function print ni hoga....

function your_function() {
    const LocalName = "ahmad shafiq"
    console.log(LocalName);
    
}

your_function()


            // this is local scope function main variable declare kia...and usy function ke bahir axces kia...mtlb function ko call kia.











                            // this is also local scope.
function test() {
    const youName = "Pakistan"
    console.log(youName);
    
}

test()





























                            // this is a global scope....agr me kisi variable ko function ke bahir declare krta hon tw me usy function ke ander bi declare kr skta hon....and function ke bahir bi.

const country = "United State of America"       // before i declare a const variable

function globalScope() {            // declare a function.
    console.log(country);
    
}

globalScope()

                // me country variable ko function ke bahir declare kia...and me ne isko function ke ander axces kia...and function ko call kia.





















                    // this is global scope...very easy dimag pr zoor de.

const Variable = 33

function number() {
    console.log(Variable);
    
}

number()

















                            // this is local scope...function main hi return kia..and bad main console ke sath function ko call ki.

function num() {
    const java = "javascript"
    return java
    

}

console.log(num());





















