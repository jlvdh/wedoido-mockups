var chapters = [];

var Chapter = function(element) {
    this.current = 0;
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
    this.hide(this.current);

    if (this.current > 0) {
        this.current--
    } else {
        this.current = this.slides.length - 1;
    }
    this.show(this.current); 
}

Chapter.prototype.next = function () {

    this.hide(this.current);

    if (this.current < (this.slides.length - 1)) {
        this.current++
    } else {
        this.current = 0;
    }
    this.show(this.current);
}

Chapter.prototype.hide = function(slideIndex) {
    this.slides[slideIndex].style.display = "none";
}

Chapter.prototype.show = function(slideIndex) {
    this.slides[slideIndex].style.display = "block";
}


window.onload = function() {

    var chapterElements = document.getElementsByClassName('chapter');

    for (var i=0; i < chapterElements.length; i++) {
        var chapter = new Chapter(chapterElements[i]);
        chapters.push(chapter)
        var scrollElements = chapters[i].element.getElementsByClassName('scroll')


        //left
        scrollElements[0].addEventListener('click', function() {
            chapter.previous();
        })

        //right
        scrollElements[1].addEventListener('click', function() {
            chapter.next();
        });
        chapter.show(0);
    }


    // for each chapter add listener with right index
    // add eventlisteners
}