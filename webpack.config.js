

// Проверяем в каком режиме запущен npm (prod или dev)
const
    isProd = process.env.NODE_ENV === 'production'; // true or false

// Выбераем какие source map подгружать
const
    sourceMap = isProd ? 'nosources-source-map' : 'eval-source-map';


//============================================================
// Подключение плагинов и прочего
const
    path                  = require('path'),                       // для работы с папками
    webpack               = require('webpack'),
    CleanWebpackPlugin    = require('clean-webpack-plugin'),       // для удаления файлов
    HtmlWebpackPlugin     = require('html-webpack-plugin'),        // для експорта и минификации HTML
    ExtractTextPlugin     = require('extract-text-webpack-plugin'),// для извлечеиня из bundel в одельный файл
    FaviconsWebpackPlugin = require('favicons-webpack-plugin');    // генератор фавикон

// Папки для разработки и релизу
const
    production = 'dist',
    develop    = 'src',

    DIST_DIR   = path.join(__dirname, production),
    SRC_DIR    = path.join(__dirname, develop);


//============================================================
// Конфигурацыи (настройки) для плагинов


//подключаем библиотеки ГЛОБАЛЬНО! // если не хочем писать import  from
//но не проверяно как отрабатывает кеширование
/*
const
    provideVendorGlob = new webpack.ProvidePlugin({
      $:        'jquery',
      React:    'react',
      ReactDOM: 'react-dom',
    });
*/


//вариант как подключить динамически все библиотеки чтоб не писать ручками
/*
const
    chunkVendor = new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({resource}) => /node_modules/.test(resource),
    });
*/


//удаляем концевою папку для релиза чтоб не было конфликтов наверно
const
    cleanFolderProd = new CleanWebpackPlugin(production);


//магия кеширования отдельно: наши модули(commons) + библиотеки(vendor) + настройки webpack
const
    commonsChunk = new webpack.optimize.CommonsChunkPlugin({
      name: ['commons', 'vendor', 'webpack'],
    });


//генеируем фавиконки https://github.com/evilebottnawi/favicons#usage
const
    favicons = new FaviconsWebpackPlugin({
      // Your source logo
      logo: `./${develop}/favicon/logo.png`,
      // The prefix for all image files (might be a folder or a name)
      prefix: 'favicon/',
      // Emit all stats of the generated icons
      emitStats: false,
      // Generate a cache file with control hashes
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color
      background: '#fff',
      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: true
      }
    });


//компилируем (создаем) index.html 
const
    htmlIndex = new HtmlWebpackPlugin({
      template: path.join(__dirname, develop, 'index.html'),
      inject: 'body',
      hash: true,                       // для кеширования скриптов
      filename: 'index.html',
      chunks: ['index', 'commons', 'vendor', 'webpack'],
      //excludeChunks: ['second']       // или указать какой кусок не нужно
    });


//достаем (создаем) наш готовый css из [name].bundle.js
const
    extractCss = new ExtractTextPlugin({
      disable: !isProd,
      filename: 'style/[name].[chunkhash].css',
    });


//минифицыруем js
//Parallelization can speedup your build significantly and is therefore highly recommended
const
    uglifyJs = new webpack.optimize.UglifyJsPlugin({
      parallel: {cache: true, workers: 2},
      sourceMap: true,
    });


//not include all the extra code used in development
//react рекомендует добавлять етот плагин, для концевои сборки чтоб уменшить вес библиотеки
const
    definePlugin = new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')},
    });


//============================================================
// Конфигурации (настройки) для модуля


//HTML Config
//минифицируем толька когда production isProd === true
const
    htmlConfig = [
      {
        loader: 'html-loader',
        options: {minimize: isProd},
      }];


//CSS Config
//для разработки (транспилируем sass в css)
const
    cssDev = ['css-loader', 'sass-loader'];

//для сборки (sass в css + минифицируем + автопрефикс)
const
    cssProd = [
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins() { return [require('autoprefixer'), require('cssnano')]; },
        },
      },
      'sass-loader',
    ];

