import $ from 'jquery';

const F__initRipples = ((window, document, undefined) => {
  const F__initRipples = () => {
    $(window, document, undefined).ready(function() {

      const $ripples = $('.ripples');

      $ripples.on('click.Ripples', function(e) {

        const $this = $(this);
        const $offset = $this.parent().offset();
        const $circle = $this.find('.ripplesCircle');

        const x = e.pageX - $offset.left;
        const y = e.pageY - $offset.top;

        $circle.css({
          top: y + 'px',
          left: x + 'px',
        });

        $this.addClass('is-active');

      });

      $ripples.on(
          'animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd',
          function(e) {
            $(this).removeClass('is-active');
          });

    });
  };
  return F__initRipples;
})(window, document, undefined);

export default F__initRipples;