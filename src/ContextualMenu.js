var ContextualMenu = function(menuList, menuLinks){
	var x;
	var y;
	var x_limit;
	var y_limit;
	var shown;
	var menu_list;

	this.__construct = function(){
		var self = this;

		this.shown = false;
		this.menu_list = menuList;
		this.x_limit = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.y_limit = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		document.addEventListener("mousemove", function(event){
			self.x = event.clientX;
			self.y = event.clientY;
		});

		document.addEventListener("contextmenu", function(event){
			event.preventDefault();
			self.showContextualMenu();
		});

		document.addEventListener("click", function(event){
			if(self.shown === true){
				self.showContextualMenu();
			}
		});

		this.loadCSS();
	};

	this.showContextualMenu = function(){
		var cmcontainer;

		if(this.shown === false){
			cmcontainer = document.createElement("div");
			cmcontainer.id = "cmcontainer";
			cmcontainer.className = "context-menu-container cm-hidden";
			cmcontainer.style.position = "absolute";

			cmcontainer.style.top = ((this.y_limit + window.scrollY) > (window.scrollY + this.y + (Object.keys(this.menu_list).length * 41))) ? String(this.y + document.body.scrollTop).concat("px")
				: String((this.y + document.body.scrollTop - (Object.keys(this.menu_list).length * 41))).concat("px");

			cmcontainer.style.left = ((this.x_limit + window.scrollX) > (window.scrollX + this.x + 250)) ? String(this.x).concat("px")
				: String((this.x - 250)).concat("px");

			var ul = document.createElement("ul");
			ul.className = "cm-option-list";

			var count = 0;
			for(var i in this.menu_list){
				var li = document.createElement("li");
				var icon = document.createElement("i");

				icon.className = "fa fa-" + i;
				li.appendChild(icon);
				li.innerHTML += " " + this.menu_list[i];
				li.setAttribute("onclick", menuLinks[count]);
				ul.appendChild(li);

				count++;
			}

			cmcontainer.appendChild(ul);
			document.body.appendChild(cmcontainer);
			cmcontainer.classList.remove("cm-hidden");

			this.shown = true;
		}else{
			cmcontainer = document.getElementById("cmcontainer");
			cmcontainer.classList.add("cm-hidden");

			document.body.removeChild(cmcontainer);
			this.shown = false;
		}
	};

	this.loadCSS = function(){
		var stylesheet = document.createElement("style");
		stylesheet.setAttribute("rel", "stylesheet");
		stylesheet.setAttribute("type", "text/css");

		var cssOutput = ".context-menu-container{z-index:999999;width:250px;height:" + (Object.keys(this.menu_list).length * 41) + "px;box-shadow:0px 0px 5px #666;transition:opacity 0.3s ease-in-out;background:#fff;}";
		cssOutput += "\n\t.cm-hidden{opacity:0}";
		cssOutput += "\n\n.cm-option-list{margin:0;padding:0;}";
		cssOutput += "\n\t.cm-option-list li{list-style:none;margin:0;padding:10px 10px 0px 10px;height:30px;border-bottom:1px solid #dfdfdf;transition:background 0.1s ease-in-out, color 0.1s ease-in-out;background:#fff;color:#333;vertical-align:top;}";
		cssOutput += "\n\t\t.cm-option-list li:hover{background:#228dd3;color:#fff;cursor:pointer;}";
		stylesheet.innerHTML = cssOutput;

		document.getElementsByTagName("head")[0].appendChild(stylesheet);
	};

	this.__construct();
};