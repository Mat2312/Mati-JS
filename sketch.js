function preload() {
    img = loadImage("imagem.jpeg")
  }
  
  function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(36,36,36);
    
    noStroke();
    
    fill(0)
    rect(0,0,800,100)
    
    fill(248,248,255);
    textStyle(BOLD)
    textFont('Courier New');
    textSize(60);
    text("Supra Fit",400,65);
    
    fill(245,255,250);
    ellipse(50,50,80,80);
  
    
    textSize(26);
    textAlign(CENTER);
    fill(25,25,112);
    textFont('Verdana')
    textStyle(BOLDITALIC)
    text("Musculação",200,435);
    text("Acessórios", 200,285);
    
  
     button = createButton('Acessorios');{
  
    button.position(100,250);
  
    button.style('background-color', '#F8F8FF'); // Branco
  
    button.style('color', '#363636'); // Azul
  
    button.style('font-size', '15px');
      
    button.size(200, 50);
       
    button.show();
       
    button.style('border-radius', '10px');
       
    button.style('border-color', 'black');
       
    button.style('border-width', '3px');
       
     button.style('font-family', 'Verdana'); 
       
    button.style('font-size', '26px'); 
       
    button.style('font-style', 'italic');
       
    button.style('font-weight', 'bold'); 
       
    button.mousePressed(Acessorios);
  }
    
     function Acessorios() {
  
    // Redirecionar para outra página
  
    window.location.href = "https://www.suprafit.com.br/acessorios";
       
    }
    
     
     button = createButton('Musculação');{
  
    button.position(100,400);
  
    button.style('background-color', '#F8F8FF'); // Branco
  
     button.style('color', '#363636');
  
    button.style('font-size', '15px');
      
    button.size(200, 50);
       
    button.show();
       
    button.style('border-radius', '10px');
       
    button.style('border-color', 'black');
       
    button.style('border-width', '3px');
       
     button.style('font-family', 'Verdana'); 
       
    button.style('font-size', '26px'); 
       
    button.style('font-style', 'italic');
       
    button.style('font-weight', 'bold'); 
       
    button.mousePressed(Musculação);
  }
    
     function Musculação() {
  
    // Redirecionar para outra página
  
    window.location.href = "https://www.suprafit.com.br/musculacao";
    
     }
    
       button = createButton('Usados');{
  
    button.position(500,250);
  
    button.style('background-color', '#F8F8FF'); // Branco
  
     button.style('color', '#363636');
  
    button.style('font-size', '15px');
      
    button.size(200, 50);
       
    button.show();
       
    button.style('border-radius', '10px');
       
    button.style('border-color', 'black');
       
    button.style('border-width', '3px');
       
     button.style('font-family', 'Verdana'); 
       
    button.style('font-size', '26px'); 
       
    button.style('font-style', 'italic');
       
    button.style('font-weight', 'bold'); 
       
    button.mousePressed(Usados);
  }
    
     function Usados() {
  
    // Redirecionar para outra página
  
    window.location.href = "https://www.suprafit.com.br/usados";
    
     }
    
       button = createButton('Bikes');{
  
    button.position(500,400);
  
    button.style('background-color', '#F8F8FF'); 
         
   button.style('color', '#363636'); // Azul
  
    button.style('font-size', '15px');
      
    button.size(200, 50);
       
    button.show();
       
    button.style('border-radius', '10px');
       
    button.style('border-color', 'black');
       
    button.style('border-width', '3px');
       
     button.style('font-family', 'Verdana'); 
       
    button.style('font-size', '26px'); 
       
    button.style('font-style', 'italic');
       
    button.style('font-weight', 'bold'); 
       
    button.mousePressed(Bikes);
  }
    
     function Bikes() {
  
    // Redirecionar para outra página
  
    window.location.href = "https://www.suprafit.com.br/bikes-ergometricas";
    
     }
    
    image(img,10,5,90,90)
  
  }