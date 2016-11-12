import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'header',

	textboxResizese: Ember.on('didInsertElement', function() {
		//el.removeEventListener('click', ScrollTop, false);
    //el.addEventListener('click', ScrollTop, false);

    var leftbtn = this.$('button.left, .btn.left, a.left')[0];
    var rightbtn = this.$('button.right, .btn.right, a.rigth')[0];
    if (typeof leftbtn === 'undefined') {
        leftbtn = {
            offsetWidth: 0,
            className: ''
        };
    }
    if (typeof rightbtn === 'undefined') {
        rightbtn = {
            offsetWidth: 0,
            className: ''
        };
    }

    var margin = Math.max(leftbtn.offsetWidth, rightbtn.offsetWidth);

    this.$('h1').css({
    	marginLeft: margin + 'px',
    	marginRight: margin + 'px'
    });

    /*
    var tooLong = (el.offsetWidth < el.scrollWidth) ? true : false;
    if (tooLong) {
        if (leftbtn.offsetWidth < rightbtn.offsetWidth) {
            el.style.marginLeft = leftbtn.offsetWidth + 'px';
            el.style.textAlign = 'right';
        } else {
            el.style.marginRight = rightbtn.offsetWidth + 'px';
            el.style.textAlign = 'left';
        }
        tooLong = (el.offsetWidth<el.scrollWidth) ? true : false;
        if (tooLong) {
            if (new RegExp('arrow').test(leftbtn.className)) {
                clearNode(leftbtn.childNodes[1]);
                el.style.marginLeft = '26px';
            }
            if (new RegExp('arrow').test(rightbtn.className)) {
                clearNode(rightbtn.childNodes[1]);
                el.style.marginRight = '26px';
            }
        }
    }
    */

	})

});
