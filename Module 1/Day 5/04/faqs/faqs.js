window.onload = function () {
var faqs = $("faqs");
var h2Elements = faqs.getElementsByTagName("h2");
    		    
let headingNode;
    // TODO
    // Get all <h2> elements
    for(let i=0; i<h2Elements.length; i++){
        headingNode = h2Elements[i];

        headingNode.onclick = function () {
            let h2 = this;
            if(h2.hasAttribute("class")){
                h2.removeAttribute("class");
            }
            else{
                h2.setAttribute("class", "minus");
            }
            if(h2.nextElementSibling.hasAttribute("class")){
                h2.nextElementSibling.removeAttribute("class");
            }
            else{
                h2.nextElementSibling.setAttribute("class", "open");
            }
        }
    }
}
var $ = function (id) {
	return document.getElementById(id);
}