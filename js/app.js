var initialCats = [
    {
      clickCount : 0,
      name : "Tabby",
      imgSrc : "images/cat1.jpg",
      nicknames : ['Titu']
    },
    {
      clickCount : 0,
      name : "Tiger",
      imgSrc : "images/cat2.jpg",
      nicknames : ['Tiku']
    },
    {
      clickCount : 0,
      name: "Emmie",
      imgSrc : "images/cat3.jpg",
      nicknames : ['Emmy']
    },
    {
      clickCount : 0,
      name: "Macy",
      imgSrc : "images/cat4.jpg",
      nicknames : ['Mau']
    },
    {
      clickCount : 0,
      name : "Lucky",
      imgSrc : "images/cat5.jpg",
      nicknames : ['Love']
    }
  ];
var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);
  
  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if(clicks < 10){
      title = 'Newborn';
    } else if(clicks < 50){
      title = 'Infant';
    } else if(clicks < 100){
      title = 'Child';
    } else if(clicks < 200){
      title = 'Teen';
    } else if(clicks < 500){
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  },this);
}

var ViewModel = function(){
  var self = this;
  
  this.catList = ko.observableArray([]); //creates Cat list and store it in an observable array
  
  //Loop over all of the initial cats
  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem)); //Putting each one of the cats into the catList
  });
  
  this.currentCat = ko.observable(this.catList()[0]); //Accessing our first cat
  
  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }
  
  this.setCat = function(clickedCat){
    self.currentCat(clickedCat);
  }
};


ko.applyBindings(new ViewModel());