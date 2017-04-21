angular.module('myApp').animation('.adds-Dir', function() {
                return {
                    enter: function(element, done) {
											console.log('hits')
                        TweenMax.to(element, 1, {
                            x: 500,
                            autoAlpha: 0,
                            scale: 0.5,
                            onComplete: done
                        });
                    },
                    leave: function(element, done) {
                        TweenMax.to(element, 1, {
                            x: 500,
                            autoAlpha: 0,
                            scale: 0.5,
                            onComplete: done
                        });
                    }
                }});
