/**
 * Обработка представлений
 */
module.exports = (gulp, plugins, config) => (done) => {
  if (config.dataPath) {
    let dataPath = config.dataPath;
    delete require.cache[require.resolve(dataPath)];
    let data = require(dataPath);
    Object.assign(config.engineOptions, {
      locals: data
    });
  }

  return plugins.combiner(
    gulp.src(config.src, { since: gulp.lastRun(config.taskName) }),
    // plugins.rename(path => {
    //   let { dirname, basename } = path;
    //   path.basename = basename === 'index' ? dirname : `${dirname}-${basename}`;
    //   path.dirname = '.';
    // }),
    plugins.pug(config.engineOptions),
    plugins.prettify(config.prettify),
    plugins.rename(path => {
      let { dirname, basename } = path;
      path.basename = basename === 'index' ? dirname : `${dirname}-${basename}`;
      path.dirname = '.';
    }),
    gulp.dest(config.dest),
    plugins.if(
      !!plugins.browserSync.active,
      // plugins.browserSync.stream({
      //   once: true
      // }),
      plugins.browserSync.stream(),
      plugins.util.noop()
    )
  ).on('error', config.onError);
}
