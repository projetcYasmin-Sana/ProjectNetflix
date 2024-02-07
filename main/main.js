


function MovieMaker(image,link){
    let obj={}
    obj.image= image
    obj.link=link
    return obj
  }

  var Jawan=MovieMaker('../assets/movies/JAWAN.png','https://www.netflix.com/tn-fr/title/81493411')
  var RDX = MovieMaker('../assets/movies/RDX.png','https://www.netflix.com/title/81721164')
  var nightag = MovieMaker('../assets/movies/thenightagent.png','https://www.netflix.com/tn-fr/title/81450827')
  var Unkown = MovieMaker('../assets/movies/image17.png','https://www.netflix.com/title/81721164')
  var kingTheLand = MovieMaker('../assets/movies/kingtheland.png','https://www.netflix.com/tn-fr/title/81671440')
  

  let movies=[Jawan,RDX,nightag,Unkown,kingTheLand]




index=0
for (index;index<6;index++){

    $('#action').append(`<a href=${movies[index].link} id="link${index}"><img src=${movies[index].image} alt="movie" loading="lazy"  id="${index}"></a>`)
    

    // document.getElementById(index).src=movies[i].image
    // i++

}

{/*   */}


// i=0
// index=1
// for (index;index<6;index++){
    

//     document.getElementById(index).src=movies[i].image
//     i++

// }