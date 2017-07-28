//Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector){
  return document.querySelector(selector);
}

// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors
 function nestedTarget(){ return document.querySelector("#nested .target")}

 // Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n){
  let rank = document.querySelectorAll(".ranked-list")
  // console.log("Hello")
  for(let i=0;i<rank.length;i++){
    let current = parseInt(rank[i].innerHTML);
    rank[i].innerHTML = current+n
  }
}


// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.



function deepestChild(){
  let nested = document.querySelector("#grand-node")
  // console.log(nested.length); //undefined
  // console.log("********************")
  // console.log(nested)
  // console.log(nested.childNodes) //(3) [text, div, text]
  // console.log(nested.children) //[div]
  // console.log(nested.children.length)
   // console.log(nested.childNodes.length) //3
  // console.log(nested.innerHTML);
  // return nested.innerHTML
  // var elm = nested; //console.log(elm.childNodes.childNodes.length)
  // console.log(Array.isArray(elm)) //false
  // console.log(typeof elm)  //object
  var count = 0;
  while(nested.children.length >0 ){
      count++;
    // if(elm.childNodes.length >1) {elm=elm.childNodes}
    // else {break;}
    if(nested.children.length >0 ){nested = nested.children[0]}
    if(count>10){break;}  //if some kind of error we break
  }
  // console.log(`count ${count}`)
  // console.log(nested);
  // console.log(nested.innerHTML)
//   console.log(elm)
return nested;
}
