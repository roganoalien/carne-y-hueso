# carne-y-hueso
Sitio de carne y hueso hecho con grav CMS que es gratuito para utilizar
# Carpeta ASSETS
Todo lo que está aquí adentro es antes de que se procese todo para que funcione en producción (minify, uglify, etc)
#Cosas a configurar que faltan
.htaccess para remover las terminaciones de html y configuración de gulp
#GULP
-JS uglify
-CSS minify
-IMG minify
#SEO
Agregar el meta description, metas de redes sociales y demás. SITEMAP

#Funciones extras
-Agregar Loader 	$(image).load(function() { // ...}); para detectar cuando las imágenes grandes terminan de cargar
-Agregar el onscreen add Class para que cuando los objetos estén en el viewport aparezcan con un fade o slide sencillo 
-Agregar la animación de inicio del logo
//Parece que este es el plugin de in viewport
// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(".box").inViewport(function(px){
    if(px) $(this).addClass("triggeredCSS3") ;
});
#Responsive Menú
Sliding from right on top from everything
https://www.youtube.com/watch?v=1lmFMsrLgwM