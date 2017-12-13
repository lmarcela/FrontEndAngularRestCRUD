# FrontEndAngularRestCRUD

- Proyecto Angular con uso de Bootstrap y conexion a proyecto JAVA con uso de Spring Framework y base de datos h2. El backEnd esta disponible en: https://github.com/lmarcela/BackEndSpringRestCRUD

- Proyecto basado en https://www.youtube.com/watch?v=ioYJx-rNNoI&index=1&list=PLF0fAweo0Kogzy5I6LxEaIlJAxVORXZm-

## Vistas

### Vista en dispositivo movil
	
![Vista en dispositivo movil](https://github.com/lmarcela/FrontEndAngularRestCRUD/blob/master/src/assets/img/readme/1.png)

### Vista Normal
	
![Vista normal](https://github.com/lmarcela/FrontEndAngularRestCRUD/blob/master/src/assets/img/readme/2.png)

### Vista de edición de datos
	
![Vista de edición de datos](https://github.com/lmarcela/FrontEndAngularRestCRUD/blob/master/src/assets/img/readme/3.png)

### Vista de nuevo usuario
	
![Vista de nuevo usuario](https://github.com/lmarcela/FrontEndAngularRestCRUD/blob/master/src/assets/img/readme/4.png)



## Comandos de utilidad

Nota: Al crear repositorio en GitHub dice:

	…or create a new repository on the command line

    echo "# FrontEndAngularRestCRUD" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/lmarcela/FrontEndAngularRestCRUD.git
    git push -u origin master
    …or push an existing repository from the command line

    git remote add origin https://github.com/lmarcela/FrontEndAngularRestCRUD.git
    git push -u origin master
    …or import code from another repository
    You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

### COMANDOS PARA GIT

	VERSION: git --version
	USUARIO: git config --global user.name "Marcela Malaver"
	EMAIL: git config --global user.email "marcela9409@gmail.com"
	ALIAS PARA LOGIN: git config --global alias.lg "log --oneline --decorate --all --graph"
	ALIAS PARA STATUS: git config --global alias.s "status -s"
	VER URL REPOSITORIO: git remote -v
	PONER URL REPOSITORIO: git remote add origin https://github.com/lmarcela/BackEndSpringRestCRUD.git
	SUBIR CAMBIOS: git push -u origin master
	
	VER ESTADO DE GIT: git s
	AÑADIR ARCHIVOS AL GIT: git add .
	CREAR COMMIT CON MENSAJE: git commit -m "ESTE ES MI MENSAJE"
	SUBIR AL REPOSITORIO (REVISAR PRIMERO URL DEL REPOSITORIO): git push -u origin master
	
	REVERSAR CAMBIOS EN EL GIT: git checkout -- .

#### GUIA PARA CAMBIAR DE REPOSITORIO EN GIT
	FrontEndAngularRestCRUD>git remote -v
	origin  https://github.com/lmarcela/BackEndSpringRestCRUD.git (fetch)
	origin  https://github.com/lmarcela/BackEndSpringRestCRUD.git (push)
	
	FrontEndAngularRestCRUD>git remote rm origin
	
	FrontEndAngularRestCRUD>git remote -v
	
	FrontEndAngularRestCRUD>git remote add origin https://github.com/lmarcela/FrontEndAngularRestCRUD.git
	
	FrontEndAngularRestCRUD>git remote -v
	origin  https://github.com/lmarcela/FrontEndAngularRestCRUD.git (fetch)
	origin  https://github.com/lmarcela/FrontEndAngularRestCRUD.git (push)
	
### COMANDOS ANGULAR
	
	INICIAR SERVIDOR (EN LA CARPETA DEL PROYECTO): ng serve -o
	CREAR COMPONENTE SIN ARCHIVOS CSS Y SPEC: ng g c components/listuser --spec false -is
	CREAR CLASE: ng g class model/user
	CREAR SERVICIO SIN SPEC: ng g s services/user --spec false 
	PONER EN PRODUCCION: ng build --env=prod --prod
	HTTP-SERVER (SOLO LA PRIMERA VEZ): https://www.npmjs.com/package/http-server (npm install http-server -g)
	EN LA CARPETA DIST DEL PROYECTO: http-server -o 
	
	
	CREAR PROYECTO ANGULAR (RESTCLIENT): ng new FrontEndAngularRestCRUD
	ABRIR PROYECTO EN VSCODE DESDE CONSOLA (Dentro de la carpeta del proyecto Angular): code . 
	INSTALAR BOOTSTRAP CON NODEJS(Dentro de la carpeta del proyecto Angular): npm install bootstrap@next --save
