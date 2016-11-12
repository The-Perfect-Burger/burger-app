export default function () {
  const duration = 300;
  const animation = {
    duration: 300,
    easing: 'easeInOutCubic'
  };

  this.transition(
    // this.childOf('div[class*="post-actions"]'),
    // this.toValue(true),
    this.hasClass('post-actions-animation'),
    this.toValue(function(toValue, fromValue) {
      return toValue.index > fromValue.index;
    }),
    this.use('toLeft', animation)
  );

  this.transition(
    this.hasClass('post-actions-animation'),
    this.toValue(function(toValue, fromValue) {
      return toValue.index < fromValue.index;
    }),
    this.use('toRight', animation)
  );

  this.transition(
    this.toRoute(['reviews.create']),
    this.use('up'),
    this.reverse('down')
  );

  this.transition(
    this.matchSelector('#modal-backdrop'),
    this.use('fade', animation)
  );


  this.transition(
    this.hasClass('start-review'),
    this.fromValue(value => value === null),
    this.toValue(value => value === true),
    this.use('toUp'),
    this.reverse('toDown', animation)
  );

}
