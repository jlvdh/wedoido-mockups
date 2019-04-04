var chapters = [];

var Chapter = function(element) {
    this.current = 1;
    this.element = element;
    this.slides = this.element.getElementsByClassName('vendor-container');
}

Chapter.prototype.setCurrent = function (change) {
    if (change !== 1 || change !== 1) {
        return
    }

    // if (this.current + change > this.element.length || this.current + change)
}
Chapter.prototype.previous = function () {
    if (this.current > 0) {
        this.current--
    } else {
        this.current = this.slides.length;
    }
    this.slides[this.current].style.display = "block";
}

Chapter.prototype.next = function () {
    if (this.current < this.slides.length) {
        this.current++
    } else {
        this.current = 0;
    }
    this.slides[this.current].style.display = "block";
}

// Chapter.prototype.show = function(chapterNumber) {

// }


window.onload = function() {

    var chapterElements = document.getElementsByClassName('chapter');

    for (var i=0; i < chapterElements.length; i++) {
        chapters.push(new Chapter(chapterElements[i]))
        var scrollElements = chapters[i].element.getElementsByClassName('scroll')

        //left
        scrollElements[0].addEventListener('click', chapters[i].previous)

        //right
        scrollElements[1].addEventListener('click', chapters[i].next)
    }
    // for each chapter add listener with right index
    // add eventlisteners
}