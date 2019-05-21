// will control our app and the html remdered to the screen
var vm1 = new Vue ({
// tells vue which html elements to control	
   el: '#app',
   // contains an object which stores all the data we want to us in this instance
   data: {
   	  event: {
        eventDate: 'August 14th-16th',
        eventTitle: 'Summer Festival',
        eventTitle2: 'v text output',
        signUpText: 'Add you name to the guest list for <em>exclusive</em> offers',
        eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
       
       },
       newNameText: '',
       guestName: [],
       eventCapacity: 25,
       eventCapacityPct: 0
   },
   //object so use curly braces
   methods: {
   	formSubmitted: function() {
      //we want to make sure a name is added before submit is hit or you will have all those green boxes
        if (this.newNameText.length > 0 && this.eventCapacityPct < 100) {
   		// when user types new name is will be pushed to the list
   			this.guestName.push(this.newNameText)
   			// once the name has been added to the array, we clear the input field
   			this.newNameText= ''
        this.eventCapacityPct= this.guestName.length / (this.eventCapacity / 100)
     		 }	
       
       },
        keyPressed: function () {
          console.log('key pressed')
        }
       
     },
     // computed properties watch the code and will only react if data changes
     // must use "watch" for asynchronous tasks
     computed: {
         // list names in alpha order by using sort
         sortNames: function() {
          console.log('computed')
          //sort is a normal JS array method
           return this.guestName.sort()
          }
      },
      watch: {
        guestName: function (data) {
          console.log('Watch triggered')
        }

      },
      // filters ideal for simple text formatting
      filters: {
         formatName: function(value) {
          // format case on names the user submits
           return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
       } 
       
      });

 
var vm2 = new Vue({
   el: '#navigation',
   data: {
      appName: "Guest List",
      navLinks: [

          {name: "Home", id: 1, url: "https://www.google.com"},
          {name: "Upcoming Events", id: 2, url: "https://www.amazon.com"},
          {name: "Guest Benefits", id: 3, url: "https://www.ebay.com"},
          {name: "Latest News", id: 4, url: "https://www.facebook.com"}

      ]

   },
   methods: {
      // method for ref onclick attached to the h1 in index.html
      // refs are not reactive
      changeTitle: function () {
        // all of the native vue properties have the $ prefix
        this.$refs.name.innerText = 'Title changed'
        console.log(this.$refs)
      }
   }

})



