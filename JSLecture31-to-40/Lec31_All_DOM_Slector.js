    // lec31 DOM Document Object Model





console.log("DOM");

// html main line space aik hi bar count hoti hai...

// React main childNodes bht importat hai...mtlb pura react childNode pr hi bna hai.

// Document Object Model pura aik tree structure hai...


// Nodelist aik aik cheez ko count krta hia...mtlb space ko bi dot ko bi and enter ko bi class ko bi...hur aik element aik node hai.



// subsy phly browser main inspect kr ke console main document likh kr enter press krna hai...phr document dot likh kr jo merzi krna chaho Kro....const title = document.getElementById('title')...



// document.getElementById('title').getAttribute('class')  result = heading

// document.getElementById('title').getAttribute('id') result = title

// ﻿
// const title = document.getElementById("title").setAttribute('class', 'ali') result = new class generate.


// const title = document.getElementById("title") result isko variable main store krdia.


// title.style.backgroundColor = 'blue' ===> result heading ka backgroundColor blue krdia.


// title.style.color = 'pink'  =====> text ka color pink hogya.


// title.style.padding = '10px' =====> padding ser krdi.

// title.style.borderRadius = '20px'  ====> borderradius set krdia.title

// isi trhan hum jo merzi chahain kr skty Han.




// <h1 id="title" class="heading" style="background-color: blue; color: pink; padding: 10px; border-radius: 20px;">Dom learning on chai or code</h1>


// sub changing krny ke bad...me ne browser k console main title likha tw mujhy yeh uper wali line likhi hoi agyi...iska mtlb me ne yeh sub chezain add ki han.



// textcontent method apply krny sy pura html content display ho jay ga...mtlb woh bi disply hoga jo humny css property sy hide kia houa hoga...but innertext method apply krny sy sirf content nazar ayga hide houa va data disply ni hoga..



// jaisa ke me ne title.innerHTML apply kia result main is title ka text and all properties like that color paddding border-radious sub disply hoga.



// document.querySelector('h1') likhny pr yeh first h1 ki details dedy ga...mtlb uski id and class and text...


// const list = document.querySelector('li')....yeh sirf list ki first value ko axcess kry ga....q ke querySlector sirf first element ko target krta hai...







// phly aik parent ke name sy class bnai...phr isko aik variable main store kerdia...phr bari bari usk children ka color change kia....

<script>

const days = document.querySelector('.parent')
days.children[0].style.color = "red"
days.children[1].style.color = "green"
days.children[2].style.color = "blue"
days.children[3].style.color = "pink"
days.children[4].style.color = "orange"
days.style.backgroundColor = "white"

</script>







// .parentElement ka mtlb parentElement ke ander hur cheez display krdy ga...
// .parentElementSibling ka mtlb current Element sy agla Element display krdy ga.


