…or create a new repository on the command line

echo "# BackEndSpringRestCRUD" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/lmarcela/BackEndSpringRestCRUD.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/lmarcela/BackEndSpringRestCRUD.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.


CREAR PROYECTO ANGULAR (RESTCLIENT): ng new FrontEndAngularRestCRUD (Creado dentro de la carpeta \src\main\resources).
ABRIR PROYECTO EN VSCODE DESDE CONSOLA: code . (Dentro de la carpeta src\main\resources\FrontEndAngularRestCRUD).


ANGULAR:
- CREAR CLASE: ng g class user
- CREAR COMPONENTE SIN ARCHIVOS CSS Y SPEC: ng g c components/listuser --spec false -is
- CREAR SERVICIO SIN SPEC: ng g s services/user --spec false 
https://www.youtube.com/watch?v=mnzMx3hh6rg&list=PLF0fAweo0Kogzy5I6LxEaIlJAxVORXZm-&index=2