function jQuery(nodeString) {
   this.node = document.querySelector(nodeString);
}

jQuery.prototype.click = function(fn){
  this.node.addEventListener("click", fn);
}

jQuery.prototype.show = function(){
  this.node.style.display = "block";
}

jQuery.prototype.hide = function(){
  this.node.style.display = "none";
}

jQuery.prototype.toggleClass = function(className){
  this.node.classList.toggle(className);
}

jQuery.prototype.removeClass = function(className){
  this.node.classList.remove(className);
}

jQuery.prototype.attr = function (attrName) {
  this.node.getAttribute(attrName);
 }
