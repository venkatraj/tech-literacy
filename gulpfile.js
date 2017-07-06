var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');   
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');   
var rename = require('gulp-rename'); 
var cache = require('gulp-cache');
var del = require('del');  
var wpPot = require('gulp-wp-pot'); // For generating the .pot file.
var sort = require('gulp-sort'); // Recommended to prevent unnecessary changes in pot-file.  
var zip = require('gulp-zip'); 
 

/* zip file */
gulp.task('zip', function () { 
  return gulp.src(['./**','!./{node_modules,node_modules/**}','!./{dist,dist/**}','!./{sass,sass/**}','!./{.git,.git/**}','!gulpfile.js','!package.json','!package-lock.json','!.gitignore'])
    .pipe(zip('tech-literacy.zip')) 
    .pipe(gulp.dest('./dist'));  
}); 
    
          
/* Translate .pot file */ 
gulp.task( 'translate', function () {   
     return gulp.src( './**/*.php')
       .pipe(sort())
       .pipe(wpPot( {
           domain        : 'tech-literacy',
           destFile      : 'tech-literacy.pot',
           package       : 'Tech Literacy'
       } ))
      .pipe(gulp.dest('languages/tech-literacy.pot'))
});       
           
     
//Script task
gulp.task('scripts',function(){  
   gulp.src('dist/js/*.js')
   //.pipe(concat('all.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('js'));   
});  

 
//styles task
gulp.task('styles',function(){  
    gulp.src(['sass/**/*.scss'])
   .pipe(sass())  
   .pipe(autoprefixer())
   .pipe(gulp.dest(''));      
}); 
   
// Optimizing Images   
gulp.task('images', function() {
   gulp.src('dist/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({      
      interlaced: true, 
    })))  
    .pipe(gulp.dest('images'));  
});
     


// Clean
gulp.task('clean', function() {
  return del(['images']);    
}); 


// Default task
gulp.task('default',['clean'] , function() {
  gulp.start('styles', 'images', 'translate');
});   


//watch task
gulp.task('watch',function(){  
   gulp.watch('sass/**/*.scss',['styles']);    
   gulp.watch('dist/images/**/*.+(png|jpg|jpeg|gif|svg)',['images']);
});




