/**
 * smooth scroll init
 */

var scroll = new SmoothScroll('a[href*="#"]');

var chapters = [];

var Chapter = function(element) {
  this.current = 0;
  this.element = element;
  this.slides = this.element.getElementsByClassName("vendor-container");
};

Chapter.prototype.setTitle = function() {
  var title = this.slides[this.current].getElementsByClassName('venue-name')[0].value;
  this.element.parentElement.getElementsByClassName('vendor-title')[0].innerHTML = title
}

Chapter.prototype.previous = function() {
  this.hide(this.current);

  if (this.current > 0) {
    this.current--;
  } else {
    this.current = this.slides.length - 1;
  }
  this.setTitle()
  this.show(this.current);
};

Chapter.prototype.next = function() {
  this.hide(this.current);

  if (this.current < this.slides.length - 1) {
    this.current++;
  } else {
    this.current = 0;
  }
  this.setTitle()
  this.show(this.current);
};

Chapter.prototype.hide = function(slideIndex) {
  this.slides[slideIndex].style.display = "none";
};

Chapter.prototype.show = function(slideIndex) {
  this.slides[slideIndex].style.display = "block";
};

Chapter.prototype.addListeners = function() {
  var scrollElements = this.element.getElementsByClassName("scroll");
  //left

  // event listeners bind this to click event
  var _this = this;

  scrollElements[0].addEventListener("click", function(e) {
    _this.previous();
  });

  //right
  scrollElements[1].addEventListener("click", function(e) {
      console.log(e)
    _this.next();
  });
};

window.onload = function() {
  var chapterElements = document.getElementsByClassName("chapter");

  for (var i = 0; i < chapterElements.length; i++) {
    var chapter = new Chapter(chapterElements[i]);
    chapters.push(chapter);

    chapter.addListeners();
    chapter.show(0);
  }

  // for each chapter add listener with right index
  // add eventlisteners
};
