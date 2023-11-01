import gulp from "gulp";
import '../gulpfile.js';
function compile() {
  const taskInstance = gulp.task('compile');
  if (taskInstance === undefined) {
    console.error('no task named compile registered');
    return;
  }
  taskInstance.apply(gulp);
}

compile()