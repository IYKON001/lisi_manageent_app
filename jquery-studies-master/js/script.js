    function loadContent(event, page){
        event.preventDefault();

        

        if(page != "home"){
            $("a:first-child").removeClass("active");
            if(page == "list"){
                $("#main").load("contents/list.html")
                $("a:nth-child(3)").removeClass("active");
                $("a:nth-child(2)").addClass("active");
            }

            if(page == "contact"){
                $("#main").load("contents/contact.html")
                $("a:nth-child(2)").removeClass("active");
                $("a:nth-child(3)").addClass("active");
            }
        }else{
            location.reload();
            $("a:first-child").addClass("active");
            $("a:nth-child(2)").removeClass("active");
            $("a:nth-child(3)").removeClass("active");
        }




    }

    let NewList = []

    // let CategoryList = []

    let CATEGORY = []

    // Create a new NewList AND CategoryListitem when clicking on the "Add" button
    function newElement() {


      //to add list to local storage
          let inputValue = document.getElementById("input").value.trim();
          if (inputValue == "") {
            alert("DEY PLAY");
            return
          }
          let data={
            nextItemOnList: inputValue,
            id: Date.now()
          }
          NewList.push(data)
          console.log(NewList);
          localStorage.setItem("NewList", JSON.stringify(NewList))
          document.getElementById("input").value= "";


          //to add categories to local storage

          // let cat = document.getElementById("cat").value.trim();
          // if(cat == ""){
          // alert("must choose a category reply with okay sir");
          // return
          // }
          // let cate= {
          // CATEGORY: cat
          // }
          // CategoryList.push(cate);
          // console.log(CategoryList);
          // localStorage.setItem("CategoryList", JSON.stringify(CategoryList))
          // document.getElementById("cat").value = "";

       let categ = document.getElementById("cat2").value;

       if(categ == ""){
        alert("JUST DEY PLAY")
        return
       }
       let catego = {
        CATEGORY : categ,
        id: Date.now()
       }
        console.log(catego);
       CATEGORY.push(catego);
       console.log(CATEGORY)
       localStorage.setItem("CATEGORY", JSON.stringify(CATEGORY))
       document.getElementById("cat2").value = "";
    
      
    }





    // this.category = ['Business', 'Computers', 'Programming', 'Science'];


    //  function newCategory(){

    //       let select = document.createElement('select');      // CREATE AND ADD A DROPDOWN LIST.
    //       select.innerHTML = '<option value=""></option>';
    //       for (k = 0; k < this.category.length; k++) {
    //           select.innerHTML = select.innerHTML +
    //               '<option value="' + this.category[k] + '">' + this.category[k] + '</option>';
    //       }
    //       NewList.appendChild(select);
    //  }

    // function newCategory() {
    //   let cat = document.getElementById("cat").value.trim();
    //   if(cat == ""){
    //    alert("must choose a category");
    //    return
    //   }
    //   let cate= {
    //    CATEGORY: cat
    //   }
    //   CategoryList.push(cate)
    //   console.log(CategoryList);
    //   localStorage.setItem("CategoryList", JSON.stringify(CategoryList))
    //   document.getElementById("cat").value;

    //     render()


    // }



      // function render() {
      //     let Items = localStorage.getItem("NewList") ? JSON.parse(localStorage.getItem("NewList")) : []
      //     Items.forEach((data,) => {
      //     let li = document.createElement('li')
      //     li.innerHTML=`<div>
      //                       <span>${data.nextItemOnList}</span>
      //                   </div>`
      //     list.append(li)
      //   })
      //   }
      //   render()


