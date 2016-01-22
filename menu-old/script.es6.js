class MenuClabOld{

	beforeRegister(){
		this.is = 'menu-clab-old';
		this.properties = {
			title: {
				type: String,
				value: 'Title'
			},
			titleIcon: {
				type: String,
				value: 'fa-hand-peace-o'
			},
			reduceText:{
				type: String,
				value: 'Riduci menu'
			},
			reduceOpen:{
				type: String,
				value: 'clab clab-icon-expand expand'
			},
			reduceClose:{
				type: String,
				value: 'clab clab-icon-resize compress'
			},
			menu: {
				type: Array,
				value: [],
				observer: '_addOpenAttr'
			},
			link: {
				type:String,
				value: '/'
			},
			_url: {
				type: String
			}
		}
	}

	attached(){
		this._url = location.hash;

		window.addEventListener('hashchange', (evt) => {
			this._url = location.hash;
		});

		this._iosMenu();
	}



	/*---------- 
	EVENT HANDLERS
	----------*/
	_openItem(evt){
		let i = parseInt(evt.currentTarget.dataset.index);
		let str = 'menu.' + i + '.open';
		if(this.menu[i].submenu) {
			this._url = this.menu[i].url;
			evt.preventDefault();
			this.set(str,true);
		} else {
			this._url = location.hash;
			this._addOpenAttr();
			this.set(str,false);
		}

	}

	_reduce(evt){
		document.body.classList.toggle('main-sidebar-small');
	}



	/*---------- 
	METHODS
	----------*/
	_iosMenu(){
		document.querySelector('body main').addEventListener('click', (evt) => {
			switch(evt.target.nodeName){
				case 'INPUT':
				case 'BUTTON':
				case 'TEXTAREA':
				case 'LABEL':
				case 'SELECT':
					return true;
					break;
				default:
					this.$$('#logo a').focus();
					break;
			}
		});
	}



	/*---------- 
	OBSERVERS
	----------*/
	_addOpenAttr(){
		this.menu.map((e,i) => {
			this.set('menu.' + i + '.open', false);
		});
	}



	/*---------- 
	COMPUTE
	----------*/
	_computeActive(url,link,open){
		let arr = [];
		open ? arr.push('open','active') : null;
		url.search(link) > -1 ? arr.push('active') : null;
		return arr.join(' ');
	}

	_computeTitleIcon(icon){
		return ['clab',icon].join(' ');
	}

	_computeReduceIcons(classes){
		return classes;
	}

}


Polymer(MenuClabOld);