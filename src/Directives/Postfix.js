const Postfix = {
  name: 'postfix',
  bind (el, {value: options}) {
    if (el.value != '') {
      el.value = el.value + options;
    }
    if (options != undefined) {
      el.addEventListener('focus', function(){
        if (el.value != '' && el.value.slice(-options.length) == options){
          el.value = el.value.substring(0, el.value.length - options.length)
        }
      });
      el.addEventListener('blur', function(){
        if (el.value != ''){
          el.value = el.value + options;
        } 
      });
    }
  },
};

export default Postfix;