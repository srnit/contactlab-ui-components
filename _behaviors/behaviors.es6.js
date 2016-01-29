let UtilBehavior={

	_dashify:(str)=>{
		return str.toLowerCase().replace(/ /g,'-');
	},

	_viewLabel:(label)=>{
		if(label!=undefined && label.length>0) return true; else return false;
	},

	_getIndex:(item, items)=>{
		return items.indexOf(item);
		/*items.map((el, i)=>{
			if ( JSON.stringify(el) == JSON.stringify(item) ) {
	            return i;
	        }
		});
	    return -1;*/
	}
};


let AnimationsBehavior={
	_onAnimationComplete:(elem, fn)=>{
		if(elem.finished){
			elem.finished.then(fn);
		} else {
			elem.onfinish = fn;
		}
	}
}
