console.log("yo");

window.onload = () => {
  go();
};
function go() {
  Vue.component("book-view", {
    props: ["book"],
    template:
      "<li> Title: {{book.name}},  Author: {{book.author}} : ${{book.price}} {{book.emoji}} </li>"
  });
  new Vue({
    el: "#app",
    data: {
      message: "Book types",
      ready: true,
      books: [
        {
          id: 0,
          price: 5,
          name: "The Adventures of Tom Sawyer",
          author: "Mark Twain",
          emoji: " 🌹 "
        },
        {
          id: 1,
          price: 10,
          name: "National Geographics: Amazing Desert Animals",
          author: "Travis Faas",
          emoji: " 🌎"
        },
        {
          id: 2,
          price: 16,
          name: "the outsiders",
          author: "S.E. Hinton",
          author: "♣️"
        }
      ]
    },
    methods: {
      hideBook: function() {
        console.log("click");

        // flipping the boolean value of this.ready upon every click
        this.ready = !this.ready;

        // I didnt know how else to replace the book unless I did this.
        var oldBook = {
          id: 1,
          price: 10,
          name: "National Geographics: Amazing Desert Animals",
          author: "Travis Faas",
          emoji: " 🌎"
        };

        console.log(this.ready);

        if (this.ready == true) {
          // .splice will change the content of the array by removing or replacing existing elements. I used it here to simply add the old book back into the array. However, this cant be the best way to do this because I had to define the object again inside of this method.
          this.books.splice(1, 0, oldBook);
        }
        if (this.ready == false) {
          // .filter will actually create a new array with all the contents from the old array that pass the test. In this case, im asking for all the books who dont have an ID of 1. This new array is now called res becuase I named it that.
          var res = this.books.filter(book => book.id != 1);
          console.log(res);
          //setting this.books which is the original array, to the new array that exculdes that id of 1.
          this.books = res;
        }
      }
    }
  });
}
