Q3D.Config.viewpoint = {lookAt:{x:2207947.700820381,y:427933.99264604243,z:0.0},pos:{x:2207967.849142518,y:427403.35972285125,z:309.82486309348667}};
              Q3D.Config.localMode = true;
              
              var container = document.getElementById("view"),
                  app = Q3D.application,
                  gui = Q3D.gui;
              
              app.init(container);    // initialize viewer
              
              // load the scene
              app.loadSceneFile("https://storage.yandexcloud.net/granitmasterplan40222esp/htmlQgisViewer16042022/data/04-02-22_ESPMG_granit2/scene.js", function (scene) {
                // scene file has been loaded
                app.start();
              
                gui.dat.initLayersFolder(scene);
              
              }, function (scene) {
                // all relevant files have been loaded
              
                if (Q3D.Config.gui.customPlane) {
                  var zMin = undefined,
                      zMax = undefined;
                  gui.dat.initCustomPlaneFolder(zMin, zMax);
                }
              });