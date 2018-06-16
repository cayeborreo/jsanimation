window.addEventListener('load', function() {
    var coke = document.querySelector("#coke img");
    var cokeStop = [];
    var cokeMoving = [
      { transform: 'translateY(0)' }, 
      { transform: 'translateX(30px)' },
      { transform: 'translateY(0)' }, 
    ];
  
    var cokeTiming = {
      duration: 100,
      iterations: Infinity
    };

    var cokeAnimation = coke.animate(cokeMoving, cokeTiming);
    cokeAnimation.pause();

    document.getElementById('shake1').addEventListener('click', function() { 
        cokeAnimation.play();
      });
      
      document.getElementById('shake2').addEventListener('click', function() { 
        cokeAnimation.play(); 
      }); 
    
      document.getElementById('shake3').addEventListener('click', function() { 
        cokeAnimation.reverse(); 
      });
    
      document.getElementById('stop').addEventListener('click', function() { 
        cokeAnimation.cancel(); 
      }); 
    });

  