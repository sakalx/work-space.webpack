import $ from 'jquery';

const F__initInputfield = ((window, document, undefined) => {
  const F__initInputfield = () => {
    $(window, document, undefined).ready(function() {

      $('input').blur(function() {
        const $this = $(this);
        if ($this.val())
          $this.addClass('used');
        else
          $this.removeClass('used');
      });

    });
  };
  return F__initInputfield;
})(window, document, undefined);

export default F__initInputfield;