//ввыбор конфигурации для CSS
const
    cssConfig = isProd ? cssProd : cssDev;


//Font Config выгружаем шрифты
const
    fontConfig = [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'font/'
        },
      }];


//IMG Config
//для разработки (выгружаем картинки)
const
    imgDev = [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/',
        },
      }];

//для сборки (выгружаем картинки + минифицируем)
const
    imgProd = [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/',
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          optipng: {optimizationLevel: 7},
          pngquant: {quality: '65-90', speed: 4},
          mozjpeg: {progressive: true, quality: 65},
        },
      },
    ];

//ввыбор конфигурации для IMG
const
    imgConfig = isProd ? imgProd : imgDev;


//============================================================
//Модуль WebPack

const
    config = {

      devtool: sourceMap,                            //выбираем тип карт

      entry: {
        vendor: ['jquery', 'react', 'react-dom'],   //бандел c библиотеками
        index: SRC_DIR + '/js/index.js',            //бандел для index.html
      },

      output: {
        path: DIST_DIR + '/',                             //концевая папка сборки
        filename: 'js/[name].[chunkhash].bundle.js',     //папка js с entry + hach для кеша
        sourceMapFilename: 'sourceMapFile/[file].map', //папка для source map
      },

      module: {
        rules: [
          //HTML - Loader
          {
            include: SRC_DIR,                       //тока папка разработки
            test: /\.html$/,                        //берем все .html файлы
            use: htmlConfig,                        //перерабатываем их
          },
          //CSS - Loader
          {
            include: path.resolve(__dirname, 'src/style/'),//тока папка style
            test: /\.scss$/,                               //берем sass файлы
            use: ExtractTextPlugin.extract({               //достаем (создаем) css файлы
              fallback: 'style-loader',                    //процес снизу в верх или справа на лево !!!
              use: cssConfig,                              //компилируем в css файлы
              publicPath: '../',                           //очень важно указать!!!
            }),
          },
          //Font - используя file-loader
          {
            include: path.resolve(__dirname, 'src/font/'),
            test: /\.(woff|woff2|svg)$/,
            use: fontConfig,
          },
          //JS & JSX - Loader
          {
            include: path.resolve(__dirname, 'src/js/'), //тока папка js
            test: /\.(js|jsx)$/,                         //берем js и jsx файлы
            use: 'babel-loader',                         //конфик в package.json
          },
          //IMG используя file-loader
          {
            include: path.resolve(__dirname, 'src/img/'), //тока папка разработки
            test: /\.(jpg|png|svg)$/,                     //берем jpg,png,svg файлы
            use: imgConfig,                               //подгружаем картинки / перебрасываем
          },
        ],
      },

      //Настройки для webpack-dev-server
      devServer: {
        port: 9000,                             //выбор порта
        open: true,                             //автоматически открыть окно
        stats: 'errors-only',                   //в консоль тока ошибки показывать
      },

      //shortcuts
      //для относительных путей запись ~root/../.. (css!!!)
      //для абсолютных путе запись root/../.. (js)
      resolve: {
        alias: {
          'root': path.resolve(__dirname, develop),
        },
      },

      plugins: isProd
          ? //плагины для production
          [
            //provideVendorGlob,                      //включаем библиотеки ГЛОБАЛЬНО!
            cleanFolderProd,                        //удаляем для сборки
            commonsChunk,                           //кешируем модули(commons)(vendor)(webpack)
            favicons,                               //генерируем фавиконки (кешируються)
            htmlIndex,                              //компилируем index.html
            extractCss,                             //компилируем css
            definePlugin,                           //облегчаем библиотеки
            uglifyJs,                               //уродуем js
          ]
          : //плагины для develop
          [
            //provideVendorGlob,                      //включаем библиотеки ГЛОБАЛЬНО!
            commonsChunk,                           //кешируем модули(commons)(vendor)(webpack)
            htmlIndex,                              //компилируем index.html
            extractCss,                             //компилируем css
          ],
    };

module.exports = config;
